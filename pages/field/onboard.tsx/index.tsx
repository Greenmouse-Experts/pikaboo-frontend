import React, {useState} from 'react'
import { AppPage } from '@/shared/components/layouts/Types'
import { FaHouseUser } from 'react-icons/fa'
import BasicInfoForm from '@/shared/components/field/onboard/BasicInfo';
import BuildingInfoForm from '@/shared/components/field/onboard/BuildingInfo';

const OnboardingPage:AppPage = () => {
    const [open, setOpen] = useState<number>(1);

    const handleOpen = (value:number) => {
      setOpen(open === value ? value : value);
    };
    const activeStyle = {
      backgroundColor: '#009a06',
      color: "white",
      transition: "0.6s",
    };
  return (
    <>
        <div>
            <div className='dash-shade p-6'>
                <div className='flex items-center gap-x-2'>
                    <FaHouseUser className='text-3xl text-primary'/>
                    <p className='fs-700 lg:text-2xl fw-500 text-primary'>Onboarding Form</p>
                </div>
                <div className='mt-6 lg:mt-12'>
                <div className="border-b pb-2">
            <ul className="flex items-center gap-x-6">
              <li className="cursor-pointer p-2 rounded-xl px-4" style={open === 1 ? activeStyle : undefined}
              onClick={() => handleOpen(1)}>
                <div className="flex kitems-center gap-x-2">
                  <p className="fw-500">Basic Info</p>
                </div>
              </li>
              <li className="cursor-pointer  p-2 rounded-xl px-4" style={open === 2 ? activeStyle : undefined}
              onClick={() => handleOpen(2)}>
                <div className="flex kitems-center gap-x-2">
                  <p className="fw-500">Building Info</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-5">
            {
              open === 1? <BasicInfoForm/> : ""
            }
            {
              open === 2? <BuildingInfoForm/> : ""
            }
          </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default OnboardingPage
OnboardingPage.Layout = 'Dashboard'