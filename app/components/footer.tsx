export default function Footer() {
  return (
    <footer className="max-w-xl mx-4 mt-16 sm:mx-auto mb-16 text-sm">
      <p className="mt-8 sm:ml-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} weakow
      </p>
    </footer>
  );
}
