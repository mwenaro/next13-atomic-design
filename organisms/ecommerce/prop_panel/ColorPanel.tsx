export default function ColorPanel({colors = ['red-600', 'yellow-500']}:{colors?:any[]}) {
  return (
    <ul className='w-full flex flex-col lg:flex-row bg-inherit items-center justify-between'>
        {
            colors && colors.map((color,indx)=><li key={indx}>
                <div className={`bg-[${color}] p-5`}></div>
            </li>)
        }
    </ul>
  )
}
