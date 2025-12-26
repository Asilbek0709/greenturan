"use client"

import '../globals.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import PhoneIcon from '@/assets/icons/phone.svg'
import EmailIcon from '@/assets/icons/email.svg'
import LocationIcon from '@/assets/icons/location.svg'
import MapIcon from '@/assets/icons/map.svg'
import HoursIcon from '@/assets/icons/hours.svg'
import ArrowIcon from '@/assets/icons/arrow.svg'

export default function Contact() {
  return (
    <section className="contactpage">
      <Header></Header>
      <div className="destination">
          <Link className='destination-link' href={'/'} >Homepage</Link>
            <ArrowIcon></ArrowIcon>
          <Link className='destination-link-located' href={'/contact'} >Contacts</Link>
      </div>
      <h1 style={{textAlign: "center", fontSize: "54px"}}>Contacts</h1>
      <section className="location">
        <div className="location-info">
          <div className="phone">
            <PhoneIcon></PhoneIcon>
            <div className="phone-number">
              <p style={{color: "#5d5d5d"}}> Phone</p>
              <p style={{fontWeight: "bold"}}>+998 77 443 00 33</p>
            </div>
          </div>
          <div className="email">
            <EmailIcon></EmailIcon>
            <div className="phone-number">
              <p style={{color: "#5d5d5d"}}>Email</p>
              <p style={{fontWeight: "bold"}}>info@uetconstruction.com</p>
            </div>
          </div>
          <div className="adress">
            <LocationIcon></LocationIcon>
            <div className="phone-number">
              <p style={{color: "#5d5d5d"}}>Address</p>
              <p style={{fontWeight: "bold"}}>Abdulla Kahhar st. 17, Yakkasaroy District, Tashkent city, Uzbekistan</p>
            </div>
          </div>
          <div className="map">
            <MapIcon></MapIcon>
            <div className="phone-number">
              <p style={{color: "#5d5d5d"}}>Reference point</p>
              <p style={{fontWeight: "bold"}}>“Gruzinskiy dvorik”, “Felicita” Residence</p>
            </div>
          </div>
          <div className="hours">
            <HoursIcon></HoursIcon>
            <div className="phone-number">
              <p style={{color: "#5d5d5d"}}>Working hours</p>
              <p style={{fontWeight: "bold"}}>Everyday 09:00 - 19:00</p>
            </div>
          </div>
        </div>      
        <iframe className='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.1380823475724!2d69.25632537587313!3d41.2840991713132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b9ab898b5c3%3A0x16cdb4f4b504f05f!2sUET%20Construction!5e0!3m2!1sru!2s!4v1766754801752!5m2!1sru!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
      <Footer></Footer>
    </section>
  );
}