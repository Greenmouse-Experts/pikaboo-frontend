import React, { PropsWithChildren, useState } from "react";
import SidebarLayout from "./Sections/Sidebar";
import Header from "./Sections/Header";
import AddAuth from "./AddAuth";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  const [toggled, setToggled] = React.useState(false);
  const [collapsed, setCollapsed] = useState(false)
  
  return (
    <div className="flex w-full">
      <div className={collapsed? 'lg:w-[80px]' : 'lg:w-[300px]'}>
        <SidebarLayout setToggled={setToggled} collapsed={collapsed} toggled={toggled} />
      </div>
      <div className="w-full fixed bg-white index-10 px-3 top-2">
        <Header setToggled={setToggled} collapse={collapsed} setCollapse={setCollapsed} toggled={toggled}/>
      </div>
      <div className="relative w-full overflow-hidden  pt-16">
        <div className="bg-dash py-10 min-h-screen px-3 lg:px-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AddAuth(DashboardLayout);
