"use client"
import {usePathname} from "next/navigation";
import {useMemo} from "react";

interface SideBarProps {
  children: React.ReactNode
}

const SideBar: React.FC<SideBarProps> = ({children}) => {
  const pathName = usePathname()
  const routes = useMemo(() => [
    {
      label: 'Home',
      active: pathName !== '/search',
      href: '/'
    },
    {
      label: 'Search',
      active: pathName === '/search',
      href: '/search'
    }
  ], [pathName])
  return (
    <div>
      {children}
    </div>
  )
}

export default SideBar;