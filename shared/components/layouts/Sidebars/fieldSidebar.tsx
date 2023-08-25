import React, {FC} from "react";
import Link from "next/link";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { BsGear, BsPinMap } from "react-icons/bs";
import { MdOutlineDashboard } from "react-icons/md";
import { TfiShiftLeft } from "react-icons/tfi";
import { FiCreditCard } from "react-icons/fi";
import { IoHomeOutline } from 'react-icons/io5'
import useModal from "@/hooks/useModal";
import { FaHouseUser } from "react-icons/fa";
import LogoutModalUsers from "../../settings/LogoutUsers";
import Image from "next/image";

interface Props {
    setToggled: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    toggled:boolean,
  }

const FieldSidebarLayout:FC<Props>  = ({setToggled, toggled}) => {

  const {Modal, setShowModal} = useModal()
  console.log(toggled);
  
  return (
    <div className="left-0 bottom-0 fixed index-30 bg-white  lg:h-[90vh]">
      <Sidebar
        customBreakPoint="960px"
        className="lg:h-[90vh] lg:dash-side-shade rounded-lg lg:ml-3 w-64 fs-500 fw-500 pt-12"
        onClick={() => setToggled(false)} 
        toggled={toggled}
        backgroundColor="linear-gradient(90deg, #6B5AED 0%, #8D7EFF 100%)"
      >
        <div className="mb-6 lg:hidden">
          <Link href="/">
            <Image
              src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1687429795/pikaboo/Group_48061_m4vob9.png'
              alt="logo"
              width={300}
              height={100}
              className="w-36 pl-8"
            />
          </Link>
        </div>
        <Menu
          transitionDuration={600}
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (level === 0)
                return {
                  fontSize: "15px",
                  marginBottom: "5px",
                  color: disabled ? "black" : "black",
                  backgroundColor: active ? "#D9D9D9" : undefined,
                  borderLeft: active ? "6px solid #00DF53" : undefined,
                  "&:hover": {
                    backgroundColor: "#D9D9D9 !important",
                    color: "#009A06 !important",
                    borderLeft: "6px solid #00DF53",
                  },
                };
            },
          }}
        >
          <MenuItem
            component={<Link href="/field" />}
            icon={<MdOutlineDashboard className="text-xl" />}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            component={<Link href="/field/onboard" />}
            icon={<FaHouseUser className="text-lg" />}
          >
            Register Home
          </MenuItem>
          <MenuItem
            component={<Link href="/field/residents" />}
            icon={<IoHomeOutline className="text-lg" />}
          >
            Home Residents
          </MenuItem>
          <MenuItem
            component={<Link href="/field/complaints" />}
            icon={<FiCreditCard className="text-xl" />}
          >
            Submit Complaints
          </MenuItem>
          <MenuItem
            component={<Link href="/settings" />}
            icon={<BsGear className="text-xl" />}
          >
            Settings
          </MenuItem>
          <MenuItem
            className="mt-24"
            icon={<TfiShiftLeft className="/admin/" />}
            onClick={() => setShowModal(true)}
          >
            Logout
          </MenuItem>
        </Menu>
      </Sidebar>
      <Modal title="" noHead>
        <LogoutModalUsers CloseModal={() => setShowModal(false)} />
      </Modal>
    </div>
  );
};

export default FieldSidebarLayout;