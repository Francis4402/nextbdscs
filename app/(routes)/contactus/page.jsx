"use client"

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react"
import Swal from "sweetalert2";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function ContactUs() {

    const formRef = useRef();

    useGSAP(() => {
        gsap.fromTo('.contacttext', {
          opacity: 0,
          y: 20,
        }, {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: 'power1.inOut'
        })
      })

    const [form, setForm] = useState({
        name: "",
        email: "",
        address: "",
        subject: "",
        phone: "",
        typeofservice: "",
        services: "",
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
          .send(
            process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID ?? "",
            process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID ?? "",
            {
              from_name: form.name,
              to_name: 'Francis',
              from_email: form.email,
              from_address: form.address,
              from_subject: form.subject,
              from_phone: form.phone,
              from_typeofservice: form.typeofservice,
              from_services: form.services,
              message: form.message,
            },
            process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY ?? "",
          )
          .then(
            () => {
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
                address: "",
                subject: "",
                phone: "",
                typeofservice: "",
                services: "",
                message: "",
              });
            },
            (error) => {
              setLoading(false);
              console.error(error);
    
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
            }
          );
      };

  return (

    <div >
        <section className="bg-center bg-no-repeat bg-[url('/img/contact.webp')] bg-gray-700 bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-40">
                <h1 className="contacttext mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Contact Us</h1>
            </div>
        </section>
        
        <div className="flex justify-center md:my-40 my-20">
            <div className="container px-5 md:px-0">

            <h1 className="contacttext text-xl font-bold md:text-4xl text-center">Please Contact Us <br/> for services and order</h1>

                <div className='flex flex-col-reverse mt-20 justify-between gap-32 lg:items-start items-center lg:flex-row'>

                <iframe className="rounded-lg border border-gray-300 shadow-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14600.966847114078!2d90.40638980528476!3d23.810002388143992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7ab59a96e61%3A0x104096218c0cb43b!2sKalachandpur%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1714856650851!5m2!1sen!2sbd" width="100%" height="500" ></iframe>
                
                    <form ref={formRef} onSubmit={handleSubmit} className="contacttext flex flex-col gap-5 md:w-[40rem] w-full bg-white border-2 p-10 rounded-xl">
                        <div className="flex flex-col gap-4 md:flex-row">
                            <div className="flex flex-col gap-2 w-full contacttext">
                                <input type="text" name="name" value={form.name} onChange={handleChange} className="px-5 py-3 bg-transparent rounded-lg border border-gray-500" required placeholder="Your Name" />
                            </div>

                            <div className="flex flex-col gap-2 w-full contacttext">
                                <input type="email" name="email" value={form.email} onChange={handleChange} className="px-5 py-3 bg-transparent rounded-lg border border-gray-500" required placeholder="Your Email" />
                                
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 w-full contacttext">
                            <input type="text" name="address" value={form.address} onChange={handleChange} className="px-5 py-3 bg-transparent rounded-lg border border-gray-500" required placeholder="Your Address" />
                        </div>

                        <div className="flex flex-col gap-4 md:flex-row contacttext">
                            <div className="flex flex-col gap-2 w-full">
                                <input type="text" name="subject" value={form.subject} onChange={handleChange} className="px-5 py-3 bg-transparent rounded-lg border border-gray-500" required placeholder="Subject" />
                            </div>
                            <div className="flex flex-col gap-2 w-full contacttext">
                                <input type="text" name="phone" value={form.phone} onChange={handleChange} className="px-5 py-3 bg-transparent rounded-lg border border-gray-500" required placeholder="01234567897" />
                                
                            </div>
                        </div>
                    
                        
                        <div className="flex flex-col gap-2 w-full contacttext">
                            <select name="typeofservice" value={form.typeofservice} onChange={handleChange} required className="px-5 py-3 bg-transparent rounded-lg border border-gray-500">
                                <option value='' className="text-black">Select Type of service</option>
                                <option value='residential services' className="text-black">Residential Services</option>
                                <option value='commercial services' className="text-black">Commercial Services</option>
                            </select>
                            
                        </div>

                        <div className="flex flex-col gap-2 w-full contacttext">
                            <select name="services" value={form.services} onChange={handleChange} required className="px-5 py-3 bg-transparent rounded-lg border border-gray-500">
                                <option value='' className="text-black">Select Your Service</option>
                                <option value='ac installation' className="text-black">AC Installation</option>
                                <option value='cooling services' className="text-black">Cooling Services</option>
                                <option value='heating services' className="text-black">Heating Services</option>
                                <option value='maintenance & repair' className="text-black">Maintenance & Repair</option>
                                <option value='quality testing' className="text-black">Quality Testing</option>
                                <option value='dust cleaning' className="text-black">Dust Cleaning</option>
                            </select>
                            
                        </div>

                        <div className="flex flex-col gap-2 w-full contacttext">
                            <textarea name="message" value={form.message} onChange={handleChange} rows="4" required className="px-5 py-3 bg-transparent rounded-lg border border-gray-500" placeholder="Describe Your AC Problem"></textarea>
                            
                        </div>

                        <div>
                        <button type="submit" className="contacttext text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 duration-200">{loading ? "Sending..." : "Contact"} </button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}
