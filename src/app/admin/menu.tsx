"use client";
import { Inbox, File, AreaChart } from "lucide-react";
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export const AdminMenu = () => {
  const pathname = usePathname();
  const links = useMemo(() => {
    return [
      {
        title: "Inbox",
        label: "128",
        icon: Inbox,
        link: "/admin/inbox",
      },
      {
        title: "Posts",
        label: "9",
        icon: File,
        link: "/admin/posts",
      },
      {
        title: "Stats",
        label: "",
        icon: AreaChart,
        link: "admin/stats",
      },
    ].map((l) => {
      const variant: "ghost" | "default" = pathname.startsWith(l.link)
        ? "default"
        : "ghost";
      return {
        ...l,
        variant,
      };
    });
  }, [pathname]);

  return (
    <div className="group flex flex-col gap-4 py-2 ">
      <nav className="grid gap-1 px-2">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.link}
            className={cn(
              buttonVariants({ variant: link.variant, size: "sm" }),
              link.variant === "default" &&
                "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
              "justify-start",
            )}
          >
            <link.icon className="mr-2 h-4 w-4" />
            {link.title}
            {link.label && (
              <span
                className={cn(
                  "ml-auto",
                  link.variant === "default" &&
                    "text-background dark:text-white",
                )}
              >
                {link.label}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
};
