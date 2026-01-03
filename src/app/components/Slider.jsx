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
        <Swiper 
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ 
                clickable: true, 
                renderBullet: (index, className) => {
                    return `
                        <span class="${className} custom-line">
                            <span class="progress"></span>
                        </span>
                    `
                }
            }}
            autoplay={{ 
                delay: 4000,
                disableOnInteraction: false,
            }}
            loop
            className="heroSwiper"
        >
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/solar20.jpg')"}}>
                    <div className="overlay">
                        <h1>NUR BUXORO 250MW</h1>
                        <Link className='hover-link' href={'/projects'}>{t("dropdown-link-project")}</Link>             
                    </div>
                </div>
            </SwiperSlide>
                <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/solar2.jpg')"}}>
                    <div className="overlay" >
                        <h1>XORAZM SARIMAY 126MW </h1>
                        <Link className='hover-link' href={'/projects'}>{t("dropdown-link-project")}</Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/solar18.jpg')"}}>
                    <div className="overlay">
                        <h1>XORAZM SARIMAY 126MW </h1>
                        <Link className='hover-link' href={'/projects'}>{t("dropdown-link-project")}</Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/sliderphoto.jpg')"}}>
                    <div className="overlay">
                        <h1>Sherobod 500MW</h1>
                        <Link className='hover-link' href={'/projects'}>{t("dropdown-link-project")}</Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/solar4.jpg')"}}>
                    <div className="overlay">
                        <h1>YANGI YO'L </h1>
                        <Link className='hover-link' href={'/projects'}>{t("dropdown-link-project")}</Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/solar5.jpg')"}}>
                    <div className="overlay">
                        <h1>BEKABAD MANUFACTURING </h1>
                        <Link className='hover-link' href={'/projects'}>{t("dropdown-link-project")}</Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/solar7.jpg')"}}>
                    <div className="overlay">
                        <h1>CONSTRUCTION OF A 30 KW SOLAR PHOTOVOLTAIC POWER</h1>
                        <Link className='hover-link' href={'/projects'}>{t("dropdown-link-project")}</Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/solar8.jpg')"}}>
                    <div className="overlay">
                        <h1>200 kW solar photovoltaic power </h1>
                        <Link className='hover-link' href={'/projects'}>{t("dropdown-link-project")}</Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/solar9.jpg')"}}>
                    <div className="overlay">
                        <h1>PRESIDENTIAL SCHOOL</h1>
                        <Link className='hover-link' href={'/projects'}>{t("dropdown-link-project")}</Link>             
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/solar11.jpg')"}}>
                    <div className="overlay">
                        <h1>SOLAR PHOTOVOLTAIC POWER </h1>
                        <Link className='hover-link' href={'/projects'}>{t("dropdown-link-project")}</Link>             
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}