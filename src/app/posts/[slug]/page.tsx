import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSortedPostsData, getPostBySlug } from "@/lib/posts";
import markdownToHtml from "@/lib/markdownToHtml";
import { Sidemenu } from "@/components/widgets/sidemenu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeToggle } from "@/components/widgets/themeToggle";

const CMS_NAME = "chsjr1996";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <div className="h-[100vh] gradient-animate">
      <div className="relative h-full flex items-center">
        <div className="relative w-full h-full flex flex-col">
          <Sidemenu />
          <ScrollArea>
            <main className="w-full h-full max-w-sm md:max-w-5xl mx-auto py-5">
              <h1 className="font-bold text-3xl mb-5">{post.title}</h1>
              <article>
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </article>
            </main>
          </ScrollArea>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
