// import React, { useState } from 'react';
// import { graphql, Link } from 'gatsby';
// import Header from '../components/header';
// import { SEO } from '../components/seo';
// import Footer from '../components/footer';

// import { useInView } from 'react-intersection-observer';

// import { Whatsapp, LightningFill, Search, PeopleFill, GearFill, FilesAlt, Phone, Envelope, Palette, Calendar2, FileEarmarkText, Tablet, Calendar2Check, ImageFill, EnvelopeFill, StarFill } from 'react-bootstrap-icons';
// import { motion } from 'framer-motion';

// import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faWordpress, } from '@fortawesome/free-brands-svg-icons'
// import { faFileCode, faChartLine, faSearch, faClipboardList, faShieldAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

// import { BsChevronDown, BsChevronUp } from 'react-icons/bs';


// const LandingPage = ({ data }) => {
//     const works = data.allContentfulZulzidanWorks.edges;
//     const [active, setActive] = useState(null);
//     const linkwa = "https://api.whatsapp.com/send?phone=6281354789375&text=halo%20zulzidan.com%2C%20saya%20mau%20jasa%20pembuatan%20website"
//     const toggle = index => {
//         if (active === index) {
//             return setActive(null);
//         }
//         setActive(index);
//     }
//     // make ref and inView for each section
//     const [ref2, inView2] = useInView({
//         triggerOnce: true,
//         threshold: 0.1,
//     });

//     const [ref3, inView3] = useInView({
//         triggerOnce: true,
//         threshold: 0.1,
//     });

//     const [ref4, inView4] = useInView({
//         triggerOnce: true,
//         threshold: 0.1,
//     });

//     const [ref5, inView5] = useInView({
//         triggerOnce: true,
//         threshold: 0.1,
//     });

//     const [ref6, inView6] = useInView({
//         triggerOnce: true,
//         threshold: 0.1,
//     });


//     const [ref, inView] = useInView({ 
//         triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes into view
//         threshold: 0.1, // Percentage of the element that is in view before the callback triggers
//     });
//     const [ref1, inView1] = useInView({
//         triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes into view
//         threshold: 0.1, // Percentage of the element that is in view before the callback triggers
//     });


//     const faqs = [
//         {
//             "question": "Apa keuntungan menggunakan Next.js untuk pembuatan website?",
//             "answer": "Next.js memberikan performa optimal, kemudahan pengembangan, dan SEO-friendly. Dengan teknologi terkini ini, website Anda akan responsif, cepat, dan mudah diakses oleh mesin pencari."
//         },
//         {
//             "question": "Berapa lama waktu yang dibutuhkan untuk pembuatan website menggunakan Next.js?",
//             "answer": "Waktu pembuatan website dapat bervariasi tergantung pada kompleksitas proyek. Namun, kami berkomitmen untuk memberikan hasil yang berkualitas sesuai dengan tenggat waktu yang disepakati bersama."
//         },
//         {
//             "question": "Apakah saya bisa meminta fitur khusus di website saya?",
//             "answer": "Tentu, kami menyediakan layanan konsultasi untuk mendengarkan kebutuhan Anda. Jika Anda memiliki fitur khusus yang diinginkan, kami akan berusaha memasukkannya ke dalam proyek."
//         },
//         {
//             "question": "Bagaimana dengan dukungan teknis setelah website selesai dibuat?",
//             "answer": "Setelah website selesai, kami menyediakan dukungan teknis. Paket layanan kami mencakup periode dukungan tertentu, dan Anda dapat memilih untuk memperpanjangnya sesuai kebutuhan."
//         },
//         {
//             "question": "Apakah saya bisa melihat portofolio proyek Next.js sebelumnya?",
//             "answer": "Tentu, Anda dapat melihat beberapa proyek Next.js yang telah kami kerjakan di bagian portofolio di situs web kami."
//         },
//     ];

//     return (
//         <div className="bg-stone-50 ">

//             <div className='max-w-screen-xl mx-auto'>
//                 <Header landingPage={true} />
//                 <header className="md:p-8 px-4 md:pt-4 py-12 text-start md:py-32 flex flex-col md:flex-row items-center md:gap-8 bg-stone-50">
//                     <motion.div
//                         initial={{ opacity: 0, y: -50 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}
//                         className="flex-1"
//                     >
//                         <h1 className="text-4xl md:my-6 mb-6 font-bold text-gray-900">
//                             Transformasi Digital Bisnis Anda Sekarang - Dengan Solusi Web Cepat & SEO Friendly
//                         </h1>
//                         <p className="text-xl text-gray-700 mb-6">
//                             Diperkuat oleh Next.js, Node.js, dan React.js, kami menjamin kecepatan, keamanan, dan visibilitas maksimal untuk website Anda.
//                         </p>
//                         <a href={linkwa} className="bg-indigo-600 hover:bg-indigo-500 text-stone-50 px-6 py-3 w-fit cursor-pointer rounded-full flex items-center font-bold">
//                             <Whatsapp className="mr-2" />
//                             Konsultasikan Sekarang
//                         </a>
//                         <p className="text-gray-600 text-sm mt-4">Hubungi kami melalui WhatsApp untuk konsultasi gratis</p>
//                     </motion.div>
//                     <StaticImage
//                         src="https://images.unsplash.com/photo-1558174685-430919a96c8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2Vic2l0ZXx8fHx8fDE3MDkxMTcwNTM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
//                         alt="Hero Image"
//                         className="w-full md:w-1/2 my-4 md:my-0 md:mx-auto md:mb-4 rounded-2xl shadow-lg"
//                     />
//                 </header>

//                 <motion.section

//                     ref={ref}
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     <section className="md:p-8  px-4 py-16 ">
//                         <h2 className="text-2xl font-bold text-gray-800 mb-4">
//                             Kenapa Memilih Kami?
//                         </h2>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <div className="flex items-center bg-stone-50 rounded-lg p-4">
//                                 <LightningFill className="w-40 h-auto md:w-16 md:h-16 text-indigo-700 mr-4" alt="Performa Optimal Icon" />
//                                 <div>
//                                     <h3 className="text-lg font-bold text-gray-800">Performa Optimal</h3>
//                                     <p className="text-gray-600 text-sm">Website kita dirancang untuk berjalan cepat dan lancar. Dengan Next.js, pengguna akan mengalami website yang responsif tanpa harus menunggu lama.</p>
//                                 </div>
//                             </div>

//                             <div className="flex items-center bg-stone-50 rounded-lg p-4">
//                                 <Search className="w-40 h-auto md:w-16 md:h-16 text-indigo-700 mr-4" src="/path-to-your-icon" alt="SEO-Friendly Icon" />
//                                 <div>
//                                     <h3 className="text-lg font-bold text-gray-800">SEO-Friendly</h3>
//                                     <p className="text-gray-600 text-sm">Website kita dibuat agar mudah ditemukan di mesin pencari seperti Google. Dengan Next.js, kita membantu website Anda tampil di halaman atas hasil pencarian.</p>
//                                 </div>
//                             </div>

//                             <div className="flex items-center bg-stone-50 rounded-lg p-4">
//                                 <PeopleFill className="w-40 h-auto md:w-16 md:h-16 text-indigo-700 mr-4" src="/path-to-your-icon" alt="Pengalaman Pengguna Unggul Icon" />
//                                 <div>
//                                     <h3 className="text-lg font-bold text-gray-800">Pengalaman Pengguna Unggul</h3>
//                                     <p className="text-gray-600 text-sm">Kami ingin pengunjung merasa nyaman dan senang menggunakan website Anda. Dengan Next.js, kami menciptakan tampilan yang menarik dan mudah digunakan.</p>
//                                 </div>
//                             </div>

//                             <div className="flex items-center bg-stone-50 rounded-lg p-4">
//                                 <GearFill className="w-40 h-auto md:w-16 md:h-16 text-indigo-700 mr-4" src="/path-to-your-icon" alt="Kemudahan Pengembangan Icon" />
//                                 <div>
//                                     <h3 className="text-lg font-bold text-gray-800">Kemudahan Pengembangan</h3>
//                                     <p className="text-gray-600 text-sm">Proses pengembangan website dapat dilakukan dengan mudah dan tanpa banyak kerumitan. Next.js membantu kita membuat website dengan cepat dan efisien.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                 </motion.section>

//                 <motion.section

//                     ref={ref6}
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{ opacity: inView6 ? 1 : 0, y: inView6 ? 0 : 50 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     <section className="md:p-16 py-16 px-4 bg-stone-50">
//                         <h2 className="text-4xl font-bold text-gray-900 mb-8">
//                             Portofolio
//                         </h2>


//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                             {works.map(({ node }) => (
//                                 <div
//                                     key={node.slug}
//                                     className="bg-stone-50 rounded-lg p-8 shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
//                                 >
//                                     <GatsbyImage
//                                         image={getImage(node.images[0])}
//                                         alt={node.title}
//                                         className="w-full h-40 mb-4 rounded-lg"
//                                     />
//                                     <h4 className="text-2xl font-semibold text-gray-800 mb-2">{node.title}</h4>
//                                     <p className={`text-gray-700 mb-4 line-clamp-2 md:line-clamp-3`}>
//                                         {node.description.description}
//                                     </p>
//                                     <a
//                                         href={`https://zulzidan.com/works/${node.slug}`}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="inline-block mt-2 px-6 py-3 bg-indigo-500 text-stone-50 font-bold rounded-full hover:bg-indigo-600 transition duration-300"
//                                     >
//                                         View Project
//                                     </a>
//                                 </div>
//                             ))}
//                         </div>

//                     </section>
//                 </motion.section>

//                 <motion.section

//                     ref={ref1}
//                     initial={{ opacity: 0, y: 50 }} // start 50px below the final position
//                     animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }} // move to the final position when in view
//                     transition={{ duration: 0.5 }}
//                 >
//                     <section className="md:p-16 px-4  py-12">
//                         <h2 className="text-4xl font-bold text-gray-900 mb-8">
//                             Proses Kerja
//                         </h2>

//                         <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
//                             <li className="flex items-center text-indigo-600 dark:text-indigo-500 space-x-2.5 rtl:space-x-reverse">
//                                 <span className="flex items-center justify-center w-8 h-8 border border-indigo-600 rounded-full shrink-0 dark:border-indigo-500">
//                                     1
//                                 </span>
//                                 <span>
//                                     <h3 className="font-medium leading-tight text-xl md:text-base">Konsultasi</h3>
//                                     <p className="text-sm">Diskusikan kebutuhan dan tujuan Anda dengan tim kami.</p>
//                                 </span>
//                             </li>
//                             <li className="flex items-center text-stone-950 space-x-2.5 rtl:space-x-reverse">
//                                 <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
//                                     2
//                                 </span>
//                                 <span>
//                                     <h3 className="font-medium leading-tight text-xl md:text-base">Perencanaan</h3>
//                                     <p className="text-sm">Buat rencana strategis dan desain visual untuk website Anda.</p>
//                                 </span>
//                             </li>
//                             <li className="flex items-center text-stone-950 space-x-2.5 rtl:space-x-reverse">
//                                 <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
//                                     3
//                                 </span>
//                                 <span>
//                                     <h3 className="font-medium leading-tight text-xl md:text-base ">Pembuatan</h3>
//                                     <p className="text-sm">Tim kami akan membangun website Anda dengan menggunakan teknologi terkini.</p>
//                                 </span>
//                             </li>
//                         </ol>
//                     </section>
//                 </motion.section>

//                 <motion.section

//                     ref={ref2}
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     <section className="md:p-16 px-4 py-16 bg-stone-50">
//                         <h2 className="text-4xl font-bold text-gray-900 mb-8">
//                             Harga & Paket
//                         </h2>

//                         <div className="grid grid-cols-1  gap-8">
//                             {/* Replace with your actual service packages */}
//                             <div className="grid grid-cols-1  md:grid-cols-3  gap-4">
//                                 <div className=" flex flex-col gap-1 border rounded-lg p-8">
//                                     <h3 className="font-medium text-lg">Paket Basic</h3>
//                                     <p className="text-sm">Desain landing page sederhana dan responsif menggunakan Next.js.</p>
//                                     <p className="font-bold text-lg pt-2">Rp 1.500.000</p>
//                                     <ul className="list-none list-inside grid grid-cols-1 gap-2 py-4">
//                                         <li className="flex items-center">
//                                             <FilesAlt className="w-1/12 h-auto mr-4" />
//                                             <span className='w-full'>1 halaman landing page</span>
//                                         </li>
//                                         <li className="flex items-center">
//                                             <Phone className="w-1/12 h-auto mr-4" />
//                                             <span className='w-full' >Desain responsif untuk tampilan mobile dan desktop</span>
//                                         </li>
//                                         <li className="flex items-center">
//                                             <Envelope className="w-1/12 h-auto mr-4" />
//                                             <span className='w-full' >Integrasi sederhana dengan formulir kontak</span>
//                                         </li>
//                                         <li className="flex items-center">
//                                             <Palette className="w-1/12 h-auto mr-4" />
//                                             <span className='w-full' >Opsi penyesuaian warna dan font dasar</span>
//                                         </li>
//                                         <li className="flex items-center">
//                                             <Calendar2 className="w-1/12 h-auto mr-4" />
//                                             <span className='w-full' >Dukungan teknis selama 1 bulan</span>
//                                         </li>
//                                     </ul>
//                                 </div>

//                                 <div className="border border-indigo-700 rounded-lg -mt-10 p-8 flex flex-col gap-1 pt-16 relative">
//                                     <div className="absolute -top-0 -left-0  w-full bg-indigo-700 text-white px-8 py-2 rounded-t-lg">
//                                         <span className="text-sm font-bold">Best Seller</span>
//                                     </div>


//                                     <h3 className="font-medium text-lg">Paket Standard</h3>
//                                     <p className="text-sm">Pembuatan website company profile dengan integrasi Next.js dan optimisasi SEO dasar.</p>
//                                     <p className="font-bold text-lg pt-2">Rp 2.500.000</p>
//                                     <ul className="list-none list-inside grid grid-cols-1 gap-2 py-4">
//                                         <li className="flex items-center">
//                                             <FileEarmarkText className="w-1/12 h-auto mr-4" />
//                                             <span className='w-full'>5 halaman website company profile</span>
//                                         </li>
//                                         <li className="flex items-center">
//                                             <Tablet className="w-1/12 h-auto mr-4" />
//                                             <span className='w-full'>Desain responsif dan estetis</span>
//                                         </li>
//                                         <li className="flex items-center">
//                                             <Search className="w-1/12 h-auto mr-4" />
//                                             <span className='w-full'>Optimisasi dasar untuk mesin pencari (SEO)</span>
//                                         </li>
//                                         <li className="flex items-center">
//                                             <Envelope className="w-1/12 h-auto mr-4" />
//                                             <span className='w-full'>Formulir kontak dan formulir pendaftaran sederhana</span>
//                                         </li>
//                                         <li className="flex items-center">
//                                             <ImageFill className="w-1/12 h-auto mr-4" />
//                                             <span className='w-full'>Galeri foto atau portofolio produk</span>
//                                         </li>
//                                         <li className="flex items-center">
//                                             <Calendar2Check className="w-1/12 h-auto mr-4" />
//                                             <span className='w-full'>Dukungan teknis selama 2 bulan</span>
//                                         </li>
//                                     </ul>
//                                 </div>

//                                 <div className=" flex flex-col gap-1 border rounded-lg p-8">
//                                     <h3 className="font-medium text-lg">Paket Premium</h3>
//                                     <p className="text-sm">Migrasi dari WordPress ke Next.js, pembuatan landing page, dan konsultasi SEO mendalam.</p>
//                                     <p className="font-bold text-lg pt-2">Rp 4.500.000</p>


//                                     <ul className="list-none list-inside grid grid-cols-1 gap-2 py-2">
//                                         <ul className="list-none list-inside grid grid-cols-1 gap-2 py-4">
//                                             <li className="flex items-center">
//                                                 <FontAwesomeIcon icon={faWordpress} className="w-[6%] h-auto mr-4 " />
//                                                 <span className='w-full'>Migrasi dari WordPress ke Next.js</span>
//                                             </li>
//                                             <li className="flex items-center">
//                                                 <FontAwesomeIcon icon={faFileCode} className="w-[6%] h-auto mr-4" />
//                                                 <span className='w-full'>Pembuatan halaman landing page yang mengkonversi</span>
//                                             </li>
//                                             <li className="flex items-center">
//                                                 <FontAwesomeIcon icon={faChartLine} className="w-[6%] h-auto mr-4" />
//                                                 <span className='w-full'>Konsultasi SEO mendalam dan analisis kompetitor</span>
//                                             </li>
//                                             <li className="flex items-center">
//                                                 <FontAwesomeIcon icon={faSearch} className="w-[6%] h-auto mr-4" />
//                                                 <span className='w-full'>Optimisasi SEO lanjutan untuk meningkatkan peringkat pencarian</span>
//                                             </li>
//                                             <li className="flex items-center">
//                                                 <FontAwesomeIcon icon={faClipboardList} className="w-[6%] h-auto mr-4" />
//                                                 <span className='w-full'>Integrasi formulir yang lebih canggih dan analisis data pengguna</span>
//                                             </li>
//                                             <li className="flex items-center">
//                                                 <FontAwesomeIcon icon={faShieldAlt} className="w-[6%] h-auto mr-4" />
//                                                 <span className='w-full'>Fitur keamanan tambahan untuk melindungi website</span>
//                                             </li>
//                                             <li className="flex items-center">
//                                                 <FontAwesomeIcon icon={faCalendarAlt} className="w-[6%] h-auto mr-4" />
//                                                 <span className='w-full'>Dukungan teknis selama 3 bulan</span>
//                                             </li>
//                                         </ul>
//                                     </ul>
//                                 </div>
//                             </div>

//                         </div>
//                     </section>
//                 </motion.section>

//                 <motion.section

//                     ref={ref3}
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 50 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     <section className="md:p-16 px-4 py-16 ">
//                         <h2 className="text-4xl font-bold text-gray-900 mb-8">
//                             Testimoni
//                         </h2>

//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                             <div className="border rounded-lg p-8">
//                                 <p className="text-sm mb-4">"Pelayanan luar biasa! Saya sangat puas dengan hasil website yang dibuat, sangat responsif dan menarik. Terima kasih atas tim yang profesional!"</p>
//                                 <div className="flex items-center">
//                                     <StarFill className="text-yellow-500" />
//                                     <StarFill className="text-yellow-500" />
//                                     <StarFill className="text-yellow-500" />
//                                     <StarFill className="text-yellow-500" />
//                                     <StarFill className="text-yellow-500" />
//                                     <p className="ml-4 font-medium">- Dina, Pemilik Bisnis</p>
//                                 </div>
//                             </div>

//                             <div className="border rounded-lg p-8">
//                                 <p className="text-sm mb-4">"Sangat terkesan dengan kecepatan dan keahlian dalam membuat website. Proses migrasi dari WordPress ke Next.js sangat lancar. Terima kasih banyak!"</p>
//                                 <div className="flex items-center">
//                                     <StarFill className="text-yellow-500" />
//                                     <StarFill className="text-yellow-500" />
//                                     <StarFill className="text-yellow-500" />
//                                     <StarFill className="text-yellow-500" />
//                                     <StarFill className="text-yellow-500" />
//                                     <p className="ml-4 font-medium">- Rizky, Pebisnis Online</p>
//                                 </div>
//                             </div>

//                             <div className="border rounded-lg p-8">
//                                 <p className="text-sm mb-4">"Saya sangat senang dengan desain website company profile yang mereka buat. Tampilannya modern dan informatif. Layanan yang sangat direkomendasikan!"</p>
//                                 <div className="flex items-center">
//                                     <StarFill className="text-yellow-500" />
//                                     <StarFill className="text-yellow-500" />
//                                     <StarFill className="text-yellow-500" />
//                                     <StarFill className="text-yellow-500" />
//                                     <StarFill className="text-yellow-500" />
//                                     <p className="ml-4 font-medium">- Aditya, Pengusaha Muda</p>
//                                 </div>
//                             </div>
//                         </div>

//                     </section>
//                 </motion.section>

//                 <motion.section

//                     ref={ref4}
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{ opacity: inView4 ? 1 : 0, y: inView4 ? 0 : 50 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     <section className="md:p-16 px-4 py-16 bg-white">
//                         <h2 className="text-4xl font-bold text-gray-900 mb-8">
//                             FAQ
//                         </h2>




//                         <div className="space-y-6">
//                             {faqs.map((faq, index) => (
//                                 <motion.div
//                                     key={index}
//                                     className="border rounded-lg p-4 cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105"
//                                     onClick={() => toggle(index)}
//                                     initial={{ opacity: 0, y: -50 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                                 >
//                                     <div className="flex items-center justify-between">
//                                         <h3 className="font-medium text-lg">{faq.question}</h3>
//                                         {active === index ? <BsChevronUp /> : <BsChevronDown />}
//                                     </div>
//                                     <div className={`overflow-hidden transition-all duration-500 ease-in-out ${active === index ? 'max-h-full' : 'max-h-0'}`}>
//                                         <p className={`text-sm mt-2 transition-opacity duration-500 ease-in-out ${active === index ? 'opacity-100' : 'opacity-0'}`}>{faq.answer}</p>
//                                     </div>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </section>
//                 </motion.section>

//                 <motion.section

//                     ref={ref5}
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{ opacity: inView5 ? 1 : 0, y: inView5 ? 0 : 50 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     <section className="md:p-16 px-4 py-12 md:mt-4 my-12 bg-indigo-600 text-white">
//                         <h2 className="text-4xl font-bold mb-8">
//                             Mulai Proyek Anda Hari Ini
//                         </h2>

//                         <p className="mb-8">
//                             Dapatkan Website yang Mengubah Cara Anda Berbisnis!
//                         </p>

//                         <a href={linkwa} className="px-8 py-3 w-fit bg-stone-50 text-indigo-600 font-bold rounded-lg cursor-pointer hover:bg-indigo-600 hover:text-white hover:border-white hover:border" >
//                             Hubungi Kami
//                         </a>
//                     </section>
//                 </motion.section>

//                 <Footer />
//             </div>
//             {/* Add more sections for portfolio examples, customer understanding, etc. */}
//         </div>
//     );
// };

// export default LandingPage;

// export const query = graphql`
//   query WorksPageQuery {
//     allContentfulZulzidanWorks {
//       edges {
//         node {
//           description {
//             description
//           }
//           date(formatString: "DD-MM-YYYY")
//           client
//           title
//           slug
//           images {
//                 gatsbyImageData(width: 2000) 
//                 title
//             }
//         }
//       }
//     }
//   }
// `;

// export function Head({ location }) {
//     return (
//         <SEO title={"Bangun Toko Online Profesionalmu Bersama Kami!"} pathname={location.pathname} />
//     )
// }