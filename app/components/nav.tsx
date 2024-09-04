import Link from "next/link";
import Logo from "./logo";

const navItems = {
  "/": {
    name: "首页",
  },
  "/blog": {
    name: "博客",
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="columns-2 px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="pr-10">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div className="flex justify-end text-xs font-bold">
            <Link
              key="/about"
              href="/about"
              className="transition-all hover:text-neutral-600 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
            >
              Being Social
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
}
