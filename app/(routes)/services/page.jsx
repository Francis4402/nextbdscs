"use client"

import AllServices from '@/app/components/AllServices'
import Image from 'next/image'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function Services() {

    useGSAP(() => {
        gsap.fromTo('.el', {
          opacity: 0,
          y: 20,
        }, {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          ease: 'power1.inOut'
        })
      })

  return (
    <div>
      <section className="bg-center bg-no-repeat bg-cover bg-[url('/img/1.webp')] bg-gray-700 bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-40">
                <h1 className="el mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">Our Services</h1>
                <p className="el mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here you will find details about our services</p>
            </div>
        </section>

        <div className="flex justify-center mt-20">
            <div className="container md:px-0 px-5">
                <div className="grid gap-10">
                    <h1 className="el md:text-4xl text-2xl font-bold">Our Services</h1>
                    <p className='el'>
                        At BDSpeedCoolingSolution, we understand the importance of maintaining comfortable indoor environments, whether it&#39;s for your home or business. Our comprehensive AC servicing is designed to cater to both residential and commercial needs, ensuring optimal cooling and heating solutions year-round. From precise AC installations to thorough maintenance and repairs, our team of skilled technicians is dedicated to keeping your HVAC systems operating at peak performance. We specialize in cooling and heating services, including quality testing to guarantee efficiency and reliability. Our commitment extends beyond basic maintenance; we offer specialized services such as dust cleaning to enhance air quality and prolong the lifespan of your systems. With BDSpeedCoolingSolution, you can trust us to deliver exceptional service and ensure your comfort is our top priority.
                    </p>
                </div>

                <AllServices/>
            </div>
        </div>

        

        <section className="bg-center bg-no-repeat bg-[url('/img/servicing-9.webp')] bg-gray-700 bg-blend-multiply mb-20">
            <div className="px-4 mx-auto max-w-4xl text-center py-40">
                <div className="flex flex-col gap-5">
                    <Image width={500} height={500} src="/img/icon/icons8-play-button.gif" alt="i" className="rounded-full w-14 mx-auto" />
                    <h1 className="md:text-6xl text-4xl font-semibold text-center text-white">Getting the job done wherever however positive <span className="text-orange-500">matters</span> how <span className="text-orange-500">biggest</span> or small</h1>
                </div>
            </div>
        </section>
    </div>
  )
}