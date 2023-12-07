import React from "react";
import type { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import { formatUrl } from "@/lib/url";
// import { UserMenu } from "@/components/user-menu";

function Head() {
  const { asPath } = useRouter();
  const { frontMatter } = useConfig();
  const url = `https://ui.ramoz.dev${asPath}`;

  const title = (frontMatter.title as string) ?? "Reusable UI";
  const description =
    (frontMatter.description as string) ?? "Customizable React Components.";
  const image = `https://ui.ramoz.dev/api/og?title=${formatUrl(
    title
  )}&description=${formatUrl(description)}`;

  return (
    <>
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="ui.ramoz.dev" />
      <meta property="twitter:creator" content="@ramozdev" />
      <meta property="twitter:site" content="@ramozdev" />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}

const config: DocsThemeConfig = {
  // navbar: {
  //   extraContent: <UserMenu />,
  // },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  useNextSeoProps: () => {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Reusable UI",
      };
    }
    return {
      titleTemplate: "Reusable UI",
    };
  },
  head: Head,
  logo: <span>Reusable UI</span>,
  footer: {
    text: "Reusable UI",
  },
  feedback: {
    content: null,
  },
  editLink: {
    component: () => <></>,
  },
};

export default config;
