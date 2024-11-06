"use client";

import { ChatBox } from "@/components/chat-box";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { Separator } from "@/components/ui/separator";
import { clientConfig } from "@/config/client";
import useAdminSocket from "@/hooks/use-admin-socket";
import Link from "next/link";
import React from "react";

interface ChatProps {
  me: UserProfile | null;
}

export const Chat = ({ me }: ChatProps) => {
  const socket = useAdminSocket();
  const [messages, setMessages] = React.useState<ChatMessage[]>([]);
  const [input, setInput] = React.useState("");
  const [user, setUser] = React.useState<UserProfile>({
    id: "1",
    name: "John Doe",
    email: "",
    image: "",
  });

  React.useEffect(() => {
    if (socket) {
      socket.on("receiveMessage", ({ message, user }, callback) => {
        setUser(user);
        setMessages([...messages, { role: "agent", content: message }]);
        callback({ userId: user.id });
      });
    }
  }, [socket]);

  const sendMessage = () => {
    if (socket) {
      socket
        .timeout(2000)
        .emit("message", { user, message: input }, (err, responses) => {
          console.log(err);
          console.log(responses);
          if (err) return;
          {
            setMessages([...messages, { role: "user", content: input }]);
            setInput("");
          }
        });
    }
  };

  return (
    <div className="flex h-full w-full">
      {me && (
        <ChatBox
          user={me}
          agent={user}
          messages={messages}
          input={input}
          setInput={setInput}
          onSubmit={(event) => {
            event.preventDefault();
            sendMessage();
          }}
        />
      )}
    </div>
  );
};
