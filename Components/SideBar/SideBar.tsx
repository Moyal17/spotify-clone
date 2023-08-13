'use client';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import SideBarBox from '@/Components/SideBar/SideBarBox';
import SideBarItem from '@/Components/SideBar/SideBarItem';
import Library from '@/Components/Library/Library';
import { type Song } from '@/types/types';
interface SideBarProps {
  children: React.ReactNode
  songs: Song[]
}

const SideBar: React.FC<SideBarProps> = ({ children, songs }) => {
  const pathName = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: 'Home',
        isActive: pathName !== '/search',
        href: '/'
      },
      {
        icon: BiSearch,
        label: 'Search',
        isActive: pathName === '/search',
        href: '/search'
      }
    ],
    [pathName]
  );
  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <SideBarBox className="flex flex-col gap-y-4 px-5 py-4">
          {routes.map((item) => (
            <SideBarItem key={item.label} {...item} />
          ))}
        </SideBarBox>
        <SideBarBox className="overflow-y-hidden h-full">
          <Library songs={songs}/>
        </SideBarBox>
      </div>
      <main className="flex-1 h-full overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default SideBar;
