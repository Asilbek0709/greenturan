"use client"


import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Link from 'next/link';
import "./globals.css"
import { useTranslation } from 'react-i18next';

export default function Home() {

  const { t } = useTranslation();

  return (
    <section className="homepage">
      <Header></Header>
        <Slider></Slider>
        <section className="about">
          <h1>{t("dropdown-link-about")}</h1>
          <div className="home-about-navigation">
              <Link className='home-hover-link' href={'/about'}>{t("home-hover-link-about")}</Link>
              <Link className='home-hover-link' href={'/about'}>{t("home-hover-link-partners")}</Link>
              <Link className='home-hover-link-special' href={'/about'}>{t("home-hover-link-licenses")}</Link>
            </div>
        </section>
          <div className="home-about-variations">
            <Link className='home-service-link' href={'/services'}>
              <div className="service-card">
                  <div className="service-card-bg"></div>
                  <div className="overlay2">
                    <p>{t("service-card-bg-text")}</p>
                  </div>
              </div>
            </Link>
            <div className="services-variation">
                  <Link href={"/services"} className="service"> 
                  {t("service-variation1")}
                    <svg className="arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                      <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <div className="line2"></div>
                  <Link href={"/services"} className="service"> 
                  {t("service-variation2")}
                    <svg className="arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                      <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <div className="line2"></div>
                  <Link href={"/services"} className="service"> 
                  {t("service-variation3")}
                    <svg className="arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                      <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <div className="line2"></div>
                  <Link href={"/services"} className="service"> 
                  {t("service-variation4")}
                    <svg className="arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                      <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <div className="line2"></div>
            </div>
          </div>
        
        <section className="projects">
            <h1>{t("projects-section")}</h1>
            <div className="projects-container">
              <div className="projects-card">
                  <div className="project-preview">
                    <div className="project-photo-2"></div>
                    <div className="project-overlay">
                      {t("project-overlay-completed")}
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                        <h1>{t("project-title2")}</h1>
                    </div>
                    <div className="project-desc">
                      <p>{t("project-desc2")}</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      {t("learn-more")}
                      <svg className="info-arrow"width="12"height="12"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card">
                  <div className="project-preview">
                    <div className="project-photo-3"></div>
                    <div className="project-overlay">
                      {t("project-overlay-completed")}
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                      <h1>{t("project-title3")}</h1>
                    </div>
                    <div className="project-desc">
                      <p>{t("project-desc1")}</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      {t("learn-more")}
                      <svg className="info-arrow"width="12"height="12"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card">
                  <div className="project-preview">
                    <div className="project-photo-1"></div>
                    <div className="project-overlay">
                      {t("project-overlay-completed")}
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                      <h1>{t("project-title1")}</h1>
                    </div>
                    <div className="project-desc">
                      <p>{t("project-desc1")}</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      {t("learn-more")}
                      <svg className="info-arrow"width="12"height="12"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card">
                  <div className="project-preview">
                    <div className="project-photo-4"></div>
                    <div className="project-overlay">
                      {t("project-overlay-completed")}
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                      <h1>{t("project-title4")}</h1>
                    </div>
                    <div className="project-desc">
                      <p>{t("project-desc1")}</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      {t("learn-more")}
                      <svg className="info-arrow"width="12"height="12"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
            </div>
            <Link  className='home-hover-link' href={'/projects'}>{t("all-projects")}</Link>
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
