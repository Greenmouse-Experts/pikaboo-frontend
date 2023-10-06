import React, {FC} from 'react'
import AdminSidebarLayout from '../Sidebars/adminSidebar';
import { useAppSelector } from '@/shared/redux/store';
import FieldSidebarLayout from '../Sidebars/fieldSidebar';
import FleetSidebarLayout from '../Sidebars/fleetSidebar';
import WasteSidebarLayout from '../Sidebars/wasteSidebar';
interface Props {
  setToggled: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  toggled:boolean,
  collapsed: boolean;
}

const SidebarLayout:FC<Props>  = ({setToggled, toggled, collapsed})  => {
  const user = useAppSelector((state) => state.user.user.user_type )

  if(user == "Administrator"){
    return <AdminSidebarLayout collapsed={collapsed} setToggled={setToggled} toggled={toggled}/>
  }else if(user === "Field Operator"){
    return <FieldSidebarLayout  collapsed={collapsed} setToggled={setToggled} toggled={toggled}/>
  }else if(user === "Fleet Manager"){
    return <FleetSidebarLayout  collapsed={collapsed} setToggled={setToggled} toggled={toggled}/>
  }else if(user === "Waste Manager"){
    return <WasteSidebarLayout  collapsed={collapsed} setToggled={setToggled} toggled={toggled}/>
  }
  return (<></>
  )
}

export default SidebarLayout