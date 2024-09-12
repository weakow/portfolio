import { BlogPosts } from "app/components/posts";
import { Navbar } from "app/components/nav";
import Footer from "app/components/footer";

export const metadata = {
  title: "博客",
  description: "weakow的博客文章",
};

export default function Page() {
  return (
    <>
      <Navbar blogPost={false} />
      <section className="max-w-xl mx-4 mt-8 sm:mx-auto">
        <BlogPosts />
      </section>
      <Footer />
    </>
  );
}
