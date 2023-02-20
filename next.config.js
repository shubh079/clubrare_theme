const withTM = require('next-transpile-modules')(['tailwindcss']);
module.exports = withTM({
  webpack5: false,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  future: {
    webpack5: false,
  },
});
