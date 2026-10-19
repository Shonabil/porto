import { Project, Scene3D, THREE } from '../lib/enable3d.framework.module.min.js';

class BoxesHoverScene extends Scene3D {
  constructor() {
    super('boxes-hover');
    this.THREE = THREE;
    this.mouse = { x: 0, y: 0 };
    this.boxes = [];
    this.hovered = null;
  }

  async create() {
    const hemi = new THREE.HemisphereLight(0xffffff, 0x2a1f14, 0.95);
    this.scene.add(hemi);

    const key = new THREE.DirectionalLight(0xfff2e0, 1.5);
    key.position.set(5, 9, 7);
    this.scene.add(key);

    const fill = new THREE.DirectionalLight(0x9db4ff, 0.45);
    fill.position.set(-6, 2, -5);
    this.scene.add(fill);

    const rim = new THREE.DirectionalLight(0xffffff, 0.5);
    rim.position.set(-4, -3, -6);
    this.scene.add(rim);

    this.camera.position.set(0, 0.4, 10.2);
    this.camera.lookAt(0, 0, 0);

    const geo = new THREE.BoxGeometry(1, 1, 1);
    const count = 64;
    const maxR = 4.1;

    for (let i = 0; i < count; i++) {
      const ang = Math.random() * Math.PI * 2;
      const r = Math.sqrt(Math.random()) * maxR;
      const n = r / maxR;

      const x = Math.cos(ang) * r;
      const y = Math.sin(ang) * r * 0.82;
      const z = (Math.random() - 0.5) * 1.6;

      const falloff = Math.pow(1 - n, 1.4);

      const size = 0.42 + Math.random() * 0.55;
      const stretchY = 0.8 + Math.random() * 0.7;

      const hue = 0.085 - n * 0.03;
      const sat = 0.5 - n * 0.2;
      const light = 0.72 - n * 0.28;

      const mat = new THREE.MeshStandardMaterial({
        color: new THREE.Color().setHSL(hue, sat, light),
        metalness: 0.6,
        roughness: 0.3,
        emissive: 0xc8a27a,
        emissiveIntensity: 0,
        transparent: true,
        opacity: 0.08 + falloff * 0.92,
        depthWrite: false,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      mesh.scale.set(size, size * stretchY, size);
      mesh.renderOrder = 1;
      this.scene.add(mesh);

      this.boxes.push({
        mesh,
        mat,
        base: mesh.position.clone(),
        scale: mesh.scale.clone(),
        falloff,
        speed: 0.5 + Math.random() * 1.4,
        phase: Math.random() * Math.PI * 2,
        rotX: (Math.random() - 0.5) * 0.4,
        rotY: (Math.random() - 0.5) * 0.6,
        hover: 0,
      });
    }

    this.raycaster = new THREE.Raycaster();
    const stage = this.parent;
    const updateMouse = (e) => {
      const rect = stage.getBoundingClientRect();
      const cx = e.touches ? e.touches[0].clientX : e.clientX;
      const cy = e.touches ? e.touches[0].clientY : e.clientY;
      let nx = ((cx - rect.left) / rect.width) * 2 - 1;
      let ny = -((cy - rect.top) / rect.height) * 2 + 1;
      nx = Math.max(-1.4, Math.min(1.4, nx));
      ny = Math.max(-1.4, Math.min(1.4, ny));
      this.mouse.x = nx;
      this.mouse.y = ny;
    };
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const onTouchend = () => { this.mouse.x = 99; this.mouse.y = 99; };
    window.addEventListener('mousemove', updateMouse);
    if (isTouch) {
      window.addEventListener('touchmove', updateMouse, { passive: true });
      window.addEventListener('touchstart', updateMouse, { passive: true });
      window.addEventListener('touchend', onTouchend, { passive: true });
    }
    this._cleanup = () => {
      window.removeEventListener('mousemove', updateMouse);
      window.removeEventListener('touchmove', updateMouse);
      window.removeEventListener('touchstart', updateMouse);
      window.removeEventListener('touchend', onTouchend);
    };

    this.setSize(stage.clientWidth, stage.clientHeight);
  }

  update(time) {
    const t = this.clock ? this.clock.getElapsedTime() : time;
    if (!this.boxes.length) return;

    const cx = this.mouse.x * 0.5;
    const cy = 0.4 + Math.max(-1, Math.min(1, this.mouse.y)) * 0.22;
    this.camera.position.x += (cx - this.camera.position.x) * 0.04;
    this.camera.position.y += (cy - this.camera.position.y) * 0.04;
    this.camera.lookAt(this.mouse.x * 0.1, Math.max(-1, Math.min(1, this.mouse.y)) * 0.08, 0);

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const meshes = this.boxes.map((b) => b.mesh);
    const hits = this.raycaster.intersectObjects(meshes);
    const hoverMesh = hits.length ? hits[0].object : null;

    this.boxes.forEach((b) => {
      const target = b.mesh === hoverMesh ? 1 : 0;
      b.hover += (target - b.hover) * 0.14;

      const hover = b.hover;

      let ripple = 0;
      if (hoverMesh && b.mesh !== hoverMesh) {
        const d = hoverMesh.position.distanceTo(b.mesh.position);
        if (d < 3.2) {
          const f = 1 - d / 3.2;
          ripple = Math.abs(Math.sin(t * 5 + f * 5)) * f * 0.35;
        }
      }

      const bob = Math.sin(t * b.speed + b.phase) * 0.12;
      b.mesh.position.y = b.base.y + bob + hover * 1.15 + ripple * 0.3;
      b.mesh.position.z = b.base.z + hover * 1.3 + ripple * 0.5;
      b.mesh.scale.copy(b.scale).multiplyScalar(1 + hover * 0.34 + ripple * 0.16);

      b.mesh.rotation.y = t * b.rotY + hover * t * 2.2;
      b.mesh.rotation.x = t * b.rotX + hover * 0.5;

      b.mat.emissiveIntensity = hover * 1.7 + ripple * 0.7;
      b.mat.opacity = 0.08 + (b.falloff + hover * (1 - b.falloff)) * 0.92;
    });

    this.hovered = hoverMesh;
  }

  dispose() {
    if (this._cleanup) this._cleanup();
    if (super.dispose) super.dispose();
  }
}

function boot() {
  const mount = document.getElementById('boxes-3d');
  if (!mount || !window.WebGLRenderingContext) return;

  try {
    const project = new Project({
      scenes: [BoxesHoverScene],
      antialias: true,
      usePhysics: false,
      parent: 'boxes-3d',
      alpha: true,
    });
    window.__boxes3d = project;

    function onResize() {
      const scene = Array.from(project.scenes.values())[0];
      if (!scene) return;
      scene.setSize(mount.clientWidth, mount.clientHeight);
      project.renderer.setPixelRatio(Math.max(1, window.devicePixelRatio / 2));
    }
    window.addEventListener('resize', onResize);
  } catch (e) {
    console.warn('boxes3d failed to start:', e);
    if (mount) mount.remove();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
