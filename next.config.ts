/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co', // Izinkan domain placeholder ini
      },
    ],
  },
};

export default nextConfig;