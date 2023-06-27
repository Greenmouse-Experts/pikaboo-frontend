import React, {FC} from 'react'
import AdminSidebarLayout from '../Sidebars/adminSidebar';
import { useAppSelector } from '@/shared/redux/store';
interface Props {
  setToggled: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  toggled:boolean,
}

const SidebarLayout:FC<Props>  = ({setToggled, toggled})  => {
  const user = useAppSelector((state) => state.user.user.user_type )

  if(user == "Administrator"){
    return <AdminSidebarLayout  setToggled={setToggled} toggled={toggled}/>
  }
  return (
    <div className="">
      
    </div>
  )
}

export default SidebarLayout