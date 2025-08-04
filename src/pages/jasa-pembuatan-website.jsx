import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import Header from '../components/header';
import { SEO } from '../components/seo';
import Footer from '../components/footer';

import { useInView } from 'react-intersection-observer';
import Testimoni1 from '../images/testimoni/testimoni-1.png'
import Testimoni2 from '../images/testimoni/testimoni-2.png'
import Testimoni3 from '../images/testimoni/testimoni-3.png'
import Testimoni4 from '../images/testimoni/testimoni-4.png'
import Testimoni5 from '../images/testimoni/testimoni-5.png'
import Testimoni6 from '../images/testimoni/testimoni-6.png'
import Testimoni7 from '../images/testimoni/testimoni-7.png'
import Testimoni8 from '../images/testimoni/testimoni-8.png'
import Testimoni9 from '../images/testimoni/testimoni-9.png'
import { ChevronDown, ChevronUp, Mail, File, TabletSmartphone, SwatchBook, Headset, NotepadText, Paintbrush, Search, Images, LineChart, BookA , ChartBar, Shield, Star  } from 'lucide-react';
import { motion } from 'framer-motion';
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { CheckCircleFill } from 'react-bootstrap-icons';



const LandingPage = ({ data }) => {
    const works = data.allContentfulZulzidanWorks.edges;
    const [active, setActive] = useState(null);
    const linkwa = "https://api.whatsapp.com/send?phone=6281354789375&text=halo%20zulzidan.com%2C%20saya%20mau%20jasa%20pembuatan%20website"
    const toggle = index => {
        if (active === index) {
            return setActive(null);
        }
        setActive(index);
    }
    // make ref and inView for each section
    const [ref2, inView2] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [ref3, inView3] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [ref4, inView4] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [ref5, inView5] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [ref6, inView6] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });


    const [ref, inView] = useInView({ 
        triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes into view
        threshold: 0.1, // Percentage of the element that is in view before the callback triggers
    });
    const [ref1, inView1] = useInView({
        triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes into view
        threshold: 0.1, // Percentage of the element that is in view before the callback triggers
    });


    const faqs = [
        {
            "question": "Apa keuntungan menggunakan Next.js untuk pembuatan website?",
            "answer": "Next.js memberikan performa optimal, kemudahan pengembangan, dan SEO-friendly. Dengan teknologi terkini ini, website Anda akan responsif, cepat, dan mudah diakses oleh mesin pencari."
        },
        {
            "question": "Berapa lama waktu yang dibutuhkan untuk pembuatan website menggunakan Next.js?",
            "answer": "Waktu pembuatan website dapat bervariasi tergantung pada kompleksitas proyek. Namun, kami berkomitmen untuk memberikan hasil yang berkualitas sesuai dengan tenggat waktu yang disepakati bersama."
        },
        {
            "question": "Apakah saya bisa meminta fitur khusus di website saya?",
            "answer": "Tentu, kami menyediakan layanan konsultasi untuk mendengarkan kebutuhan Anda. Jika Anda memiliki fitur khusus yang diinginkan, kami akan berusaha memasukkannya ke dalam proyek."
        },
        {
            "question": "Bagaimana dengan dukungan teknis setelah website selesai dibuat?",
            "answer": "Setelah website selesai, kami menyediakan dukungan teknis. Paket layanan kami mencakup periode dukungan tertentu, dan Anda dapat memilih untuk memperpanjangnya sesuai kebutuhan."
        },
        {
            "question": "Apakah saya bisa melihat portofolio proyek Next.js sebelumnya?",
            "answer": "Tentu, Anda dapat melihat beberapa proyek Next.js yang telah kami kerjakan di bagian portofolio di situs web kami."
        },
    ];

    return (
        <div className="bg-stone-50 ">

            <div className='max-w-screen-xl mx-auto'>
                <Header landingPage={true} />
                <header className="md:p-8 px-4 md:pt-4 py-12 text-center md:text-start md:py-32 flex flex-col md:flex-row items-center md:gap-8 bg-stone-50">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1"
                    >
                        <h1 className="text-3xl md:text-4xl md:my-6 mb-4 font-bold text-gray-900 md:w-10/12">
                            Transformasi Bisnis Anda dengan Website Cepat, Aman, dan Mudah Ditemukan
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 mb-6 md:w-10/12">
                            Bingung mulai dari mana? Kami bantu buatkan website bisnis Anda — cepat, aman, dan mudah ditemukan di Google.
                        </p>
                        <ul className="mb-6 flex flex-col items-center md:items-start gap-2 text-base text-gray-800">
                            <li className="flex items-center gap-2"><CheckCircleFill className="text-green-500" />Website profesional & responsif</li>
                            <li className="flex items-center gap-2"><CheckCircleFill className="text-green-500" />Proses cepat dan mudah</li>
                            <li className="flex items-center gap-2"><CheckCircleFill className="text-green-500" />Siap tampil di mesin pencari (SEO Friendly)</li>
                        </ul>
                        <a href={linkwa} className="bg-indigo-600 hover:bg-indigo-500 text-stone-50 px-6 py-3 w-fit mx-auto md:mx-0 cursor-pointer rounded-full flex items-center justify-center font-bold">
                            <span className='text-white mr-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"></path></svg>
                            </span>
                            Konsultasikan Sekarang
                        </a>
                        <p className="text-gray-600 text-sm mt-4">Klik WhatsApp untuk konsultasi gratis bersama kami!</p>
                    </motion.div>
                    <div className="w-full flex justify-center md:block md:w-1/2 mt-8 md:mt-0">
                        <StaticImage
                            src="https://images.unsplash.com/photo-1558174685-430919a96c8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2Vic2l0ZXx8fHx8fDE3MDkxMTcwNTM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
                            alt="Hero Image"
                            className="w-4/5 max-w-xs md:w-full md:max-w-full my-4 md:my-0 md:mx-auto md:mb-4 rounded-2xl shadow-lg"
                        />
                    </div>
                </header>
                <motion.section

                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                    transition={{ duration: 0.5 }}
                >
                    <section className="md:p-8  px-4 py-16 ">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Kenapa Memilih Kami?
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center bg-stone-50 rounded-lg p-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" className="w-40 h-auto md:w-16 md:h-16 text-indigo-700 mr-4" alt="Performa Optimal Icon"><path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641z"></path></svg>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">Cepat & Lancar</h3>
                                    <p className="text-gray-600 text-sm">Website Anda akan dibuka dalam hitungan detik, tanpa loading lama.</p>
                                </div>
                            </div>

                            <div className="flex items-center bg-stone-50 rounded-lg p-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" className="w-40 h-auto md:w-16 md:h-16 text-indigo-700 mr-4" alt="SEO-Friendly Icon"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path></svg>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">Mudah Ditemukan di Google</h3>
                                    <p className="text-gray-600 text-sm">Website Anda kami optimalkan agar lebih mudah muncul di hasil pencarian.</p>
                                </div>
                            </div>

                            <div className="flex items-center bg-stone-50 rounded-lg p-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" className="w-40 h-auto md:w-16 md:h-16 text-indigo-700 mr-4" alt="Pengalaman Pengguna Unggul Icon"><path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"></path></svg>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">Tampilan Menarik & Nyaman</h3>
                                    <p className="text-gray-600 text-sm">Kami buatkan desain yang enak dilihat dan mudah digunakan oleh pengunjung.</p>
                                </div>
                            </div>

                            <div className="flex items-center bg-stone-50 rounded-lg p-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" className="w-40 h-auto md:w-16 md:h-16 text-indigo-700 mr-4" alt="Kemudahan Pengembangan Icon"><path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"></path></svg>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">Proses Pembuatan Cepat</h3>
                                    <p className="text-gray-600 text-sm">Tanpa ribet, website Anda bisa online dalam waktu singkat.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </motion.section>

                <motion.section

                    ref={ref6}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: inView6 ? 1 : 0, y: inView6 ? 0 : 50 }}
                    transition={{ duration: 0.5 }}
                >
                    <section className="md:p-16 py-16 px-4 bg-stone-50">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">
                            Portofolio
                        </h2>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {works.map(({ node }) => (
                                <div
                                    key={node.slug}
                                    className="bg-stone-50 rounded-lg p-8 shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                                >
                                    <GatsbyImage
                                        image={getImage(node.images[0])}
                                        alt={node.title}
                                        className="w-full h-40 mb-4 rounded-lg"
                                    />
                                    <h4 className="text-2xl font-semibold text-gray-800 mb-2">{node.title}</h4>
                                    <p className={`text-gray-700 mb-4 line-clamp-2 md:line-clamp-3`}>
                                        {node.description.description}
                                    </p>
                                    <a
                                        href={`https://zulzidan.com/works/${node.slug}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-2 px-6 py-3 bg-indigo-500 text-stone-50 font-bold rounded-full hover:bg-indigo-600 transition duration-300"
                                    >
                                        View Project
                                    </a>
                                </div>
                            ))}
                        </div>

                    </section>
                </motion.section>

                <motion.section

                    ref={ref1}
                    initial={{ opacity: 0, y: 50 }} // start 50px below the final position
                    animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }} // move to the final position when in view
                    transition={{ duration: 0.5 }}
                >
                    <section className="md:p-16 px-4  py-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">
                            Proses Kerja
                        </h2>

                        <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
                            <li className="flex items-center text-indigo-600 dark:text-indigo-500 space-x-2.5 rtl:space-x-reverse">
                                <span className="flex items-center justify-center w-8 h-8 border border-indigo-600 rounded-full shrink-0 dark:border-indigo-500">
                                    1
                                </span>
                                <span>
                                    <h3 className="font-medium leading-tight text-xl md:text-base">Konsultasi</h3>
                                    <p className="text-sm">Diskusikan kebutuhan dan tujuan Anda dengan tim kami.</p>
                                </span>
                            </li>
                            <li className="flex items-center text-stone-950 space-x-2.5 rtl:space-x-reverse">
                                <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                                    2
                                </span>
                                <span>
                                    <h3 className="font-medium leading-tight text-xl md:text-base">Perencanaan</h3>
                                    <p className="text-sm">Buat rencana strategis dan desain visual untuk website Anda.</p>
                                </span>
                            </li>
                            <li className="flex items-center text-stone-950 space-x-2.5 rtl:space-x-reverse">
                                <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                                    3
                                </span>
                                <span>
                                    <h3 className="font-medium leading-tight text-xl md:text-base ">Pembuatan</h3>
                                    <p className="text-sm">Tim kami akan membangun website Anda dengan menggunakan teknologi terkini.</p>
                                </span>
                            </li>
                        </ol>
                    </section>
                </motion.section>

                <motion.section

                    ref={ref2}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
                    transition={{ duration: 0.5 }}
                >
                    <section className="md:p-16 px-4 py-16 bg-stone-50">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">
                            Harga & Paket
                        </h2>
                        <div className="grid grid-cols-1 gap-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* Paket Basic */}
                                <div className="flex flex-col gap-1 border rounded-lg p-8">
                                    <h3 className="font-medium text-lg">Paket Basic</h3>
                                    <p className="font-bold text-lg pt-2">Rp 1.800.000</p>
                                    <p className="text-sm mt-2 mb-4">
                                        Solusi ideal untuk Anda yang membutuhkan landing page profesional dengan desain responsif untuk berbagai perangkat.
                                    </p>
                                    <ul className="list-none grid grid-cols-1 gap-2 py-2">
                                        <li className='flex gap-2 justify-center items-center'>
                                            <CheckCircleFill className="text-green-500 w-1/12" />
                                            <span className='w-11/12'>1 halaman landing page berkualitas tinggi</span>
                                        </li>
                                        <li className='flex gap-2 justify-center items-center'>
                                            <CheckCircleFill className="text-green-500 w-1/12" />
                                            <span className='w-11/12'>Desain mobile-friendly dan desktop-friendly</span>
                                        </li>
                                        <li className='flex gap-2 justify-center items-center'>
                                            <CheckCircleFill className="text-green-500 w-1/12" />
                                            <span className='w-11/12'>Integrasi formulir kontak sederhana</span>
                                        </li>
                                        <li className='flex gap-2 justify-center items-center'>
                                            <CheckCircleFill className="text-green-500 w-1/12" />
                                            <span className='w-11/12'>Kustomisasi warna dan font sesuai brand Anda</span>
                                        </li>
                                        <li className='flex gap-2 justify-center items-center'>
                                            <CheckCircleFill className="text-green-500 w-1/12" />
                                            <span className='w-11/12'>Dukungan teknis dan perbaikan minor selama 1 bulan</span>
                                        </li>
                                    </ul>
                                    <p className="text-xs text-gray-500 mt-4">Cocok untuk: Bisnis baru, promosi event, pengenalan produk.</p>
                                </div>
                                {/* Paket Standard */}
                                <div className="border border-indigo-700 rounded-lg -mt-10 p-8 flex flex-col gap-1 pt-16 relative bg-white shadow-lg">
                                    <div className="absolute -top-0 -left-0 w-full bg-indigo-700 text-white px-8 py-2 rounded-t-lg">
                                        <span className="text-sm font-bold">Best Seller</span>
                                    </div>
                                    <h3 className="font-medium text-lg">Paket Standard</h3>
                                    <p className="font-bold text-lg pt-2">Rp 3.500.000</p>
                                    <p className="text-sm mt-2 mb-4">
                                        Bangun kepercayaan bisnis Anda dengan website company profile yang elegan, SEO-friendly, dan siap tampil di mesin pencari.
                                    </p>
                                    <ul className="list-none grid grid-cols-1 gap-2 py-2">
                                        <li className='flex gap-2 justify-center items-center'>
                                            <CheckCircleFill className="text-green-500 w-1/12" />
                                            <span className='w-11/12'>5 halaman website company profile profesional</span>
                                        </li>
                                        <li className='flex gap-2 justify-center items-center'>
                                            <CheckCircleFill className="text-green-500 w-1/12" />
                                            <span className='w-11/12'>Desain estetis, responsif, dan disesuaikan dengan identitas brand</span>
                                        </li>
                                        <li className='flex gap-2 justify-center items-center'>
                                            <CheckCircleFill className="text-green-500 w-1/12" />
                                            <span className='w-11/12'>Optimisasi dasar SEO untuk visibilitas di Google</span>
                                        </li>
                                        <li className='flex gap-2 justify-center items-center'>
                                            <CheckCircleFill className="text-green-500 w-1/12" />
                                            <span className='w-11/12'>Formulir kontak dan formulir pendaftaran sederhana</span>
                                        </li>
                                        <li className='flex gap-2 justify-center items-center'>
                                            <CheckCircleFill className="text-green-500 w-1/12" />
                                            <span className='w-11/12'>Galeri foto atau portofolio produk yang menarik</span>
                                        </li>
                                        <li className='flex gap-2 justify-center items-center'>
                                            <CheckCircleFill className="text-green-500 w-1/12" />
                                            <span className='w-11/12'>Dukungan teknis dan perbaikan minor selama 2 bulan</span>
                                        </li>
                                    </ul>
                                    <p className="text-xs text-gray-500 mt-4">Cocok untuk: Perusahaan, jasa profesional, UMKM yang ingin naik kelas.</p>
                                </div>
                                {/* Paket Premium */}
                                <div className="flex flex-col gap-1 border rounded-lg p-8">
                                    <h3 className="font-medium text-lg">Paket Premium</h3>
                                    <p className="font-bold text-lg pt-2">Rp 7.500.000</p>
                                    <p className="text-sm mt-2 mb-4">
                                        Layanan eksklusif untuk Anda yang ingin bertransformasi total: migrasi website, optimisasi SEO mendalam, dan sistem keamanan website canggih.
                                    </p>
                                    <ul className="list-none grid grid-cols-1 gap-2 py-2">
                                        <li className='flex gap-2 justify-center items-center'>
                                            <CheckCircleFill className="text-green-500 w-1/12" />
                                            <span className='w-11/12'>Migrasi penuh dari WordPress ke Next.js untuk performa maksimal</span>
                                        </li>
                                        <li className='flex gap-2 justify-center items-center'>
                                            <CheckCircleFill className="text-green-500 w-1/12" />
                                            <span className='w-11/12'>Pembuatan landing page dengan strategi konversi tinggi</span>
                                        </li>
                                        <li className='flex gap-2 justify-center items-center'>
                                            <CheckCircleFill className="text-green-500 w-1/12" />
                                            <span className='w-11/12'>Konsultasi SEO lanjutan + analisis kompetitor mendalam</span>
                                        </li>
                                        <li className='flex gap-2 justify-center items-center'>
                                            <CheckCircleFill className="text-green-500 w-1/12" />
                                            <span className='w-11/12'>Implementasi SEO teknis untuk peningkatan peringkat signifikan</span>
                                        </li>
                                        <li className='flex gap-2 justify-center items-center'>
                                            <CheckCircleFill className="text-green-500 w-1/12" />
                                            <span className='w-11/12'>Integrasi formulir lanjutan dan pelacakan data pengguna</span>
                                        </li>
                                        <li className='flex gap-2 justify-center items-center'>
                                            <CheckCircleFill className="text-green-500 w-1/12" />
                                            <span className='w-11/12'>Fitur keamanan tambahan untuk melindungi website dari ancaman</span>
                                        </li>
                                        <li className='flex gap-2 justify-center items-center'>
                                            <CheckCircleFill className="text-green-500 w-1/12" />
                                            <span className='w-11/12'>Dukungan teknis, maintenance, dan update selama 3 bulan</span>
                                        </li>
                                    </ul>
                                    <p className="text-xs text-gray-500 mt-4">Cocok untuk: Bisnis yang ingin skalabilitas lebih tinggi, website lama yang ingin upgrade ke teknologi modern.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </motion.section>

                <motion.section

                    ref={ref3}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 50 }}
                    transition={{ duration: 0.5 }}
                >

                    <section className="md:p-16 px-4 py-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Testimoni
                        </h2>
                        <p className="mb-8 text-gray-600">
                            Lihat testimoni lebih lengkap di {" "}
                            <a
                                href="https://www.fiverr.com/muhzulzidan?public_mode=true"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 underline font-semibold"
                            >
                                Fiverr
                            </a>
                            {" "}atau{" "}
                            <a
                                href="https://www.google.com/search?q=jasa+pembuatan+website+bone&sca_esv=e4a858093e482516&sxsrf=AHTn8zpP8NqDAgJHkUeOWA9jywHjojQ-nQ%3A1745759801493&ei=OS4OaIblHdahg8UPo-muiQE&ved=0ahUKEwjG5dKGpviMAxXW0KACHaO0KxEQ4dUDCBE&uact=5&oq=jasa+pembuatan+website+bone&gs_lp=Egxnd3Mtd2l6LXNlcnAiG2phc2EgcGVtYnVhdGFuIHdlYnNpdGUgYm9uZTIFECEYoAEyBRAhGKABSP4eULcHWOgdcAN4AZABAZgB8wGgAekQqgEGMS4xMS4yuAEDyAEA-AEBmAIQoAKsD8ICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgILEAAYgAQYkQIYigXCAggQABiABBixA8ICDhAuGIAEGLEDGIMBGIoFwgILEC4YgAQYsQMYgwHCAg4QLhiABBixAxjRAxjHAcICBRAAGIAEwgIOEAAYgAQYsQMYgwEYigXCAgoQABiABBhDGIoFwgILEAAYgAQYsQMYgwHCAg0QLhiABBixAxhDGIoFwgITEC4YgAQYsQMY0QMYQxjHARiKBcICEBAuGIAEGNEDGEMYxwEYigXCAgoQLhiABBhDGIoFwgIQEC4YgAQYQxjHARiKBRivAcICHBAuGIAEGLEDGEMYigUYlwUY3AQY3gQY3wTYAQHCAgsQLhiABBjHARivAcICBhAAGBYYHsICCBAAGIAEGKIEwgIHECEYoAEYCpgDAIgGAZAGCroGBggBEAEYFJIHBjQuMTEuMaAH3X6yBwYxLjExLjG4B6EP&sclient=gws-wiz-serp#mpd=~10332837043445202168/customers/reviews"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 underline font-semibold"
                            >
                                Google Review
                            </a>
                        </p>
                        <div className="grid grid-cols-1  gap-4">
                            {[Testimoni1, Testimoni2, Testimoni3, Testimoni4, Testimoni5, Testimoni6, Testimoni7, Testimoni8, Testimoni9].map((img, i) => (
                                <div
                                    key={i}
                                    className="rounded-xl overflow-hidden shadow border bg-white flex items-center justify-center aspect-square p-2 h-[20rem] w-full"
                                >
                                    <img
                                        src={img}
                                        alt={`Testimoni ${i + 1}`}
                                        className="object-contain w-full h-auto"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                </motion.section>

                <motion.section

                    ref={ref4}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: inView4 ? 1 : 0, y: inView4 ? 0 : 50 }}
                    transition={{ duration: 0.5 }}
                >
                    <section className="md:p-16 px-4 py-16 bg-white">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">
                            FAQ
                        </h2>




                        <div className="space-y-6">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    className="border rounded-lg p-4 cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105"
                                    onClick={() => toggle(index)}
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-medium text-lg">{faq.question}</h3>
                                        {active === index ? <ChevronUp /> : <ChevronDown />}
                                    </div>
                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${active === index ? 'max-h-full' : 'max-h-0'}`}>
                                        <p className={`text-sm mt-2 transition-opacity duration-500 ease-in-out ${active === index ? 'opacity-100' : 'opacity-0'}`}>{faq.answer}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </motion.section>

                <motion.section

                    ref={ref5}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: inView5 ? 1 : 0, y: inView5 ? 0 : 50 }}
                    transition={{ duration: 0.5 }}
                >
                    <section className="md:p-16 px-4 py-12 md:mt-4 my-12 bg-indigo-600 text-white">
                        <h2 className="text-4xl font-bold mb-8">
                            Mulai Proyek Anda Hari Ini
                        </h2>

                        <p className="mb-8">
                            Dapatkan Website yang Mengubah Cara Anda Berbisnis!
                        </p>

                        <a href={linkwa} className="px-8 py-3 w-fit bg-stone-50 text-indigo-600 font-bold rounded-lg cursor-pointer hover:bg-indigo-600 hover:text-white hover:border-white hover:border" >
                            Hubungi Kami
                        </a>
                    </section>
                </motion.section>

                <Footer />
            </div>
            {/* Add more sections for portfolio examples, customer understanding, etc. */}
        </div>
    );
};

export default LandingPage;

export const query = graphql`
  query WorksPageQuery {
    allContentfulZulzidanWorks {
      edges {
        node {
          description {
            description
          }
          date(formatString: "DD-MM-YYYY")
          client
          title
          slug
          images {
                gatsbyImageData(width: 2000) 
                title
            }
        }
      }
    }
  }
`;

export function Head({ location }) {
    return (
        <SEO title={"Bangun Toko Online Profesionalmu Bersama Kami!"} pathname={location.pathname} />
    )
}