import { Header } from "../components/Header";

export default function RankingUnavailable() {
  return (
    <div>
      <div className='sticky z-10 top-0 bg-green-200'>
        <Header />
      </div>
      <div className="flex justify-center mt-20">
        <div>
          <img src="/sorry.png" alt="sorry" className="w-1/3 h-1/3" />
        </div>
      </div>
      <p className="text-center mt-4 text-2xl text-gray-600">準備中</p>
    </div>
  )
}
