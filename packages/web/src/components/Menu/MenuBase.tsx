import { createContext, useContext, useEffect, useRef, useState } from "react";
import { SlMenu } from "react-icons/sl";
import { IconButton } from "../IconButton/client";
import { cssAnimation } from "@/utils/css-animation";

export const MenuContext = createContext({
  open: false,
  toggle: () => {},
});

MenuContext.displayName = "MenuContext";

export type MenuBaseProps = {
  children: React.ReactNode;
};
export const MenuBase = ({ children }: MenuBaseProps) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);
  return (
    <div ref={menuRef} className="relative z-10">
      <MenuContext.Provider value={{ open, toggle }}>
        {children}
      </MenuContext.Provider>
    </div>
  );
};

export type MenuBaseTriggerProps = {
  icon: React.ReactNode;
};
export const MenuBaseTrigger = ({ icon }: MenuBaseTriggerProps) => {
  const { toggle } = useContext(MenuContext);
  return <IconButton icon={icon} onClick={toggle} />;
};

export type MenuBaseListProps = {
  children: React.ReactNode;
};
export const MenuBaseList = ({ children }: MenuBaseListProps) => {
  const { open } = useContext(MenuContext);
  return (
    <div
      className={`${open ? "block" : "hidden"} absolute right-0 top-full mt-2 rounded border-[1px] border-gray-300 bg-white py-2 shadow`}
    >
      {children}
    </div>
  );
};

export type MenuBaseListItemProps = {
  children: React.ReactNode;
};

export const MenuBaseListItem = ({ children }: MenuBaseListItemProps) => {
  const { toggle } = useContext(MenuContext);
  return (
    <div
      className="relative overflow-hidden p-3 hover:bg-gray-100"
      onClick={(e) => {
        cssAnimation.wave(e, { type: "rect" });
        setTimeout(() => {
          toggle();
        }, 300);
      }}
    >
      {children}
    </div>
  );
};
