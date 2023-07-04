import React from 'react'
import { AppPage } from '@/shared/components/layouts/Types'
import Image from 'next/image'
import Link from 'next/link'
import CleanupChart from '@/shared/components/fleet/dashboard/CleanupChart'

const FleetDashboard:AppPage = () => {
  return (
    <>
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6'>
                <div className='dash-shade p-4 flex gap-x-4 items-center'>
                    <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1686663402/pikaboo/Group_46756_lvidiy.png' alt='waste' width={100} height={100}/>
                    <div className='text-center'>
                        <p className='fw-600 text-xl'>12</p>
                        <p className='fw-500 fs-500 text-gray-600'>Waste Manager</p>
                    </div>
                </div>
                <div className='dash-shade p-4 flex gap-x-4 items-center'>
                    <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1686663402/pikaboo/Group_46754_rum9nv.png' alt='waste' width={100} height={100}/>
                    <div className='text-center'>
                        <p className='fw-600 text-xl'>22</p>
                        <p className='fw-500 fs-500 text-gray-600'>Service Personnel</p>
                    </div>
                </div>
                <div className='dash-shade p-4 flex  gap-x-4 items-center'>
                    <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1686663402/pikaboo/Group_46757_t7u06l.png' alt='waste' width={100} height={100}/>
                    <div className='text-center'>
                        <p className='fw-600 text-xl'>11</p>
                        <p className='fw-500 fs-500 text-gray-600'>Gabbage Trucks</p>
                    </div>
                </div>
                <div className='dash-shade p-4 flex  gap-x-4 items-center'>
                    <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1686663402/pikaboo/Group_46758_pfi4y0.png' alt='waste' width={100} height={100}/>
                    <div className='text-center'>
                        <p className='fw-600 text-xl'>40</p>
                        <p className='fw-500 fs-500 text-gray-600'>Home Resisdence</p>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 gap-6 lg:gap-12 mt-10'>
                <div className='bg-white p-4 dash-shade rounded-lg'>
                    <div className='flex gap-x-4 items-center'>
                        <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1688401712/pikaboo/recylcle_vq84h0.png' alt='recycle' width={200} height={200} className='w-12'/>
                        <p className='fw-600'>RECENT DISPOSAL ZONES</p>
                    </div>
                    <div className='my-6'>
                        <div className='flex justify-between border-b pb-2'>
                            <p>Ugbowo Central</p>
                            <p>12/16 Residence</p>
                            <p>29-Jul-2023</p>
                        </div>
                        <div className='flex justify-between mt-3 border-b pb-2'>
                            <p>Ugbowo Central</p>
                            <p>12/16 Residence</p>
                            <p>29-Jul-2023</p>
                        </div>
                        <div className='flex justify-between mt-3 border-b pb-2'>
                            <p>Ugbowo Central</p>
                            <p>12/16 Residence</p>
                            <p>29-Jul-2023</p>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <Link href='/' className='text-primary fw-600'>See All</Link>
                    </div>
                </div>
                <div className='bg-white p-4 dash-shade rounded-lg'>
                    <div className='flex gap-x-4 items-center'>
                        <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1688401712/pikaboo/recylcle_vq84h0.png' alt='recycle' width={200} height={200} className='w-12 hue-rotate-90'/>
                        <p className='fw-600'>DISPOSAL ZONES</p>
                    </div>
                    <div className='my-6'>
                        <div className='flex justify-between border-b pb-2'>
                            <p>Ugbowo Central</p>
                            <p>12/16 Residence</p>
                            <p>29-Jul-2023</p>
                        </div>
                        <div className='flex justify-between mt-3 border-b pb-2'>
                            <p>Ugbowo Central</p>
                            <p>12/16 Residence</p>
                            <p>29-Jul-2023</p>
                        </div>
                        <div className='flex justify-between mt-3 border-b pb-2'>
                            <p>Ugbowo Central</p>
                            <p>12/16 Residence</p>
                            <p>29-Jul-2023</p>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <Link href='/' className='text-primary fw-600'>See All</Link>
                    </div>
                </div>
            </div>
            <div className='mt-10 dash-shade lg:p-5'>
                <CleanupChart/>
            </div>
        </div>
    </>
  )
}

export default FleetDashboard
FleetDashboard.Layout = 'Dashboard'