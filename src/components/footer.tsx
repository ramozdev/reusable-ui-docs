import { IconBrandTwitter } from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="text-dark w-full border-t border-t-neutral-200 dark:border-t-neutral-800 dark:text-white">
      <div className="bg-white dark:bg-black">
        <div className="mx-auto flex max-w-screen-2xl flex-col items-center px-5 py-6 sm:flex-row">
          <a className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0">
            <span className="ml-3 text-xl text-neutral-900 dark:text-neutral-50">
              Reusable UI
            </span>
          </a>
          <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
            <a
              href="https://twitter.com/ramozdev"
              rel="noopener noreferrer"
              target="_blank"
              className="ml-3 opacity-70"
            >
              <IconBrandTwitter className="h-5 w-5" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
