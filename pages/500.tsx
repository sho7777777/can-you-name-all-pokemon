import { Header } from "../components/organisms/LayoutOrgs/Header";

export default function ServerError() {
  return (
    <div>
      <div className='sticky z-10 top-0 bg-green-200'>
        <Header />
      </div>
      <div className="flex justify-center mt-20 h-screen">
        <div className="w-1/2 h-1/2 md:w-1/4 md:h-1/4">
          <img src="/500.png" alt="500 page" />
          <p className="text-center">サーバーエラーが発生しました。</p>
        </div>

      </div>
    </div>
  )
}
