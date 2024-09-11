import Link from "next/link";
import Image from "next/image";
import { formatDate, getBlogPosts } from "app/blog/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div className="space-y-8">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex items-start justify-between space-x-4 py-4 px-8 rounded hover:bg-neutral-100"
            href={`/blog/${post.slug}`}
          >
            <div className="flex-grow">
              <h2 className="mt-1 mb-4 sm:my-4 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                {post.metadata.title}
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
            </div>
            <div className="flex-shrink-0">
              <Image
                src={post.metadata.image || "/default-thumbnail.jpg"}
                alt={post.metadata.title}
                width={180}
                height={120}
                className="rounded object-cover"
              />
            </div>
          </Link>
        ))}
    </div>
  );
}
