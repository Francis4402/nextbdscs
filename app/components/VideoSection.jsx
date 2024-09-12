"use client"

import { ScrollTrigger } from "gsap/all";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function VideoSection() {

  const scrollRef = useRef();

  useGSAP(() => {
    gsap.fromTo('.videoel', {
      opacity: 0,
      y: 50,
    }, {
        opacity: 1,
        y: 0,
        delay: 0.3,
        ease: 'power1.inOut',
        scrollTrigger: {
            trigger: '.videoel',
            start: 'top 80%',
            end: 'bottom 20%',
        }
    })
  })

  return (
    <div>
        <video ref={scrollRef} className="videoel w-full h-full md:mt-40 mt-20" autoPlay muted loop>
            <source src="/video/videoforweb.mp4" type="video/mp4" />
        </video>
    </div>
  )
}
