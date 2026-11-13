# Aksara Anti-Slop Agent: Global Engineering & UI/UX Guidelines

## 1. UI/UX Principles & Anti-AI-Slop Guardrails
- **Bukan AI Slop & Craftsmanship Standard:** Hindari desain generik tanpa fungsi (gradien ungu SaaS klise, glassmorphism berlebihan, glow serentak di semua elemen, atau floating 3D/abstract blobs yang tidak menyampaikan informasi). Terapkan 5 standar keahlian:
  1. *Intentionality:* Setiap keputusan visual dan salinan memiliki alasan yang dapat diartikulasikan.
  2. *Functional Completeness:* Setiap elemen interaktif wajib berfungsi nyata atau ditiadakan.
  3. *Content-Driven Composition:* Tata letak didorong oleh konten riil produk, bukan sekadar mengisi template.
  4. *Resilience:* Stabil di setiap kondisi (5 UI states), tema, breakpoint, dan aksesibilitas keyboard.
  5. *Evidence Over Claims:* Tampilkan data yang terverifikasi, bukan klaim palsu.
- **Hard Gates Anti-Slop (Mutlak Tanpa Pengecualian):**
  - **Dilarang Em Dash (`—`):** Dilarang keras menggunakan karakter tanda pisah *em dash* (`—`) dalam teks UI atau tulisan buatan agen. Gunakan tanda koma (`,`), titik (`.`), titik dua (`:`), atau tanda kurung `()`.
  - **Data Riil & Anti-Klaim Palsu:** Dilarang mengarang angka, statistik (seperti "10K+ Users", "99.9% Uptime"), atau klaim sertifikasi keamanan/performa tanpa sumber nyata. Jika belum ada data riil, gunakan label placeholder jujur (`[REAL DATA]`) atau jangan tampilkan angka sama sekali.
  - **Dilarang Testimoni & Identitas Fiktif:** Dilarang membuat review, avatar AI, nama, atau jabatan fiktif.
  - **Klarifikasi Aset Visual:** Wajib konfirmasi sebelum membuat logo, foto profil, atau avatar tim, atau gunakan placeholder jujur bertanda `[LOGO]`.
  - **Elemen Interaktif Berfungsi Nyata:** Semua tombol, link, tab, accordion, dropdown, atau modal wajib memiliki fungsi nyata (modal dapat dibuka & ditutup dengan `Escape`, link menuju target section yang benar-benar ada). Dilarang menyematkan tombol mati atau tautan navbar ke halaman fiktif.
  - **Aksesibilitas Keyboard & Focus Ring:** Seluruh elemen interaktif wajib dapat dijangkau dan dioperasikan via keyboard (`Tab`, `Shift+Tab`, `Enter`, `Space`, `Escape`). Dilarang menghapus focus outline (`outline: none`) tanpa pengganti fokus visual yang jelas.
  - **Semantik Interaksi & Affordance:** Semua kontrol aktif wajib memiliki `cursor: pointer`, kontrol disabled memiliki `cursor: not-allowed`. Gunakan elemen semantik native (`<button>` untuk aksi, `<a href>` untuk navigasi). Setiap tombol ikon wajib memiliki `aria-label` yang jelas.
  - **Verifikasi Sebelum Serah Terima:** Sebelum menyatakan tugas selesai, wajib memastikan kode dapat dibangun/dijalankan dan diverifikasi interaksinya.
- **Purpose-Gate & Batasan Dosis Visual (No Technique Without Purpose):**
  - Setiap teknik visual (gradien, glassmorphism, shadow, glow) hanya diizinkan jika melayani hierarki atau identitas dengan tujuan fungsional yang jelas.
  - **Dose Caps:** Efek *Glassmorphism* dan *Glow* dibatasi maksimal 1–2 elemen fokus saja (dilarang dipasang serentak di navbar, kartu, modal, dan sidebar).
  - **Feature Cards Berhierarki:** Hindari membuat seluruh kartu fitur berukuran, ber-padding, dan berikon identik secara seragam tanpa variasi hierarki visual.
  - **Aturan Emas 1 Baris (Write It Down):** Setiap keputusan visual utama (warna, layout, tipografi, spacing) wajib memiliki alasan fungsi yang dapat diartikulasikan dalam satu baris kalimat.
- **Anti-AI Template Layouts & Copywriting:**
  - Hindari tata letak template AI klise: *bento-grid* default tanpa kebutuhan konten, "How It Works" selalu 3 langkah lingkaran bernomor, bar logo "Trusted By" langsung di bawah hero, atau pricing 3 kolom seragam.
  - Hindari kata dengung pemasaran AI (*AI buzzwords*): *"AI Powered"*, *"Seamless"*, *"Revolutionary"*, *"Cutting Edge"*, *"Next Generation"*, *"Ultimate"*. Gunakan bahasa spesifik yang menjelaskan manfaat nyata.
  - Hindari CTA generik ("Get Started", "Learn More", "Explore"). Gunakan CTA kontekstual yang spesifik terhadap tindakan ("Mulai Uji Coba Gratis", "Buat Tiket Perbaikan").
  - Batasi palet warna aktif: maksimal 2–3 warna inti + 1 warna aksen terarah.
- **Aksesibilitas (A11y):** Wajib memenuhi standar WCAG AA (rasio kontras teks minimal 4.5:1 untuk teks normal dan 3:1 untuk teks besar).
- **Wajib 5 UI States:** Setiap merancang antarmuka atau komponen, selalu perhitungkan 5 state antarmuka:
  1. **Ideal State:** Tampilan saat data lengkap dan normal.
  2. **Loading State:** Gunakan skeleton loading yang proporsional dengan konten, hindari spinner layar penuh.
  3. **Empty State:** Berikan ilustrasi minimal atau pesan informatif serta Call-to-Action (CTA) yang jelas saat data belum ada.
  4. **Error State:** Pesan kesalahan yang ramah pengguna, jelas penyebabnya, dan tombol aksi pemulihan (misal: "Coba Lagi").
  5. **Edge / Max State:** Antisipasi data ekstrem (nama sangat panjang, nilai 0, daftar ribuan baris dengan pagination/virtualization).
- **Design System & Spacing:** Gunakan 8-point / 4-point spacing grid secara konsisten untuk padding, margin, dan layout alignment.
- **Murni Antarmuka Produk (No Meta-Checklist Banners):** Dilarang memasang banner checklist audit teknis atau keterangan meta (seperti "✅ A11y WCAG AA", "Bebas AI Slop", atau label kepatuhan) di dalam antarmuka visual. Desain harus tampil 100% murni seperti aplikasi nyata yang dipakai pengguna akhir, bukan lembar presentasi/demo.
- **Kesesuaian Tema & Domain (Anti-Dark Mode Bias):**
  - Hindari kecenderungan AI membuat segala sesuatu bertema gelap (*Dark Mode Bias*) secara default.
  - Sesuaikan tema visual dengan konteks industri dan pengguna:
    - **Layanan Publik / Pemerintahan / Enterprise / Finansial / Dokumen / E-Commerce Umum / Pabrik Manufaktur:** Prioritaskan **Mode Terang (Light Mode)** yang bersih (latar putih `#FFFFFF` atau abu-abu terang netral `#F8FAFC`, tipografi gelap berkontras tinggi, aksen warna resmi/brand tegas).
    - **DevTools / Entertainment / Creative Suite:** Boleh menggunakan dark mode dengan kontras yang teruji.
  - Jika membuat komponen web/aplikasi penuh yang mendukung dwitema (*theme toggle*), kedua mode wajib berfungsi sempurna tanpa merusak layout atau kontras.
- **Liveliness Toolkit & Design Read:**
  - Sebelum merancang antarmuka, tentukan arah desain dari arahan pengguna atau `DESIGN.md`. Jika tanpa arahan tertulis, beri label draf dan gunakan setelan dial seimbang.
  - Nyatakan *Design Read* internal dengan 3 Dial (skala 1 Calm s/d 3 Bold):
    - **ENERGY (1..3):** Intensitas ketegasan visual tampilan.
    - **RHYTHM (1..3):** Variasi komposisi antar-bagian tata letak.
    - **MOTION (1..3):** Tingkatan animasi interaksi (wajib menghormati `prefers-reduced-motion`).
  - Sediakan satu titik fokus (*focal point*) utama per layar dan manfaatkan ruang kosong terstruktur (*structural whitespace*).
- **Inklusivitas & Ramah Pengguna Lintas Generasi (Universal & Senior-Friendly UX):**
  - Prioritaskan modal mengambang di tengah (*centered floating modal*) untuk rincian data penting atau konfirmasi krusial pada pengguna umum/non-teknis (hindari *side slide-over drawer* yang membingungkan orientasi fokus).
  - Berikan tombol aksi dan penutup eksplisit dengan label teks jelas (seperti "✕ Tutup (Esc)", "Kembali"), bukan hanya ikon kecil tanpa teks.
  - **Prinsip Gerbang Rendah Friksi (Frictionless User Entry):**
    - **E-Commerce:** Sediakan opsi *Guest Checkout* tanpa mewajibkan registrasi akun di awal transaksi.
    - **SaaS / Web App:** Sediakan *Instant Demo / Onboarding* tanpa formulir verifikasi berbelit.
    - **Layanan / Pengaduan / Booking:** Sediakan opsi aksi cepat dengan input multisensori (kamera langsung, input suara bagi yang enggan mengetik, GPS 1-ketukan) dan fallback saluran kontak instan (seperti WhatsApp).

## 2. Fullstack Engineering Standards
- **Semantik & Modular:** Gunakan tag HTML semantik (`<nav>`, `<header>`, `<main>`, `<button>` bukan `<div>` dengan click listener). Pecah antarmuka menjadi komponen yang modular dan reusable.
- **Anti-Monolith & Batas Ukuran Berkas:** Hindari membuat satu berkas komponen raksasa (maksimal 150–200 baris per file). Pecah antarmuka menjadi sub-komponen terisolasi di folder `components/` dan pisahkan logika state/filter kompleks ke folder `hooks/`.
- **Isolasi Konstanta (No Magic Strings):** Jangan melakukan hardcode nilai string tetap, opsi dropdown, atau data mock langsung di dalam JSX. Wajib mengisolasi konstanta ke dalam berkas `constants.ts`.
- **Strict Data Contracts:** Gunakan interface / type definition yang jelas (TypeScript) untuk setiap model data, props komponen, dan respons API. Jangan mengasumsikan data selalu ideal (`null` dan `undefined` harus ditangani).
- **Responsivitas Teruji:** Desain harus bekerja dengan baik di berbagai ukuran layar: Desktop (1280px+), Tablet (768px), dan Mobile (375px).
- **Performa & Media Dimensions:** Wajib menyertakan atribut dimensi (`width` dan `height`) atau `aspect-ratio` pada semua elemen media guna mencegah CLS. Gambar hero utama wajib memiliki `fetchpriority="high"` tanpa `loading="lazy"`. Hindari skrip eksternal yang memblokir rendering di `<head>`.
- **Zero Code Comments:** Dilarang menyertakan komentar kode (seperti `//`, `/* */`, atau `{/* */}`) di dalam file kode. Tulis kode yang bersih, jelas, dan *self-documenting* tanpa coretan catatan atau teks komentar.

## 3. QA, Security & Resilience Standards
- **Anti-Double Submission & Action Locking:** Wajib mengunci (*disable*) tombol pemicu aksi, formulir kirim, atau pembayaran (*checkout*) seketika saat diklik dengan indikator proses (*loading spinner/text*) guna mencegah transaksi ganda, spam data, atau pemotongan dana berulang (*prevent duplicate payment, duplicate orders, or form spamming*).
- **Resource Bounds & Input Throttling:** Fitur penangkapan media (seperti unggahan berkas, gambar, dokumen, atau rekaman suara) wajib memiliki batasan tegas di sisi klien (validasi ukuran MB, pembatasan durasi otomatis misalnya audio maksimal 60 detik) guna menjaga efisiensi bandwidth dan kapasitas penyimpanan server.
- **Identifikasi Aman (Anti-Enumeration Public IDs):** Nomor identifikasi publik (seperti ID Pesanan `#ORD-...`, Invoice `#INV-...`, Tiket Bantuan `#TKT-...`, atau Kode Reservasi) dilarang menggunakan ID sekuensial yang mudah ditebak (1, 2, 3). Wajib menggunakan generator token non-sekuensial (contoh: `#ORD-2026-0412-K9X2`) guna mencegah eksploitasi kebocoran data pengguna via *enumeration attack* / IDOR (Insecure Direct Object Reference).
- **Efisiensi Operasional & Portabilitas Data:** Setiap tabel manajemen data administratif (dashboard back-office, CRM, panel admin, e-commerce order list) wajib menyediakan mekanisme pemilihan massal (*bulk selection & batch actions*) serta fitur ekspor data nyata (format CSV dengan UTF-8 BOM agar terbaca sempurna di Microsoft Excel, serta *print-friendly layout* untuk rekap fisik/PDF).
- **No File/CSS Patching via Scripts:** Dilarang menerapkan atau mengubah fitur UI menggunakan skrip eksternal yang melakukan string replacement pada berkas CSS atau source code. Bangun fitur langsung di dalam kode sumber asli.

## 4. Workflow & Kolaborasi
- **Jelaskan Sebelum Mengubah:** Sebelum melakukan perubahan kode atau arsitektur berskala besar, paparkan rencana singkat dan pertimbangannya terlebih dahulu.
- **Format Komunikasi Bersih & Responsif:** Saat menjelaskan struktur folder atau rencana di obrolan chat, hindari diagram bergaris rumit (`├──`, `└──`) yang mudah terpotong (*word wrap*) di layar sempit atau HP. Gunakan daftar poin (*bullet list*) teks sederhana yang rapi dan mudah dibaca.
- **Integritas Kode:** Pertahankan arsitektur dan struktur folder yang sudah ada kecuali ada instruksi eksplisit untuk mengubahnya.
- **Production-Ready:** Hasilkan kode yang rapi, bersih, type-safe, dan siap pakai, bukan sekadar potongan pseudocode.
- **Delivery Gate Self-Audit:** Sebelum menyelesaikan penyerahan antarmuka, pastikan seluruh Hard Gates lolos, teknik visual memiliki alasan fungsional, dan elemen interaktif terverifikasi.
