const fs = require('fs');
const filePath = './src/updated_affiliate_links.json';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the JSON file:', err);
    return;
  }

  let json = JSON.parse(data);
  json = json.map(tool => {
    if (tool.title === 'ElevenLabs') {
      tool.logo = 'Stylized text logo with parallel vertical lines representing the number 11';
    }
    return tool;
  });

  fs.writeFile(filePath, JSON.stringify(json, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('Error writing the JSON file:', err);
    } else {
      console.log('Successfully updated the JSON file with the ElevenLabs logo placeholder.');
    }
  });
});
