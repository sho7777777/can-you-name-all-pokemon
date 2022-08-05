import Image from "next/image";
import { Header } from "../components/Header";

export default function NotFound() {
  return (
    <div>
      <div className='sticky z-10 top-0 bg-green-200'>
        <Header />
      </div>
      <div className="flex justify-center mt-20 h-screen">
        <div>
          <Image src="/404.png" alt="404 page" width={300} height={300} />
        </div>

      </div>

    </div>
  )
}
