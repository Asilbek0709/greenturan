"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";


export default function Header() {
  const [open, setOpen] = useState(false);


  const { t, i18n} = useTranslation();

  return (
    <header className="header">
      <div className="left-container">
        <img src="/logo-edited.png" alt="Logo" />
      </div>

      
      <div className="right-container">
        <div className="navigation">
          <div className="dropdown">
            <Link className="page-link" href="/">
              {t("dropdown-link-about")}
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
              <Link className="dropdown-link" href="/about">{t("home-hover-link-about")}</Link>
              <Link className="dropdown-link" href="/about">{t("home-hover-link-partners")}</Link>
              <Link className="dropdown-link" href="/about">{t("home-hover-link-licenses")}</Link>
            </div>
          </div>

          <Link className="page-link" href="/services">{t("dropdown-link-services")}</Link>
          <Link className="page-link" href="/projects">{t("dropdown-link-project")}</Link>
          <Link className="hover-link" href="/contact">{t("dropdown-link-contact")}</Link>
          <div className="language-dropdown">
          <button className="language-dropdown-button" onClick={() => i18n.changeLanguage("uz")}>UZ
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
          </button>
          <div className="language-dropdown-menu">
            <button className="language-dropdown-button" onClick={() => i18n.changeLanguage("uz")}>UZ</button>
            <button className="language-dropdown-button" onClick={() => i18n.changeLanguage("en")}>EN</button>
            <button className="language-dropdown-button" onClick={() => i18n.changeLanguage("ru")}>RU</button>
          </div>
        </div>
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
        <Link className="mobile-link" href="/about" onClick={() => setOpen(false)}>{t("dropdown-link-about")}</Link>
        <Link className="mobile-link" href="/services" onClick={() => setOpen(false)}>{t("dropdown-link-services")}</Link>
        <Link className="mobile-link" href="/projects" onClick={() => setOpen(false)}>{t("dropdown-link-project")}</Link>
        <Link className="mobile-link" href="/news" onClick={() => setOpen(false)}>{t("dropdown-link-news")}</Link>
        <Link className="mobile-link" href="/contact" onClick={() => setOpen(false)}>{t("dropdown-link-contact")}</Link>
        <div className="language-dropdown">
          <button className="language-dropdown-button" onClick={() => i18n.changeLanguage("uz")}>UZ
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
          </button>
          <div className="language-dropdown-menu">
            <button className="language-dropdown-button" onClick={() => i18n.changeLanguage("uz")}>UZ</button>
            <button className="language-dropdown-button" onClick={() => i18n.changeLanguage("en")}>EN</button>
            <button className="language-dropdown-button" onClick={() => i18n.changeLanguage("ru")}>RU</button>
          </div>
        </div>
      </nav>
    </header>
  );
}
