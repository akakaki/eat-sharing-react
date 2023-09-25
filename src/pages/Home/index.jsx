import { useSelector, useDispatch } from 'react-redux'
// import { increment } from '@/store/index.js'

import ViewBanner from './banner.jsx'
import ViewPain from './pain.jsx'
import ViewBelief from './belief.jsx'
import ViewChoice from './choice.jsx'
import ViewInfo from './info.jsx'
import ViewProcess from './process.jsx'
import ViewIntro from './intro.jsx'
import ViewPartner from './partner.jsx'

export default function Home () {
  // const counter = useSelector(state => state.counter.value)
  // const dispatch = useDispatch()
  /* <div onClick={() => dispatch(increment())}>button</div>
  <div>{ counter }</div> */

  return (
    <div className='home__wrap'>
      <div className='home__container'>
        <ViewBanner />
        <ViewPain />
        <ViewBelief />
        <ViewChoice />
        <ViewInfo />
        <ViewProcess />
        <ViewIntro />
        <ViewPartner />
      </div>
    </div>
  )
}