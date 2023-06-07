import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import {  BsGear } from 'react-icons/bs'
import { MdOutlineDashboard } from 'react-icons/md'
import { TfiShiftLeft } from 'react-icons/tfi'
import { FaLink } from 'react-icons/fa';
import { FiCreditCard } from 'react-icons/fi';
import { AiOutlinePieChart } from 'react-icons/ai';
import { TbBuildingEstate } from 'react-icons/tb';

const SidebarLayout = () => {
  return (
    <div className="left-0 top-0 fixed index-30 h-screen bg-[#0B1B2B]">
      <Sidebar
        customBreakPoint="960px"
        className="h-screen w-64 fs-700 fw-500 text-white "
        backgroundColor="linear-gradient(90deg, #6B5AED 0%, #8D7EFF 100%)"
      >
        <div className="pb-5">
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dic7regoe/image/upload/v1685766783/sinechat/Frame_128_1_fh5xlc.png"
              alt="logo"
              width={300}
              height={300}
              className="w-44 mb-5 ml-6 pt-10 "
            />
          </Link>
        </div>
        <Menu
          transitionDuration={600}
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (level === 0)
                return {
                  color: disabled ? "#ffff" : "#fff",
                  backgroundColor: active ? "#D9D9D9" : undefined,
                  borderLeft: active? "6px solid #00DF53" : undefined,
                  "&:hover": {
                    backgroundColor: "#D9D9D9 !important",
                    color: "black !important",
                    borderLeft: "6px solid #00DF53",
                    // borderRadius: "10px !important",
                  },
                };
            },
          }}
        >
            <MenuItem
            component={<Link href="/user/home" />}
            icon={<TbBuildingEstate className='text-xl' />}
          >
           Home
          </MenuItem>
          <MenuItem
            component={<Link href="/user/dashboard" />}
            icon={<MdOutlineDashboard className='text-xl'/>}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            component={<Link href="/user/integrations" />}
            icon={<FaLink  className='text-xl' />}
          >
            Integrations
          </MenuItem>
          <MenuItem
            component={<Link href="/dashboard" />}
            icon={<AiOutlinePieChart className='text-xl'/>}
          >
            Metric
          </MenuItem>
          <MenuItem
            component={<Link href="/spend" />}
            icon={<FiCreditCard className='text-xl' />}
          >
            Subscription
          </MenuItem>
          <MenuItem
            component={<Link href="/spend" />}
            icon={<BsGear className='text-xl' />}
          >
            Settings
          </MenuItem>
          <MenuItem
            className="mt-24"
            icon={<TfiShiftLeft className='text-xl' />}
            // onClick={() => setShowModal(true)}
          >
            Logout
          </MenuItem>
        </Menu>
      </Sidebar>
      {/* <Modal title="" noHead>
        <LogoutModal CloseModal={() => setShowModal(false)} />
      </Modal> */}
    </div>
  )
}

export default SidebarLayout