type ChatMessageRole = "user" | "agent";

interface ChatMessage {
  role: ChatMessageRole;
  content: string;
}
