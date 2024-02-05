import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useSelector } from 'react-redux'
import { NEWS_LIST } from '@/assets/data.js'
import dayjs from 'dayjs'

function News () {
  const isMobile = useSelector(state => state.store.isMobile)

  const target = NEWS_LIST.slice(0, 3).map((item, index) => {
    return (
      <tr
        key={ item.id }
      >
        <td><div className='w-[50px] h-[50px] flex items-center justify-center leading-none rounded-full bg-[#da7569] text-white font-bold my-[8px]'>{ index + 1 }</div></td>
        <td className='text-center'>{ dayjs(item.time).format('YYYY-MM-DD') }</td>
        <td><span className='truncate w-[90%] block'>{ item.title }</span></td>
        <td className='text-right'>{ item.visitors }</td>
      </tr>
    )
  })

  return (
    <article className={ `news__wrap bg-[#efc4c4] bg-opacity-50 ${ !isMobile && 'col-span-2'  }` }>
      <div className='news__container p-[24px] relative'>
        <h2 className='absolute top-[-40px] left-[24px] bg-[#eec7ae] font-bold text-[24px] w-[80px] py-[20px] px-[10px] text-center tracking-wide'>最新消息</h2>
        <table className='text-[24px] w-full'>
          <tbody>
            <tr className='border-b-[1px] border-[#da7569]'>
              <th></th>
              <th className='pb-[10px]'>發布時間</th>
              <th className='pb-[10px]'>標題</th>
              <th className='pb-[10px]'>點閱人數</th>
            </tr>
            { target }
          </tbody>
        </table>
      </div>
    </article>
  )
}

function Fee () {
  return (
    <article className='fee__wrap bg-[#eaa69d]'>
      <div className='fee__container p-[40px]'>
        <div className='new__item border-b-[2px] border-b-[#000] relative'>
          <h2 className='absolute top-0 left-[-60px] bg-[#eec7ae] font-bold text-[24px] w-[80px] py-[20px] px-[10px] text-center tracking-wide'>收費標準</h2>
          <p className='text-[24px] text-center leading-10 pb-[20px]'>依店家規定<br/>收費範圍在50~120元間</p>
        </div>
        <div className='new__item relative pl-[40px] pt-[40px]'>
          <h2 className='absolute top-[44px] left-[-60px] bg-[#eec7ae] font-bold text-[24px] w-[80px] py-[20px] px-[10px] text-center tracking-wide'>搭伙時段</h2>
          <div className='flex items-center text-[24px] mb-[20px]'>
            <p className=''>中午時段</p>
            <div className='flex items-center'>
              <span className='bg-[#e5e5e5] py-[6px] px-[12px] mx-[4px] rounded-[6px]'>11</span>
              <span className='bg-[#e5e5e5] py-[6px] px-[12px] mx-[4px] rounded-[6px]'>~</span>
              <span className='bg-[#e5e5e5] py-[6px] px-[12px] mx-[4px] rounded-[6px]'>13</span>
            </div>
          </div>
          <div className='flex items-center text-[24px]'>
            <p className=''>晚間時段</p>
            <div className='flex items-center'>
              <span className='bg-[#e5e5e5] py-[6px] px-[12px] mx-[4px] rounded-[6px]'>17</span>
              <span className='bg-[#e5e5e5] py-[6px] px-[12px] mx-[4px] rounded-[6px]'>~</span>
              <span className='bg-[#e5e5e5] py-[6px] px-[12px] mx-[4px] rounded-[6px]'>20</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function ViewNews () {
  const isMobile = useSelector(state => state.store.isMobile)

  return (
    <section className='info__wrap bg-[#f2e4d4]'>
      <div
        className={ `info__container max-w-[1220px] mx-auto py-[60px] px-[10px] ${ !isMobile && 'grid gap-[20px] grid-cols-3' }` }
      >
        <News />
        <Fee />
      </div>
    </section>
  )
}
