import { Link } from 'react-router-dom'

function ViewMenu () {
  const list = [
    { id: 'about', label: '關於我們' },
    { id: 'news', label: '最新消息' },
    { id: 'member', label: '會員專區' },
    { id: 'center', label: '共餐據點' },
  ].map(item => {
    return <Link className='ml-[12px] text-[#da7569]' to={ item.id } key={ item.id }>{ item.label }</Link>
  })

  return (
    <div>
      {/* <Link to="/">index</Link> */}
      { list }
    </div>
  )
}

export default function Header () {
  return (
    <header className='bg-white shadow-lg'>
      <div className='header__container max-w-[1220px] mx-auto p-[10px] flex items-center justify-between'>
        <img className='w-[182px]' src={ require('@/assets/images/logo.png') } alt='logo' />
        <ViewMenu />
      </div>
    </header>
  )
}