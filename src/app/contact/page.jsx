"use client"


import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from 'next/link';
import "../globals.css"
import { useTranslation } from "react-i18next";


export default function Contact() {

  const { t } = useTranslation()

  return (
    <section className="contactpage">
      <Header></Header>
      <div className="destination" style={{width:"100%",}}>
          <Link className='destination-link' href={'/'} >Homepage</Link>
                      <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path 
              d="M6 3L11 8L6 13" 
              stroke="#828282" 
              strokeWidth="1.5"
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          <Link className='destination-link-located' href={'/contact'} >{t("dropdown-link-contact")}</Link>
      </div>
      <h1 style={{textAlign: "center", fontSize: "54px"}}>{t("dropdown-link-contact")}</h1>
      <section className="location">
        <div className="location-info">
          <div className="phone">
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 32 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M19.9238 5C21.62 5.45522 23.1666 6.34857 24.4084 7.59039C25.6502 8.83221 26.5436 10.3788 26.9988 12.075" 
                stroke="black" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M18.8887 8.8623C19.9088 9.13323 20.8392 9.66903 21.5856 10.4154C22.332 11.1617 22.8678 12.0921 23.1387 13.1123" 
                stroke="black" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M11.5625 15.6001C12.5915 17.7251 14.3098 19.439 16.4375 20.4626C16.5944 20.5369 16.768 20.5691 16.9412 20.5559C17.1143 20.5428 17.2811 20.4847 17.425 20.3876L20.55 18.3001C20.6881 18.2064 20.8476 18.1493 21.0137 18.134C21.1799 18.1187 21.3472 18.1457 21.5 18.2126L27.35 20.7251C27.5499 20.8083 27.717 20.9549 27.8254 21.1424C27.9338 21.3299 27.9776 21.5478 27.95 21.7626C27.7646 23.2098 27.0582 24.5398 25.9631 25.5038C24.8679 26.4678 23.459 26.9998 22 27.0001C17.4913 27.0001 13.1673 25.209 9.97919 22.0209C6.79107 18.8328 5 14.5088 5 10C5.00033 8.54104 5.53227 7.13214 6.49628 6.03698C7.4603 4.94183 8.79033 4.23546 10.2375 4.05004C10.4523 4.02245 10.6702 4.06623 10.8577 4.17465C11.0452 4.28307 11.1918 4.4501 11.275 4.65004L13.7875 10.5126C13.8528 10.663 13.8802 10.8272 13.8671 10.9907C13.854 11.1542 13.8009 11.3119 13.7125 11.4501L11.625 14.6251C11.5321 14.7687 11.4775 14.9337 11.4666 15.1044C11.4556 15.2751 11.4887 15.4458 11.5625 15.6001Z" 
                stroke="black" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <div className="phone-number">
              <p style={{color: "#5d5d5d"}}>{t("colored-phone")}</p>
              <p style={{fontWeight: "bold"}}>+998 77 443 00 33</p>
            </div>
          </div>
          <div className="email">
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 32 32" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M4 12V25C4 25.2652 4.10536 25.5196 4.29289 25.7071C4.48043 25.8946 4.73478 26 5 26H27C27.2652 26 27.5196 25.8946 27.7071 25.7071C27.8946 25.5196 28 25.2652 28 25V12L16 4L4 12Z" 
              stroke="black" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M13.8125 19L4.3125 25.7125" 
              stroke="black" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M27.6875 25.7125L18.1875 19" 
              stroke="black" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M28 12L18.1875 19H13.8125L4 12" 
              stroke="black" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
                      <div className="phone-number">
              <p style={{color: "#5d5d5d"}}>{t("colored-email")}</p>
              <p style={{fontWeight: "bold"}}>ienergy24h@gmail.com</p>
            </div>
          </div>
          <div className="adress">
            <svg 
              width="54" 
              height="64" 
              viewBox="0 0 32 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M16 17C18.2091 17 20 15.2091 20 13C20 10.7909 18.2091 9 16 9C13.7909 9 12 10.7909 12 13C12 15.2091 13.7909 17 16 17Z" 
                stroke="black" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M26 13C26 22 16 29 16 29C16 29 6 22 6 13C6 10.3478 7.05357 7.8043 8.92893 5.92893C10.8043 4.05357 13.3478 3 16 3C18.6522 3 21.1957 4.05357 23.0711 5.92893C24.9464 7.8043 26 10.3478 26 13Z" 
                stroke="black" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <div className="phone-number">
              <p style={{color: "#5d5d5d"}}>{t("colored-address")}</p>
              <p style={{fontWeight: "bold"}}>{t("address")}</p>
            </div>
          </div>
          <div className="hours">
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 32 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" 
                stroke="black" 
                strokeWidth="2" 
                strokeMiterlimit="10"
              />
              <path 
                d="M16 9V16H23" 
                stroke="black" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <div className="phone-number">
              <p style={{color: "#5d5d5d"}}>{t("working-hours-title")}</p>
              <p style={{fontWeight: "bold"}}>{t("working-hours")}</p>
            </div>
          </div>
        </div>      
        <iframe
          className='google-map'
          src=
          "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d377.75225364972243!2d72.35796137763643!3d40.76162819124783!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bcece90bd61d69%3A0x844968c0dcf151c7!2z0JDQs9GA0L7QsdCw0L3Qug!5e0!3m2!1sru!2s!4v1767096115077!5m2!1sru!2s"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
        <section className="feedback">
            <div className="feedback-info">
              <h1>{t("feedback-info-h1")}</h1>
              <p>{t("feedback-info-p")}</p>
              <Link href={'/contact'} className='cv-link'>{t("cv-link")}</Link>
            </div>
            <div className="feedback-photo">
              <img src="/feedback.jpg" alt="" />
            </div>
        </section>
      <Footer></Footer>
    </section>
  )
}