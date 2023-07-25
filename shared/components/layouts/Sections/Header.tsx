import React,{FC, useEffect, useState} from "react";
import Image from "next/image";
import { HiOutlineMenu } from "react-icons/hi";
import { FaRegThumbsUp } from "react-icons/fa";
import { BsBell, BsBellFill } from "react-icons/bs";
import { useAppSelector } from "@/shared/redux/store";
import Initials from "@/shared/utils/initials";
import Link from "next/link";
import Notification from "../../helpers/Notification";
import { Menu, MenuHandler, MenuItem, MenuList, Button } from "../../Ui/dropdown";
import { useAdminGetUnreadNotifyQuery, useGetUnreadNotifyQuery } from "@/services/api/routineSlice";
import { formatName } from "@/shared/utils/format";
import { useRouter } from "next/router";

interface Props {
  setToggled: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  toggled:boolean,
}
const Header:FC<Props> = ({setToggled, toggled}) => {
  const user = useAppSelector((state) => state.user.user )
  const [notify, setNotify] = useState<any>()
  const {data, isLoading} = useAdminGetUnreadNotifyQuery()
  const {data:note, isLoading:Loading} = useGetUnreadNotifyQuery()
  const router = useRouter()

  useEffect(() => {
    if(user.user_type === "Administrator"){
      setNotify(data?.data)
    }else setNotify(note?.data)
  }, [data, note])

  const gotoNotify = () => {
    if(user.user_type === "Administrator"){
      router.push('/admin/notification')
    }else router.push('/notification')
  }

  return (
    <>
    <Notification/>
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
                <p className="fs-500 fw-600">{user.user_type} Dashboard</p>
                <FaRegThumbsUp
                  className="text-[#ffcc33]"
                  onClick={() => setToggled(!toggled)}
                />
              </div>
              <div className="flex gap-x-4 items-center">
              <Menu placement="bottom-end">
                <MenuHandler>
                  <Button className="p-3 bg-transparent !shadow-none">
                    <div className="bg-[#F4F5F7] px-2 rounded-lg py-2 relative">
                      <BsBell className="lg:text-xl text-lg text-primary" />
                      <p className="absolute index-30 -top-2 left-3/4 border circle px-1 text-white text-xs bg-primary">
                        {notify?.length}
                      </p>
                    </div>
                  </Button>
                </MenuHandler>
                <MenuList className="p-0">
                  <MenuItem className="p-0 pb-4 w-64 lg:w-72">
                    <p className="mb-3 text-white bg-primary py-2 pl-3 text-lg fw-600">
                      Notifications
                    </p>
                  </MenuItem>
                  {
                    notify && notify.slice(0,5).map((item:any) => (
                      <div className="flex mb-2 gap-x-2 pb-2 lg:w-72 border-b items-center">
                        <Image src={item.image} alt='image' width={50} height={50} className="circle w-12 border"/>
                        <div className="">
                          <p className="fs-400">{formatName(item.body, 43)}</p>
                        </div>
                      </div>
                    ))
                  }
                  <MenuItem onClick={gotoNotify}>
                      <p className="text-center hover:text-orange-500">
                        View All
                      </p></MenuItem>
                </MenuList>
              </Menu>
              <Link href='/admin/settings' className="flex justify-between gap-x-4 items-center">
                {/* <BsBellFill className="text-2xl text-primary" /> */}
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
        </div>
    </>
  );
};

export default Header;
