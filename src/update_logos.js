const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const csvFilePath = path.join(__dirname, '../../browser_downloads/affiliate_links.csv');
const jsonFilePath = path.join(__dirname, 'updated_affiliate_links.json');

// Read the existing JSON data
let jsonData = require(jsonFilePath);

// Helper function to update logo URLs in JSON data
const updateLogoUrls = (data, callback) => {
  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', (row) => {
      // Check if the 'Application' and 'logo' columns exist before trimming
      const toolName = row['Application'] ? row['Application'].trim() : null;
      const logoUrl = row['logo'] ? row['logo'].trim() : null;

      // Find the tool in the JSON data and update the logo URL if it exists
      const toolIndex = data.findIndex(tool => tool.name && tool.name.toLowerCase() === toolName.toLowerCase());
      if (toolIndex !== -1 && logoUrl) {
        data[toolIndex].logo = logoUrl;
      }
    })
    .on('end', () => {
      callback(null, data);
    })
    .on('error', (error) => {
      callback(error);
    });
};

// Update the JSON data with the new logo URLs
updateLogoUrls(jsonData, (error, updatedData) => {
  if (error) {
    console.error('Error updating logo URLs:', error);
    return;
  }

  // Write the updated JSON data back to the file
  fs.writeFile(jsonFilePath, JSON.stringify(updatedData, null, 2), (err) => {
    if (err) {
      console.error('Error writing updated JSON data:', err);
    } else {
      console.log('Successfully updated logo URLs in JSON data.');
    }
  });
});
