"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


export default function Navbar() {

  useGSAP(() => {
    gsap.fromTo('.navtext', {
      opacity: 0,
      y: -20,
    }, {
      opacity: 1,
      y: 0,
      stagger: 0.3,
      ease: 'power1.inOut'
    })
  })
  
  return (
      <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-5 bg-gray-800">
        <nav className="container lg:max-w-screen-xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center justify-between">
            <Link href="/" className="navtext flex-none text-xl font-semibold focus:outline-none focus:opacity-80">
                <span className="inline-flex items-center gap-x-2 text-xl font-semibold text-white">
                <Image src={"/amiya.png"} alt='i' width={100} height={100} />
                  BDSCS
                </span>
            </Link>
            <div className="sm:hidden navtext">
                <button type="button" className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" id="hs-navbar-example-collapse" aria-expanded="false" aria-controls="hs-navbar-example" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-example">
                <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                <span className="sr-only">Toggle navigation</span>
                </button>
            </div>
            </div>
            <div id="hs-navbar-example" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block" aria-labelledby="hs-navbar-example-collapse">
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                <Link className="navtext font-medium text-gray-200 hover:text-gray-400 focus:outline-none focus:text-blue-400" href="/">Home</Link>
                <Link className="navtext font-medium text-gray-200 hover:text-gray-400 focus:outline-none focus:text-blue-400" href="/about">About</Link>
                <Link className="navtext font-medium text-gray-200 hover:text-gray-400 focus:outline-none focus:text-blue-400" href="/services">Services</Link>

                <div>
                  <Link href={"/contactus"} className="navtext py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg hover:bg-gray-900 bg-blue-700 text-white duration-200">
                    Contact US
                  </Link>
                </div>
            </div>
            </div>
        </nav>
    </header>
  )
}
