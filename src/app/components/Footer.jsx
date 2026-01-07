"use client"

import "../globals.css"
import Link from 'next/link';
import { useTranslation } from "react-i18next";

export default function Footer() {

    const { t } = useTranslation();

  return (
            <footer>
                <div className="main-container">
                    <div className="container2">
                        <h1>{t("container2-title")}</h1>
                        <div className="footer-navigation">
                            <Link className='page-link' href={'/'}>{t("homepage")}</Link>
                            <Link className='page-link' href={'/services'}>{t("dropdown-link-services")}</Link>
                            <Link className='page-link' href={'/projects'}>{t("dropdown-link-project")}</Link>
                            <Link className='page-link' href={'/news'}>{t("dropdown-link-news")}</Link>
                        </div>
                    </div>
                    <div className="container3">
                        <h1>{t("home-hover-link-about")}</h1>
                        <div className="footer-navigation">
                            <Link className="page-link" href="/services">{t("dropdown-link-services")}</Link>
                            <Link className="page-link" href="/projects">{t("dropdown-link-project")}</Link>
                            <Link className="page-link" href="/news">{t("dropdown-link-news")}</Link>
                        </div>
                    </div>
                    <div className="container4">
                        <h1>{t("dropdown-link-contact")}</h1>
                        <div className="contact-info">
                            <p><span className="colored">{t("colored-phone")}:</span> +998 (77) 260-26-26; +998 (77)-179-20-20</p>
                            <p><span className="colored">{t("colored-email")}:</span> ienergy24h@gmail.com</p>
                            <p><span className="colored">{t("colored-address")}:</span> {t("address")}</p>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="container5">
                    <p>© Silicon Hub. Barcha huquqlar himoyalangan.</p>
                </div>
            </footer>
  );
}