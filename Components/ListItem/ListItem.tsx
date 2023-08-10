"use client"
import {useRouter} from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import Image from "next/image";
interface ListItemProps {
  image: string,
  name: string,
  href: string,
  className?: string
}

const ListItem: React.FC<ListItemProps> = ({image, name, href, className}) => {
  const router = useRouter();

  const onClick = () => router.push(href);
  return (
    <button className="relative group flex items-center rounded-md overflow-hidden gap-x-4
    bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4">
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image src={image} alt={name} fill className="object-cover"/>
      </div>
      <p>{ name }</p>
    </button>
  )
}

export default ListItem;