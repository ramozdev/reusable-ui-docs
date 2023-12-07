import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import Head from "next/head";
import { Sidebar } from "./sidebar";

type Props = {
  children: React.ReactNode;
  title?: string;
};

export function Layout({ children, title }: Props) {
  const parsedTitle = title ? `${title} - ` : "";

  return (
    <>
      <Head>
        <title>{`${parsedTitle}Reusable UI`}</title>
      </Head>
      <Nav />
      <div className="mx-auto max-w-screen-2xl">
        <div className="items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]">
          <nav className="top-16 hidden md:sticky md:block">
            <div className="h-[calc(100vh-4rem)] w-full overflow-auto rounded-none border-r border-r-neutral-200 bg-white shadow-none ring-0 dark:border-r-neutral-800 dark:bg-black">
              <Sidebar />
            </div>
          </nav>
          <main className="min-h-screen pt-16 xl:grid xl:grid-cols-[1fr_300px]">
            <div className="px-px">{children}</div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
