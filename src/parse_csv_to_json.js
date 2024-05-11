const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const csvFilePath = path.join(__dirname, '../../browser_downloads/affiliate_links.csv');
const jsonFilePath = path.join(__dirname, 'updated_affiliate_links.json');

// Read the JSON file first
fs.readFile(jsonFilePath, (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  const toolsData = JSON.parse(data);

  // Now read the CSV and update the JSON
  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', (row) => {
      // Check if the 'Application' and 'logo' columns exist before trimming
      const toolName = row['Application'] ? row['Application'].trim() : null;
      const logoUrl = row['logo'] ? row['logo'].trim() : null;

      // Find the tool in the JSON data and update the logo URL if it exists
      const toolIndex = toolsData.findIndex(tool => tool.name && tool.name.toLowerCase() === toolName.toLowerCase());
      if (toolIndex !== -1 && logoUrl) {
        toolsData[toolIndex].logo = logoUrl;
      }
    })
    .on('end', () => {
      // Write the updated JSON data back to the file
      fs.writeFile(jsonFilePath, JSON.stringify(toolsData, null, 2), (err) => {
        if (err) {
          console.error('Error writing JSON file:', err);
        } else {
          console.log('Successfully updated logos in JSON file.');
        }
      });
    });
});
