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
            className="flex items-start justify-between space-x-4 py-4 -mx-8 px-8 sm:rounded md:mx-4 md:px-4 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            href={`/blog/${post.slug}`}
          >
            <div className="basis-1/2 md:basis-2/3 md:flex-grow">
              <h2 className="-mt-1 sm:mt-0 md:mt-1 mb-4 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                {post.metadata.title}
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
            </div>
            <div className="basis-1/2 md:basis-1/3 md:flex-shrink-0 flex justify-end">
              <Image
                src={post.metadata.image || "/default-thumbnail.jpg"}
                alt={post.metadata.title}
                width={180}
                height={120}
                className="rounded-sm object-cover"
              />
            </div>
          </Link>
        ))}
    </div>
  );
}
