(function () {
  "use strict";

  var LS_KEY = "portfolio-lang";

  var I18N = {
    /* ============ ŠARED ============ */
    cta: { en: "Get In Touch", id: "Hubungi Saya" },

    /* ============ INDEX ============ */
    "idx.logo": { en: "Portfolio", id: "Portofolio" },
    "idx.status": { en: "Available", id: "Tersedia" },
    "idx.word.home": { en: "HOME", id: "BERANDA" },
    "idx.sub.home": {
      en: "Discover my journey",
      id: "Temukan perjalanan saya",
    },
    "idx.word.about": { en: "ABOUT", id: "TENTANG" },
    "idx.sub.about": {
      en: "Who I am &amp; what I do",
      id: "Siapa saya &amp; apa yang saya kerjakan",
    },
    "idx.word.projects": { en: "PROJECTS", id: "PROYEK" },
    "idx.sub.projects": {
      en: "Featured works &amp; case studies",
      id: "Karya unggulan &amp; studi kasus",
    },
    "idx.word.skills": { en: "SKILLS", id: "KEAHLIAN" },
    "idx.sub.skills": {
      en: "Technologies &amp; expertise",
      id: "Teknologi &amp; keahlian",
    },
    "idx.word.contact": { en: "CONTACT", id: "KONTAK" },
    "idx.sub.contact": { en: "Let's work together", id: "Ayo bekerja sama" },
    "idx.tv.sticky": {
      en: "Focus<br>Build<br>Impact",
      id: "Fokus<br>Bekerja<br>Berdampak",
    },
    "idx.tv.polaroid": { en: "Keep Building", id: "Terus Berkembang" },
    "idx.tv.progress": {
      en: "Progress &gt; Perfection",
      id: "Progres &gt; Kesempurnaan",
    },
    "idx.tv.hint": {
      en: "📺 replace images/tv_profile.jpg with your photo",
      id: "📺 ganti images/tv_profile.jpg dengan foto kamu",
    },
    "idx.bottom.nav": { en: "Navigate the menu", id: "Navigasi menu" },

    /* ============ HOME ============ */
    "home.greeting": { en: "Hello, I'm", id: "Halo, Saya" },
    "home.role.label": { en: "I'm a&nbsp;", id: "Saya seorang&nbsp;" },
    "home.desc": {
      en: 'I design and build <span class="hl">reliable, scalable web applications</span> with a strong focus on backend systems — APIs, databases, and clean server-side logic that powers modern user experiences.',
      id: 'Saya merancang dan membangun <span class="hl">aplikasi web yang andal dan dapat diskalakan</span> dengan fokus pada sistem backend — API, database, dan logika sisi server yang bersih untuk pengalaman pengguna modern.',
    },
    "home.stat.projects": { en: "Projects", id: "Proyek" },
    "home.stat.semester": { en: "Semester", id: "Semester" },
    "home.stat.tech": { en: "Technologies", id: "Teknologi" },
    "home.btn.work": { en: "View My Work", id: "Lihat Karyaku" },
    "home.sticker": {
      en: "Open to Opportunities",
      id: "Terbuka untuk Peluang",
    },
    "home.available": {
      en: "Available for work",
      id: "Tersedia untuk bekerja",
    },

    /* ============ ABOUT ============ */
    "abt.label": { en: "02 — About", id: "02 — Tentang" },
    "abt.title": { en: "WHO<br>I AM.", id: "SIAPA<br>SAYA." },
    "abt.stat.built": { en: "Projects Built", id: "Proyek Dibuat" },
    "abt.stat.semester": { en: "Semester", id: "Semester" },
    "abt.stat.tech": { en: "Technologies", id: "Teknologi" },
    "abt.stat.passion": { en: "Passion %", id: "Semangat %" },
    "abt.story": { en: "My Story", id: "Kisahku" },
    "abt.p1": {
      en: 'I\'m a <span class="hl">semester 5 student at Politeknik IDN Bogor</span> with a deep passion for web development and backend engineering. My journey in programming started with curiosity — I wanted to understand how web apps work under the hood.',
      id: 'Saya seorang <span class="hl">mahasiswa semester 5 di Politeknik IDN Bogor</span> dengan minat mendalam pada pengembangan web dan rekayasa backend. Perjalanan saya di dunia pemrograman dimulai dari rasa penasaran — saya ingin memahami cara kerja aplikasi web secara mendalam.',
    },
    "abt.p2": {
      en: 'Throughout my <span class="hl">academic journey</span>, I\'ve been building personal projects, exploring modern web technologies, and applying them in real-world scenarios. I enjoy crafting structured, efficient applications and constantly improving my backend systems knowledge.',
      id: 'Sepanjang <span class="hl">perjalanan akademis</span> saya, saya terus membangun proyek pribadi, mengeksplorasi teknologi web modern, dan menerapkannya dalam skenario nyata. Saya menikmati merancang aplikasi yang terstruktur dan efisien serta terus meningkatkan pengetahuan sistem backend saya.',
    },
    "abt.p3": {
      en: 'Being a <span class="hl">student developer</span> means constantly learning, experimenting, and growing. Every project sharpens my skills and prepares me for a professional career in tech.',
      id: 'Menjadi <span class="hl">pengembang yang masih berstatus mahasiswa</span> berarti selalu belajar, bereksperimen, dan berkembang. Setiap proyek mengasah keterampilan saya dan mempersiapkan saya untuk karier profesional di bidang teknologi.',
    },
    "abt.what": { en: "What I Do", id: "Apa yang Saya Kerjakan" },
    "abt.w1": {
      en: 'I specialize in building <span class="hl">modern and responsive web applications</span> with a strong emphasis on backend development. I work with APIs, databases, and server-side logic to create applications that are reliable, secure, and scalable.',
      id: 'Saya fokus membangun <span class="hl">aplikasi web modern dan responsif</span> dengan penekanan kuat pada pengembangan backend. Saya bekerja dengan API, database, dan logika sisi server untuk menciptakan aplikasi yang andal, aman, dan dapat diskalakan.',
    },
    "abt.w2": {
      en: 'Alongside backend work, I pay close attention to user experience — ensuring every interface is clean, intuitive, and functional. I bridge the gap between <span class="hl">technical implementation and practical user needs</span>.',
      id: 'Di samping pekerjaan backend, saya sangat memperhatikan pengalaman pengguna — memastikan setiap antarmuka bersih, intuitif, dan fungsional. Saya menjembatani kesenjangan antara <span class="hl">implementasi teknis dan kebutuhan praktis pengguna</span>.',
    },
    "abt.degree": {
      en: "Bachelor of Informatics Engineering",
      id: "Sarjana Teknik Informatika",
    },
    "abt.tl.campus": {
      en: "Building several campus assignment projects",
      id: "Membuat beberapa project tugas kampus",
    },
    "abt.facts": { en: "Quick Facts", id: "Fakta Singkat" },
    "abt.facts.location": { en: "Location", id: "Lokasi" },
    "abt.facts.location.val": { en: "Balikpapan, Indonesia", id: "Balikpapan, Indonesia" },
    "abt.facts.study": { en: "Currently Studying", id: "Sedang Menempuh" },
    "abt.facts.study.val": { en: "Informatics Engineering, S5", id: "Teknik Informatika, S5" },
    "abt.facts.focus": { en: "Main Focus", id: "Fokus Utama" },
    "abt.facts.focus.val": { en: "Backend & Web Apps", id: "Backend & Aplikasi Web" },
    "abt.facts.stack": { en: "Favorite Stack", id: "Stack Favorit" },
    "abt.facts.stack.val": { en: "Laravel · MySQL · Tailwind", id: "Laravel · MySQL · Tailwind" },
    "abt.tools": { en: "Tech I Use", id: "Teknologi yang Saya Gunakan" },
    "abt.tool.laravel": { en: "Laravel", id: "Laravel" },
    "abt.tool.php": { en: "PHP", id: "PHP" },
    "abt.tool.js": { en: "JavaScript", id: "JavaScript" },
    "abt.tool.tailwind": { en: "Tailwind CSS", id: "Tailwind CSS" },
    "abt.tool.mysql": { en: "MySQL", id: "MySQL" },
    "abt.tool.flutter": { en: "Flutter", id: "Flutter" },
    "abt.tool.git": { en: "Git & GitHub", id: "Git & GitHub" },
    "abt.tool.api": { en: "REST APIs", id: "REST API" },

    "abt.tl.bmdiesel": {
      en: "BmDiesel",
      id: "BmDiesel",
    },
    "abt.tl.bmdiesel.desc": {
      en: "Built a service management system for diesel repair workshops with a customer portal, phase tracking, payments, and reports.",
      id: "Membangun sistem manajemen servis untuk bengkel perbaikan mesin diesel dengan portal pelanggan, pelacakan fase, pembayaran, dan laporan.",
    },
    "abt.tl.muslim": {
      en: "Muslim Apps",
      id: "Muslim Apps",
    },
    "abt.tl.muslim.desc": {
      en: "Built a comprehensive Islamic application with Flutter and Laravel, delivering prayer times, Quran readings, and daily duas.",
      id: "Membangun aplikasi Islam komprehensif dengan Flutter dan Laravel, menyediakan jadwal salat, bacaan Al-Qur'an, dan doa harian.",
    },
    "abt.tl.weather": {
      en: "Weather Dashboard",
      id: "Weather Dashboard",
    },
    "abt.tl.weather.desc": {
      en: "Created a real-time weather app with dynamic visualizations, forecasts, and location-based updates using external APIs.",
      id: "Membuat aplikasi cuaca real-time dengan visualisasi dinamis, prakiraan, dan pembaruan berbasis lokasi menggunakan API eksternal.",
    },
    "abt.tl.gb": {
      en: "Penjelajah Hijau",
      id: "Penjelajah Hijau",
    },
    "abt.tl.gb.desc": {
      en: "Built an interactive web-based learning game for elementary IPAS on plant reproduction with adventure maps, games, and quizzes.",
      id: "Membangun game pembelajaran web interaktif untuk IPAS SD tentang perkembangbiakan tumbuhan dengan peta petualangan, game, dan kuis.",
    },
    "abt.tl.aquatrack": {
      en: "AquaTrack",
      id: "AquaTrack",
    },
    "abt.tl.aquatrack.desc": {
      en: "Developed a smart mobile hydration tracking app with Flutter, personalized goals, reminders, and progress analytics.",
      id: "Mengembangkan aplikasi mobile pelacakan hidrasi cerdas dengan Flutter, target personal, pengingat, dan analitik progres.",
    },
    "abt.tl.flowly": {
      en: "Flowly",
      id: "Flowly",
    },
    "abt.tl.flowly.desc": {
      en: "Built an all-in-one productivity dashboard with Laravel combining tasks, projects, calendar, finance, and a focus timer.",
      id: "Membangun dashboard produktivitas all-in-one dengan Laravel menggabungkan tugas, proyek, kalender, keuangan, dan focus timer.",
    },
    "abt.tl.mono": {
      en: "Game Monopoli",
      id: "Game Monopoli",
    },
    "abt.tl.mono.desc": {
      en: "Recreated the classic monopoly board game in the browser with a full economy system, property trading, and multiplayer turns.",
      id: "Membuat ulang game papan monopoli klasik di browser dengan sistem ekonomi lengkap, jual beli properti, dan giliran multiplayer.",
    },
    "abt.tl.yayasan": {
      en: "Yayasan Mufid",
      id: "Yayasan Mufid",
    },
    "abt.tl.yayasan.desc": {
      en: "Developed a website to support the foundation’s needs and improve information accessibility.",
      id: "Mengembangkan website untuk mendukung kebutuhan yayasan dan meningkatkan aksesibilitas informasi.",
    },

    /* ============ PROJECTS ============ */
    "prj.label": { en: "03 — Projects", id: "03 — Proyek" },
    "prj.title": { en: "MY WORK.", id: "KARYAKU." },
    "prj.tag1": { en: "Project 01", id: "Proyek 01" },
    "prj.tag2": { en: "Project 02", id: "Proyek 02" },
    "prj.tag3": { en: "Project 03", id: "Proyek 03" },
    "prj.tag4": { en: "Project 04", id: "Proyek 04" },
    "prj.tag5": { en: "Project 05", id: "Proyek 05" },
    "prj.tag6": { en: "Project 06", id: "Proyek 06" },
    "prj.tag7": { en: "Project 07", id: "Proyek 07" },
    "prj.tag8": { en: "Project 08", id: "Proyek 08" },
    "prj.n2": { en: "02 — Web App", id: "02 — Aplikasi Web" },
    "prj.n3": { en: "03 — Web App", id: "03 — Aplikasi Web" },
    "prj.n4": { en: "04 — Game", id: "04 — Game" },
    "prj.n5": { en: "05 — Web App", id: "05 — Aplikasi Web" },
    "prj.n6": { en: "06 — Mobile App", id: "06 — Aplikasi Mobile" },
    "prj.n7": { en: "07 — Web App", id: "07 — Aplikasi Web" },
    "prj.n8": { en: "08 — Game", id: "08 — Game" },
    "prj.d1": {
      en: "Comprehensive Islamic application offering prayer times, salat times, Quran readings, articles and daily duas.",
      id: "Aplikasi Islam komprehensif dengan jadwal shalat, waktu salat, bacaan Al-Qur'an, artikel, dan doa harian.",
    },
    "prj.d2": {
      en: "Real-time weather app with beautiful visualizations, forecasts, and location-based updates using external APIs.",
      id: "Aplikasi cuaca real-time dengan visualisasi indah, prakiraan cuaca, dan pembaruan berbasis lokasi menggunakan API eksternal.",
    },
    "prj.d3": {
      en: "Service management system for diesel engine repair workshops with a customer portal, phase tracking, payment verification, invoices, and reports.",
      id: "Sistem manajemen servis untuk bengkel perbaikan mesin diesel dengan portal pelanggan, pelacakan fase, verifikasi pembayaran, invoice, dan laporan.",
    },
    "prj.d4": {
      en: "Interactive web-based learning app \"Penjelajah Hijau\" for elementary IPAS on plant reproduction, with an adventure map, mini-games, and quizzes.",
      id: "Aplikasi pembelajaran web interaktif \"Penjelajah Hijau\" untuk IPAS SD tentang perkembangbiakan tumbuhan, dengan peta petualangan, mini-game, dan kuis.",
    },
    "prj.d5": {
      en: "Official website for Yayasan Mufid to present programs and news while improving information accessibility for visitors.",
      id: "Website resmi Yayasan Mufid untuk menampilkan program dan berita sekaligus meningkatkan aksesibilitas informasi bagi pengunjung.",
    },
    "prj.d6": {
      en: "Smart water reminder app that helps you monitor and achieve your daily hydration goals with timely reminders.",
      id: "Aplikasi pengingat minum air cerdas yang membantu memantau dan mencapai target hidrasi harian dengan pengingat tepat waktu.",
    },
    "prj.d7": {
      en: "All-in-one personal productivity dashboard (Laravel 12) with tasks & projects, calendar, finance tracking, and a focus timer.",
      id: "Personal productivity dashboard all-in-one (Laravel 12) dengan task & project, kalender, pencatatan keuangan, dan focus timer.",
    },
    "prj.d8": {
      en: "Monopoly-style board game in the browser where players buy properties, charge rent, and compete to become the richest.",
      id: "Game papan bergaya monopoli di browser di mana pemain membeli properti, memungut sewa, dan bersaing menjadi yang terkaya.",
    },

    /* ============ SKILLS ============ */
    "skl.label": { en: "04 — Skills", id: "04 — Keterampilan" },
    "skl.title": { en: "EXPERTISE.", id: "KEAHLIAN." },
    "skl.adv": { en: "Advanced", id: "Mahir" },
    "skl.int": { en: "Intermediate", id: "Menengah" },
    "skl.cat.backend": {
      en: "Backend &amp; Database",
      id: "Backend &amp; Basis Data",
    },

    /* ============ CONTACT ============ */
    "cnt.label": { en: "05 — Contact", id: "05 — Kontak" },
    "cnt.title": { en: "LET'S<br>TALK.", id: "MARI<br>BERBICARA." },
    "cnt.find": { en: "Find me online", id: "Temukan saya secara online" },
    "cnt.send": { en: "Send Message", id: "Kirim Pesan" },
    "cnt.loc": { en: "Location", id: "Lokasi" },
    "cnt.resp": { en: "Response Time", id: "Waktu Respons" },
    "cnt.respval": {
      en: "Usually within 24 hours",
      id: "Biasanya dalam 24 jam",
    },
    "cnt.label.name": { en: "Your Name", id: "Nama Anda" },
    "cnt.label.email": { en: "Your Email", id: "Email Anda" },
    "cnt.label.subject": { en: "Subject", id: "Subjek" },
    "cnt.label.message": { en: "Message", id: "Pesan" },
    "cnt.ph.subject": {
      en: "Project Collaboration ...",
      id: "Kolaborasi Proyek ...",
    },
    "cnt.ph.message": {
      en: "Tell me about your project or idea...",
      id: "Ceritakan proyek atau ide kamu...",
    },
    "cnt.toast.fill": {
      en: "Please fill in all required fields.",
      id: "Mohon isi semua kolom yang wajib diisi.",
    },
    "cnt.toast.ok": {
      en: "Thank you! Opening WhatsApp...",
      id: "Terima kasih! Membuka WhatsApp...",
    },
    "cnt.sending": { en: "Sending...", id: "Mengirim..." },
    "cnt.subjectDefault": { en: "Portfolio Contact", id: "Kontak Portofolio" },

    /* ============ RESUME ============ */
    "rm.label": { en: "06 — Resume", id: "06 — Curriculum Vitae" },
    "rm.title": { en: "CURRICULUM<br>VITAE.", id: "CURRICULUM<br>VITAE." },
    "rm.role": {
      en: "Web Developer · Backend Engineer",
      id: "Web Developer · Backend Engineer",
    },
    "rm.print": { en: "Print / Save PDF", id: "Cetak / Simpan PDF" },
    "rm.hire": { en: "Hire Me", id: "Hubungi Saya" },
    "rm.profile": { en: "Profile", id: "Profil" },
    "rm.profile.p": {
      en: "Dedicated <span class=\"hl\">web developer</span> and <span class=\"hl\">5th-semester informatics engineering student</span> at Politeknik IDN Bogor. I build reliable, scalable web applications with a strong focus on backend systems — APIs, databases, and clean server-side logic.",
      id: "<span class=\"hl\">Web developer</span> berdedikasi dan <span class=\"hl\">mahasiswa teknik informatika semester 5</span> di Politeknik IDN Bogor. Saya membangun aplikasi web yang andal dan skalabel dengan fokus kuat pada sistem backend — API, basis data, dan logika server yang bersih.",
    },
    "rm.profile.p2": {
      en: "I have shipped <span class=\"hl\">8+ personal and academic projects</span>, from service management systems to learning games and mobile apps, always applying best practices in structure, security, and maintainability.",
      id: "Saya telah menyelesaikan <span class=\"hl\">8+ proyek pribadi dan akademik</span>, mulai dari sistem manajemen layanan hingga game edukasi dan aplikasi mobile, selalu menerapkan praktik terbaik dalam struktur, keamanan, dan kemudahan perawatan.",
    },
    "rm.contact": { en: "Contact", id: "Kontak" },
    "rm.education": { en: "Education", id: "Pendidikan" },
    "rm.edu.school": { en: "Politeknik IDN Bogor", id: "Politeknik IDN Bogor" },
    "rm.edu.major": {
      en: "Bachelor of Informatics Engineering · 5th Semester",
      id: "Sarjana Teknik Informatika · Semester 5",
    },
    "rm.edu.ojk": { en: "SMK (High School)", id: "SMK (Sekolah Menengah Kejuruan)" },
    "rm.edu.ojk.major": {
      en: "Computer and Network Engineering",
      id: "Teknik Komputer dan Jaringan",
    },
    "rm.skills": { en: "Technical Skills", id: "Keahlian Teknis" },
    "rm.experience": { en: "Project Experience", id: "Pengalaman Proyek" },
    "rm.languages": { en: "Languages", id: "Bahasa" },
    "rm.lang.id": { en: "Indonesian — Native", id: "Indonesia — Bahasa Ibu" },
    "rm.lang.en": { en: "English — Professional", id: "Inggris — Profesional" },

    /* ============ PROJECT PAGES (SHARED) ============ */
    "ps.back": { en: "← Back to Projects", id: "← Kembali ke Proyek" },
    "ps.menu": { en: "Menu", id: "Menu" },
    "ps.contact": { en: "Contact", id: "Kontak" },
    "ps.overview": { en: "Project Overview", id: "Ringkasan Proyek" },
    "ps.features": { en: "Key Features", id: "Fitur Unggulan" },
    "ps.development": { en: "Development Process", id: "Proses Pengembangan" },
    "ps.tech": { en: "Technologies Used", id: "Teknologi yang Digunakan" },
    "ps.gallery": { en: "Project Gallery", id: "Galeri Proyek" },
    "ps.cta": {
      en: "Interested in this Project?",
      id: "Tertarik dengan Proyek Ini?",
    },
    "ps.other": { en: "View Other Projects", id: "Lihat Proyek Lainnya" },

    /* ============ FOOTER ============ */
    "ft.rights": {
      en: "All rights reserved.",
      id: "Hak cipta dilindungi.",
    },
    "ft.built": {
      en: "Always learning · Always building",
      id: "Terus belajar · Terus berkarya",
    },
    "ft.home": { en: "Home", id: "Beranda" },
    "ft.projects": { en: "Projects", id: "Proyek" },
    "ft.about": { en: "About", id: "Tentang" },
    "ft.skills": { en: "Skills", id: "Keahlian" },
    "ft.resume": { en: "Resume", id: "Resume" },
    "ft.contact": { en: "Contact", id: "Kontak" },

    /* ============ 404 PAGE ============ */
    "n404.home": { en: "Home", id: "Beranda" },
    "n404.contact": { en: "Contact", id: "Kontak" },
    "n404.title": { en: "Page not found", id: "Halaman tidak ditemukan" },
    "n404.desc": {
      en: "The page you are looking for doesn't exist or was moved. Let's get you back on track.",
      id: "Halaman yang Anda cari tidak ada atau telah dipindahkan. Mari kita kembali ke jalur yang benar.",
    },
    "n404.back": { en: "Back to Homepage", id: "Kembali ke Beranda" },
    "n404.projects": { en: "View Projects", id: "Lihat Proyek" },

    /* ============ MUSLIM APPS ============ */
    "ms.ov1": {
      en: '<span class="highlight">Muslim Apps</span> is a comprehensive Islamic application designed to help Muslims worldwide in their daily religious practices. The app provides accurate prayer times, Quran readings with translations, daily duas, and inspiring Islamic articles.',
      id: '<span class="highlight">Muslim Apps</span> adalah aplikasi Islam komprehensif yang dirancang untuk membantu umat Muslim di seluruh dunia dalam ibadah sehari-hari. Aplikasi ini menyediakan jadwal salat yang akurat, bacaan Al-Qur\'an lengkap dengan terjemahan, doa harian, dan artikel Islami yang inspiratif.',
    },
    "ms.ov2": {
      en: "Built with modern technologies, this application offers a seamless user experience with beautiful animations and intuitive navigation. The app supports multiple languages and provides notifications for prayer times based on user's location.",
      id: "Dibangun dengan teknologi modern, aplikasi ini menawarkan pengalaman pengguna yang mulus dengan animasi indah dan navigasi intuitif. Aplikasi mendukung banyak bahasa dan menyediakan notifikasi jadwal salat berdasarkan lokasi pengguna.",
    },
    "ms.featIntro": {
      en: 'Supporting daily worship with features that are <span class="highlight">comprehensive</span>, <span class="highlight">lightweight</span>, and easy to use anytime.',
      id: 'Mendukung ibadah harian dengan fitur yang <span class="highlight">komprehensif</span>, <span class="highlight">ringan</span>, dan mudah digunakan kapan saja.',
    },
    "ms.f1t": {
      en: "Prayer Times &amp; Imsakiyah",
      id: "Jadwal Salat &amp; Imsakiyah",
    },
    "ms.f1d": {
      en: "Accurate prayer times for cities worldwide. Simply enter your city name without enabling GPS.",
      id: "Jadwal salat akurat untuk kota di seluruh dunia. Cukup masukkan nama kota tanpa mengaktifkan GPS.",
    },
    "ms.f2t": { en: "Al-Quran", id: "Al-Qur'an" },
    "ms.f2d": {
      en: "Read complete Quran with translations, tafsir, and clear audio recitations.",
      id: "Baca Al-Qur'an lengkap dengan terjemahan, tafsir, dan bacaan audio yang jelas.",
    },
    "ms.f3t": { en: "Daily Duas", id: "Doa Harian" },
    "ms.f3d": {
      en: "A collection of daily supplications, safety prayers, and essential duas with transliteration and meanings.",
      id: "Kumpulan doa harian, doa keselamatan, dan doa penting dengan transliterasi dan artinya.",
    },
    "ms.f4t": { en: "Dhikr", id: "Dzikir" },
    "ms.f4d": {
      en: "Daily dhikr collections including morning and evening remembrance.",
      id: "Kumpulan dzikir harian termasuk dzikir pagi dan petang.",
    },
    "ms.f5t": { en: "Islamic Articles", id: "Artikel Islami" },
    "ms.f5d": {
      en: "Curated articles, inspiring stories, and light fiqh discussions for daily learning.",
      id: "Artikel pilihan, kisah inspiratif, dan pembahasan fiqih ringan untuk pembelajaran harian.",
    },
    "ms.f6t": { en: "Qibla Direction", id: "Arah Kiblat" },
    "ms.f6d": {
      en: "Accurate Qibla compass to help you find direction of Kaaba from anywhere in world.",
      id: "Kompas kiblat akurat untuk membantu menemukan arah Ka'bah dari mana pun di dunia.",
    },
    "ms.dp1": {
      en: "The development focuses on creating a user-friendly interface that respects Islamic aesthetics while maintaining modern design principles. In-depth research was conducted to ensure accuracy of prayer times and religious content.",
      id: "Pengembangan berfokus pada pembuatan antarmuka yang ramah pengguna dengan tetap menghormati estetika Islami sambil mempertahankan prinsip desain modern. Riset mendalam dilakukan untuk memastikan akurasi jadwal salat dan konten keagamaan.",
    },
    "ms.dp2": {
      en: 'The application was built using <span class="highlight">Laravel</span> for a robust backend, ensuring consistent performance. System optimization was carried out to keep the application responsive and stable under various conditions of use.',
      id: 'Aplikasi dibangun menggunakan <span class="highlight">Laravel</span> untuk backend yang kokoh, memastikan performa yang konsisten. Optimasi sistem dilakukan untuk menjaga aplikasi tetap responsif dan stabil dalam berbagai kondisi penggunaan.',
    },

    /* ============ WEATHER ============ */
    "we.ov1": {
      en: '<span class="highlight">Weather App</span> is a modern, real-time weather application that provides accurate weather forecasts and current conditions for locations worldwide. The app features an intuitive interface with dynamic weather visualizations and comprehensive meteorological data.',
      id: '<span class="highlight">Weather App</span> adalah aplikasi cuaca modern dan real-time yang menyediakan prakiraan cuaca akurat serta kondisi terkini untuk lokasi di seluruh dunia. Aplikasi ini memiliki antarmuka intuitif dengan visualisasi cuaca dinamis dan data meteorologi yang lengkap.',
    },
    "we.ov2": {
      en: "Built with cutting-edge web technologies, this weather application delivers instant weather updates, detailed forecasts, and beautiful weather animations. The app seamlessly integrates with weather APIs to provide reliable data while maintaining exceptional performance and user experience across all devices.",
      id: "Dibangun dengan teknologi web mutakhir, aplikasi cuaca ini memberikan pembaruan cuaca instan, prakiraan mendetail, dan animasi cuaca yang indah. Aplikasi terintegrasi mulus dengan API cuaca untuk menyediakan data andal dengan performa dan pengalaman pengguna yang luar biasa di semua perangkat.",
    },
    "we.featIntro": {
      en: 'A comprehensive weather solution with features that are <span class="highlight">accurate</span>, <span class="highlight">real-time</span>, and designed for daily use.',
      id: 'Solusi cuaca lengkap dengan fitur yang <span class="highlight">akurat</span>, <span class="highlight">real-time</span>, dan dirancang untuk penggunaan sehari-hari.',
    },
    "we.f1t": { en: "Real-Time Weather", id: "Cuaca Real-Time" },
    "we.f1d": {
      en: "Live weather updates with current temperature, humidity, wind speed, and atmospheric conditions for any location.",
      id: "Pembaruan cuaca langsung dengan suhu terkini, kelembapan, kecepatan angin, dan kondisi atmosfer untuk lokasi mana pun.",
    },
    "we.f2t": { en: "7-Day Forecast", id: "Prakiraan 7 Hari" },
    "we.f2d": {
      en: "Detailed weekly weather predictions with daily high/low temperatures, precipitation chances, and weather patterns.",
      id: "Prediksi cuaca mingguan mendetail dengan suhu maksimum/minimum harian, peluang hujan, dan pola cuaca.",
    },
    "we.f3t": { en: "Location Search", id: "Pencarian Lokasi" },
    "we.f3d": {
      en: "Search weather for any city worldwide with automatic geolocation detection and saved favorite locations.",
      id: "Cari cuaca untuk kota mana pun di dunia dengan deteksi geolokasi otomatis dan lokasi favorit yang tersimpan.",
    },
    "we.f4t": { en: "Weather Details", id: "Detail Cuaca" },
    "we.f4d": {
      en: "Comprehensive meteorological data including UV index, visibility, air pressure, and feels-like temperature.",
      id: "Data meteorologi lengkap termasuk indeks UV, visibilitas, tekanan udara, dan suhu terasa.",
    },
    "we.f5t": { en: "Responsive Design", id: "Desain Responsif" },
    "we.f5d": {
      en: "Fully optimized interface that works flawlessly on mobile phones, tablets, and desktop screens.",
      id: "Antarmuka teroptimasi penuh yang bekerja mulus di ponsel, tablet, dan layar desktop.",
    },
    "we.f6t": { en: "Dynamic Themes", id: "Tema Dinamis" },
    "we.f6d": {
      en: "Beautiful weather-based backgrounds and animations that change according to current weather conditions.",
      id: "Latar belakang dan animasi indah berbasis cuaca yang berubah sesuai kondisi cuaca terkini.",
    },
    "we.dp1": {
      en: "The development process focused on creating an intuitive weather application that presents complex meteorological data in an accessible format. Research into weather data visualization and user experience patterns informed the design decisions, ensuring users can quickly understand weather conditions at a glance.",
      id: "Proses pengembangan berfokus pada pembuatan aplikasi cuaca intuitif yang menyajikan data meteorologi kompleks dalam format yang mudah dipahami. Riset tentang visualisasi data cuaca dan pola pengalaman pengguna menjadi pertimbangan desain, memastikan pengguna dapat memahami kondisi cuaca dengan cepat.",
    },
    "we.dp2": {
      en: 'Built using <span class="highlight">HTML5</span>, <span class="highlight">CSS3</span>, and <span class="highlight">JavaScript</span> with integration to reliable weather APIs, the application prioritizes data accuracy and real-time updates. Special attention was given to error handling, loading states, and creating smooth transitions between different weather conditions for an engaging user experience.',
      id: 'Dibangun menggunakan <span class="highlight">HTML5</span>, <span class="highlight">CSS3</span>, dan <span class="highlight">JavaScript</span> dengan integrasi ke API cuaca andal, aplikasi memprioritaskan akurasi data dan pembaruan real-time. Perhatian khusus diberikan pada penanganan error, state loading, dan transisi halus antar kondisi cuaca untuk pengalaman pengguna yang menarik.',
    },

    /* ============ BMDIESEL ============ */
    "bm.ov1": {
      en: '<span class="highlight">BmDiesel</span> is a service management information system for diesel engine repair workshops that transforms manual paper-based record-keeping into a centralized digital platform. Used by admin and workshop staff, it records every service job in full — from unit and engine data, replaced components, estimated and actual costs, to warranty dates — while providing customers with a dedicated portal to monitor the status of their unit in real time.',
      id: '<span class="highlight">BmDiesel</span> adalah sistem informasi manajemen servis untuk bengkel perbaikan mesin diesel yang mengubah pencatatan manual berbasis kertas menjadi platform digital terpusat. Digunakan oleh admin dan staf bengkel, sistem ini mencatat setiap pekerjaan servis secara lengkap — mulai dari data unit dan mesin, komponen yang diganti, biaya estimasi dan aktual, hingga tanggal garansi — sekaligus memberikan portal khusus kepada pelanggan untuk memantau status pengerjaan unit mereka secara langsung.',
    },
    "bm.ov2": {
      en: "The main benefits of the system are transparency and operational efficiency. Customers can see service progress in real time through work phases, receive automatic notifications when their service is finished, and make payments by uploading transfer proof that is verified directly by the admin. For the workshop, all data is stored centrally, invoices can be printed and downloaded as PDF, service reports can be exported, and payments are validated with a clear verification flow — reducing recording errors and speeding up service.",
      id: "Manfaat utama sistem ini adalah transparansi dan efisiensi operasional. Pelanggan dapat melihat perkembangan servis secara real-time melalui fase pengerjaan, menerima notifikasi otomatis saat servis selesai, serta melakukan pembayaran dengan mengunggah bukti transfer yang diverifikasi langsung oleh admin. Bagi pihak bengkel, seluruh data tersimpan terpusat, invoice dapat dicetak dan diunduh dalam format PDF, laporan servis dapat diekspor, dan pembayaran tervalidasi dengan alur verifikasi yang jelas — mengurangi kesalahan pencatatan dan mempercepat pelayanan.",
    },
    "bm.featIntro": {
      en: 'A service management platform with features that are <span class="highlight">complete</span>, <span class="highlight">transparent</span>, and efficient.',
      id: 'Platform manajemen servis dengan fitur yang <span class="highlight">lengkap</span>, <span class="highlight">transparan</span>, dan efisien.',
    },
    "bm.f1t": { en: "Complete Job Service Management", id: "Manajemen Job Servis Lengkap" },
    "bm.f1d": {
      en: "Service recording with more than 30 fields (customer identity, machine/unit specifications, spare parts, estimated & actual costs, PO/receipt numbers, warranty period), complete with edit and delete.",
      id: "Pencatatan servis dengan lebih dari 30 field (identitas pelanggan, spesifikasi mesin/unit, suku cadang, biaya estimasi & aktual, nomor PO/kuitansi, hingga masa garansi), lengkap dengan edit dan penghapusan.",
    },
    "bm.f2t": { en: "Customer Portal", id: "Portal Pelanggan" },
    "bm.f2d": {
      en: "Customers monitor their service list, progress, bills, and photo documentation of their unit through a secure personal dashboard.",
      id: "Pelanggan memantau daftar servis, progres, tagihan, dan dokumentasi foto unit mereka melalui dashboard pribadi yang aman.",
    },
    "bm.f3t": { en: "Work Phase Tracking", id: "Pelacakan Fase Pengerjaan" },
    "bm.f3d": {
      en: "Progress is visualized in 7 phases (Initial Analysis → Disassembly → Cleaning → Waiting for Parts → Assembly → Testing → Completed) with automatic status (Pending / In Progress / Completed).",
      id: "Progres divisualisasikan dalam 7 fase (Analisa Awal → Bongkar → Pembersihan → Menunggu Part → Perakitan → Pengetesan → Selesai) dengan status otomatis (Pending / In Progress / Completed).",
    },
    "bm.f4t": { en: "Payment & Verification", id: "Pembayaran & Verifikasi" },
    "bm.f4d": {
      en: "Payment page with transfer proof upload; admin reviews, approves, or rejects with notes; bill status changes to PAID / PENDING VERIFICATION / UNPAID and the customer gets notified.",
      id: "Halaman pembayaran dengan unggah bukti transfer; admin me-review, menyetujui, atau menolak dengan catatan; status tagihan berubah LUNAS / MENUNGGU VERIFIKASI / BELUM BAYAR dan pelanggan mendapat notifikasi.",
    },
    "bm.f5t": { en: "Invoice & Reports", id: "Invoice & Laporan" },
    "bm.f5d": {
      en: "Print-ready invoices, PDF downloads (dompdf), service reports with period/status filters, and CSV export.",
      id: "Invoice siap cetak, unduhan PDF (dompdf), laporan servis dengan filter periode/status, dan ekspor CSV.",
    },
    "bm.f6t": { en: "Notifications & Security", id: "Notifikasi & Keamanan" },
    "bm.f6d": {
      en: "Database notifications with real-time polling for admin (new jobs, payments) and customers (progress, done, payment accepted/rejected), plus role-based access control (admin/user) and data ownership protection (IDOR).",
      id: "Notifikasi database dengan polling real-time untuk admin (job baru, pembayaran) dan pelanggan (progres, selesai, pembayaran diterima/ditolak), plus kontrol akses berbasis peran (admin/user) dan proteksi kepemilikan data (IDOR).",
    },
    "bm.dp1": {
      en: "The project was developed iteratively using the Laravel 12 framework with an MVC architecture. The first stage was designing the database structure through migrations — covering the users, service_jobs, service_photos, and notifications tables — as a clean, easy-to-develop data foundation. After that, the core features were built step by step: job service management, customer portal, payment flow, then reports and invoices.",
      id: "Proyek dikembangkan secara iteratif menggunakan framework Laravel 12 dengan pola arsitektur MVC. Tahap pertama adalah perancangan struktur database melalui migration — mencakup tabel users, service_jobs, service_photos, dan notifications — sebagai fondasi data yang rapi dan mudah dikembangkan. Setelah itu, fitur inti dibangun secara bertahap: manajemen job servis, portal pelanggan, alur pembayaran, hingga laporan dan invoice.",
    },
    "bm.dp2": {
      en: 'The development started from backend design and data structure, then continued with front-end integration using <span class="highlight">Blade</span>, <span class="highlight">Tailwind CSS</span>, and <span class="highlight">Alpine.js</span> compiled through <span class="highlight">Vite</span>. Each module was functionally tested before adding the next, so the application grows modularly and stays maintainable. The interface is responsive for both desktop and mobile devices, and the application is ready to run in a production environment with a database schema managed through migrations.',
      id: 'Proses pengembangan dimulai dari perancangan backend dan struktur data, dilanjutkan dengan integrasi front-end menggunakan <span class="highlight">Blade</span>, <span class="highlight">Tailwind CSS</span>, dan <span class="highlight">Alpine.js</span> yang dikompilasi melalui <span class="highlight">Vite</span>. Setiap modul diuji fungsinya sebelum ditambahkan modul berikutnya, sehingga aplikasi tumbuh modular dan mudah dipelihara. Antarmuka dirancang responsif untuk memudahkan pengguna baik di desktop maupun perangkat seluler, dan aplikasi siap dijalankan pada lingkungan produksi bersama dengan skema database yang diatur melalui migration.',
    },

    /* ============ GAME BELAJAR ============ */
    "gb.ov1": {
      en: '<span class="highlight">Penjelajah Hijau</span> is an interactive web-based digital learning application designed specifically for elementary school students to understand the IPAS topic of plant reproduction. It packages abstract concepts such as perfect and imperfect flowers, generative reproduction (seeds), and vegetative reproduction (natural & artificial) into a fun visual adventure, complete with a bee character as a guide, a virtual world map, and a badge reward system.',
      id: '<span class="highlight">Penjelajah Hijau</span> adalah aplikasi pembelajaran digital interaktif berbasis web yang dirancang khusus untuk siswa Sekolah Dasar dalam memahami materi IPAS tentang perkembangbiakan tumbuhan. Aplikasi ini mengemas konsep-konsep abstrak seperti bunga sempurna dan tidak sempurna, perkembangbiakan generatif (biji), serta perkembangbiakan vegetatif (alami & buatan) menjadi petualangan visual yang menyenangkan, lengkap dengan karakter lebah sebagai pemandu, peta dunia virtual, dan sistem penghargaan berupa lencana.',
    },
    "gb.ov2": {
      en: "The main goal of this project is to bridge text-heavy lessons into an active learning experience through a game-based learning approach. For students, it boosts interest, motivation, and memory retention because learning happens while playing; for teachers, it provides teaching media aligned with the Learning Outcomes (CP) and Learning Objectives (TP), plus an assessment tool through quizzes and games that can monitor student progress.",
      id: "Tujuan utama proyek ini adalah menjembatani materi pelajaran yang cenderung tekstual menjadi pengalaman belajar aktif melalui pendekatan game-based learning. Manfaatnya bagi siswa adalah meningkatkan minat, motivasi, dan daya ingat terhadap materi karena belajar dilakukan sambil bermain; sementara bagi guru, aplikasi ini menyediakan media ajar yang selaras dengan Capaian Pembelajaran (CP) dan Tujuan Pembelajaran (TP), serta alat evaluasi melalui kuis dan game yang dapat memantau kemajuan peserta didik.",
    },
    "gb.featIntro": {
      en: 'A learning adventure with features that are <span class="highlight">interactive</span>, <span class="highlight">playful</span>, and aligned with the curriculum.',
      id: 'Petualangan belajar dengan fitur yang <span class="highlight">interaktif</span>, <span class="highlight">menyenangkan</span>, dan selaras dengan kurikulum.',
    },
    "gb.f1t": { en: "Student Login & Profile", id: "Sistem Login & Profil Siswa" },
    "gb.f1d": {
      en: "Name and school input saved in localStorage, displayed as the student's personal identity on every page.",
      id: "Input nama dan asal sekolah yang tersimpan di localStorage, ditampilkan sebagai identitas personal di setiap halaman.",
    },
    "gb.f2t": { en: "Interactive Tab Materials", id: "Materi Interaktif Ber-Tab" },
    "gb.f2d": {
      en: "Complete learning content (flower introduction, generative, and vegetative) with tab navigation and responsive plant image cards.",
      id: "Konten pembelajaran lengkap (pengenalan bunga, generatif, dan vegetatif) dengan navigasi tab dan kartu gambar tumbuhan yang responsif.",
    },
    "gb.f3t": { en: "3-Zone Adventure Map", id: "Peta Petualangan 3 Zona" },
    "gb.f3d": {
      en: "A virtual world of 1920×1080 with a panning camera system, locked/unlocked zones, and saved level progress.",
      id: "Dunia virtual berukuran 1920×1080 dengan sistem kamera bergeser, zona terkunci/terbuka, dan progres level yang tersimpan.",
    },
    "gb.f4t": { en: "3 Game Levels with Different Mechanics", id: "3 Level Game Berbeda Mekanik" },
    "gb.f4d": {
      en: 'Level 1 "Root Bridge" (spinning wheel quiz), Level 2 "Totem Statue" (generative vs vegetative drag & drop), Level 3 "Ancient Temple" (assembling flower part labels).',
      id: 'Level 1 "Jembatan Akar" (roda berputar soal), Level 2 "Patung Totem" (drag & drop generatif vs vegetatif), Level 3 "Kuil Kuno" (penyusunan label bagian bunga).',
    },
    "gb.f5t": { en: "Interactive Quiz — 30 Questions", id: "Kuis Interaktif — 30 Soal" },
    "gb.f5d": {
      en: "Multiple choice with a 15-second timer, progress bar, instant feedback, educational facts, and a final score screen.",
      id: "Pilihan ganda dengan timer 15 detik, progress bar, feedback langsung, fakta edukasi, dan layar skor akhir.",
    },
    "gb.f6t": { en: "Guide & Learning Targets", id: "Panduan & Target Belajar" },
    "gb.f6d": {
      en: "A How-to-Play page plus a CP & TP page that maps every mission to specific learning objectives.",
      id: "Halaman Petunjuk cara bermain serta halaman CP & TP yang memetakan setiap misi ke tujuan pembelajaran.",
    },
    "gb.dp1": {
      en: "The project was developed with an iterative, responsive-first approach, starting from the learning flow design (start → login → main menu → material/game/quiz), then UI development, then coding the interactivity, and finally testing across various screen sizes. Each page was built one by one with full visual consistency — a green-yellow nature palette, Fredoka One & Nunito fonts, and bee, cloud, and star-shimmer animation themes — to maintain the application's brand identity.",
      id: "Proyek dikembangkan dengan pendekatan iteratif dan responsif-first, dimulai dari perancangan alur belajar (mulai → login → menu utama → materi/game/kuis), kemudian pembangunan UI, lalu pengkodean interaktivitas, dan terakhir pengujian di berbagai ukuran layar. Setiap halaman dibangun satu per satu dengan konsistensi visual penuh — palet warna hijau-kuning alam, font Fredoka One & Nunito, serta tema animasi lebah, awan, dan kilau bintang — untuk menjaga identitas merek aplikasi.",
    },
    "gb.dp2": {
      en: 'The separation of roles across pages (navigation between HTML files) makes development modular and easy to fix; all image assets (characters, maps, plants) and audio (correct/wrong effects) are stored separately in the <span class="highlight">pictures/</span> and <span class="highlight">videos/</span> folders. Built with <span class="highlight">HTML5</span>, <span class="highlight">Tailwind CSS</span>, and vanilla <span class="highlight">JavaScript</span>, the app uses the <span class="highlight">localStorage API</span> to save student identity and level progress without a server.',
      id: 'Pemisahan peran antar halaman (navigasi antar-file HTML) membuat pengembangan modular dan mudah diperbaiki; seluruh aset gambar (karakter, peta, tumbuhan) dan audio (efek benar/salah) disimpan terpisah di folder <span class="highlight">pictures/</span> dan <span class="highlight">videos/</span>. Dibangun dengan <span class="highlight">HTML5</span>, <span class="highlight">Tailwind CSS</span>, dan <span class="highlight">JavaScript</span> murni, aplikasi ini menggunakan <span class="highlight">localStorage API</span> untuk menyimpan identitas siswa dan progres level tanpa server.',
    },

    /* ============ YAYASAN MUFID ============ */
    "ya.ov1": {
      en: '<span class="highlight">Yayasan Mufid</span> is an official website built to present the foundation\'s profile, programs, and news. It improves information accessibility so visitors can quickly understand what the foundation does and how to get involved.',
      id: '<span class="highlight">Yayasan Mufid</span> adalah website resmi yang dibangun untuk menampilkan profil, program, dan berita yayasan. Website ini meningkatkan aksesibilitas informasi sehingga pengunjung dapat dengan cepat memahami apa yang dikerjakan yayasan dan bagaimana cara terlibat.',
    },
    "ya.ov2": {
      en: "With clean pages for profiles, programs, and updates plus a simple admin interface, the site stays easy to maintain and always up to date.",
      id: "Dengan halaman yang bersih untuk profil, program, dan berita serta antarmuka admin yang sederhana, website tetap mudah dirawat dan selalu terbarui.",
    },
    "ya.featIntro": {
      en: 'A foundation site with features that are <span class="highlight">informative</span>, <span class="highlight">accessible</span>, and easy to manage.',
      id: 'Website yayasan dengan fitur yang <span class="highlight">informatif</span>, <span class="highlight">mudah diakses</span>, dan mudah dikelola.',
    },
    "ya.f1t": { en: "Foundation Profile", id: "Profil Yayasan" },
    "ya.f1d": {
      en: "A clear introduction to the vision, mission, and history of the foundation.",
      id: "Pengenalan yang jelas tentang visi, misi, dan sejarah yayasan.",
    },
    "ya.f2t": { en: "Programs Showcase", id: "Tampilan Program" },
    "ya.f2d": {
      en: "Dedicated pages that explain each program and the impact it creates.",
      id: "Halaman khusus yang menjelaskan setiap program dan dampak yang dihasilkan.",
    },
    "ya.f3t": { en: "News & Articles", id: "Berita & Artikel" },
    "ya.f3d": {
      en: "Publish updates and articles to keep the community informed.",
      id: "Terbitkan berita dan artikel untuk menjaga komunitas tetap terinformasi.",
    },
    "ya.f4t": { en: "Contact & Donation", id: "Kontak & Donasi" },
    "ya.f4d": {
      en: "Make it easy for visitors to reach out or support the foundation.",
      id: "Memudahkan pengunjung menghubungi atau mendukung yayasan.",
    },
    "ya.f5t": { en: "Admin Panel", id: "Panel Admin" },
    "ya.f5d": {
      en: "A simple content management system so staff can update the site easily.",
      id: "Sistem manajemen konten sederhana sehingga staf dapat memperbarui website dengan mudah.",
    },
    "ya.f6t": { en: "Responsive Design", id: "Desain Responsif" },
    "ya.f6d": {
      en: "A mobile-friendly experience that works well for every visitor.",
      id: "Pengalaman ramah perangkat mobile yang nyaman bagi setiap pengunjung.",
    },
    "ya.dp1": {
      en: "The project focused on clear information architecture so visitors can find what they need in just a few clicks. Content was structured around the foundation's real needs.",
      id: "Proyek ini berfokus pada arsitektur informasi yang jelas sehingga pengunjung dapat menemukan apa yang mereka butuhkan hanya dalam beberapa klik. Konten disusun sesuai kebutuhan nyata yayasan.",
    },
    "ya.dp2": {
      en: 'Built with <span class="highlight">HTML</span>, <span class="highlight">CSS</span>, and a lightweight admin interface, the website prioritizes speed, accessibility, and easy maintenance.',
      id: 'Dibangun dengan <span class="highlight">HTML</span>, <span class="highlight">CSS</span>, dan antarmuka admin yang ringan, website ini mengutamakan kecepatan, aksesibilitas, dan kemudahan perawatan.',
    },

    /* ============ AQUATRACK ============ */
    "aq.ov1": {
      en: '<span class="highlight">AquaTrack</span> is a smart mobile hydration tracking application designed to help users maintain optimal water intake and prevent dehydration. The mobile app features an intuitive interface with personalized daily water goals, timely push notifications, and comprehensive hydration statistics to promote healthy drinking habits on-the-go.',
      id: '<span class="highlight">AquaTrack</span> adalah aplikasi pelacakan hidrasi mobile cerdas yang dirancang untuk membantu pengguna menjaga asupan air optimal dan mencegah dehidrasi. Aplikasi ini memiliki antarmuka intuitif dengan target air harian yang dipersonalisasi, notifikasi tepat waktu, dan statistik hidrasi lengkap untuk mendorong kebiasaan minum yang sehat di mana pun.',
    },
    "aq.ov2": {
      en: "Built as a cross-platform mobile application with user wellness in mind, AquaTrack combines beautiful native UI with practical functionality to make staying hydrated effortless and engaging. The app calculates personalized hydration goals based on user profiles, tracks water consumption throughout the day with quick mobile interactions, and provides insightful analytics to help users understand and improve their hydration patterns wherever they are.",
      id: "Dibangun sebagai aplikasi mobile lintas platform dengan fokus pada kesehatan pengguna, AquaTrack menggabungkan UI native yang indah dengan fungsionalitas praktis agar pengingat hidrasi menjadi mudah dan menyenangkan. Aplikasi menghitung target hidrasi berdasarkan profil pengguna, melacak konsumsi air sepanjang hari dengan interaksi mobile yang cepat, serta menyediakan analitik berguna untuk membantu pengguna memahami dan memperbaiki pola hidrasi di mana pun berada.",
    },
    "aq.featIntro": {
      en: 'A comprehensive mobile hydration solution with features that are <span class="highlight">smart</span>, <span class="highlight">personalized</span>, and designed for your health on-the-go.',
      id: 'Solusi hidrasi mobile lengkap dengan fitur yang <span class="highlight">cerdas</span>, <span class="highlight">dipersonalisasi</span>, dan dirancang untuk kesehatan Anda di mana saja.',
    },
    "aq.f1t": { en: "Water Intake Tracking", id: "Pelacakan Asupan Air" },
    "aq.f1d": {
      en: "Easily log your water consumption with quick-tap buttons for different cup sizes and custom amounts throughout the day.",
      id: "Catat konsumsi air dengan mudah melalui tombol cepat untuk berbagai ukuran gelas dan jumlah kustom sepanjang hari.",
    },
    "aq.f2t": { en: "Personalized Goals", id: "Target Personal" },
    "aq.f2d": {
      en: "Customized daily hydration targets calculated based on your weight, activity level, and climate conditions.",
      id: "Target hidrasi harian yang disesuaikan berdasarkan berat badan, tingkat aktivitas, dan kondisi iklim.",
    },
    "aq.f3t": { en: "Smart Reminders", id: "Pengingat Cerdas" },
    "aq.f3d": {
      en: "Intelligent push notification system that reminds you to drink water at optimal intervals based on your schedule and habits.",
      id: "Sistem notifikasi push cerdas yang mengingatkan untuk minum air pada interval optimal sesuai jadwal dan kebiasaan.",
    },
    "aq.f4t": { en: "Progress Analytics", id: "Analitik Progres" },
    "aq.f4d": {
      en: "Visual charts and statistics showing your hydration trends, streaks, and achievements over days, weeks, and months.",
      id: "Grafik dan statistik visual yang menampilkan tren, rekor beruntun, dan pencapaian hidrasi harian, mingguan, dan bulanan.",
    },
    "aq.f5t": { en: "Achievements System", id: "Sistem Pencapaian" },
    "aq.f5d": {
      en: "Unlock badges and milestones as you build consistent hydration habits and reach your wellness goals.",
      id: "Buka lencana dan pencapaian saat membangun kebiasaan hidrasi yang konsisten dan meraih target kesehatan.",
    },
    "aq.f6t": { en: "Native Mobile UI", id: "UI Mobile Native" },
    "aq.f6d": {
      en: "Beautiful, mobile-optimized interface with quick tap actions and real-time progress visualization designed for one-handed use.",
      id: "Antarmuka mobile yang indah dan teroptimasi dengan aksi ketuk cepat serta visualisasi progres real-time untuk penggunaan satu tangan.",
    },
    "aq.dp1": {
      en: "The development process focused on creating a health-focused native mobile application that makes hydration tracking simple and motivating. Research into hydration science, mobile user behavior patterns, and wellness app design informed every decision, ensuring the app effectively supports users in building better drinking habits through their smartphones.",
      id: "Proses pengembangan berfokus pada pembuatan aplikasi mobile native yang fokus pada kesehatan dan membuat pelacakan hidrasi sederhana serta memotivasi. Riset tentang ilmu hidrasi, pola perilaku pengguna mobile, dan desain aplikasi kesehatan menjadi pertimbangan setiap keputusan, memastikan aplikasi efektif mendukung pengguna membangun kebiasaan minum yang lebih baik melalui ponsel mereka.",
    },
    "aq.dp2": {
      en: 'Built using <span class="highlight">Flutter</span> and <span class="highlight">Dart</span> for cross-platform mobile development on iOS and Android, the application prioritizes native performance and beautiful mobile UI. Data persistence is handled through <span class="highlight">SQLite</span> and <span class="highlight">Shared Preferences</span>, while state management utilizes <span class="highlight">Provider</span>. Special attention was given to creating engaging visual progress indicators, smart reminder algorithms using local push notifications, and a gamification system that encourages consistent usage without being intrusive.',
      id: 'Dibangun menggunakan <span class="highlight">Flutter</span> dan <span class="highlight">Dart</span> untuk pengembangan mobile lintas platform di iOS dan Android, aplikasi memprioritaskan performa native dan UI mobile yang indah. Penyimpanan data ditangani melalui <span class="highlight">SQLite</span> dan <span class="highlight">Shared Preferences</span>, sedangkan manajemen state menggunakan <span class="highlight">Provider</span>. Perhatian khusus diberikan pada indikator progres visual yang menarik, algoritma pengingat cerdas menggunakan notifikasi push lokal, serta sistem gamifikasi yang mendorong penggunaan konsisten tanpa terasa mengganggu.',
    },

    /* ============ TIME & TODO ============ */
    "td.ov1": {
      en: '<span class="highlight">Flowly</span> is a personal productivity dashboard on the web (Laravel 12) that unites four main modules in a single platform: <span class="highlight">Task & Project Management</span> (a task list with priorities, schedules, and progress-bar projects), <span class="highlight">Calendar</span> (daily event agenda), <span class="highlight">Finance</span> (transaction recording plus subscription tracking), and <span class="highlight">Focus Timer</span> (pomodoro-style focus sessions linked to tasks).',
      id: '<span class="highlight">Flowly</span> adalah personal productivity dashboard berbasis web (Laravel 12) yang menyatukan empat modul utama dalam satu platform: <span class="highlight">Task & Project Management</span> (daftar tugas dengan prioritas, jadwal, dan proyek berprogress bar), <span class="highlight">Calendar</span> (agenda event harian), <span class="highlight">Finance</span> (pencatatan transaksi + pelacakan langganan), dan <span class="highlight">Focus Timer</span> (sesi fokus ala pomodoro yang terhubung ke tugas).',
    },
    "td.ov2": {
      en: "Its goal is to become a one-stop daily \"command center\", replacing the need to switch between a task manager, calendar, budgeting app, and timer. The main advantage is cross-module data integration: one task can connect to a project plus a focus session; subscriptions that fall due appear alongside monthly expenses; and a summary of everything (today's tasks, late tasks, events, project progress, focus statistics) shows up on the dashboard.",
      id: "Tujuannya menjadi \"command center\" harian satu pintu, menggantikan kebutuhan berpindah antara task manager, kalender, budgeting app, dan timer. Keunggulan utamanya adalah integrasi data lintas modul: satu tugas bisa terhubung ke proyek + sesi fokus; langganan yang jatuh tempo tampil berdampingan dengan pengeluaran bulanan; ringkasan semuanya (tugas hari ini, tugas terlambat, event, progres proyek, statistik fokus) tampil di dashboard.",
    },
    "td.featIntro": {
      en: 'A productivity dashboard with features that are <span class="highlight">integrated</span>, <span class="highlight">modular</span>, and all in one place.',
      id: 'Dashboard produktivitas dengan fitur yang <span class="highlight">terintegrasi</span>, <span class="highlight">modular</span>, dan dalam satu tempat.',
    },
    "td.f1t": { en: "Unified Dashboard", id: "Dashboard Terpadu" },
    "td.f1d": {
      en: "Today's tasks, late tasks, inbox count, today's events, monthly income/expense, subscriptions due within 7 days, active focus session, project progress, and a real-time global search across all modules.",
      id: "Tugas hari ini, tugas terlambat, inbox count, event hari ini, income/expense bulan ini, langganan jatuh tempo 7 hari, sesi fokus aktif, progres proyek, serta global search lintas modul secara real-time.",
    },
    "td.f2t": { en: "Task & Project Management", id: "Task & Project Management" },
    "td.f2d": {
      en: "Task statuses (inbox/todo/in_progress/done), color-coded priorities, due dates, schedules, estimated vs actual time, soft-delete, drag & reorder, and quick capture with natural language date parsing in Indonesian (\"besok jam 5 sore\", \"lusa\", \"minggu depan\").",
      id: "Status tugas (inbox/todo/in_progress/done), prioritas berwarna, due date, jadwal, estimasi vs waktu aktual, soft-delete, drag & reorder, dan quick capture dengan parsing tanggal natural bahasa Indonesia (\"besok jam 5 sore\", \"lusa\", \"minggu depan\").",
    },
    "td.f3t": { en: "Project Progress", id: "Progres Proyek" },
    "td.f3d": {
      en: "Projects with colors, icons, and archive, whose progress is automatically derived from the ratio of completed tasks.",
      id: "Proyek dengan warna, ikon, dan arsip, yang progresnya otomatis dihitung dari rasio tugas selesai.",
    },
    "td.f4t": { en: "Finance & Subscriptions", id: "Finance & Langganan" },
    "td.f4d": {
      en: "Income/expense transactions with categories, payment methods & notes; subscriptions with billing cycles converted to a monthly equivalent plus days-until-bill, weekly reports per category, and a 7-day summary.",
      id: "Transaksi income/expense dengan kategori, metode bayar & catatan; langganan dengan billing cycle yang dikonversi ke setara bulanan + hitungan hari sampai tagihan, laporan mingguan per kategori, dan summary 7 hari.",
    },
    "td.f5t": { en: "Calendar", id: "Kalender" },
    "td.f5d": {
      en: "Event CRUD with start/end times, all-day support, colors, and relations to tasks, exposed through a JSON endpoint for the frontend.",
      id: "CRUD event dengan start/end, all-day, warna, dan relasi ke tugas; tersedia endpoint JSON untuk frontend.",
    },
    "td.f6t": { en: "Focus Timer Linked to Tasks", id: "Focus Timer Terhubung ke Tugas" },
    "td.f6d": {
      en: "Start, pause, cancel, or complete a pomodoro-style focus session tied to a task; when completed, actual minutes are automatically added to that task.",
      id: "Mulai, pause, cancel, atau complete sesi fokus ala pomodoro yang terikat ke tugas; saat selesai, actual minutes otomatis ditambahkan ke tugas tersebut.",
    },
    "td.dp1": {
      en: "The project started with framework & authentication scaffolding using Laravel 12 and Laravel Breeze as the foundation. The schema was developed iteratively — 43 migration files show the gradual process, where each module was built and then enriched (for example, the tasks table started basic, then gained user_id, schedule fields, status & priority, soft-delete, project_id, and sort order). Data isolation is enforced by scoping every query with user_id, protected by auth + verified middleware.",
      id: "Proyek dimulai dengan scaffolding framework & autentikasi menggunakan Laravel 12 dan Laravel Breeze sebagai fondasi. Skema database dikembangkan secara iteratif — 43 file migrasi menunjukkan proses bertahap, di mana setiap modul dibangun lalu diperkaya (contoh: tabel tasks dimulai dari dasar lalu ditambah user_id, schedule fields, status & priority, soft-delete, project_id, sort order). Isolasi data diberlakukan dengan men-scope setiap query dengan user_id, dilindungi middleware auth + verified.",
    },
    "td.dp2": {
      en: 'For testing, <span class="highlight">Pest PHP</span> is used (tests/Feature, tests/Unit) — still the built-in ExampleTest, with no module-specific tests yet. Conventions follow Model binding & Form Request in controllers, <span class="highlight">Blade</span> views, and Laravel Pint style. Setup is automated through a <span class="highlight">composer setup</span> script (install deps + env + migrate + build) and <span class="highlight">composer dev</span> (running the server, queue, and Vite together).',
      id: 'Untuk pengujian digunakan <span class="highlight">Pest PHP</span> (tests/Feature, tests/Unit) — masih berupa ExampleTest bawaan, belum ada test spesifik modul. Konvensi mengikuti Model binding & Form Request pada controller, view <span class="highlight">Blade</span>, dan gaya penulisan Laravel Pint. Setup diotomatiskan melalui script <span class="highlight">composer setup</span> (install deps + env + migrate + build) dan <span class="highlight">composer dev</span> (menjalankan server + queue + vite bersamaan).',
    },

    /* ============ GAME MONOPOLI ============ */
    "mo.ov1": {
      en: '<span class="highlight">Game Monopoli</span> brings the classic monopoly board game to the browser. Players roll dice, move around the board, buy properties, and charge rent as they compete to become the richest player.',
      id: '<span class="highlight">Game Monopoli</span> menghadirkan permainan papan monopoli klasik ke browser. Pemain melempar dadu, bergerak mengelilingi papan, membeli properti, dan memungut sewa saat bersaing menjadi pemain terkaya.',
    },
    "mo.ov2": {
      en: "Recreated with attention to the traditional rules, the game features an animated board, a full economy system, and chance cards that keep every round exciting for friends playing together.",
      id: "Dibuat ulang dengan memperhatikan aturan tradisional, game ini memiliki papan animasi, sistem ekonomi lengkap, dan kartu kesempatan yang membuat setiap ronde seru untuk dimainkan bersama teman.",
    },
    "mo.featIntro": {
      en: 'A board game with features that are <span class="highlight">classic</span>, <span class="highlight">strategic</span>, and playable with friends.',
      id: 'Game papan dengan fitur yang <span class="highlight">klasik</span>, <span class="highlight">strategis</span>, dan dapat dimainkan bersama teman.',
    },
    "mo.f1t": { en: "Turn-Based Multiplayer", id: "Multiplayer Berbasis Giliran" },
    "mo.f1d": {
      en: "Play with friends taking turns on a single device.",
      id: "Bermain dengan teman secara bergiliran dalam satu perangkat.",
    },
    "mo.f2t": { en: "Property Trading", id: "Jual Beli Properti" },
    "mo.f2d": {
      en: "Buy, sell, and rent properties to build your real estate empire.",
      id: "Beli, jual, dan sewakan properti untuk membangun kerajaan properti Anda.",
    },
    "mo.f3t": { en: "Dice & Board", id: "Dadu & Papan" },
    "mo.f3d": {
      en: "Realistic dice rolls and a detailed animated game board.",
      id: "Lemparan dadu realistis dan papan permainan animasi yang detail.",
    },
    "mo.f4t": { en: "Money System", id: "Sistem Uang" },
    "mo.f4d": {
      en: "A full economy with salaries, rent, taxes, and bank money.",
      id: "Ekonomi lengkap dengan gaji, sewa, pajak, dan uang bank.",
    },
    "mo.f5t": { en: "Chance Cards", id: "Kartu Kesempatan" },
    "mo.f5d": {
      en: "Draw chance cards that can change the momentum of the game.",
      id: "Ambil kartu kesempatan yang bisa mengubah arah permainan.",
    },
    "mo.f6t": { en: "Win Condition", id: "Kondisi Menang" },
    "mo.f6d": {
      en: "Classic bankruptcy rule — the last player with money wins.",
      id: "Aturan bangkrut klasik — pemain terakhir yang memiliki uang menjadi pemenang.",
    },
    "mo.dp1": {
      en: "The game recreated the classic monopoly logic with a focus on accurate rules and fun balance. Development prioritized a clean game-state engine so all actions are consistent and fair.",
      id: "Game ini membuat ulang logika monopoli klasik dengan fokus pada aturan yang akurat dan keseimbangan yang seru. Pengembangan mengutamakan engine state permainan yang bersih agar semua aksi konsisten dan adil.",
    },
    "mo.dp2": {
      en: 'Built with <span class="highlight">HTML5</span>, <span class="highlight">CSS3</span>, and vanilla <span class="highlight">JavaScript</span>, the game uses a game-state engine for turn management, ownership, rent calculation, and win detection.',
      id: 'Dibangun dengan <span class="highlight">HTML5</span>, <span class="highlight">CSS3</span>, dan <span class="highlight">JavaScript</span> murni, game ini menggunakan engine state untuk manajemen giliran, kepemilikan, perhitungan sewa, dan deteksi pemenang.',
    },
  };

  var PAGES = {
    en: {
      "index.html": "Nabil — Creative Developer",
      "home.html": "Home — Nabil",
      "about.html": "About — Nabil",
      "projects.html": "Projects — Nabil",
      "skills.html": "Skills — Nabil",
      "contact.html": "Contact — Nabil",
      "resume.html": "Resume — Nabil",
      "muslimapps.html": "Muslim Apps — Project Detail",
      "weather.html": "Weather App — Project Detail",
      "bmdiesel.html": "BmDiesel — Project Detail",
      "gamepembelajaran.html": "Game Pembelajaran — Project Detail",
      "yayasamufid.html": "Yayasan Mufid — Project Detail",
      "aquatrack.html": "AquaTrack — Project Detail",
      "timeandtodo.html": "Flowly — Project Detail",
      "monopoligame.html": "Game Monopoli — Project Detail",
    },
    id: {
      "index.html": "Nabil — Pengembang Kreatif",
      "home.html": "Beranda — Nabil",
      "about.html": "Tentang — Nabil",
      "projects.html": "Proyek — Nabil",
      "skills.html": "Keterampilan — Nabil",
      "contact.html": "Kontak — Nabil",
      "resume.html": "Curriculum Vitae — Nabil",
      "muslimapps.html": "Muslim Apps — Detail Proyek",
      "weather.html": "Aplikasi Cuaca — Detail Proyek",
      "bmdiesel.html": "BmDiesel — Detail Proyek",
      "gamepembelajaran.html": "Game Pembelajaran — Detail Proyek",
      "yayasamufid.html": "Yayasan Mufid — Detail Proyek",
      "aquatrack.html": "AquaTrack — Detail Proyek",
      "timeandtodo.html": "Flowly — Detail Proyek",
      "monopoligame.html": "Game Monopoli — Detail Proyek",
    },
  };

  var ROLES = {
    en: [
      "Web Developer",
      "Backend Engineer",
      "Laravel Developer",
      "API Builder",
      "Problem Solver",
    ],
    id: [
      "Web Developer",
      "Backend Engineer",
      "Laravel Developer",
      "Pembuat API",
      "Pemecah Masalah",
    ],
  };

  var current = (function () {
    try {
      return localStorage.getItem(LS_KEY) === "id" ? "id" : "en";
    } catch (e) {
      return "en";
    }
  })();

  function pageName() {
    var parts = location.pathname.split("/");
    return parts[parts.length - 1] || "index.html";
  }

  function apply() {
    document.documentElement.lang = current;

    var title = PAGES[current][pageName()];
    if (title) document.title = title;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var map = I18N[key];
      if (map && map[current] !== undefined) el.innerHTML = map[current];
    });

    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-ph");
      var map = I18N[key];
      if (map && map[current] !== undefined) el.placeholder = map[current];
    });

    document.dispatchEvent(
      new CustomEvent("langchange", {
        detail: { lang: current, roles: ROLES[current] },
      }),
    );
  }

  function injectToggle() {
    var style = document.createElement("style");
    style.textContent =
      '.lang-toggle{display:inline-flex;align-items:center;gap:0.2rem;padding:0.3rem 0.45rem;border:1px solid rgba(200,162,122,0.4);border-radius:999px;background:rgba(200,162,122,0.08);cursor:pointer;font-family:"Inter",system-ui,sans-serif;font-size:0.64rem;font-weight:700;letter-spacing:0.08em;color:#666;line-height:1;transition:border-color .3s ease,background .3s ease;-webkit-user-select:none;user-select:none}.lang-toggle:hover{border-color:#c8a27a;background:rgba(200,162,122,0.15)}.lang-toggle .lang-btn{padding:0.22rem 0.5rem;border-radius:999px;transition:all .3s ease;color:#666}.lang-toggle .lang-btn.active{background:#c8a27a;color:#fff}';
    document.head.appendChild(style);

    var buttons = [];

    function render(b) {
      b.innerHTML =
        '<span class="lang-btn' +
        (current === "en" ? " active" : "") +
        '">EN</span>' +
        '<span class="lang-btn' +
        (current === "id" ? " active" : "") +
        '">ID</span>';
    }

    function createButton() {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "lang-toggle";
      b.setAttribute("aria-label", "Change language");
      render(b);
      b.addEventListener("click", function () {
        current = current === "en" ? "id" : "en";
        try {
          localStorage.setItem(LS_KEY, current);
        } catch (e) {}
        buttons.forEach(render);
        apply();
      });
      buttons.push(b);
      return b;
    }

    document.querySelectorAll(".top-nav").forEach(function (nav) {
      var links = nav.querySelectorAll(".nav-link");
      var btn = createButton();
      if (links.length > 0 && links[0].parentElement !== nav) {
        links[0].parentElement.appendChild(btn);
      } else {
        nav.appendChild(btn);
      }
    });
  }

  var FOOTER_SKIP = { "index.html": true, "home.html": true };

  function injectFooter() {
    if (FOOTER_SKIP[pageName()]) return;

    var style = document.createElement("style");
    style.textContent =
      '.site-footer{position:relative;z-index:5;margin-top:0;padding:2.2rem 8vw;border-top:1px solid rgba(200,162,122,0.18);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem;background:transparent}.site-footer *{font-family:"Inter",system-ui,sans-serif}.site-footer-brand{display:flex;flex-direction:column;gap:0.2rem}.site-footer-name{font-size:0.72rem;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:#111}.site-footer-tag{font-size:0.62rem;letter-spacing:0.06em;color:#666}.site-footer-nav{display:flex;gap:1.6rem;align-items:center}.site-footer-nav a{font-size:0.68rem;font-weight:600;letter-spacing:0.09em;text-transform:uppercase;color:#666;text-decoration:none;transition:color .3s ease}.site-footer-nav a:hover{color:#c8a27a}.site-footer-social{display:flex;gap:0.9rem;align-items:center}.site-footer-social a{width:32px;height:32px;display:inline-flex;align-items:center;justify-content:center;border:1px solid rgba(0,0,0,0.14);border-radius:50%;color:#666;transition:all .3s ease}.site-footer-social a:hover{border-color:#c8a27a;color:#c8a27a;transform:translateY(-2px)}.site-footer-social svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.site-footer-social svg.wa{fill:currentColor;stroke:none}.site-footer-bottom{width:100%;display:flex;align-items:center;justify-content:space-between;gap:0.6rem;padding-top:1.1rem;border-top:1px solid rgba(0,0,0,0.06);font-size:0.62rem;color:#999;letter-spacing:0.05em}@media (max-width:768px){.site-footer{padding:1.6rem 5vw}.site-footer-nav{display:none}.site-footer-social{order:2}.site-footer-bottom{font-size:0.55rem}}';
    document.head.appendChild(style);

    var icons = {
      linkedin:
        '<svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
      github:
        '<svg class="wa" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
      wa: '<svg class="wa" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
    };

    var footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.setAttribute("role", "contentinfo");
    footer.innerHTML =
      '<div class="site-footer-brand">' +
      '<span class="site-footer-name">Muhammad Syafwan Nabil</span>' +
      '<span class="site-footer-tag" data-i18n="ft.built">Always learning · Always building</span>' +
      '</div>' +
      '<nav class="site-footer-nav" aria-label="Footer">' +
      '<a href="home.html" data-i18n="ft.home">Home</a>' +
      '<a href="projects.html" data-i18n="ft.projects">Projects</a>' +
      '<a href="about.html" data-i18n="ft.about">About</a>' +
      '<a href="skills.html" data-i18n="ft.skills">Skills</a>' +
      '<a href="resume.html" data-i18n="ft.resume">Resume</a>' +
      '<a href="contact.html" data-i18n="ft.contact">Contact</a>' +
      '</nav>' +
      '<div class="site-footer-social">' +
      '<a href="https://www.linkedin.com/in/muhammad-syafwan-nabil-75a3003a6/" target="_blank" rel="noopener" aria-label="LinkedIn">' +
      icons.linkedin +
      '</a>' +
      '<a href="https://github.com/Shonabil" target="_blank" rel="noopener" aria-label="GitHub">' +
      icons.github +
      '</a>' +
      '<a href="https://wa.me/6281241081143" target="_blank" rel="noopener" aria-label="WhatsApp">' +
      icons.wa +
      '</a>' +
      '</div>' +
      '<div class="site-footer-bottom">' +
      '<span>© ' +
      new Date().getFullYear() +
      ' Muhammad Syafwan Nabil</span>' +
      '<span data-i18n="ft.rights">All rights reserved.</span>' +
      '</div>';

    var base = /\/project\/[^\/]+\.html$/.test(location.pathname) ? "../" : "";
    footer.querySelectorAll(".site-footer-nav a").forEach(function (a) {
      a.href = base + a.getAttribute("href");
    });

    document.body.appendChild(footer);
  }

  injectFooter();
  injectToggle();
  apply();

  window.Lang = {
    current: current,
    t: function (key) {
      var map = I18N[key];
      return map ? map[current] : key;
    },
    set: function (lang) {
      current = lang === "id" ? "id" : "en";
      try {
        localStorage.setItem(LS_KEY, current);
      } catch (e) {}
      apply();
      document.querySelectorAll(".lang-btn").forEach(function (el) {
        el.classList.toggle(
          "active",
          el.textContent === (current === "en" ? "EN" : "ID"),
        );
      });
    },
  };
})();
