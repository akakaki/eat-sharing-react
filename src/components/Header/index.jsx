import { Link, NavLink,  } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setInfo } from '@/store/index.js'

function ViewMenu () {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isMobile = useSelector(state => state.store.isMobile)
  const info = useSelector(state => state.store.info)

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

  const action = () => {
    localStorage.removeItem('token')
    dispatch(setInfo(true))
    navigate('/')
  }


  return (
    <div className='ml-auto'>
      { !isMobile && list }
      {
        Object.keys(info).length
          ? <div
              className={ 'cursor-pointer ml-[34px] inline-flex items-center bg-[#da7569] py-[2px] px-[14px] rounded-full' }
              onClick={ () => action() }
            >
              <FontAwesomeIcon className={ Object.keys(info).length ? 'text-white' : 'text-[#da7569]' } icon={ faUser } size='sm' />
              <div className='ml-10px text-white'>登出</div>
            </div>
          : <Link
              className={ 'ml-[34px] inline-flex items-center' }
              to='/member'
            >
              <FontAwesomeIcon className={ Object.keys(info).length ? 'text-white' : 'text-[#da7569]' } icon={ faUser } size='lg' />
            </Link>
      }
    </div>
  )
}

export default function Header () {
  return (
    <header className='bg-white shadow-md relative sticky top-0 z-20'>
      <div className='header__container max-w-[1220px] mx-auto py-[14px] px-[10px] flex items-center'>
        <Link to="/"><img className='w-[182px]' src={ require('@/assets/images/logo.png') } alt='logo' /></Link>
        <ViewMenu />
      </div>
    </header>
  )
}