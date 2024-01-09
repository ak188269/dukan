import React from 'react'

const Overview = () => {
  return (
    <>
     {/* ------------ overview section */}
     <section className='p-6 flex flex-col gap-5'>
        <div className='flex justify-between'>
        <h1 className='font-[600] text-xl'>Overview</h1>
        <div className='flex items-center gap-2 border-[.1px] border-[rgb(228,227,227)] rounded-md text-sm p-1'>
            <span>Last Month</span>
            <img src="/icons/dashboard/small_down_arrow.svg" alt="" />
        </div>
        </div>

        <div className='grid grid-cols-2 justify-between gap-4'>
            {/* ------ online order box -------- */}
        <div className='flex flex-col gap-4 rounded-md shadow p-5'>
            <span className='text-sm'>Online orders</span>
            <span className='font-semibold text-3xl'>231</span>
        </div>
        <div className='flex flex-col gap-4 rounded-md shadow p-5'>
            <span className='text-sm'>Amount received</span>
            <span className='font-semibold text-3xl'>₹23,92,312.19</span>
        </div>
        </div>

    </section>
    </>
  )
}

export default Overview;