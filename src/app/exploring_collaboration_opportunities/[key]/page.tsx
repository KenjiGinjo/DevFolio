import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getMarkdownData } from "@/utils/readMarkDown";
const AUTHORS = {
  "4cckN79D": "Rubén Norte",
};
export default async function ECO({ params }: { params: { key: string } }) {
  const { key } = params;
  console.log(key);
  const authorName = AUTHORS[key as keyof typeof AUTHORS];
  if (!authorName) {
    return (
      <div className="main">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2rem",
            height: "10vh",
          }}
        >
          Sorry, you are not authorized to access this page.
        </div>
      </div>
    );
  }
  const data = await getMarkdownData(`exploring_collaboration_opportunities`);

  return (
    <div className="main">
      <Header noLang={true} />
      <main>
        <h1>Dear {authorName}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
        <h2>Best wishes, Congkun Cui (Kenji Ginjo)</h2>
      </main>
      <Footer />
    </div>
  );
}
