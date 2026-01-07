"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"

import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function AboutPage() {

  const { t } = useTranslation()

    return(
        <section className="aboutpage">
            <Header></Header>
              <div className="destination">
                <Link className='destination-link' href={'/'} >{t("homepage")}</Link>
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
                <Link className='destination-link-located' href={'/contact'} >{t("dropdown-link-about")}</Link>
              </div>
              <main className="aboutmain">
                <div className="aboutinformation">
                  <div className="aboutinformation-card">
                    <h1>{t("dropdown-link-about")}</h1>
                    <p>
                      {t("aboutinformation-card1")}
                    </p>
                    <img src="/about1.png" alt="" />
                  </div>
                  <div className="aboutinformation-card">
                    <h1>{t("about-goal")}</h1> <br /> 
                    <div className="aboutinformation-card-desc">
                      <div className="card-desc-info">
                        <p>{t("about-goal-desc")}
                        </p>
                      </div>
                    </div>
                    <h1>{t("about-value")}</h1>
                    <div className="aboutinformation-card-desc">
                      <div className="card-desc-info">
                        <p> {t("value1")}</p> 
                        <p> {t("value2")}</p> 
                        <p> {t("value3")}</p> 
                        <p> {t("value4")}</p>
                      </div>
                    </div>
                  </div>
                  <div className="aboutinformation-card">
                    <h1>{t("main-directions")}:</h1>
                    <div className="directions"> 
                      <div className="direction">
                        <div className="direction-info">
                            <p><strong>{t("about-variation-1-title")}</strong></p>
                            <p>{t("about-variation-1")}</p>
                        </div>
                        <div className="direction-image">
                            <img src="/about1.jpg" alt="" />
                        </div>
                      </div>
                      <div className="direction">
                        <div className="direction-info">
                            <p><strong>{t("about-variation-2-title")}</strong></p>
                            <p>{t("about-variation-2")}</p>
                        </div>
                        <div className="direction-image">
                            <img src="/about2.jpg" alt="" />
                        </div>
                      </div>
                      <div className="direction">
                        <div className="direction-info">
                            <p><strong>{t("about-variation-3-title")}</strong></p>
                            <p>{t("about-variation-3")}</p>
                        </div>
                        <div className="direction-image">
                            <img src="/about3.jpg" alt="" />
                        </div>
                      </div>
                      <div className="direction">
                        <div className="direction-info">
                            <p><strong>{t("about-variation-4-title")}</strong></p>
                            <p>{t("about-variation-4")}</p>
                        </div>
                        <div className="direction-image">
                          <img src="/about4.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="aboutinformation-card">
                    <h1>{t("aboutinformation-card3-title")}:</h1>
                    <div className="aboutinformation-card-desc">
                        <div className="card-desc-info">
                          <p>{t("foundation")}: 2023 <br />
                            {t("sta")}: <br />
                            {t("andijan")} <br />
                            {t("tashkent")} <br />
                            {t("warehouse")}: <br />
                            {t("andijan-warehouse")} <br />
                            {t("tashkemt-warehosue")} <br />
                            {t("software")}: PVSOL, PVsyst, DIgSILENT, AutoCAD, WindPRO, PLEXOS, Meteodyn <br />
                            <strong>{t("partner")}</strong>: <br />
                            <strong>{t("kor")}</strong>: <br />
                            <strong>1.</strong> UEnergy <br />
                            <strong>2.</strong> JEA Limited LLC <br />
                            <strong>{t("loc")}</strong>: <br />
                            <strong>1.</strong> Green Turan United <br />
                            <strong>2.</strong> Power Sun <br />
                            <strong>3.</strong> Baihai Solar <br />
                            <strong>4.</strong> Get Green Energy <br />
                            <strong>5.</strong> Arif Solar <br />
                            <strong>{t("uni")}</strong> <br />
                            {t("univer")}
                          </p>
                        </div>
                    </div>
                  </div>
                  <div className="aboutinformation-card">
                    <div className="licenses">
                      <h1>{t("certificate")}</h1> <br />
                      <p>{t("certificares-info")}</p>
                      <div className="licenses-photo">
                        <img src="/license1.jpg" alt="" />
                        <img src="/license3.jpg" alt="" />
                        <img src="/liecense2.jpg" alt="" />
                        <img src="/license4.jpg" alt="" />
                        <img src="/license5.jpg" alt="" />
                        <img src="/license6.jpg" alt="" />
                        <img src="/license7.jpg" alt="" />
                        <img src="/license8.jpg" alt="" />
                        <img src="/license9.jpg" alt="" />
                        <img src="/license10.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </main>
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
    )
}