import type { NextConfig } from "next";
import path from "node:path";

// Design-token directory. Adding it to Sass `loadPaths` is what makes
// `@use "tokens" as *;` resolve from any file at any depth — the one bit of
// config without which every stylesheet errors. (We keep the pipeline on
// webpack: additionalData is string-only under Turbopack and the token setup
// is well-trodden here. Each SCSS file @uses "tokens" explicitly — idempotent,
// no circular-load risk.)
const designDir = path.join(process.cwd(), "src", "shared", "design");

const nextConfig: NextConfig = {
  // Pin the tracing root to this project — the parent folder has other lockfiles.
  outputFileTracingRoot: process.cwd(),
  sassOptions: {
    loadPaths: [designDir],
    includePaths: [designDir],
    // Written in modern @use syntax, so no legacy-JS-API / @import deprecations.
    silenceDeprecations: ["legacy-js-api", "import"],
  },
};

export default nextConfig;
