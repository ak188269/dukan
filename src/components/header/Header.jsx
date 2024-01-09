import React from 'react'

const Header = () => {
  return (
  <div className='flex items-center h-max gap-4 p-4 shadow-md w-full'>
    <div className='text-sm'>Payments</div>
    <div className='flex gap-1 '>
        <img src="/icons/dashboard/question_mark.svg" alt="question" />
        <span className='text-gray-500 text-xs'>How it works</span>
    </div>
    {/* -------- searchbar ---------- */}
    <div className='flex-grow'>
        <div className='flex  items-center gap-2 px-3 py-2 rounded bg-[#F2F2F2] min-w-[20rem] w-[60%] mx-auto'>
            <img src="/icons/dashboard/search.svg" alt="search" width={12} />
            <input type="text"  placeholder='Search features , tutorials ,etc' className='text-xs bg-[#F2F2F2] outline-none w-full'/>
        </div>
    </div>
    <div className='bg-[#e6e4e4] p-2 rounded-3xl'>
        <img src="/icons/dashboard/group.svg" alt="" className='w-[14px]'/>
    </div>
    <div className=''>
        <img src="/icons/dashboard/down_arrow.svg" alt="" className='w-[30px]'/>
    </div>
  </div>
  )
}

export default Header