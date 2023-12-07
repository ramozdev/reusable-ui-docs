import Link from "next/link";

function nextjsComponentUrl(path: string) {
  const { href } = new URL(
    `ramozdev/ui/tree/main/src/ui${path}`,
    "https://github.com",
  );
  return href;
}

export function SourceCode({ slug = "#" }: { slug?: string }) {
  return (
    <div className="mt-6">
      <Link
        href={nextjsComponentUrl(slug)}
        rel="noopener noreferrer"
        target="_blank"
        className="font-bold"
      >
        Source Code
      </Link>
    </div>
  );
}
