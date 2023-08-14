import { twMerge } from 'tailwind-merge';
interface SideBarBoxProps {
  children: React.ReactNode
  className?: string
}

const SideBarBox: React.FC<SideBarBoxProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge('bg-neutral-900 rounded-lg h-fit w-full', className)}
    >
      {children}
    </div>
  );
};

export default SideBarBox;
