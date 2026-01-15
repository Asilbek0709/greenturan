"use client"
import "../globals.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";


export default function Slider() {


    const { t } = useTranslation();

    return(
        <div className="slider-wrapper" style={{ position: "relative" }}>
  {/* Кастомные кнопки сверху */}
  <div className="swiper-buttons-top">
  <button className="swiper-next">›</button>
  <button className="swiper-prev">‹</button>
</div>


  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    navigation={{
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
    disabledClass: "swiper-button-disabled"
    }}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    loop
    slidesPerView={6}
    spaceBetween={20}
    slidesPerGroup={1}
    className="heroSwiper"
  >
                <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
                <div className="product">
                        <div className="product-photo">
                            <img src="/product4.png" alt="" />
                            <img src="/product12.jpg" alt="" />
                        </div>
                        <div className="product-info">
                            <p className="product-type"><strong>{t("invertor")}</strong></p> <br />
                            <p><strong>Deye</strong> <br /> 3 kVt - 330 kVt</p>
                        </div>
                    </div>
                    
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
                <div className="product">
                        <div className="product-photo">
                            <img src="/product6.jpg" alt="" />
                            <img src="/product18.jpg" alt="" />
                        </div>
                        <div className="product-info">
                            <p className="product-type"><strong>{t("invertor")}</strong></p> <br />
                            <p><strong>Sungrow</strong> <br /> 3 kVt - 330 kVt</p>
                        </div>
                    </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="product">
                        <div className="product-photo">
                            <img src="/product7.jpg" alt="" />
                            <img src="/product14.jpg" alt="" />
                        </div>
                        <div className="product-info">
                            <p className="product-type"><strong>{t("invertor")}</strong></p> <br />
                            <p><strong>Solax</strong> <br /> 3 kVt - 330 kVt</p>
                        </div>
                    </div>
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>

            <SwiperSlide>
                <div className="product">
                        <div className="product-photo">
                            <img src="/pedestrian-lamps.jpg" alt="" />
                            <img src="/streer-lamp.jpg" alt="" />
                        </div>
                        <div className="product-info">
                            <p className="product-type"><strong>{t("street-lamps")}</strong></p> <br />
                            <p style={{maxWidth: "15rem"}}>{t("pedestrian")}</p>
                            <p style={{maxWidth: "15rem"}}>{t("street")}</p>   
                        </div>
                    </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="product">
                        <div className="product-photo">
                            <img src="/wide-lamps.jpg" alt="" />
                            <img src="/wide-lamp2.jpg" alt="" />
                        </div>
                        <div className="product-info">
                            <p className="product-type"><strong>{t("street-lamps")}</strong></p> <br />
                            <p style={{maxWidth: "15rem"}}>{t("wide-street")}</p> 
                        </div>
                    </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="product">
                        <div className="product-photo">
                            <img src="/magistral-lamps.jpg" alt="" />
                            <img src="/lamp.jpg" alt="" />
                        </div>
                        <div className="product-info">
                            <p className="product-type"><strong>{t("street-lamps")}</strong></p> <br />
                            <p style={{maxWidth: "15rem"}}>{t("magistral")}</p> 
                        </div>
                    </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="product">
                        <div className="product-photo">
                            <img src="/solar-lamp.jpg" alt="" />
                            <img src="/solar-lamp2.jpg" alt="" />
                        </div>
                        <div className="product-info">
                            <p className="product-type"><strong>{t("street-lamps")}</strong></p> <br />
                            <p style={{maxWidth: "15rem"}}>{t("solar")}</p>  
                        </div>
                    </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="product">
                        <div className="product-photo">
                            <img src="/wind-generator.jpg" alt="" />
                            <img src="/wind-generator2.jpg" alt="" />
                        </div>
                        <div className="product-info">
                            <p className="product-type"><strong>{t("wind-generators")}</strong></p> <br />
                            <p style={{maxWidth: "15rem"}}> <strong>{t("wind-home")}</strong> <br /> 1 kVt - 10 kVt </p> <br />
                            <p style={{maxWidth: "15rem"}}> <strong>{t("wind-fabrics")}</strong> <br /> 10 kVt - 50 kVt </p> 
                        </div>
                    </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="product">
                        <div className="product-photo-alone">
                            <img src="/home-heater.jpg" alt="" />
                        </div>
                        <div className="product-info">
                            <p className="product-type"><strong>{t("heater")}</strong></p> <br />
                            <p style={{maxWidth: "15rem"}}> <strong>{t("heater-home")}</strong> <br /> 150 L - 200 L </p>
                        </div>
                    </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="product">
                        <div className="product-photo-alone">
                            <img src="/fabric-heater.jpg" alt="" />
                        </div>
                        <div className="product-info">
                            <p className="product-type"><strong>{t("heater")}</strong></p> <br />
                            <p style={{maxWidth: "15rem"}}> <strong>{t("heater-fabric")}</strong> <br /> 300 L - 1000 L </p> <br />
                        </div>
                    </div>
            </SwiperSlide>
        </Swiper>
        </div>
    )
}