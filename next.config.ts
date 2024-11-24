import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // optimizePackageImports: ["@chakra-ui/react"],
  compress: true,
  cacheMaxMemorySize: 0,
  cleanDistDir: true,
  distDir: ".next",
  excludeDefaultMomentLocales: true,
  output: "export",
  reactStrictMode: true,
  crossOrigin: "anonymous",
  images: {
    // domains: ["fjord.dropboxstatic.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows all domains
      },
    ],
  },
};

export default nextConfig;
