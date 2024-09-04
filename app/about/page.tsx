import { Navbar } from 'app/components/nav'
import Footer from 'app/components/footer'

export const metadata = {
  title: '关于',
  description: 'weakow 是一个真实的个体。',
}

export default function Page() {
  return (
    <section>
      <Navbar />
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">关于</h1>
      <p>by weakow</p>
      <Footer />
    </section>
  )
}
