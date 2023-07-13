import React, {FC} from "react";
import Link from "next/link";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { BsGear, BsPinMap } from "react-icons/bs";
import { MdOutlineDashboard } from "react-icons/md";
import { TfiShiftLeft } from "react-icons/tfi";
import { RiDeleteBinLine} from "react-icons/ri";
import { BsTruck } from 'react-icons/bs'
import useModal from "@/hooks/useModal";
import LogoutModalUsers from "../../settings/LogoutUsers";

interface Props {
    setToggled: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    toggled:boolean,
  }

const WasteSidebarLayout:FC<Props>  = ({setToggled, toggled}) => {

  const {Modal, setShowModal} = useModal()

  return (
    <div className="left-0 bottom-0 fixed index-30 lg:h-[90vh]">
      <Sidebar
        customBreakPoint="960px"
        className="lg:h-[90vh] dash-side-shade rounded-lg lg:ml-3 w-64 fs-500 fw-500 pt-12"
        onBackdropClick={() => setToggled(false)} 
        toggled={toggled}
        backgroundColor="linear-gradient(90deg, #6B5AED 0%, #8D7EFF 100%)"
      >
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
            component={<Link href="/waste" />}
            icon={<MdOutlineDashboard className="text-xl" />}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            component={<Link href="/waste/trucks" />}
            icon={<BsTruck className="text-lg" />}
          >
            Trucks
          </MenuItem>
          <MenuItem
            component={<Link href="/waste/service" />}
            icon={<BsTruck className="text-lg" />}
          >
            Service Personnel
          </MenuItem>
          <MenuItem
            component={<Link href="/waste/cleanups" />}
            icon={<RiDeleteBinLine className="text-lg" />}
          >
            Cleanups
          </MenuItem>
          <MenuItem
            component={<Link href="/settings" />}
            icon={<BsGear className="text-xl" />}
          >
            Settings
          </MenuItem>
          <MenuItem
            className="mt-24"
            icon={<TfiShiftLeft className="" />}
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

export default WasteSidebarLayout;