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
      "affiliateLink": "https://actual-affiliate-link-for-buffer.com"
    },
    {
      "title": "Grammarly",
      "description": "An AI-powered writing assistant that helps you write clear, mistake-free content.",
      "tags": ["Writing", "Content", "AI"],
      "affiliateLink": "https://actual-affiliate-link-for-grammarly.com"
    },
    // Additional tools added here
    {
      "title": "Jasper",
      "description": "AI content creation tool.",
      "tags": ["Content Creation", "AI"],
      "affiliateLink": "https://actual-affiliate-link-for-jasper.com"
    },
    {
      "title": "Synthesia",
      "description": "Create professional AI videos from text in 50+ languages.",
      "tags": ["Video Creation", "AI", "Multilingual"],
      "affiliateLink": "https://actual-affiliate-link-for-synthesia.com"
    },
    {
      "title": "Hootsuite",
      "description": "Manage all your social media in one place with automated publishing and analytics tracking.",
      "tags": ["Social Media Management", "Publishing", "Analytics"],
      "affiliateLink": "https://actual-affiliate-link-for-hootsuite.com"
    },
    {
      "title": "DeepL",
      "description": "AI-powered translation tool that produces natural-sounding translations in various languages.",
      "tags": ["Translation", "AI", "Multilingual"],
      "affiliateLink": "https://actual-affiliate-link-for-deepl.com"
    },
    {
      "title": "Canva",
      "description": "A graphic design platform, used to create social media graphics, presentations, posters, documents and other visual content.",
      "tags": ["Graphic Design", "Content Creation", "AI"],
      "affiliateLink": "https://actual-affiliate-link-for-canva.com"
    },
    {
      "title": "Talkwalker",
      "description": "AI-powered social media analytics platform that helps marketers understand and optimize their social presence.",
      "tags": ["Social Media Analytics", "Marketing", "AI"],
      "affiliateLink": "https://actual-affiliate-link-for-talkwalker.com"
    },
    {
      "title": "Chatbot",
      "description": "AI-driven chatbot for engaging customers in real-time.",
      "tags": ["Customer Service", "Chatbot", "AI"],
      "affiliateLink": "https://actual-affiliate-link-for-chatbot.com"
    },
    {
      "title": "Voicer",
      "description": "Text-to-speech tool that converts written content into natural-sounding audio.",
      "tags": ["Text-to-Speech", "Audio Content", "AI"],
      "affiliateLink": "https://actual-affiliate-link-for-voicer.com"
    },
    // Additional tools added here
    {
      "title": "Zapier",
      "description": "Automate workflows with a web-based service that allows end users to integrate the web applications they use.",
      "tags": ["Workflow Automation", "Productivity", "Integration"],
      "affiliateLink": "https://actual-affiliate-link-for-zapier.com"
    },
    {
      "title": "Mailchimp",
      "description": "Marketing automation platform and an email marketing service.",
      "tags": ["Email Marketing", "Marketing Automation", "AI"],
      "affiliateLink": "https://actual-affiliate-link-for-mailchimp.com"
    },
    {
      "title": "Crayon",
      "description": "AI-driven platform that tracks and analyzes a company's external environment to inform strategic decisions.",
      "tags": ["Market Intelligence", "Competitive Analysis", "AI"],
      "affiliateLink": "https://actual-affiliate-link-for-crayon.com"
    },
    {
      "title": "Adobe Spark",
      "description": "An integrated suite of media creation applications for mobile and web.",
      "tags": ["Graphic Design", "Video Creation", "Web Development"],
      "affiliateLink": "https://actual-affiliate-link-for-adobe-spark.com"
    },
    {
      "title": "Animoto",
      "description": "Cloud-based video creation service that produces video from photos, video clips, and music.",
      "tags": ["Video Editing", "Marketing", "AI"],
      "affiliateLink": "https://actual-affiliate-link-for-animoto.com"
    },
    {
      "title": "Adobe Premiere Pro",
      "description": "Industry-standard video editing software for creating high-quality content.",
      "tags": ["Video Editing", "Content Creation", "Professional"],
      "affiliateLink": "https://actual-affiliate-link-for-adobe-premiere-pro.com"
    },
    {
      "title": "BuzzSumo",
      "description": "Content marketing tool that allows users to find the most shared content and key influencers.",
      "tags": ["Content Marketing", "Influencer Tracking", "Analytics"],
      "affiliateLink": "https://actual-affiliate-link-for-buzzsumo.com"
    },
    {
      "title": "SEMrush",
      "description": "Online visibility management and content marketing SaaS platform.",
      "tags": ["SEO", "Marketing", "Content Strategy"],
      "affiliateLink": "https://actual-affiliate-link-for-semrush.com"
    },
    // ... other tools for Media and Communication
  ],
  "Banking": [
    {
      "title": "Kasisto",
      "description": "AI for finance that enables meaningful customer engagement through intelligent conversations.",
      "tags": ["Finance", "AI", "Conversational"],
      "affiliateLink": "https://actual-affiliate-link-for-kasisto.com"
    },
    {
      "title": "Zest AI",
      "description": "Lending software that uses AI to better assess borrower risk and improve loan performance.",
      "tags": ["Lending", "Risk Assessment", "AI"],
      "affiliateLink": "https://actual-affiliate-link-for-zestai.com"
    },
    // Additional tools added here
    {
      "title": "Domo",
      "description": "Business intelligence tools and data visualization.",
      "tags": ["Business Intelligence", "Data Visualization", "AI"],
      "affiliateLink": "https://actual-affiliate-link-for-domo.com"
    },
    {
      "title": "Booke.AI",
      "description": "AI-powered financial assistant for bookkeeping.",
      "tags": ["Bookkeeping", "Finance", "AI"],
      "affiliateLink": "https://actual-affiliate-link-for-bookeai.com"
    },
    // ... other tools for Banking
  ],
  "Health": [
    {
      "title": "PathAI",
      "description": "AI-powered technology for pathology to assist in accurate diagnosis.",
      "tags": ["Pathology", "Diagnosis", "AI"],
      "affiliateLink": "https://actual-affiliate-link-for-pathai.com"
    },
    {
      "title": "Babylon Health",
      "description": "Digital healthcare assistant powered by AI, offering medical consultations.",
      "tags": ["Healthcare", "Consultation", "AI"],
      "affiliateLink": "https://actual-affiliate-link-for-babylonhealth.com"
    },
    // Additional tools added here
    {
      "title": "Merative",
      "description": "Clinical decision support and healthcare analytics.",
      "tags": ["Healthcare Analytics", "Clinical Support", "AI"],
      "affiliateLink": "https://actual-affiliate-link-for-merative.com"
    },
    {
      "title": "Regard",
      "description": "Automating clinical tasks with AI.",
      "tags": ["Clinical Tasks", "Automation", "AI"],
      "affiliateLink": "https://actual-affiliate-link-for-regard.com"
    },
    // ... other tools for Health
  ],
  "Agriculture": [
    {
      "title": "FarmBot",
      "description": "Open-source CNC farming machine and software for automated precision agriculture.",
      "tags": ["Farming", "Automation", "Open-source"],
      "affiliateLink": "https://actual-affiliate-link-for-farmbot.com"
    },
    {
      "title": "CropX",
      "description": "An ag-analytics company that develops cloud-based software solutions integrated with wireless sensors, which increase crop yields.",
      "tags": ["Analytics", "Sensors", "Yield Increase"],
      "affiliateLink": "https://actual-affiliate-link-for-cropx.com"
    },
    {
      "title": "Blue River Technology",
      "description": "Specializes in agricultural robotics and machine learning.",
      "tags": ["Agricultural Robotics", "Machine Learning", "AI"],
      "affiliateLink": "https://actual-affiliate-link-for-blue-river-technology.com"
    },
    {
      "title": "GPT-4",
      "description": "Advanced AI model capable of various predictive and analytical tasks in agriculture.",
      "tags": ["Predictive Models", "Analytics", "AI"],
      "affiliateLink": "https://actual-affiliate-link-for-gpt-4.com"
    },
    // ... other tools for Agriculture
  ],
  "Social Development": [
    {
      "title": "Ushahidi",
      "description": "A platform that allows users to crowdsource crisis information via text messaging and social media.",
      "tags": ["Crisis Response", "Crowdsourcing", "Platform"],
      "affiliateLink": "https://actual-affiliate-link-for-ushahidi.com"
    },
    {
      "title": "DataKind",
      "description": "Harnesses the power of data science in the service of humanity.",
      "tags": ["Data Science", "Humanity", "Service"],
      "affiliateLink": "https://actual-affiliate-link-for-datakind.com"
    },
    // Additional tools added here
    {
      "title": "Lately",
      "description": "AI-powered social media management tool.",
      "tags": ["Social Media Management", "AI"],
      "affiliateLink": "https://actual-affiliate-link-for-lately.com"
    },
    {
      "title": "Flick",
      "description": "Social media content planning and hashtag tool.",
      "tags": ["Content Planning", "Hashtag Tool", "AI"],
      "affiliateLink": "https://actual-affiliate-link-for-flick.com"
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
      "title": "AI Trading Bot 3",
      "description": "A next-generation trading bot that uses AI to predict market changes with high accuracy.",
      "tags": ["AI", "Trading Bot", "Market Prediction"],
      "affiliateLink": "https://ai-trading-bot-3-affiliate-link.com"
    },
    {
      "title": "Crypto Analysis Tool 3",
      "description": "An advanced tool for deep analysis of cryptocurrency markets, offering actionable insights.",
      "tags": ["Crypto", "Deep Analysis", "AI"],
      "affiliateLink": "https://crypto-analysis-tool-3-affiliate-link.com"
    },
    {
      "title": "AI Trading Bot 4",
      "description": "AI-driven bot that offers automated trading across multiple cryptocurrency exchanges.",
      "tags": ["AI", "Trading Bot", "Multi-Exchange"],
      "affiliateLink": "https://ai-trading-bot-4-affiliate-link.com"
    },
    {
      "title": "Crypto Analysis Tool 4",
      "description": "Provides a comprehensive suite of analytical tools for cryptocurrency traders and investors.",
      "tags": ["Crypto", "Analytics Suite", "AI"],
      "affiliateLink": "https://crypto-analysis-tool-4-affiliate-link.com"
    },
    {
      "title": "AI Trading Bot 5",
      "description": "Sophisticated AI trading bot that adapts to market changes for optimal investment strategies.",
      "tags": ["AI", "Trading Bot", "Adaptive Algorithms"],
      "affiliateLink": "https://ai-trading-bot-5-affiliate-link.com"
    },
    {
      "title": "Crypto Analysis Tool 5",
      "description": "Real-time cryptocurrency market analysis and prediction tool with AI integration.",
      "tags": ["Crypto", "Real-time Analysis", "AI"],
      "affiliateLink": "https://crypto-analysis-tool-5-affiliate-link.com"
    },
    {
      "title": "AI Trading Bot 6",
      "description": "Automated trading bot leveraging AI for real-time market decisions.",
      "tags": ["AI", "Trading Bot", "Real-time"],
      "affiliateLink": "https://ai-trading-bot-6-affiliate-link.com"
    },
    {
      "title": "Crypto Analysis Tool 6",
      "description": "In-depth analysis tool for cryptocurrency market trends and predictions.",
      "tags": ["Crypto", "Market Analysis", "AI"],
      "affiliateLink": "https://crypto-analysis-tool-6-affiliate-link.com"
    },
    {
      "title": "Adcreative",
      "description": "AI-driven platform for creating high-converting ad creatives.",
      "tags": ["Ad Creation", "AI", "Marketing"],
      "affiliateLink": "https://free-trial.adcreative.ai/love2024"
    },
    {
      "title": "Figma",
      "description": "Collaborative interface design tool with real-time collaboration.",
      "tags": ["Design", "Collaboration", "UI/UX"],
      "affiliateLink": "https://psxid.figma.com/hzcy968yp4dw-lpaypq"
    },
    {
      "title": "Kissmetrics",
      "description": "Analytics platform to track, analyze, and optimize customer interaction.",
      "tags": ["Analytics", "Marketing", "Customer Engagement"],
      "affiliateLink": "https://partnerstack.kissmetrics.io/suziedemo"
    },
    {
      "title": "Murf.ai",
      "description": "Text-to-speech platform with realistic AI voices for various use cases.",
      "tags": ["Text-to-Speech", "AI", "Audio"],
      "affiliateLink": "https://get.murf.ai/text-to-speech-v5n52twouv4x"
    },
    {
      "title": "Eleven labs",
      "description": "Advanced text-to-speech technology offering natural and expressive voice synthesis.",
      "tags": ["Text-to-Speech", "AI", "Natural Language Processing"],
      "affiliateLink": "elevenlabs.io/?from=suziengatia5858"
    },
    {
      "title": "Oyster",
      "description": "HR platform for globally distributed teams, simplifying international employment.",
      "tags": ["HR", "Remote Work", "Employment"],
      "affiliateLink": "https://oyster.partnerlinks.io/love2024"
    },
    {
      "title": "Pandadoc",
      "description": "Document automation software for creating, managing, and signing digital documents.",
      "tags": ["Document Management", "Automation", "E-Signature"],
      "affiliateLink": "https://pandadoc.partnerlinks.io/love2024"
    },
    {
      "title": "Quillbot",
      "description": "AI writing and research platform to enhance and streamline the writing process.",
      "tags": ["Writing Assistant", "AI", "Research"],
      "affiliateLink": "https://try.quillbot.com/dmv33v2kegrg"
    },
    {
      "title": "Restream",
      "description": "Live streaming platform that allows you to broadcast across multiple streaming services.",
      "tags": ["Live Streaming", "Multicast", "Video"],
      "affiliateLink": "https://try.restream.io/love2024"
    },
    {
      "title": "Social bee",
      "description": "Social media management tool for content creation, scheduling, and analytics.",
      "tags": ["Social Media", "Content Scheduling", "Analytics"],
      "affiliateLink": "https://get.socialbee.io/love2024"
    },
    {
      "title": "Todoist",
      "description": "Task manager and to-do list application to organize work and life.",
      "tags": ["Productivity", "Task Management", "Organization"],
      "affiliateLink": "https://get.todoist.io/love2024"
    },
    {
      "title": "Metricool",
      "description": "All-in-one digital analytics tool for managing online presence and analyzing data.",
      "tags": ["Analytics", "Social Media", "Digital Marketing"],
      "affiliateLink": "https://i.mtr.cool/LLCHNK"
    },
    // ... additional tools will be added here following the same structure
    {
      "title": "New AI Trading Bot",
      "description": "Innovative trading bot leveraging AI for enhanced cryptocurrency trading strategies.",
      "tags": ["AI", "Trading Bot", "Cryptocurrency"],
      "affiliateLink": "https://new-ai-trading-bot-affiliate-link.com"
    },
    {
      "title": "New Crypto Analysis Tool",
      "description": "Cutting-edge analysis tool providing in-depth insights into cryptocurrency markets.",
      "tags": ["Crypto", "Analysis", "AI"],
      "affiliateLink": "https://new-crypto-analysis-tool-affiliate-link.com"
    },
    {
      "title": "New AI Trading Bot 7",
      "description": "Leverage AI for advanced trading strategies and real-time market analysis.",
      "tags": ["AI", "Trading Bot", "Market Analysis"],
      "affiliateLink": "https://new-ai-trading-bot-7-affiliate-link.com"
    },
    {
      "title": "New Crypto Analysis Tool 7",
      "description": "Gain deep insights and predictive analytics for cryptocurrency markets.",
      "tags": ["Crypto", "Predictive Analytics", "AI"],
      "affiliateLink": "https://new-crypto-analysis-tool-7-affiliate-link.com"
    },
    {
      "title": "New AI Trading Bot 8",
      "description": "Advanced AI trading bot that uses machine learning to optimize trading strategies in real-time.",
      "tags": ["AI", "Trading Bot", "Machine Learning"],
      "affiliateLink": "https://new-ai-trading-bot-8-affiliate-link.com"
    },
    {
      "title": "New Crypto Analysis Tool 8",
      "description": "Comprehensive crypto analysis tool that uses AI to provide market insights and predictions.",
      "tags": ["Crypto", "Market Analysis", "AI"],
      "affiliateLink": "https://new-crypto-analysis-tool-8-affiliate-link.com"
    }
    // ... additional tools will be added here following the same structure
  ]
};

const ToolList = ({ tools = aiTools }) => {
  // Log the initial structure and type of the tools prop
  console.log("Tools prop (initial):", tools, "Type:", typeof tools);

  // Group tools by category
  const groupedTools = Object.keys(tools).reduce((group, category) => {
    const toolsInCategory = tools[category];
    console.log(`Category: ${category}`, `Tools in category (before reduce):`, toolsInCategory, "Type:", Array.isArray(toolsInCategory) ? "Array" : typeof toolsInCategory);

    // Ensure the category array is initialized and then directly assign the tools to the category
    group[category] = Array.isArray(toolsInCategory) ? toolsInCategory : [toolsInCategory];

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
