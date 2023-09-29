import { SERVE_ARTICLE_LIST } from '@/assets/data.js'
import { useParams } from 'react-router-dom'

export default function Serve () {
  const params = useParams()
  const target = SERVE_ARTICLE_LIST.find(item => item.id === params.id)

  return (
    <div className='serve__wrap bg-[#f2e4d4] h-full'>
      <div className='serve__container max-w-[1220px] mx-auto px-[10px] py-[100px]'>
        {
          target
          ? <article>
              <h1 className='text-[30px] font-bold mb-[40px]'>{ target.label }</h1>
              <div dangerouslySetInnerHTML={{ __html: target.context }}></div>
            </article>
          : <div className='text-center text-[30px] font-bold my-[60px]'>沒有文章哦 ( ´ﾟДﾟ`)</div>
        }
      </div>
    </div>
  )
}