import { Navbar } from 'app/components/nav'
import Footer from 'app/components/footer'

export const metadata = {
  title: 'AI 产品设计',
  description: 'AI 产品设计',
}

export default function Page() {
  return (
    <>
      <Navbar />
      <section className="max-w-xl mx-4 mt-8 sm:mx-auto">
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">AI 产品设计</h1>
        <p>by weakow</p>
      </section>
      <Footer />
    </>
  )
}
