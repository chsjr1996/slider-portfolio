import Image from "next/image";
import Link from "next/link";

type PostItemProps = {
  post: {
    slug: string;
    coverImage: string;
    title: string;
    date: string;
  };
};

export const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const parsedDate = (new Date(`${post.date} 23:59:59`)).toLocaleDateString('pt-BR');

  return (
    <Link key={post.slug} href={`/posts/${post.slug}`}>
      <div className="mb-4 border border-white p-4">
        <div className="flex">
          <div className="mr-4">
            <Image
              src={post.coverImage}
              alt={`Post ${post.title} cover image.`}
              width={180}
              height={100}
            />
          </div>
          <div>
            <h2 className="font-bold text-xl">{post.title}</h2>
            <span>{parsedDate}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
