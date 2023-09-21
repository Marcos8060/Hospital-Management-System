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
      <section className="bg-primary h-[94vh] overflow-y-auto p-4 flex flex-col justify-between">
        <div className="">
          <img className="w-24" src="/images/logo.png" alt="" />
        </div>
        <ul className="space-y-4 my-4">
          {menus.map((menu, index) => (
            <li key={index}>
              <>
                <Link
                  href={menu.href}
                  className={`flex items-center justify-between py-2 px-2 cursor-pointer ${
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
        <div className="space-y-4 text-xs">
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
