"use client";
import {
  MenuBase,
  MenuBaseList,
  MenuBaseListItem,
  MenuBaseTrigger,
} from "./MenuBase";
import { SlMenu } from "react-icons/sl";
import Link from "next/link";
type Path = {
  href: string;
  label: string;
};
export type MenuProps = {
  paths: Path[];
};
export const Menu = ({ paths }: MenuProps) => {
  return (
    <MenuBase>
      <MenuBaseTrigger icon={<SlMenu />} />
      <MenuBaseList>
        {paths.map((path) => {
          return (
            <MenuBaseListItem>
              <Link href={path.href} className="block w-[240px] text-center ">
                {path.label}
              </Link>
            </MenuBaseListItem>
          );
        })}
      </MenuBaseList>
    </MenuBase>
  );
};
