import React from 'react'
import { AppPage } from '@/shared/components/layouts/Types'
import { BiSearch } from 'react-icons/bi'
import Link from 'next/link'
import EmptyState from '@/shared/components/Ui/EmptyState'

const Dashboard:AppPage = () => {
  return (
    <>
      <div className="text-black">
        <div className='text-center'>
          <p className="text-2xl lg:text-4xl lg:fw-6600">Dashboard</p>
        </div>
        <div className='mt-6 flex justify-between items-center'>
          <div className='flex items-center gap-x-3'>
            <div className='border flex items-center w-60 rounded'>
              <input type='serach' className='p-2 w-full outline-none'/>
              <BiSearch className='text-xl mx-2'/>
            </div>
            <div className='border rounded p-[3px]'>
              <select className='p-2 rounded'>
                <option>Filter By All Bots</option>
              </select>
            </div>
          </div>
          <div>
            <Link href='/user' className='btn-like'>Build A CHATBOT</Link>
          </div>
        </div>
        {/* content */}
        <div className='mt-12'>
          <div className='flex gap-x-4'>
            <input type='checkbox'/> 
            <p>ALL BOTS</p>
          </div>
          <div className='mt-6 text-center'>
            <EmptyState message='It looks a bit empty in here'/>
            <p className='text-xl mb-6 '>Create your First ChatBot</p>
            <Link href='/user' className='btn-like'>Build A CHATBOT</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
Dashboard.Layout = 'Dashboard'