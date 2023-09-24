import { Outlet } from 'react-router-dom'
import ViewHeader from '@/components/Header/index.jsx'
import ViewFooter from '@/components/Footer/index.jsx'

export default function App () {
  return (
    <div className='wrap flex flex-col h-full overflow-auto'>
      <ViewHeader />
      <div className='container flex-1 max-w-full'>
        <Outlet />
      </div>
      <ViewFooter />
    </div>
  )
}
