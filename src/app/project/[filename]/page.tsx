import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getMarkdownData } from "@/utils/readMarkDown";

export default async function Project({
  params,
}: {
  params: { filename: string };
}) {
  const fileName = decodeURIComponent(params.filename);
  const data = await getMarkdownData(`${fileName}_en-US`);

  return (
    <div className="main">
      <Header />
      <main>
        <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
      </main>
      <Footer />
    </div>
  );
}
