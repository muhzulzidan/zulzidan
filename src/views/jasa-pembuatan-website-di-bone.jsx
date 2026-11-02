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

const WA_MAIN =
  "https://api.whatsapp.com/send?phone=6281354789375&text=Halo%20Kak%20Zulzidan%2C%20saya%20tertarik%20bikin%20Website%20Usaha%20Rp%201%20Juta.%20Boleh%20lihat%20contoh%20konsep%20untuk%20usaha%20saya%3F";

const makeDemoWaLink = (demoTitle) =>
  `https://api.whatsapp.com/send?phone=6281354789375&text=${encodeURIComponent(
    `Halo Kak Zulzidan, saya tertarik bikin Website Usaha Rp 1 Juta dengan tampilan seperti contoh "${demoTitle}". Boleh konsultasi untuk usaha saya?`
  )}`;

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
      "Tema cerah & hangat dengan pilihan paket (Lite, Reguler, Family, Nasi Box)",
      "Kalkulator & form susun pesanan langsung terhubung ke WhatsApp Admin",
    ],
  },
  {
    title: "Ratu Interior (Gowa – Makassar)",
    category: "Interior · Eksterior & Kontraktor",
    image: "/demos/demo-ratu-interior.jpg",
    url: "https://ratu-interior-concept.vercel.app/",
    points: [
      "Desain arsitektur elegan (Dark & Gold Editorial) untuk kontraktor & mebel",
      "Galeri portofolio proyek & tombol konsultasi survei lokasi via WhatsApp",
    ],
  },
  {
    title: "MAMU · PT Tigalapan Sukses",
    category: "Fashion · Konveksi & Toko Retail",
    image: "/demos/demo-tigalapan.jpg",
    url: "https://tigalapan-sukses-preview.vercel.app/",
    points: [
      "Katalog produk retail & grosir lengkap dengan panduan ukuran (size chart)",
      "Dilengkapi simulasi sablon kustom & informasi cabang toko",
    ],
  },
  {
    title: "Amazing Insight",
    category: "Jasa · Konsultan & Lembaga Kursus",
    image: "/demos/demo-zoominar.jpg",
    url: "https://amazing-insight-zoominar.vercel.app/",
    points: [
      "Gaya visual modern & bersih untuk lembaga pelatihan, agensi, atau klinik",
      "Rincian program/layanan jelas + tombol pendaftaran langsung ke WA",
    ],
  },
  {
    title: "Yang Terdekat Production",
    category: "Studio Kreatif · Foto & Wedding",
    image: "/demos/demo-ceritaapip.jpg",
    url: "https://ceritaapip.vercel.app/",
    points: [
      "Tampilan sinematik kontras tinggi untuk memamerkan hasil foto & video",
      "Cocok untuk vendor dokumentasi, studio foto, maupun event organizer",
    ],
  },
  {
    title: "Ponpes Villa Tahfizh Himmatul Quran",
    category: "Sekolah · Pesantren & Yayasan",
    image: "/demos/demo-vthq.jpg",
    url: "https://www.vthq.or.id/",
    points: [
      "Website profil lembaga resmi dengan informasi pendaftaran & program",
      "Dilengkapi halaman dokumentasi kegiatan dan kontak pengurus",
    ],
  },
];

const INCLUDED_FEATURES = [
  {
    title: "Halaman Katalog & Daftar Harga Rapi",
    desc: "Pelanggan bisa langsung melihat pilihan paket, menu, atau layanan Anda tanpa harus tanya harga satu-satu di chat.",
  },
  {
    title: "Tombol Order Otomatis ke WhatsApp",
    desc: "Setiap paket/produk dilengkapi tombol pesan yang langsung mengirim format chat rapi ke nomor WhatsApp Admin Anda.",
  },
  {
    title: "Desain Menyesuaikan Karakter Usaha",
    desc: "Bukan template kaku—warna, font, dan tata letak disesuaikan dengan identitas usaha Anda (kuliner, jasa, kontraktor, klinik, toko).",
  },
  {
    title: "Rapi & Cepat di HP maupun Laptop",
    desc: "Ringan saat dibuka dari link bio Instagram, TikTok, Facebook, maupun titik Google Maps usaha Anda.",
  },
  {
    title: "Sekali Bayar · Tanpa Biaya Bulanan",
    desc: "Sudah termasuk hosting cepat & subdomain gratis (.vercel.app / .my.id) atau bantuan menyambungkan ke domain .com milik Anda.",
  },
  {
    title: "Terima Beres dalam 2–4 Hari Kerja",
    desc: "Anda cukup kirim foto produk & daftar harga lewat WhatsApp. Penyusunan kalimat dan kerapian desain saya bereskan.",
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
    q: "Apakah benar harganya cuma Rp 1 Juta sekali bayar tanpa biaya bulanan?",
    a: "Ya, benar. Harga Rp 1.000.000 adalah sekali bayar (tidak ada tagihan bulanan). Website sudah langsung online menggunakan server modern dan subdomain gratis, atau bisa disambungkan ke domain .com milik usaha Anda.",
  },
  {
    q: "Apakah saya bisa lihat contoh tampilan (preview) untuk usaha saya dulu?",
    a: "Bisa. Chat saja ke WhatsApp 0813-5478-9375 dan kirimkan nama usaha atau link Instagram Anda. Saya buatkan gambaran pratinjau tampilannya terlebih dahulu.",
  },
  {
    q: "Apa saja yang perlu saya kirimkan untuk mulai?",
    a: "Cukup kirimkan foto-foto produk/layanan yang sudah ada, daftar paket beserta harganya, alamat usaha, dan nomor WhatsApp Admin.",
  },
  {
    q: "Apakah bisa ketemu langsung untuk diskusi di Bone?",
    a: "Sangat bisa. Saya berdomisili di Kabupaten Bone (dan juga melayani pemesanan online dari seluruh Indonesia). Kita bisa ngobrol via WhatsApp atau ketemu langsung di area Watampone.",
  },
];

const openExternalUrl = (url) => {
  if (typeof window === "undefined" || !url) return;
  const w = window.open(url, "_blank", "noopener,noreferrer");
  if (!w) window.location.href = url;
};

const JasaPembuatanWebDIBone = () => {
  return (
    <div
      style={{ backgroundColor: "#FDFBF7", color: "#181512" }}
      className="min-h-screen"
    >
      <Header landingPage={true} />

      {/* HERO SECTION */}
      <section className="pt-10 pb-16 md:pt-16 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div
          style={{ backgroundColor: "#181512", color: "#FDFBF7" }}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6"
        >
          <GeoAltFill className="text-amber-400 shrink-0" />
          <span>Jasa Pembuatan Website UMKM & Bisnis · Zulzidan</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08]">
              Bikin Website Usaha{" "}
              <span style={{ color: "#B84A24" }} className="italic">
                Terima Beres
              </span>{" "}
              Cuma{" "}
              <span className="underline decoration-amber-400 decoration-4 underline-offset-4 whitespace-nowrap">
                Rp 1 Juta
              </span>
              .
            </h1>

            <p
              style={{ color: "#4A433B" }}
              className="text-lg sm:text-xl leading-relaxed max-w-2xl"
            >
              Tampilkan daftar paket, katalog harga, dan galeri produk Anda
              dengan rapi di 1 link resmi yang langsung terhubung ke WhatsApp
              Admin. Sekali bayar, tanpa biaya bulanan, dan bisa lihat contoh
              demonya dulu.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                type="button"
                onClick={() => openExternalUrl(WA_MAIN)}
                style={{ backgroundColor: "#16A34A", color: "#FFFFFF" }}
                className="inline-flex items-center gap-3 hover:opacity-95 font-extrabold text-base sm:text-lg px-7 py-4 rounded-xl shadow-lg transition cursor-pointer"
              >
                <Whatsapp size={22} />
                <span>Pesan via WhatsApp: 0813-5478-9375</span>
              </button>
              <a
                href="#contoh-demo"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#181512",
                  borderColor: "#D6CBB5",
                }}
                className="inline-flex items-center gap-2 border-2 font-bold text-base sm:text-lg px-6 py-4 rounded-xl transition"
              >
                <span>Lihat 6 Contoh Demo Live ↓</span>
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 text-sm font-semibold">
              <div className="flex items-center gap-2">
                <LightningChargeFill
                  style={{ color: "#B84A24" }}
                  className="shrink-0"
                />
                <span>Selesai 2–4 Hari Kerja</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck
                  style={{ color: "#16A34A" }}
                  className="shrink-0"
                />
                <span>Sekali Bayar (Tanpa Bulanan)</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <PhoneFill className="shrink-0" />
                <span>WA: 0813-5478-9375</span>
              </div>
            </div>
          </div>

          {/* RIGHT SINGLE-OFFER CARD */}
          <div className="lg:col-span-5">
            <div
              style={{
                backgroundColor: "#181512",
                color: "#FFFFFF",
                borderColor: "#332C25",
              }}
              className="rounded-3xl p-7 sm:p-8 shadow-2xl border-2"
            >
              <div
                style={{
                  backgroundColor: "rgba(251, 191, 36, 0.18)",
                  color: "#FCD34D",
                }}
                className="inline-block text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full"
              >
                PAKET WEBSITE UMKM TERIMA BERES
              </div>
              <div className="mt-4 flex flex-wrap items-baseline gap-3">
                <span
                  style={{ color: "#4ADE80" }}
                  className="text-4xl sm:text-5xl font-black whitespace-nowrap"
                >
                  Rp 1 Juta
                </span>
                <span
                  style={{ color: "#9CA3AF" }}
                  className="text-base line-through whitespace-nowrap"
                >
                  Normal Rp 2.500.000
                </span>
              </div>
              <p style={{ color: "#D1D5DB" }} className="text-sm mt-1 font-medium">
                Sekali bayar · Tanpa biaya bulanan · Bisa lihat preview dulu
              </p>

              <hr
                style={{ borderColor: "rgba(255,255,255,0.15)" }}
                className="my-6"
              />

              <ul className="space-y-3 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <CheckCircleFill
                    style={{ color: "#4ADE80" }}
                    className="mt-1 shrink-0"
                  />
                  <span>
                    <strong>Halaman Katalog Lengkap:</strong> Profil Usaha,
                    Daftar Paket & Harga, Galeri Foto, Lokasi/Maps
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleFill
                    style={{ color: "#4ADE80" }}
                    className="mt-1 shrink-0"
                  />
                  <span>
                    <strong>Tombol Order WhatsApp:</strong> Pelanggan tinggal
                    pilih paket & kirim format pesanan otomatis
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleFill
                    style={{ color: "#4ADE80" }}
                    className="mt-1 shrink-0"
                  />
                  <span>
                    <strong>Rapi di HP & Laptop:</strong> Siap dipasang di bio
                    Instagram, TikTok & Google Maps
                  </span>
                </li>
              </ul>

              <button
                type="button"
                onClick={() => openExternalUrl(WA_MAIN)}
                style={{ backgroundColor: "#22C55E", color: "#052610" }}
                className="mt-7 w-full inline-flex items-center justify-center gap-2 hover:opacity-95 font-extrabold text-base py-4 px-6 rounded-xl transition shadow-md cursor-pointer"
              >
                <Whatsapp size={20} />
                <span>Pesan Website Rp 1 Juta (WA: 0813-5478-9375)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE DEMO SHOWCASE (#contoh-demo) WITH DIRECT WHATSAPP CTAs */}
      <section
        id="contoh-demo"
        style={{ backgroundColor: "#F5EFE2", borderColor: "#E2D9C5" }}
        className="py-16 border-y px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div className="max-w-2xl">
              <span
                style={{ color: "#B84A24" }}
                className="text-xs font-extrabold uppercase tracking-widest"
              >
                CONTOH HASIL KERJA LIVE (6 INDUSTRI BERBEDA)
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">
                Pilih Gaya Desain yang Cocok untuk Usaha Anda
              </h2>
              <p
                style={{ color: "#4A433B" }}
                className="mt-2 text-base sm:text-lg"
              >
                Klik <strong>Lihat Contoh Live</strong> untuk mencoba langsung
                websitenya, atau klik tombol hijau <strong>Pesan Model Ini</strong>{" "}
                untuk dibuatkan versi usaha Anda seharga <strong>Rp 1 Juta</strong>.
              </p>
            </div>

            <button
              type="button"
              onClick={() => openExternalUrl(WA_MAIN)}
              style={{ backgroundColor: "#16A34A", color: "#FFFFFF" }}
              className="shrink-0 inline-flex items-center gap-2.5 font-extrabold text-sm sm:text-base px-6 py-4 rounded-xl shadow-md hover:opacity-95 transition cursor-pointer"
            >
              <Whatsapp size={20} />
              <span>Minta Contoh Demo Usaha Saya (Rp 1 Juta)</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {LIVE_DEMOS.map((demo) => (
              <div
                key={demo.title}
                style={{ backgroundColor: "#FFFFFF", borderColor: "#E2D9C5" }}
                className="rounded-2xl border overflow-hidden shadow-md flex flex-col justify-between"
              >
                <div>
                  <div
                    style={{
                      backgroundColor: "#EAE2D0",
                      borderColor: "#E2D9C5",
                    }}
                    className="aspect-[16/10] overflow-hidden border-b"
                  >
                    <img
                      src={demo.image}
                      alt={demo.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <span
                      style={{ color: "#B84A24" }}
                      className="text-xs font-bold uppercase tracking-wider"
                    >
                      {demo.category}
                    </span>
                    <h3 className="text-xl font-extrabold mt-1">
                      {demo.title}
                    </h3>
                    <ul
                      style={{ color: "#4A433B" }}
                      className="mt-4 space-y-2 text-sm"
                    >
                      {demo.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircleFill
                            style={{ color: "#16A34A" }}
                            className="mt-1 shrink-0"
                          />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* DUAL ACTION BUTTONS INSIDE EVERY DEMO CARD */}
                <div className="px-6 pb-6 space-y-2.5">
                  <button
                    type="button"
                    onClick={() => openExternalUrl(makeDemoWaLink(demo.title))}
                    style={{ backgroundColor: "#16A34A", color: "#FFFFFF" }}
                    className="w-full inline-flex items-center justify-center gap-2 hover:opacity-95 font-extrabold text-sm py-3.5 px-4 rounded-xl transition shadow-sm cursor-pointer"
                  >
                    <Whatsapp size={17} />
                    <span>Pesan Model Ini (Rp 1 Juta)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => openExternalUrl(demo.url)}
                    style={{
                      backgroundColor: "#181512",
                      color: "#FFFFFF",
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 hover:opacity-90 font-bold text-sm py-3 px-4 rounded-xl transition cursor-pointer"
                  >
                    <span>Lihat Contoh Live</span>
                    <BoxArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA BANNER RIGHT INSIDE #contoh-demo */}
          <div
            style={{ backgroundColor: "#181512", color: "#FFFFFF" }}
            className="mt-12 rounded-3xl p-7 sm:p-9 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
          >
            <div>
              <div
                style={{ color: "#FCD34D" }}
                className="text-xs font-extrabold uppercase tracking-widest mb-1"
              >
                PAKET WEBSITE UMKM · SEKALI BAYAR RP 1.000.000
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                Mau dibuatkan tampilan seperti contoh di atas untuk usaha Anda?
              </h3>
              <p style={{ color: "#D1D5DB" }} className="mt-1 text-sm sm:text-base">
                Kirimkan nama usaha & daftar layanan Anda ke WhatsApp — bisa
                lihat preview tampilannya dulu!
              </p>
            </div>
            <button
              type="button"
              onClick={() => openExternalUrl(WA_MAIN)}
              style={{ backgroundColor: "#22C55E", color: "#052610" }}
              className="shrink-0 inline-flex items-center gap-3 font-extrabold text-base sm:text-lg px-7 py-4 rounded-xl shadow-lg hover:opacity-95 transition cursor-pointer"
            >
              <Whatsapp size={22} />
              <span>Chat WA: 0813-5478-9375</span>
            </button>
          </div>
        </div>
      </section>

      {/* SINGLE OFFER DETAILS: APA SAJA YANG DIDAPAT DENGAN RP 1 JUTA */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span
            style={{ color: "#B84A24" }}
            className="text-xs font-extrabold uppercase tracking-widest"
          >
            SATU HARGA TRANSPARAN · TERIMA BERES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">
            Semua yang Anda Dapatkan dengan Rp 1 Juta
          </h2>
          <p
            style={{ color: "#4A433B" }}
            className="mt-3 text-base sm:text-lg"
          >
            Tidak ada biaya bulanan tersembunyi. Cukup sekali bayar{" "}
            <strong>Rp 1.000.000</strong>, website usaha Anda langsung online dan
            siap menerima pesanan via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INCLUDED_FEATURES.map((item, idx) => (
            <div
              key={idx}
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E2D9C5" }}
              className="rounded-2xl border p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div
                  style={{ backgroundColor: "#DCFCE7", color: "#15803D" }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg mb-4"
                >
                  ✓
                </div>
                <h3 className="text-lg font-extrabold">{item.title}</h3>
                <p
                  style={{ color: "#4A433B" }}
                  className="text-sm mt-2 leading-relaxed"
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => openExternalUrl(WA_MAIN)}
            style={{ backgroundColor: "#16A34A", color: "#FFFFFF" }}
            className="inline-flex items-center gap-3 font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl shadow-lg hover:opacity-95 transition cursor-pointer"
          >
            <Whatsapp size={22} />
            <span>Pesan Paket Website Rp 1 Juta (WA: 0813-5478-9375)</span>
          </button>
        </div>
      </section>

      {/* REAL GOOGLE REVIEWS & FIVERR TESTIMONIALS */}
      <section
        style={{ backgroundColor: "#F5EFE2", borderColor: "#E2D9C5" }}
        className="py-16 border-t px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <div
                style={{
                  backgroundColor: "rgba(251, 191, 36, 0.25)",
                  color: "#8C3515",
                }}
                className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full mb-3"
              >
                <StarFill className="text-amber-500" />
                <span> RATING 5.0 DI GOOGLE REVIEW BONE & FIVERR</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold">
                Apa Kata Klien yang Sudah Bekerja Sama
              </h2>
              <p
                style={{ color: "#4A433B" }}
                className="mt-2 text-base sm:text-lg max-w-2xl"
              >
                Bukti tangkapan layar ulasan asli di profil Google Bisnis{" "}
                <strong>Jasa Pembuatan Website Bone</strong> dan platform
                internasional Fiverr.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <button
                type="button"
                onClick={() => openExternalUrl(GOOGLE_REVIEW_URL)}
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#181512",
                  borderColor: "#D5CBB4",
                }}
                className="inline-flex items-center gap-2 border font-bold text-sm px-4 py-3 rounded-xl shadow-sm transition cursor-pointer"
              >
                <span>Cek Google Review Asli</span>
                <BoxArrowUpRight size={13} />
              </button>
              <button
                type="button"
                onClick={() => openExternalUrl(FIVERR_URL)}
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#181512",
                  borderColor: "#D5CBB4",
                }}
                className="inline-flex items-center gap-2 border font-bold text-sm px-4 py-3 rounded-xl shadow-sm transition cursor-pointer"
              >
                <span>Cek Profil Fiverr</span>
                <BoxArrowUpRight size={13} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                style={{ backgroundColor: "#FFFFFF", borderColor: "#E2D9C5" }}
                className="rounded-2xl border p-5 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="font-extrabold text-base">{t.name}</div>
                      <div
                        style={{ color: "#635A50" }}
                        className="text-xs font-semibold"
                      >
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
                  <p
                    style={{ color: "#3B342C" }}
                    className="text-sm leading-relaxed italic mb-4"
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div
                  style={{ backgroundColor: "#1F1F1F", borderColor: "#EAE2D0" }}
                  className="rounded-xl overflow-hidden border p-2"
                >
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
      <section
        style={{ backgroundColor: "#FFFFFF", borderColor: "#E2D9C5" }}
        className="py-16 border-t px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-10">
            Pertanyaan yang Sering Ditanyakan (FAQ)
          </h2>
          <div className="space-y-4">
            {FAQS.map((item, i) => (
              <div
                key={i}
                style={{ backgroundColor: "#FDFBF7", borderColor: "#E2D9C5" }}
                className="border rounded-2xl p-6"
              >
                <h3 className="text-lg font-extrabold">{item.q}</h3>
                <p
                  style={{ color: "#4A433B" }}
                  className="text-sm sm:text-base mt-2 leading-relaxed"
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          {/* BOTTOM CTA BOX */}
          <div
            style={{ backgroundColor: "#181512", color: "#FFFFFF" }}
            className="mt-12 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                Siap punya website usaha rapi cuma Rp 1 Juta?
              </h3>
              <p
                style={{ color: "#D1D5DB" }}
                className="mt-2 text-sm sm:text-base"
              >
                Chat langsung dengan Zulzidan di WhatsApp 0813-5478-9375 — bisa
                minta dibuatkan contoh konsepnya dulu.
              </p>
            </div>
            <button
              type="button"
              onClick={() => openExternalUrl(WA_MAIN)}
              style={{ backgroundColor: "#22C55E", color: "#052610" }}
              className="shrink-0 inline-flex items-center gap-3 font-extrabold text-base sm:text-lg px-7 py-4 rounded-xl transition cursor-pointer"
            >
              <Whatsapp size={22} />
              <span>Chat 0813-5478-9375</span>
            </button>
          </div>
        </div>
      </section>

      {/* STICKY BOTTOM WHATSAPP CTA BAR (USES sticky + <button> SO SAFARI EXTENSIONS NEVER HIDE IT) */}
      <div
        style={{
          position: "sticky",
          bottom: 0,
          zIndex: 40,
          backgroundColor: "rgba(24, 21, 18, 0.96)",
          color: "#FFFFFF",
          borderColor: "rgba(255,255,255,0.15)",
        }}
        className="backdrop-blur-md border-t px-4 py-3 shadow-2xl"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          <div>
            <div
              style={{ color: "#FCD34D" }}
              className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider"
            >
              PROMO WEBSITE UMKM TERIMA BERES
            </div>
            <div className="text-base sm:text-lg font-black leading-tight">
              Cuma Rp 1 Juta{" "}
              <span
                style={{ color: "#D1D5DB" }}
                className="text-xs sm:text-sm font-normal"
              >
                · WA: 0813-5478-9375
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => openExternalUrl(WA_MAIN)}
            style={{ backgroundColor: "#22C55E", color: "#052610" }}
            className="inline-flex items-center gap-2 font-extrabold text-sm sm:text-base px-5 py-3 rounded-xl shrink-0 shadow-md hover:opacity-95 transition cursor-pointer"
          >
            <Whatsapp size={19} />
            <span>Pesan via WhatsApp (0813-5478-9375)</span>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JasaPembuatanWebDIBone;

export function Head({ location }) {
  return (
    <SEO
      title={"Jasa Pembuatan Website UMKM Terima Beres Rp 1 Juta | Zulzidan"}
      pathname={location?.pathname || "/jasa-pembuatan-website-di-bone"}
      description={
        "Jasa pembuatan website UMKM & bisnis terima beres cuma Rp 1 Juta (sekali bayar, tanpa biaya bulanan, langsung terhubung ke WhatsApp 0813-5478-9375)."
      }
    />
  );
}
