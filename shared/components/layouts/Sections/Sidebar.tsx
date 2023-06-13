import React, {FC} from 'react'
import AdminSidebarLayout from '../Sidebars/adminSidebar';
interface Props {
  setToggled: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  toggled:boolean,
}

const SidebarLayout:FC<Props>  = ({setToggled, toggled})  => {
  return (
    <div className="">
      <AdminSidebarLayout  setToggled={setToggled} toggled={toggled}/>
    </div>
  )
}

export default SidebarLayout