
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['xurps5xeLjvQsEHUM6xWgy'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  