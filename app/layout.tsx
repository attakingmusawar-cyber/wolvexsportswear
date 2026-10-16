import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'WOLVEX Sportswear — Built to Dominate | Custom Sportswear Manufacturer',
  description:
    'Premium custom sportswear manufacturing brand based in Lahore, Pakistan. Engineered for performance and team identity. Specializing in basketball uniforms, tracksuits, athletic gym wear, sports t-shirts, and player travel gear for international clubs, gyms, and sports labels.',
  keywords: [
    'WOLVEX',
    'WOLVEX Sportswear',
    'Custom Sportswear Manufacturer',
    'Sportswear Lahore Pakistan',
    'Custom Basketball Uniforms',
    'Athletic Tracksuits',
    'Sublimation Sportswear',
    'Team Sportswear Manufacturer',
    'Gym Wear Manufacturer',
  ],
  authors: [{ name: 'WOLVEX Sportswear' }],
  openGraph: {
    title: 'WOLVEX Sportswear — Built to Dominate',
    description:
      'Engineered for performance. Designed for your identity. Custom sportswear manufacturer supplying USA, UK, Europe, and global markets.',
    type: 'website',
    url: 'https://wolvexsportswear.com',
    siteName: 'WOLVEX Sportswear',
    images: [
      {
        url: '/images/hero-athlete.jpg',
        width: 1200,
        height: 675,
        alt: 'WOLVEX Sportswear — Built to Dominate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WOLVEX Sportswear — Built to Dominate',
    description:
      'Premium custom sportswear manufacturer. Basketball kits, tracksuits, gym wear, and international team manufacturing.',
    images: ['/images/hero-athlete.jpg'],
  },
  icons: {
    icon: '/images/wolf-emblem.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SportsOrganization',
    name: 'WOLVEX Sportswear',
    alternateName: 'WOLVEX',
    slogan: 'BUILT TO DOMINATE',
    url: 'https://www.instagram.com/wolvexsportswear/',
    logo: '/images/wolf-emblem.jpg',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lahore',
      addressCountry: 'PK',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+92-325-2785376',
      contactType: 'sales and wholesale inquiries',
      email: 'officialatta25@gmail.com',
    },
    sameAs: ['https://www.instagram.com/wolvexsportswear/'],
  };

  return (
    <html lang="en" className={`dark ${plusJakartaSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#050505] text-zinc-100 antialiased selection:bg-white selection:text-black font-sans">
        {children}
      </body>
    </html>
  );
}
