import Image from "next/image";
import { Header } from "../components/Header";

export default function NotFound() {
  return (
    <div>
      <div className='sticky z-10 top-0 bg-green-200'>
        <Header />
      </div>
      <div className="flex justify-center mt-20">
        <div>
          <Image src="/sorry.png" alt="sorry page" width={300} height={300} />
        </div>
      </div>
      <p className="text-center mt-4 text-2xl text-gray-600">また明日きてね。</p>
    </div>
  )
}
