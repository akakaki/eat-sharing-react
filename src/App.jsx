import { Outlet } from 'react-router-dom'
import ViewHeader from '@/components/header/index.jsx'
import ViewFooter from '@/components/footer/index.jsx'

export default function App () {
  return (
    <div className='wrap flex flex-col h-full overflow-auto'>
      <ViewHeader />
      <div className='container flex-1'>
        <Outlet />
      </div>
      <ViewFooter />
    </div>
  )
}
