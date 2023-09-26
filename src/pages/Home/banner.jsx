import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function banner () {
  useEffect(() => {
    AOS.init()
    // AOS.refresh()
  }, [])

  const target = [
    '是否燒著一手好菜的你，此刻找不到人和你一同分享？',
    '每天都不知道晚餐要吃什麼了嗎?',
    '覺得很孤單，想找回和家人一起吃飯的感覺嗎？',
    '你想念媽媽的晚餐嗎？',
  ].map((item, index) => (<span className='leading-[3] block' key={ index }>{ item }</span>))

  return (
    <section
      className='banner__wrap bg-[#f2e4d4] pt-[160px] pb-[480px]'
    >
      <div className='banner__container max-w-[1320px] mx-auto px-[10px] relative'>
        <div
          className='w-[196px] absolute top-0 left-[120px] transform -rotate-24'
        >
          <img
            data-aos='fade-down-right'
            data-aos-duration='1000'
            data-aos-delay='500'
            src={ require('./images/banner1.png') }
          />
        </div>
        <div
          className='w-[140px] absolute top-[-20px] right-[180px] transform rotate-20'
        >
          <img
            data-aos='fade-down-left'
            data-aos-duration='1000'
            data-aos-anchor-placement='top-bottom'
            data-aos-delay='800'
            src={ require('./images/banner2.png') } />
        </div>
        <div
          className='w-[100px] absolute bottom-0 right-[240px] transform -rotate-12'
        >
          <img
            data-aos='fade-up-left'
            data-aos-duration='1000'
            data-aos-delay='3200'
            src={ require('./images/banner3.png') }
          />
        </div>
        <h1 className='text-center text-[#555] text-[20px]'>
          { target }
        </h1>
      </div>
    </section>
  )
}
