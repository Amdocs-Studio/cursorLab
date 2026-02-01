# Cursor Workshop Presentation Outline
## Condensed Version: 12 Slides

---

## **SLIDE 1: Title Slide**
**Title:** Cursor Workshop: AI-Powered Development
**Subtitle:** Hands-On Lab with Harmony2 & Figma
**Date & Presenter Info**

---

## **SLIDE 2: Agenda**
```
Part 1: Overview (1 hour)
  • Demo: https://illin7809:9999/dev
  • Cursor capabilities showcase

Part 2: Hands-On Lab (2-3 hours)
  • Interface & Modes
  • Harmony2 Project
  • Rules, Docs, Personas
  • Device Gallery with Figma
```

---

## **SLIDE 3: What is Cursor? + Overview**
**Left Column:**
- AI-powered code editor (VS Code fork)
- Native AI integration
- Multiple specialized modes
- VS Code compatible

**Right Column - Key Features:**
- 🤖 4 AI Modes (Ask, Agent, Plan, Debug)
- ⚡ Agent Parallelization
- 📚 Custom Docs Integration
- 🎯 Rules & Personas
- 🎨 Figma MCP Integration

**Visual:** Cursor interface screenshot

---

## **SLIDE 4: The 4 Modes**

**2x2 Grid:**

| **ASK Mode** | **AGENT Mode** |
|--------------|----------------|
| 💬 Questions & explanations | 🤖 Creates & modifies code |
| No code changes | Multi-file editing |
| "Explain this function" | **Can parallelize!** |

| **PLAN Mode** | **DEBUG Mode** |
|---------------|----------------|
| 📋 Strategic planning | 🐛 Fix errors & bugs |
| Step-by-step breakdown | Root cause analysis |
| Execute plan with Agent | One-click fixes |

**Demo:** Live examples of each mode

---

## **SLIDE 5: Settings & Interface**

**Two Settings Systems:**
- **Cursor Settings** (`Ctrl+Shift+J`): AI config, models, privacy
- **VS Code Settings**: Editor, theme, extensions

**Interface Tips:**
- Open left/right panels for Chat + Explorer
- Multiple instances for different projects
- Terminal integration
- External file access & PowerShell

**⚠️ YOLO Mode:** Auto-applies changes (use carefully!)

---

## **SLIDE 6: Customization Trinity**

**1. 📚 Cursor Docs**
- Add custom documentation URLs
- Example: https://amdocs-studio.github.io/harmony-2.0
- AI references docs for better suggestions

**2. 📏 Rules**
- Project coding standards
- **Ask Cursor to create them!** (Don't write manually)
- We'll create: MUI rules, Tailwind rules, custom rules

**3. 👤 Personas & Commands**
- Personas: AI adopts expertise (Security Expert, Senior Dev)
- Commands: Reusable templates (`/review`, `/component`)

---

## **SLIDE 7: Harmony2 Project Setup**

**What is Harmony2?**
- React-Redux boilerplate (Amdocs standard)
- TypeScript, optimized build, testing setup

**Create Project:**
```bash
npm install -g harmony2@latest
npx harmony2@latest create
```

**Structure:**
```
src/
├── components/
├── features/
├── store/
└── App.tsx
```

**Lab Activity:** Everyone creates a Harmony2 project

---

## **SLIDE 8: Lab Exercises Overview**

**Exercise 1:** Interface Tour (20 min)
- Navigate settings, panels, modes

**Exercise 2:** Try All Modes (30 min)
- Ask, Agent, Plan, Debug

**Exercise 3:** Harmony2 + Docs (30 min)
- Create project, add Harmony2 docs to Cursor

**Exercise 4:** Create Rules (30 min)
- MUI rules, Tailwind rules, your custom rules

**Exercise 5:** Device Gallery (60 min)
- Figma MCP integration, build the gallery

---

## **SLIDE 9: Creating Rules (Don't Write Manually!)**

**Ask Cursor to create rules for you:**

**Example 1 - MUI Rules:**
```
"Create .cursorrules for Material-UI:
- Import from @mui/material
- Use sx prop for styling
- Theme tokens for colors/spacing
- Accessibility with aria labels"
```

**Example 2 - Tailwind Rules:**
```
"Create Tailwind rules:
- Utility-first approach
- Mobile-first responsive
- Config colors only
- Minimal @apply"
```

**Your Turn:** Create rules for your team's patterns!

---

## **SLIDE 10: Figma MCP Integration**

**Setup Steps:**
1. Get Figma API token (Settings → Account → Personal Access Tokens)
2. Install: `npm install -g @modelcontextprotocol/server-figma`
3. Configure in Cursor settings
4. Connect to design file

**Figma Workshop File:**
https://www.figma.com/design/9dCGGaBPPd9Ix4nlLm5JAA/Cursor-workshop

**What You Can Do:**
- Extract design tokens
- Generate components from designs
- Auto-match colors and spacing

---

## **SLIDE 11: Device Gallery Project**

**Build with Cursor:**
- 📱 Device cards (image, specs, price)
- 🔍 Search functionality
- 🎛️ Filter panel (category, brand, price)
- 📊 Responsive grid layout

**Process:**
1. Connect to Figma design
2. Ask Cursor to create components
3. Iterate and refine with AI
4. Add features: "Add favorite button", "Add animations"
5. Generate tests

**Time:** 60 minutes of hands-on building

---

## **SLIDE 12: Wrap-Up & Next Steps**

**Key Takeaways:**
- ✅ Cursor amplifies your capabilities
- ✅ Always review AI code
- ✅ Use rules for consistency
- ✅ Start small, build confidence

**30-Day Challenge:**
- Week 1: Use Cursor 1 hour/day
- Week 2: Build a small project
- Week 3: Share with your team
- Week 4: Establish team workflows

**Resources:**
- Cursor Docs: https://docs.cursor.com
- Harmony2: https://amdocs-studio.github.io/harmony-2.0

**Q&A Time! 🙋**

---

## Presentation Notes

### Timing Guide (Total: ~3 hours)
- **Slides 1-2:** Intro (5 min)
- **Slide 3-6:** Overview & Capabilities (30 min with demos from illin7809:9999/dev)
- **Slide 7:** Harmony2 Setup (15 min)
- **Slide 8:** Lab Exercises Intro (5 min)
- **Slide 9:** Rules Creation Demo (15 min)
- **Slide 10:** Figma MCP Setup (20 min)
- **Slide 11:** Device Gallery Project (60 min hands-on)
- **Slide 12:** Wrap-Up & Q&A (15 min)

### Visual Recommendations
- Dark theme with accent colors
- Large, readable fonts (participants need to see!)
- Screenshots/GIFs for dynamic features
- Minimal text per slide
- Code blocks with syntax highlighting
- Icons for visual interest

### Presenter Notes
- **Keep demos SHORT** - most time should be hands-on
- Have pre-recorded backup if live demo fails
- Walk around during exercises
- Encourage experimentation
- Share interesting participant discoveries
- Have all URLs open in browser tabs beforehand

