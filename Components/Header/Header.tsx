"use client"
import React from "react";
import {useRouter} from 'next/navigation';
import {twMerge} from "tailwind-merge";
import {RxCaretLeft, RxCaretRight} from "react-icons/rx"
import {HiHome} from "react-icons/hi";
import {BiSearch} from "react-icons/bi";
import Button from "@/Components/Button/Button";

interface HeaderProps {
  children: React.ReactNode,
  className?: string
}

const Header: React.FC<HeaderProps> = ({children, className}) => {
  const router = useRouter();
  const handleLogout = () => {
    console.log('handleLogout');
  }
  return (
    <div className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6`, className)}>
      <div className="w-full mb-4 flex items-center justify-between">
        {/* Buttons on Desktop */}
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
            <RxCaretLeft size={35} className="text-white"/>
          </button>
          <button
            onClick={() => router.forward()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
            <RxCaretRight size={35} className="text-white"/>
          </button>
        </div>
        {/* Buttons on Mobile */}
        <div className="flex md:hidden gap-x-2 items-center">
          <button
            className="rounded-full bg-white flex items-center justify-center hover:opacity-75 transition p-2">
            <HiHome size={20} className="text-black"/>
          </button>
          <button
            className="rounded-full bg-white flex items-center justify-center hover:opacity-75 transition p-2">
            <BiSearch size={20} className="text-black"/>
          </button>
        </div>
        {/* Body */}
        <div className="flex items-center justify-between gap-x-4">
          <>
            <div>
              <Button className="bg-transparent text-neutral-300 font-medium">Sign Up</Button>
            </div>
            <div>
              <Button className="bg-white px-6 py-2">Log In</Button>
            </div>
          </>
        </div>
      </div>
      { children }
    </div>
  )
}

export default Header;