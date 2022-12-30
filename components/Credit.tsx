export const Credit = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20 h-32 text-xs ">
      <p className="text-gray-500">出典</p>
      <p className="text-gray-500">
        ポケモン名（英語）の由来：
        <a href="https://wiki.xn--rckteqa2e.com/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8" rel="noopener noreferrer" target="_blank" className='text-blue-500'>
          ポケモンWiki
        </a>
      </p>
      <p className="text-gray-500">
        英語音源：
        <a href="https://ondoku3.com/ja/" rel="noopener noreferrer" target="_blank" className='text-blue-500'>
          &copy;音読さん
        </a>
      </p>
    </div>
  )
}
