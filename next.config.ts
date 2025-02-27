import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //output: "export",
  //assetPrefix: "./",
  experimental: {
    turbo: {
      // ...
    },
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.lottie$/,
      type: "asset/resource",
    });

    return config;
  },
};

export default nextConfig;
