
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string; // Added for sorting
}

export const blogPosts: BlogPost[] = [
  {
    id: "ai-product-integration-2025",
    title: "AI Product Integration: Lessons from Building Eat Sip Repeat",
    excerpt: "Key insights from integrating GPT models into a consumer mobile app, including prompt optimization, user feedback loops, and performance considerations.",
    category: "AI/ML",
    readTime: "8 min read",
    publishDate: "2025-01-15"
  },
  {
    id: "product-led-growth-saas",
    title: "Product-Led Growth Strategies for B2B SaaS",
    excerpt: "How we reduced churn by 18% at PARiM through data-driven feature prioritization and user journey optimization.",
    category: "Growth",
    readTime: "6 min read",
    publishDate: "2024-11-22"
  },
  {
    id: "fraud-prevention-marketplace",
    title: "Building Trust: Fraud Prevention in Peer-to-Peer Marketplaces",
    excerpt: "Technical deep-dive into rule-based fraud detection systems and automated dispute resolution workflows that reduced fraud claims by 15%.",
    category: "Security",
    readTime: "7 min read",
    publishDate: "2024-09-10"
  },
  {
    id: "user-research-ai-products",
    title: "User Research for AI-Powered Products: A Framework",
    excerpt: "Practical methodologies for validating AI product concepts, from conducting developer-style interviews to testing function-calling prompts.",
    category: "Research",
    readTime: "5 min read",
    publishDate: "2024-07-18"
  },
  {
    id: "performance-optimization-enterprise",
    title: "Performance Optimization for Enterprise-Scale Applications",
    excerpt: "How smart data caching and query optimization reduced load times by 85% for enterprise schedule views at PARiM.",
    category: "Engineering",
    readTime: "9 min read",
    publishDate: "2024-05-03"
  },
  {
    id: "mobile-product-management",
    title: "Mobile Product Management: From Concept to App Store",
    excerpt: "End-to-end guide to shipping iOS apps, covering SwiftUI development, Firebase integration, and beta testing strategies.",
    category: "Mobile",
    readTime: "6 min read",
    publishDate: "2024-02-14"
  }
];
