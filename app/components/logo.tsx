function LogoImg({ size, home }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-all duration-300 fill-neutral-800 hover:fill-neutral-600 ${
        home ? 'dark:hover:fill-black' : 'dark:fill-white dark:hover:fill-amber-400'
      }`}
    >
      <rect width={size} height={size} fill="transparent" />
      <path d="M16 4H4V17H16V13H8V8H16V4Z" />
      <path d="M32 4H20V17H24V8H28V17H32V4Z" />
      <path d="M24 20H12V24H16V29H8V33H28V29H20V24H24V20Z" />
    </svg>
  );
}

export default function Logo({ size, home }) {
  return <LogoImg size={size} home={home} />;
}
