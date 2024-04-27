import { Icons } from "@/components/icons";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";
import { AdminMenu } from "./menu";
import { Separator } from "@/components/ui/separator";
import { AdminSocketProvider } from "@/contexts/admin-socket-context";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <AdminSocketProvider>
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-screen items-stretch"
      >
        <ResizablePanel defaultSize={205}>
          <div className="container py-6">
            <Link
              href="/"
              className="flex items-center space-x-2"
              aria-label="Homepage"
            >
              <Icons.logo />
              <span className="font-bold sm:inline-block">
                {siteConfig.name}
              </span>
            </Link>
          </div>
          <Separator />
          <AdminMenu />
        </ResizablePanel>
        <ResizableHandle />
        {children}
      </ResizablePanelGroup>
    </AdminSocketProvider>
  );
}
