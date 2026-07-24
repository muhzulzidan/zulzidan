// src/pages/merdeka80.js
import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

const WA_NUMBER = "6281354789375"; // ← ganti dengan nomor WA kamu (tanpa +), contoh: 628123456789
const PIXEL_ID = process.env.GATSBY_META_PIXEL_ID || ""; // set di .env/.env.production

const Merdeka80Page = () => {
    const [utm, setUtm] = useState({});

    useEffect(() => {
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            const obj = {};
            ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach((k) => {
                const v = params.get(k);
                if (v) obj[k] = v;
            });
            setUtm(obj);
        }
    }, []);

    const track = (event, payload = {}) => {
        try {
            if (typeof window !== "undefined" && window.fbq) {
                window.fbq("track", event, payload);
            }
        } catch { }
    };

    const buildWaLink = (extra = {}) => {
        const utmStr =
            Object.keys(utm).length > 0
                ? "\nUTM: " + Object.entries(utm).map(([k, v]) => `${k}=${v}`).join("&")
                : "";

        const message =
            "Halo, saya tertarik dengan promo Landing Page Merdeka (diskon 80%)." +
            "\nNama: " +
            (extra.nama || "") +
            "\nBisnis: " +
            (extra.bisnis || "") +
            "\nKebutuhan: " +
            (extra.kebutuhan || "") +
            "\nDikirim dari /merdeka80" +
            utmStr;

        const url = new URL(`https://wa.me/${WA_NUMBER}`);
        url.searchParams.set("text", message);
        return url.toString();
    };

    const [form, setForm] = useState({ nama: "", bisnis: "", kebutuhan: "" });

    const onSubmit = (e) => {
        e.preventDefault();
        track("Lead", { source: "form_submit_merdeka80" });
        window.location.href = buildWaLink(form);
    };

    const onWaCta = () => {
        track("Lead", { source: "whatsapp_cta_merdeka80" });
        window.open(buildWaLink(), "_blank", "noopener,noreferrer");
    };

    return (
        <main className="bg-white text-slate-900">
            {/* Announcement bar */}
            <div className="sticky top-0 z-50 bg-slate-900 text-white px-4 py-2 flex items-center justify-center gap-3 text-sm">
                <span>🎉 Diskon 80% HUT RI ke-80 • Berlaku s/d 31 Agustus</span>
                <button
                    onClick={onWaCta}
                    className="inline-flex items-center rounded-lg bg-white text-slate-900 px-3 py-1.5 font-semibold hover:bg-slate-100"
                >
                    Ambil Diskon
                </button>
            </div>

            {/* Hero */}
            <section className="bg-gradient-to-b from-white to-rose-50 border-b">
                <div className="max-w-6xl mx-auto px-4 py-10 text-center">
                    <div className="w-32  h-12 mx-auto mb-12 rounded-md shadow-lg overflow-hidden">
                        <div className="h-1/2 bg-red-600" />
                        <div className="h-1/2 bg-white" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                        Merdeka Online! Diskon 80% HUT RI ke-80
                    </h1>
                    <p className="mt-3 max-w-2xl mx-auto text-slate-600">
                        Landing page satu halaman, merah-putih, cepat &amp; responsif. Awal yang kuat untuk
                        bisnismu.
                    </p>

                    <div className="mt-4 flex items-center justify-center gap-3 text-lg">
                        <span className="line-through text-slate-400">Rp3.000.000</span>
                        <span className="text-slate-400">→</span>
                        <span className="text-rose-600 font-extrabold text-2xl">Rp600.000</span>
                        <span className="ml-1 rounded-full bg-rose-100 text-rose-700 px-2.5 py-1 text-xs font-semibold">
                            Agustus saja
                        </span>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                        <button
                            onClick={onWaCta}
                            className="inline-flex items-center rounded-xl bg-rose-600 text-white px-5 py-3 font-bold shadow hover:bg-rose-700"
                        >
                            Ambil Diskon via WhatsApp
                        </button>
                        <a
                            href="#form"
                            className="inline-flex items-center rounded-xl border border-rose-600 text-rose-600 px-5 py-3 font-semibold hover:bg-rose-50"
                        >
                            Minta Contoh &amp; Slot
                        </a>
                    </div>
                </div>
            </section>

            {/* Manfaat */}
            <section className="max-w-6xl mx-auto px-4 py-10">
                <h2 className="text-2xl font-bold mb-5">Apa yang Kamu Dapat</h2>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                        <h3 className="text-lg font-semibold">⚡ Cepat &amp; Responsif</h3>
                        <p className="text-slate-600">Nyaman di HP &amp; desktop, biar pengunjung nggak kabur.</p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                        <h3 className="text-lg font-semibold">🎯 Fokus Aksi</h3>
                        <p className="text-slate-600">Copy singkat, CTA jelas, dan struktur rapi yang siap konversi.</p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                        <h3 className="text-lg font-semibold">🇮🇩 Tema Merah-Putih</h3>
                        <p className="text-slate-600">Nuansa HUT RI yang elegan membuat promo Agustus terasa spesial.</p>
                    </div>
                </div>
            </section>

            {/* Contoh */}
            <section className="max-w-6xl mx-auto px-4 py-10">
                <h2 className="text-2xl font-bold mb-5">Contoh Hasil</h2>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="h-40 rounded-xl border border-dashed border-slate-300 grid place-items-center bg-white overflow-hidden">
                        <a href="https://zulzidan.com/brand-new-web" target="_blank" rel="noopener noreferrer" className="block">
                            <StaticImage
                                src="../images/lp/brand.png"
                                alt="Contoh Brand"
                                layout="constrained"
                                width={180}
                                height={120}
                                className="rounded-lg shadow"
                            />
                        </a>
                    </div>
                    <div className="h-40 rounded-xl border border-dashed border-slate-300 grid place-items-center bg-white overflow-hidden">
                        <a href="https://zulzidan.com/demo-coffee" target="_blank" rel="noopener noreferrer" className="block">
                            <StaticImage
                                src="../images/lp/cofee.png"
                                alt="Contoh Coffee"
                                layout="constrained"
                                width={180}
                                height={120}
                                className="rounded-lg shadow"
                            />
                        </a>
                    </div>
                    <div className="h-40 rounded-xl border border-dashed border-slate-300 grid place-items-center bg-white overflow-hidden">
                        <a href="https://www.zulzidan.com/jasa-pembuatan-website" target="_blank" rel="noopener noreferrer" className="block">
                            <StaticImage
                                src="../images/lp/web.png"
                                alt="Contoh Web"
                                layout="constrained"
                                width={180}
                                height={120}
                                className="rounded-lg shadow"
                            />
                        </a>
                    </div>
                </div>
                <p className="mt-3 text-sm text-slate-500">
                    Butuh lihat lebih banyak? Sertakan link di form. Aku kirimkan studi kasusnya.
                </p>
            </section>

            {/* Proses */}
            <section className="max-w-6xl mx-auto px-4 py-10">
                <h2 className="text-2xl font-bold mb-4">Proses Cepat (3–5 hari)</h2>
                <ol className="list-decimal pl-5 space-y-2 text-slate-800">
                    <li>Brief singkat (WA/Form)</li>
                    <li>Desain &amp; copy ringan</li>
                    <li>Development &amp; uji di HP</li>
                    <li>Go-Live + optimasi kecil</li>
                    <li>Handover &amp; panduan singkat</li>
                </ol>
            </section>

            {/* Harga coret */}
            <section className="max-w-6xl mx-auto px-4 py-10">
                <h2 className="text-2xl font-bold mb-4">Harga Promo</h2>
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                    <div className="flex items-center justify-between py-2">
                        <span>Landing Page One-Page</span>
                        <span>
                            <s className="text-slate-400">Rp3.000.000</s>{" "}
                            <strong className="text-rose-700">Rp600.000</strong>
                        </span>
                    </div>
                    <div className="text-sm text-amber-700">
                        Termasuk: desain, pengembangan, 1x revisi, deploy.
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="max-w-6xl mx-auto px-4 py-10">
                <h2 className="text-2xl font-bold mb-4">FAQ</h2>
                <details className="mb-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <summary className="cursor-pointer font-semibold">Berapa lama pengerjaan?</summary>
                    <p className="mt-2 text-slate-700">Umumnya 3–5 hari kerja sejak materi siap.</p>
                </details>
                <details className="mb-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <summary className="cursor-pointer font-semibold">Termasuk copywriting?</summary>
                    <p className="mt-2 text-slate-700">Ya, copy ringan &amp; struktur halaman. Copy kompleks bisa ditambah.</p>
                </details>
                <details className="mb-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <summary className="cursor-pointer font-semibold">Bisa integrasi WhatsApp/Form?</summary>
                    <p className="mt-2 text-slate-700">Tentu, CTA bisa ke WA/chat atau form email sesuai pilihanmu.</p>
                </details>
            </section>

            {/* Form / WA */}
            <section id="form" className="max-w-6xl mx-auto px-4 py-10">
                <h2 className="text-2xl font-bold mb-4">Minta Contoh &amp; Cek Slot</h2>
                <form onSubmit={onSubmit} className="grid gap-4 ">
                    <label className="grid gap-1 font-semibold">
                        Nama
                        <input
                            required
                            type="text"
                            value={form.nama}
                            onChange={(e) => setForm((s) => ({ ...s, nama: e.target.value }))}
                            placeholder="Nama kamu"
                            className="rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500"
                        />
                    </label>
                    <label className="grid gap-1 font-semibold">
                        Bisnis
                        <input
                            type="text"
                            value={form.bisnis}
                            onChange={(e) => setForm((s) => ({ ...s, bisnis: e.target.value }))}
                            placeholder="Nama bisnis / industri"
                            className="rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500"
                        />
                    </label>
                    <label className="grid gap-1 font-semibold">
                        Kebutuhan
                        <textarea
                            rows={4}
                            value={form.kebutuhan}
                            onChange={(e) => setForm((s) => ({ ...s, kebutuhan: e.target.value }))}
                            placeholder="Ceritakan singkat promo/tujuan halamanmu"
                            className="rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500"
                        />
                    </label>
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-xl bg-rose-600 text-white px-5 py-3 font-bold shadow hover:bg-rose-700"
                    >
                        Kirim via WhatsApp
                    </button>
                    <p className="text-xs text-slate-500">
                        Dengan mengirim, datamu akan diteruskan ke WhatsApp untuk percakapan awal (tanpa hard sell).
                    </p>
                </form>
            </section>

            <footer className="border-t">
                <div className="max-w-6xl mx-auto px-4 py-8 text-center text-slate-500">
                    © {new Date().getFullYear()} <a href="https://zulzidan.com/" className="hover:text-red-500">zulzidan.com</a> | Landing Page Merdeka
                </div>
            </footer>
        </main>
    );
};

export default Merdeka80Page;

// SEO + Meta Pixel in <Head> (Gatsby)
export const Head = () => (
    <>
        <title>Merdeka Online | Diskon 80% HUT RI ke-80 | Landing Page</title>
        <meta
            name="description"
            content="Landing page satu halaman, merah-putih, cepat & responsif. Dari Rp3.000.000 jadi Rp600.000, hanya selama Agustus."
        />
        <meta property="og:title" content="Merdeka Online! Diskon 80% HUT RI ke-80" />
        <meta
            property="og:description"
            content="Landing page satu halaman, merah-putih, cepat & responsif. Awal yang kuat untuk bisnismu."
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index,follow" />
        {PIXEL_ID && (
            <>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
          `,
                    }}
                />
                <noscript>
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img
                        height="1"
                        width="1"
                        style={{ display: "none" }}
                        src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
                    />
                </noscript>
            </>
        )}
    </>
);
