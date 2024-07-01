import { remark } from "remark";
import remarkBreaks from "remark-breaks";
import rehypeExternalLinks from "rehype-external-links";
import remarkParse from "remark-parse";
import rehypeRaw from "rehype-raw";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(remarkBreaks)
    .use(rehypeSanitize)
    .use(rehypeExternalLinks, { rel: ["nofollow"], target: "_blank" })
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
}
