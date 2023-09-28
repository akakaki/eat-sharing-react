import { BrowserRouter } from 'react-router-dom'
import Routes from './route.js'

export default function routerProvider () {
  return (
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <Routes />
    </BrowserRouter>
  )
}
