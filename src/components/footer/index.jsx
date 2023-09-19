import { Link } from 'react-router-dom'

function FooterMenu () {
  const list = [
    { id: 'help', label: '幫助' },
    { id: 'manual', label: '使用手冊' },
    { id: 'translation', label: '常見問題' },
    { id: 'community', label: '社群守則' },
    { id: 'privacy', label: '隱私條款' },
  ].map(item => (<li className='mb-[14px] text-white cursor-pointer hover:underline' key={ item.id }>{ item.label }</li>))

  return (
    <ul>{ list }</ul>
  )
}

function FooterContect () {
  const list = [
    { id: 'address', label: '台中市豐原區中正路127號' },
    { id: 'phone', label: '02-xxxx-xxxx' },
    { id: 'email', label: 'sharefood@example.com' },
  ].map(item => {
    const target = `ico-moon ${item.id} mb-[14px] before:mr-[8px]`
    return (<li className={ target } key={ item.id }>{ item.label }</li>)
  })

  return (
    <div className='Footer-contect__container text-white'>
      <div className='font-bold text-[16px] mb-[20px]'>聯絡我們</div>
      <ul>{ list }</ul>
    </div>
  )
}

function FooterCommunity () {
  const list = [
    { id: 'facebook', url: '' },
    { id: 'line', url: '' },
    { id: 'instagram', url: '' },
  ].map(item => {
    const target = `ico-moon ${item.id} cursor-pointer before:text-[#da7569] before:text-[24px] bg-white w-[40px] h-[40px] flex items-center justify-center rounded-full`
    return (<li className={ target } key={ item.id }></li>)
  })

  return (
    <div className='Footer-community__container'>
      <img src={ require('@/assets/images/footer-logo.png') } alt="logo" />
      <ul className='flex items-center justify-between my-[20px]'>{ list }</ul>
    </div>
  )
}

function Copyright () {
  return (
    <div className='copyright__wrap bg-[#a1a481]'>
      <div className='copyright__container max-w-[1320px] mx-auto p-[10px] text-white text-center'>
        Copyright © 2023 sharefood.com
      </div>
    </div>
  )
}

export default function Footer () {
  return (
    <footer className='bg-[#da7569]'>
      <div className='footer__container'>
        <Link
          className='max-w-full w-[800px] relative block bg-[#bc7c96] text-[48px] font-bold rounded-full text-white p-[50px] text-center mx-auto transform -translate-y-1/2 shadow-lg -mb-[40px]'
          to="register"
        >立即加入我們！
        </Link>
        <div className='footer__nav max-w-[1320px] mx-auto p-[10px] flex items-center justify-between'>
          <FooterMenu />
          <FooterContect />
          <FooterCommunity />
        </div>
        <Copyright />
      </div>
    </footer>
  )
}