/**
 * Encode an URI component, but replace `%20` with a `+` sign
 *
 * - `foo bar` -> `foo%20bar` -> `foo+bar`
 * @param value an URI component
 * @returns The encoded and replaced URI component
 */
function formatUrl(value: string) {
  {
    return encodeURIComponent(value).replace(/%20+/g, "+");
  }
}

/**
 *  Set URL query params using a typed objects
 *
 * This will convert an object
 *
 * ```js
 *  {
 *    foo: 'bar',
 *    age: 50,
 *  }
 * ```
 *
 * into a query string
 *
 * `?foo=bar&age=50`
 *
 * and append it to an url pathname
 *
 * `/path/foo/bar/tokens?foo=bar&age=50`
 *
 * @param pathname A URL pathname
 * https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname
 * @param query An object containing all needed query params.
 */
// function setParams(
//   pathname: string,
//   query: { [x: string]: string | number | boolean }
// ): string;

/**
 *  Set URL query params using a typed objects
 *
 * This will convert an object
 *
 * ```js
 *  {
 *    foo: 'bar',
 *    age: 50,
 *  }
 * ```
 *
 * into a query string
 *
 * `?foo=bar&age=50`
 *
 * and append it to URL provided
 *
 * `https://api.example.com/tokens?foo=bar&age=50`
 *
 * @param url An URL instance
 * @param query An object containing all needed query params.
 */
// function setParams(
//   url: URL,
//   query: { [x: string]: string | number | boolean }
// ): string;

// function setParams(
//   url: string | URL,
//   query:
//     | string
//     | string[][]
//     | Record<string, string>
//     | URLSearchParams
//     | undefined
// ) {
//   if (typeof url === "string") {
//     const searchParams = new URLSearchParams(query);
//     return `${url}?${searchParams.toString()}`;
//   }
//   Object.keys(query).map((key) =>
//     url.searchParams.set(key, query[key]?.toString())
//   );
//   return url.href;
// }

export { formatUrl };
