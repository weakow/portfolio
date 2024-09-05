import { BlogPosts } from 'app/components/posts'
import { Navbar } from 'app/components/nav'
import Footer from 'app/components/footer'

export const metadata = {
  title: '博客',
  description: 'weakow的博客文章',
}

export default function Page() {
  return (
    <>
      <Navbar />
      <section className="max-w-xl mx-4 mt-8 sm:mx-auto">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">博客文章</h1>
      <BlogPosts />
      </section>
      <Footer />
    </>
  )
}
