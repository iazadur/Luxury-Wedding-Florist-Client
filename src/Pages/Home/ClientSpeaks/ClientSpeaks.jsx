import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
// import PropLoader from '../PropLoader/PropLoader';
import ClientSpeak from './ClientSpeak';
SwiperCore.use([Navigation, Pagination, Autoplay]);

const ClientSpeaks = () => {
    const [feedBack, setFeedback] = useState([])


    useEffect(() => {

        setFeedback([
            {
                "_id": "617e36291029d6aa850047ed",
                "username": "Arafat",
                "rating": "3",
                "review": "I have visited one of the best resort in Bangladesh.The environment was fantastic.We enjoyed here lot.Staff ware very friendly.They have nice natural swimming pool and we enjoyed a movie at Cineplex it was amazing .Sound system and projection was very good.We got a very welcome reception and all of the services.We recommended to come hare and we will come hare again.",
                "img": "https://i.ibb.co/Php9bbh/arafat.jpg"
            },
            {
                "_id": "617e36891029d6aa850047ee",
                "username": "Zahid",
                "rating": "5",
                "review": "First Of All I Want Thanks My Wife To Choice Mozaffar resort. It was amazing and I didn't feel like leaving the day of departure. I wanted to stay there for few more days but had to come back got no choice the few things , I liked about Mozaffar is clean and tidy everywhere you look all you see is green it's natural. I loved it and the food quality so far good and restaurant waiter are okay .I loved their services but i think they need some level of training I guess.  I loved it . Thanks to Mozaffar garden & resort team for there outstanding services.we will see you again.",
                "img": "https://i.ibb.co/5s5P3J2/zahid.jpg"
            },
            {
                "_id": "617e36bc1029d6aa850047ef",
                "username": "Zunayed",
                "rating": "3.4",
                "review": "Mozaffar Garden & Resort is the best place in Khulna Division. In which Honeymoon cottage floating on water bring to you the Dreamland !",
                "img": "https://i.ibb.co/RP5b1wm/zunayed.jpg"
            },
            {
                "_id": "617e37111029d6aa850047f0",
                "username": "iazadur",
                "rating": "2",
                "review": "What a beautiful natural resort! We are surprised to see the natural beauty of this resort. Full resorts are surrounded by different types of trees and flowers. The staff ware very good and the service was excellent. Accommodation and facilities are world-class...",
                "img": "https://i.ibb.co/QMQ7K1x/azad.jpg"
            }
        ])

    }, [])
    return (
        <>
            <Box sx={{mt:10}}>

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

                                <ClientSpeak  {...item} />

                            </SwiperSlide>
                        ))}
                    </Swiper>
                }

            </Box>
        </>
    );
};

export default ClientSpeaks;