"use client"

import Image from 'next/image'
import { useRef, useState } from 'react';
import { FaFingerprint } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';

import { ScrollTrigger } from "gsap/all";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger);


export default function QuestionSection() {

    const {formRef, scrollRef} = useRef();

    useGSAP(() => {
        const elements = gsap.utils.toArray('.conallel');
        
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

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const {target} = e;
        const {name, value} = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send
                (
                    process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID ?? "",
                process.env.NEXT_PUBLIC_QUESTION_TEMPLATE_ID ?? "",
                {
                    from_name: form.name,
                    to_name: 'Francis',
                    from_email: form.email,
                    message: form.message,
                  },
                  process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY ?? "",
                )
                .then(() => {
                    setLoading(false);   
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Email Sent",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    setForm({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                    });
                }).catch((err) => {
                    setLoading(false);
                    console.log(err);

                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                    });
                });
    }

  return (
    <div className="flex justify-center" ref={scrollRef}>
        <div className="container md:px-0 px-5">
            <div className='flex lg:flex-row flex-col gap-10 justify-center items-center md:mb-40 mb-20'>
                <div className='max-w-3xl'>
                    <Image width={900} height={900} src="/img/questionus.webp" alt='i' className='conallel'  />
                </div>
            
                <div className='flex flex-col gap-10'>
                    <div className='text-xl flex items-center gap-4 font-semibold conallel'>
                        <FaFingerprint size={30} color='black' />
                        
                        <p className='text-orange-500'>Get in Touch</p>
                    </div>
            
                    <div className='flex flex-col gap-10'>
                        <h1 className='md:text-5xl text-xl font-semibold conallel'>Have any question or free consultacy ?</h1>
            
                        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                            
                            <div className="flex md:flex-row flex-col gap-4">
                                <div className="flex flex-col gap-2 w-full conallel">
                                    <input type="text" name="name" value={form.name} onChange={handleChange} className="px-5 py-3 w-full border border-gray-500 rounded-lg bg-transparent" placeholder="Your Name" />
                                    
                                </div>
                                
                                <div className="flex flex-col gap-2 w-full conallel">
                                    <input type="email" name="email" value={form.email} onChange={handleChange} className="px-5 py-3 w-full border border-gray-500 rounded-lg bg-transparent" placeholder="Email" />
                                    
                                </div>
                            
                            </div>

                            <div className="flex flex-col gap-2 conallel">
                                <input type="text" name="subject" value={form.subject} onChange={handleChange} className="px-5 py-3 w-full border border-gray-500 rounded-lg bg-transparent" placeholder="Subject" />
                                
                            </div>
                            
                            <div className="flex flex-col gap-2 conallel">
                                <textarea rows="4" name="message" value={form.message} onChange={handleChange} className="px-5 py-3 w-full border border-gray-500 rounded-lg bg-transparent" placeholder="Message"></textarea>
                                
                            </div>
                            
                            
                            <div>
                                <button type="submit" className="conallel text-white bg-green-700 hover:bg-green-800 duration-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{loading ? "Sending...": "Send Message"}</button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
