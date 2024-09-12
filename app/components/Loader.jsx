import { Html } from "@react-three/drei"


const Loader = () => {
  return (
    <Html>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-gray-800 rounded-full dark:text-white" role="status" aria-label="loading">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
    </Html>
  )
}

export default Loader