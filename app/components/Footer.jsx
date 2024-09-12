import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (

    <footer className="mt-auto w-full py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-gray-800">

        <div className="text-center">
            <Link href={'/'} className="flex gap-2 justify-center">
                <Image src={'/amiya.png'} alt="i" width={100} height={100} />
                <p className="flex-none text-xl font-semibold text-white">BDSCS</p>
            </Link>


            <div className="mt-3">
                <p className="text-gray-500 dark:text-neutral-500">BD Speed Cooling Solution Reliable AC Servicing Agency</p>
                <p className="text-gray-500 dark:text-neutral-500">© BDSCS. 2023 All rights reserved.</p>
            </div>

        </div>

    </footer>

  )
}
