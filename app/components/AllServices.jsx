"use client"

import Image from 'next/image'
import Link from 'next/link'
import { allservices } from '../data';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { ScrollTrigger } from "gsap/all";
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function AllServices() {

    const scrollRef = useRef();

    const truncateDescription = (description) => {
        if (description.length > 80) {
            return description.substring(0, 80) + '...';
        }
        return description;
    };

    useGSAP(() => {

        const elements = gsap.utils.toArray('.service-element');
        const cards = gsap.utils.toArray('.service-card')

        gsap.fromTo(elements, {
            opacity: 0,
            y: 20,          
        }, {
            opacity: 1,
            y: 0,
            delay: 0.5,
            stagger: 0.3,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: elements,
                start: 'top 80%',
                end: 'bottom 20%',
            }
        })

        gsap.fromTo(cards, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            stagger: 0.3,
            delay: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: cards,
                start: 'top 80%',
                end: 'bottom 20%',
            }
        })

    })

  return (
    <div>
        <div className='md:my-40 my-20' ref={scrollRef}>
            <div className='flex flex-col gap-10 justify-center items-center'>
                <div className='flex flex-col gap-4 justify-center text-center'>
                    <h1 className='service-element text-2xl font-bold md:text-5xl'>Air conditioning Services</h1>
                    <p className='service-element text-2xl max-w-xl font-thin text-orange-600'>Air conditioning services encompass a wide range of activities</p>
                </div>

                <div className='grid gap-10 items-center justify-center mt-10 w-full md:grid-cols-3'>
                    {
                        allservices.map(service => <div key={service.id}>
                            <Link href={`/services/${service.slug}`} className="service-card flex flex-col group bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-lg focus:outline-none focus:shadow-lg">
                            <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
                                <Image width={500} height={500} className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl" src={service.image} alt="Card Image" />
                            </div>
                            <div className="p-4 md:p-5">
                                <div className='flex gap-5 items-center'>
                                    <Image height={40} width={40} src={service.icon} alt='i'></Image>
                                    <h3 className="text-lg font-bold text-gray-800">
                                        {service.service}
                                    </h3>
                                </div>
                                <p className="mt-5 text-gray-500">
                                    {truncateDescription(service.description)}
                                </p>
                            </div>
                            </Link>
                        </div>)
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
