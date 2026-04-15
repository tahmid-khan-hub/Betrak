import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "lh3.googleusercontent.com", // Google profile 
      "avatars.githubusercontent.com", // GitHub avatars
      "i.pravatar.cc", // dummy users
      "images.unsplash.com", // demo images
      "i.postimg.cc", // postimg
    ],
  },
};

export default nextConfig;
