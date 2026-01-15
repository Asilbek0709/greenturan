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
              <div className="services-card">
                <div className="services-information">
                  <div className="service-tittle">
                    <h1>5. {t("about-variation-1-title")}:</h1>
                  </div>
                  <div className="service-desc">
                    <p style={{fontSize: "20px"}}>{t("about-variation-1")}</p>
                  </div>
                </div>
                <img src="/about1.jpg" alt="" />
              </div>
              <div className="services-card">
                <div className="services-information">
                  <div className="service-tittle">
                    <h1>6. {t("about-variation-2-title")}:</h1>
                  </div>
                  <div className="service-desc">
                    <p style={{fontSize: "20px"}}>· {t("about-variation-2")}</p>
                  </div>
                </div>
                <img src="/about2.jpg" alt="" />
              </div>
              <div className="services-card">
                <div className="services-information">
                  <div className="service-tittle">
                    <h1>7. {t("about-variation-3-title")}:</h1>
                  </div>
                  <div className="service-desc">
                    <p style={{fontSize: "20px"}}>{t("about-variation-3")}</p>
                  </div>
                </div>
                <img src="/about3.jpg" alt="" />
              </div>
              <div className="services-card">
                <div className="services-information">
                  <div className="service-tittle">
                    <h1>8. {t("about-variation-4-title")}:</h1>
                  </div>
                  <div className="service-desc">
                    <p style={{fontSize: "20px"}}>{t("about-variation-4")}</p>
                  </div>
                </div>
                <img src="/about4.jpg" alt="" />
              </div>
              <div className="services-card">
                <div className="services-information">
                  <div className="service-tittle">
                    <h1>9. {t("service-title5")}:</h1>
                  </div>
                  <div className="service-desc">
                    <p style={{fontSize: "20px"}}>{t("service-desc5")}</p>
                  </div>
                </div>
                <img src="/service5.jpg" alt="" />
              </div>
              <div className="services-card">
                <div className="services-information">
                  <div className="service-tittle">
                    <h1>10. {t("service-title6")}:</h1>
                  </div>
                  <div className="service-desc">
                    <p style={{fontSize: "20px"}}>{t("service-desc6")}</p>
                  </div>
                </div>
                <img src="/service6.jpg" alt="" />
              </div>
              <div className="services-card">
                <div className="services-information">
                  <div className="service-tittle">
                    <h1>11. {t("service-title7")}:</h1>
                  </div>
                  <div className="service-desc">
                    <p style={{fontSize: "20px"}}>{t("service-desc7")}</p>
                  </div>
                </div>
                <img src="/service7.jpg" alt="" />
              </div>
              <div className="services-card">
                <div className="services-information">
                  <div className="service-tittle">
                    <h1>12. {t("service-title8")}:</h1>
                  </div>
                  <div className="service-desc">
                    <p style={{fontSize: "20px"}}>{t("service-desc8")}</p>
                  </div>
                </div>
                <img src="/service8.jpg" alt="" />
              </div>
              <div className="services-card">
                <div className="services-information">
                  <div className="service-tittle">
                    <h1>13. {t("service-title9")}:</h1>
                  </div>
                  <div className="service-desc">
                    <p style={{fontSize: "20px"}}>{t("service-desc9")}</p>
                  </div>
                </div>
                <img src="/service9.jpg" alt="" />
              </div>
              <div className="services-card">
                <div className="services-information">
                  <div className="service-tittle">
                    <h1>14. {t("service-title10")}:</h1>
                  </div>
                  <div className="service-desc">
                    <p style={{fontSize: "20px"}}>{t("service-desc10")}</p>
                  </div>
                </div>
                <img src="/service10.jpg" alt="" />
              </div>
              <div className="services-card">
                <div className="services-information">
                  <div className="service-tittle">
                    <h1>15. {t("service-title11")}:</h1>
                  </div>
                  <div className="service-desc">
                    <p style={{fontSize: "20px"}}>{t("service-desc11")}</p>
                  </div>
                </div>
                <img src="/service11.jpg" alt="" />
              </div>
              <div className="services-card">
                <div className="services-information">
                  <div className="service-tittle">
                    <h1>16. {t("service-title12")}:</h1>
                  </div>
                  <div className="service-desc">
                    <p style={{fontSize: "20px"}}>{t("service-desc12")}</p>
                  </div>
                </div>
                <img src="/service12.jpg" alt="" />
              </div>
              <div className="services-card">
                <div className="services-information">
                  <div className="service-tittle">
                    <h1>17. {t("service-title13")}:</h1>
                  </div>
                  <div className="service-desc">
                    <p style={{fontSize: "20px"}}>{t("service-desc13")}</p>
                  </div>
                </div>
                <img src="/service13.jpg" alt="" />
              </div>
              <div className="services-card">
                <div className="services-information">
                  <div className="service-tittle">
                    <h1>18. {t("service-title14")}:</h1>
                  </div>
                  <div className="service-desc">
                    <p style={{fontSize: "20px"}}>{t("service-desc14")}</p>
                  </div>
                </div>
                <img src="/service14.jpg" alt="" />
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
        <Link href={"/contact"}>
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
            </Link>
      <Footer></Footer>
    </section>
  );
}