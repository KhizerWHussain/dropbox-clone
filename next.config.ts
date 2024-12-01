import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  cacheMaxMemorySize: 0,
  cleanDistDir: true,
  distDir: ".next",
  excludeDefaultMomentLocales: true,
  reactStrictMode: true,
  crossOrigin: "anonymous",
  trailingSlash: false,
  productionBrowserSourceMaps: false,
  images: {
    // domains: ["fjord.dropboxstatic.com"],
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows all domains
      },
    ],
  },
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ["@svgr/webpack"],
  //   });
  //   return config;
  // },
};

export default nextConfig;
