import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";


export default function notfound() {
  return (
    <div className="flex flex-col justify-center items-center h-[40.22rem]">
        <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl">404</h1>
        <p className="mt-3 text-gray-600 dark:text-neutral-400">Oops, something went wrong.</p>
        <p className="text-gray-600 dark:text-neutral-400">Sorry, we couldn&apos;t find your page.</p>

        <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <Link href="/" className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
            <FaArrowLeft />
                Back to examples
            </Link>
        </div>
    </div>
  )
}
