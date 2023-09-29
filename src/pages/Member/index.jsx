import { useSelector } from 'react-redux'

export default function Member () {
  const info = useSelector(state => state.store.info)

  const asideList = [
    { id: 'account', label: '會員資料' },
    { id: 'reserve', label: '搭伙預約' },
    { id: 'reserveLog', label: '搭伙紀錄' },
    { id: 'review', label: '開伙審核' },
    { id: 'reviewLog', label: '開伙紀錄' },
  ].map(item => (<li key={ item.id }>{ item.label }</li>))

  return (
    <div className='member__wrap'>
      <div className='member__container'>
        <section className='flex'>
          <aside>
            <div>一起吃飯 EatSharing</div>
            <ul>
              { asideList }
            </ul>
          </aside>
          <main>
            { Object.entries(info).map(([key, value]) => (<div key={ key }>{key} : {value}</div>)) }
          </main>
        </section>
      </div>
    </div>
  )
}