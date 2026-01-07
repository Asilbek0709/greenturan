"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language;

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="header">
      {/* LEFT */}
      <div className="left-container">
        <img src="/logo-last.svg" alt="Logo" />
      </div>

      {/* RIGHT */}
      <div className="right-container">
        <div className="navigation">
          <Link className="page-link" href={"/"}>{t("homepage")}</Link>
          {/* DROPDOWN */}
          <div className="dropdown">
            <Link className="page-link" href="/about">
              {t("dropdown-link-about")}
              <svg className="arrow" width="16" height="16" viewBox="0 0 24 24">
                <path d="M6 9l6 6 6-6" fill="none" stroke="#000" strokeWidth="2" />
              </svg>
            </Link>

            <div className="dropdown-menu">
              <Link className="dropdown-link" href="/about">
                {t("home-hover-link-partners")}
              </Link>
              <Link className="dropdown-link" href="/about">
                {t("home-hover-link-licenses")}
              </Link>
            </div>
          </div>

          <Link className="page-link" href="/services">
            {t("dropdown-link-services")}
          </Link>
          <Link className="page-link" href="/projects">
            {t("dropdown-link-project")}
          </Link>
          <Link className="page-link" href="/products">
            {t("home-hover-link-products")}
          </Link>
          <Link className="hover-link" href="/contact">
            {t("dropdown-link-contact")}
          </Link>

          {/* LANGUAGE SWITCHER */}
          <div className="language-dropdown">
            <button className="language-dropdown-button">
              {currentLang.toUpperCase()}
              <svg className="arrow" width="16" height="16" viewBox="0 0 24 24">
                <path d="M6 9l6 6 6-6" fill="none" stroke="#000" strokeWidth="2" />
              </svg>
            </button>

            <div className="language-dropdown-menu">
              <button
                className={`language-dropdown-button ${currentLang === "uz" ? "active" : ""}`}
                onClick={() => changeLang("uz")}
              >
                UZ
              </button>
              <button
                className={`language-dropdown-button ${currentLang === "en" ? "active" : ""}`}
                onClick={() => changeLang("en")}
              >
                EN
              </button>
              <button
                className={`language-dropdown-button ${currentLang === "ru" ? "active" : ""}`}
                onClick={() => changeLang("ru")}
              >
                RU
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BURGER */}
      <button
        className={`burger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* MOBILE MENU */}
      <nav className={`mobileMenu ${open ? "show" : ""}`}>
        <Link className="mobile-link" href="/" onClick={() => setOpen(false)}>
          {t("homepage")}
        </Link>
        <Link className="mobile-link" href="/about" onClick={() => setOpen(false)}>
          {t("dropdown-link-about")}
        </Link>
        <Link className="mobile-link" href="/services" onClick={() => setOpen(false)}>
          {t("dropdown-link-services")}
        </Link>
        <Link className="mobile-link" href="/projects" onClick={() => setOpen(false)}>
          {t("dropdown-link-project")}
        </Link>
        <Link className="mobile-link" href="/products" onClick={() => setOpen(false)}>
          {t("home-hover-link-products")}
        </Link>
        <Link className="mobile-link" href="/contact" onClick={() => setOpen(false)}>
          {t("dropdown-link-contact")}
        </Link>

        {/* MOBILE LANG */}
        <div className="language-dropdown mobile">
          <button
            className={`language-dropdown-button ${currentLang === "uz" ? "active" : ""}`}
            onClick={() => changeLang("uz")}
          >
            UZ
          </button>
          <button
            className={`language-dropdown-button ${currentLang === "en" ? "active" : ""}`}
            onClick={() => changeLang("en")}
          >
            EN
          </button>
          <button
            className={`language-dropdown-button ${currentLang === "ru" ? "active" : ""}`}
            onClick={() => changeLang("ru")}
          >
            RU
          </button>
        </div>
      </nav>
    </header>
  );
}
