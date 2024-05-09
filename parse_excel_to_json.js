const xlsx = require("xlsx");
const workbook = xlsx.readFile("affiliate_links.xlsx");
const sheet_name_list = workbook.SheetNames;
const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]], {header:1});
const fs = require("fs");

let tools = [];

data.forEach((row, index) => {
  if (index > 0 && row[2]) { // Skip header and empty rows
    const tool = {
      title: row[0].trim(),
      affiliateLink: row[2] ? row[2].trim() : ""
    };
    tools.push(tool);
  }
});

fs.writeFileSync("updated_affiliate_links.json", JSON.stringify(tools, null, 2));
