"use client"

import '../globals.css'
import Link from 'next/link';

export default function Footer() {
  return (
            <footer>
                <div className="main-container">
                    <div className="container1">
                        <img src="/logo-header.png" alt="" />
                        <div className="socials">
                            <div className="social1">
                                <p>INST</p>
                            </div>
                            <div className="social2">
                                <p>TG</p>
                            </div>
                            <div className="social3">
                                <p>FB</p>
                            </div>
                            <div className="social4">
                                <p>YT</p>
                            </div>
                            <div className="social5">
                                <p>IN</p>
                            </div>
                        </div>
                    </div>
                    <div className="container2">
                        <h1>PAGES</h1>
                        <div className="footer-navigation">
                            <Link className='page-link' href={'/'}>Homepage</Link>
                            <Link className='page-link' href={'/products'}>Products</Link>
                            <Link className='page-link' href={'/services'}>Services</Link>
                            <Link className='page-link' href={'/projects'}>Projects</Link>
                            <Link className='page-link' href={'/news'}>News</Link>
                        </div>
                    </div>
                    <div className="container3">
                        <h1>ABOUT</h1>
                        <div className="footer-navigation">
                            <Link className='page-link' href={'/'}>About</Link>
                            <Link className='page-link' href={'/products'}>Structure</Link>
                            <Link className='page-link' href={'/services'}>Partners</Link>
                            <Link className='page-link' href={'/projects'}>Licenses and certificates</Link>
                        </div>
                    </div>
                    <div className="container4">
                        <h1>CONTACTS</h1>
                        <div className="contact-info">
                            <p><span className="colored">Phone:</span> +998 77 443 00 33</p>
                            <p><span className="colored">Email:</span> info@uetconstruction.com</p>
                            <p><span className="colored">Address:</span> Abdulla Kahhar st. 17, Yakkasaroy District, Tashkent city, Uzbekistan</p>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="container5">
                    <p>© 2024 UET CONSTRUCTION. All rights reserved.</p>
                </div>
            </footer>
  );
}