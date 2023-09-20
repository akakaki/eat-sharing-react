export default function Error () {
  return (
    <div className='error__wrap absolute h-full w-full'>
      <div className='error__container h-full w-full flex flex-col items-center justify-center overflow-auto'>
        <div className='text-[66px] font-bold mb-[30px]'>Oops!</div>
        <div>Not Found Page =(</div>
      </div>
    </div>
  )
}