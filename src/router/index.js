import { BrowserRouter } from 'react-router-dom'
import Routes from './route.js'

// TODO: https://juejin.cn/post/7185897452862439485

const basename = process.env.NODE_ENV === 'production'
  ? '/practice-react/'
  : '/'

export default function routerProvider () {
  return (
    <BrowserRouter basename={ basename }>
      <Routes />
    </BrowserRouter>
  )
}
