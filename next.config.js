/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "192.168.43.201",
        port: "8080",
        pathname: "/api/himasti/user/foto/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8080",
        pathname: "/api/himasti/user/foto/**",
      },
    ],
    minimumCacheTTL: 10,
  },
};

module.exports = nextConfig;
