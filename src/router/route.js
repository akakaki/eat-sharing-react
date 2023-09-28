import App, { LoginContext } from '@/App.jsx'
import Home from '@/pages/Home/index.jsx'
import About from '@/pages/About/index.jsx'
import News from '@/pages/News/index.jsx'
import Member from '@/pages/Member/index.jsx'
import Center from '@/pages/Center/index.jsx'
import Register from '@/pages/Register/index.jsx'
import Error from '@/pages/Error/index.jsx'

import { useRoutes, useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'

const isLogin = true

function BeforeRoute ({ children, meta, path }) {
  const { loginStatus } = useContext(LoginContext)

  const title = `一起吃飯 EatSharing`
  document.title = meta?.title ? `${title} - ${ meta.title }` : title
  
  const navigate = useNavigate()
  useEffect(() => {
    // login auth
    if (meta?.isLogin && !loginStatus) navigate('/')
  }, [path])


  return (<>{ children }</>)
}

const route = [
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
        meta: { title: '關於我們' }
      },
      {
        path: 'news',
        element: <News />,
        meta: { title: '最新消息' }
      },
      {
        path: 'member',
        element: <Member />,
        meta: { title: '會員專區', isLogin }
      },
      {
        path: 'center',
        element: <Center />,
        meta: { title: '共餐據點' }
      },
      {
        path: 'register',
        element: <Register />,
        meta: { title: '註冊' }
      },
    ]
  }, {
    path: '*',
    element: <Error />,
  },
].map(item => {
  if (item.children) for (const sub of item.children) sub.element = (<BeforeRoute path={ sub.path } meta={ sub.meta }>{ sub.element }</BeforeRoute>)
  else item.element = (<BeforeRoute path={ item.path } meta={ item.meta }>{ item.element }</BeforeRoute>)
  return item
})

export default () => useRoutes(route)
