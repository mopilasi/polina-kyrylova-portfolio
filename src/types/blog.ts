import { title } from "process";

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
    title: "Building my first mobile product",
    date: "2025-05-20",
    readTime: "2 min read",
    category: "Vibe-coding",
    excerpt:
      "How AI is transforming the way we build – key takeaways from my journey vibe-coding a production ready app in less than in month.",
    content: `## My journey to vibe-coding

> That's what happens when you stare at a blank screen, fire off prompts, and watch an app assemble itself like IKEA furniture.

After years of juggling roadmaps, launch checklists, and enough Jira tickets to wallpaper a house, I finally jumped the build-vs-buy fence and decided to **build**.

Spoiler: I had zero coding experience and yet I'd spent 10+ years writing specs that made engineers ask "Wait, what?". Turns out that was phenomenal training.

### Here's what I did

1. **ChatGPT + Windsurf + blank Xcode project = ❤️**  
2. Translated my product vision into bite-sized prompts.  
3. Iterated, debugged, and repeatedly asked ChatGPT, "How do I do that?"  
4. Walked away with a production-ready app in just a few weeks (still can't believe it).

---

## Key takeaways

- **Prompting is your new MVP:** Turn business goals into clear, actionable prompts.  
- **AI amplifies, not replaces:** Your domain expertise still matters, it just speaks a different dialect.  
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
    readTime: "4 min read",
    category: "This Build Failed",
    excerpt:
      "A concise guide to diagnosing and resolving the most common Xcode compiler errors.",
    content: `## 👾 "This Build Failed"  
(and what I learned from my journey to a compiler-error purgatory)

**TL;DR**
  - **Why PMs should learn to debug**
  - **Common side-project pitfalls:** skipping structure and stashing chaos
  - **How to apply product thinking to debugging**

After kicking off my side project with Windsurf, the fun died when I opened Xcode one morning and saw *red everywhere*. Not because I'd lost interest, but because compiler errors can feel like hieroglyphics. As a PM, I'm *not* supposed to know what all those messages mean, right? Wrong. Even if you never ship production code, understanding errors is a superpower.

---

## How I got back to a clean build (and my sanity)

1. **Zoom out**  
   I spent an hour "fixing" individual errors before realizing the root cause was a name collision across two similarly-named files.  
   _Takeaway_: Search the whole project first, don't play Whack-a-Mole.

2. **Rebuild in tiny steps**  
   Deleting half my imports felt cathartic until I forgot what I removed. I created a scratch branch, deleted one suspect file, hit ⌘+B, and repeated.  
   _Takeaway_: Incremental changes > heroic refactors.

3. **Let the compiler speak human**  
   Swift errors are often cryptic, but file & line numbers are gold. I pasted the message verbatim into ChatGPT and uncovered patterns in minutes.  
   _Takeaway_: Treat error logs as user stories, not hieroglyphics.

4. **Break up massive expressions**  
   A 100-line \`VStack\` was making the compiler sweat. Splitting it into smaller sub-views shaved 20 seconds off build time and banished the "type-check" monster.  
   _Takeaway_: If you can't grok it in one scroll, the compiler can't either.

5. **Version control is everything!**  
   \`git reflog\` rescued a commit I thought was lost to the void. Rolling back first, then replaying only the refactor I needed, kept both history and my heart rate in check.  
   _Takeaway_: Commit early, commit often, your future self will thank you.

---

You don't need to become an engineer to build things, but you *do* need to get comfortable breaking things and learning from the mess. Debugging has become a weirdly empowering ritual - frustrating, sure, but what growth ever was easy?

If your side project is throwing errors, I hope this guide helps you push through.`,
  },
  {
    id: "ai-pm-journey",
    title: "A relatable tale of humans, roadmaps and helpful robots",
    date: "2025-03-10",
    readTime: "6 min read",
    category: "The Future-Forward PM",
    excerpt:
      "Jira still exists, but now it has an extremely chatty twin who writes half your tickets for you.",
    content: `### TL;DR  
Jira still exists, but now it has an extremely chatty twin who writes half your tickets for you.

---

## Scene 1: "Build vs. Buy vs. Beg the robot"

About six months ago I moved to the US and started looking for a new career opportunity. I walked straight into a PM talent Olympics — competing against other PMs with network lists longer than the Bay Bridge and experience building AI products. I come from a B2B SaaS background, and despite my long-standing interest in AI, I'd never actually built anything.  

Instead of letting it overwhelm me, I decided to do something productive: I asked an LLM to help prototype a side project I actually needed.

**Result?** My AI teammate produced a SwiftUI view while I was still drafting acceptance criteria, leaving me to wonder if I'd just witnessed sorcery or an exceptionally efficient internship program.

---

## Scene 2: Instant Mixpanel insights

I did spend days building dashboards in Mixpanel. Now I just export the dashboard JSON and paste it into an AI helper, and it:

1. Spots weird spikes in sessions before I notice them  
2. Suggests which user segments to dig into (“Maybe new sign-ups are dropping after onboarding.”)  
3. Writes me a quick summary email to stakeholders  

All of a sudden, digging into product metrics feels more like a chat than a chore.

---

## Scene 3: Figma + prompts = mini design coach

I build all my screens solo in Figma, then I copy a screenshot and ask ChatGPT for little fixes:

- “Button text is confusing - try ‘Save to Menu’.”  
- “Contrast is low - use *whatevercolor* for better readability.”  
- “Shift that hero image 8 px right so it lines up.”  

I still do the big design decisions, but AI saves me from pixel-tweaking every little thing.

---

## Why this matters for PMs

- You get instant, data-backed insights without wrestling SQL or endless dashboards  
- Prototypes and UI tweaks happen in minutes, not weeks  
- You spend your time on strategy and user needs, not busywork  
- Small improvements (copy, contrast, layout) add up to a much better product  
- Iteration speed goes through the roof - you stay ahead of problems, not behind them  

---

## How to become best friends with your AI

1. Treat it like a junior PM with superpowers: great first drafts, but needs your guidance.  
2. You’re still editor-in-chief: vet every suggestion before it goes live.  
3. Feed it real user feedback - garbage in, garbage out.  
4. Keep a sense of humor: my AI once suggested a “Spaghetti Bolognese NFT.” Go figure!

---

## My 2026 prediction (because every PM loves a roadmap)

- **Prompt libraries replace template PRDs.** Teams version-control their best prompts the way they used to hoard style guides.     
- **"Explain this dashboard"** becomes a voice command (and nobody misses the weekly data-drama meeting).   
- **User research goes continuous:** AI clusters qualitative feedback overnight; you wake up to prioritized pain points with emoji summaries.  
- **PMs graduate** from "prioritize and ship" to "coach the AI, curate the experience, and keep humans delighted."  

---

## Parting thought

If you can juggle a sprint retro, a surprise exec demo, and a hyperactive dog (Vizsla owners, unite!), you can absolutely co-pilot with AI.  
It won't steal your job; it will just return your evenings, so you can finally ship that side project and cook dinner without DoorDash guilt.

Now, if you'll excuse me, I have a robot waiting to argue about button copy.`,
  },
];
