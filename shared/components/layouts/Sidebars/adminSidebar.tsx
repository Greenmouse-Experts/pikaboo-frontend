import React, { FC } from "react";
import Link from "next/link";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { BsGear, BsPinMap } from "react-icons/bs";
import { MdOutlineDashboard } from "react-icons/md";
import { TfiShiftLeft } from "react-icons/tfi";
import { FiCreditCard } from "react-icons/fi";
import { AiOutlinePieChart, AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { IoHomeOutline, IoNotificationsOutline } from "react-icons/io5";
import useModal from "@/hooks/useModal";
import LogoutModal from "../../admin/dashboard/Logout";

interface Props {
  setToggled: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  toggled: boolean;
}

const AdminSidebarLayout: FC<Props> = ({ setToggled, toggled }) => {
  const { Modal, setShowModal } = useModal();

  return (
    <div className="left-0 bottom-0 fixed index-30 bg-white h-[90vh] lg:h-[90vh]">
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
            component={<Link href="/admin" />}
            icon={<MdOutlineDashboard className="text-xl" />}
          >
            Dashboard
          </MenuItem>
          <SubMenu label="Staffs" icon={<HiOutlineUser className="text-lg" />}>
            <MenuItem
              className="!hover:bg-[#6151DD]"
              component={<Link href="/admin/fleet" />}
            >
              Fleet Managers
            </MenuItem>
            <MenuItem component={<Link href="/admin/waste" />}>
              Waste Managers
            </MenuItem>
            <MenuItem component={<Link href="/admin/field" />}>
              Field Operators
            </MenuItem>
          </SubMenu>
          <MenuItem
            component={<Link href="/admin/waste-area" />}
            icon={<BsPinMap className="text-lg" />}
          >
            Waste Areas
          </MenuItem>
          <MenuItem
            component={<Link href="/admin/residents" />}
            icon={<IoHomeOutline className="text-lg" />}
          >
            Home Residents
          </MenuItem>
          <MenuItem
            component={<Link href="/admin/special" />}
            icon={<AiOutlinePieChart className="text-xl" />}
          >
            Special Requests
          </MenuItem>
          <MenuItem
            component={<Link href="/admin/payments" />}
            icon={<FiCreditCard className="text-xl" />}
          >
            Payment History
          </MenuItem>
          <SubMenu
            label="Shop"
            icon={<AiOutlineShoppingCart className="text-xl" />}
          >
            <MenuItem
              component={<Link href="/admin/shop/category" />}
              // icon={<AiOutlineShoppingCart className="text-xl" />}
            >
              Categories
            </MenuItem>
            <MenuItem
              component={<Link href="/admin/shop" />}
              // icon={<AiOutlineShoppingCart className="text-xl" />}
            >
              Products
            </MenuItem>
          </SubMenu>
          <MenuItem
            component={<Link href="/admin/notification" />}
            icon={<IoNotificationsOutline className="text-xl" />}
          >
            Notification
          </MenuItem>
          <MenuItem
            component={<Link href="/admin/complaints" />}
            icon={<FiCreditCard className="text-xl" />}
          >
            Feedback
          </MenuItem>
          <MenuItem
            component={<Link href="/admin/settings" />}
            icon={<BsGear className="text-xl" />}
          >
            Settings
          </MenuItem>
          <MenuItem
            className="mt-16"
            icon={<TfiShiftLeft className="/admin/" />}
            onClick={() => setShowModal(true)}
          >
            Logout
          </MenuItem>
        </Menu>
      </Sidebar>
      <Modal title="" noHead>
        <LogoutModal CloseModal={() => setShowModal(false)} />
      </Modal>
    </div>
  );
};

export default AdminSidebarLayout;
