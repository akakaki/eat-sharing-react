import { useSelector, useDispatch } from 'react-redux'
import { increment } from '@/store/index.js'

export default function Home () {

  const counter = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='home__wrap'>
      <div className='home__container'>
        <div onClick={() => dispatch(increment())}>button</div>
        <div>{ counter }</div>
        Home
      </div>
    </div>
  )
}