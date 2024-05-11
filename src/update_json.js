const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const updateAffiliateLinks = () => {
  const filePath = path.join(__dirname, 'updated_affiliate_links.json');
  const csvFilePath = path.join(__dirname, '../../browser_downloads/affiliate_links.csv');
  const toolsData = [];

  fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', (row) => {
      // Check if the row contains the necessary data and is not just a placeholder row
      // Ensure that the row has non-empty 'Application' and 'Affiliate Link' fields
      if (row['Application'] && row['Affiliate Link'] && row['Application'].trim() !== '' && row['Affiliate Link'].trim() !== '') {
        // Push the valid data into the toolsData array
        toolsData.push({
          title: row['Application'].trim(),
          affiliateLink: row['Affiliate Link'].trim(),
          logo: row['Logo'] ? row['Logo'].trim() : 'No logo available.', // Use a placeholder if the logo is not provided
          description: row['Description'] ? row['Description'].trim() : 'No description available.',
          category: row['Category'] ? row['Category'].trim() : 'Uncategorized'
        });
      }
    })
    .on('end', () => {
      // Read the existing JSON file
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          return;
        }
        // Parse the existing tools data
        let tools = JSON.parse(data);

        // Update each tool with the actual affiliate links, logos, descriptions, and categories
        tools = tools.map(tool => {
          // Find the corresponding tool data from the CSV parsing result
          const toolData = toolsData.find(t => t.title === tool.title);
          if (toolData) {
            // If found, return the updated tool data
            return {
              ...tool,
              affiliateLink: toolData.affiliateLink,
              logo: toolData.logo,
              description: toolData.description,
              category: toolData.category
            };
          }
          // If not found, return the tool data without changes
          return tool;
        });

        // Write the updated tools data back to the JSON file
        fs.writeFile(filePath, JSON.stringify(tools, null, 2), 'utf8', (err) => {
          if (err) {
            console.error('Error writing file:', err);
          } else {
            console.log('Successfully updated affiliate links, logos, descriptions, and categories.');
          }
        });
      });
    });
};

// Execute the update function
updateAffiliateLinks();
