import { SiNextdotjs } from "@icons-pack/react-simple-icons";
import Link from "next/link";

function nextjsComponentUrl(path: string) {
  const { href } = new URL(
    `/docs/api-reference/next/${path}`,
    "https://nextjs.org",
  );
  return href;
}

export function NextjsDocs({ slug = "#" }: { slug?: string }) {
  return (
    <div className="mt-6">
      <Link
        href={nextjsComponentUrl(slug)}
        rel="noopener noreferrer"
        target="_blank"
        className="font-bold"
      >
        <SiNextdotjs className="h-4 w-4" />
        Next.js Docs
      </Link>
    </div>
  );
}
