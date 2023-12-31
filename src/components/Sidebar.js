import React, { useState } from "react";
import { AiFillLock, AiOutlineQuestionCircle } from "react-icons/ai";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { menus } from "@/utils/menu";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <>
      <section className="bg-primary h-[94vh] px-4 py-1 flex gap-4 flex-col ">
        <div className="h-20 flex items-center justify-center">
          <img className="w-24 object-cover" src="/images/logo1.png" alt="" />
        </div>
        <ul className="space-y-4 mb-4 overflow-y-auto">
          {menus.map((menu, index) => (
            <li key={index}>
              <>
                <Link
                  href={menu.href}
                  className={`flex items-center text-sm justify-between py-2 px-2 cursor-pointer ${
                    currentPath === menu.href
                      ? "text-[#02787B] font-semibold"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6">{menu.icon}</span>{" "}
                    <span>{menu.label}</span>
                  </div>
                </Link>
              </>
            </li>
          ))}
        </ul>
        <div style={{fontSize:'10px'}} className="space-y-4 mb-4">
          <div className="flex items-center gap-2">
            <AiFillLock className="text-xl" />
            <p>Logout</p>
          </div>
          <div className="flex items-center gap-2">
            <IoMdSettings className="text-xl" />
            <p>Settings</p>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineQuestionCircle className="text-xl" />
            <p>Support</p>
          </div>
          <div className="flex items-center gap-2">
            <BsFillExclamationCircleFill className="text-xl" />
            <p>Make - Easy HMIS v1.0</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
