import React from 'react'
import { useMediaQuery } from "react-responsive"
// import MailTo from '../components/MailTo'
// import SosialMedia from '../components/sosialMedia'
// import NewsletterForm from '../components/NewsletterForm'

import { ArrowUp } from 'react-bootstrap-icons';

import { Link } from "gatsby"
import LogoFull from '../svg/logoFull.svg'
const Footer = () => {
  const isTable = useMediaQuery({ query: '(min-width: 767px)' })

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="flex flex-col items-center md:items-start py-12 font-heading font-medium tracking-tight px-4 lg:px-10">
      <section className='w-full gap-2 flex flex-col'>
        <Link to='/' className='flex justify-center items-center md:justify-start' aria-label='Home'>
          <LogoFull className='w-auto h-16 mb-4 ml-4 md:hidden' />
          <h2 className='text-5xl font-heading font-bold w-1/2 hidden md:block'>Muhammad Zulzidan M</h2>
        </Link>

        <section className='flex flex-col md:flex-row items-center justify-between w-full px-3 md:px-0'>
          <section className='flex gap-4 items-center py-4'>
            <a href="https://www.instagram.com/muhzulzidan/" className='hover:text-indigo-600'>
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/muhzulzidan/" className='hover:text-indigo-600'>
              Linkedin
            </a>
            <a href="https://www.youtube.com/@muhzulzidan5137" className='hover:text-indigo-600'>
              Youtube
            </a>
          </section>
          <section>
            <button onClick={scrollToTop} className='flex gap-1 tracking-tight items-center justify-center hover:text-indigo-600'>
              Back to the Top <ArrowUp />
            </button>
          </section>
          <section>
            <h1 className='font-heading font-medium '>Copyright©Zulzidan</h1>
          </section>
        </section>
      </section>
    </footer>

  );
}

export default Footer
