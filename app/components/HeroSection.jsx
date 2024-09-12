"use client"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function HeroSection() {

  useGSAP(() => {
    gsap.fromTo('.heroelement', {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      delay: 0.5,
      y: 0,
      stagger: 0.5
    })

    gsap.fromTo('.heroelement2', {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      delay: 2.6,
      y: -20,
      stagger: 0.5,
    })

    gsap.fromTo('.heroelement3', {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      delay: 5.6,
      y: -20,
      stagger: 0.5
    })
  })

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='bg-gradient-to-r from-black via-black w-[70%] left-0 opacity-90 h-full absolute'></div>

                <div className='grid gap-4 absolute lg:left-[30rem] md:left-24 top-40 text-left text-white md:px-0 px-5'>
                    <h1 className='heroelement font-bold md:text-6xl text-4xl'>Provide Quality <br/> Repair Services</h1>
                    <p className='heroelement text-2xl max-w-lg'>We have years of experienced AC Technician people</p>

                <div className="mt-5 heroelement">
                    <Link href="/contactus" className='bg-orange-500 text-white font-semibold px-5 py-3 md:text-base text-sm rounded-lg hover:bg-orange-400 hover:scale-105 duration-200'>Contact Us</Link>
                </div>
            </div>

            <div className='h-[40rem]'>
              <Image width={500} height={500} className='w-full h-full object-cover' src="/img/omio2.webp" alt="i" />
            </div>
        </SwiperSlide>
        
        <SwiperSlide>
            <div className='bg-gradient-to-r from-black via-black w-[70%] left-0 opacity-90 h-full absolute'></div>
          
                <div className='grid gap-4 absolute lg:left-[30rem] md:left-24 top-40 text-left text-white md:px-0 px-5'>
                    <h1 className='heroelement2 font-bold md:text-6xl text-4xl'>Replacing Parts <br/> Services</h1>
                    <p className='heroelement2 text-2xl max-w-lg'>You can get original parts with best price</p>

                <div className="mt-5 heroelement2">
                    <Link href="/services" className='bg-orange-500 text-white font-semibold px-5 py-3 md:text-base text-sm rounded-lg hover:bg-orange-400 hover:scale-105 duration-200'>Explore More</Link>
                </div>
            </div>

            <div className='h-[40rem]'>
              <Image width={500} height={500} className='w-full h-full object-cover' src="/img/carousel-1.webp" alt="i" />
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='bg-gradient-to-r from-black via-black w-[70%] left-0 opacity-90 h-full absolute'></div>

                <div className='grid gap-4 absolute lg:left-[30rem] md:left-24 top-40 text-left text-white md:px-0 px-5'>
                <h1 className='heroelement3 font-bold md:text-6xl text-4xl'>Quality Heating & Air <br/> Condition Services</h1>
                <p className='heroelement3 text-2xl max-w-lg'>Providing Best Cleaning Services</p>

                <div className="mt-5 heroelement3">
                    <Link href="/services" className='bg-orange-500 text-white font-semibold px-5 py-3 md:text-base text-sm rounded-lg hover:bg-orange-400 hover:scale-105 duration-200'>Explore More</Link>
                </div>
            </div>

            <div className='h-[40rem]'>
              <Image width={500} height={500} className='w-full h-full object-cover' src="/img/carousel-2.webp" alt="i" />
            </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
