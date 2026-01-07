"use client"

import Header from "../components/Header"
import Footer from "../components/Footer"
import "../globals.css"
import Link from "next/link"
import { useTranslation } from "react-i18next"



export default function Products() {

    const { t } = useTranslation();

    return(
        <section className="products">
            <Header></Header>
                <div className="destination">
                <Link className='destination-link' href={'/'} >{t("homepage")}</Link>
                            <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path 
                    d="M6 3L11 8L6 13" 
                    stroke="#828282" 
                    strokeWidth="1.5"
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
                <Link className='destination-link-located' href={'/contact'} >{t("home-hover-link-products")}</Link>
              </div>
              <div className="products-container">
                <div className="products-grid">
                    <div className="product">
                        <div className="product-photo">
                            <img src="/product1_1.jpg" alt="" />
                            <img src="/product1_2.jpg" alt="" />
                        </div>
                        <div className="product-info">
                            <p className="product-type"><strong>{t("solar-plants")}</strong></p> <br />
                            <p><strong>Longi</strong> <br /> 620 W & 720 W</p> <br />
                            <p><strong>Jinko</strong> <br /> 620 W & 720 W</p> <br />
                            <p><strong>Era Solar</strong> <br /> 625 W & 725 W</p> <br />
                            <p><strong>Tongwai</strong> <br /> 620 W & 720 W</p> <br />
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-photo">
                            <img src="/product2.jpg" alt="" />
                            <img src="/product10.jpg" alt="" />
                        </div>
                        <div className="product-info">
                            <p className="product-type"><strong>{t("invertor")}</strong></p> <br />
                            <p><strong>Huawei</strong> <br /> 3 kVt - 330 kVt</p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-photo">
                            <img src="/product3.jpg" alt="" />
                            <img src="/product11.jpg" alt="" />
                        </div>
                        <div className="product-info">
                            <p className="product-type"><strong>{t("invertor")}</strong></p> <br />
                            <p><strong>Auxol</strong> <br /> 3 kVt - 330 kVt</p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-photo">
                            <img src="/product4.jpg" alt="" />
                            <img src="/product12.jpg" alt="" />
                        </div>
                        <div className="product-info">
                            <p className="product-type"><strong>{t("invertor")}</strong></p> <br />
                            <p><strong>Deye</strong> <br /> 3 kVt - 330 kVt</p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-photo">
                            <img src="/product5.jpg" alt="" />
                            <img src="/product13.jpg" alt="" />
                        </div>
                        <div className="product-info">
                            <p className="product-type"><strong>{t("invertor")}</strong></p> <br />
                            <p><strong>Solis</strong> <br /> 3 kVt - 330 kVt</p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-photo">
                            <img src="/product6.jpg" alt="" />
                            <img src="/product14.jpg" alt="" />
                        </div>
                        <div className="product-info">
                            <p className="product-type"><strong>{t("invertor")}</strong></p> <br />
                            <p><strong>Sungrow</strong> <br /> 3 kVt - 330 kVt</p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-photo">
                            <img src="/product7.jpg" alt="" />
                            <img src="/product18.jpg" alt="" />
                        </div>
                        <div className="product-info">
                            <p className="product-type"><strong>{t("invertor")}</strong></p> <br />
                            <p><strong>Solax</strong> <br /> 3 kVt - 330 kVt</p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-photo">
                            <img src="/product8.jpg" alt="" />
                            <img src="/product15.jpg" alt="" />
                        </div>
                        <div className="product-info">
                            <p className="product-type"><strong>{t("cables")}</strong></p> <br />
                            <p><strong>a</strong> - 1x4 Leader & Kraft <br />  <strong>b</strong> - 1x6 Leader & Kraft</p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-photo">
                            <img src="/product9.jpg" alt="" />
                            <img src="/product16.jpg" alt="" />
                        </div>
                        <div className="product-info">
                            <p className="product-type"><strong>{t("accumulator")}</strong></p> <br />
                            <p><strong>LiFePo4</strong> <br /> 3kVt - 16 kVt</p> 
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-photo">
                            <img src="/pedestrian-lamps.jpg" alt="" />
                        </div>
                        <div className="product-info">
                            <p className="product-type"><strong>{t("street-lamps")}</strong></p> <br />
                            <p style={{maxWidth: "15rem"}}>{t("pedestrian")}</p>  
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-photo">
                            <img src="/streer-lamp.jpg" alt="" />
                        </div>
                        <div className="product-info">
                            <p className="product-type"><strong>{t("street-lamps")}</strong></p> <br />
                            <p style={{maxWidth: "15rem"}}>{t("street")}</p> 
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-photo">
                            <img src="/wide-lamps.jpg" alt="" />
                        </div>
                        <div className="product-info">
                            <p className="product-type"><strong>{t("street-lamps")}</strong></p> <br />
                            <p style={{maxWidth: "15rem"}}>{t("wide-street")}</p> 
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-photo">
                            <img src="/magistral-lamps.jpg" alt="" />
                        </div>
                        <div className="product-info">
                            <p className="product-type"><strong>{t("street-lamps")}</strong></p> <br />
                            <p style={{maxWidth: "15rem"}}>{t("magistral")}</p> 
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-photo">
                            <img src="/solar-lamp.jpg" alt="" />
                        </div>
                        <div className="product-info">
                            <p className="product-type"><strong>{t("street-lamps")}</strong></p> <br />
                            <p style={{maxWidth: "15rem"}}>{t("solar")}</p>  
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-photo">
                            <img src="/wind-generator.jpg" alt="" />
                        </div>
                        <div className="product-info">
                            <p className="product-type"><strong>{t("wind-generators")}</strong></p> <br />
                            <p style={{maxWidth: "15rem"}}> <strong>{t("wind-home")}</strong> <br /> 1 kVt - 10 kVt </p> <br />
                            <p style={{maxWidth: "15rem"}}> <strong>{t("wind-fabrics")}</strong> <br /> 10 kVt - 2    0 kVt </p> 
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-photo">
                            <img src="/home-heater.jpg" alt="" />
                        </div>
                        <div className="product-info">
                            <p className="product-type"><strong>{t("heater")}</strong></p> <br />
                            <p style={{maxWidth: "15rem"}}> <strong>{t("heater-home")}</strong> <br /> 150 L - 200 L </p>
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-photo">
                            <img src="/fabric-heater.jpg" alt="" />
                        </div>
                        <div className="product-info">
                            <p className="product-type"><strong>{t("heater")}</strong></p> <br />
                            <p style={{maxWidth: "15rem"}}> <strong>{t("heater-fabric")}</strong> <br /> 300 L - 1000 L </p> <br />
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-photo">
                            <img src="/home-pump.jpg" alt="" />
                        </div>
                        <div className="product-info">
                            <p className="product-type"><strong>{t("heater")}</strong></p> <br />
                            <p style={{maxWidth: "15rem"}}> <strong>{t("home-pump")}</strong> <br /> <strong>3 - 6 kVt →</strong>{t("home-pump-variation1")} <br /> <strong>8 - 12 kVt →</strong> {t("home-pump-variation2")} <br /> <strong>14 – 18 kVt →</strong> {t("home-pump-variation3")} </p> <br />
                        </div>
                    </div>
                    <div className="product">
                        <div className="product-photo">
                            <img src="/fabric-pump.jpg" alt="" />
                        </div>
                        <div className="product-info">
                            <p className="product-type"><strong>{t("heater")}</strong></p> <br />
                            <p style={{maxWidth: "15rem"}}> <strong>{t("half-fabric-pump")}</strong> <br /> 20 - 30 kVt <br /> 40 – 60 kVt <br /> 80 – 120 kVt <br /> <strong>{t("fabric-pump")}</strong> <br /> 150 – 500 kVt <br /> 1 MW (1000 kVt) {t("upper")}  </p> <br />
                        </div>
                    </div>
                </div>
              </div>
            <Footer></Footer>
        </section>
    )
}