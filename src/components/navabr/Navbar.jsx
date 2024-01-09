import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const navMenu = [
        {
            name : 'Home',
            icon : '/icons/navbar/home.svg',
        },
        {
            name : "Orders",
            icon : '/icons/navbar/orders.svg',
        },
        {
            name : "Products",
            icon : '/icons/navbar/products.svg',
        },
        {
            name : "Delivery",
            icon : '/icons/navbar/delivery.svg',
        },
        {
            name : "Marketing",
            icon : '/icons/navbar/marketing.svg',
        },
        {
            name : "Analytics",
            icon : '/icons/navbar/analytics.svg',
        },
        {
            name : "Payments",
            icon : '/icons/navbar/payments.svg',
        },
        {
            name : "Tools",
            icon : '/icons/navbar/tools.svg',
        },
        {
            name : "Discounts",
            icon : '/icons/navbar/discounts.svg',
        },
        {
            name : "Audience",
            icon : '/icons/navbar/audience.svg',
        },
        {
            name : "Appearance",
            icon : '/icons/navbar/appearance.svg',
        },
        {
            name : "Plugins",
            icon : '/icons/navbar/plugins.svg',
        },
    ]
    const [activeTab , setActiceTab] = useState(6);
  return (
    <div className='bg-[#1E2640] w-max min-w-[230px] p-2 pb-3  flex flex-col gap-3'>
       {/* ------------- logo part ---------- */}
       <div className={`flex gap-4 items-center px-1`}>
       <div className='rounded-md  w-[40px]'>
            <img src='/images/navbar/logo.png' alt='dukan' className='w-full aspect-[0.95] rounded'/>
        </div>
        <div className='flex flex-col gap-1'>
            <span className='text-white text-sm'>Nishyan</span>
            <Link to={"#"} className=' text-xs underline text-gray-300'>Visit store</Link>
        </div>
        <div className='ml-auto'>
            <img src="/icons/navbar/down_arrow.svg" alt="" />
        </div>
       </div>

       {/* ---------- nav menu ------- */}
       <div className='flex flex-col gap-2'>
        {
            navMenu.map((menu, ind)=>{
                return (
                    <div key={menu.name} className={`flex gap-3 w-full p-2 pl-4 cursor-pointer rounded-md ${activeTab == ind && 'bg-[#343B53]'}`} onClick={()=>setActiceTab(ind)}>
                        <img src={menu.icon} alt={menu.name}/>
                        <span className={`${activeTab == ind ? 'text-white' : 'text-gray-300'} text-sm`}>{menu.name}</span>
                    </div>
                )
            })
        }
       </div>


       {/* ------------ available credits--------- */}
       <div className='flex  gap-3 items-center bg-[#343B53] px-2 py-1 rounded ml-2 mt-auto'>

        <div>
            <img src="/icons/navbar/wallet.svg" alt="wallet" className='object-contain w-[20px]' />
        </div>
        <div className='flex flex-col '>
            <span className='text-gray-300 text-xs'>Available credits</span>
            <span className='text-white text-xs'>222.10</span>
        </div>
       </div>
    </div>
  )
}

export default Navbar