import { SocketProvider } from "@/contexts/socket-context";

export default async function ClientLayout({ children }: any) {
  return <SocketProvider>{children}</SocketProvider>;
}
