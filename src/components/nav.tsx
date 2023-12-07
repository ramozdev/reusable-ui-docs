import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export function Nav() {
  return (
    <header className="fixed z-50 w-full">
      <nav className="flex h-16 border-b border-b-neutral-200 bg-white/90 backdrop-blur-sm dark:border-b-neutral-800 dark:bg-black/80">
        <ul className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-3">
          <Link href="/" className="text-xl font-semibold">
            Reusable UI
          </Link>
          <div className="space-x-4"></div>
          <ThemeToggle />
        </ul>
      </nav>
    </header>
  );
}
