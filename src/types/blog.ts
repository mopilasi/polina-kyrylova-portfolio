export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "building-my-first-mobile-product",
    title: "Building My First Mobile Product",
    date: "2025-05-20",
    readTime: "5 min read",
    category: "Vibe-coding",
    excerpt:
      "How AI is transforming the way we build – key takeaways from my journey vibe-coding a production ready app in less than in month.",
    content: `## My Journey to Vibe-Coding

> That's what happens when you stare at a blank screen, fire off prompts, and watch an app assemble itself like IKEA furniture.

After years of juggling roadmaps, launch checklists, and enough Jira tickets to wallpaper a house, I finally jumped the build-vs-buy fence and decided to **build**.

Spoiler: I had zero coding experience—and yet I'd spent 10+ years writing specs that made engineers ask, "Wait, what?" Turns out that was phenomenal training.

### Here's What I Did

1. **ChatGPT + Windsurf + blank Xcode project = ❤️**  
2. Translated my product vision into bite-sized prompts.  
3. Iterated, debugged, and repeatedly asked ChatGPT, "How do I do that?"  
4. Walked away with a production-ready app in just a few weeks (still can't believe it).

---

## Key Takeaways

- **Prompting is your new MVP:** Turn business goals into clear, actionable prompts.  
- **AI amplifies, not replaces:** Your domain expertise still matters—it just speaks a different dialect.  
- **Product thinking never goes out of style:** Good prompts are user stories in disguise.

---

> **Moral of the story:**  
> If you can manage a Gantt chart, you can ship software in 2025.  
> All you need is relentless curiosity, a sense of humor, and the courage to ask an LLM one more "dumb" question.`,
  },

  {
    id: "compiler-errors",
    title: "Winning a battle against your compiler errors",
    date: "2025-04-15",
    readTime: "7 min read",
    category: "This Build Failed",
    excerpt:
      "A concise guide to diagnosing and resolving the most common Xcode compiler errors.",
  },
  {
    id: "future-forward-pm",
    title: "A Relatable Tale of Humans, Roadmaps and Helpful Robots",
    date: "2025-03-10",
    readTime: "6 min read",
    category: "The Future-Forward PM",
    excerpt:
      "Jira still exists, but now it has an extremely chatty twin who writes half your tickets for you.",
  },
];
