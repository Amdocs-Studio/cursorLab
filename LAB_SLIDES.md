# Cursor Workshop - Hands-On Lab Presentation
## Lab Exercises Only (Part 2)

> **Note:** Part 1 (Overview) will be presented live from https://illin7809:9999/dev

---

## Hands-On Lab - Welcome!

**What We'll Do:**
- ✋ Get hands-on with Cursor
- 🛠️ Build real projects
- 🧪 Experiment and learn by doing

**Your Lab Journey:**
1. Cursor Basics (Interface & Settings)
2. Harmony2 Project Setup
3. Customization (Docs & Rules)
4. Device Gallery with Figma
5. Advanced Topics (Personas & Commands)

**Time:** 2-3 hours

---

## Cursor Basics - Interface & Settings

### Your First Steps (5 min)

**Your Tasks:**
- [ ] Open Cursor Settings (`Ctrl+Shift+J`)
- [ ] Open VS Code Settings (Command Palette)
- [ ] Notice the differences
- [ ] Open left panel (Explorer)
- [ ] Open right panel (Chat - `Ctrl+L`)
- [ ] Toggle terminal
- [ ] Try opening multiple Cursor instances

**Key Shortcuts:**
- `Ctrl+Shift+J` - Cursor Settings
- `Ctrl+Shift+P` - Command Palette
- `Ctrl+L` - Chat Panel
- `` Ctrl+` `` - Terminal

---

## Harmony2 Setup

### Create Your Project (5 - 15 min)

**Step 1: Install Harmony2**
```bash
npm install -g harmony2@latest
```

**Step 2: Create Project**
```bash
npx harmony2@latest create
```

**Step 3: Explore Structure**
```
src/
├── components/    # UI components
├── features/      # Feature modules
├── store/         # Redux store
└── App.tsx        # Root
```

**Step 4: Start Dev Server**
```bash
npm start
```

---

## Docs Integration

### Add Harmony2 Documentation (5 min)

**Your Task:**
1. Open Cursor Settings (`Ctrl+Shift+J`)
2. Find "Docs" or "Context" section
3. Add: `https://amdocs-studio.github.io/harmony-2.0`
4. Save

**Test It:**
- Ask Cursor: "How do I create a component in Harmony2?"
- Notice how it references the official docs!

**Bonus:** Add other docs (MUI, Tailwind, your company docs)

---

## Creating Rules

### Let Cursor Create Rules for You! (20 min)

**⚠️ IMPORTANT:** Don't create rules files manually!
- **Explain to Cursor what you want**, and it will create the rules for you
- Rules go in `.cursor/rules` directory

**Option 1: Download Pre-Made Rules**
```
Download sample rules from:
https://illin7809:9999/dev

Then add to your project's .cursor/rules folder
```

**Option 2: Let Cursor Create Custom Rules**

**How It Works:**
```
You: "I want to enforce Material-UI best practices in my project"

Cursor: Creates .cursor/rules/mui.md with all the rules
```

**Example 1 - MUI Rules:**
```
"Create rules for Material-UI that enforce:
- Import from @mui/material
- Use sx prop for styling
- Theme tokens for colors/spacing
- Accessibility with aria labels

Put these in .cursor/rules"
```

**Example 2 - Tailwind Rules:**
```
"Create rules for Tailwind CSS that enforce:
- Utility-first approach
- Mobile-first responsive
- Config colors only
- Minimal @apply usage

Put these in .cursor/rules"
```

**Cursor will handle the file creation and formatting!**

---

## Custom Rules

### Your Turn! (10 min)

**Tell Cursor what rules YOU need:**

**Ideas to Explain to Cursor:**
- Error handling: "All async functions need try-catch"
- Testing: "Every component needs a .test file"
- Documentation: "All functions need JSDoc comments"
- Naming: "Use PascalCase for components, camelCase for functions"
- Your team's specific patterns!

**How to Ask Cursor:**
```
"Create rules in .cursor/rules that enforce:
- All async functions must have try-catch blocks
- Every React component needs a corresponding test file
- All functions must have JSDoc comments
- Use PascalCase for components, camelCase for functions"
```

**Then watch Cursor create the rules file for you!**

**Share interesting rules with the group!**

---

## Figma MCP Setup

### MCP Integration (20 min)

**Prerequisites:**
- Get Figma API token (for cloud option)
- OR install Figma Desktop app (for local option)

---

### Option 1: Cloud-Based Figma MCP (Recommended)

**Step 1: Get Figma Token**
- Go to Figma → Settings → Account
- Scroll to "Personal Access Tokens"
- Click "Create new token"
- Copy it!

**Step 2: Configure MCP in Cursor**
- Open Cursor Settings (`Ctrl+Shift+J`)
- Find "MCP" or "Model Context Protocol" section
- Add Figma MCP server configuration:

```json
"Figma": {
  "url": "https://mcp.figma.com/mcp",
  "headers": {
    "User-Agent": "MCP-Client/1.0"
  },
  "env": {
    "HTTP_PROXY": "http://genproxy.corp.amdocs.com:8080/",
    "HTTPS_PROXY": "http://genproxy.corp.amdocs.com:8080/",
    "NO_PROXY": "localhost,127.0.0.1"
  }
}
```

---

### Option 2: Local Figma Desktop App

**Step 1: Install Figma Desktop**
- Download from: https://www.figma.com/downloads/
- Install and sign in to your Figma account
- Keep the Figma app running in the background

**Step 2: Enable MCP in Figma Desktop**
- Open Figma Desktop app
- Go to Settings/Preferences
- Look for "Developer" or "Plugins" section
- Enable MCP server (if available)
- Note: The local server runs on `http://127.0.0.1:3845/mcp`

**Step 3: Configure Cursor**
Add to your MCP configuration:

```json
"Figma Desktop": {
  "url": "http://127.0.0.1:3845/mcp",
  "env": {
    "HTTP_PROXY": "http://genproxy.corp.amdocs.com:8080/",
    "HTTPS_PROXY": "http://genproxy.corp.amdocs.com:8080/",
    "NO_PROXY": "localhost,127.0.0.1"
  }
}
```

**Benefits of Local Option:**
- ✅ Works with locally open Figma files
- ✅ Real-time sync with your Figma canvas
- ✅ Better for active design work

**When to Use:**
- Cloud (Option 1): Accessing any Figma file by URL
- Local (Option 2): Working on files you have open in Figma Desktop

---

### Test Your Connection

**Step 4: Test Connection**
```
In Cursor Chat:

For Cloud MCP:
"Connect to Figma file: 9dCGGaBPPd9Ix4nlLm5JAA"
"Show me the design from this Figma file"

For Figma Desktop:
"Show me the currently open Figma file"
"What components are in my active Figma canvas?"
```

**Troubleshooting:**
- If connection fails, check that Figma Desktop app is running (for local)
- Verify your API token is correct (for cloud)
- Check proxy settings if behind corporate firewall
- Restart Cursor after configuration changes

**Note:** The proxy settings are configured for Amdocs network. Adjust if needed for your environment.

---

## Device Gallery - Part 1: Analyze Design

### Analyze the Design (10 min)

**Figma File:**
https://www.figma.com/design/9dCGGaBPPd9Ix4nlLm5JAA/Cursor-workshop?node-id=0-1

**What We'll Build:**
- 📱 **Device Cards:** Image, name, specs, price, rating
- 🔍 **Search Bar:** Real-time search
- 🎛️ **Filter Panel:** Category, brand, price range
- 📊 **Gallery Grid:** Responsive layout

**Take 5 minutes:**
- Open the Figma link
- Explore the design
- Identify the components

---

## Device Gallery - Part 2: Build with Different Modes

### Try Cursor's 4 Modes (50 min)

**🔹 ASK Mode** - For Questions
```
Select code in your gallery and ask:
"Explain how this component works"
"What are potential edge cases?"
"How can I improve performance?"

Try: "Create a React button component" → Fail! 
(Ask mode doesn't create, only explains)
```

**🔹 PLAN Mode** - For Strategy
```
"Plan how to add user authentication to this gallery"
"Plan performance optimizations for the device gallery"
Review the plan, modify steps, then execute
```

**🔹 AGENT Mode** (Chat Panel) - For Building
```
Phase 1: Generate Components (15 min)
"Create a device gallery based on the Figma design with:
- DeviceCard component (image, name, specs, price)
- Gallery grid with responsive layout
- Use Material-UI components
- Match the Figma colors and spacing"

Phase 2: Add Features (15 min)
"Add search functionality to filter devices by name"
"Add a filter panel for category and price range"
"Add favorite button to each card"
```

**🔹 DEBUG Mode** - For Fixing
```
Introduce a small bug in your gallery
Ask Cursor to identify and fix it
Watch it analyze and suggest solutions
```

**Phase 3: Polish (10 min)**
```
"Add animations when cards appear"
"Make it fully accessible with proper aria labels"
"Generate tests for the components"
```

---

## Device Gallery - Part 3: Iterate & Refine

### Iterate & Refine (10 min)

**Try These:**
- "Make the cards larger on desktop"
- "Add hover effects to the cards"
- "Fix the layout for mobile screens"
- "Add loading skeleton states"
- "Use Tailwind instead of MUI"

**🔥 Advanced:**
- "Enable agent parallelization"
- "Let 3 agents work on different features simultaneously"

**Experiment! Break things! Learn!**

---

## Advanced Topics

### Personas & Commands (15 min - Optional)

**Think About Your Workflow:**
- What tasks do you repeat daily?
- What expertise do you need most often?
- How can you automate your process?

---

### 🎭 Creating Custom Personas

**Example 1: Developer Persona**
```
"Create a persona called 'Senior Developer' that:
- Writes clean, production-ready code
- Follows best practices and design patterns
- Implements features efficiently
- Focuses on functionality and performance
- Documents code clearly"

Then use: @senior-developer "Implement user authentication"
```

**Example 2: Code Reviewer Persona**
```
"Create a persona called 'Code Reviewer' that:
- Reviews code critically for issues
- Checks for bugs, security vulnerabilities, and performance problems
- Ensures best practices are followed
- Suggests improvements and optimizations
- Verifies code quality and maintainability
- Is thorough and detail-oriented"

Then use: @code-reviewer "Review this authentication code"
```

**Other Persona Ideas:**
- **Harmony2 Expert** - for framework-specific questions
- **Security Expert** - for vulnerability checks
- **Performance Optimizer** - for optimization suggestions
- **Test Engineer** - for comprehensive test coverage
- **UX Designer** - for user experience feedback

---

### ⚡ Creating Powerful Commands

**Example: Iterative Dev-Review Loop**

Create a command that automates the development-review cycle:

```
"Create a custom command called '/dev-review-loop' that:

1. Switch to @senior-developer persona
2. Develop the feature based on the request
3. Switch to @code-reviewer persona
4. Review the code thoroughly and provide feedback
5. If issues found:
   - Switch back to @senior-developer
   - Fix the issues
   - Switch back to @code-reviewer
   - Review again
6. Repeat steps 4-5 until no more issues
7. Provide final summary of changes made"

Usage: /dev-review-loop "Create a login form with validation"
```

**How This Works:**
```
User: /dev-review-loop "Create a user registration component"

Cursor:
[Developer] → Creates registration component
[Reviewer] → "Found 3 issues: missing validation, no error handling, accessibility concerns"
[Developer] → Fixes all 3 issues
[Reviewer] → "Found 1 issue: password strength validation needed"
[Developer] → Adds password strength validation
[Reviewer] → "No issues found. Code is production-ready!"
[Summary] → Lists all changes and improvements made
```

**Benefits:**
- 🔄 Automated quality assurance
- 🐛 Catch bugs early
- 📈 Improve code quality iteratively
- ⏱️ Save time on manual reviews
- 🎯 Consistent review standards

---

### 💡 More Practical Commands

**Command: Feature Complete**
```
"/feature-complete - 
1. Implement the feature
2. Add comprehensive tests
3. Write documentation
4. Perform security review
5. Optimize performance
6. Generate changelog entry"
```

**Command: Bug Fix Workflow**
```
"/fix-bug -
1. Analyze the bug
2. Write a test that reproduces it
3. Fix the bug
4. Verify tests pass
5. Check for similar issues
6. Update documentation if needed"
```

**Command: Component Generator**
```
"/component -
1. Create component with TypeScript
2. Add prop types and interfaces
3. Write unit tests
4. Create Storybook story
5. Add JSDoc documentation
6. Follow project rules"
```

---

### 🚀 Your Turn: Create Your Own!

**Think about your daily workflow:**

**Option A: Create Personas**
```
What expertise do you need?
- Domain expert (e.g., "E-commerce Expert", "Healthcare Expert")
- Technology expert (e.g., "React Native Expert", "GraphQL Expert")
- Role-specific (e.g., "Tech Lead", "DevOps Engineer")

Ask Cursor to create them!
```

**Option B: Create Commands**
```
What do you do repeatedly?
- Code review process
- Feature development workflow
- Refactoring patterns
- Documentation generation
- Testing strategies

Automate it with a command!
```

**Challenge:**
```
Create a command that matches YOUR workflow:
1. What steps do you always follow?
2. What personas would help?
3. How can you automate the iteration?

Share your most creative command with the group!
```

---

### 🎯 Real-World Examples

**Command: Full-Stack Feature**
```
"/fullstack -
[@backend-dev] Create API endpoint
[@frontend-dev] Create UI component
[@integration-tester] Test integration
[@security-reviewer] Security review
[@performance-optimizer] Optimize both ends
[@documenter] Write API and component docs"
```

**Command: Production Ready**
```
"/prod-ready -
[@developer] Implement feature
[@test-engineer] Write all test types (unit, integration, e2e)
[@security-expert] Security audit
[@performance-optimizer] Performance review
[@accessibility-expert] A11y compliance check
[@code-reviewer] Final review
Generate deployment checklist"
```

---

### 💡 Pro Tips

**Combine Personas & Commands:**
- Use personas for specialized knowledge
- Use commands for workflow automation
- Chain them together for powerful workflows

**Best Practices:**
- Start simple, add complexity as needed
- Test your commands before sharing with team
- Document what each command does
- Update commands as your process evolves

**Team Collaboration:**
- Share useful personas across your team
- Create team-specific commands
- Build a library of reusable workflows
- Standardize development processes

**Try creating your persona or command now!**

---

## Wrap-Up & Key Takeaways

**What You Learned:**
- ✅ Cursor's 4 modes (Ask, Agent, Plan, Debug)
- ✅ Settings, panels, and interface
- ✅ Creating Harmony2 projects
- ✅ Adding docs for better AI context
- ✅ Creating rules for consistency
- ✅ Figma MCP integration
- ✅ Building real UI with AI assistance
- ✅ Advanced: Personas & custom commands

**Remember:**
- 🔍 Always review AI-generated code
- 🎯 Use rules for consistency
- 🚀 Start small, build confidence
- 🤝 It augments you, doesn't replace you!

---

## Your 30-Day Challenge

**Week 1: Foundation**
- Use Cursor 1 hour/day
- Try all modes daily
- Get comfortable with the interface

**Week 2: Practice**
- Build a small project with Cursor
- Create rules for your workflow
- Experiment with different prompts

**Week 3: Share**
- Show Cursor to one team member
- Share your best tips
- Collect feedback

**Week 4: Establish**
- Create team rules
- Document best practices
- Integrate into workflow

---

## Resources & Next Steps

**📚 Documentation:**
- Cursor: https://docs.cursor.com
- Harmony2: https://amdocs-studio.github.io/harmony-2.0
- Lab materials: [your link]

**💡 Pro Tips:**
- Use `@filename` to reference files
- Select code before asking questions
- Create custom commands for common tasks
- Use Plan mode for complex features

**🎯 Action Items:**
- [ ] Install Cursor on your work machine
- [ ] Set up team rules
- [ ] Add company docs to Cursor
- [ ] Share with your team

**Questions? Let's discuss! 🙋**

---

## Presentation Notes

### Timing Breakdown (Total: ~2.5-3 hours)
- **Welcome:** Intro (3 min)
- **Cursor Basics:** Interface & settings (5 min)
- **Harmony2:** Setup (15 min)
- **Docs Integration:** (5 min)
- **Rules:** MUI, Tailwind, custom (30 min)
- **Figma Setup:** MCP integration (20 min)
- **Device Gallery:** Build with all modes (70 min)
- **Advanced Topics:** Personas & commands (15 min - optional)
- **Wrap-up:** Takeaways & next steps (15 min)

### Presentation Tips
- **Keep slides on screen** while participants work
- **Walk around** during hands-on time
- **Encourage questions** throughout
- **Share screens** of interesting discoveries
- **Don't rush** - let people experiment
- **Have backup demos** ready if something breaks

### Materials Needed
- ✅ All URLs pre-opened in browser tabs
- ✅ Figma tokens prepared
- ✅ Test Harmony2 installation beforehand
- ✅ Have MCP configured and tested
- ✅ Sample prompts ready to copy-paste
- ✅ Backup recordings of key demos

