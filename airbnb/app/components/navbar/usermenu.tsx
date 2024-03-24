"use client";

import { AiOutlineAccountBook, AiOutlineMenu } from "react-icons/ai";
import Avatar from "../avatar";
import React, { useCallback, useState } from "react";
import MenuItem from "./menuitem";
import useRegisterModal from "@/app/hooks/useregistermodel";
import LoginModal from "../modals/loginmodal";
import useLoginModal from "@/app/hooks/useloginmodel";
// import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";

interface userMenuProps{
  currentUser?: SafeUser | null;
}

const UserMenu:React.FC<userMenuProps> = ({
  currentUser
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const toggleOpen = useCallback(() => {
    //reverse the current value
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative ">
      <div className="flex flex-row items-center gap-3 ">
        <div
          onClick={() => {}}
          className="hidden px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer md:block hover:bg-neutral-100 "
        >
          Airbnb Home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block ">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="absolute 
        rounded-xl 
        shadow-md
        w-[40vw]
        md:w-3/4 
        bg-white 
        overflow-hidden 
        right-0 
        top-12 
        text-sm
"
>
<div className="flex flex-col cursor-pointer">
  {currentUser ? (
    <>
      <MenuItem 
        label="My trips" 
        onClick={()=>{}}
      />
      <MenuItem 
        label="My favorites" 
        onClick={()=>{}}
      />
      <MenuItem 
        label="My reservations" 
        onClick={()=>{}}
      />
      <MenuItem 
        label="My properties" 
        onClick={()=>{}}
      />
      <MenuItem 
        label="Airbnb my home" 
        onClick={()=>{}}
      />
      <hr />
      <MenuItem 
        label="Logout" 
        onClick={() => signOut()}
      />
    </>
  ) : (
    <>
      <MenuItem 
        label="Login" 
        onClick={loginModal.onOpen}
      />
      <MenuItem 
        label="Sign up" 
        onClick={registerModal.onOpen}
      />
    </>
  )}
</div>
</div>
)}
</div>
);
}


export default UserMenu;
