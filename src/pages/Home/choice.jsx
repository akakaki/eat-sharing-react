export default function choice () {
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
