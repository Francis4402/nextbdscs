"use client"

import { Canvas } from '@react-three/fiber'
import React, { useRef } from 'react'
import { Model } from './Model'
import { OrbitControls } from '@react-three/drei'
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {

    const scrollRef = useRef();

    useGSAP(() => {
        const elements = gsap.utils.toArray('.allelements');
        
        gsap.fromTo(elements, {
            opacity: 0,
            y: 20,
        }, {
            opacity: 1,
            y: 0,
            delay: 0.3,
            stagger: 0.2,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: elements,
                start: 'top 80%',
                end: 'bottom 20%',
            }
        })
    })

  return (
    <div className='flex lg:flex-row flex-col justify-between gap-20' ref={scrollRef}>
        <div className='flex flex-col gap-5 w-full'>
            <div className='flex flex-col gap-1'>
                <h1 className='allelements md:text-4xl text-2xl font-semibold'>Your Trusted Partner for Air Conditioning Excellence</h1>
                <p className='allelements text-orange-600 text-2xl font-thin'>Unwavering Expertise,<br/> Uncompromising Quality,<br/> Unparalleled Customer Care</p>
            </div>
            
            <p className='allelements'>Air conditioning services encompass a wide range of activities related to the installation, maintenance, repair and replacement of ACs,</p>

            <h2 className='allelements text-orange-600 text-2xl'>Few Reasons Why People Choosing Us!</h2>

            <ul className='list-disc space-y-4'>
                <li className='allelements'>
                    Skilled technicians guarantee thorough maintenance.Timely solutions to keep your space cool.Reliable service ensures peace of mind.
                </li>

                <li className='allelements'>
                    Trust Our Service Center for expert repairs and maintenance, ensuring your equipment performs at its best. Experience reliability and quality service with us.
                </li>

                <li className='allelements'>
                    We offer reasonable prices depending on the services that you need. Contact Us if you have any questions
                </li>
            </ul>
        </div>

        <div className='allelements w-full h-[30rem] bg-gray-200'>
            <Canvas>
                <mesh>
                    <Model/>
                </mesh>
                <OrbitControls enableZoom={false} rotateSpeed={0.4} />
            </Canvas>
        </div>
    </div>
  )
}
