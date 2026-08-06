# Prompt: Website Portofolio Profesional

Buat satu halaman website portofolio dengan spesifikasi berikut:

## Informasi Umum
- Satu halaman penuh (single page), navigasi smooth scroll
- Tampilan modern dengan glassmorphism, gradien, dan dark/light mode
- Vanilla CSS & JavaScript (tanpa dependensi/framework eksternal)
- 3 file: `index.html`, `style.css`, `script.js`

## Struktur Halaman

### 1. Navbar
- Fixed/sticky di atas dengan background glass (backdrop-filter blur)
- Logo (bisa teks atau gambar)
- Menu navigasi dengan link ke tiap section
- Mobile: hamburger icon (3 garis → X saat open), dropdown menu
- Klik di luar menu tutup dropdown

### 2. Hero Section
- Full height atau near-full height
- Kicker badge kecil di atas judul
- Judul besar dengan kata kunci di-highlight (gradien)
- Deskripsi singkat
- 2 CTA button: primary (solid/gradien) dan secondary (outline)
- Statistik (opsional): 3-4 angka dengan label
- Visual: foto/profile dalam frame dengan efek shadow/glow
- Floating badge (opsional): 2-3 badge kecil dengan animasi
- Layout: grid 2 kolom (teks kiri, visual kanan) → 1 kolom di mobile

### 3. About Section
- Background subtle (berbeda dari hero)
- Kicker + heading
- 2-3 paragraf deskripsi
- Opsional: credentials/list prestasi, atau philosophy/code of conduct card
- Layout: grid 2 kolom (teks kiri, card kanan)

### 4. Skills Section
- Kicker + heading
- Grid cards (3 kolom → 2 kolom → 1 kolom)
- Tiap card: icon, judul, deskripsi singkat, tags/tools
- Hover effect: translateY naik, border dan glow berubah

### 5. Portfolio/Projects/Experience Section
- Kicker + heading
- Filter buttons (opsional): filter by category via JavaScript
- Grid cards (3 kolom → 2 kolom → 1 kolom)
- Tiap card: thumbnail (warna solid/gradien), overlay hover, judul, deskripsi, tags
- Filter animasi fadeUp

### 6. Contact Section
- Kicker + heading
- Deskripsi singkat (opsional)
- Grid 2-4 kolom contact cards (Email, LinkedIn, dll)
- Tiap card: icon, label, value

### 7. Footer
- Border top subtle
- Copyright text

## CSS Variables (Dark Theme Reference)
```css
--bg-primary: #0f0b1a;
--bg-elevated: #1a1530;
--bg-card: rgba(26, 21, 48, 0.6);
--surface-glass: rgba(26, 21, 48, 0.55);
--gradient-1: linear-gradient(135deg, #f97316, #fbbf24);
--accent-primary: #fb923c;
--accent-secondary: #fbbf24;
--text-primary: #fefcf5;
--text-secondary: #fdba74;
--text-muted: #b45309;
--border-subtle: rgba(251, 146, 60, 0.12);
--border-strong: rgba(251, 146, 60, 0.25);
--radius-sm: 12px;
--radius-md: 20px;
--radius-lg: 28px;
--radius-xl: 36px;
--container: 1140px;
```

## Animasi & Interaksi
- Smooth scroll untuk anchor link (via JS offset navbar)
- Scroll reveal: IntersectionObserver dengan class reveal+visible
- Hover cards: translateY naik, border/glow berubah
- Portfolio filter: sembunyikan item, munculkan dengan animasi fadeUp
- Hamburger animasi: 3 garis berubah jadi X
- prefers-reduced-motion: semua animasi/transisi dimatikan

## Responsive Breakpoints
- 1024px: hero, about jadi 1 kolom; skills, portfolio 2 kolom
- 768px: hamburger muncul; nav links jadi dropdown absolute; floating badge hidden
- 480px: padding kecil; button full width; grid 1 kolom
- prefers-reduced-motion: animasi/transisi nonaktif
