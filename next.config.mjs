/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.unsplash.com", "cartedo.s3.us-east-2.amazonaws.com"], // Add allowed external image domains
      },
};

export default nextConfig;
