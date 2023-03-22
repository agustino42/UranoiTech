"use client"

import React, { useRef, useState } from "react";

import "flowbite"
import {motion} from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";


const Cards = () => (
    <section>
     <div className="items-center text-center">
     <Swiper
    className="mySwiper swiper-h"
    spaceBetween={50}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    >
    <SwiperSlide>
    <img className="py-8 px-4 mx-auto text-center lg:py-16 lg:px-12 h-auto max-w-full" src="/assets/galeria1.jpg" alt="image description"/>
    </SwiperSlide>
<Swiper 
 className="mySwiper2 swiper-v"
 direction={"vertical"}
 spaceBetween={50}
 pagination={{
   clickable: true,
 }}
 modules={[Pagination]}
>

    <SwiperSlide> <img className="py-8 px-4 mx-auto text-center lg:py-16 lg:px-12 h-auto max-w-full" src="/assets/galeria2.jpg" alt="image description"/> </SwiperSlide>
    <SwiperSlide> <img className="py-8 px-4 mx-auto text-center lg:py-16 lg:px-12 h-auto max-w-full" src="/assets/galeria3.jpg" alt="image description"/> </SwiperSlide>
    <SwiperSlide> <img className="py-8 px-4 mx-auto text-center lg:py-16 lg:px-12 h-auto max-w-full" src="/assets/galeria4.jpg" alt="image description"/> </SwiperSlide>
    <SwiperSlide> <img className="py-8 px-4 mx-auto text-center lg:py-16 lg:px-12 h-auto max-w-full" src="/assets/galeria5.jpg" alt="image description"/> </SwiperSlide>
    <SwiperSlide> <img className="py-8 px-4 mx-auto text-center lg:py-16 lg:px-12 h-auto max-w-full" src="/assets/galeria1.jpg" alt="image description"/> </SwiperSlide>
    </Swiper>
    <SwiperSlide> <img className="py-8 px-4 mx-auto text-center lg:py-16 lg:px-12 h-auto max-w-full" src="/assets/bannerImgThree.png" alt="image description"/> </SwiperSlide>

     
     </Swiper>
     </div>


    </section>
) ;
 


export default Cards