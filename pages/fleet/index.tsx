import React from 'react'
import { AppPage } from '@/shared/components/layouts/Types'
import Image from 'next/image'

const FleetDashboard:AppPage = () => {
  return (
    <>
        <div>
            <div className='grid lg:grid-cols-2 gap-6 lg:gap-12'>
                <div className='bg-white p-4 dash-shade rounded-lg'>
                    <div className='flex gap-x-4 items-center'>
                        <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1688401712/pikaboo/recylcle_vq84h0.png' alt='recycle' width={200} height={200} className='w-12'/>
                        <p className='fw-600'>RECENT RECYCLED ZONES</p>
                    </div>
                    <div className='my-6'>
                        <div className='flex justify-between'>
                            <p>Ugbowo Central</p>
                            <p>12/16 Residence</p>
                            <p>29-Jul-2023</p>
                        </div>
                        <div className='flex justify-between mt-3'>
                            <p>Ugbowo Central</p>
                            <p>12/16 Residence</p>
                            <p>29-Jul-2023</p>
                        </div>
                        <div className='flex justify-between mt-3'>
                            <p>Ugbowo Central</p>
                            <p>12/16 Residence</p>
                            <p>29-Jul-2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FleetDashboard
FleetDashboard.Layout = 'Dashboard'