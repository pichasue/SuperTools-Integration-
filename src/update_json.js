const fs = require('fs');
const path = require('path');

const updateAffiliateLinks = () => {
  const filePath = path.join(__dirname, 'updated_affiliate_links.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    const tools = JSON.parse(data);

    // Example updates - this should be replaced with actual data
    tools.forEach(tool => {
      tool.affiliateLink = 'https://example.com/affiliate/' + encodeURIComponent(tool.title);
      tool.logo = 'https://example.com/logos/' + encodeURIComponent(tool.title) + '.png';
    });

    fs.writeFile(filePath, JSON.stringify(tools, null, 2), 'utf8', (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('Successfully updated affiliate links and logos.');
      }
    });
  });
};

updateAffiliateLinks();
