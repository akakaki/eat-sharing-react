import { useSelector } from 'react-redux'

export default function choice () {
  const isMobile = useSelector(state => state.store.isMobile)

  const target = [
    { id: 'fire', label: '我要開伙', color: '#9c506f', img: require('./images/choice-fire.png'), html: '不吝分享您的廚藝<br>讓想念家常菜的遊子飽餐一頓' },
    { id: 'join', label: '我要搭伙', color: '#ba8a63', img: require('./images/choice-join.png'), html: '您可以利用平台預約<br>選擇離您最近的食堂' },
  ].map(item => (
    <div
      className={ `choice__item cursor-pointer mx-[20px] max-w-[340px] border-[4px] rounded-[8px] p-[20px] flex flex-col items-center justify-center opacity-80 group hover:opacity-100 transition-all ${isMobile && 'mb-[16px]'}` }
      style={{ borderColor: item.color }}
      key={ item.id }
    >
      <img
        src={ item.img }
        alt={ item.label }
      />
      <p
        className='text-center mt-[30px] mb-[60px]'
        dangerouslySetInnerHTML={{ __html: item.html }}
      ></p>
      <div
        className='text-white text-center py-[20px] px-[34px] rounded-[8px] text-[24px] leading-none cursor-pointer'
        style={{ backgroundColor: item.color }}
      >{ item.label }</div>
    </div>
  ))

  return (
    <section className='choice__wrap bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${require('./images/index_bg.png')})` }}>
      <div className='choice__container max-w-[1220px] mx-auto py-[60px] px-[10px]'>
        <h2 className='choice__title text-[36px] text-center font-bold tracking-wide'>選擇您的需求</h2>
        <article
          className={ `choice__article flex items-center justify-center mt-[60px] ${isMobile && 'flex-col'}` }
        >
          { target }
        </article>
      </div>
    </section>
  )
}
