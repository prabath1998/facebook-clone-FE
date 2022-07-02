import Image from "next/image";
import React from "react";
import { ImUsers } from "react-icons/im";
import SidebarItem from "./SidebarItem";
import {
  MdGroups,
  MdOutlineOndemandVideo,
  MdOutlineExpandMore,
} from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[302px]">
      <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
        />
        <p className="hidden sm:inline-flex font-medium">Prabath Udayanga</p>
      </div>
      <SidebarItem Icon={ImUsers} Value="Users" />
      <SidebarItem Icon={MdGroups} Value="Groups" />
      <SidebarItem Icon={AiOutlineShop} Value="MarketPlace" />
      <SidebarItem Icon={MdOutlineOndemandVideo} Value="Watch" />
      <SidebarItem Icon={BsStopwatch} Value="Memeries" />
      <SidebarItem Icon={MdOutlineExpandMore} Value="See more" />
    </div>
  );
};

export default Sidebar;