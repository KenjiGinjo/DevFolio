"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ResizableHandle, ResizablePanel } from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
import { Search } from "lucide-react";
import { CardsChat } from "./chat";

export const AdminInbox = () => {
  return (
    <>
      <ResizablePanel defaultSize={655}>
        <CardsChat />
      </ResizablePanel>
    </>
  );
};
