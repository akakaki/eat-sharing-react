import { NEWS_LIST } from '@/assets/data.js'
import { useParams } from 'react-router-dom'

export default function Detail () {
  const params = useParams()
  const target = NEWS_LIST.find(item => item.id === Number(params.id))

  return (
    <div className='news-detail__wrap bg-[#f2e4d4] h-full'>
      <div className='news-detail__container max-w-[1220px] mx-auto px-[10px] py-[100px]'>
        <section className='text-[18px] leading-10'>
          {
            target
            ? <article>
                <h1 className='text-[30px] font-bold mb-[40px]'>{ target.title }</h1>
                <div className='flex'>
                  <div>{ target.type }</div>
                  <div className='ml-auto'>{ `日期: ${ target.time } 瀏覽人數: ${target.visitors}` }</div>
                </div>
                <div className='' dangerouslySetInnerHTML={{ __html: target.detail }}></div>
              </article>
            : <div className='text-center text-[30px] font-bold my-[60px]'>沒有文章哦 ( ´ﾟДﾟ`)</div>
          }

        </section>
      </div>
    </div>
  )
}
