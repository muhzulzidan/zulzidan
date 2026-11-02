"use client";

import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { SEO } from "../components/seo";
import {
  CheckCircleFill,
  Whatsapp,
  BoxArrowUpRight,
  GeoAltFill,
  LightningChargeFill,
  PhoneFill,
  ShieldCheck,
} from "react-bootstrap-icons";

const WA_STARTER =
  "https://api.whatsapp.com/send?phone=6281354789375&text=Halo%20Kak%20Zulzidan%2C%20saya%20tertarik%20Paket%20Starter%20Website%20UMKM%20Rp%201%20Juta.%20Boleh%20lihat%20contoh%20konsep%20untuk%20usaha%20saya%3F";
const WA_BISNIS =
  "https://api.whatsapp.com/send?phone=6281354789375&text=Halo%20Kak%20Zulzidan%2C%20saya%20ingin%20konsultasi%20Paket%20Website%20Bisnis%20Multi-Halaman%20(Rp%202%2C5%20Juta).";
const WA_CUSTOM =
  "https://api.whatsapp.com/send?phone=6281354789375&text=Halo%20Kak%20Zulzidan%2C%20saya%20ingin%20konsultasi%20pembuatan%20Website%20Custom%20%2F%20Sistem%20Perusahaan.";

const LIVE_DEMOS = [
  {
    title: "Swastia Catering",
    category: "Katering Harian & Nasi Box",
    image: "/demos/swastia-v3-desktop.jpg",
    url: "https://swastia-catering-preview.vercel.app/",
    points: [
      "Katalog interaktif 4 kategori paket (Lite, Reguler, Family, Nasi Box)",
      "Kalkulator & form susun pesanan langsung ke WhatsApp Admin",
    ],
  },
  {
    title: "Wijaya Kusuma Catering",
    category: "Tumpeng, Nasi Kotak & Hampers",
    image: "/demos/wijaya-v3-desktop.jpg",
    url: "https://wijaya-kusuma-catering-preview.vercel.app/",
    points: [
      "8 kategori menu lengkap dengan rincian harga per porsi",
      "Tampilan cerah & ramah HP untuk bio Instagram & Google Maps",
    ],
  },
  {
    title: "Catering Semarang HQ",
    category: "Layanan Kuliner & Hantaran Kota",
    image: "/demos/semarang-v3-desktop.jpg",
    url: "https://catering-semarang-hq-preview.vercel.app/",
    points: [
      "Halaman profil terpadu untuk katering harian, acara, dan oleh-oleh",
      "Alur konsultasi cepat sekali klik menuju nomor WhatsApp resmi",
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
    <div className="min-h-screen bg-[#FDFBF7] text-[#181512]">
      <Header />

      {/* HERO SECTION */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-[#181512] text-[#FDFBF7] text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
          <GeoAltFill className="text-amber-400" />
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
            <div className="bg-[#181512] text-white rounded-3xl p-7 sm:p-8 shadow-2xl border-2 border-[#332C25]">
              <div className="inline-block bg-amber-400/20 text-amber-300 text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
                PROMO PAKET STARTER UMKM
              </div>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-4xl sm:text-5xl font-black text-green-400">
                  Rp 1.000.000
                </span>
                <span className="text-base text-gray-400 line-through">
                  Rp 2.500.000
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
              CONTOH HASIL KERJA LIVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#181512] mt-2">
              Klik & Coba Langsung Contoh Website Katalog UMKM
            </h2>
            <p className="text-[#4A433B] mt-2 text-base sm:text-lg">
              Bukan sekadar gambar—Anda bisa membuka contoh website di bawah ini
              untuk merasakan langsung tampilan katalog harga dan tombol
              pemesanan WhatsApp-nya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
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
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#181512] hover:bg-[#332C25] text-white font-bold text-sm py-3 px-4 rounded-xl transition"
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
                <div className="mt-3 flex items-baseline gap-3">
                  <span
                    className={`text-4xl font-black ${
                      pkg.highlight ? "text-green-400" : "text-[#181512]"
                    }`}
                  >
                    {pkg.price}
                  </span>
                  {pkg.strike && (
                    <span className="text-sm line-through opacity-60">
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
