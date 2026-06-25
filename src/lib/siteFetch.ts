import { siteFetch } from '@/lib/siteFetch'

export const getSiteSlugFromDomain = (): string => {
  // Server-side fallback
  if (typeof window === 'undefined') return 'ejaamss';

  const hostname = window.location.hostname;
  const slug = hostname.split('.')[0];

  const validSites = ['ajoams', 'ajomait', 'ejoas', 'ijipal', 'ejaamss', 'ejauipar', 'ejffabls', 'ejimapss', 'ejlilejgp', 'ijarcm', 'wjiis', 'localhost'];
  return validSites.includes(slug) ? slug : 'ejaamss';
};

export const siteFetch = async (
  url: string,
  options: RequestInit = {}
) => {
  const siteSlug = getSiteSlugFromDomain();

  return siteFetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'x-site-slug': siteSlug
    }
  });
};
