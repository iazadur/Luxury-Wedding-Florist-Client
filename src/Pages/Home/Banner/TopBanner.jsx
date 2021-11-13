import { Container } from '@mui/material';
import React from 'react';
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import Banners from './Banners';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const TopBanner = () => {
    const services =
        [
            'https://i.ibb.co/f0GTMWH/flowers-1.png',
            'https://i.ibb.co/VLg56pM/flowers-2.png',
            'https://i.ibb.co/52vzrbk/flowers-3.png',
            'https://i.ibb.co/zRPszmb/flowers-4.png',
            'https://i.ibb.co/2jJ2j2B/flowers-5.png',
            'https://i.ibb.co/3hkQbvR/flowers-6.png',
            'https://i.ibb.co/VTkxy2J/flowers-7.png',
            'https://i.ibb.co/0fT1NLS/flowers-8.png',
            'https://i.ibb.co/prnNjYS/flowers-9.png'
        ]





    return (
        <>

            <Container sx={{my:10}}>

                <Swiper
                    className="mySwiper py-12"
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    pagination={true} grabCursor={true}
                    slidesPerView={1}
                    speed={400}
                    spaceBetween={20}
                    breakpoints={{
                        500: {
                            slidesPerView: 1,

                        },
                        700: {
                            slidesPerView: 2
                        },
                        1024: {
                            slidesPerView: 3
                        }
                    }}
                >

                    {services.map((img, id) => (
                        <SwiperSlide key={id}>
                            <Banners img={img} />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </Container>


        </>
    )
}

export default TopBanner
