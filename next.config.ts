import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",              // makes it static
  images: { unoptimized: true }, // required for static export
};

export default nextConfig;
