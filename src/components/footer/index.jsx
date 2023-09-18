function Copyright () {
  return (
    <div className='copyright+__wrap bg-[#a1a481]'>
      <div className='copyright__container max-w-[1220px] mx-auto p-[10px] text-white text-center'>
        Copyright © 2023 sharefood.com
      </div>
    </div>
  )
}

export default function Footer () {
  return (
    <footer className='bg-[#da7569]'>
      <div className='footer__container'>
        foorter
        <Copyright />
      </div>
    </footer>
  )
}