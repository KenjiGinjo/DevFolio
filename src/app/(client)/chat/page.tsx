import { auth } from "@/auth";
import { AuthForm } from "@/components/auth/form";
import { Chat } from "./components/chat";
import prisma from "@/lib/prisma";
export default async function ChatPage() {
  const session = await auth();

  if (!session) {
    return <AuthForm />;
  }

  const user = session.user;
  const agent = (await prisma.user.findUnique({
    where: { id: process.env.ADMIN_ID },
  })) as UserProfile;

  return (
    <Chat
      user={{
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
      }}
      agent={agent}
    />
  );
}
