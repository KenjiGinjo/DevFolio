import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ResizableHandle, ResizablePanel } from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
import { Search } from "lucide-react";
import { Chat } from "./components/chat";
import { auth } from "@/auth";
import { Session } from "next-auth";

export const metadata = {
  title: "Inbox",
};

export default async function DashboardPage() {
  const session = (await auth()) as Session;
  const me = session.user as UserProfile;
  return (
    <>
      <ResizablePanel defaultSize={440} minSize={30}>
        <Tabs defaultValue="chat">
          <div className="flex items-center px-4 py-2">
            <h1 className="text-xl font-bold">Inbox</h1>
            <TabsList className="ml-auto">
              <TabsTrigger
                value="chat"
                className="text-zinc-600 dark:text-zinc-200"
              >
                Chats
              </TabsTrigger>
              <TabsTrigger
                value="comment"
                className="text-zinc-600 dark:text-zinc-200"
              >
                Contacts
              </TabsTrigger>
            </TabsList>
          </div>
          <Separator />
          <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <form>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search" className="pl-8" />
              </div>
            </form>
          </div>
          <TabsContent value="chat" className="m-0">
            <div className="flex flex-col gap-2 p-4 pt-0">
              <button
                className={cn(
                  "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
                  "bg-muted",
                )}
              >
                <div className="flex w-full flex-col gap-1">
                  <div className="flex items-center">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src="/avatars/01.png" />
                          <AvatarFallback>OM</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium leading-none">
                            Sofia Davis
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Hello there, I want to ask you something
                          </p>

                          <div
                            className={cn(
                              "ml-auto text-xs",
                              "text-foreground",
                              "text-muted-foreground",
                            )}
                          >
                            {formatDistanceToNow(new Date(), {
                              addSuffix: true,
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </TabsContent>
          <TabsContent value="comment" className="m-0"></TabsContent>
        </Tabs>
      </ResizablePanel>
      <ResizableHandle />

      <ResizablePanel defaultSize={655}>
        <Chat me={me} />
      </ResizablePanel>
    </>
  );
}
