import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

function News () {
  const target = [
    { id: 1, time: '2022-01-10', label: '共餐平台網站建立', people: 600 },
    { id: 2, time: '2022-01-09', label: '[徵求開伙人&搭伙人]', people: 1262 },
    { id: 3, time: '2022-01-08', label: '家庭廚師來領獎!', people: 1735 },
  ].map((item, index) => {
    return (
      <tr
        className=''
        key={ item.id }
      >
        <td>{ index + 1 }</td>
        <td>{ item.time }</td>
        <td>{ item.label }</td>
        <td>{ item.people }</td>
      </tr>
    )
  })

  return (
    <section className='news__wrap bg-[#efc4c4] col-span-2'>
      <div className='news__container'>
        <h2>最新消息</h2>
        <table>
          <tr>
            <th></th>
            <th>發布時間</th>
            <th>標題</th>
            <th>點閱人數</th>
          </tr>
          { target }
        </table>
      </div>
    </section>
  )
}

function Banner () {
  const target = [
    { id: 1, label: '健康減油氣炸鍋', color: '#bfc783', img: require('./images/swiper-pot.png') },
    { id: 2, label: '新鮮食材在這裡', color: '#e0ab77', img: require('./images/swiper-vegetable.jpg') },
  ].map(item => {
    return (
      <SwiperSlide>
        <img src={ item.img } alt={ item.label } />
        <p
          className='absolute top-0 left-0 w-full h-full text-white text-[28px] font-bold flex items-center justify-center opacity-90'
          style={{ backgroundColor: item.color }}
        >{ item.label }</p>
      </SwiperSlide>
    )
  })

  return (
    <div className='Banner__wrap'>
      <div className='Banner__container'>
        <Swiper>
          { target }
        </Swiper>
      </div>
    </div>
  )
}

function Fee () {
  return (
    <div className='fee__wrap bg-[#eaa69d]'>
      <div className='fee__container'>
        <div className='new__item'>
          <h3 className=''>收費標準</h3>
          <p className=''>依店家規定<br/>收費範圍在50~120元間</p>
        </div>
        <div className='new__item'>
          <h3 className="">搭伙時段</h3>
          <div>
            <p className=''>中午時段</p>
            <div>
              <span>11</span>
              <span>~</span>
              <span>13</span>
            </div>
          </div>
          <div>
            <p className=''>晚間時段</p>
            <div>
              <span>17</span>
              <span>~</span>
              <span>20</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Team () {
  const target = [
    { id: 0, name: 'Mason', img: require('./images/member-pic1.png') },
    { id: 1, name: 'Aston', img: require('./images/member-pic2.png') },
    { id: 2, name: 'Annie', img: require('./images/member-pic3.png') },
    { id: 3, name: 'Daisy', img: require('./images/member-pic4.png') },
  ].map(item => {
    return (
      <li className='inline-flex flex-col items-center justify-center mx-[12px]'>
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
    <div className='team__wrap bg-[#eec7ae] col-span-2'>
      <div className='team__container flex flex-col items-center justify-center p-[20px]'>
        <h2 className='team__title text-[24px] bg-[#e8dbcc] font-bold py-[8px] px-[20px] mb-[12px]'>團隊介紹</h2>
        <ul className='flex items-center'>
          { target }
        </ul>
      </div>
    </div>
  )
}

export default function ViewNews () {
  return (
    <div className='info__wrap bg-[#f2e4d4]'>
      <div
        className='info__container max-w-[1320px] mx-auto py-[60px] px-[10px] grid grid-cols-3 gap-[20px]'
      >
        <News />
        <Banner />
        <Fee />
        <Team />
      </div>
    </div>
  )
}
