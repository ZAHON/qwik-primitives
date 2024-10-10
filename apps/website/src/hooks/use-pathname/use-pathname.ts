import { useLocation } from '@builder.io/qwik-city';

export const usePathname = () => {
  const { url } = useLocation();

  return url.pathname === '/' ? '/' : url.pathname.replace(/\/+$/, '');
};
