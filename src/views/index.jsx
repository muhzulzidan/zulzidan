import React, { Suspense } from "react"
// import { useMediaQuery } from "react-responsive";
import { Link, graphql } from "@/lib/gatsby-compat";
import { GatsbyImage, getImage,  } from "@/components/legacy-image"
import { Calendar, Person } from "react-bootstrap-icons"


import generateExcerpt from '../utils/generateExcerpt';
// import ContentfulImage from "../components/ContentfulImage"
import { SEO } from "../components/seo";
import Layout from "../components/layout";

const HomeSection = React.lazy(() => import('../components/home/HomeSection'));
const WorksSection = React.lazy(() => import('../components/home/WorksSection'));
const DigitalMarketingSection = React.lazy(() => import('../components/home/DigitalMarketingSection'));
const BlogsSection = React.lazy(() => import('../components/home/BlogsSection'));


const IndexPage = ({ data, location }) => {
  const { nodes: blogPosts } = data.allContentfulBlog;
  const works = data.allContentfulZulzidanWorks.edges.slice(0, 4);

  const newestPosts = blogPosts.slice(0, 3); 
  
  return (
    <Layout location={location}>
      <main className="px-3 lg:px-10 py-12 space-y-16  ">
        <section className="home flex flex-col gap-4 lg:gap-8">
          <h1 className="text-3xl lg:text-5xl w-10/12">
            <span className="font-bold font-heading ">
              Hi 👋, i am Zulzidan 
            </span>
            <br />
            Web developer & Digital Marketer
          </h1>
          <p className="text-lg lg:text-3xl w-10/12 lg:w-9/12">
            Empowering businesses to thrive in the digital landscape through
            innovative web development and strategic digital marketing.
          </p>

          <div className="py-4 lg:pt-10">
            <a
              href="https://api.whatsapp.com/send?phone=6281354789375&text=halo%20zulzidan.com%2C%20saya%20mau%20buat%20website"
              className="border border-solid border-gray-950 font-medium font-heading rounded-full px-6 py-3 my-4 text-lg hover:bg-indigo-900 hover:border-none hover:text-white cursor-pointer"
            >
              Chat on Whatsapp
            </a>
          </div>
        </section>
        {/* works */}
        <Suspense fallback={<div className="h-[1690px]">Loading...</div>}>
          <WorksSection works={works} />
        </Suspense>
        <Suspense fallback={<div className="h-[750px]">Loading...</div>}>
          <DigitalMarketingSection />
        </Suspense>
        {/* blogs */}
        <Suspense fallback={<div className="h-[1270px]">Loading...</div>}>
          <BlogsSection newestPosts={newestPosts} />
        </Suspense>

        {/* Services & Pricing Section */}
        <section className="py-16 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4">
              Layanan Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan berbagai layanan pembuatan website dan digital marketing 
              dengan harga transparan dalam mata uang Indonesia (IDR)
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Landing Page */}
            <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">Paket Basic</h3>
                <p className="text-sm text-gray-600 mb-2">Landing Page</p>
                <div className="text-3xl font-bold text-indigo-600 mb-1">
                  <span className="text-lg">Mulai dari</span><br />
                  Rp 2.500.000
                </div>
                <p className="text-sm text-gray-500">IDR (Indonesian Rupiah)</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>1 halaman landing page</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>1 formulir kontak/pendaftaran</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>1 ronde revisi mayor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Desain mobile-friendly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>ETA: 5–7 hari kerja</span>
                </li>
              </ul>
              <Link
                to="/jasa-pembuatan-website"
                className="block text-center border border-indigo-600 text-indigo-600 rounded-full px-4 py-2 font-medium hover:bg-indigo-600 hover:text-white transition-colors"
              >
                Lihat Detail
              </Link>
            </div>

            {/* Company Profile */}
            <div className="border-2 border-indigo-600 rounded-2xl p-6 bg-white shadow-lg relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                Terpopuler
              </div>
              <div className="mb-4 mt-2">
                <h3 className="text-xl font-bold mb-2">Paket Standard</h3>
                <p className="text-sm text-gray-600 mb-2">Company Profile</p>
                <div className="text-3xl font-bold text-indigo-600 mb-1">
                  <span className="text-lg">Mulai dari</span><br />
                  Rp 5.000.000
                </div>
                <p className="text-sm text-gray-500">IDR (Indonesian Rupiah)</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Hingga 5 halaman profesional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Desain custom & SEO dasar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Form kontak/daftar & galeri</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>2 ronde revisi mayor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>ETA: 10–14 hari kerja</span>
                </li>
              </ul>
              <Link
                to="/jasa-pembuatan-website"
                className="block text-center bg-indigo-600 text-white rounded-full px-4 py-2 font-medium hover:bg-indigo-700 transition-colors"
              >
                Lihat Detail
              </Link>
            </div>

            {/* Premium Package */}
            <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">Paket Premium</h3>
                <p className="text-sm text-gray-600 mb-2">Transform & Scale</p>
                <div className="text-3xl font-bold text-indigo-600 mb-1">
                  <span className="text-lg">Mulai dari</span><br />
                  Rp 12.000.000
                </div>
                <p className="text-sm text-gray-500">IDR (Indonesian Rupiah)</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Migrasi WP → Next.js</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>SEO teknis + schema + Core Web Vitals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Analytics & hardening keamanan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>3 bulan maintenance included</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>ETA: 3–4 minggu</span>
                </li>
              </ul>
              <Link
                to="/jasa-pembuatan-website"
                className="block text-center border border-indigo-600 text-indigo-600 rounded-full px-4 py-2 font-medium hover:bg-indigo-600 hover:text-white transition-colors"
              >
                Lihat Detail
              </Link>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              Semua harga dalam IDR (Rupiah Indonesia) sesuai regulasi Bank Indonesia. 
              <br />
              Lihat juga{' '}
              <Link to="/refund-policy" className="text-indigo-600 underline font-semibold">
                Kebijakan Pengembalian Dana
              </Link>
              {' '}untuk perlindungan transaksi Anda.
            </p>
          </div>
        </section>
       
        <section className="py-24 pt-32 flex flex-col md:flex-row gap-8 items-start font-heading font-medium leading-relaxed text-2xl">
          <div className="font-normal hidden md:block w-6/12 text-lg">(002)</div>
          <div className="flex flex-col gap-8 w-full justify-center  items-center md:pr-24">
            <p className="">
              <p className="font-medium font-heading md:hidden">(002)</p>
              Ready to elevate your digital presence and drive business growth?
            </p>
            <p> Let’s start the conversation about your web development and digital marketing needs.
              <div className="pt-12">
                <a
                  href="https://api.whatsapp.com/send?phone=6281354789375&text=halo%20zulzidan.com%2C%20saya%20mau%20buat%20website"
                  className="border border-solid border-gray-950 rounded-full px-6 text-lg py-3 my-4 hover:bg-indigo-900 hover:border-none hover:text-white cursor-pointer"
                >
                  Chat on Whatsapp
                </a>
              </div>
            </p>

          </div>
        </section>

      </main>
    </Layout>
  );
};

export const query = graphql`
  query IndexPageQuery {
    allContentfulBlog(sort: { createdAt: DESC }) {
      nodes {
        slug
        title
        date(formatString: "DD-MM-YYYY")
        content{
          raw
        }
        featuredMedia {
          gatsbyImageData(
            width: 200
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
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
              gatsbyImageData(
                width: 2000
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
              title
          }
        }
      }
    }
  }
`;

export default IndexPage;

export function Head({ location }) {
  return (
    <SEO
      title={"zulzidan, jasa pembuatan web"}
      pathname={location.pathname}
      description={
        " beberapa hal yang menggambarkan zulzidan adalah pembuatan web, jasa pembuatan web di Bone, seorang Digital Marketer serta seorang Web Developer, semoga kita bisa membuat sesuatu yang luar biasa bersama."
      }
    />
  );
}
