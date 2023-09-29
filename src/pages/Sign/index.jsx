import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setInfo } from '@/store/index.js'

function Register () {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [ formValue, setFormValue ] = useState([
    { id: 'mail', label: '電子郵件帳號', value: '', type: 'text' },
    { id: 'password', label: '密碼', value: '', type: 'password' },
  ])

  const setListValueAction = ({ value, index }) => {
    const target = JSON.parse(JSON.stringify(formValue))
    target[index].value = value
    setFormValue(target)
  }

  const action = () => {
    localStorage.setItem('token', '2i0234k4l;ewkrwkr;ewrfm.,fj4iojk23-0123kl;2k13ml;j4;1lj;')
    if (localStorage.getItem('token')) {
      dispatch(setInfo())
    }
    navigate('/')
  }

  return (
    <>
      <form>
        {
          formValue.map((item, index) => (
            <div className='flex flex-col' key={ item.id }>
              <label htmlFor="">{ item.label }</label>
              <input
                className='bg-[#f2e4d4] border-[2px] border-[#da7569] py-[4px] px-[8px]'
                type={ item.type }
                onChange={ (val) => setListValueAction({ value: val.target.value, index }) }
              />
            </div>
          ))
        }
      </form>
      <div className='sign__bottom flex flex-col items-center'>
        <button
          className='bg-[#da7569] text-white text-[20px] leading-none rounded-[4px] py-[12px] px-[60px] my-[20px]'
          onClick={ () => action() }
        >登入</button>
        <div className='w-full'>
          <button>忘記密碼?</button>
          <button>加入我們</button>
        </div>
      </div>
    </>
  )
}

export default function Sign () {
  const [ formValue, setFormValue ] = useState([
    { id: 'mail', label: '電子郵件帳號', value: '', type: 'text' },
    { id: 'password', label: '密碼', value: '', type: 'password' },
  ])

  const setListValueAction = ({ value, index }) => {
    const target = JSON.parse(JSON.stringify(formValue))
    target[index].value = value
    setFormValue(target)
  }

  return (
    <div className='register__wrap bg-[#f2e4d4] h-full'>
      <div className='register__container max-w-[1220px] mx-auto px-[10px] py-[100px]'>
        <section className='text-[18px] leading-10 bg-[#eec7a0] p-[40px] max-w-[460px] rounded-[8px] mx-auto'>
          <article>
            <h1 className='text-[30px] font-bold mb-[40px]'>共餐平台歡迎您~</h1>
            <Register />
          </article>
        </section>
      </div>
    </div>
  )
}