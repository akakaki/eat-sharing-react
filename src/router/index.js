import { RouterProvider } from 'react-router-dom'
import routes from './route.js'

export default function routerProvider () {
  return (
    <RouterProvider router={ routes } />
  )
}
