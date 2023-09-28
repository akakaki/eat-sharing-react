import { Link, NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

function ViewMenu () {
  const isMobile = useSelector(state => state.store.isMobile)

  const list = [
    { id: 'about', label: '關於我們' },
    { id: 'news', label: '最新消息' },
    { id: 'member', label: '會員專區' },
    { id: 'center', label: '共餐據點' },
  ].map(item => {
    return (<NavLink
      className={ ({ isActive }) => `ml-[34px] ${ isActive ? 'font-bold text-[#975047]' : 'text-[#da7569]' }` }
      to={ item.id }
      key={ item.id }>{ item.label }</NavLink>)
  })


  return (
    <div className='ml-auto'>
      { !isMobile && list }
      <Link className='ml-[34px]' to="/member"><FontAwesomeIcon className='text-[#da7569]' icon={ faUser } size="lg" /></Link>
    </div>
  )
}

export default function Header () {
  return (
    <header className='bg-white shadow-md relative sticky top-0 z-20'>
      <div className='header__container max-w-[1320px] mx-auto py-[14px] px-[10px] flex items-center'>
        <Link to="/"><img className='w-[182px]' src={ require('@/assets/images/logo.png') } alt='logo' /></Link>
        <ViewMenu />
      </div>
    </header>
  )
}