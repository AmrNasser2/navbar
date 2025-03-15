import React from 'react';
import { Navbar, Typography, IconButton, Input } from "@material-tailwind/react";
import { HomeIcon, BriefcaseIcon, UsersIcon, BellIcon, ChatBubbleLeftEllipsisIcon, UserCircleIcon } from "@heroicons/react/24/outline";

const Pnav = () => {
  return (
    <div className='w-full'>
    <Navbar className="p-3 shadow-md flex justify-between items-center bg-white fixed top-0 left-0 w-full z-50">
      {/* Left - Logo and Search */}
      <div className="flex items-center gap-4">
        <Typography variant="h5" className="text-blue-700 font-bold">in</Typography>
        <Input type="text" placeholder="Search" className="hidden lg:block w-60" />
      </div>
      {/* Center - Navigation Icons */}
      <div className="flex gap-6 text-gray-600">
        <IconButton variant="text">
          <HomeIcon className="h-6 w-6" />
        </IconButton>
        <IconButton variant="text">
          <UsersIcon className="h-6 w-6" />
        </IconButton>
        <IconButton variant="text">
          <BriefcaseIcon className="h-6 w-6" />
        </IconButton>
        <IconButton variant="text">
          <ChatBubbleLeftEllipsisIcon className="h-6 w-6" />
        </IconButton>
        <IconButton variant="text">
          <BellIcon className="h-6 w-6" />
        </IconButton>
      </div>

      {/* Right - Profile */}
      <div className="flex items-center gap-3">
        <IconButton variant="text">
          <UserCircleIcon className="h-8 w-8 text-gray-600" />
        </IconButton>
      </div>
    </Navbar>
    </div>
  )
}

export default Pnav 
