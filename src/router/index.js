import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import route from './route.js'

const router = createBrowserRouter(route, {
  // basename: process.env.NODE_ENV === 'production'
  //   ? '/practice-react'
  //   : '/'
  basename: '/practice-react',
})

export default function routerProvider () {
  return (
    <RouterProvider router={ router } />
  )
}
