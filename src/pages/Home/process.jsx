import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

export default function process () {
  const target = [
    { id: 0, label: '註冊會員<br>填寫基本資料', img: require('./images/step1.png') },
    { id: 1, label: '登入會員<br>啟動後臺', img: require('./images/step2.png') },
    { id: 2, label: '搜尋店家<br>選擇時段', img: require('./images/step3.png') },
    { id: 3, label: '預約時間<br>享用美食', img: require('./images/step4.png') },
    { id: 4, label: '選擇現金<br>或綁定金流付款', img: require('./images/step5.png') },
  ].map((item, index, arr) => {
    return (
      <li className='relative' key={ item.id }>
        <i className='absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 z-10 text-[160px] text-[#f2e4d4] font-bold not-italic'>{ index + 1 }</i>
        <img
          src={ item.img }
          alt={ item.label }
          className='w-[150px] relative z-20 mb-[16px]'
        />
        <h3
          dangerouslySetInnerHTML={{ __html: item.label }}
          className='text-[24px] text-center font-bold leading-10'
        ></h3>
        <FontAwesomeIcon
          icon={ faCaretRight }
          className={ `absolute -right-1/2 top-1/2 transform -translate-y-1/2 translate-x-1/2 ${ index < arr.length - 1 ? '' : 'hidden' }` }
          size='2xl'
        />
      </li>
    )
  })
  return (
    <section className='process__wrap bg-cover bg-no-repeat bg-center relative z-0' style={{ backgroundImage: `url(${require('./images/index_bg.png')})` }}>
      <div className='process__container max-w-[1320px] mx-auto pt-[80px] pb-[120px] px-[10px]'>
        <h2 className='text-[36px] text-center font-bold mb-[60px] tracking-wide'>使用流程</h2>
        <ul className='flex items-center justify-between'>
          { target }
        </ul>
      </div>
    </section>
  )
}
