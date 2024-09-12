import { Navbar } from "app/components/nav-simple";
import Footer from "app/components/footer";
import Image from "next/image";

export const metadata = {
  title: "weakow",
  description: "可以在微博、小红书、X、Instagram 等社交媒体找到 weakow ",
};

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="max-w-xl mx-4 mt-8 sm:mx-auto">
        <p>
          <Image src="/social-weakow.svg" width="480" height="320" alt="weakow at social media" />
        </p>
      </div>
      <Footer />
    </div>
  );
}
