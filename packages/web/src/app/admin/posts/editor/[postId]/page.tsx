import { Editor } from "@/components/editor";

interface EditorPageProps {
  params: { postId: string };
}

export default async function EditorPage({ params }: EditorPageProps) {
  return (
    <Editor
      post={{
        id: "asd",
        title: "asdjn qwdn hello",
        content: "asdasdlj asdkj k sdkaj ",
        published: "published",
      }}
    />
  );
}
