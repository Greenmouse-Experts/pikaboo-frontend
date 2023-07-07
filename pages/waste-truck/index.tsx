import React from 'react'
import { AppPage } from '@/shared/components/layouts/Types'
import Image from 'next/image'
import Link from 'next/link'


const WasteTruckDashboard:AppPage = () => {
  return (
    <>
        <div>
        <div className="grid lg:grid-cols-2 lg:gap-x-24">
          <div className="dash-shade p-5 rounded-br-[20px] grid grid-cols-2 items-center">
            <div className="bg-light rounded-xl">
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1688051678/pikaboo/residents-removebg-preview_zgvd8q.png"
                alt="house"
                width={150}
                height={150}
                className="w-full rounded-xl"
              />
            </div>
            <div className="text-center">
              <p className="lg:text-lg fw-500">My Waste Trucks</p>
              <p className="text-center text-4xl mt-8 fw-600">0</p>
            </div>
          </div>
          <div className="dash-shade p-5 rounded-br-[20px] grid grid-cols-2 items-center">
            <div className="bg-light rounded-xl">
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1688051678/pikaboo/area-removebg-preview_vmn6hb.png"
                alt="house"
                width={150}
                height={150}
                className="w-full rounded-xl"
              />
            </div>
            <div className="text-center">
              <p className="lg:text-lg fw-500">My Service Personnel</p>
              <p className="text-center text-4xl mt-8 fw-600">0</p>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default WasteTruckDashboard
WasteTruckDashboard.Layout = 'Dashboard'