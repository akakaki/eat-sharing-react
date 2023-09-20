import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function ViewMenu () {
  const list = [
    { id: 'about', label: '關於我們' },
    { id: 'news', label: '最新消息' },
    { id: 'member', label: '會員專區' },
    { id: 'center', label: '共餐據點' },
  ].map(item => {
    return <Link className='ml-[18px] text-[#da7569]' to={ item.id } key={ item.id }>{ item.label }</Link>
  })

  return (
    <div className='ml-auto'>
      { list }
      <Link className='ml-[18px]' to="/member"><FontAwesomeIcon className='text-[#da7569]' icon={ faUser } size="lg" /></Link>
    </div>
  )
}

export default function Header () {
  return (
    <header className='bg-white shadow-md relative'>
      <div className='header__container max-w-[1320px] mx-auto py-[14px] px-[10px] flex items-center'>
        <Link to="/"><img className='w-[182px]' src={ require('@/assets/images/logo.png') } alt='logo' /></Link>
        <ViewMenu />
      </div>
    </header>
  )
}