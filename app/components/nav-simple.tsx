import Link from "next/link";
import Logo from "./logo";

export function Navbar() {
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
          </div>
        </div>
      </header>
    </div>
  );
}
