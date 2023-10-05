import React from 'react'
import { AppPage } from '@/shared/components/layouts/Types'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineShareLocation } from 'react-icons/md'
import MiniSchedule from '@/shared/components/waste/dashboard/MiniSchedule'
import MiniSpecial from '@/shared/components/waste/dashboard/MiniSpecial'


const WasteTruckDashboard:AppPage = () => {
  return (
    <>
        <div>
          {/* <div className='flex'>
          <div className='flex gap-x-3 px-6 pb-1 my-6 items-center border-b-[5px] border-green-400 rounded-b	'>
            <MdOutlineShareLocation className='!text-orange-600 text-3xl'/>
            <p className='fw-500 text-xl'>Ugbowo Zonal Manager</p>
          </div>
          </div> */}
          <div className="grid lg:grid-cols-4 gap-y-6 gap-x-6 dash-shade p-5 py-8 rounded-lg">
          <div className="flex items-center gap-x-3 border-r border-[#00000059]">
            <Image
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1696514644/pikaboo/samp2_as8d9l.jpg"
              alt="fleet"
              width={80}
              height={80}
              className="circle w-[86px]"
            />
            <div>
              <p className="text-lg fw-600">32</p>
              <p className="fs-400 fw-500 text-primary">Home Residence</p>
            </div>
          </div>
          <div className="flex items-center gap-x-3 border-r border-[#00000059]">
            <Image
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1696514644/pikaboo/samp1_dewtaf.jpg"
              alt="fleet"
              width={80}
              height={80}
              className="circle w-[86px]"
            />
            <div>
              <p className="text-lg fw-600">23</p>
              <p className="fs-400 fw-500 text-primary">Registered Home</p>
            </div>
          </div>
          <div className="flex items-center gap-x-3 border-r border-[#00000059]">
            <Image
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1696514642/pikaboo/samp3_q6zqu9.jpg"
              alt="fleet"
              width={80}
              height={80}
              className="circle w-[86px]"
            />
            <div>
              <p className="text-lg fw-600">3</p>
              <p className="fs-400 fw-500 text-primary">Active Residence</p>
            </div>
          </div>
          <div className="flex items-center gap-x-3 border-r border-[#00000059]">
            <Image
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1696514644/pikaboo/samp2_as8d9l.jpg"
              alt="fleet"
              width={80}
              height={80}
              className="circle w-[86px] sepia"
            />
            <div>
              <p className="text-lg fw-600">4</p>
              <p className="fs-400 fw-500 text-primary">Inactive Residence</p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-x-8 mt-4 lg:mt-6">
          <div className="dash-shade p-5 rounded-br-[20px] grid grid-cols-2 items-center">
            <div className="bg-light rounded-xl">
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1689329413/pikaboo/7787330_c28zmh.png"
                alt="house"
                width={150}
                height={150}
                className="w-full rounded-xl"
              />
            </div>
            <div className="text-center relative h-full place-center">
              <div>
              <p className="lg:text-lg fw-500">My Waste Trucks</p>
              <p className="text-center text-4xl mt-8 fw-600">5</p>
              </div>
              <Link href='/waste/trucks' className='text-end fw-600 text-primary absolute bottom-4 right-4 underline'>View All</Link>
            </div>
          </div>
          <div className="dash-shade p-5 rounded-br-[20px] grid grid-cols-2 items-center">
            <div className="bg-light rounded-xl shadow-xl h-full flex items-center bg-white">
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1689329413/pikaboo/original_uvejq8.jpg"
                alt="house"
                width={150}
                height={150}
                className="w-full rounded-xl"
              />
            </div>
            <div className="text-center relative h-full place-center">
              <div>
              <p className="lg:text-lg fw-500">My Service Personnel</p>
              <p className="text-center text-4xl mt-8 fw-600">3</p>
              </div>
              <Link href='/waste/service' className='text-end fw-600 text-primary absolute bottom-4 right-4 underline'>View All</Link>
            </div>
          </div>
        </div>
        <div className='dash-shade grid lg:grid-cols-2 p-5 py-8 mt-6'>
          <div className='lg:pr-10'>
          <MiniSchedule/>
          </div>
          <div>
          <MiniSpecial/>
          </div>
        </div>
        </div>
    </>
  )
}

export default WasteTruckDashboard
WasteTruckDashboard.Layout = 'Dashboard'