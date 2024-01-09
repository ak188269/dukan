import React from 'react'

const Pagination = () => {
  return (
    <div>
        <button className='flex gap-1 bg-[#fbfafa] border-[.1px] border-[rgb(228,227,227)] rounded-md items-center'>
            <img src="/icons/dashboard/previous.svg" alt="prevous" />
            Previous
        </button>
        <div className='flex gap-2'>
        {Array.from({length:15}).map((_,ind)=>{
            return (
                <div key={ind}>
                    {ind+1}
                </div>
            )
        })}
        </div>
         <button className='flex gap-1 bg-[#fbfafa] border-[.1px] border-[rgb(228,227,227)] rounded-md item-center'>
            <img src="/icons/dashboard/next.svg" alt="next" />
            Next
        </button>
    </div>
  )
}

export default Pagination;