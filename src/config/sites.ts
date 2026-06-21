export interface SiteConfig {
  slug: string;
  domain: string;
  name: string;
  shortName: string;
  description: string;
  dbEnvVar: string;
  smtpUserEnvVar: string;
  smtpPassEnvVar: string;
  smtpFromEnvVar: string;
  r2BucketEnvVar: string;
  r2PublicUrlEnvVar: string;
  nextauthSecretEnvVar: string;
}

const sites: Record<string, SiteConfig> = {
  ejaamss: {
    slug: 'ejaamss',
    domain: 'ejaamss.com',
    name: 'European Journal of Aerospace, Aviation and Maritime Spectrum Studies',
    shortName: 'EJAAMSS',
    description: 'Aerospace, Aviation and Maritime Research',
    dbEnvVar: 'DATABASE_URL_EJAAMSS',
    smtpUserEnvVar: 'SMTP_USER_EJAAMSS',
    smtpPassEnvVar: 'SMTP_PASS_EJAAMSS',
    smtpFromEnvVar: 'SMTP_FROM_EJAAMSS',
    r2BucketEnvVar: 'R2_BUCKET_EJAAMSS',
    r2PublicUrlEnvVar: 'R2_PUBLIC_URL_EJAAMSS',
    nextauthSecretEnvVar: 'NEXTAUTH_SECRET_EJAAMSS',
  },
};

const DEV_SITE_SLUG = 'ejaamss';

export function getSiteConfig(slug: string): SiteConfig | null {
  return sites[slug] ?? null;
}

export function getSiteConfigByDomain(host: string): SiteConfig | null {
  const domain = host.split(':')[0];

  for (const site of Object.values(sites)) {
    if (site.domain === domain) return site;
  }

  if (domain === 'localhost' || domain === '127.0.0.1') {
    return sites[DEV_SITE_SLUG];
  }

  return null;
}

export function getAllSites(): SiteConfig[] {
  return Object.values(sites);
}
