"use client"

import '../globals.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Project() {
  return (
    <section className="projectpage">
      <Header></Header>
        <div className="destination">
          <Link href={'/'} >Homepage</Link>
          <img src="/sarrow.png" alt="" />
          <Link href={'/projects'} >Projects</Link>
        </div>


      <Footer></Footer>
    </section>
  );
}