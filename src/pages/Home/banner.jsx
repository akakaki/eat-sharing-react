export default function banner () {
  const target = [
    '是否燒著一手好菜的你，此刻找不到人和你一同分享?',
    '每天都不知道晚餐要吃什麼了嗎?',
    '覺得很孤單，想找回和家人一起吃飯的感覺嗎?',
    '你想念媽媽的晚餐嗎？',
  ].map((item, index) => (<p className='leading-[3]' key={ index }>{ item }</p>))

  return (
    <section className='banner__wrap bg-[#f2e4d4] pt-[160px] pb-[480px]'>
      <div className='banner__container max-w-[1320px] mx-auto px-[10px] relative'>
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
