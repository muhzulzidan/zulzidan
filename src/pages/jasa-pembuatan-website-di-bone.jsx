import React from "react";
import { Link } from "gatsby";
import { ChatSquareDots, Brush, Cursor, GeoAlt, Shop, Person, Building, ListCheck, Pencil, BarChart, FileEarmarkText, Check, Whatsapp } from 'react-bootstrap-icons';


import Layout from "../components/layout";
import FAQ from "../components/faq";
import { SEO } from '../components/seo';


const FeatureCard = ({ icon, title, description }) => (
    <div className="p-4 rounded-lg shadow-lg bg-white text-center flex justify-center  flex-col items-center">
        {icon}
        <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);



const WebsiteTypeCard = ({ image, title, description }) => (
    <div className=" flex gap-4 p-6 rounded-lg shadow-lg bg-white">
        {/* <img src={image} alt={title} className="w-16 h-16 mx-auto mb-4" /> */}
      <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
      </div>
    </div>
);

const BusinessTypeCard = ({ icon, title, description }) => (
    <div className="p-6 rounded-lg  bg-white ">
        {icon}
        <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const StepItem = ({ number, title, description, link, icon }) => {
    return (
        <li className="flex relative -left-6 items-start gap-4">
            <span className="bg-blue-500 p-4 rounded-full text-stone-50">{icon}</span>
           <div className="flex flex-col gap-1">
                <h3 className="font-medium leading-tight">{title}</h3>
                <p className="text-sm">
                    {description} {link && <a href={link}>{link}</a>}
                </p>
           </div>
        </li>
    );
};


const JasaPembuatanWebDIBone = () => {
    
    return (
        <Layout>
            <section className="py-16">
                <div className="container px-10 md:px-4 mx-auto ">
                    <h1 className="text-4xl font-semibold text-center mb-6">
                        Jasa Pembuatan Website di Bone
                    </h1>
                    <p className="text-xl text-center mb-10">
                        Membantu bisnis Anda untuk hadir secara online dengan website berkualitas.
                    </p>

                    <div className="flex flex-col gap-32">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold text-white">Apa yang Kami Tawarkan</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FeatureCard
                                    icon={<ChatSquareDots size={36} className="text-blue-500" />}
                                    title="Jasa Pembuatan Website Profesional"
                                    description="Website profesional dan responsif."
                                />
                                <FeatureCard
                                    icon={<Brush size={36} className="text-blue-500" />}
                                    title="Desain Kustom"
                                    description="Desain kustom sesuai kebutuhan bisnis Anda."
                                />
                                <FeatureCard
                                    icon={<BarChart size={36} className="text-blue-500" />}
                                    title="Optimisasi SEO"
                                    description="Optimisasi SEO untuk peringkat lebih baik di mesin pencari."
                                />
                                <FeatureCard
                                    icon={<Cursor size={36} className="text-blue-500" />}
                                    title="Integrasi Media Sosial"
                                    description="Integrasi media sosial dan fitur interaktif."
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold">Jenis Website yang Tersedia</h2>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <WebsiteTypeCard
                                    image="/image-url-1.jpg"
                                    title="Website Perusahaan dan Portofolio"
                                    description="Website perusahaan dan portofolio untuk menampilkan produk dan layanan Anda."
                                />
                                <WebsiteTypeCard
                                    image="/image-url-2.jpg"
                                    title="Toko Online (E-commerce)"
                                    description="Toko online untuk menjual produk secara efisien dan meningkatkan penjualan."
                                />
                                <WebsiteTypeCard
                                    image="/image-url-3.jpg"
                                    title="Blog dan Portal Berita"
                                    description="Buat blog atau portal berita untuk berbagi informasi dan menjangkau audiens lebih luas."
                                />
                                <WebsiteTypeCard
                                    image="/image-url-4.jpg"
                                    title="Landing Page Promosi Produk"
                                    description="Landing page promosi produk untuk memasarkan produk secara efektif."
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-semibold text-stone-950">Cocok untuk Bisnis Apa Saja</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                                <BusinessTypeCard
                                    icon={<GeoAlt size={36} className="text-blue-500" />}
                                    title="Bisnis Lokal di Bone"
                                    description="Cocok untuk bisnis lokal yang ingin meningkatkan kehadiran online di Bone."
                                />
                                <BusinessTypeCard
                                    icon={<Building size={36} className="text-blue-500" />}
                                    title="Startup dan Perusahaan Skala Besar"
                                    description="Kami mendukung startup dan perusahaan skala besar untuk tumbuh dan berkembang."
                                />
                                <BusinessTypeCard
                                    icon={<ListCheck size={36} className="text-blue-500" />}
                                    title="Penyedia Jasa, Toko, dan Industri Lainnya"
                                    description="Layanan pembuatan website kami sesuai untuk berbagai jenis bisnis, termasuk penyedia jasa, toko, dan industri lainnya."
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 relative">
                            <h2 className="text-2xl font-semibold">Bagaimana Cara Kita Bekerja Sama</h2>
                            <p>
                                Proses kerjasama dengan kami adalah sebagai berikut:
                            </p>
                            <ol className="flex flex-col gap-4 mb-24 ml-6 border-l-2 border-stone-950 h-[20em] md:border-0 md:grid md:grid-cols-3 md:py-4 md:h-full md:mb-0">
                                <StepItem
                                    icon={<Check />}
                                    number="1"
                                    title="Step 1"
                                    description="Hubungi kami melalui WhatsApp di"
                                    link="https://wa.me/1234567890"
                                />
                                <StepItem icon={<ChatSquareDots />} number="2" title="Step 2" description="Konsultasi kebutuhan dan tujuan website Anda." />
                                <StepItem icon={<Pencil />} number="3" title="Step 3" description="Perencanaan desain dan pembuatan website." />
                                <StepItem icon={<BarChart />} number="4" title="Step 4" description="Optimisasi SEO untuk visibilitas online yang lebih baik." />
                                <StepItem icon={<FileEarmarkText />} number="5" title="Step 5" description="Pengujian dan pelatihan pengguna (jika diperlukan)." />
                            </ol>

                            {/* <ol class="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">
                                <li class="mb-10 ml-6">
                                    <span class="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                                        <svg class="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                        </svg>
                                    </span>
                                    <h3 class="font-medium leading-tight">Personal Info</h3>
                                    <p class="text-sm">Step details here</p>
                                </li>
                                <li class="mb-10 ml-6">
                                    <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                                        <svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                            <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                                        </svg>
                                    </span>
                                    <h3 class="font-medium leading-tight">Account Info</h3>
                                    <p class="text-sm">Step details here</p>
                                </li>
                                <li class="mb-10 ml-6">
                                    <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                                        <svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                        </svg>
                                    </span>
                                    <h3 class="font-medium leading-tight">Review</h3>
                                    <p class="text-sm">Step details here</p>
                                </li>
                                <li class="ml-6">
                                    <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                                        <svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                                        </svg>
                                    </span>
                                    <h3 class="font-medium leading-tight">Confirmation</h3>
                                    <p class="text-sm">Step details here</p>
                                </li>
                            </ol> */}

                        </div>
                        
                        <FAQ/>

                      
                        <div className="text-center mt-10 flex-col flex justify-center items-center">
                            <h3 className="text-3xl font-heading font-bold py-4">Siap untuk memulai proyek website Anda?</h3>
                            <a href="/contact" className="bg-blue-500 flex gap-4 w-fit  items-center justify-center font-heading font-medium text-stone-50 px-4 py-2 rounded-lg  hover:underline">
                                Hubungi Kami <Whatsapp /> 
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default JasaPembuatanWebDIBone;

export function Head({ location }) {
    return (
        <SEO
            title={"Jasa Pembuatan Website di Bone"}
            pathname={location.pathname}
            description={
                "Zulzidan adalah penyedia jasa pembuatan website di Bone, dengan fokus pada desain kustom, optimisasi SEO, dan banyak fitur lainnya untuk meningkatkan kehadiran bisnis Anda secara online."
            }
        />
    );
}
