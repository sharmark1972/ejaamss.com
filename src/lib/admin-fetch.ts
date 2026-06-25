'use client';

import { siteFetch } from '@/lib/siteFetch';
export async function adminFetch(
  input: string,
  init: RequestInit = {}
): Promise<Response> {
  const extraHeaders: Record<string, string> = {
    'x-site-slug': 'ejaamss'
  };

  return siteFetch(input, {
    ...init,
    headers: {
      ...(init.headers ?? {}),
      ...extraHeaders,
    },
  });
}
