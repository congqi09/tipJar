/**
 * @link https://nextjs.org/docs/api-reference/next.config.js/introduction
 */

/** @type {import("next").NextConfig} */
module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    OPENAI_API_KEY_FOUR: process.env.OPENAI_API_KEY_FOUR,
    OPENAI_API_KEY_THREE_FIVE: process.env.OPENAI_API_KEY_THREE_FIVE,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    APP_URL: process.env.APP_URL,
    WS_URL: process.env.WS_URL,
  },
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ['@tip_jar/api', '@tip_jar/db'],
  /** We run eslint as a separate task in CI */
  eslint: { ignoreDuringBuilds: !!process.env.CI },
  images: {
    domains: ['images.clerk.dev'],
  }
};
