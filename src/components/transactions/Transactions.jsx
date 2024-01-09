import React from 'react'

const Transactions = () => {
  return (
    <div className='p-6 flex flex-col gap-3'>
        <h1 className='text-xl font-semibold'>
            Transactions | This Month
        </h1>
        
        <div className='flex  justify-between gap-3 mt-3'>
            {/* -------- searchbar ---------- */}
    
        <div className='flex  items-center gap-2 px-3 py-2 rounded bg-[#fbfafa]'>
            <img src="/icons/dashboard/search.svg" alt="search" width={12} />
            <input type="text"  placeholder='Search by order ID...' className='text-xs bg-[#fbfafa] outline-none'/>
       
    </div>

   <div className='flex gap-4'>
   <div className='flex  gap-1 bg-[#fbfafa] border-[.1px] border-[rgb(228,227,227)] rounded-md text-sm p-1 items-center'>
        <span>Sort</span>
        <img src="/icons/dashboard/sort.svg" alt="sort" />
    </div>

    <div className='rounded bg-[#fbfafa] border-[.1px] border-[rgb(228,227,227)]flex items-center h-max p-1'>
       
        <img src="/icons/dashboard/download.svg" alt="sort" className='object-contain'/>
    </div>
   </div>

        </div>

        <table className='w-full'>
            <thead className='rounded-lg w-full'>
                <tr className='bg-[#F2F2F2] w-full flex justify-between rounded'>
                    <th className='p-2 text-sm font-[400] w-[150px] min-w-max '>Order ID</th>
                    <th className='flex items-center gap-1 p-2 text-sm font-[400] w-[150px] min-w-max '>Order date 
                        <img src="/icons/dashboard/sort_date.svg" alt="" />
                    </th>
                    <th className='p-2 text-sm font-[400] w-[150px] min-w-max '>Order amount</th>
                    <th className='flex items-center gap-1 p-2 text-sm font-[400] w-[150px] min-w-max '>Transaction fees
    <img src="/icons/dashboard/info.svg" alt="" />
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    Array.from({length :20}).map((_ , ind)=>{
                        return (
                            <tr className='w-full flex justify-between rounded  border-b py-2'>
                               <th className='p-2 text-sm text-center font-[500] text-[#146EB4] w-[150px] min-w-max'>#281209</th>
                               <th className='p-2 text-sm font-[500] text-[#444444] w-[150px] min-w-max text-start '>7 July, 2023</th>
                               <th className='p-2 text-sm font-[500] text-[#444444] w-[150px] min-w-max'>₹1,278,23</th>
                               <th className='p-2 text-sm font-[500]
                               text-[#444444] w-[150px] min-w-max '>₹22</th>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>


    </div>
  )
}

export default Transactions