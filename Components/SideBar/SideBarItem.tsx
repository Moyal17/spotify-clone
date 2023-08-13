import { twMerge } from "tailwind-merge";
import { IconType } from "react-icons/lib";
import Link from "next/link";

interface SideBarItemProps {
  icon: IconType;
  label: string;
  href: string;
  isActive?: boolean;
  className?: string;
}

const SideBarBox: React.FC<SideBarItemProps> = ({
  icon: Icon,
  href,
  label,
  isActive,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `flex 
     flex-row h-auto item-center w-full gap-x-4 font-medium
     cursor-pointer hover:text-white transition text-neutral-400 py-1`,
        isActive && "text-white",
      )}
    >
      <Icon size={26} />
      <p className="truncate w-full">{label}</p>
    </Link>
  );
};

export default SideBarBox;
