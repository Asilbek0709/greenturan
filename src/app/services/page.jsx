"use client"


import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from 'next/link';
import "../globals.css"
import { useTranslation } from "react-i18next";

export default function Services() {

  const { t } = useTranslation()

  return (
    <section className="servicespage">
      <Header></Header>        
      
      <div className="servicepage-content">
        <main>
            <h1 style={{fontSize: '54px'}}>{t("dropdown-link-services")}</h1>
            <div className="services-container">
              <div className="services-card">
                <div className="services-information">
                  <div className="service-tittle">
                    <h1>1. {t("service-title1")}:</h1>
                  </div>
                  <div className="service-desc">
                    <p style={{fontSize: "20px"}}>· {t("service1-desc1")} <br /> · {t("service1-desc2")} <br /> · {t("service1-desc3")}<br /> · {t("service1-desc4")}<br /> · {t("service1-desc5")}</p>
                  </div>
                </div>
                <img src="/service1.jpg" alt="" />
              </div>
              <div className="services-card">
                <div className="services-information">
                  <div className="service-tittle">
                    <h1>2. {t("service-title2")}:</h1>
                  </div>
                  <div className="service-desc">
                    <p style={{fontSize: "20px"}}>· {t("service2-desc1")} <br />· {t("service2-desc2")} <br />· {t("service2-desc3")}</p>
                  </div>
                </div>
                <img src="/service2.jpg" alt="" />
              </div>
              <div className="services-card">
                <div className="services-information">
                  <div className="service-tittle">
                    <h1>3. {t("service-title3")}:</h1>
                  </div>
                  <div className="service-desc">
                    <p style={{fontSize: "20px"}}> · {t("service3-desc1")} <br /> · {t("service3-desc2")} <br /> · {t("service3-desc3")}</p>
                  </div>
                </div>
                <img src="/service3.jpg" alt="" />
              </div>
              <div className="services-card">
                <div className="services-information">
                  <div className="service-tittle">
                    <h1>4. {t("service-title4")}:</h1>
                  </div>
                  <div className="service-desc">
                    <p style={{fontSize: "20px"}}>· {t("service4-desc1")} <br />· {t("service4-desc2")} <br /> · {t("service4-desc3")}</p>
                  </div>
                </div>
                <img src="/service4.jpg" alt="" />
              </div>
            </div>
        </main>
      </div>
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
            <div className="marquee">
              <div className="marquee-bg-text">
                <span>{t("marquee-bg-text")}</span><span>{t("marquee-bg-text")}</span>
              </div>
              <div className="marquee-content">
                <div className="marquee-arrow-cont">
                  <svg className="marquee-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                    <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
      <Footer></Footer>
    </section>
  );
}