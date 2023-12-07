import { SiMdnwebdocs } from "@icons-pack/react-simple-icons";
import Link from "next/link";

function mdnComponentUrl(path: string) {
  const { href } = new URL(
    `/docs/Web/HTML/Element/${path}`,
    "https://developer.mozilla.org",
  );
  return href;
}

export function MdnDocs({ slug = "#" }: { slug?: string }) {
  return (
    <div className="mt-6">
      <Link
        href={mdnComponentUrl(slug)}
        rel="noopener noreferrer"
        target="_blank"
        className="font-bold"
      >
        <SiMdnwebdocs className="h-4 w-4" />
        MDN Docs
      </Link>
    </div>
  );
}
