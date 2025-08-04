

import React, { useRef } from 'react';
import Layout from '../components/layout';
import { SEO } from '../components/seo';
import LogoFull from '../svg/logoFull.svg';
import { FaCheckCircle } from 'react-icons/fa';

const BrandNewWeb = ({ location }) => {
    const year = new Date().getFullYear();
    const formRef = useRef(null);
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [error, setError] = React.useState("");

    const handleCtaClick = (e) => {
        e.preventDefault();
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);
        setError("");
        const form = e.target;
        const data = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            website: form.current_site.value,
        };
        try {
            const response = await fetch('https://api-form-eta.vercel.app/lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSuccess(true);
                form.reset();
            } else {
                setError('Terjadi kesalahan, silakan coba lagi.');
            }
        } catch (error) {
            setError('Error connecting to server.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="bg-gradient-to-br from-[#f9faff] via-[#e6f0ff] to-[#f0f4ff] min-h-screen text-[#222] font-sans px-2 py-8">
                <header className="max-w-xl mx-auto p-4 flex flex-col items-center">
                    <div className="py-10">
                        <LogoFull className="w-32 h-12 mx-auto" />
                    </div>
                    <h1 className="text-[#0B3D91] text-4xl md:text-5xl font-extrabold text-center tracking-tight leading-tight font-heading">
                        Ready for a Brand New Web?
                    </h1>
                    <p className="mt-4 text-center text-lg text-[#222] max-w-lg">
                        Tired of a slow, clunky website? Get a <span className="font-semibold text-[#0B3D91]">Next.js</span> site that loads in under 2.5s, boosts your conversions, and makes your brand look world-class. <span className="text-[#06327A] font-semibold">No risk. No upfront payment.</span>
                    </p>
                    <a
                        href="#lead-form"
                        className="cta bg-gradient-to-r from-[#0B3D91] to-[#06327A] text-white px-7 py-3 rounded-lg mt-7 shadow-lg hover:scale-105 transition-transform duration-200 text-center font-bold tracking-wide text-lg"
                        onClick={handleCtaClick}
                    >
                        Claim Your Free Speed Audit
                    </a>
                    <p className="text-xs text-[#555] mt-2 text-center max-w-xs">No spam. No obligation. Just a real performance report for your site.</p>
                </header>

                <section className="max-w-xl mx-auto p-4">
                    <h2 className="text-2xl font-bold mb-3 text-[#06327A] leading-snug">Why Settle for Slow?</h2>
                    <ul className="pl-0 mb-4 text-base space-y-3 list-disc list-outside prose">
                        <li>Slow sites kill conversions. 1s‑load pages convert up to <span className="font-bold text-[#0B3D91]">5×</span> more; 10s‑load pages lose traffic fast.</li>
                        <li>WordPress plugins often cause janky performance and inconsistent Core Web Vitals.</li>
                        <li>Next.js delivers pre‑built pages via CDN, minimal JavaScript, and blazing load times—only the essentials get bundled.</li>
                    </ul>
                </section>

                <section className="guarantee max-w-xl mx-auto p-4 bg-[#0b3d911a] border-l-4 border-[#0B3D91] my-6 rounded-lg">
                    <h2 className="text-xl font-bold mb-2 text-[#0B3D91] leading-snug">Our Guarantee</h2>
                    <p className="text-base">Your site will load <span className="font-bold text-[#06327A]">at least 40% faster</span> (or under <span className="font-bold">2.5s LCP</span> on mobile). If not, your next hosting month is <span className="font-bold text-green-700">free</span>—or get 50% off the build fee.</p>
                    <p className="mt-2 text-sm text-[#222]">Measured with Lighthouse, before and after. No loopholes. No tricks. <span className="font-semibold text-[#0B3D91]">Just results.</span></p>
                </section>

                <section className="max-w-xl mx-auto p-4">
                    <h2 className="text-2xl font-bold mb-3 text-[#06327A] leading-snug">How It Works</h2>
                    <ol className="list-decimal pl-5 mb-4 text-base space-y-2">
                        <li><span className="font-bold text-[#0B3D91]">Speed Audit</span> – Core Web Vitals snapshot, delivered in 24 hours.</li>
                        <li><span className="font-bold text-[#0B3D91]">Discovery Call</span> – Find your WordPress bottlenecks.</li>
                        <li><span className="font-bold text-[#0B3D91]">Web Rebuild & Launch</span> – Next.js site on global CDN. Pay only after you see results.</li>
                    </ol>
                </section>

                <section className="max-w-xl mx-auto p-4">
                    <h2 className="text-2xl font-bold mb-3 text-[#06327A] leading-snug">Success Stories</h2>
                    <blockquote className="border-l-4 border-[#0B3D91] pl-4 italic text-[#555] my-2 bg-white/60 rounded">
                        “We went from a 4.2s LCP on WordPress to 1.1s. Page speed doubled our leads after launch.”
                    </blockquote>
                    <blockquote className="border-l-4 border-[#0B3D91] pl-4 italic text-[#555] my-2 bg-white/60 rounded">
                        “Upgrading to Next.js felt like swinging into a new web identity—lightweight, powerful, and maintenance‑free.”
                    </blockquote>
                </section>

                <section className="max-w-xl mx-auto p-4">
                    <h2 className="text-2xl font-bold mb-3 text-[#0B3D91] leading-snug">Ready to Transform?</h2>
                    <form
                        id="lead-form"
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="grid gap-3 bg-white/80 p-4 rounded-xl shadow"
                        autoComplete="off"
                    >
                        <input type="text" name="name" placeholder="Your Name" required className="p-3 text-base rounded border-2 border-[#0B3D91]/30 focus:border-[#0B3D91] outline-none" />
                        <input type="email" name="email" placeholder="Email Address" required className="p-3 text-base rounded border-2 border-[#0B3D91]/30 focus:border-[#0B3D91] outline-none" />
                        <input type="tel" name="phone" placeholder="WhatsApp / Telegram" required className="p-3 text-base rounded border-2 border-[#0B3D91]/30 focus:border-[#0B3D91] outline-none" />
                        <textarea name="current_site" rows={3} placeholder="Current site URL or brief description (optional)" className="p-3 text-base rounded border-2 border-[#0B3D91]/30 focus:border-[#0B3D91] outline-none" />
                        <button
                            type="submit"
                            className={`bg-gradient-to-r from-[#0B3D91] to-[#06327A] text-white p-3 rounded-lg mt-2 font-bold shadow hover:scale-105 transition-transform duration-200 ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
                            disabled={loading}
                        >
                            {loading ? 'Submitting...' : 'Start My Brand New Web'}
                        </button>
                        {success && <div className="text-green-700 text-xs mt-1">Thank you! We'll be in touch soon.</div>}
                        {error && <div className="text-red-600 text-xs mt-1">{error}</div>}
                        <div className="privacy text-xs text-[#06327A] mt-1">We respect your privacy—no marketing spam, ever.</div>
                    </form>
                </section>

                <footer className="text-center text-sm p-4 mt-8 text-[#06327A]">
                    &copy; {year} <span className="font-bold text-[#0B3D91]">Zulzidan.com</span> – Your Brand New Web Experience<br />
                    <span className="inline-block mt-1 text-xs text-[#555]">* Spider‑Man™ & Marvel trademarks are property of their respective owners; used here only as creative inspiration. This is not a Marvel‑associated service.</span>
                </footer>
            </div>
        </>
    );
};

export default BrandNewWeb;

export function Head({ location }) {
    return (
        <SEO
            title="Are You Ready for a Brand New Web?"
            pathname={location.pathname}
            description="Just like Spider‑Man swings into a new chapter, we migrate your WordPress site to a Next.js setup—40% faster or your month is free."
        />
    );
}