const fs = require('fs');
const path = require('path');

// Path to the JSON file containing the affiliate links and tool information
const affiliateLinksPath = path.join(__dirname, 'updated_affiliate_links.json');

// Function to create a one-line description for a tool
const createDescription = (toolName) => {
  // This function creates a one-line description based on the tool's name
  // The descriptions should be updated with actual information about each tool
  const descriptions = {
    "Adcreative": "Adcreative automates the creation of ad designs and improves campaign performance.",
    "Figma": "Figma is a collaborative interface design tool that allows the entire team's design process to reside in one online tool.",
    "Kissmetrics": "Kissmetrics provides customer engagement automation that helps to increase the conversion rate.",
    "Murf.ai": "Murf.ai is a text-to-speech platform with realistic AI voices for creating voiceovers for videos.",
    "Eleven labs": "Eleven labs offers a cutting-edge voice cloning technology to create realistic synthetic voices.",
    "Oyster": "Oyster is a global employment platform that enables companies to hire, pay, and take care of employees anywhere in the world.",
    "Pandadoc": "Pandadoc streamlines the process of creating and signing digital documents with ease and efficiency.",
    "Quillbot": "Quillbot is an AI writing assistant that enhances your writing by making it more clear, concise, and compelling.",
    "Restream": "Restream allows you to broadcast live content to multiple streaming platforms simultaneously.",
    "Social bee": "Social bee is a social media management tool that helps you to create, schedule, and post content across platforms.",
    "Todoist": "Todoist helps you organize and prioritize your tasks and projects so you can stress less and achieve more.",
    "Metricool": "Metricool is an online tool that helps manage, measure, and analyze social media and advertising performance."
  };

  return descriptions[toolName] || `One-line description for ${toolName} not available.`;
};

// Function to update the affiliate links and descriptions in the JSON file
const updateAffiliateLinks = () => {
  // Read the existing JSON file
  const affiliateLinksData = JSON.parse(fs.readFileSync(affiliateLinksPath, 'utf8'));

  // Update each tool entry with the provided affiliate links and generated descriptions
  const updatedData = affiliateLinksData.map(tool => {
    // Use the provided affiliate link or keep the existing one if not provided
    const affiliateLink = tool.affiliateLink || 'https://example.com/affiliate-link';

    // Create a one-line description for the tool
    const description = createDescription(tool.title);

    // Return the updated tool entry
    return {
      ...tool,
      affiliateLink,
      description,
      // Update the logo URL with the actual URL provided by the user
      logo: tool.logo || `https://example.com/logos/${tool.title.replace(/\s/g, '').toLowerCase()}.png`
    };
  });

  // Write the updated JSON data back to the file
  fs.writeFileSync(affiliateLinksPath, JSON.stringify(updatedData, null, 2), 'utf8');
};

// Run the update function
updateAffiliateLinks();
