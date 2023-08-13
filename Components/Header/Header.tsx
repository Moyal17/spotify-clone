'use client'
import type React from 'react'
import { useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import { FaUserAlt } from 'react-icons/fa'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Button from '@/Components/Buttons/Button'
import useAuthModal from '@/hooks/useAuthModal'
import { useUser } from '@/hooks/useUser'

interface HeaderProps {
  children: React.ReactNode
  className?: string
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter()
  const authModal = useAuthModal()
  const supabaseClient = useSupabaseClient()
  const { user } = useUser()
  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut()
    router.refresh()
    if (error != null) {
      console.log('handleLogout error: ', error)
    }
  }
  return (
    <div
      className={twMerge(
        'h-fit bg-gradient-to-b from-emerald-800 p-6',
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        {/* Buttons on Desktop */}
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => { router.back() }}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretLeft size={35} className="text-white" />
          </button>
          <button
            onClick={() => { router.forward() }}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <RxCaretRight size={35} className="text-white" />
          </button>
        </div>
        {/* Buttons on Mobile */}
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full bg-white flex items-center justify-center hover:opacity-75 transition p-2">
            <HiHome size={20} className="text-black" />
          </button>
          <button className="rounded-full bg-white flex items-center justify-center hover:opacity-75 transition p-2">
            <BiSearch size={20} className="text-black" />
          </button>
        </div>
        {/* LOG IN - SIGN UP - Buttons */}
        <div className="flex items-center justify-between gap-x-4">
          { user ? (
            <div className="flex flex-row flex-no-wrap gap-x-4 items-center">
              <Button
                className="bg-white px-6 py-2"
                onClick={() => handleLogout()}>
                Log out
              </Button>
              <Button
                onClick={() => { router.push('/account') }}
                className="bg-white w-fit">
                <FaUserAlt/>
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button
                  className="bg-transparent text-neutral-300 font-medium"
                  onClick={authModal.onOpen}
                >
                  Sign Up
                </Button>
              </div>
              <div>
                <Button className="bg-white px-6 py-2" onClick={authModal.onOpen}>
                  Log In
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  )
}

export default Header
