"use client";
import { ChatBox } from "@/components/chat-box";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { Separator } from "@/components/ui/separator";
import { clientConfig } from "@/config/client";
import useSocket from "@/hooks/use-socket";
import Link from "next/link";
import React from "react";

interface ChatProps {
  agent: UserProfile;
  user: UserProfile;
}

export const Chat = ({ user, agent }: ChatProps) => {
  const socket = useSocket();
  const [messages, setMessages] = React.useState<ChatMessage[]>([]);
  const [input, setInput] = React.useState("");
  // TODO： 切走的时候要断开socket 回来的时候在连接
  // TODO： 发送的消息要存起来 对吧
  // TODO： 消息要有提示音
  // TODO： 消息要有loading状态
  // TODO： 消息要有发送失败的状态
  // TODO： 消息要有发送成功的状态
  // TODO： 消息要有发送中的状态
  // TODO： 消息要验证内容是否安全
  React.useEffect(() => {
    if (socket) {
      socket.on("receiveMessage", ({ user, message }, callback) => {
        setMessages((prev) => {
          return [...prev, { role: "agent", content: message }];
        });
        callback(user);
      });
    }
    console.log("socket", socket);
  }, [socket]);

  const sendMessage = () => {
    if (socket) {
      socket
        .timeout(2000)
        .emit("message", { user, message: input }, (err, response) => {
          if (err) {
            console.error(err);
            return;
          } else {
            setMessages([...messages, { role: "user", content: input }]);
            setInput("");
          }
        });
    }
  };

  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="flex w-full items-center justify-between p-3">
        <Link href="/">
          <Icons.chevronLeft />
        </Link>

        <div className="flex items-center">
          <MainNav items={clientConfig.mainNav} />
        </div>
      </div>
      <Separator />
      <ChatBox
        user={user}
        agent={agent}
        messages={messages}
        input={input}
        setInput={setInput}
        onSubmit={(event) => {
          event.preventDefault();
          sendMessage();
        }}
      />
    </div>
  );
};
