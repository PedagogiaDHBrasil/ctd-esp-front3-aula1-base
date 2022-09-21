/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Abrimos o domínio externo do qual traremos as imagens dos recibos
  images: {
    domains: ["cdn7.kiwilimon.com"],
  },
};

module.exports = nextConfig;
