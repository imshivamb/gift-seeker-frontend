/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    domains: ['localhost', 'giftseekerbucket.s3.eu-north-1.amazonaws.com'],
  },
}

module.exports = nextConfig
