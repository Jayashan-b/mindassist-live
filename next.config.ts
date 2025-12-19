import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true // Mandatory for Firebase static hosting
    },
    trailingSlash: true,
};

export default nextConfig;