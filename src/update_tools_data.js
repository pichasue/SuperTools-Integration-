const fs = require('fs');

// Define the path to the JSON file
const filePath = './updated_affiliate_links.json';

// Read the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  try {
    // Parse the JSON data
    const tools = JSON.parse(data);

    // Define new tools to be added
    const newTools = [
      {
        title: "Synthesia",
        affiliateLink: "https://www.synthesia.io/",
        description: "AI-based video creation software that lets you type a prompt and create a video.",
        logo: "https://example.com/synthesia-logo.png",
        category: "Media and Communication"
      },
      {
        title: "Beautiful.ai",
        affiliateLink: "https://www.beautiful.ai/",
        description: "AI tool that helps create presentations by prompting you about the content you want included on the slides.",
        logo: "https://example.com/beautiful-logo.png",
        category: "Media and Communication"
      },
      {
        title: "ChatGPT",
        affiliateLink: "https://www.openai.com/chatgpt",
        description: "Chatbot tool from OpenAI that uses natural language processing to give answers to your questions.",
        logo: "https://example.com/chatgpt-logo.png",
        category: "Media and Communication"
      },
      {
        title: "Prezly",
        affiliateLink: "https://www.prezly.com/",
        description: "PR software that offers an integrated DeepL AI auto translation feature.",
        logo: "https://example.com/prezly-logo.png",
        category: "Media and Communication"
      },
      {
        title: "DeepL",
        affiliateLink: "https://www.deepl.com/",
        description: "Powerful AI tool for translating text quickly and accurately across multiple languages.",
        logo: "https://example.com/deepl-logo.png",
        category: "Media and Communication"
      },
      {
        title: "MidJourney",
        affiliateLink: "https://www.midjourney.com/",
        description: "AI tool for creating custom images.",
        logo: "https://example.com/midjourney-logo.png",
        category: "Media and Communication"
      },
      {
        title: "Dall-E",
        affiliateLink: "https://www.openai.com/dall-e",
        description: "AI tool for creating custom images.",
        logo: "https://example.com/dall-e-logo.png",
        category: "Media and Communication"
      },
      {
        title: "Synthesia.io",
        affiliateLink: "https://www.synthesia.io/",
        description: "AI video generator that allows you to have an AI-generated model speak your content.",
        logo: "https://example.com/synthesiaio-logo.png",
        category: "Media and Communication"
      },
      {
        title: "HourOne.ai",
        affiliateLink: "https://www.hourone.ai/",
        description: "AI video generator for creating videos with customized scripts.",
        logo: "https://example.com/hourone-logo.png",
        category: "Media and Communication"
      },
      // ... Add other tools here
    ];

    // Add new tools to the existing array
    const updatedTools = tools.concat(newTools);

    // Convert the updated array back to a JSON string
    const updatedJson = JSON.stringify(updatedTools, null, 2);

    // Write the updated JSON data back to the file
    fs.writeFile(filePath, updatedJson, 'utf8', (writeErr) => {
      if (writeErr) {
        console.error("Error writing file:", writeErr);
      } else {
        console.log("Successfully updated tools data.");
      }
    });
  } catch (parseErr) {
    console.error("Error parsing JSON:", parseErr);
  }
});
