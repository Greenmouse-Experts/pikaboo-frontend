import React, {FC} from "react";
import Link from "next/link";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { BsGear, BsPinMap } from "react-icons/bs";
import { MdOutlineDashboard } from "react-icons/md";
import { TfiShiftLeft } from "react-icons/tfi";
import { FiCreditCard } from "react-icons/fi";
import { AiOutlinePieChart } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";

interface Props {
    setToggled: (value: boolean | ((prevVar: boolean) => boolean)) => void;
    toggled:boolean,
  }

const AdminSidebarLayout:FC<Props>  = ({setToggled, toggled}) => {
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
            component={<Link href="/user/dashboard" />}
            icon={<MdOutlineDashboard className="text-xl" />}
          >
            Dashboard
          </MenuItem>
          <SubMenu label="Users" icon={<HiOutlineUser  className="text-lg" />}>
            <MenuItem
              className="!hover:bg-[#6151DD]"
              component={<Link href="/settings" />}
            >
              Fleet Managers
            </MenuItem>
            <MenuItem component={<Link href="/settings/customers" />}>
              Waste Managers
            </MenuItem>
            <MenuItem component={<Link href="/settings/logs" />}>
              Field Operators
            </MenuItem>
            <MenuItem component={<Link href="/settings/logs" />}>
              House Owners
            </MenuItem>
          </SubMenu>
          <MenuItem
            component={<Link href="/user/integrations" />}
            icon={<BsPinMap className="text-lg" />}
          >
            Waste Areas
          </MenuItem>
          <MenuItem
            component={<Link href="/dashboard" />}
            icon={<AiOutlinePieChart className="text-xl" />}
          >
            House Requests
          </MenuItem>
          <MenuItem
            component={<Link href="/spend" />}
            icon={<FiCreditCard className="text-xl" />}
          >
            Subscription
          </MenuItem>
          <MenuItem
            component={<Link href="/spend" />}
            icon={<BsGear className="text-xl" />}
          >
            Settings
          </MenuItem>
          <MenuItem
            className="mt-24"
            icon={<TfiShiftLeft className="text-xl" />}
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
  );
};

export default AdminSidebarLayout;
