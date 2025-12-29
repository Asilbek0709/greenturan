"use client";

import "../globals.css";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="left-container">
        <img src="/footer-logo.png" alt="Logo" />
      </div>

      
      <div className="right-container">
        <div className="navigation">
          <div className="dropdown">
            <Link className="page-link" href="/">
              About
              <svg
                className="arrow"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 9l6 6 6-6"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                />
              </svg>
            </Link>

            <div className="dropdown-menu">
              <Link className="dropdown-link" href="/about">About</Link>
              <Link className="dropdown-link" href="/about">Structure</Link>
              <Link className="dropdown-link" href="/about">Our vision</Link>
              <Link className="dropdown-link" href="/about">Partners</Link>
              <Link className="dropdown-link" href="/about">Licenses</Link>
            </div>
          </div>

          <Link className="page-link" href="/services">Services</Link>
          <Link className="page-link" href="/projects">Projects</Link>
          <Link className="page-link" href="/news">News</Link>
          <Link className="hover-link" href="/contact">Contact</Link>
        </div>
      </div>

      
      <button
        className={`burger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>

      
      <nav className={`mobileMenu ${open ? "show" : ""}`}>
        <Link className="mobile-link" href="/about" onClick={() => setOpen(false)}>About</Link>
        <Link className="mobile-link" href="/services" onClick={() => setOpen(false)}>Services</Link>
        <Link className="mobile-link" href="/projects" onClick={() => setOpen(false)}>Projects</Link>
        <Link className="mobile-link" href="/news" onClick={() => setOpen(false)}>News</Link>
        <Link className="mobile-link" href="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </nav>
    </header>
  );
}
