import App, { LoginContext } from '@/App.jsx'
import Home from '@/pages/Home/index.jsx'
import About from '@/pages/About/index.jsx'
import News from '@/pages/News/index.jsx'
import Member from '@/pages/Member/index.jsx'
import Center from '@/pages/Center/index.jsx'
import Register from '@/pages/Register/index.jsx'
import Error from '@/pages/Error/index.jsx'

import { createBrowserRouter, redirect } from 'react-router-dom'

const isLogin = true

async function BeforeRoute (handle) {
  // await new Promise((resolve) => {
  //   setTimeout(() => { resolve() }, 4000)
  // })
  const title = `一起吃飯 EatSharing`
  document.title = handle?.title ? `${title} - ${ handle.title }` : title

  if (handle?.isLogin) return redirect('/')
  return false
}

const route = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
        handle: { title: '關於我們' },
      },
      {
        path: 'news',
        element: <News />,
        handle: { title: '最新消息' },
      },
      {
        path: 'member',
        element: <Member />,
        handle: { title: '會員專區', isLogin },
      },
      {
        path: 'center',
        element: <Center />,
        handle: { title: '共餐據點' },
      },
      {
        path: 'register',
        element: <Register />,
        handle: { title: '註冊' },
      },
    ]
  },
  {
    path: '*',
    element: <Error />,
    handle: { title: 'Oops!' }
  },
]
  .map(item => {
    if (item.children) for (const sub of item.children) sub.loader = () => BeforeRoute(sub.handle)
    else item.loader = () => BeforeRoute(item.handle)
    return item
  })

export default createBrowserRouter(route, {
  basename: process.env.PUBLIC_URL,
})
