// ============================================================
//  KONFIGURASI PERNIKAHAN — Emi & Sul
//  Edit semua data di bawah sesuai pernikahan kamu
// ============================================================

export const WEDDING = {
  mempelai1: "Nuraeni",
  mempelai2: "Sulfana",

  namasingkat1: "Emi",
  namasingkat2: "Sul",

  gelar1: "S.Pd., Gr",
  gelar2: "",

  ayah1: "Bapak Saparuddin",
  ibu1:  "Ibu Nursiah",

  ayah2: "Bapak Baharuddin",
  ibu2:  "Ibu Halipa",

  tanggal: "2026-06-08",

  akad: {
    tanggal: "Senin, 08 Juni 2026",
    waktu:   "10:00 WITA – selesai",
  },

  resepsi: {
    tanggal: "Senin, 08 Juni 2026",
    waktu:   "09:00 WITA – selesai",
  },

  venue:  "Allagalung, Kel. Malakaji",
  alamat: "Samping Masjid Al-Manar, Kec. Tompobulu, Kab. Gowa, Sulawesi Selatan",

  mapsUrl: "https://maps.google.com/?q=Malakaji+Tompobulu+Gowa+Sulawesi+Selatan",

  batasRsvp: "1 Juni 2026",

  // Undangan dibuka dengan nama tamu
  namaUndangan: "Bapak/Ibu/Saudara(i)",
};

// ============================================================
//  DATA MEMPELAI
// ============================================================

export const MEMPELAI = [
  {
    nama:      "Nuraeni, S.Pd., Gr",
    namasingkat: "Emi",
    gelar:     "The Bride",
    ayah:      "Bapak Saparuddin",
    ibu:       "Ibu Nursiah",
    urutan:    "Putri Kedua",
    foto:      "/photos/mempelai1.jpeg",
    instagram: "@nuraeni",
    igUrl:     "https://www.instagram.com/nuraeni_1007?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    nama:      "Sulfana",
    namasingkat: "Sul",
    gelar:     "The Groom",
    ayah:      "Bapak Baharuddin",
    ibu:       "Ibu Halipa",
    urutan:    "Putra Pertama",
    foto:      "/photos/mempelai2.jpeg",
    instagram: "@sulfana",
    igUrl:     "https://www.instagram.com/sulfana_____?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
];

// ============================================================
//  YANG MENGUNDANG
// ============================================================

export const PENGUNDANG = {
  utama: "Saparuddin & Nursiah",
  turut: [
    { nama: "Dr. Azis Masang, S.Ag., M.Si.", keterangan: "Dg. Naba & Ny." },
    { nama: "Hartono Hamzah, S.Pd., Gr", keterangan: "& Ny." },
    { nama: "Muhammad Nur, S.H", keterangan: "" },
    { nama: "Muh. Saleh", keterangan: "& Ny." },
    { nama: "Mansur Masang Dg. Naro", keterangan: "& Ny." },
    { nama: "Amri, S.H.I., S.Pd.I", keterangan: "& Ny." },
    { nama: "Ismail Hamzah", keterangan: "& Ny." },
    { nama: "Kedua Mempelai", keterangan: "" },
  ],
};

// ============================================================
//  REKENING BANK (AMPLOP DIGITAL) — opsional
// ============================================================

export const BANKS = [
  {
    bank:  "Bank Sulselbar",
    norek: "1372010000032267",
    atas:  "NURAENI",
  },
];

// ============================================================
//  KISAH CINTA
// ============================================================

export const LOVE_STORY = [
  {
    tahun:  "Awal Pertemuan",
    judul:  "Takdir yang Indah",
    cerita: "Dua hati yang berbeda jalan, dipertemukan oleh Yang Maha Kuasa dalam waktu yang tepat.",
    icon:   "✨",
  },
  {
    tahun:  "Mengenal Lebih Dekat",
    judul:  "Tumbuh Bersama",
    cerita: "Seiring waktu, kedekatan kami semakin terasa. Setiap percakapan membawa kami lebih memahami satu sama lain.",
    icon:   "💌",
  },
  {
    tahun:  "Lamaran",
    judul:  "Satu Langkah Lebih Dekat",
    cerita: "Di hadapan keluarga, dengan penuh kesungguhan dan ketulusan, ia hadir melamar dengan cara yang paling bermartabat.",
    icon:   "💍",
  },
  {
    tahun:  "08 Juni 2026",
    judul:  "Ikatan Abadi",
    cerita: "Insya Allah, di hari yang penuh berkah ini, kami akan mengikat janji suci di hadapan Allah dan para saksi.",
    icon:   "🕊️",
  },
];

// ============================================================
//  FOTO GALERI
// ============================================================

export const PHOTOS = [
  "/photos/galeri1.jpeg",
  "/photos/galeri2.jpeg",
  "/photos/galeri3.jpeg",
  "/photos/galeri4.jpeg",
  "/photos/galeri5.jpeg",
  "/photos/galeri6.jpeg",
];

export const PHOTO_PLACEHOLDERS = ["📸", "🌸", "💍", "🌿", "🕊️", "🌹"];

// ============================================================
//  GOOGLE FORMS RSVP
// ============================================================

export const GOOGLE_FORM = {
  actionUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdGU9z1vhIsMItONuTQX57PPMPCgyWsvaZsEKMCiYGlvXZ43A/formResponse",
  fields: {
    nama:       "entry.34614750",
    telepon:    "entry.483468591",
    kehadiran:  "entry.1978178535",
    jumlahTamu: "entry.2127729527",
    pesan:      "entry.1661952454",
  },
  enabled: true,
};

// BUKU TAMU
export const GUESTBOOK_URL = "https://script.google.com/macros/s/AKfycbwXHW293A0KlMrXqOcz2i0xEOIE_bw9usRRtoR9iUsKUo468w4PZB78rH91b01WrQ/exec";

// ============================================================
//  MUSIK BACKGROUND
// ============================================================

export const MUSIC = {
  src:     "/music/background.mp3",
  enabled: true, // set true setelah tambah file MP3
};