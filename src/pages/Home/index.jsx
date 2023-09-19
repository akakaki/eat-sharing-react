import { useSelector, useDispatch } from 'react-redux'
// import { increment } from '@/store/index.js'

function ViewBanner () {
  const target = [
    '是否燒著一手好菜的你，此刻找不到人和你一同分享?',
    '每天都不知道晚餐要吃什麼了嗎?',
    '覺得很孤單，想找回和家人一起吃飯的感覺嗎?',
    '你想念媽媽的晚餐嗎？',
  ].map(item => (<p className='leading-[3]' key={ item.id }>{ item }</p>))

  return (
    <section className='home-banner__wrap bg-[#f2e4d4] pt-[160px] pb-[480px]'>
      <div className='home-banner__container max-w-[1320px] mx-auto px-[10px] relative'>
        <img className='w-[196px] absolute top-0 left-[120px] transform -rotate-24' src={ require('./images/banner1.png') } alt="" />
        <img className='w-[140px] absolute top-[-20px] right-[180px] transform rotate-20' src={ require('./images/banner2.png') } alt="" />
        <img className='w-[100px] absolute bottom-0 right-[240px] transform -rotate-12' src={ require('./images/banner3.png') } alt="" />
        <article className='text-center text-[#555] text-[20px]'>
          { target }
        </article>
      </div>
    </section>
  )
}

function ViewPain () {
  const target = [
    { id: 'pain1', img: require('./images/pain1.jpg'), color: '#da7569' },
    { id: 'pain2', img: require('./images/pain2.jpg'), color: '#a1a481' },
  ].map(item => (
      <div className='pain__item border-[6px] rounded-[4px] w-[520px] h-[360px] mx-auto' key={ item.id } style={{ borderColor: item.color }}>
        <img className='h-full w-full object-cover' src={ item.img } alt="" />
      </div>
  ))

  return (
    <section className='pain__wrap bg-[#f2e4d4]'>
      <div className='pain__container max-w-[1320px] mx-auto py-[20px] px-[10px]'>
        <div className="pain__list grid grid-cols-2 gap-[30px]">
          { target }
        </div>
      </div>
    </section>
  )
}

function ViewBelief () {
  return (
    <section className='belief__wrap  bg-[#f2e4d4]'>
      <div className='belief__container max-w-[1320px] mx-auto py-[60px] px-[10px]'>
        <div className="flex items-center">
          <img className='w-[700px] h-[500px]' src={ require('./images/belief.png') } alt="" />
          <article className='belief__article bg-white bg-opacity-80 p-[16px] w-[460px] ml-[-30px]'>
            <div className='belief__title text-[28px] mb-[16px] text-center font-bold'>我們的理念</div>
            <p className='belief__text leading-8 text-justify'>在這個快速的世代，我們的搭伙平台，你可以快速方便的搭伙機會，提供健康、安心的餐點，立即搜尋家裡附近合適的餐點供應者，留言搭伙並自行連絡領取餐點，享受家的味道！免費分享自己的家常餐點，介紹你的伙食，管理你的訂單，順便賺點外快！們提供一個共餐平台，解決你吃飯問題。</p>
          </article>
        </div>
      </div>
    </section>
  )
}

function ViewChoice () {
  const target = [
    { id: 'fire', label: '我要開伙', img: require('./images/choice-fire.png'), html: '不吝分享您的廚藝<br>讓想念家常菜的遊子飽餐一頓' },
    { id: 'join', label: '我要搭伙', img: require('./images/choice-join.png'), html: '您可以利用平台預約<br>選擇離您最近的食堂' },
  ].map(item => (
    <div className='choice__item mx-[20px]' key={ item.id } >
      <img src={ item.img } alt={ item.label } />
      <p dangerouslySetInnerHTML={{ __html: item.html }}></p>
      <div>{ item.label }</div>
    </div>
  ))

  return (
    <section className='choice__wrap bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${require('./images/index_bg.png')})` }}>
      <div className='choice__container max-w-[1320px] mx-auto py-[60px] px-[10px]'>
        <div className='choice__title text-center text-[32px] font-bold mb-[60px]'>選擇您的需求</div>
        <article className='choice__article flex items-center justify-center'>
          { target }
        </article>
      </div>
    </section>
  )
}

function ViewNews () {
  return (
    <section className='news__wrap'>
      <div className='news__container'>
      </div>
    </section>
  )
}

export default function Home () {
  const counter = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='home__wrap'>
      <div className='home__container'>
        <ViewBanner />
        <ViewPain />
        <ViewBelief />
        <ViewChoice />
        <ViewNews />
        {/* <div onClick={() => dispatch(increment())}>button</div>
        <div>{ counter }</div> */}
      </div>
    </div>
  )
}