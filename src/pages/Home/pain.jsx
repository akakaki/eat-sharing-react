export default function pain () {
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