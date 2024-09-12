"use client"

import AboutSection from '@/app/components/AboutSection'
import HowitWorks from '@/app/components/HowitWorks'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function About() {

  useGSAP(() => {
    gsap.fromTo('.textel', {
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
      <section className="bg-center bg-no-repeat bg-cover bg-[url('/img/omio2.webp')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-40">
            <h1 className="textel mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">About Us</h1>
        </div>
      </section>

      <div className="flex justify-center my-20">
          <div className="container px-5 md:px-0">
            <div className='flex flex-col gap-20'>
              <div className="grid gap-10">
                  <h1 className="textel text-2xl font-bold md:text-4xl">About Us</h1>
                  <p className='textel'>BDSCS(bdspeedcoolingsolution) AC Servicing Agency. We provide AC servicing inside Dhaka. We provide solution for all kinds for ac and ac related problems any brand. Sweltering heat, relying on a trusted AC servicing team is paramount. Our team boasts years of experience, offering a comprehensive range of services tailored to meet your needs. What sets us apart is our commitment to quality without breaking the bank.<br/><br/> We understand the importance of affordability, which is why we strive to keep our costs reasonable while delivering top-notch service. With us, you can rest assured knowing that your AC servicing needs will be met with professionalism and expertise.<br/><br/> From routine maintenance to complex repairs, our experienced technicians are equipped to handle it all. We take pride in our workmanship and stand behind it with a guarantee, giving you peace of mind knowing that your AC is in capable hands.<br/><br/> Our reputation as a trusted team precedes us, with countless satisfied customers vouching for our reliability and dedication to excellence. When you choose us for your AC servicing needs, you are choosing quality, affordability, and peace of mind. So why wait? Contact us today and experience the difference firsthand.</p>
              </div>
              <AboutSection/>
            </div>
          </div>
      </div>

      <HowitWorks/>
    </div>
  )
}
