# Cursor Workshop - Instructor Guide & Presentation Notes

## Workshop Structure (3-4 hours total)

### Part 1: Overview (1 hour)
- Introduction to Cursor
- Demo from https://illin7809:9999/dev
- Capabilities showcase

### Part 2: Hands-On Lab (2-3 hours)
- Participants actively create and experiment
- No pre-built solutions - learn by doing!

---

## Slide-by-Slide Instructor Notes

### SLIDE 1: Title
"Welcome! Today we'll learn Cursor by actually using it."

### SLIDE 2: Agenda
Walk through the plan - emphasize hands-on nature

### SLIDE 3-15: Overview Section
**Demo from https://illin7809:9999/dev**
- Show live examples
- Navigate through capabilities
- Answer questions
- Keep it interactive!

---

## LAB SECTION - Instructor Guide

### Exercise 1: Interface & Settings (20 min)

**Instructor Demo:**
1. Open Cursor Settings: `Ctrl/⌘ + Shift + J`
2. Show AI model selection
3. Open VS Code Settings: Command Palette → "Preferences: Open Settings"
4. Show the difference between the two

**Participant Activity:**
- "Everyone open both settings panels"
- "Navigate between them"
- "Notice what's different"
- "Open left and right panels"
- "Try opening multiple Cursor instances"

**Walk Around:** Help anyone stuck

---

### Exercise 2: Exploring Modes (30 min)

**Ask Mode Demo:**
```
1. Open any code file
2. Select a function
3. Ctrl/⌘ + K → Ask
4. Type: "Explain what this function does"
5. Show the response
```

**Participant Task:** "Try Ask mode on your own code"

**Agent Mode Demo:**
```
1. Open Chat panel
2. Say: "Create a simple React component with a button"
3. Watch it generate
4. Review the code
5. Accept or modify
```

**Participant Task:** "Create something with Agent mode"

**Plan Mode Demo:**
```
1. Say: "Plan a feature for user authentication"
2. Show the generated plan
3. Modify a step
4. Execute one step
```

**Participant Task:** "Create your own plan"

**Debug Mode:**
- Create a simple bug
- Show how to fix it with AI

---

### Exercise 3: Harmony2 Project (30 min)

**Instructor Demo:**
```bash
# Show the command
npm install -g harmony2@latest

# Create project
npx harmony2@latest create

# Walk through prompts
# Show the generated structure
```

**Everyone Does This:**
- Guide through installation
- Help with any errors
- Show the project structure once created

**Using Cursor with Harmony2:**
```
Demo: "Create a user profile component in this Harmony2 app"
Show: How Cursor understands the structure
Show: Generated component follows patterns
```

---

### Exercise 4: Docs Integration (15 min)

**Instructor Demo:**
```
1. Open Cursor Settings
2. Find "Docs" section
3. Add: https://amdocs-studio.github.io/harmony-2.0
4. Save
5. Test: "How do I create a component in Harmony2?"
6. Show how response uses the docs
```

**Participant Activity:**
- Everyone adds Harmony2 docs
- Test with a question
- See the difference in responses

**Discussion:** "What other docs could you add for your projects?"

---

### Exercise 5: Creating Rules (30 min)

**KEY MESSAGE:** "Don't create rules manually! Ask Cursor to do it!"

**Demo 1 - MUI Rules:**
```
Say to Cursor:
"Create a .cursorrules file for Material-UI development that enforces:
- Import from @mui/material
- Use sx prop for styling
- Theme tokens for colors and spacing
- Accessibility requirements with proper aria labels
- Keyboard navigation support"

Watch Cursor create the file
Review what it generated
```

**Demo 2 - Tailwind Rules:**
```
Say to Cursor:
"Create rules for Tailwind CSS that enforce:
- Utility-first approach
- Mobile-first responsive design
- Use config colors only
- Minimal use of @apply
- Proper responsive breakpoints"

Show the generated rules
```

**Demo 3 - Custom Rules:**
```
Say to Cursor:
"Create rules that enforce:
- All async functions must have try-catch
- Every component needs a test file
- All functions need JSDoc comments
- Use named exports only"

Show how specific rules improve code generation
```

**Participant Activity:**
```
"Now you create rules! Think about:
- What framework are you using?
- What patterns does your team follow?
- What mistakes do you want to prevent?

Ask Cursor to create rules for YOUR needs"
```

**Walk around and help**
**Share interesting rules on screen**

---

### Exercise 6: Personas & Commands (20 min)

**Personas Demo:**
```
Show: "Create a persona called 'Harmony2 Expert' that knows all Harmony2 conventions and best practices"

Then test:
"@harmony2-expert How should I structure a feature module?"

Compare with default response
```

**Commands Demo:**
```
Create custom command:
"/component - Generate a React component with TypeScript, tests, and documentation"

Show how to save and use it
```

**Participant Activity:**
- Create one custom persona
- Create one custom command
- Share with neighbor

---

### Exercise 7: Figma MCP Integration (20 min)

**Important Setup First:**
```
1. Show where to get Figma token:
   - Figma → Settings → Account
   - Personal Access Tokens
   - Create new token

2. Show installation:
   npm install -g @modelcontextprotocol/server-figma

3. Show configuration in Cursor settings:
   Add MCP server configuration
   Add token
```

**Demo the Integration:**
```
"Connect to Figma file: 9dCGGaBPPd9Ix4nlLm5JAA"
"Show me the device gallery design"
"Extract design tokens from this page"
```

**Participant Setup:**
- Everyone gets their Figma token
- Install MCP
- Configure in Cursor
- Connect to the workshop Figma file

---

### Exercise 8: Building Device Gallery (60 min)

**This is the main hands-on project!**

**Phase 1: Analysis (10 min)**
```
Instructor: Open Figma link:
https://www.figma.com/design/9dCGGaBPPd9Ix4nlLm5JAA/Cursor-workshop?node-id=0-1&p=f&t=R77m7GIDo3qaJGEf-0

Everyone: Look at the design
Identify components:
- Device cards
- Gallery grid
- Filter panel
- Search bar
```

**Phase 2: Using Cursor to Build (40 min)**
```
Instructor demonstrates:
"Create a device gallery based on this Figma design with:
- Device card component showing image, name, specs, price
- Gallery grid with responsive layout
- Filter panel for category, brand, price
- Search functionality
- Use Material-UI components"

Participants follow along:
- Use same or similar prompts
- See what Cursor generates
- Modify and refine
- Ask for improvements
```

**Key Teaching Points:**
- Show how to iterate: "Make the cards larger"
- Show how to add features: "Add favorite button"
- Show how to style: "Match the Figma colors exactly"
- Show how to fix: "The layout breaks on mobile"

**Phase 3: Refinement (10 min)**
```
"Add animations when cards appear"
"Make it fully accessible"
"Add loading states"
"Generate tests for the components"
```

**Walk Around:**
- Help stuck participants
- Show interesting variations
- Encourage experimentation

---

## Advanced Features to Mention

### Parallelization
**Live Demo:**
```
"Open 3 chat windows
Agent 1: Create backend API
Agent 2: Create frontend UI  
Agent 3: Create database schema

All work simultaneously!"
```

### YOLO Mode
**Warning Demo:**
```
"Enable YOLO mode"
"Make a big change"
"See how it auto-applies"

**IMPORTANT:** "Use carefully! Great for prototypes, dangerous for production!"
```

### External Files & Commands
**Demo:**
```
"Run npm install"
"Read the file at C:\config\settings.json"
"Execute this PowerShell command"

Show it working
Emphasize security awareness
```

---

## Troubleshooting Common Issues

### "Cursor doesn't understand my project"
**Solution:** Add project docs, provide more context

### "The code is outdated"
**Solution:** Specify versions, update rules

### "Too many changes at once"
**Solution:** Be more specific, break down requests

### "It's not following our patterns"
**Solution:** Create better rules, add examples

---

## Wrap-Up & Q&A (15 min)

### Key Takeaways
1. ✅ Cursor amplifies your capabilities
2. ✅ Always review AI-generated code
3. ✅ Use rules to maintain consistency
4. ✅ Iterate and refine
5. ✅ It's a learning tool, not a replacement

### Action Items for Participants
- [ ] Install Cursor on work machine
- [ ] Set up team rules
- [ ] Add company docs
- [ ] Share learnings with team
- [ ] Start small, build confidence

### 30-Day Challenge
```
Week 1: Use Cursor 1 hour/day - get comfortable
Week 2: Build a small project with Cursor
Week 3: Introduce to one team member
Week 4: Establish team workflows and rules
```

### Resources to Share
- Cursor Docs: https://docs.cursor.com
- Harmony2 Docs: https://amdocs-studio.github.io/harmony-2.0
- Workshop materials: [your link]

---

## Presentation Tips for Instructor

### Before Workshop
- [ ] Test all demos beforehand
- [ ] Have backup recordings if live demo fails
- [ ] Prepare Harmony2 project in advance
- [ ] Get Figma token ready
- [ ] Test Figma MCP integration
- [ ] Have example prompts ready to copy-paste
- [ ] Open all URLs in browser tabs

### During Workshop
- ✅ Keep energy high and interactive
- ✅ Encourage questions throughout
- ✅ Walk around during exercises
- ✅ Share screen for demos
- ✅ Let people experiment
- ✅ Celebrate interesting discoveries
- ✅ Don't rush - let people explore

### If Something Breaks
- Have pre-recorded demos ready
- Use it as teaching moment
- Show how to troubleshoot
- Stay calm and flexible

### Engagement Strategies
- Ask participants to share screens
- Have people explain what they created
- Vote on best use of Cursor
- Pair programming exercises
- Group discussions

---

## Time Management

### If Running Behind
**Skip or shorten:**
- Some persona/command details
- Advanced features section
- Some refinement iterations

**Don't skip:**
- Hands-on exercises
- Device gallery build
- Q&A time

### If Ahead of Schedule
**Add:**
- More device gallery features
- Team discussion on use cases
- Advanced parallelization demo
- Security and privacy discussion
- Enterprise considerations

---

## Follow-Up

### Post-Workshop
- [ ] Share presentation slides
- [ ] Send resource links
- [ ] Create Slack/Teams channel for questions
- [ ] Schedule follow-up session in 2 weeks
- [ ] Collect feedback

### Feedback Questions
1. What was most valuable?
2. What was confusing?
3. What do you want to learn more about?
4. How will you use Cursor?
5. What should we add/change?

---

## Presentation Slide Content Summary

### Must-Have Slides
1. Title & Agenda
2. What is Cursor + Why use it
3. Four Modes (Ask, Agent, Plan, Debug)
4. Agent Parallelization
5. Settings (Cursor vs VS Code)
6. Cursor Docs Integration
7. Rules (with emphasis on letting Cursor create them)
8. Personas & Commands
9. YOLO Mode (with warnings)
10. Harmony2 CLI commands
11. Figma MCP setup steps
12. Device Gallery project overview
13. Best Practices
14. Common Issues & Solutions
15. Resources & Next Steps
16. Q&A

### Slide Design Suggestions
- Use dark theme (developer-friendly)
- Include screenshots/GIFs for demos
- Keep text minimal - you'll explain verbally
- Use code blocks for commands
- Include visual diagrams for concepts
- Add icons for visual interest
- Use consistent color coding

### For PowerPoint
Since you have Cursor.pptx as template:
- Use that template's style
- One concept per slide
- Large, readable fonts
- Plenty of whitespace
- Animated GIFs for dynamic concepts

---

**Remember:** The goal is hands-on learning, not lecture. Keep demos short, exercises long!


