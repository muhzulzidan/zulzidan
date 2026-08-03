import * as React from "react";
import {StaticImage} from "@/components/legacy-image"
const WA_NUMBER = "62812XXXXXXX"; // ganti nomor WA kamu (tanpa +)

const feats = [
    { title: "Cepat & responsif", desc: "Nyaman di HP, langsung paham dalam 3 detik." },
    { title: "1 pesan, 1 tombol", desc: "Tanpa distraksi, fokus ke aksi utama." },
    { title: "Siap buat iklan", desc: "Headline jelas, CTA tegas, konversi lebih gampang." },
];

export default function DemoCoffee() {
    const waLink = new URL(`https://wa.me/${WA_NUMBER}`);
    waLink.searchParams.set("text", "Halo, mau lihat demo CoffeeFest Merdeka .");

    return (
        <main className="min-h-screen bg-white text-slate-900">
            {/* HERO */}
            <section className="bg-gradient-to-b from-white to-rose-50 border-b">
                <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <span className="inline-flex items-center rounded-full bg-rose-100 text-rose-700 px-3 py-1 text-xs font-semibold">
                            Demo oleh Zul Zidan
                        </span>
                        <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold leading-tight">
                            CoffeeFest Merdeka | Landing Page Demo
                        </h1>
                        <p className="mt-3 text-slate-600">
                            Satu halaman promo event: headline jelas, 3 manfaat, dan tombol WhatsApp.
                        </p>
                        <div className="mt-5 flex gap-3">
                            <a
                                href={waLink.toString()}
                                className="inline-flex items-center rounded-xl bg-rose-600 text-white px-5 py-3 font-bold shadow hover:bg-rose-700"
                            >
                                Tanya via WhatsApp
                            </a>
                            <a href="#manfaat" className="inline-flex items-center rounded-xl border border-rose-600 text-rose-600 px-5 py-3 font-semibold hover:bg-rose-50">
                                Lihat manfaat
                            </a>
                        </div>
                        <p className="mt-2 text-xs text-slate-500">*Ini demo, bukan proyek klien.</p>
                    </div>

                    <div className="order-first md:order-last">
                        <StaticImage
                            src="../images/cafee.png"
                            alt="Ilustrasi promosi event"
                            className="w-full max-w-md mx-auto drop-shadow"
                        />
                       
                    </div>
                </div>
            </section>

            {/* MANFAAT */}
            <section id="manfaat" className="max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-2xl font-bold mb-6">Kenapa model ini?</h2>
                <div className="grid md:grid-cols-3 gap-4">
                    {feats.map((f) => (
                        <div key={f.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                            {/* Heroicons check-circle (MIT) */}
                            <svg className="w-6 h-6 text-rose-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16Zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.172 7.707 8.879a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4Z" clipRule="evenodd" />
                            </svg>
                            <h3 className="mt-3 text-lg font-semibold">{f.title}</h3>
                            <p className="text-slate-600">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA BAWAH */}
            <section className="max-w-6xl mx-auto px-4 pb-16">
                <div className="rounded-2xl bg-rose-600 text-white p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div>
                        <p className="font-bold text-lg">Siap dipakai untuk promo Agustus</p>
                        <p className="text-rose-100 text-sm">Struktur simpel: Hero → Manfaat → CTA WA.</p>
                    </div>
                    <a
                        href={waLink.toString()}
                        className="inline-flex items-center justify-center rounded-xl bg-white text-rose-700 px-5 py-3 font-bold hover:bg-rose-50"
                    >
                        Coba & minta file
                    </a>
                </div>
            </section>

            <footer className="border-t">
                <div className="max-w-6xl mx-auto px-4 py-8 text-center text-slate-500">
                    © {new Date().getFullYear()} Demo by Zul Zidan
                </div>
            </footer>
        </main>
    );
}

export const Head = () => (
    <>
        <title>Demo CoffeeFest Merdeka | Zul Zidan</title>
        <meta name="description" content="Demo landing page satu halaman untuk promo event yang cepat, fokus aksi, dan siap iklan." />
    </>
);
