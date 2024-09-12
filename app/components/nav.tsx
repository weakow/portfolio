import Link from "next/link";
import Logo from "./logo";

const navItems = {
  "/about": {
    name: "Being Social",
  },
};

export function Navbar({ blogPost }) {
  return (
    <div className="max-w-xl mx-4 mt-8 sm:mx-auto">
      <header className="-ml-1 -mr-2 md:-mx-16 lg:-mx-32 mb-16 tracking-tight">
        <div className="lg:sticky lg:top-20">
          <div
            className="columns-2 px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="flex">
              <Link href="/">
                <Logo size={36} home={false} />
              </Link>
            </div>
            <nav className="flex justify-end text-xs font-bold">
              {Object.entries(navItems).map(([path, { name }]) => {
                return (
                  <Link
                    key={path}
                    href={path}
                    className="transition-all hover:text-amber-500 dark:hover:text-amber-400 flex align-middle py-1 px-2 m-1"
                  >
                    {name}
                  </Link>
                );
              })}
            </nav>
          </div>
          {blogPost && (
            <div className="mt-4">
              <Link
                href={"/blog"}
                className="ml-1 text-xs text-neutral-600 dark:text-white transition-all hover:text-amber-500 dark:hover:text-amber-400"
              >
                ⇠ 返回博客列表
              </Link>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
