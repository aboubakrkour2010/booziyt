import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // الصفحة الرئيسية "/" كتعرض المتجر الجديد (public/s/index.html)
  async rewrites() {
    return {
      beforeFiles: [{ source: "/", destination: "/s/index.html" }],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
