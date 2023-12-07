import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import Head from "next/head";

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
          <div></div>
          <main className="min-h-screen pt-16 xl:grid xl:grid-cols-[1fr_300px]">
            <div className="px-px">{children}</div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
