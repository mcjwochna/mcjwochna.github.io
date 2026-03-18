/**
 * Single source of truth for all site-wide configuration.
 * Import from here instead of hardcoding values across components.
 */
export const SITE = {
  name: 'Maciej Wochna',
  url: 'https://maciejwochna.pl',
  ogImage: '/og-image.jpg',
  cv: '/maciej_wochna_bi_consultant.pdf',

  contact: {
    phone: '+48 603 234 834',
    phoneHref: 'tel:+48603234834',
    email: 'kontakt@mwochna.pl',
    emailHref: 'mailto:kontakt@mwochna.pl',
  },

  social: {
    linkedin: {
      url: 'https://linkedin.com/in/wochnamaciej',
      handle: '/in/wochnamaciej',
    },
    github: {
      url: 'https://github.com/mcjwochna',
      handle: '/mcjwochna',
    },
  },

  schema: {
    jobTitle: 'Data Engineer',
    skills: [
      'Power BI',
      'Azure Synapse',
      'Microsoft Fabric',
      'SQL Server',
      'ETL/ELT',
      'Data Modeling',
      'Business Intelligence',
    ],
    addressCountry: 'PL',
  },
} as const;
