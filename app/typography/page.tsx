import { Navbar } from 'app/components/nav'
import Footer from 'app/components/footer'

export const metadata = {
  title: 'Web设计的中文排版',
  description: 'Web设计的中文排版',
}

export default function Page() {
  return (
    <>
      <Navbar />
      <section className="max-w-xl mx-4 mt-8 sm:mx-auto">
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Web设计的中文排版</h1>
        <p>by weakow</p>
      </section>
      <Footer />
    </>
  )
}
