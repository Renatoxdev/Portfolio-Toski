import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve original artwork files without resizing or lossy conversion.
    unoptimized: true,
  },
};

export default nextConfig;
