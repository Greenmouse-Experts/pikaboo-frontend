import React, { PropsWithChildren } from 'react'
import SidebarLayout from './Sections/Sidebar'

const DashboardLayout = ({ children }: PropsWithChildren)  => {
  return (
        <div className='flex '>
            <div className='lg:w-[300px]'>
                <SidebarLayout/>
            </div>
            <div className='relative w-full'>
                <div className='bg-dash py-10 min-h-screen px-3 lg:px-16'>
                {children}
                </div>
            </div>
        </div>
  )
}

export default DashboardLayout