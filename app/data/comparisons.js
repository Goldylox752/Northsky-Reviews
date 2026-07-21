export const comparisons = [
  {
    slug: "chatgpt-vs-claude",
    title: "ChatGPT vs Claude – Which AI Assistant is Better in 2026?",
    description:
      "In-depth comparison of ChatGPT and Claude: features, pricing, performance, and real-world use cases.",
    tool1: {
      name: "ChatGPT",
      logo: "/logos/chatgpt.png",
      description: "OpenAI's flagship AI assistant, known for versatility and coding capabilities.",
      affiliateLink: "https://chat.openai.com",
      rating: 4.8,
      pros: [
        "Strong coding capabilities",
        "Large ecosystem (plugins, apps)",
        "Fast response times",
        "Multilingual support",
        "Advanced reasoning (GPT-4)",
      ],
      cons: ["Can be expensive at scale", "Occasional hallucinations", "Limited context window"],
      bestFor: "General use, coding, research",
    },
    tool2: {
      name: "Claude AI",
      logo: "/logos/claude.png",
      description: "Anthropic's conversational AI focused on safety, reasoning, and long-form writing.",
      affiliateLink: "https://claude.ai",
      rating: 4.7,
      pros: [
        "Longer context window",
        "Better for document analysis",
        "Strong reasoning with less hallucination",
        "Excellent for writing and editing",
        "Simpler pricing tiers",
      ],
      cons: ["Smaller ecosystem", "No image generation", "Some features behind paywall"],
      bestFor: "Writing, long documents, research",
    },
    verdict: {
      winner: "ChatGPT",
      summary:
        "ChatGPT is ideal for users who want a one‑stop AI assistant with powerful coding and plugin capabilities. Claude excels in writing, long‑form analysis, and reasoning. Your choice depends on your primary use case.",
      callToAction: "Choose ChatGPT for versatility; choose Claude for deep analysis and writing.",
    },
    features: [
      { name: "Coding Assistance", tool1: "⭐⭐⭐⭐⭐", tool2: "⭐⭐⭐⭐" },
      { name: "Long Document Analysis", tool1: "⭐⭐⭐", tool2: "⭐⭐⭐⭐⭐" },
      { name: "Ecosystem (integrations)", tool1: "⭐⭐⭐⭐⭐", tool2: "⭐⭐⭐" },
      { name: "Pricing (value for money)", tool1: "⭐⭐⭐⭐", tool2: "⭐⭐⭐⭐⭐" },
      { name: "Writing Quality", tool1: "⭐⭐⭐⭐", tool2: "⭐⭐⭐⭐⭐" },
      { name: "Reasoning Accuracy", tool1: "⭐⭐⭐⭐", tool2: "⭐⭐⭐⭐⭐" },
    ],
    faqs: [
      {
        question: "Which is more affordable, ChatGPT or Claude?",
        answer:
          "Both have free tiers. For heavy use, Claude's paid tier is slightly cheaper than ChatGPT Plus, but pricing varies by usage.",
      },
      {
        question: "Which is better for developers?",
        answer: "ChatGPT has a stronger coding ecosystem and integration with tools like GitHub.",
      },
      {
        question: "Can I use both?",
        answer: "Absolutely! Many users combine both for different tasks.",
      },
    ],
    affiliateButton1: "Try ChatGPT →",
    affiliateButton2: "Try Claude →",
  },
  // Add more comparisons here...
];