import App, { LoginContext } from '@/App.jsx'
import Home from '@/pages/Home/index.jsx'
import About from '@/pages/About/index.jsx'
import News from '@/pages/News/index.jsx'
import NewsDetail from '@/pages/News/detail.jsx'
import Member from '@/pages/Member/index.jsx'
import Center from '@/pages/Center/index.jsx'
import Sign from '@/pages/Sign/index.jsx'
import Serve from '@/pages/Serve/index.jsx'
import Error from '@/pages/Error/index.jsx'

import { createBrowserRouter, redirect, Location } from 'react-router-dom'

const isLogin = true

async function BeforeRoute (handle) {
  // await new Promise((resolve) => {
  //   setTimeout(() => { resolve() }, 4000)
  // })
  const title = `一起吃飯 EatSharing`
  document.title = handle?.title ? `${title} - ${ handle.title }` : title

  if (handle?.isLogin && !localStorage.getItem('token')) return redirect('/sign')
  else if (localStorage.getItem('token') && handle?.path === 'sign') return redirect('/')
  return true
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
        path: 'news/:id',
        element: <NewsDetail />,
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
        path: 'sign',
        element: <Sign />,
        handle: { title: '註冊' },
      },
      {
        path: 'serve/:id',
        element: <Serve />,
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
    if (item.children) for (const sub of item.children) sub.loader = () => BeforeRoute({ ...sub.handle, path: sub.path })
    else item.loader = () => BeforeRoute({ ...item.handle, path: item.path })
    return item
  })

export default createBrowserRouter(route, {
  basename: process.env.PUBLIC_URL,
})
