import React from 'react'
import Blogs from '../components/Blogs'
import Header from '../components/Header'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header/>
      <div className='mt-[100px] mb-[100px]'>
        <Blogs/>
        <Pagination/>
      </div>
    </div>
  )
}

export default Home
