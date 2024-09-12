
import QuestionSection from "@/app/components/QuestionSection";
import { allservices } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";


export async function generateStaticParams() {
    return allservices.map(service => ({
      slug: service.slug,
    }));
  }

  export async function generateMetadata({ params }) {
    const { slug } = params;
    const service = allservices.find(service => service.slug === slug);
  
    if (!service) {
      return {
        notFound: true,
      };
    }
  
    return {
      title: service.service,
    };
  }
  

export default function ServiceDetails({params}) {

    const {slug} = params;
    const service = allservices.find(service => service.slug === slug);
    
    if (!service) {
        return <div>Service not found</div>;
    }

  return (
    <div>
        <section className="bg-center bg-no-repeat bg-cover bg-[url('/img/carousel-1.webp')] bg-gray-700 bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-40">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">{service.service}</h1>
            </div>
        </section>

        <div className="flex justify-center my-20">
            <div className="container max-w-6xl lg:px-0 px-5">
                <div className="flex lg:flex-row flex-col justify-between gap-10">

                    <div className="lg:w-[30rem] h-fit bg-gray-100 rounded-lg p-8 flex flex-col gap-5">
                        <h1  className="text-2xl font-semibold">Our <span className="text-orange-600">Services</span></h1>

                        <div className="flex lg:flex-col gap-5 flex-row flex-wrap">
                            {
                              allservices.map(srv => <div key={srv.id}>
                                <Link href={`/services/${srv.slug}`} className="flex justify-between rounded-lg items-center lg:gap-0 gap-2 bg-gray-700 p-3 text-white hover:bg-gray-700 hover:scale-105 duration-200">
                                { srv.service }
                                <FaPlus />
                                </Link>
                              </div>
                              )
                            }
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-10 justify-center">
                        <h1  className="capitalize text-4xl font-semibold">{ service.service }</h1>

                        <Image className="w-full md:max-w-3xl mx-auto rounded-lg" src={service.image} alt="i" width={500} height={500}/>

                        <h1 className="capitalize text-2xl font-semibold ">Description</h1>

                        <p>{ service.description }</p>

                        <h1 className="capitalize text-2xl font-semibold ">Service Overview</h1>

                        <div  className="flex md:flex-row flex-col gap-2 justify-center">
                            <Image className="w-full md:max-w-96 rounded-lg" width={500} height={500} src={service.image1} alt="i" />
                                
                            <Image className="w-full md:max-w-96 rounded-lg" width={500} height={500} src={service.image2} alt="i" />
                        </div>
                            

                        <p>{ service.serviceoverview }</p>
                    
                    </div>
                </div>
            </div>
        </div>

        <QuestionSection/>
    </div>
  )
}
