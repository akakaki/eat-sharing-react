import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import route from './route'

const router = createBrowserRouter(route)

export default function routerProvider () {
  return (
    <RouterProvider router={ router }/>
  )
}
