import React, { useState } from 'react';
import Layout from '../components/layout';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SEO as Seo } from '../components/seo';

const initialFormData = {
    name: '',
    email: '',
    phone: '',
    website: '',
    websitePurpose: '',
    mainConcern: '',
    auditType: '',
    interestedServices: []
};

const AuditWebsite = ({ location }) => {
    const [formData, setFormData] = useState(initialFormData);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({
        type: 'idle',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: 'idle', message: '' });

        try {
            const response = await fetch('https://api-form-eta.vercel.app/audit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus({
                    type: 'success',
                    message: 'Your request is in. I’ll review your website across the five areas and contact you by email.'
                });
                setFormData({ ...initialFormData });
            } else {
                setStatus({
                    type: 'error',
                    message: 'Your request couldn’t be sent right now. Please try again in a moment.'
                });
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'We couldn’t reach the review service. Check your connection and try again.'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout location={location}>
            <main className="px-3 py-6 text-[#18201c] sm:px-6 sm:py-10 lg:px-10">
                <section className="relative overflow-hidden border border-[#d8cec0] bg-[#f4efe7]">
                    <div
                        className="absolute left-0 top-0 h-1 w-full bg-[#c74b2f]"
                        aria-hidden="true"
                    />

                    <div className="grid gap-14 px-5 py-12 sm:px-10 sm:py-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.72fr)] lg:gap-20 lg:px-16 lg:py-20">
                        <div className="max-w-2xl">
                            <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#9e3925]">
                                <span className="h-px w-10 bg-[#c74b2f]" aria-hidden="true" />
                                Complimentary website review
                            </p>
                            <h1 className="max-w-xl font-serif text-[clamp(2.6rem,6vw,5.25rem)] leading-[0.98] tracking-[-0.045em] text-[#18201c]">
                                Your website should earn trust before the first call.
                            </h1>
                            <p className="mt-7 max-w-xl text-lg leading-8 text-[#465049]">
                                Share your site and I’ll review five essentials that shape a buyer’s first impression, with practical next steps you can use.
                            </p>

                            <div className="mt-12 border-t border-[#cfc4b5]">
                                <p className="py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#6f776f]">
                                    Your free 5-point review covers
                                </p>
                                <ol className="border-t border-[#cfc4b5]">
                                    {[
                                        ['01', 'Clarity', 'Can visitors quickly understand what you offer?'],
                                        ['02', 'Credibility', 'Does the page give buyers enough reason to trust you?'],
                                        ['03', 'Mobile UX', 'Is the experience clear and easy to use on a phone?'],
                                        ['04', 'Speed basics', 'Are obvious loading issues weakening the first impression?'],
                                        ['05', 'Next steps', 'What should you improve first to make the page work harder?']
                                    ].map(([number, title, description]) => (
                                        <li
                                            key={title}
                                            className="grid gap-2 border-b border-[#cfc4b5] py-4 sm:grid-cols-[2.5rem_7.5rem_1fr] sm:items-baseline sm:gap-4"
                                        >
                                            <span className="text-xs font-semibold tracking-[0.16em] text-[#8f3827]">
                                                {number}
                                            </span>
                                            <strong className="font-heading text-base font-semibold text-[#18201c]">
                                                {title}
                                            </strong>
                                            <span className="text-sm leading-6 text-[#596159]">
                                                {description}
                                            </span>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>

                        <div className="self-start border border-[#b9ad9d] bg-[#fffaf3] p-5 shadow-[0_24px_70px_rgba(24,32,28,0.09)] sm:p-8 lg:mt-8">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9e3925]">
                                Start here
                            </p>
                            <h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.03em] text-[#18201c]">
                                Request your free review
                            </h2>
                            <p className="mt-3 text-sm leading-6 text-[#596159]">
                                Add a concern if there’s something specific you’d like me to examine.
                            </p>

                            <form onSubmit={handleSubmit} className="mt-8" aria-busy={loading}>
                                <div className="space-y-6">
                                    <div>
                                        <Label htmlFor="name" className="text-sm font-semibold text-[#18201c]">
                                            Full name
                                        </Label>
                                        <Input
                                            type="text"
                                            id="name"
                                            name="name"
                                            autoComplete="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            disabled={loading}
                                            required
                                            className="mt-2 h-12 rounded-none border-[#b9ad9d] bg-[#fffdf9] px-4 text-base text-[#18201c] placeholder:text-[#827b70] focus-visible:border-[#c74b2f] focus-visible:ring-2 focus-visible:ring-[#c74b2f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fffaf3]"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="email" className="text-sm font-semibold text-[#18201c]">
                                            Email
                                        </Label>
                                        <Input
                                            type="email"
                                            id="email"
                                            name="email"
                                            autoComplete="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            disabled={loading}
                                            required
                                            className="mt-2 h-12 rounded-none border-[#b9ad9d] bg-[#fffdf9] px-4 text-base text-[#18201c] placeholder:text-[#827b70] focus-visible:border-[#c74b2f] focus-visible:ring-2 focus-visible:ring-[#c74b2f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fffaf3]"
                                        />
                                    </div>

                                    <div>
                                        <Label htmlFor="website" className="text-sm font-semibold text-[#18201c]">
                                            Website URL
                                        </Label>
                                        <Input
                                            type="url"
                                            id="website"
                                            name="website"
                                            inputMode="url"
                                            autoComplete="url"
                                            placeholder="https://yourwebsite.com"
                                            value={formData.website}
                                            onChange={handleChange}
                                            disabled={loading}
                                            required
                                            className="mt-2 h-12 rounded-none border-[#b9ad9d] bg-[#fffdf9] px-4 text-base text-[#18201c] placeholder:text-[#827b70] focus-visible:border-[#c74b2f] focus-visible:ring-2 focus-visible:ring-[#c74b2f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fffaf3]"
                                        />
                                    </div>

                                    <div>
                                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                                            <Label htmlFor="mainConcern" className="text-sm font-semibold text-[#18201c]">
                                                Main concern
                                            </Label>
                                            <span className="text-xs text-[#6f776f]">Optional</span>
                                        </div>
                                        <textarea
                                            id="mainConcern"
                                            name="mainConcern"
                                            rows="4"
                                            placeholder="For example: visitors aren’t getting in touch."
                                            value={formData.mainConcern}
                                            onChange={handleChange}
                                            disabled={loading}
                                            className="mt-2 block w-full resize-y rounded-none border border-[#b9ad9d] bg-[#fffdf9] px-4 py-3 text-base leading-6 text-[#18201c] placeholder:text-[#827b70] focus:border-[#c74b2f] focus:outline-none focus:ring-2 focus:ring-[#c74b2f] focus:ring-offset-2 focus:ring-offset-[#fffaf3] disabled:cursor-not-allowed disabled:opacity-50"
                                        />
                                    </div>
                                </div>

                                <div
                                    className={`mt-6 border px-4 py-3 text-sm leading-6 ${
                                        status.type === 'success'
                                            ? 'border-[#8ba08e] bg-[#edf2eb] text-[#27442f]'
                                            : status.type === 'error'
                                                ? 'border-[#d18b79] bg-[#faebe6] text-[#7b281b]'
                                                : 'hidden'
                                    }`}
                                    role={status.type === 'error' ? 'alert' : 'status'}
                                    aria-live={status.type === 'error' ? 'assertive' : 'polite'}
                                >
                                    {status.message}
                                </div>

                                <div className="mt-6">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="inline-flex min-h-12 w-full items-center justify-center bg-[#c74b2f] px-6 py-3 text-sm font-semibold text-[#fffaf3] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#a83c26] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#18201c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fffaf3] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        {loading && (
                                            <svg
                                                className="mr-3 h-5 w-5 animate-spin"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                />
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                />
                                            </svg>
                                        )}
                                        {loading ? 'Requesting your review…' : 'Get my free 5-point review'}
                                    </button>
                                    <p className="mt-3 text-center text-xs leading-5 text-[#6f776f]">
                                        Required fields are name, email, and website URL.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export function Head({ location }) {
    return (
        <Seo
            title={"Free 5-Point Website Review | Zulzidan"}
            pathname={location.pathname}
            description={
                "Request a free 5-point website review covering clarity, credibility, mobile user experience, speed basics, and practical next steps."
            }
        />
    );
}

export default AuditWebsite;
