"use client"
import React, {useState} from "react";
import {MyUserContextProvider} from '@/hook/useUser'

interface SupabaseProviderProps {
  children: React.ReactNode
}

const UserProvider: React.FC<SupabaseProviderProps> = ({ children }) => {
  return(
    <MyUserContextProvider>
      {children}
    </MyUserContextProvider>
  )
}


export default UserProvider;