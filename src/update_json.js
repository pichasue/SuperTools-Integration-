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
      if (row.Application && row['Affiliate Link'] && row.Logo && row.Application.trim() !== '') {
        toolsData.push({
          title: row.Application.trim(),
          affiliateLink: row['Affiliate Link'].trim(),
          logo: row.Logo.trim(),
          // Assuming the CSV has 'Description' and 'Category' columns
          description: row.Description ? row.Description.trim() : 'No description available.',
          category: row.Category ? row.Category.trim() : 'Uncategorized'
        });
      }
    })
    .on('end', () => {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          return;
        }
        const tools = JSON.parse(data);

        // Update each tool with the actual affiliate links, logos, descriptions, and categories
        tools.forEach(tool => {
          const toolData = toolsData.find(t => t.title === tool.title);
          if (toolData) {
            tool.affiliateLink = toolData.affiliateLink;
            tool.logo = toolData.logo;
            tool.description = toolData.description;
            tool.category = toolData.category;
          }
        });

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

updateAffiliateLinks();
