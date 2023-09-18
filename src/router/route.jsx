import App from '@/App.jsx'
import Home from '@/pages/Home/index.jsx'
import About from '@/pages/About/index.jsx'
import News from '@/pages/News/index.jsx'
import Member from '@/pages/Member/index.jsx'
import Center from '@/pages/Center/index.jsx'

export default [
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
      },
      {
        path: 'news',
        element: <News />,
      },
      {
        path: 'member',
        element: <Member />,
      },
      {
        path: 'center',
        element: <Center />,
      },
    ]
  },
]