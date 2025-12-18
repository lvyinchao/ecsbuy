import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 使用 standalone 输出模式以支持 ESA EdgeRoutine
  output: "standalone",
};

export default nextConfig;
