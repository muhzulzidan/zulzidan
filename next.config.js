/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  trailingSlash: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.ctfassets.net" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/mpi/",
        destination: "https://forms.gle/TKLcGV7b9LqDuq3B6",
        permanent: false,
      },
    ];
  },
  webpack(config) {
    const assetRule = config.module.rules.find((rule) => rule?.test?.test?.("icon.svg"));
    if (assetRule) assetRule.exclude = /\.svg$/i;

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
