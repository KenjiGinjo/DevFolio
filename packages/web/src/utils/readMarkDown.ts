import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const markdownDirectory = path.join(process.cwd(), "markdowns");

export async function getMarkdownData(fileName: string) {
  const fullPath = path.join(markdownDirectory, `${fileName}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    fileName,
    contentHtml,
    ...matterResult.data,
  };
}
