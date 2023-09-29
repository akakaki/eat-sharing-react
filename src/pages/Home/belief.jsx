import { useSelector } from 'react-redux'

export default function belief () {
  const isMobile = useSelector(state => state.store.isMobile)

  return (
    <section className='belief__wrap  bg-[#f2e4d4]'>
      <div className='belief__container max-w-[1220px] mx-auto py-[60px] px-[10px]'>
        <div className={ `flex items-center ${ isMobile && 'flex-col'}` }>
          <img className={ `${ isMobile ? '' : 'w-[700px] h-[500px]' }` } src={ require('./images/belief.png') } alt="" />
          <article
            className={ `belief__article bg-white bg-opacity-80 ${ isMobile ? '' : 'p-[16px] w-[460px] ml-[-30px]' }` }
          >
            <h2 className='belief__title text-[28px] mb-[16px] text-center font-bold tracking-wide'>我們的理念</h2>
            <p className='belief__text leading-8 text-justify'>在這個快速的世代，我們的搭伙平台，你可以快速方便的搭伙機會，提供健康、安心的餐點，立即搜尋家裡附近合適的餐點供應者，留言搭伙並自行連絡領取餐點，享受家的味道！免費分享自己的家常餐點，介紹你的伙食，管理你的訂單，順便賺點外快！們提供一個共餐平台，解決你吃飯問題。</p>
          </article>
        </div>
      </div>
    </section>
  )
}
