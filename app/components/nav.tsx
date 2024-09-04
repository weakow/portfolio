import Link from "next/link";
import Logo from "./logo";

const navItems = {
  "/about": {
    name: "Being Social",
  },
};

export function Navbar(props) {
  return (
    <header className="-ml-1 -mr-2 md:-mx-16 lg:-mx-32 mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <div
          className="columns-2 px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="pr-10">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <nav className="flex justify-end text-xs font-bold">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-600 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
