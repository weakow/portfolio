import { Navbar } from 'app/components/nav'
import Footer from 'app/components/footer'

export const metadata = {
  title: '设计体系',
  description: 'Design systems',
}

export default function Page() {
  return (
    <div>
      <Navbar />
      <section>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">设计体系</h1>
        <p>by weakow</p>
      </section>
      <Footer />
    </div>
  )
}
