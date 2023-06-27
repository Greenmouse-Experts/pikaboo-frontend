/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  images: {
    // loader: "cloudinary",
    // path: "",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pikaboo.greenmouseproperties.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
