/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname:"utfs.io"
            },
            {
                protocol: "https",
               hostname:"avatars.githubusercontent.com"
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com"
            },
            {
                hostname: "media.beehiiv.com",
              },
              
              {
                hostname: "img.clerk.com",
              },
        ]
    }
};

export default nextConfig;
