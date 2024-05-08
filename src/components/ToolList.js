import React from 'react';
import { SimpleGrid, Box, Heading } from '@chakra-ui/react';
import ToolCard from './ToolCard';

// Define a JSON object representing the AI tools across various categories
const aiTools = {
  "Media and Communication": [
    {
      "title": "Buffer",
      "description": "A platform for scheduling, publishing, and analyzing social media posts.",
      "tags": ["Social Media", "Scheduling", "Analytics"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    {
      "title": "Grammarly",
      "description": "An AI-powered writing assistant that helps you write clear, mistake-free content.",
      "tags": ["Writing", "Content", "AI"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    // Additional tools added here
    {
      "title": "Jasper",
      "description": "AI content creation tool.",
      "tags": ["Content Creation", "AI"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    {
      "title": "Synthesia",
      "description": "Create professional AI videos from text in 50+ languages.",
      "tags": ["Video Creation", "AI", "Multilingual"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    {
      "title": "Hootsuite",
      "description": "Manage all your social media in one place with automated publishing and analytics tracking.",
      "tags": ["Social Media Management", "Publishing", "Analytics"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    {
      "title": "DeepL",
      "description": "AI-powered translation tool that produces natural-sounding translations in various languages.",
      "tags": ["Translation", "AI", "Multilingual"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    {
      "title": "Canva",
      "description": "A graphic design platform, used to create social media graphics, presentations, posters, documents and other visual content.",
      "tags": ["Graphic Design", "Content Creation", "AI"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    {
      "title": "Talkwalker",
      "description": "AI-powered social media analytics platform that helps marketers understand and optimize their social presence.",
      "tags": ["Social Media Analytics", "Marketing", "AI"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    {
      "title": "Chatbot",
      "description": "AI-driven chatbot for engaging customers in real-time.",
      "tags": ["Customer Service", "Chatbot", "AI"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    {
      "title": "Voicer",
      "description": "Text-to-speech tool that converts written content into natural-sounding audio.",
      "tags": ["Text-to-Speech", "Audio Content", "AI"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    // Additional tools added here
    {
      "title": "Zapier",
      "description": "Automate workflows with a web-based service that allows end users to integrate the web applications they use.",
      "tags": ["Workflow Automation", "Productivity", "Integration"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    {
      "title": "Mailchimp",
      "description": "Marketing automation platform and an email marketing service.",
      "tags": ["Email Marketing", "Marketing Automation", "AI"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    {
      "title": "Crayon",
      "description": "AI-driven platform that tracks and analyzes a company's external environment to inform strategic decisions.",
      "tags": ["Market Intelligence", "Competitive Analysis", "AI"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    {
      "title": "Adobe Spark",
      "description": "An integrated suite of media creation applications for mobile and web.",
      "tags": ["Graphic Design", "Video Creation", "Web Development"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    {
      "title": "Animoto",
      "description": "Cloud-based video creation service that produces video from photos, video clips, and music.",
      "tags": ["Video Editing", "Marketing", "AI"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    {
      "title": "Adobe Premiere Pro",
      "description": "Industry-standard video editing software for creating high-quality content.",
      "tags": ["Video Editing", "Content Creation", "Professional"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    {
      "title": "BuzzSumo",
      "description": "Content marketing tool that allows users to find the most shared content and key influencers.",
      "tags": ["Content Marketing", "Influencer Tracking", "Analytics"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    {
      "title": "SEMrush",
      "description": "Online visibility management and content marketing SaaS platform.",
      "tags": ["SEO", "Marketing", "Content Strategy"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    // ... other tools for Media and Communication
  ],
  "Banking": [
    {
      "title": "Kasisto",
      "description": "AI for finance that enables meaningful customer engagement through intelligent conversations.",
      "tags": ["Finance", "AI", "Conversational"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    {
      "title": "Zest AI",
      "description": "Lending software that uses AI to better assess borrower risk and improve loan performance.",
      "tags": ["Lending", "Risk Assessment", "AI"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    // Additional tools added here
    {
      "title": "Domo",
      "description": "Business intelligence tools and data visualization.",
      "tags": ["Business Intelligence", "Data Visualization", "AI"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    {
      "title": "Booke.AI",
      "description": "AI-powered financial assistant for bookkeeping.",
      "tags": ["Bookkeeping", "Finance", "AI"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    // ... other tools for Banking
  ],
  "Health": [
    {
      "title": "PathAI",
      "description": "AI-powered technology for pathology to assist in accurate diagnosis.",
      "tags": ["Pathology", "Diagnosis", "AI"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    {
      "title": "Babylon Health",
      "description": "Digital healthcare assistant powered by AI, offering medical consultations.",
      "tags": ["Healthcare", "Consultation", "AI"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    // Additional tools added here
    {
      "title": "Merative",
      "description": "Clinical decision support and healthcare analytics.",
      "tags": ["Healthcare Analytics", "Clinical Support", "AI"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    {
      "title": "Regard",
      "description": "Automating clinical tasks with AI.",
      "tags": ["Clinical Tasks", "Automation", "AI"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    // ... other tools for Health
  ],
  "Agriculture": [
    {
      "title": "FarmBot",
      "description": "Open-source CNC farming machine and software for automated precision agriculture.",
      "tags": ["Farming", "Automation", "Open-source"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    {
      "title": "CropX",
      "description": "An ag-analytics company that develops cloud-based software solutions integrated with wireless sensors, which increase crop yields.",
      "tags": ["Analytics", "Sensors", "Yield Increase"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    // Additional tools added here
    {
      "title": "Blue River Technology",
      "description": "Specializes in agricultural robotics and machine learning.",
      "tags": ["Agricultural Robotics", "Machine Learning", "AI"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    {
      "title": "GPT-4",
      "description": "Advanced AI model capable of various predictive and analytical tasks in agriculture.",
      "tags": ["Predictive Models", "Analytics", "AI"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    // ... other tools for Agriculture
  ],
  "Social Development": [
    {
      "title": "Ushahidi",
      "description": "A platform that allows users to crowdsource crisis information via text messaging and social media.",
      "tags": ["Crisis Response", "Crowdsourcing", "Platform"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    {
      "title": "DataKind",
      "description": "Harnesses the power of data science in the service of humanity.",
      "tags": ["Data Science", "Humanity", "Service"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    // Additional tools added here
    {
      "title": "Lately",
      "description": "AI-powered social media management tool.",
      "tags": ["Social Media Management", "AI"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    {
      "title": "Flick",
      "description": "Social media content planning and hashtag tool.",
      "tags": ["Content Planning", "Hashtag Tool", "AI"],
      "affiliateLink": "https://placeholder-affiliate-link.com"
    },
    // ... other tools for Social Development
  ],
  "AI and Crypto Tools": [
    {
      "title": "3Commas",
      "description": "Smart trading terminal and auto trading bots.",
      "tags": ["Trading Bots", "Portfolio Management", "Cryptocurrency"],
      "affiliateLink": "https://3commas.io"
    },
    {
      "title": "Pionex",
      "description": "Automated trading with a variety of bots including Grid Trading Bot and DCA Bot.",
      "tags": ["Trading Automation", "Cryptocurrency", "AI"],
      "affiliateLink": "https://pionex.com"
    },
    {
      "title": "Altrady",
      "description": "Trade on multiple exchanges with advanced features and a range of bots.",
      "tags": ["Trading Bots", "Crypto Exchanges", "AI"],
      "affiliateLink": "https://altrady.com"
    },
    {
      "title": "Octobot",
      "description": "Automated trading strategies with custom AI development capabilities.",
      "tags": ["Custom AI", "Trading Strategies", "Automation"],
      "affiliateLink": "https://octobot.online"
    },
    {
      "title": "ArbitrageScanner",
      "description": "Tool for arbitrage trading across exchanges without pre-holding tokens.",
      "tags": ["Arbitrage", "Trading", "AI"],
      "affiliateLink": "https://arbitragescanner.io"
    },
    {
      "title": "Kryll",
      "description": "AI-powered crypto trading bot with a strategy builder and marketplace.",
      "tags": ["Crypto Trading", "Strategy Builder", "AI"],
      "affiliateLink": "https://kryll.io"
    },
    {
      "title": "CryptoHopper",
      "description": "AI crypto trading bot with a range of tools and backtesting capabilities.",
      "tags": ["Trading Bot", "Backtesting", "AI"],
      "affiliateLink": "https://cryptohopper.com"
    },
    {
      "title": "Bitsgap",
      "description": "Crypto trading bots and portfolio management with integration across 30 exchanges.",
      "tags": ["Trading Bots", "Portfolio Management", "Integration"],
      "affiliateLink": "https://bitsgap.com"
    },
    {
      "title": "TradeSanta",
      "description": "Cryptocurrency trading software and bot for leveraging market fluctuations.",
      "tags": ["Trading Software", "Crypto Market", "AI"],
      "affiliateLink": "https://tradesanta.com"
    },
    {
      "title": "CryptoHero",
      "description": "AI-powered multi-platform crypto bot for optimized trading.",
      "tags": ["Crypto Bot", "AI", "Trading Optimization"],
      "affiliateLink": "https://cryptohero.ai"
    },
    {
      "title": "New AI Tool 1",
      "description": "Description for new AI tool 1.",
      "tags": ["Tag1", "Tag2", "Tag3"],
      "affiliateLink": "https://new-ai-tool-1-affiliate-link.com"
    },
    {
      "title": "New AI Tool 2",
      "description": "Description for new AI tool 2.",
      "tags": ["Tag1", "Tag2", "Tag3"],
      "affiliateLink": "https://new-ai-tool-2-affiliate-link.com"
    }
    // ... additional tools will be added here following the same structure
  ]
};

const ToolList = ({ tools = aiTools }) => {
  // Log the initial structure and type of the tools prop
  console.log("Tools prop (initial):", tools, "Type:", typeof tools);

  // Group tools by category
  const groupedTools = Object.entries(tools).reduce((group, [category, toolsInCategory]) => {
    // Log the category and the type and content of toolsInCategory before processing
    console.log(`Category: ${category}`, `Tools in category (before reduce):`, toolsInCategory, "Type:", Array.isArray(toolsInCategory) ? "Array" : typeof toolsInCategory);

    // Initialize the category array if it doesn't exist
    if (!group[category]) {
      group[category] = [];
    }

    // Ensure that toolsInCategory is an array before spreading
    if (Array.isArray(toolsInCategory)) {
      group[category] = [...group[category], ...toolsInCategory];
    } else {
      // Log an error if toolsInCategory is not an array
      console.error(`Tools for category ${category} is not an array:`, toolsInCategory);
    }
    return group;
  }, {});

  // Log the final grouped tools structure
  console.log("Grouped tools (after reduce):", groupedTools);

  return (
    <Box>
      <Heading as="h2" size="xl" mb={6}>
        AI Tools Directory
      </Heading>
      {Object.entries(groupedTools).map(([category, tools]) => (
        <Box key={category} mb={10}>
          <Heading as="h3" size="lg" mb={4}>
            {category}
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
            {tools.map((tool, index) => (
              <ToolCard key={index} {...tool} />
            ))}
          </SimpleGrid>
        </Box>
      ))}
    </Box>
  );
};

export default ToolList;
