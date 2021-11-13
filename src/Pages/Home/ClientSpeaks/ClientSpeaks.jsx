import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import axios from 'axios';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
// import PropLoader from '../PropLoader/PropLoader';
import ClientSpeak from './ClientSpeak';
import Title from '../../Shared/Title/Title';
SwiperCore.use([Navigation, Pagination, Autoplay]);




const ClientSpeaks = () => {
    const [feedBack, setFeedback] = useState([])


    useEffect(() => {
        axios.get('http://localhost:5000/review')
            .then(res => {
                setFeedback(res.data)
            })
    }, [])
    return (
        <>
            <Box sx={{ my: 10 }}>
                <Title>Clients Speaks </Title>
                
                <Box sx={{height:"2px",bgcolor:"#FF8CAB",width:"100px",m:"0 auto"}}></Box>
                {feedBack.length === 0 ?
                    <div className="">
                        {"loading"}
                    </div> :
                    <Swiper
                        loop={true}
                        className=""
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false
                        }}
                        pagination={true} grabCursor={true}
                        slidesPerView={1}
                        speed={600}
                        spaceBetween={20}
                    >
                        {feedBack.map(item => (
                            <SwiperSlide key={item._id}>

                                <ClientSpeak   {...item} />

                            </SwiperSlide>
                        ))}
                    </Swiper>
                }

            </Box>
        </>
    );
};

export default ClientSpeaks;