"use client"

import './globals.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Link from 'next/link';

export default function Home() {


  return (
    <section className="homepage">
      <Header></Header>
        <Slider></Slider>
        <section className="about">
          <h1>About</h1>
          <div className="home-about-navigation">
              <Link className='home-hover-link' href={'/contact'}>About</Link>
              <Link className='home-hover-link' href={'/contact'}>Structure</Link>
              <Link className='home-hover-link' href={'/contact'}>Partners</Link>
              <Link className='home-hover-link-special' href={'/contact'}>Licenses and cerificates</Link>
            </div>
          <div className="home-about-variations">
            <Link className='home-service-link' href={'/services'}>
              <div className="service-card">
                  <div className="service-card-bg"></div>
                  <div className="overlay2">
                    <p>Services </p>
                  </div>
              </div>
            </Link>
            <div className="services-variation">
                  <Link href={"/services"} className="service"> 
                  CONSTRUCTION ACTIVITIES
                    <svg className="arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                      <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <div className="line2"></div>
                  <Link href={"/services"} className="service"> 
                  REAL ESTATE DEVELOPMENT
                    <svg className="arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                      <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <div className="line2"></div>
                  <Link href={"/services"} className="service"> 
                  CHIRCHIQ STRUCTURAL STEEL FACTORY
                    <svg className="arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                      <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <div className="line2"></div>
                  <Link href={"/services"} className="service"> 
                  METQ – ENERGY DEVELOPMENT
                    <svg className="arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                      <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <div className="line2"></div>
            </div>
          </div>
        </section>
        <section className="projects">
            <h1>Projects</h1>
            <div className="projects-container">
              <div className="projects-card">
                  <div className="project-preview">
                    <div className="project-photo-1"></div>
                    <div className="project-overlay">
                      Ongoing
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                      <h1>500/200/20 kV ARGHANDE NEW SUBSTATION PROJECT (200 km)</h1>
                    </div>
                    <div className="project-desc">
                      <p>Location: Kabul, Afghanistan   SCOPE OF WORK Procurement and Construction Supply of All...</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card">
                  <div className="project-preview">
                    <div className="project-photo-2"></div>
                    <div className="project-overlay">
                      Ongoing
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                        <h1>BUILDING OF THE MINISTRY OF HEALTH</h1>
                    </div>
                    <div className="project-desc">
                      <p> Location: Tashkent, Uzbekistan   SCOPE OF WORK Engineering Procurement Construction</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card">
                  <div className="project-preview">
                    <div className="project-photo-3"></div>
                    <div className="project-overlay">
                      Ongoing
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                      <h1>BUILDING OF THE MINISTRY OF ENERGY</h1>
                    </div>
                    <div className="project-desc">
                      <p>Location: Tashkent, Uzbekistan   SCOPE OF WORK Engineering Procurement Construction</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
              <div className="projects-card">
                  <div className="project-preview">
                    <div className="project-photo-4"></div>
                    <div className="project-overlay">
                      Ongoing
                    </div>
                  </div>
                  <div className="project-info">
                    <div className="project-tittle">
                      <h1>YANGI TOSHKENT LOT 33A-33B</h1>
                    </div>
                    <div className="project-desc">
                      <p>Location: Tashkent, Uzbekistan   SCOPE OF WORK Engineering Procurement Construction...</p>
                    </div>
                    <Link href={"/projects"} className="more-info"> 
                      Learn More
                      <svg className="info-arrow"width="18"height="18"viewBox="4 4 16 16" aria-hidden>
                        <path d="M4 12h16m0 0l-6-6m6 6l-6 6"stroke="currentColor"strokeWidth="1.5"fill="none"strokeLinecap="round"strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
              </div>
            </div>
            <Link className='home-hover-link' href={'/projects'}>All projects</Link>
        </section>
        <section className="feedback">
            <div className="feedback-info">
              <h1>Work with us</h1>
              <p>Join our innovative and collaborative team! We are always looking for talented individuals ready to make a difference. Upload resume and start your journey with us.</p>
              <Link href={'/contact'} className='cv-link'>UPLOAD YOUR RESUME</Link>
            </div>
            <div className="feedback-photo">
              <img src="/feedback.jpg" alt="" />
            </div>
        </section>
        <section className="news">
            <h1>News</h1>
            <div className="news-container">
              <div className="news-card">
                <img src="/avenue.jpg" alt="" className='news-card-img' />
                <div className="news-info">
                  <p>UET Construction presented the Crystal Avenue Project, a premium residential complex in New Tashkent</p>
                </div>
                <div className="news-date">
                  <p>03.12.2025</p>
                </div>
              </div>
              <div className="news-card">
                <img src="/award.jpg" alt="" className='news-card-img' />
                <div className="news-date">
                  <p>01.12.2025</p>
                </div>
              </div>
            </div>
            <Link className='home-hover-link' href={'/projects'}>See all</Link>
        </section>
            <div className="marquee">
              <div className="marquee-bg-text">
                <span>HAVE QUESTIONS?</span><span>HAVE QUESTIONS?</span>
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
