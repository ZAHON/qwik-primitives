import { useLocation } from '@builder.io/qwik-city';

/**
 * A hook that returns the path name stripped of the last slash from the current location.
 * The exception is when the path name contains only a slash in which case `“/”` will be returned.
 * Under the hood, this hook uses the `useLocation()` API.
 *
 *
 * Examples
 * - From url `"http://localhost:5173"` this hooks returs `"/"` pathane.
 * - From url `"http://localhost:5173/"` this hooks returs `"/"` pathane.
 * - From url `"http://localhost:5173/test1"` this hooks returs `"/test1"` pathane.
 * - From url `"http://localhost:5173/test1/"` this hooks returs `"/test1"` pathane.
 */
export const usePathname = () => {
  const { url } = useLocation();

  return url.pathname === '/' ? '/' : url.pathname.replace(/\/+$/, '');
};
