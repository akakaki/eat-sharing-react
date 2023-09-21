import { BrowserRouter } from 'react-router-dom'
import Routes from './route.js'

// TODO: https://juejin.cn/post/7185897452862439485

export default function routerProvider () {
  return (
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <Routes />
    </BrowserRouter>
  )
}
