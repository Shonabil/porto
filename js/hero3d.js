import { Project, Scene3D, THREE } from '../lib/enable3d.framework.module.min.js';

class HeroScene extends Scene3D {
  constructor() {
    super('hero-scene');
    this.THREE = THREE;
    this.mouse = { x: 0, y: 0 };
    this.mouseTarget = { x: 0, y: 0 };
  }

  async create() {
    // Lights: warm key + cool fill + rim for depth
    const hemi = new THREE.HemisphereLight(0xffffff, 0x444488, 0.85);
    this.scene.add(hemi);

    const dir = new THREE.DirectionalLight(0xfff2e0, 1.6);
    dir.position.set(5, 8, 7);
    this.scene.add(dir);

    const cool = new THREE.DirectionalLight(0x9db4ff, 0.5);
    cool.position.set(-6, 2, -6);
    this.scene.add(cool);

    const rim = new THREE.DirectionalLight(0xffffff, 0.6);
    rim.position.set(-3, -4, -5);
    this.scene.add(rim);

    this.camera.position.set(0, 0.25, 7.4);
    this.camera.lookAt(0, 0, 0);

    // Materials
    const gold = new THREE.MeshStandardMaterial({
      color: 0xc8a27a,
      metalness: 0.9,
      roughness: 0.18,
      emissive: 0x2a1f14,
      emissiveIntensity: 0.3,
    });
    const goldSoft = new THREE.MeshStandardMaterial({
      color: 0xc8a27a,
      metalness: 0.3,
      roughness: 0.5,
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
    });
    const dark = new THREE.MeshStandardMaterial({
      color: 0x3a2f38,
      metalness: 0.65,
      roughness: 0.32,
    });
    const wire = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.25,
      roughness: 0.6,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
      depthWrite: false,
    });

    // ── Centre piece: layered torus knot ──
    this.knotGroup = new THREE.Group();

    const knot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(1.0, 0.3, 220, 32),
      gold,
    );
    this.knotGroup.add(knot);

    const shell = new THREE.Mesh(
      new THREE.TorusKnotGeometry(1.55, 0.52, 120, 20),
      goldSoft,
    );
    shell.rotation.x = Math.PI / 2;
    this.knotGroup.add(shell);

    const halo = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.05, 1),
      wire,
    );
    this.knotGroup.add(halo);

    this.scene.add(this.knotGroup);

    // ── Rings (independent, faster orbit) ──
    this.ringA = new THREE.Mesh(
      new THREE.TorusGeometry(2.55, 0.016, 12, 150),
      dark,
    );
    this.ringA.rotation.x = Math.PI / 2;
    this.scene.add(this.ringA);

    this.ringB = new THREE.Mesh(
      new THREE.TorusGeometry(2.95, 0.011, 12, 150),
      dark,
    );
    this.ringB.rotation.z = Math.PI / 2.4;
    this.scene.add(this.ringB);

    // ── Orbiting gems on conic paths ──
    this.orbits = [];
    const orbiterCount = 12;
    for (let i = 0; i < orbiterCount; i++) {
      const geo = i % 3 === 0
        ? new THREE.OctahedronGeometry(0.13)
        : i % 3 === 1
          ? new THREE.TetrahedronGeometry(0.15)
          : new THREE.IcosahedronGeometry(0.1);
      const mat = i % 3 === 0 ? gold : dark;
      const orb = new THREE.Mesh(geo, mat);
      this.scene.add(orb);
      this.orbits.push({
        mesh: orb,
        angle: (i / orbiterCount) * Math.PI * 2,
        speed: 0.32 + (i % 4) * 0.15,
        radius: 2.55 + (i % 5) * 0.32,
        tilt: (i % 7) * 0.42,
        phase: i * 1.7,
      });
    }

    // ── Two dust layers for parallax depth ──
    const makeDust = (count, spread, size, opacity, color) => {
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const r = 3.1 + Math.random() * spread;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.5;
        positions[i * 3 + 2] = r * Math.cos(phi);
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const mat = new THREE.PointsMaterial({
        color,
        size,
        transparent: true,
        opacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const points = new THREE.Points(geo, mat);
      this.scene.add(points);
      return points;
    };

    this.dustNear = makeDust(140, 2.2, 0.045, 0.6, 0xc8a27a);
    this.dustFar = makeDust(110, 3.6, 0.028, 0.4, 0xa9b8e8);

    this.setSize(this.parent.clientWidth, this.parent.clientHeight);
    this._mouseListeners();
  }

  _mouseListeners() {
    const onMove = (e) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      this.mouseTarget.x = nx;
      this.mouseTarget.y = ny;
    };
    window.addEventListener('mousemove', onMove);
    this._cleanup = () => window.removeEventListener('mousemove', onMove);
  }

  dispose() {
    if (this._cleanup) this._cleanup();
    if (super.dispose) super.dispose();
  }

  update(time) {
    const t = this.clock ? this.clock.getElapsedTime() : time;

    // Damped mouse follow → slow, premium parallax
    this.mouse.x += (this.mouseTarget.x - this.mouse.x) * 0.035;
    this.mouse.y += (this.mouseTarget.y - this.mouse.y) * 0.035;

    const targetX = this.mouse.x * 0.65;
    const targetY = 0.25 + this.mouse.y * 0.4;
    this.camera.position.x += (targetX - this.camera.position.x) * 0.05;
    this.camera.position.y += (targetY - this.camera.position.y) * 0.05;
    this.camera.lookAt(
      this.mouse.x * 0.3,
      -this.mouse.y * 0.2,
      0,
    );

    // Centre piece
    if (this.knotGroup) {
      this.knotGroup.rotation.y = t * 0.22;
      this.knotGroup.rotation.x = Math.sin(t * 0.18) * 0.22 + Math.PI * 0.05;
      this.knotGroup.position.y = Math.sin(t * 0.55) * 0.12;
    }

    // Rings
    if (this.ringA) {
      this.ringA.rotation.x = Math.PI / 2 + t * 0.12;
      this.ringA.rotation.z = t * 0.1;
    }
    if (this.ringB) {
      this.ringB.rotation.x = t * 0.22;
      this.ringB.rotation.z = t * 0.16 + Math.PI / 2.4;
    }

    // Orbiting gems
    if (this.orbits) {
      this.orbits.forEach((o, i) => {
        o.angle += o.speed * 0.014;
        const x = Math.cos(o.angle) * o.radius;
        const z = Math.sin(o.angle) * o.radius;
        const y = Math.sin(t * 0.75 + o.phase) * 0.5;
        const tx = x * Math.cos(o.tilt) - z * Math.sin(o.tilt);
        const tz = x * Math.sin(o.tilt) + z * Math.cos(o.tilt);
        o.mesh.position.set(tx, y, tz);
        o.mesh.rotation.x = t * 0.7 + i;
        o.mesh.rotation.y = t * 0.5 + i;
      });
    }

    // Dust layers rotate at slightly different speeds (parallax)
    if (this.dustNear) {
      this.dustNear.rotation.y = t * 0.02;
      this.dustNear.material.opacity = 0.45 + Math.sin(t * 0.6) * 0.15;
    }
    if (this.dustFar) {
      this.dustFar.rotation.y = -t * 0.014;
      this.dustFar.material.opacity = 0.28 + Math.cos(t * 0.45) * 0.12;
    }
  }
}

function boot() {
  const mount = document.getElementById('hero-3d');
  if (!mount || !window.WebGLRenderingContext) return;

  try {
    const project = new Project({
      scenes: [HeroScene],
      antialias: true,
      usePhysics: false,
      parent: 'hero-3d',
      alpha: true,
    });
    window.__hero3d = project;

    function onResize() {
      const scene = Array.from(project.scenes.values())[0];
      if (!scene) return;
      scene.setSize(mount.clientWidth, mount.clientHeight);
      project.renderer.setPixelRatio(Math.max(1, window.devicePixelRatio / 2));
    }
    window.addEventListener('resize', onResize);
  } catch (e) {
    console.warn('enable3d failed to start:', e);
    if (mount) mount.remove();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}