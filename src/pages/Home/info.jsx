import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useSelector } from 'react-redux'

function News () {
  const isMobile = useSelector(state => state.store.isMobile)

  const target = [
    { id: 1, time: '2022-01-10', label: '共餐平台網站建立', people: 600 },
    { id: 2, time: '2022-01-09', label: '[徵求開伙人&搭伙人]', people: 1262 },
    { id: 3, time: '2022-01-08', label: '家庭廚師來領獎!', people: 1735 },
  ].map((item, index) => {
    return (
      <tr
        key={ item.id }
      >
        <td><div className='w-[50px] h-[50px] flex items-center justify-center leading-none rounded-full bg-[#da7569] text-white font-bold my-[8px]'>{ index + 1 }</div></td>
        <td className='text-center'>{ item.time }</td>
        <td className='text-center'>{ item.label }</td>
        <td className='text-center'>{ item.people }</td>
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
              <th className=''></th>
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

function Banner () {
  const target = [
    { id: 1, label: '健康減油氣炸鍋', color: '#bfc783', img: require('./images/swiper-pot.png') },
    { id: 2, label: '新鮮食材在這裡', color: '#e0ab77', img: require('./images/swiper-vegetable.jpg') },
  ].map(item => {
    return (
      <SwiperSlide key={ item.id }>
        <img 
          className='h-full w-full object-cover object-center h-[285px]'
          src={ item.img }
          alt={ item.label }
        />
        <p
          className='absolute top-0 left-0 w-full h-full text-white text-[28px] font-bold flex items-center justify-center opacity-90'
          style={{ backgroundColor: item.color }}
        >{ item.label }</p>
      </SwiperSlide>
    )
  })

  return (
    <article className='Banner__wrap'>
      <div className='Banner__container'>
        <Swiper>
          { target }
        </Swiper>
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

function Team () {
  const isMobile = useSelector(state => state.store.isMobile)

  const target = [
    { id: 0, name: 'Mason', img: require('./images/member-pic1.png') },
    { id: 1, name: 'Aston', img: require('./images/member-pic2.png') },
    { id: 2, name: 'Annie', img: require('./images/member-pic3.png') },
    { id: 3, name: 'Daisy', img: require('./images/member-pic4.png') },
  ].map(item => {
    return (
      <li
        className='inline-flex flex-col items-center justify-center mx-[12px]'
        key={ item.id }
      >
        <img
          className='w-[150px] mb-[8px]'
          src={ item.img }
          alt={ item.name }
        />
        <div className='text-[24px] mb-[20px]'>{ item.name }</div>
      </li>
    )
  })

  return (
    <article className={ `team__wrap bg-[#eec7ae] ${ isMobile && 'col-span-2' }` }>
      <div className='team__container flex flex-col items-center justify-center p-[20px]'>
        <h2 className='team__title text-[24px] bg-[#e8dbcc] font-bold py-[8px] px-[20px] mb-[12px] tracking-wide'>團隊介紹</h2>
        <ul className='flex items-center'>
          { target }
        </ul>
      </div>
    </article>
  )
}

export default function ViewNews () {
  const isMobile = useSelector(state => state.store.isMobile)

  return (
    <section className='info__wrap bg-[#f2e4d4]'>
      <div
        className={ `info__container max-w-[1320px] mx-auto py-[60px] px-[10px] ${ isMobile ? '' : 'grid gap-[20px] grid-cols-3' }` }
      >
        <News />
        <Banner />
        <Fee />
        <Team />
      </div>
    </section>
  )
}
