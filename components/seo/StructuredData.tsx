import { SITE_CONFIG } from '@/data/content';

export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: SITE_CONFIG.name,
    alternateName: 'Jasa Gestun Malaysia',
    image: `${SITE_CONFIG.url}/images/og-image.jpg`, // Pastikan image ini ada
    description:
      'Perkhidmatan cair limit ShopeePay Later, Grab PayLater, dan Boost PayFlex terpercaya di Malaysia.',
    url: SITE_CONFIG.url,
    telephone: `+${SITE_CONFIG.waNumber}`, // Format +60...
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kuala Lumpur',
      addressRegion: 'Wilayah Persekutuan',
      addressCountry: 'MY',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 3.140853,
      longitude: 101.693207,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Malaysia',
    },
    priceRange: '$$',
    currenciesAccepted: 'MYR',
    paymentAccepted: 'Cash, Credit Card, ShopeePay, GrabPay, Boost',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '23:00',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: `+${SITE_CONFIG.waNumber}`,
      contactType: 'customer service',
      areaServed: 'MY',
      availableLanguage: ['Malay', 'English'],
    },
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
