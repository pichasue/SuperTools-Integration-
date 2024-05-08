const fs = require('fs');
const { parse } = require('csv-parse/sync');

const csvData = fs.readFileSync('affiliate_links.csv', 'utf-8');
const records = parse(csvData, {
  columns: true,
  skip_empty_lines: true
});

// Initialize an object to hold categorized tool data
const categorizedTools = {
  'Media and Communication': [],
  'Banking': [],
  'Health': [],
  'Agriculture': [],
  'Social Developments': [],
  'AI': [],
  'Crypto': []
};

// Process each row and categorize the tools accordingly
records.forEach((row) => {
  // Assuming the category is provided in the CSV under 'Category' column
  const category = row['Category'];
  if (categorizedTools[category]) {
    categorizedTools[category].push({
      title: row['Application'],
      description: '', // Placeholder for description
      tags: [], // Placeholder for tags
      affiliateLink: row['affiliate link']
    });
  }
});

// Write the JSON output to a file
fs.writeFileSync('categorized_tools.json', JSON.stringify(categorizedTools, null, 2));

console.log('CSV file successfully processed and JSON file created');
