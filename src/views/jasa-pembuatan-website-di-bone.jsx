"use client";

import React from "react";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import { SEO } from "../components/seo";
import Testimoni1 from "../images/testimoni/testimoni-1.png";
import Testimoni5 from "../images/testimoni/testimoni-5.png";
import Testimoni6 from "../images/testimoni/testimoni-6.png";
import Testimoni7 from "../images/testimoni/testimoni-7.png";
import Testimoni8 from "../images/testimoni/testimoni-8.png";
import Testimoni9 from "../images/testimoni/testimoni-9.png";
import {
  CheckCircleFill,
  Whatsapp,
  BoxArrowUpRight,
  GeoAltFill,
  LightningChargeFill,
  PhoneFill,
  ShieldCheck,
  StarFill,
} from "react-bootstrap-icons";

const WA_STARTER =
  "https://api.whatsapp.com/send?phone=6281354789375&text=Halo%20Kak%20Zulzidan%2C%20saya%20tertarik%20Paket%20Starter%20Website%20UMKM%20Rp%201%20Juta.%20Boleh%20lihat%20contoh%20konsep%20untuk%20usaha%20saya%3F";
const WA_BISNIS =
  "https://api.whatsapp.com/send?phone=6281354789375&text=Halo%20Kak%20Zulzidan%2C%20saya%20ingin%20konsultasi%20Paket%20Website%20Bisnis%20Multi-Halaman%20(Rp%202%2C5%20Juta).";
const WA_CUSTOM =
  "https://api.whatsapp.com/send?phone=6281354789375&text=Halo%20Kak%20Zulzidan%2C%20saya%20ingin%20konsultasi%20pembuatan%20Website%20Custom%20%2F%20Sistem%20Perusahaan.";

const GOOGLE_REVIEW_URL =
  "https://www.google.com/search?q=jasa+pembuatan+website+bone#mpd=~10332837043445202168/customers/reviews";
const FIVERR_URL = "https://www.fiverr.com/muhzulzidan?public_mode=true";

const LIVE_DEMOS = [
  {
    title: "Swastia Catering",
    category: "Kuliner · Katering & Nasi Box",
    image: "/demos/swastia-v3-desktop.jpg",
    url: "https://swastia-catering-preview.vercel.app/",
    points: [
      "Tema cerah & hangat dengan 4 tab pilihan paket (Lite, Reguler, Family, Nasi Box)",
      "Kalkulator & form susun pesanan langsung terhubung ke WhatsApp Admin",
    ],
  },
  {
    title: "Ratu Interior (Gowa – Makassar)",
    category: "Interior · Eksterior & Kontraktor",
    image: "/demos/demo-ratu-interior.jpg",
    url: "https://ratu-interior-concept.vercel.app/",
    points: [
      "Desain arsitektur elegan (Dark & Gold Editorial) untuk kontraktor & custom furniture",
      "Galeri portofolio ruang & alur konsultasi survei lokasi via WhatsApp",
    ],
  },
  {
    title: "MAMU · PT Tigalapan Sukses",
    category: "Fashion · Konveksi & Grosir B2B",
    image: "/demos/demo-tigalapan.jpg",
    url: "https://tigalapan-sukses-preview.vercel.app/",
    points: [
      "Katalog retail & B2B grosir (10 cabang Sulawesi & Kaltim) + panduan ukuran",
      "Dilengkapi fitur simulasi mockup sablon kustom & cek stok cabang",
    ],
  },
  {
    title: "Amazing Insight",
    category: "Konsultan · Kelas & Layanan Bisnis",
    image: "/demos/demo-zoominar.jpg",
    url: "https://amazing-insight-zoominar.vercel.app/",
    points: [
      "Gaya visual modern (Swiss Grid) untuk lembaga pelatihan, agensi & konsultan",
      "Struktur layanan jelas (Meta Ads, Content, CRM, Training) + pendaftaran kelas",
    ],
  },
  {
    title: "Yang Terdekat Production",
    category: "Studio Kreatif · Foto & Videografi",
    image: "/demos/demo-ceritaapip.jpg",
    url: "https://ceritaapip.vercel.app/",
    points: [
      "Tampilan sinematik kontras tinggi dengan pemutar video showreel langsung",
      "Cocok untuk vendor dokumentasi, wedding, maupun production house",
    ],
  },
  {
    title: "Ponpes Villa Tahfizh Himmatul Quran",
    category: "Lembaga Pendidikan · Pesantren & Yayasan",
    image: "/demos/demo-vthq.jpg",
    url: "https://www.vthq.or.id/",
    points: [
      "Portal resmi lembaga di Malino dengan info pendaftaran santri & program akademik",
      "Dilengkapi halaman artikel, dokumentasi kegiatan, dan profil pimpinan",
    ],
  },
];

const PACKAGES = [
  {
    badge: "PALING LARIS UNTUK UMKM",
    name: "Paket Starter UMKM",
    price: "Rp 1 Juta",
    strike: "Rp 2.500.000",
    period: "Sekali Bayar · Tanpa Biaya Bulanan",
    highlight: true,
    description:
      "Cocok untuk usaha katering, kuliner, klinik, toko, kontraktor, dan jasa lokal yang butuh 1 halaman katalog resmi siap pakai.",
    features: [
      "1 Halaman Lengkap (Profil Usaha, Katalog Paket/Harga & Galeri Foto)",
      "Tombol Pesan Otomatis langsung terhubung ke WhatsApp Admin",
      "Desain modern, cepat, dan rapi di HP maupun Laptop",
      "Gratis subdomain (.vercel.app / .my.id) atau bantu sambung domain Anda",
      "Proses cepat 2–4 hari kerja — bisa lihat contoh demo dulu",
    ],
    ctaText: "Pesan Paket Rp 1 Juta via WA",
    ctaHref: WA_STARTER,
  },
  {
    badge: "UNTUK BISNIS BERKEMBANG",
    name: "Paket Bisnis Lengkap",
    price: "Rp 2,5 Juta",
    strike: "Rp 4.000.000",
    period: "Sekali Bayar · Termasuk Domain .com Tahun Pertama",
    highlight: false,
    description:
      "Cocok untuk perusahaan lokal, B2B/wholesale, interior, wedding organizer, atau lembaga yang butuh beberapa halaman terpisah.",
    features: [
      "Hingga 4–5 Halaman (Beranda, Tentang, Layanan/Katalog, Portofolio, Kontak)",
      "Gratis Domain .com / .id selama 1 tahun pertama",
      "Optimasi SEO dasar & penataan link Google Maps / WhatsApp",
      "Formulir pemesanan atau kalkulator estimasi paket kustom",
      "Panduan update konten & garansi revisi sampai rapi",
    ],
    ctaText: "Konsultasi Paket Bisnis",
    ctaHref: WA_BISNIS,
  },
  {
    badge: "KORPORAT & SISTEM KHUSUS",
    name: "Paket Custom & Web App",
    price: "Mulai Rp 5 Juta",
    strike: null,
    period: "Sesuai Kebutuhan Fitur & Integrasi",
    highlight: false,
    description:
      "Untuk organisasi, instansi, startup, atau bisnis yang membutuhkan CMS mandiri, dashboard admin, database, atau alur kerja khusus.",
    features: [
      "Arsitektur Next.js / Full-Stack kustom sesuai proses bisnis",
      "Dashboard Admin / CMS untuk kelola artikel, produk, atau anggota",
      "Integrasi database, email bisnis, atau API pihak ketiga",
      "Optimasi performa tinggi, keamanan, dan dukungan teknis lanjutan",
      "Diskusi langsung (online atau tatap muka di Watampone, Bone)",
    ],
    ctaText: "Diskusikan Kebutuhan Custom",
    ctaHref: WA_CUSTOM,
  },
];

const TESTIMONIALS = [
  {
    img: Testimoni8,
    name: "valvrave beginner",
    source: "Google Review · Bone",
    quote:
      "Sangat direkomendasikan, harganya sesuai kualitas jasanya. Selain itu, proses pengerjaannya juga cepat serta beberapa kelebihan lainnya yang tersedia.",
  },
  {
    img: Testimoni6,
    name: "Alief Batasha",
    source: "Google Review · Bone",
    quote:
      "Kalau butuh Web developer, kamu bisa pake jasa dari Kak Zidan ini.. keren lohh",
  },
  {
    img: Testimoni7,
    name: "A. Muh. Alif Afdal",
    source: "Google Review · Bone",
    quote: "Top, sudah berpengalaman 👌",
  },
  {
    img: Testimoni9,
    name: "Rifqi",
    source: "Google Review · Bone",
    quote: "Pelayanan dan kualitasnya sesuai dengan yang diharapkan",
  },
  {
    img: Testimoni5,
    name: "Mahathir",
    source: "Google Review · Bone",
    quote: "Jasa pembuatan web mantap dan responsive",
  },
  {
    img: Testimoni1,
    name: "alexblattner (Repeat Client)",
    source: "Fiverr International",
    quote:
      "The seller did amazing work. Well organized, respects coding principles, everything is how it should be.",
  },
];

const FAQS = [
  {
    q: "Apakah benar Paket Starter Rp 1 Juta hanya sekali bayar tanpa biaya bulanan?",
    a: "Ya, benar. Untuk Paket Starter UMKM Rp 1 Juta menggunakan hosting modern (Vercel) dengan subdomain gratis atau domain .my.id, tidak ada biaya sewa server bulanan. Jika Anda ingin memakai domain .com milik sendiri, Anda cukup memperpanjang domain sekitar Rp180rb–Rp220rb per tahun di tahun berikutnya.",
  },
  {
    q: "Apakah saya bisa melihat contoh tampilan website untuk usaha saya dulu?",
    a: "Bisa. Kirimkan saja nama usaha, link Instagram/Google Maps, serta daftar menu atau layanan Anda ke WhatsApp 0813-5478-9375. Saya bisa buatkan gambaran pratinjau (preview) awalnya terlebih dahulu.",
  },
  {
    q: "Apa saja yang perlu saya siapkan untuk mulai?",
    a: "Cukup kirimkan foto-foto produk/layanan yang sudah ada, daftar paket/harga, alamat usaha, dan nomor WhatsApp admin. Susunan kalimat dan kerapian halaman saya bantu bereskan.",
  },
  {
    q: "Apakah bisa konsultasi langsung di Bone?",
    a: "Sangat bisa. Saya berdomisili di Kabupaten Bone (dan juga melayani klien di seluruh Indonesia secara online). Kita bisa diskusi via WhatsApp maupun ketemu langsung di area Watampone.",
  },
];

const JasaPembuatanWebDIBone = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#181512] overflow-x-hidden pb-24 md:pb-0">
      <Header landingPage={true} />

      {/* HERO SECTION */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-[#181512] text-[#FDFBF7] text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
          <GeoAltFill className="text-amber-400 shrink-0" />
          <span>Jasa Pembuatan Website Bone & UMKM Indonesia · Zulzidan</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-[#181512]">
              Bikin Website Usaha{" "}
              <span className="text-[#B84A24] italic">Terima Beres</span> Mulai{" "}
              <span className="underline decoration-amber-400 decoration-4 underline-offset-4">
                Rp 1 Juta
              </span>
              .
            </h1>

            <p className="text-lg sm:text-xl text-[#4A433B] leading-relaxed max-w-2xl">
              Biarkan pelanggan melihat daftar paket, katalog harga, dan galeri
              produk Anda dengan rapi di 1 link resmi sebelum klik tombol pesan
              ke WhatsApp Admin. Cocok untuk usaha katering, klinik, kontraktor,
              toko, dan UMKM di Bone maupun seluruh Indonesia.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={WA_STARTER}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-base sm:text-lg px-7 py-4 rounded-xl shadow-lg transition"
              >
                <Whatsapp size={22} />
                <span>Chat WhatsApp: 0813-5478-9375</span>
              </a>
              <a
                href="#contoh-demo"
                className="inline-flex items-center gap-2 bg-white hover:bg-[#F5EFE2] text-[#181512] border-2 border-[#E2D9C5] font-bold text-base sm:text-lg px-6 py-4 rounded-xl transition"
              >
                <span>Lihat Contoh Demo Live</span>
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 text-sm font-semibold text-[#3B342C]">
              <div className="flex items-center gap-2">
                <LightningChargeFill className="text-[#B84A24] shrink-0" />
                <span>Selesai 2–4 Hari Kerja</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-[#16A34A] shrink-0" />
                <span>Sekali Bayar (Tanpa Bulanan)</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <PhoneFill className="text-[#181512] shrink-0" />
                <span>Langsung Nyambung ke WA</span>
              </div>
            </div>
          </div>

          {/* RIGHT PRICE HIGHLIGHT CARD */}
          <div className="lg:col-span-5">
            <div
              style={{ backgroundColor: "#181512", color: "#FFFFFF" }}
              className="bg-[#181512] text-white rounded-3xl p-7 sm:p-8 shadow-2xl border-2 border-[#332C25]"
            >
              <div className="inline-block bg-amber-400/20 text-amber-300 text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
                PROMO PAKET STARTER UMKM
              </div>
              <div className="mt-4 flex flex-wrap items-baseline gap-3">
                <span className="text-4xl sm:text-5xl font-black text-green-400 whitespace-nowrap">
                  Rp 1 Juta
                </span>
                <span className="text-base text-gray-400 line-through whitespace-nowrap">
                  Normal Rp 2.500.000
                </span>
              </div>
              <p className="text-sm text-gray-300 mt-1 font-medium">
                Sekali bayar · Terima beres · Bisa lihat contoh konsepnya dulu
              </p>

              <hr className="border-white/15 my-6" />

              <ul className="space-y-3 text-sm sm:text-base text-gray-100">
                <li className="flex items-start gap-3">
                  <CheckCircleFill className="text-green-400 mt-1 shrink-0" />
                  <span>
                    <strong>1 Halaman Lengkap:</strong> Profil Usaha, Katalog
                    Paket & Harga, Galeri Foto, Alamat/Maps
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleFill className="text-green-400 mt-1 shrink-0" />
                  <span>
                    <strong>Tombol Order WhatsApp:</strong> Pelanggan tinggal
                    pilih paket & kirim format chat otomatis
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleFill className="text-green-400 mt-1 shrink-0" />
                  <span>
                    <strong>Rapi di HP & Laptop:</strong> Siap dipasang di bio
                    Instagram, TikTok & Google Maps
                  </span>
                </li>
              </ul>

              <a
                href={WA_STARTER}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 w-full inline-flex items-center justify-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-[#052610] font-extrabold text-base py-4 px-6 rounded-xl transition"
              >
                <Whatsapp size={20} />
                <span>Tanya / Minta Contoh Demo via WA</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE DEMO SHOWCASE */}
      <section
        id="contoh-demo"
        className="py-16 bg-[#F5EFE2] border-y border-[#E2D9C5] px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#B84A24]">
              CONTOH HASIL KERJA LIVE (6 INDUSTRI BERBEDA)
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#181512] mt-2">
              Desain Menyesuaikan Karakter Bisnis Anda — Klik untuk Coba Live
            </h2>
            <p className="text-[#4A433B] mt-2 text-base sm:text-lg">
              Setiap jenis usaha membutuhkan nuansa desain yang berbeda. Kuliner
              tampil hangat & menggugah selera, interior tampil elegan, hingga
              konveksi dan lembaga pendidikan yang rapi & terpercaya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {LIVE_DEMOS.map((demo) => (
              <div
                key={demo.title}
                className="bg-white rounded-2xl border border-[#E2D9C5] overflow-hidden shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] bg-[#EAE2D0] overflow-hidden border-b border-[#E2D9C5]">
                    <img
                      src={demo.image}
                      alt={demo.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#B84A24]">
                      {demo.category}
                    </span>
                    <h3 className="text-xl font-extrabold text-[#181512] mt-1">
                      {demo.title}
                    </h3>
                    <ul className="mt-4 space-y-2 text-sm text-[#4A433B]">
                      {demo.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircleFill className="text-[#16A34A] mt-1 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: "#181512", color: "#FFFFFF" }}
                    className="w-full inline-flex items-center justify-center gap-2 hover:opacity-90 font-bold text-sm py-3.5 px-4 rounded-xl transition shadow-sm"
                  >
                    <span>Buka Demo Live</span>
                    <BoxArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING TIERS */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#B84A24]">
            PILIHAN PAKET TRANSPARAN
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#181512] mt-2">
            Sesuaikan dengan Skala Usaha Anda
          </h2>
          <p className="text-[#4A433B] mt-3 text-base sm:text-lg">
            Mulai dari landing page katalog UMKM Rp 1 Juta hingga website
            perusahaan multi-halaman dan sistem kustom.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between border-2 ${
                pkg.highlight
                  ? "bg-[#181512] text-white border-[#181512] shadow-2xl"
                  : "bg-white text-[#181512] border-[#E2D9C5] shadow-sm"
              }`}
            >
              <div>
                <span
                  className={`inline-block text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${
                    pkg.highlight
                      ? "bg-amber-400/20 text-amber-300"
                      : "bg-[#F5EFE2] text-[#B84A24]"
                  }`}
                >
                  {pkg.badge}
                </span>
                <h3 className="text-2xl font-extrabold mt-4">{pkg.name}</h3>
                <div className="mt-3 flex flex-wrap items-baseline gap-3">
                  <span
                    className={`text-4xl font-black whitespace-nowrap ${
                      pkg.highlight ? "text-green-400" : "text-[#181512]"
                    }`}
                  >
                    {pkg.price}
                  </span>
                  {pkg.strike && (
                    <span className="text-sm line-through opacity-60 whitespace-nowrap">
                      {pkg.strike}
                    </span>
                  )}
                </div>
                <p
                  className={`text-xs font-semibold mt-1 ${
                    pkg.highlight ? "text-gray-300" : "text-[#635A50]"
                  }`}
                >
                  {pkg.period}
                </p>
                <p
                  className={`text-sm mt-4 leading-relaxed ${
                    pkg.highlight ? "text-gray-200" : "text-[#4A433B]"
                  }`}
                >
                  {pkg.description}
                </p>

                <hr
                  className={`my-6 ${
                    pkg.highlight ? "border-white/15" : "border-[#E6DEC8]"
                  }`}
                />

                <ul className="space-y-3 text-sm">
                  {pkg.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircleFill
                        className={`mt-1 shrink-0 ${
                          pkg.highlight ? "text-green-400" : "text-[#16A34A]"
                        }`}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={pkg.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                style={
                  pkg.highlight
                    ? { backgroundColor: "#22C55E", color: "#052610" }
                    : { backgroundColor: "#181512", color: "#FFFFFF" }
                }
                className={`mt-8 w-full inline-flex items-center justify-center gap-2 font-extrabold text-sm sm:text-base py-4 px-5 rounded-xl transition ${
                  pkg.highlight
                    ? "bg-[#22C55E] hover:bg-[#16A34A] text-[#052610]"
                    : "bg-[#181512] hover:bg-[#332C25] text-white"
                }`}
              >
                <Whatsapp size={18} />
                <span>{pkg.ctaText}</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* REAL GOOGLE REVIEWS & FIVERR TESTIMONIALS */}
      <section className="py-16 bg-[#F5EFE2] border-t border-[#E2D9C5] px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-amber-400/25 text-[#8C3515] text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                <StarFill className="text-amber-500" />
                <span> RATING 5.0 DI GOOGLE REVIEW BONE & FIVERR</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#181512]">
                Apa Kata Klien yang Sudah Bekerja Sama
              </h2>
              <p className="text-[#4A433B] mt-2 text-base sm:text-lg max-w-2xl">
                Bukti tangkapan layar ulasan asli di profil Google Bisnis{" "}
                <strong>Jasa Pembuatan Website Bone</strong> dan platform
                internasional Fiverr.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-[#FDFBF7] text-[#181512] border border-[#D5CBB4] font-bold text-sm px-4 py-3 rounded-xl shadow-sm transition"
              >
                <span>Cek Google Review Asli</span>
                <BoxArrowUpRight size={13} />
              </a>
              <a
                href={FIVERR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-[#FDFBF7] text-[#181512] border border-[#D5CBB4] font-bold text-sm px-4 py-3 rounded-xl shadow-sm transition"
              >
                <span>Cek Profil Fiverr</span>
                <BoxArrowUpRight size={13} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E2D9C5] p-5 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="font-extrabold text-[#181512] text-base">
                        {t.name}
                      </div>
                      <div className="text-xs font-semibold text-[#635A50]">
                        {t.source}
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5 text-amber-400">
                      <StarFill size={14} />
                      <StarFill size={14} />
                      <StarFill size={14} />
                      <StarFill size={14} />
                      <StarFill size={14} />
                    </div>
                  </div>
                  <p className="text-sm text-[#3B342C] leading-relaxed italic mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="rounded-xl overflow-hidden border border-[#EAE2D0] bg-[#1F1F1F] p-2">
                  <Image
                    src={t.img}
                    alt={`Testimoni ${t.name}`}
                    className="w-full h-auto object-contain rounded-lg"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 bg-white border-t border-[#E2D9C5] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#181512] text-center mb-10">
            Pertanyaan yang Sering Ditanyakan (FAQ)
          </h2>
          <div className="space-y-4">
            {FAQS.map((item, i) => (
              <div
                key={i}
                className="bg-[#FDFBF7] border border-[#E2D9C5] rounded-2xl p-6"
              >
                <h3 className="text-lg font-extrabold text-[#181512]">
                  {item.q}
                </h3>
                <p className="text-sm sm:text-base text-[#4A433B] mt-2 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          {/* BOTTOM CTA BOX */}
          <div className="mt-12 bg-[#181512] text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                Mau lihat contoh tampilan untuk usaha Anda?
              </h3>
              <p className="text-gray-300 mt-2 text-sm sm:text-base">
                Chat langsung dengan Zulzidan di WhatsApp 0813-5478-9375 —
                konsultasi gratis tanpa komitmen.
              </p>
            </div>
            <a
              href={WA_STARTER}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-3 bg-[#22C55E] hover:bg-[#16A34A] text-[#052610] font-extrabold text-base sm:text-lg px-7 py-4 rounded-xl transition"
            >
              <Whatsapp size={22} />
              <span>Chat 0813-5478-9375</span>
            </a>
          </div>
        </div>
      </section>

      {/* STICKY MOBILE BOTTOM WHATSAPP BAR (FITTS'S LAW) */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-[#181512]/95 backdrop-blur-md border-t border-white/15 px-4 py-3 flex items-center justify-between gap-3 shadow-2xl">
        <div>
          <div className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
            Paket Website UMKM
          </div>
          <div className="text-base font-black text-white leading-tight">
            Rp 1 Juta{" "}
            <span className="text-xs font-normal text-gray-300">
              · Terima Beres
            </span>
          </div>
        </div>
        <a
          href={WA_STARTER}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#22C55E] text-[#052610] font-extrabold text-sm px-4 py-3 rounded-xl shrink-0 shadow-md"
        >
          <Whatsapp size={18} />
          <span>Chat WA Sekarang</span>
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default JasaPembuatanWebDIBone;

export function Head({ location }) {
  return (
    <SEO
      title={"Jasa Pembuatan Website di Bone & UMKM — Mulai Rp 1 Juta"}
      pathname={location?.pathname || "/jasa-pembuatan-website-di-bone"}
      description={
        "Jasa pembuatan website UMKM & bisnis di Bone oleh Zulzidan. Paket Starter UMKM terima beres mulai Rp 1 Juta (sekali bayar, katalog rapi & langsung terhubung ke WhatsApp 0813-5478-9375)."
      }
    />
  );
}
