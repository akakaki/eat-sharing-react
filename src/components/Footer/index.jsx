import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPhone, faEnvelope, faComments } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { useSelector } from 'react-redux'

function FooterMenu () {
  const isMobile = useSelector(state => state.store.isMobile)

  const list = [
    { id: 'help', label: '幫助' },
    { id: 'manual', label: '使用手冊' },
    { id: 'translation', label: '常見問題' },
    { id: 'community', label: '社群守則' },
    { id: 'privacy', label: '隱私條款' },
  ].map(item => (
    <Link
      className={ `block text-white hover:underline ${ isMobile ? 'mr-[20px]' : 'mb-[14px] ' }` }
      key={ item.id }
      to={ `/serve/${item.id}` }
    >
      { item.label }
    </Link>)
  )

  return (
    <aside
      className={ `${ isMobile && 'flex flex-wrap mb-[14px] w-full' }` }
    >{ list }</aside>
  )
}

function FooterContect () {
  const isMobile = useSelector(state => state.store.isMobile)

  const list = [
    { id: 'address', label: '玉虹市玉虹大道 11 號 9F 之 1 室', icon: faHome },
    { id: 'phone', label: '04-0000-0000', icon: faPhone },
    { id: 'email', label: 'eat-sharing@example.com', icon: faEnvelope },
  ].map(item => {
    const target = 'mb-[14px]'
    return (
      <li className={ target } key={ item.id }>
        <FontAwesomeIcon icon={ item.icon } className='mr-[10px]' size='lg' />
        { item.label }
      </li>
    )
  })

  return (
    <div className={ `Footer-contect__container text-white ${ isMobile && 'w-full' }` }>
      <div className='font-bold text-[16px] mb-[20px]'>聯絡我們</div>
      <ul>{ list }</ul>
    </div>
  )
}

function FooterCommunity () {
  const list = [
    { id: 'facebook', url: '', icon: faFacebookF },
    { id: 'line', url: '', icon: faComments },
    { id: 'instagram', url: '', icon: faInstagram },
  ].map(item => {
    const target = `cursor-pointer bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full`
    return (
      <li className={ target } key={ item.id }>
        <FontAwesomeIcon icon={ item.icon } className='text-[#da7569]' size='xl' />
      </li>
    )
  })

  return (
    <div className='Footer-community__container'>
      <img src={ require('@/assets/images/footer-logo.png') } alt="logo" />
      <ul className='flex items-center justify-between my-[20px]'>{ list }</ul>
    </div>
  )
}

function Copyright () {
  const yearString = new Date().getFullYear()
  return (
    <div className='copyright__wrap bg-[#a1a481]'>
      <div className='copyright__container max-w-[1220px] mx-auto p-[10px] text-white text-center'>
        copyright © { yearString } eat-sharing
      </div>
    </div>
  )
}

export default function Footer () {
  const isMobile = useSelector(state => state.store.isMobile)

  return (
    <footer className='bg-[#da7569]'>
      <div className='footer__container'>
        <div className={ `footer__nav max-w-[1220px] mx-auto p-[10px] flex items-center justify-between ${isMobile && 'flex-col'}` }>
          <FooterMenu />
          <FooterContect />
          <FooterCommunity />
        </div>
        <Copyright />
      </div>
    </footer>
  )
}
