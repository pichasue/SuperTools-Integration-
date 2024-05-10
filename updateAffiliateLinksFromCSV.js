const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');
const affiliateLinksPath = path.join(__dirname, 'src', 'updated_affiliate_links.json');
const csvFilePath = path.join(__dirname, 'affiliate_links.csv');
const affiliateLinks = require(affiliateLinksPath);

const csvData = fs.readFileSync(csvFilePath);
const records = parse(csvData, {
  columns: true,
  skip_empty_lines: true
});

const updatedAffiliateLinks = affiliateLinks.map(tool => {
  const record = records.find(r => r.Application.trim() === tool.title);
  if (record) {
    return {
      ...tool,
      affiliateLink: record['affiliate link'] || tool.affiliateLink,
      logo: record.logo || tool.logo
    };
  }
  return tool;
});

fs.writeFileSync(affiliateLinksPath, JSON.stringify(updatedAffiliateLinks, null, 2));
console.log('updated_affiliate_links.json has been updated with data from CSV.');

