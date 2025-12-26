"use client"

import '../globals.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ArrowIcon from '@/assets/icons/arrow.svg'
import Link from 'next/link';

export default function News() {
  return (
    <section className="newspage">
      <Header></Header>
      <div className="destination">
          <Link className='destination-link' href={'/'} >Homepage</Link>
            <ArrowIcon></ArrowIcon>
          <Link className='destination-link-located' href={'/contact'} >News</Link>
      </div>
      <main className="news-main">
          <h1 style={{fontSize: "54px"}}>News</h1>
          <div className="newspage-container">
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
                <img src="/avenue.jpg" alt="" className='news-card-img' />
                <div className="news-info">
                  <p>UET Construction presented the Crystal Avenue Project, a premium residential complex in New Tashkent</p>
                </div>
                <div className="news-date">
                  <p>03.12.2025</p>
                </div>
              </div>
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
                <img src="/avenue.jpg" alt="" className='news-card-img' />
                <div className="news-info">
                  <p>UET Construction presented the Crystal Avenue Project, a premium residential complex in New Tashkent</p>
                </div>
                <div className="news-date">
                  <p>03.12.2025</p>
                </div>
              </div>
            <div className="news-card">
                <img src="/avenue.jpg" alt="" className='news-card-img' />
                <div className="news-info">
                  <p>UET Construction presented the Crystal Avenue Project, a premium residential complex in New Tashkent</p>
                </div>
                <div className="news-date">
                  <p>03.12.2025</p>
                </div>
              </div>
          </div>
      </main>
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