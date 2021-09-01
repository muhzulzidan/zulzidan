import React from 'react'
import { useMediaQuery } from "react-responsive"
import Layout from '../components/layout'
import MailTo from '../components/MailTo'

import FB from "../svg/facebook.svg"
import Twitter from "../svg/twitter.svg"
import IG from "../svg/instagram.svg"


const ContactsPages = (location) => {
    const isTable = useMediaQuery({ query: '(min-width: 767px)' })
    return (
        <Layout location={location}>
            <div className="ContactsPages">
                <title>Contacts | zulzidan</title>
                <h1 style={{display:"none"}} >Contacts</h1>
                <h2>Let us Collaborate</h2>

                {!isTable ? (<MailTo email="mail@muhzulzidan.my.id" subject="Hello, I Want to Collaborate" body="Hello, i am" ><p>zulzdn@gmail.com</p></MailTo>) : (<a href="https://mail.google.com/mail/u/0/?fs=1&to=mail@muhzulzidan.my.id&su=Hello,+I+Want+to+Collaborate&body&bcc=%22&tf=cm"><p>zulzdn@gmail.com</p></a> )}
                
                <div className="findMe">
                    <h2>Find me on :</h2>
                    <div className="iconContainer">
                        <IG />
                        <FB />
                        <Twitter />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ContactsPages
