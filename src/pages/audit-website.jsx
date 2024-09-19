import React, { useState } from 'react';
import Layout from '../components/layout';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Transition, TransitionChild } from '@headlessui/react';
import { SEO } from '../components/seo';

const AuditWebsite = ({ location }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
        websitePurpose: '',
        mainConcern: '',
        auditType: '',
        interestedServices: []
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                interestedServices: checked
                    ? [...prevData.interestedServices, value]
                    : prevData.interestedServices.filter((service) => service !== value)
            }));
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('https://api-form-eta.vercel.app/audit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                setMessage('Data berhasil disimpan!');
                setIsOpen(true);
                // Optionally, reset the form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    website: '',
                    websitePurpose: '',
                    mainConcern: '',
                    auditType: '',
                    interestedServices: []
                });
            } else {
                setMessage('Terjadi kesalahan, silakan coba lagi.');
                setIsOpen(true);
            }
        } catch (error) {
            setMessage('Error connecting to server.');
            setIsOpen(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout location={location}>
            <div className='px-3 lg:px-10 py-12'>
                <h1 className="text-3xl font-bold mb-4">Audit Website</h1>
                <p className="text-lg mb-6">Isi formulir di bawah ini untuk mendapatkan audit website gratis.</p>
                <form onSubmit={handleSubmit}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className="grid w-full items-center gap-4 mb-4">
                            <Label htmlFor="name" className="text-lg font-semibold">Nama Pemilik/Perwakilan</Label>
                            <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="p-2 border rounded" />
                        </div>
                        <div className="grid w-full items-center gap-4 mb-4">
                            <Label htmlFor="email" className="text-lg font-semibold">Email</Label>
                            <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="p-2 border rounded" />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className="grid w-full items-center gap-4 mb-4">
                            <Label htmlFor="phone" className="text-lg font-semibold">Nomor Telepon (Opsional)</Label>
                            <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="p-2 border rounded" />
                        </div>
                        <div className="grid w-full items-center gap-4 mb-4">
                            <Label htmlFor="website" className="text-lg font-semibold">URL Website</Label>
                            <Input type="url" id="website" name="website" value={formData.website} onChange={handleChange} required className="p-2 border rounded" />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className="grid w-full items-center gap-4 mb-4">
                            <Label htmlFor="websitePurpose" className="text-lg font-semibold">Tujuan Website</Label>
                            <select id="websitePurpose" name="websitePurpose" value={formData.websitePurpose} onChange={handleChange} required className="p-2 border rounded">
                                <option value="">Pilih Tujuan</option>
                                <option value="bisnis">Bisnis</option>
                                <option value="blog">Blog</option>
                                <option value="portofolio">Portofolio</option>
                                <option value="e-commerce">E-commerce</option>
                            </select>
                        </div>
                        <div className="grid w-full items-center gap-4 mb-4">
                            <Label htmlFor="auditType" className="text-lg font-semibold">Jenis Audit yang Diinginkan</Label>
                            <select id="auditType" name="auditType" value={formData.auditType} onChange={handleChange} required className="p-2 border rounded">
                                <option value="">Pilih Jenis Audit</option>
                                <option value="kecepatan">Audit Kecepatan</option>
                                <option value="seo">Audit SEO</option>
                                <option value="ux">Audit User Experience (UX)</option>
                                <option value="keamanan">Audit Keamanan</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid w-full items-center gap-4 mb-4">
                        <Label htmlFor="mainConcern" className="text-lg font-semibold">Masalah atau Kekhawatiran Utama</Label>
                        <textarea id="mainConcern" name="mainConcern" value={formData.mainConcern} onChange={handleChange} required className="p-2 border rounded" />
                    </div>

                    <div className="grid w-full items-center gap-4 mb-4">
                        <Label className="text-lg font-semibold">Apakah Anda Tertarik dengan Layanan Lain?</Label>
                        <div className="flex flex-col gap-2">
                            <label className="flex items-center">
                                <input type="checkbox" name="interestedServices" value="pembuatan-website" onChange={handleChange} className="mr-2" />
                                Pembuatan Website
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" name="interestedServices" value="optimasi-seo" onChange={handleChange} className="mr-2" />
                                Optimasi SEO
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" name="interestedServices" value="jasa-landing-page" onChange={handleChange} className="mr-2" />
                                Jasa Landing Page
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded flex items-center justify-center">
                        {loading && <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>}
                        Kirim
                    </button>
                </form>
            </div>

            <Transition show={isOpen}>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="min-h-screen px-4 text-center">
                        <TransitionChild
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black opacity-30" />
                        </TransitionChild>

                        <span className="inline-block h-screen align-middle" aria-hidden="true">
                            &#8203;
                        </span>
                        <TransitionChild
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">
                                    {message.includes('berhasil') ? 'Success' : 'Error'}
                                </h3>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        {message}
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </TransitionChild>
                    </div>
                </div>
            </Transition>
        </Layout>
    );
};

export function Head({ location }) {
    return (
        <SEO
            title={"Audit Website - Zulzidan"}
            pathname={location.pathname}
            description={
                "Dapatkan audit website gratis dari Zulzidan. Kami menawarkan layanan audit kecepatan, SEO, UX, dan keamanan untuk memastikan website Anda berfungsi dengan optimal."
            }
        />
    );
}

export default AuditWebsite;