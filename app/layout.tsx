import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '@/data/content';
import StructuredData from '@/components/seo/StructuredData'; // Kita buat ini di langkah 4

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const viewport: Viewport = {
  themeColor: '#e11d48', // Warna brand di browser mobile
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default:
      'CashoutService.my | Tukar Limit ShopeePay & Grab Jadi Tunai (Malaysia)',
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    'Perkhidmatan tukar limit ShopeePay Later (SPayLater), Grab PayLater, dan Boost PayFlex menjadi tunai segera. Proses pantas 5 minit, selamat, dan trusted di Malaysia.',
  keywords: [
    'cashout shopeepay malaysia',
    'tukar limit shopeepay jadi tunai',
    'gestun malaysia',
    'shopeepay later to cash malaysia',
    'cairkan grab paylater',
    'boost payflex cashout',
    'pinjaman wang segera online',
    'kuala lumpur',
    'selangor',
  ],
  authors: [{ name: 'CashoutService Team', url: SITE_CONFIG.url }],
  creator: 'CashoutService.my',
  publisher: 'CashoutService.my',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Konfigurasi Bahasa & Wilayah
  alternates: {
    canonical: '/',
    languages: {
      'ms-MY': '/',
      'en-MY': '/en',
    },
  },
  // Open Graph (Tampilan saat link di-share di WhatsApp/Facebook)
  openGraph: {
    title: 'Tukar Limit ShopeePay & Grab Jadi Tunai | Fast & Secure',
    description:
      'Perlukan tunai segera? Cairkan limit kredit SPayLater dan Grab anda sekarang. Rate terbaik dan proses pantas!',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: 'ms_MY',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg', // Pastikan buat gambar ukuran 1200x630px di folder public
        width: 1200,
        height: 630,
        alt: 'Cashout Service Malaysia',
      },
    ],
  },
  // Geo-tagging untuk Local SEO Malaysia
  other: {
    'geo.region': 'MY', // Kode Negara Malaysia
    'geo.placename': 'Kuala Lumpur', // Fokus kota utama
    'geo.position': '3.140853;101.693207', // Koordinat KL (pusat ekonomi)
    ICBM: '3.140853, 101.693207',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'isi-kode-verifikasi-google-console-disini', // Ganti nanti
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='ms-MY'
      className='scroll-smooth'>
      <head>
        {/* Favicon bisa ditaruh otomatis di folder app/favicon.ico */}
      </head>
      <body className={inter.className}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
