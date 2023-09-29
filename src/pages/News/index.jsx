import { NEWS_LIST } from '@/assets/data.js'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

export default function News () {
  const list = NEWS_LIST.map((item, index) => {
    return (
      <Link
        key={ item.id }
        className='mb-[20px]'
        to={`/news/${item.id}`}
      >
        <div className='relative mb-[2px]'>
          <div className='h-[320px] bg-[#f2f2f2]'></div>
          <div className='absolute bottom-0 left-0 w-full p-[10px] truncate text-[24px] font-bold'>{ item.title }</div>
        </div>
        <div className='flex items-center justify-between'>
          <div className=''>{ dayjs(item.time).format('YYYY-MM-DD') }</div>
          <div className=''>{ `瀏覽人數: ${ item.visitors }` }</div>
        </div>
      </Link>
    )
  })

  return (
    <div className='news__wrap bg-[#f2e4d4] h-full'>
      <div className='news__container max-w-[1220px] mx-auto px-[10px] py-[100px]'>
        <section className='text-[18px] leading-10'>
          <article>
            <h1 className='text-[30px] font-bold mb-[40px]'>最新消息</h1>
            <div className=''>
              { list }
            </div>
          </article>
        </section>
      </div>
    </div>
  )
}