import { FC, useState } from 'react';
import { useRouter } from 'next/router';

type Props = {
  questionNo: number;
  setQuestionNo: (questionNo: number) => void;
  setShowRankingModal: (showRankingModal: boolean) => void;
}

export const RegisterRankingModal: FC<Props> = (props) => {

  const { questionNo, setQuestionNo, setShowRankingModal } = props
  const [isRegisterRankingCompleted, setIsRegisterRankingCompleted] = useState(false)
  const router = useRouter();

  const registerRankingCompleted = () => {
    setIsRegisterRankingCompleted(true);
  }

  return (

    <div className="absolute bg-black inset-0 bg-opacity-60 flex justify-center items-center z-10">
      {!isRegisterRankingCompleted ? (
        <div id="authentication-modal" className="overflow-y-auto overflow-x-hidden z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog">
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="py-6 px-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">ランキングとうろく</h3>
                <form className="space-y-6" action="#">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">なまえ</label>
                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="なまえを入力してね" required />
                  </div>
                  <button type="button" className="w-1/3 block ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={registerRankingCompleted}>とうろく</button>
                </form>
              </div>
            </div>
          </div>
        </div>) : (
        <div id="authentication-modal" className="overflow-y-auto overflow-x-hidden z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog">
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="py-6 px-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">とうろくが完了しました。</h3>
                <div className="flex flex-row justify-between w-60 mx-auto">
                  <button type="button" className="sort-btn text-sm" onClick={() => router.push('/ranking')}>ランキングをみる</button>
                  <button type="button" className="back-to-top-btn" onClick={() => router.push('/')}>Topに戻る</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
