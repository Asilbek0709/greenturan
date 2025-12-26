"use client"

import '../globals.css'
import Link from 'next/link'

export default function Header() {

    return(
        <header>
                <div className="left-container" style={{marginLeft: "5rem"}}>
                    <img src="/logo2-footer.svg" alt="" />
                </div>
                <div className="right-container">
                    <div className="navigation">
                        <Link className='page-link' href={'/about'}>About</Link>
                        <Link className='page-link' href={'/services'}>Services</Link>
                        <Link className='page-link' href={'/projects'}>Projects</Link>
                        <Link className='page-link' href={'/news'}>News</Link>
                        <Link className='hover-link' href={'/contact'}>Contact</Link>
                        <p>EN</p>
                    </div>
                </div>
        </header>
    )
}