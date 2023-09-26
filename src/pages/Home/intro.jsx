import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function intro () {
  const target = [
    { id: 1, label: '台北市內湖區', color: '#a1a481',  text: '胡小姐已有中餐證照也對中式麵食及有興趣。天然不過分的調味，也自己手工臘肉、油蔥醬等。 每星期一、四、五，等你來搭伙！', img: require('./images/shop1-pic.png'), time: [17, 18, 19, 20] },
    { id: 2, label: '新北市新店區', color: '#bc7c96',  text: 'Gina平日開伙，每天採購的新鮮食材決定當日料理，目前提供外帶餐盒方式，拿到即可食用。（木薯炒雞肉看起來好好吃', img: require('./images/shop2-pic.png'), time: [12, 17, 18, 19, 20] },
    { id: 3, label: '台北市文山區', color: '#da7569',  text: '皓媽當全職家庭主婦近三年了，為家人烹煮健康的料理是她最大的樂趣。重視食材的品質，偏好營養均衡的料理，不過度調味。', img: require('./images/shop3-pic.png'), time: [11, 12, 17, 18, 19, 20] },
  ].map((item ,index) => {
    const timeList = item.time.map(sub => (<li key={ sub } className='bg-[#e5e5e5] leading-none py-[8px] px-[12px] rounded-full mr-[12px]'>{ sub }:00</li>))

    return (
      <li
        className={ `flex items-center mb-[40px] ${ index % 2 ? 'flex-row-reverse' : 'flex-row' }` }
        key={ item.id }
      >
        <img
          className='w-[250px] shrink-0'
          src={ item.img }
          alt={ item.label }
        />
        <div
          className={ `border-[4px] bg-white rounded-[4px] p-[20px] ${ index % 2 ? 'mr-[40px]' : 'ml-[40px]' }` }
          style={{ borderColor: item.color }}>
          <h3 className='text-[28px] font-bold mb-[12px]'>{ item.label }</h3>
          <p className='text-[24px] leading-10 tracking-wide'>{ item.text }</p>
          <div className='flex items-center justify-between mt-[16px]'>          
            <ul className='flex items-center'>
              { timeList }
            </ul>
            <div className='cursor-pointer text-[#da7569]'>
              觀看更多
              <FontAwesomeIcon icon={ faAngleRight } className='ml-[10px]' size='lg' />
            </div>
          </div>
        </div>
      </li>
    )
  })

  return (
    <section className='intro__wrap bg-[#f2e4d4]'>
      <div className='intro__container max-w-[1320px] mx-auto py-[60px] px-[10px]'>
        <h2 className='text-[36px] text-center font-bold mb-[60px] tracking-wide'>商家介紹</h2>
        <ul>
          { target }
        </ul>
      </div>
    </section>
  )
}
