import { BlogPosts } from 'app/components/posts'
import { Navbar } from 'app/components/nav'
import Footer from 'app/components/footer'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <>
      <Navbar />
      <section className="max-w-xl mx-4 mt-8 sm:mx-auto">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <BlogPosts />
      </section>
      <Footer />
    </>
  )
}
