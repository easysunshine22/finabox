import type { Metadata } from 'next';

export const siteMetadata: Metadata = {
  title: 'Finabox - Smart, Secure Inbox for Your Money | Transaction Alerts Platform',
  description: 'Cut SMS costs and deliver instant transaction messages with Finabox. Built for banks and fintechs with secure message delivery, real-time dispute actions, and full compliance.',
  keywords: 'transaction alerts, banking notifications, SMS alternative, financial messaging, secure alerts, bank compliance, fintech solutions',
  authors: [{ name: 'Finabox Team' }],
  creator: 'Finabox',
  publisher: 'Finabox',
  robots: 'index, follow',
  openGraph: {
    title: 'Finabox - Smart, Secure Inbox for Your Money',
    description: 'Cut SMS costs and deliver instant transaction messages. Built for banks with secure delivery and real-time dispute actions.',
    url: 'https://finabox.vercel.app',
    siteName: 'Finabox',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Finabox - Smart Financial Messaging Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finabox - Smart, Secure Inbox for Your Money',
    description: 'Cut SMS costs and deliver instant transaction messages. Built for banks with secure delivery.',
    images: ['/twitter-image.jpg'],
    creator: '@finabox',
  },
  alternates: {
    canonical: 'https://finabox.vercel.app',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};
