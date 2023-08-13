'use client'
import { MyUserContextProvider } from '@/hooks/useUser'

interface SupabaseProviderProps {
  children: React.ReactNode
}

// eslint-disable-next-line react/prop-types
const UserProvider: React.FC<SupabaseProviderProps> = ({ children }) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>
}

export default UserProvider
