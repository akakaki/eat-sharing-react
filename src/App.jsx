import { createContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import ViewHeader from '@/components/Header/index.jsx'
import ViewFooter from '@/components/Footer/index.jsx'

import { useDispatch } from 'react-redux'
import { setMobileValue, setInfo } from '@/store/index.js'
import { debounce } from '@/utils/index.js'

export const LoginContext = createContext()

export default function App () {
  const [ loginStatus, setLoginStatus ] = useState(false)
  const dispatch = useDispatch()

  const init = () => {
    // isMobile =">
    const action = (val = 0) => {
      dispatch(setMobileValue(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent) || (val <= 768)))
    }
    
    action(window?.innerWidth)

    const debounceContainerWidth = debounce(el => {
      action(el?.width)
    }, 300)

    const resizeWidth = new ResizeObserver(entries => {
      debounceContainerWidth(entries[0]?.contentRect)
    })

    resizeWidth.observe(document.body)

    // info
    if (localStorage.getItem('token')) {
      dispatch(setInfo())
    }
  }

  init()

  return (
    <div className='wrap flex flex-col h-full overflow-y-auto overflow-x-hidden'>
      <LoginContext.Provider value={{ loginStatus, setLoginStatus }}>
        <ViewHeader />
        <div className='container flex-1 max-w-full'>
          <Outlet />
        </div>
        <ViewFooter />
      </LoginContext.Provider>
    </div>
  )
}
