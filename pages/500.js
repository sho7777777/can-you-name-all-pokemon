import { Header } from "../components/Header";

export default function NotFound() {
  return (
    <div>
      <div className='sticky z-10 top-0 bg-green-200'>
        <Header />
      </div>
      <div className="flex justify-center mt-20 h-screen">
        <div className="w-1/3 h-1/3">
          <img src="/500.png" alt="404 page" />
        </div>

      </div>

    </div>
  )
}
