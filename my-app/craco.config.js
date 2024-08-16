// craco.config.js
module.exports = {
    reactScriptsVersion: 'react-scripts' /* (default value) */,
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
    babel: {
      plugins: [
        // Add any babel plugins you need here
      ],
    },
    eslint: {
      enable: true /* (default value) */,
      mode: 'extends' /* (default value) or "file" */,
      configure: {
        // Any additional ESLint configuration
      },
      loaderOptions: {
        // Any additional options for ESLint loader
      },
    },
  };
  