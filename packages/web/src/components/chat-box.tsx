"use client";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FormEvent } from "react";
import { Send } from "lucide-react";
import { SafeFixedBottomWrap } from "./SafeFixedBottomWrap";
import { VariableSizeList } from "react-window";
import React from "react";
import AutoSizer from "react-virtualized-auto-sizer";

export interface ChatBoxProps {
  user: UserProfile;
  agent: UserProfile;
  showBoxTitle?: boolean;
  messages: ChatMessage[];
  input: string;
  setInput: (input: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const ChatAvatar = ({
  user,
  role,
}: {
  user: UserProfile;
  role: ChatMessageRole;
}) => {
  return (
    <div
      className={cn(
        "mb-2 flex ",
        role === "agent" ? "justify-start" : "justify-end",
      )}
    >
      <div className="flex items-center space-x-2">
        <Avatar className="h-[32px] w-[32px]">
          {user.image && (
            <AvatarImage src={user.image} alt={`${user.name}'s avatar`} />
          )}
          <AvatarFallback>{user.name?.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <div className="text-sm font-bold">{user.name}</div>
      </div>
    </div>
  );
};

const MessageRenderer = ({ index, style, data }: any) => {
  const { messages, user, agent, setRowHeight } = data;
  const message = messages[index];
  const rowRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (rowRef.current) {
      setRowHeight(index, rowRef.current.clientHeight);
    }
  }, [rowRef]);

  return (
    <div className="container" style={style}>
      <ChatAvatar
        role={message.role}
        user={message.role === "user" ? user : agent}
      />
      <div
        ref={rowRef}
        className={cn(
          "flex w-max max-w-[75%] flex-col gap-2 overflow-hidden rounded-lg px-3 py-2 text-sm",
          message.role === "user"
            ? "ml-auto bg-primary text-primary-foreground"
            : "bg-muted",
        )}
      >
        {message.content}
      </div>
    </div>
  );
};

const ChatBoxMessages = React.memo(({ messages, user, agent }: any) => {
  const listRef = React.createRef<VariableSizeList>();
  const rowHeights = React.useRef({});

  const getRowHeight = (index: number) => {
    return rowHeights.current[index] + 80 || 82;
  };

  const setRowHeight = (index: number, size: number) => {
    listRef.current?.resetAfterIndex(0);
    rowHeights.current = { ...rowHeights.current, [index]: size };
  };

  const scrollToBottom = () => {
    listRef.current?.scrollToItem(messages.length - 1, "end");
  };

  React.useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages]);

  return (
    <div className="flex-grow pt-3">
      <AutoSizer>
        {({ height, width }) => {
          return (
            <VariableSizeList
              ref={listRef}
              height={height}
              width={width}
              itemSize={getRowHeight}
              itemCount={messages.length}
              itemData={{ messages, user, agent, setRowHeight }}
            >
              {MessageRenderer}
            </VariableSizeList>
          );
        }}
      </AutoSizer>
    </div>
  );
});

export const ChatBox = ({
  user,
  agent,
  messages,
  input,
  showBoxTitle,
  setInput,
  onSubmit,
}: ChatBoxProps) => {
  const inputLength = input.length;

  return (
    <div className="relative flex w-full flex-grow flex-col">
      {showBoxTitle && (
        <div className="flex flex-row items-center">
          <div className="flex items-center space-x-4">
            <Avatar>
              {user.image && (
                <AvatarImage src={user.image} alt={`${user.name}'s avatar`} />
              )}
              <AvatarFallback>{user.name?.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{user.name}</p>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
          </div>
        </div>
      )}
      <ChatBoxMessages user={user} agent={agent} messages={messages} />
      <SafeFixedBottomWrap>
        <form
          onSubmit={(event) => onSubmit(event)}
          className="flex w-full items-center space-x-2 p-3"
        >
          <Input
            id="message"
            placeholder="Type your message..."
            className="flex-1"
            autoComplete="off"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button type="submit" size="icon" disabled={inputLength === 0}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </SafeFixedBottomWrap>
    </div>
  );
};
