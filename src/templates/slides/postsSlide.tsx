import { PostItem } from "@/components/widgets/postItem";

export const PostsSlide: React.FC<any> = ({ posts }) => {
  const hasPosts = Array.isArray(posts) && posts.length > 0;

  return (
    <div className="flex flex-col items-center w-full h-[calc(100vh-50px)]">
      <div className="max-w-sm md:max-w-5xl">
        <h1 className="font-bold text-4xl">Posts</h1>
        <div className="mt-5">
          {hasPosts &&
            posts.map((post) => <PostItem key={post.slug} post={post} />)}
        </div>
      </div>
    </div>
  );
};
