export default function partner () {
  const target = [
    { id: 'taipei', label: '台北市', count: 11, color: '#da7569' },
    { id: 'new-taipei', label: '新北市', count: 11, color: '#a1a481' },
    { id: 'taichung', label: '台中市', count: 10, color: '#bc7c96' },
    { id: 'tainan', label: '台南市', count: 12, color: '#a1a481' },
    { id: 'kaohsiung', label: '高雄市', count: 16, color: '#da7569' },
  ].map(item => {
    return (
      <li
        key={ item.id }
        className='border-[4px] text-[20px] flex flex-col items-center justify-center w-[150px] mx-[8px]'
        style={{ borderColor: item.color }}
      >
        <div
          className='partner__title text-[20px] text-white rounded-full py-[10px] px-[18px] relative transform -translate-y-1/2'
          style={{ backgroundColor: item.color }}
        >{ item.label }</div>
        <p className='partner__text flex flex-col items-center leading-10 mt-[24px] mb-[50px]'>
          <span>已累積</span>
          <span className='partner__count'>{ item.count } 間</span>
        </p>

      </li>
    )
  })

  return (
    <section className='partner__wrap bg-[#f2e4d4]'>
      <div className='partner__container max-w-[1320px] mx-auto py-[60px] px-[10px]'>
        <h2 className='text-[36px] text-center font-bold tracking-wide'>我們的夥伴</h2>
        <ul className='flex justify-center py-[80px]'>{ target }</ul>
      </div>
    </section>
  )
}
