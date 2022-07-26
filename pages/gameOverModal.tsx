import { useRouter } from "next/router";

export const GameOverModal = (props) => {

  const { questionNo, setQuestionNo, setGameOver } = props;
  const router = useRouter()

  const restart = () => {
    setQuestionNo(0)
    setGameOver(false)
  }

  const returnTopPage = () => {
    router.push('/')
  }

  return (
    <div className="absolute bg-black inset-0 bg-opacity-60 flex justify-center items-center z-10">
      <div className="relative bg-gray-200 max-w-sm w-80 rounded">
        <div className="flex justify-between items-center opacity-100">
          <h4 className="text-gray-600 text-2xl font-bold mx-auto">Game Over...</h4>
        </div>
        <p className="text-gray-600 text-lg mt-2 text-center">あなたの記録は {questionNo} 匹です。</p>
        <div className="flex justify-between my-2 mx-5 space-x-2">
          <button className="text-white bg-emerald-600 hover:bg-emerald-400 rounded p-1" onClick={restart}>再チャレンジ！</button>
          <button className="text-black bg-red-500 hover:bg-red-400 rounded p-1" onClick={returnTopPage}>Topに戻る</button>
        </div>
      </div>
    </div>

  )
}
