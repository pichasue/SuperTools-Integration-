module.exports = {
  // Set up static exports for GitHub Pages deployment
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      // Define additional paths based on the pages present in the cloned website
    };
  },
  // Include any domains for external images to be used with the Next.js Image component
  images: {
    domains: ['supertools.therundown.ai'],
  },
  // Additional Next.js configuration options can be added here as needed
};
