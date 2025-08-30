import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,                 // ← new place
  // Optional: silence lockfile/root warning:
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
