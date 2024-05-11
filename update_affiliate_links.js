const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

// Path to the JSON file
const jsonFilePath = './updated_affiliate_links.json';
// Path to the Excel file
const excelFilePath = path.resolve(__dirname, 'affiliate_links_2024.xlsx');

// Function to read the Excel file and convert it to JSON
function excelToJson(filePath) {
  const workbook = xlsx.readFile(filePath);
  const sheetNameList = workbook.SheetNames;
  const xlData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]]);
  return xlData;
}

// Read the Excel file and parse it to JSON
const toolsDataFromExcel = excelToJson(excelFilePath);

// Read the JSON file
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  try {
    // Parse the JSON data
    const tools = JSON.parse(data);

    // Update each tool entry with the correct information from the Excel file
    tools.forEach(tool => {
      const toolData = toolsDataFromExcel.find(t => t.Name === tool.title);
      if (toolData) {
        tool.affiliateLink = toolData['Affiliate Link'];
        tool.description = toolData['Description'];
        tool.logo = toolData['Logo URL'];
        tool.category = toolData['Category'];
      }
    });

    // Convert the updated JavaScript object back into a JSON string
    const updatedJson = JSON.stringify(tools, null, 2);

    // Write the updated JSON string back to the file
    fs.writeFile(jsonFilePath, updatedJson, 'utf8', (err) => {
      if (err) {
        console.error("Error writing file:", err);
      } else {
        console.log("Successfully updated affiliate links and descriptions.");
      }
    });
  } catch (err) {
    console.error("Error parsing JSON string:", err);
  }
});
