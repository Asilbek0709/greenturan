"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function Slider() {
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
                <div className="slide" style={{ backgroundImage: "url('/image1.png')"}}>
                    <div className="overlay">
                        <h1>Waste Water Treatment Park</h1>
                        <Link className='hover-link' href={'/contact'}>Services</Link>             
                    </div>
                </div>
            </SwiperSlide>
                <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/image1.png')"}}>
                    <div className="overlay" >
                        <h1>Waste Water Treatment</h1>
                        <Link className='hover-link' href={'/contact'}>Services</Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/image1.png')"}}>
                    <div className="overlay">
                        <h1>Waste Water Treatment Park</h1>
                        <Link className='hover-link' href={'/contact'}>Services</Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/image1.png')"}}>
                    <div className="overlay">
                        <h1>Waste Water Treatment Park</h1>
                        <Link className='hover-link' href={'/contact'}>Services</Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/image1.png')"}}>
                    <div className="overlay">
                        <h1>Waste Water Treatment Park</h1>
                        <Link className='hover-link' href={'/contact'}>Services</Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/image1.png')"}}>
                    <div className="overlay">
                        <h1>Waste Water Treatment Park</h1>
                        <Link className='hover-link' href={'/contact'}>Services</Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/image1.png')"}}>
                    <div className="overlay">
                        <h1>Waste Water Treatment Park</h1>
                        <Link className='hover-link' href={'/contact'}>Services</Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/image1.png')"}}>
                    <div className="overlay">
                        <h1>Waste Water Treatment Park</h1>
                        <Link className='hover-link' href={'/contact'}>Services</Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/image1.png')"}}>
                    <div className="overlay">
                        <h1>Waste Water Treatment Park</h1>
                        <Link className='hover-link' href={'/contact'}>Services</Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/image1.png')"}}>
                    <div className="overlay">
                        <h1>Waste Water Treatment Park</h1>
                        <Link className='hover-link' href={'/contact'}>Services</Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/image1.png')"}}>
                    <div className="overlay">
                        <h1>Waste Water Treatment Park</h1>
                        <Link className='hover-link' href={'/contact'}>Services</Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/image1.png')"}}>
                    <div className="overlay">
                        <h1>Waste Water Treatment Park</h1>
                        <Link className='hover-link' href={'/contact'}>Services</Link>             
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide" style={{ backgroundImage: "url('/image1.png')"}}>
                    <div className="overlay">
                        <h1>Waste Water Treatment Park</h1>
                        <Link className='hover-link' href={'/contact'}>Services</Link>             
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}