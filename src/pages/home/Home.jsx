import React from 'react'
import Navbar from '../../components/navabr/Navbar'
import Header from '../../components/header/Header'
import Overview from '../../components/overview/Overview'
import Transactions from '../../components/transactions/Transactions'
import Pagination from '../../components/pagination/Pagination'

const Home = () => {
  return (
   <>
    <div className='flex'>
    <Navbar/>

    <div className='w-full'>
    <Header/>
   <Overview/>
   <Transactions/>
   {/* <Pagination/> */}
    </div>
    </div>
   </>
  )
}

export default Home