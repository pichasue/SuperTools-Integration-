const fs = require('fs');

// Path to the JSON file
const jsonFilePath = './src/updated_affiliate_links.json';

// Function to update logo URLs
const updateLogoUrls = () => {
  // Read the JSON file
  const data = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

  // Replace placeholder logo URLs with actual URLs
  const updatedData = data.map(tool => {
    if (tool.logo === "Actual logo URL") {
      // Replace with the actual logo URL
      tool.logo = 'https://actual-logo-url.com/logo.png'; // Placeholder: Replace with actual URL
    }
    return tool;
  });

  // Write the updated JSON data back to the file
  fs.writeFileSync(jsonFilePath, JSON.stringify(updatedData, null, 2), 'utf8');
};

// Run the update function
updateLogoUrls();
