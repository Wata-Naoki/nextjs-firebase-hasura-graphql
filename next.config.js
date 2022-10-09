/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  NEXT_PUBLIC_HAASURA_ENDPOINT: process.env.NEXT_PUBLIC_HAASURA_ENDPOINT ?? 'https://working-jackass-84.hasura.app/v1/graphql'
}

module.exports = nextConfig
