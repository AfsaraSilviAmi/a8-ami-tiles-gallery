/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
       
        hostname: '**',
       
      },
    ],
  },
  reactCompiler: true,
  
};

export default nextConfig;
