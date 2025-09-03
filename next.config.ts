import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Optional: silences monorepo/workspace root warnings
  // outputFileTracingRoot: __dirname,
};

export default nextConfig;
