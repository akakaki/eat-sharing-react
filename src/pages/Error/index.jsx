import { Link } from 'react-router-dom'

export default function Error () {
  return (
    <div className='error__wrap absolute h-full w-full'>
      <div className='error__container h-full w-full flex flex-col items-center justify-center overflow-auto'>
        <div className='text-[66px] font-bold mb-[30px]'>Oops!</div>
        <div className='text-[30px] font-bold mb-[16px]'>晚安瑪卡巴卡 =)</div>
        <div className='text-[14px] opacity-40 mb-[40px]'>Not Found Page</div>
        <Link
          className='text-[14px] opacity-40 text-[#000] border-[1px] border-[#000] py-[8px] px-[29px] leading-none rounded-[4px] cursor-pointer transition-all duration-500 hover:opacity-100 hover:bg-[#000] hover:text-white'
          to='/'
        >前往首頁</Link>
      </div>
    </div>
  )
}