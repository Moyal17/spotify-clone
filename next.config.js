/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "misc.scdn.co",
      "i.scdn.co",
      "geo-media.beatsource.com",
      "i1.sndcdn.com",
      "media.pitchfork.com",
      "seed-mix-image.spotifycdn.com",
      "fdoeganinszwbemwyerz.supabase.co" // images domain
    ]
  }
};

module.exports = nextConfig;
