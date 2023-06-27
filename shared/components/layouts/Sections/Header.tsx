import React,{FC} from "react";
import Image from "next/image";
import { HiOutlineMenu } from "react-icons/hi";
import { FaRegThumbsUp } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import { useAppSelector } from "@/shared/redux/store";
import Initials from "@/shared/utils/initials";
import Link from "next/link";

interface Props {
  setToggled: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  toggled:boolean,
}
const Header:FC<Props> = ({setToggled, toggled}) => {
  const user = useAppSelector((state) => state.user.user )
  return (
    <>
      <div className="dash-head-shade p-3 h-[70px] rounded-lg">
          <div className="flex items-center gap-x-12">
            <div className="md:w-64 w-6/12 flex justify-between items-center">
              <Image
                src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1687429795/pikaboo/Group_48061_m4vob9.png"
                alt="logo"
                width={200}
                height={100}
                className="w-32"
              />
              <HiOutlineMenu className="text-2xl cursor-pointer" />
            </div>
            <div className="flex w-4/12 md:w-full justify-end lg:justify-between items-center">
              <div className="hidden lg:flex gap-x-2 items-center">
                <p className="fs-500 fw-600">Super Admin Dashboard</p>
                <FaRegThumbsUp
                  className="text-[#ffcc33]"
                  onClick={() => setToggled(!toggled)}
                />
              </div>
              <Link href='/admin/settings' className="flex justify-between gap-x-4 items-center">
                <BsBellFill className="text-2xl text-primary" />
                <div className="flex items-center gap-x-1">
                  {
                    user.avatar && <Image
                    src={user.avatar}
                    alt="profile"
                    width={100}
                    height={100}
                    className="w-10 h-10 circle"
                  />
                  }
                  {
                    !user.avatar && <Initials fname={user.firstname} lname={user.lastname} size={40} text="16px"/>
                  }
                  <p className="fw-500 fs-500 hidden lg:block">
                    {`${user.firstname} ${user.lastname}`}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
    </>
  );
};

export default Header;
