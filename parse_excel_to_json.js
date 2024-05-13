const xlsx = require('xlsx');
const fs = require('fs');

// Function to read the Excel file and convert it to JSON
function parseExcelToJson(excelFilePath, jsonFilePath) {
  // Read the Excel file
  const workbook = xlsx.readFile(excelFilePath);
  const sheetNameList = workbook.SheetNames;
  const xlData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]]);

  // Filter out empty rows and map to the desired structure
  const toolsData = xlData.filter(row => row.Application).map(row => ({
    name: row.Application,
    logo: row.logo,
    affiliateLink: row['affiliate link'],
    description: '', // Placeholder for descriptions
    category: '', // Placeholder for categories
  }));

  // Write the JSON data to the specified file
  fs.writeFileSync(jsonFilePath, JSON.stringify(toolsData, null, 2), 'utf8');
}

// Path to the Excel and JSON files
const excelFilePath = 'affiliate_links.xlsx';
const jsonFilePath = 'updated_affiliate_links.json';

// Parse the Excel file and update the JSON data
parseExcelToJson(excelFilePath, jsonFilePath);
