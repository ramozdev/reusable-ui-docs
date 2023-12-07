import Link from "next/link";

function radixComponentUrl(path: string) {
  const { href } = new URL(
    `/docs/primitives/components/${path}`,
    "https://www.radix-ui.com",
  );
  return href;
}

export function RadixDocs({ slug = "#" }: { slug?: string }) {
  return (
    <div className="mt-6">
      <Link
        href={radixComponentUrl(slug)}
        rel="noopener noreferrer"
        target="_blank"
        className="font-bold"
      >
        <RadixLogo />
        Radix Docs
      </Link>
    </div>
  );
}

function RadixLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
        fill="currentcolor"
      ></path>
      <path d="M12 0H4V8H12V0Z" fill="currentcolor"></path>
      <path
        d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
        fill="currentcolor"
      ></path>
    </svg>
  );
}
