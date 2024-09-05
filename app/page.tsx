import Link from "next/link";
import Logo from "app/components/logo";

const navItems = {
  "/design-systems": {
    name: "数字产品设计的系统化方法",
    tagline: "Making a Design Systems",
  },
  "/typography": {
    name: "Web设计的中文排版",
    tagline: "Chinese Web Typography",
  },
  "/ai-in-design": {
    name: "AI驱动的产品设计与开发",
    tagline: "AI in Design & Development",
  },
};

export default function Page() {
  return (
    <section className="flex flex-col md:h-screen md:flex-row gap-0">
      <div
        className="min-h-72 md:h-screen md:w-1/2 xl:w-1/3 flex flex-col"
        style={{ background: "#FFDA91" }}
      >
        <div className="grow flex items-center p-8">
          <Logo size={108} />
        </div>
        <div className="flex-none p-8">
          <h1 className="p-0 m-0 text-3xl font-semibold tracking-tight">
            weakow
          </h1>
          <p className="p-0 m-0 text-xl font-light leading-5">
            <i>From ideas to products, with efficiency.</i>
          </p>
        </div>
      </div>
      <div className="min-h-72 md:h-screen md:grow flex flex-col md:flex-col-reverse">
        <div className="md:grow flex flex-col justify-center p-8 mx:p-16 md:pb-48">
          {Object.entries(navItems).map(([path, { name, tagline }]) => {
            return (
              <div className="my-4 p-0.5 pb-2 h-fit transition ease-in-out border-b-2 border-white hover:border-rose-700">
                <Link key={path} href={path} className="">
                  <h2 className="text-2xl font-semibold tracking-wider text-gray-800 leading-snug md:leading-5">
                    {name}
                    <div className="md:inline md:ml-2 text-xs uppercase font-regular tracking-widest text-amber-500">
                      {tagline}
                    </div>
                  </h2>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="flex m-4 p-1 md:justify-end text-xs font-bold">
          <Link href="/about" className="transition-all hover:text-neutral-600 dark:hover:text-neutral-200 flex align-middle py-1 px-2 m-1">Being Social</Link>
        </div>
      </div>
    </section>
  );
}
