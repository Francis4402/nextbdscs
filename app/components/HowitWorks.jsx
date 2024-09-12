"use client"

import { FaRegSmile, FaWifi } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function HowitWorks() {

    const scrollRef = useRef();

    useGSAP(() => {
        const elements = gsap.utils.toArray('.hallel');

        gsap.fromTo(elements, {
            opacity: 0,
            y: 20,
        }, {
            opacity: 1,
            y: 0,
            delay: 0.2,
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
    <div className="flex flex-col gap-10 justify-center text-center md:my-40 md:mb-40 mb-20 bg-gray-800 py-20 md:px-0 px-5" ref={scrollRef}>
        <p className="hallel md:text-xl font-bold text-blue-500 flex mx-auto gap-4"><span className="md:block hidden">---</span> How it works <span className="md:block hidden">---</span></p>
        <h1 className="hallel md:text-5xl text-2xl font-semibold text-white max-w-2xl mx-auto">Making technology again working for you</h1>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-5 justify-center items-start">
            <div className="text-white grid justify-center gap-5 hallel">
                <FaWifi className="w-32 h-32 bg-blue-800 shadow shadow-gray-100 backdrop-blur-xl rounded-full p-8 animate-pulse hover:animate-ping mx-auto" />
                
                <h1 className="text-2xl font-semibold">Booking Online</h1>
                <p className="max-w-52">You Can Book Online For Services</p>
            </div>

            <div className="text-white grid justify-center gap-5 hallel">
                <LuMessagesSquare className="w-32 h-32 bg-blue-800 shadow shadow-gray-100 backdrop-blur-xl rounded-full p-8 animate-pulse hover:animate-spin mx-auto" />
                
                <h1 className="text-2xl font-semibold">Discuss Budget</h1>
                <p className="max-w-52">Share your AC problem and discuss budget with us</p>
            </div>

            <div className="text-white grid justify-center gap-5 hallel">
                <MdOutlineEmail className="w-32 h-32 bg-blue-800 shadow shadow-gray-100 backdrop-blur-xl rounded-full p-8 animate-pulse hover:animate-spin mx-auto" />
                
                <h1 className="text-2xl font-semibold">Get Confirmation</h1>
                <p className="max-w-52">Order for services You will get confirmation email only than we will contact with you for services</p>
            </div>

            <div className="text-white grid justify-center gap-5 hallel">
                <FaRegSmile className="w-32 h-32 bg-blue-800 shadow shadow-gray-100 backdrop-blur-xl rounded-full p-8 animate-pulse hover:animate-spin mx-auto" />
                
                <h1 className="text-2xl font-semibold">Happy Services</h1>
                <p className="max-w-52">Best AC Services. Happy Customer!</p>
            </div>
        </div>
    </div>
  )
}
