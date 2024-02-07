/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/facebook",
        destination: "https://facebook.com/joma.ipio.7",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://instagram.com/jomaipio",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/jose-maria-ipio-910a711b1",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/imjoma",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
