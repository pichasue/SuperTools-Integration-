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
      if (row.Application && row['affiliate link']) {
        toolsData.push({
          title: row.Application.trim(),
          affiliateLink: row['affiliate link'].trim(),
          logo: row.logo ? row.logo.trim() : `https://example.com/logos/${encodeURIComponent(row.Application.trim())}.png`
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

        // Update each tool with the actual affiliate links and logos
        tools.forEach(tool => {
          const toolData = toolsData.find(t => t.title === tool.title);
          if (toolData) {
            tool.affiliateLink = toolData.affiliateLink;
            tool.logo = toolData.logo;
          }
        });

        fs.writeFile(filePath, JSON.stringify(tools, null, 2), 'utf8', (err) => {
          if (err) {
            console.error('Error writing file:', err);
          } else {
            console.log('Successfully updated affiliate links and logos.');
          }
        });
      });
    });
};

updateAffiliateLinks();
