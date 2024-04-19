"use client";

import * as React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { MainNavItem } from "types";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/mobile-nav";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { buttonVariants } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Icons } from "./icons";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

const MiniNavLink = (props: {
  link: string;
  icon: React.ReactNode;
  text: string;
}) => {
  return (
    <SheetClose asChild>
      <Link
        href={props.link}
        aria-label={props.text}
        className="flex items-center gap-2 font-bold"
      >
        <div className="my-2 flex w-10 items-center justify-center">
          {props.icon}
        </div>
        <span>{props.text}</span>
      </Link>
    </SheetClose>
  );
};

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <div className="flex gap-6 md:gap-10">
      <Sheet>
        <SheetTrigger
          className={cn(buttonVariants({ variant: "ghost" }), "px-4 md:hidden")}
        >
          Menu
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="text-left">
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              Look around! You might find something interesting.
            </SheetDescription>
          </SheetHeader>
          <div>
            <Avatar>
              <AvatarImage
                src="https://github.com/kenjiginjo.png"
                alt="@kenjiginjo"
              />
              <AvatarFallback>KG</AvatarFallback>
            </Avatar>
            <div className="font-bold">Kenji Ginjo</div>
            <div>I'm the author!</div>
          </div>
          <div>
            <MiniNavLink
              link="/blog"
              icon={<Icons.article width={26} fill="black" />}
              text="Blog"
            />

            <MiniNavLink
              link="/learning"
              icon={<Icons.library width={26} fill="black" />}
              text="Learning Journey"
            />

            <MiniNavLink
              link="/skill"
              icon={<Icons.code width={26} fill="black" />}
              text="Skills & Expertise"
            />

            <MiniNavLink
              link="/portfolio"
              icon={<Icons.stacks width={26} fill="black" />}
              text="Portfolio"
            />

            <MiniNavLink
              link="/me"
              icon={<Icons.contact width={26} fill="black" />}
              text="About me"
            />
            <MiniNavLink
              link="/me"
              icon={<Icons.collaboration size={23} color="black" />}
              text="Collaboration"
            />
          </div>
          <div>settings</div>
          <div>sociallinke</div>
        </SheetContent>
      </Sheet>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80",
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
