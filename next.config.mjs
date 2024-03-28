import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [
      [
        "use-client",
        {
          include: [{ path: "antd/" }],
        },
      ],
    ],
  },
};

export default withNextIntl(nextConfig);
