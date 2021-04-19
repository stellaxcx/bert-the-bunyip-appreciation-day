
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['fp31Zugrm4ynYJUkkpjq24'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  