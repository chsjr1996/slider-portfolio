import { MainCarousel } from "@/components/widgets/mainCarousel";
import { ThemeToggle } from "@/components/widgets/themeToggle";
import { getSortedPostsData } from "@/lib/posts";

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <div className="relative">
      <MainCarousel posts={posts} />
      <ThemeToggle />
    </div>
  );
}
