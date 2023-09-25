import React from 'react'
import { useMediaQuery } from "react-responsive"
import MailTo from '../components/MailTo'
import SosialMedia from '../components/sosialMedia'
import NewsletterForm from '../components/NewsletterForm'

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
      <footer className="flex flex-col items-center md:items-start py-12 font-heading font-medium gap-2 tracking-tight">
        {/* <div className="ContactsPages py-20">
          <h1 style={{ display: "none" }}>Contacts</h1>
          <h2>Let us Collaborate</h2>

          {!isTable ? (
            <MailTo
              email="mail@muhzulzidan.my.id"
              subject="Hello, I Want to Collaborate"
              body="Hello, i am"
            >
              <p>zulzdn@gmail.com</p>
            </MailTo>
          ) : (
            <a href="https://mail.google.com/mail/u/0/?fs=1&to=mail@muhzulzidan.my.id&su=Hello,+I+Want+to+Collaborate&body&bcc=%22&tf=cm">
              <p>zulzdn@gmail.com</p>
            </a>
          )}

          <div className="findMe">
            <h2>Find me on :</h2>
            <div className="iconContainer">
              <SosialMedia />
            </div>
          </div>
        </div>
        <>
          <NewsletterForm />
        </> */}
       <Link to='/'> <LogoFull className='w-auto h-16 mb-4 ml-4'/></Link>
        <section className='flex gap-4 items-center py-4'>
          <a href="">
            instagram
          </a>
          <a href="">
            Tiktok
          </a>
          <a href="">
            Youtube
          </a>
        </section>
        <section>
          <button onClick={scrollToTop} className='flex gap-1 tracking-tight items-center justify-center'>
            Back to the Top <ArrowUp/>
          </button>
        </section>
        <section>
          <h1 className='font-heading font-medium'>Copyright©Zulzidan</h1>
        </section>
      </footer>
    );
}

export default Footer
