const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const csvFilePath = path.join(__dirname, 'affiliate_links.csv');
const jsonFilePath = path.join(__dirname, 'src', 'updated_affiliate_links.json');

// Read the existing JSON file
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  // Parse the JSON data
  let jsonContent = JSON.parse(data);

  // Create a stream to read the CSV file
  const results = [];
  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      // Update the JSON content with data from the CSV
      results.forEach((row) => {
        // Find the corresponding entry in the JSON content
        const toolEntry = jsonContent.find((entry) => entry.Application === row.Application);
        if (toolEntry) {
          toolEntry.logo = row.logo;
          toolEntry.affiliateLink = row['affiliate link'];
        }
      });

      // Write the updated JSON content back to the file
      fs.writeFile(jsonFilePath, JSON.stringify(jsonContent, null, 2), 'utf8', (err) => {
        if (err) {
          console.error('Error writing JSON file:', err);
        } else {
          console.log('JSON file updated successfully.');
        }
      });
    });
});
