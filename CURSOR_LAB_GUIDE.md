# Cursor Workshop & Lab Guide

## Workshop Overview
**Duration:** 3-4 hours
- **Part 1:** Overview & Capabilities (1 hour)
- **Part 2:** Hands-on Lab (2-3 hours)

---

## Part 1: Cursor Overview (1 Hour)

### Introduction to Cursor
- **What is Cursor?** AI-powered code editor built on VS Code
- **Key Differentiator:** Native AI integration with multiple modes
- **Company Background:** Built specifically for AI-assisted development

### Core Capabilities
1. **AI Chat Interface**
   - Natural language code generation
   - Context-aware suggestions
   - Codebase understanding

2. **Multiple AI Modes**
   - Ask Mode
   - Agent Mode
   - Plan Mode
   - Debug Mode

3. **Integration Features**
   - VS Code compatibility
   - Extension support
   - Terminal integration
   - External file operations

---

## Part 2: Hands-On Lab

### Section 1: Getting Started with Cursor (30 minutes)

#### 1.1 Interface Tour
**Key Areas to Show:**
- Command Palette: `Ctrl/⌘ + Shift + P`
- Cursor Settings: `Ctrl/⌘ + Shift + J`
- VS Code Settings: Access through Command Palette

**Activity:** Navigate between settings
```
1. Open Command Palette
2. Type "Cursor Settings"
3. Compare with "Preferences: Open Settings (UI)"
4. Show where to toggle features
```

#### 1.2 Panel Management
- **Activity Bar:** Left side (can be configured to horizontal)
- **Side Panels:** Primary (left) and Secondary (right)
- **Command:** `View: Toggle Secondary Sidebar`

**Hands-on Exercise:**
```
1. Open file explorer (left panel)
2. Open Cursor chat (right panel) - Ctrl/⌘ + L
3. Toggle terminal - Ctrl/⌘ + `
4. Split editor view
5. Open multiple Cursor instances for different projects
```

#### 1.3 VS Code vs Cursor Settings
**Key Differences:**
- Cursor Settings: AI-specific configurations
  - Model selection
  - Context settings
  - Privacy controls
  - Agent behavior

- VS Code Settings: Editor configurations
  - Theme
  - Keybindings
  - Extensions
  - Workbench layout

**Demo Configuration:**
```json
// Cursor Settings (.cursorrules or settings)
{
  "cursor.ai.model": "gpt-4",
  "cursor.ai.maxTokens": 4000,
  "cursor.ai.temperature": 0.7
}

// VS Code Settings
{
  "editor.fontSize": 14,
  "workbench.colorTheme": "Dark+",
  "workbench.activityBar.orientation": "vertical"
}
```

---

### Section 2: Understanding Cursor Modes (45 minutes)

#### 2.1 Ask Mode
**Purpose:** Query-based assistance without code changes

**Use Cases:**
- Understanding code
- Documentation lookup
- Architecture questions
- Best practices

**Demo:**
```
1. Select a complex function
2. Press Ctrl/⌘ + K → Ask
3. Ask: "Explain what this function does"
4. Ask: "What are potential edge cases?"
```

**Hands-on Activity:**
```
Students select their own code and ask:
- "How can I optimize this?"
- "What design pattern is this following?"
- "Are there any security concerns?"
```

#### 2.2 Agent Mode
**Purpose:** AI takes actions - generates, modifies, and refactors code

**Key Features:**
- Multi-file editing
- Autonomous task completion
- Context-aware modifications

**Demo Scenario:**
```
Task: "Create a user authentication module with JWT"

Agent will:
1. Create auth.js
2. Create middleware
3. Add dependencies to package.json
4. Create test files
5. Update routes
```

**Parallelization:**
Agents can work on multiple tasks simultaneously:
```
Example: Launch 3 parallel agents:
Agent 1: "Create API endpoints for user management"
Agent 2: "Set up database schema and migrations"
Agent 3: "Create frontend components for user profile"

All agents work concurrently on different parts
```

**Hands-on Exercise:**
```
Task: Create a todo application
1. Start Agent mode
2. Request: "Create a todo app with React frontend and Node backend"
3. Watch as agent creates multiple files
4. Review changes before accepting
```

#### 2.3 Plan Mode
**Purpose:** Strategic planning before implementation

**Workflow:**
1. Describe high-level goal
2. AI generates step-by-step plan
3. Review and modify plan
4. Execute plan with Agent

**Demo:**
```
Goal: "Build a device gallery with filtering and search"

Plan Mode Output:
1. [ ] Set up project structure
2. [ ] Create data model for devices
3. [ ] Implement device card component
4. [ ] Add filtering functionality
5. [ ] Implement search feature
6. [ ] Add responsive layout
7. [ ] Write tests

User can:
- Reorder steps
- Add/remove steps
- Execute individual steps
- Execute all steps
```

**Hands-on Activity:**
```
Students plan their own feature:
1. Enter Plan mode
2. Describe: "Add user authentication with social login"
3. Review generated plan
4. Modify if needed
5. Execute selected steps
```

#### 2.4 Debug Mode
**Purpose:** AI-assisted debugging

**Features:**
- Error analysis
- Fix suggestions
- Root cause identification
- Test generation

**Demo:**
```
1. Introduce a bug (null reference)
2. Enter Debug mode
3. AI identifies issue
4. AI suggests fixes
5. Apply fix with one click
```

---

### Section 3: Advanced Cursor Features (45 minutes)

#### 3.1 Command Execution & External Files
**Capabilities:**
- Run terminal commands from chat
- Execute PowerShell scripts
- Access files outside workspace
- System operations

**Demo - Terminal Commands:**
```
In Cursor Chat:
"Run npm install"
"Create a new directory called 'utils'"
"List all TypeScript files"
"Run the development server"

Cursor executes these directly in terminal
```

**Demo - PowerShell:**
```powershell
# Cursor can run PowerShell commands
"Run this PowerShell script to check Node version"
node --version
npm --version

"Get all JSON files in this directory"
Get-ChildItem -Path . -Filter *.json -Recurse
```

**Demo - External Files:**
```
"Read the file at C:\Users\Documents\config.txt"
"Update the hosts file" (with appropriate permissions)
"Copy files from Downloads folder to project"
```

**Security Note:** Always review before executing system commands!

#### 3.2 YOLO Mode
**What is YOLO Mode?**
- "You Only Look Once" - minimal intervention
- AI makes broader changes with less confirmation
- Faster prototyping
- Use with caution!

**Comparison:**
```
Normal Mode:
- Confirms each file change
- Shows diffs before applying
- Asks for permission
- Safer for production code

YOLO Mode:
- Auto-applies changes
- Minimal confirmations
- Rapid iteration
- Best for prototypes/experiments
```

**Demo:**
```
Task: "Convert this entire app to TypeScript"

Normal Mode: Confirms each of 30 files
YOLO Mode: Converts all files automatically

Result: 10x faster, but review carefully!
```

**When to Use YOLO Mode:**
- Quick prototypes
- Learning/experimentation
- Throwaway code
- Time-sensitive demos

**When NOT to Use:**
- Production code
- Shared repositories
- Critical systems
- When you need to learn the changes

#### 3.3 Cursor Docs Integration
**Purpose:** Add custom documentation for AI context

**Adding Harmony2 Documentation:**
```
1. Open Cursor Settings (Ctrl/⌘ + Shift + J)
2. Navigate to "Docs" or "Context"
3. Add documentation URL:
   https://amdocs-studio.github.io/harmony-2.0

4. Configure scope:
   - Project-wide
   - File-type specific
   - Framework-specific

5. Test integration:
   Ask: "How do I create a new component in Harmony2?"
   AI now references official docs
```

**Benefits:**
- Accurate framework-specific suggestions
- Up-to-date best practices
- Reduced hallucinations
- Company-specific patterns

**Other Documentation Sources:**
```
- Internal API documentation
- Company style guides
- Custom libraries
- Architecture decision records (ADRs)
```

**Hands-on Activity:**
```
1. Add Harmony2 docs to Cursor
2. Add Material-UI docs
3. Add your company's internal docs (if available)
4. Test with framework-specific questions
```

---

### Section 4: Rules & Customization (30 minutes)

#### 4.1 Understanding Rules
**What are Rules?**
- Project-specific guidelines for AI
- Enforces coding standards
- Customizes AI behavior
- Improves consistency

**Types of Rules:**
1. **Code Style Rules**
2. **Framework Rules**
3. **Architecture Rules**
4. **Security Rules**
5. **Business Logic Rules**

#### 4.2 Creating Rules (The Right Way)
**DON'T:** Manually create `.cursorrules` file
**DO:** Ask Cursor to create rules for you!

**Demo - Creating Rules with AI:**
```
Request to Cursor:
"Create a rule that enforces the following:
1. Always use functional components in React
2. Use arrow functions for component definition
3. PropTypes are required for all components
4. Use named exports instead of default exports"

Cursor generates:
{
  "rules": {
    "react": {
      "componentStyle": "functional",
      "functionType": "arrow",
      "requirePropTypes": true,
      "exportStyle": "named"
    }
  }
}
```

#### 4.3 Material-UI (MUI) Rules
**Hands-on Activity:**
```
Ask Cursor:
"Create rules for working with Material-UI that include:
1. Always import from @mui/material
2. Use sx prop instead of makeStyles
3. Follow Material Design 3 principles
4. Use theme tokens for colors and spacing
5. Ensure accessibility (aria labels, keyboard navigation)"

Expected Output:
```

```javascript
// .cursorrules
{
  "mui": {
    "importSource": "@mui/material",
    "stylingApproach": "sx",
    "designVersion": "MD3",
    "themeUsage": "required",
    "accessibility": {
      "ariaLabels": "required",
      "keyboardNav": "required",
      "colorContrast": "WCAG-AA"
    },
    "guidelines": [
      "Use sx prop for styling instead of makeStyles or styled-components",
      "Always destructure components from @mui/material",
      "Use theme.spacing() for consistent spacing",
      "Implement proper focus management",
      "Use semantic HTML elements"
    ]
  }
}
```

#### 4.4 Tailwind CSS Rules
**Hands-on Activity:**
```
Ask Cursor:
"Create rules for Tailwind CSS development:
1. Use utility classes over custom CSS
2. Follow mobile-first approach
3. Use consistent color palette from config
4. Apply proper responsive breakpoints
5. Use @apply only for component patterns"
```

**Expected Output:**
```javascript
// .cursorrules
{
  "tailwind": {
    "approach": "utility-first",
    "responsive": "mobile-first",
    "colorSource": "config",
    "breakpoints": {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px"
    },
    "guidelines": [
      "Always use utility classes instead of custom CSS",
      "Start with mobile layout, then use sm:, md:, lg: for larger screens",
      "Reference colors from tailwind.config.js only",
      "Use @apply sparingly, only for repeated component patterns",
      "Group related utilities: layout, spacing, typography, colors",
      "Use arbitrary values [value] as last resort"
    ],
    "patterns": {
      "layout": "flex lg:grid patterns",
      "spacing": "p-4 md:p-6 lg:p-8 progression",
      "typography": "text-sm md:text-base lg:text-lg"
    }
  }
}
```

#### 4.5 Custom Developer Rules
**Interactive Activity:**
Ask students what rules they want:

**Common Examples:**
```javascript
// Error Handling Rules
"Create rule: All async functions must have try-catch blocks"

// Testing Rules
"Create rule: Every component needs a corresponding test file"

// Documentation Rules
"Create rule: All functions must have JSDoc comments"

// Performance Rules
"Create rule: Images must use lazy loading and next/image optimization"

// Security Rules
"Create rule: Never log sensitive data, always sanitize user input"

// Naming Conventions
"Create rule: Use PascalCase for components, camelCase for functions, UPPER_CASE for constants"
```

**Group Activity:**
```
1. Break into small groups
2. Each group identifies 3-5 rules for their project type
3. Use Cursor to create these rules
4. Share with the class
5. Discuss which rules are most valuable
```

---

### Section 5: Personas & Commands (20 minutes)

#### 5.1 Personas
**What are Personas?**
- AI adopts specific expertise or role
- Tailored responses based on context
- Improves relevance of suggestions

**Built-in Personas:**
- Senior Developer
- Code Reviewer
- Security Expert
- Performance Optimizer
- Documentation Writer
- Test Engineer

**Demo - Using Personas:**
```
Default AI:
"How should I structure this component?"
→ Generic component structure

With "Senior React Developer" Persona:
"How should I structure this component?"
→ Advanced patterns, hooks best practices, performance considerations

With "Security Expert" Persona:
"Review this authentication code"
→ Security vulnerabilities, XSS concerns, token handling

With "Performance Optimizer" Persona:
"Review this data fetching logic"
→ Caching strategies, memoization, lazy loading
```

**Creating Custom Personas:**
```
Ask Cursor:
"Create a persona called 'Harmony2 Expert' that:
- Knows Harmony2 conventions deeply
- Suggests Harmony2-specific patterns
- References Harmony2 documentation
- Follows Amdocs best practices"

Save this persona for reuse
```

**Hands-on Activity:**
```
Students create their own persona:
1. Identify domain expertise needed
2. Define persona characteristics
3. Create persona in Cursor
4. Test with domain-specific questions
```

#### 5.2 Commands
**What are Commands?**
- Reusable prompt templates
- Keyboard shortcuts for common tasks
- Streamline repetitive requests

**Built-in Commands:**
- `/edit` - Make changes to selected code
- `/explain` - Explain selected code
- `/fix` - Fix errors in code
- `/test` - Generate tests
- `/doc` - Generate documentation

**Creating Custom Commands:**
```
Example 1: Code Review Command
Name: /review
Template: "Review this code for:
- Best practices
- Performance issues
- Security concerns
- Readability
Provide specific suggestions with examples."

Example 2: Component Generator
Name: /component
Template: "Create a React component named [NAME] with:
- TypeScript
- Proper prop types
- JSDoc comments
- Basic tests
- Storybook story"

Example 3: API Endpoint
Name: /api
Template: "Create an Express API endpoint:
- Route: [ROUTE]
- Method: [METHOD]
- Validation middleware
- Error handling
- OpenAPI documentation"
```

**Hands-on Activity:**
```
Create 3 custom commands for your workflow:
1. Something you do daily
2. A complex repetitive task
3. A project-specific pattern

Test each command
Share useful ones with the group
```

---

### Section 6: Project Creation with Harmony2 (30 minutes)

#### 6.1 Harmony2 Overview
**What is Harmony2?**
- React-Redux boilerplate
- TypeScript support
- Optimized build system
- Amdocs standard framework

**Key Features:**
- Smart bundling
- Hot reloading
- Redux Toolkit integration
- Testing setup
- i18n support

#### 6.2 Creating a Harmony2 Project
**Step-by-Step Demo:**

**Step 1: Install Harmony2 CLI**
```bash
npm install -g harmony2@latest
```

**Step 2: Create Project**
```bash
# Interactive mode
harmony2 create

# Or with npx
npx harmony2@latest create

# Project name: cursor-workshop-app
# Template: typescript-redux
# Features: routing, testing, i18n
```

**Step 3: Project Structure Tour**
```
cursor-workshop-app/
├── src/
│   ├── components/
│   ├── features/
│   ├── store/
│   ├── pages/
│   ├── utils/
│   └── App.tsx
├── public/
├── tests/
├── harmony.config.js
├── package.json
└── tsconfig.json
```

**Step 4: Start Development**
```bash
cd cursor-workshop-app
npm install
npm start
```

#### 6.3 Using Cursor with Harmony2
**Activity: Build a Feature**

**Scenario:** Add a user profile feature

**Using Agent Mode:**
```
Request:
"Create a user profile feature in this Harmony2 app:
1. Profile component with avatar, name, bio
2. Redux slice for user data
3. API integration
4. Route in router
5. Tests for component and slice"

Watch Cursor:
- Creates UserProfile component
- Generates Redux slice with actions/reducers
- Sets up API calls
- Adds route
- Creates test files
- All following Harmony2 conventions!
```

**Benefits of Cursor + Harmony2:**
- AI understands Harmony2 structure
- Follows established patterns
- Consistent code style
- Faster development

---

### Section 7: Figma Integration & Device Gallery (45 minutes)

#### 7.1 Understanding MCP (Model Context Protocol)
**What is MCP?**
- Protocol for connecting AI to external data sources
- Figma MCP: Bridge between Figma and Cursor
- Real-time design data access

**How it Works:**
```
Figma Design → MCP Server → Cursor AI → Generated Code
```

#### 7.2 Setting Up Figma MCP

**Prerequisites:**
- Figma account
- Figma API token
- MCP plugin installed in Cursor

**Installation Steps:**
```bash
# Install Figma MCP package
npm install -g @modelcontextprotocol/server-figma

# Configure in Cursor settings
# Add to MCP configuration:
{
  "mcpServers": {
    "figma": {
      "command": "figma-mcp",
      "args": [],
      "env": {
        "FIGMA_ACCESS_TOKEN": "your-token-here"
      }
    }
  }
}
```

**Getting Figma Token:**
```
1. Go to Figma → Settings → Account
2. Scroll to "Personal Access Tokens"
3. Click "Create new token"
4. Copy token to Cursor settings
```

#### 7.3 Building the Device Gallery

**Design Reference:**
Figma Link: https://www.figma.com/design/9dCGGaBPPd9Ix4nlLm5JAA/Cursor-workshop?node-id=0-1&p=f&t=R77m7GIDo3qaJGEf-0

**Design Analysis:**
```
Components to Build:
1. Device Card
   - Device image
   - Name/model
   - Specifications
   - Price/availability

2. Gallery Grid
   - Responsive layout
   - Filtering options
   - Search functionality
   - Sorting

3. Filter Panel
   - Category filters
   - Price range
   - Brand selection
   - Specs filters

4. Search Bar
   - Real-time search
   - Suggestions
   - Clear button
```

#### 7.4 Hands-on: Build Device Gallery

**Phase 1: Extract Design from Figma**
```
In Cursor with Figma MCP:
"Connect to Figma file: 9dCGGaBPPd9Ix4nlLm5JAA"
"Extract all device card components"
"Show me the design tokens (colors, spacing, typography)"
```

**Phase 2: Generate Component Structure**
```
Using Agent Mode:
"Create a device gallery application based on the Figma design:

Structure:
- DeviceCard component
- DeviceGallery container
- FilterPanel component
- SearchBar component
- Use the exact colors and spacing from Figma
- Implement responsive layout
- Add filtering and search functionality"

Cursor will:
1. Analyze Figma design
2. Extract design tokens
3. Create component files
4. Implement layout
5. Add interactivity
```

**Phase 3: Implement with Material-UI**
```
"Rebuild the device gallery using Material-UI:
- Use MUI Card for device cards
- Use Grid for layout
- Use TextField for search
- Use Chip for filters
- Apply theme matching Figma colors"
```

**Phase 4: Add Functionality**
```javascript
// Cursor generates:

// DeviceCard.tsx
import { Card, CardMedia, CardContent, Typography, Chip } from '@mui/material';

interface Device {
  id: string;
  name: string;
  image: string;
  specs: string[];
  price: number;
  category: string;
}

export const DeviceCard: React.FC<{ device: Device }> = ({ device }) => {
  return (
    <Card sx={{ maxWidth: 345, height: '100%' }}>
      <CardMedia
        component="img"
        height="200"
        image={device.image}
        alt={device.name}
      />
      <CardContent>
        <Typography variant="h6">{device.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {device.specs.join(' • ')}
        </Typography>
        <Chip label={device.category} size="small" />
        <Typography variant="h6" color="primary">
          ${device.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

// DeviceGallery.tsx
import { useState } from 'react';
import { Grid, Container } from '@mui/material';
import { DeviceCard } from './DeviceCard';
import { FilterPanel } from './FilterPanel';
import { SearchBar } from './SearchBar';

export const DeviceGallery = () => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [filteredDevices, setFilteredDevices] = useState<Device[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({});

  // AI generates filtering logic
  const handleSearch = (term: string) => {
    // Implementation
  };

  const handleFilter = (newFilters: any) => {
    // Implementation
  };

  return (
    <Container>
      <SearchBar onSearch={handleSearch} />
      <FilterPanel onFilter={handleFilter} />
      <Grid container spacing={3}>
        {filteredDevices.map(device => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={device.id}>
            <DeviceCard device={device} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
```

**Phase 5: Styling to Match Figma**
```
"Apply the exact styles from Figma:
- Use the color palette: [extracted from Figma]
- Apply spacing: [extracted from Figma]
- Use typography: [extracted from Figma]
- Implement hover effects from Figma
- Add transitions and animations"
```

**Phase 6: Alternative - Tailwind Version**
```
"Rebuild the same gallery using Tailwind CSS instead of MUI"

Cursor generates Tailwind version with:
- Utility classes matching design
- Responsive breakpoints
- Custom colors from Figma
- Interactive states
```

#### 7.5 Testing the Gallery
```
Using Cursor:
"Generate tests for the device gallery:
- Unit tests for components
- Integration tests for filtering
- E2E tests for user flows
- Visual regression tests"

"Run all tests and fix any issues"
```

#### 7.6 Refinement and Polish
```
Interactive with Cursor:
"Make the gallery more performant:
- Add lazy loading for images
- Implement virtual scrolling
- Add skeleton loaders
- Optimize bundle size"

"Improve accessibility:
- Add ARIA labels
- Ensure keyboard navigation
- Add focus indicators
- Test with screen readers"

"Add animations:
- Smooth transitions
- Fade-in on scroll
- Hover effects
- Loading states"
```

---

## Additional Topics & Tips

### Best Practices
1. **Always Review AI Changes**
   - Don't blindly accept
   - Understand the code
   - Check for security issues

2. **Use Specific Prompts**
   - Bad: "Make it better"
   - Good: "Optimize this function for O(n) time complexity"

3. **Leverage Context**
   - Reference specific files
   - Mention related code
   - Provide examples

4. **Iterative Development**
   - Start simple
   - Refine incrementally
   - Test frequently

### Troubleshooting Common Issues
```
Issue: AI doesn't understand project structure
Solution: Add project documentation to Cursor Docs

Issue: AI generates outdated code
Solution: Specify versions and update docs references

Issue: AI makes too many changes in YOLO mode
Solution: Switch back to normal mode, be more specific

Issue: Performance slow with large codebase
Solution: Limit context, focus on specific files/folders
```

### Advanced Techniques
1. **Multi-Agent Workflows**
   - Agent 1: Backend API
   - Agent 2: Frontend UI
   - Agent 3: Tests
   - Agent 4: Documentation

2. **Template Creation**
   - Save common patterns as templates
   - Create component generators
   - Build project scaffolds

3. **Integration with CI/CD**
   - Auto-generated tests
   - Pre-commit hooks
   - Automated reviews

---

## Lab Exercises Summary

### Exercise 1: Setup & Configuration (20 min)
- Install Cursor
- Configure settings
- Import VS Code config
- Set up panels and layout

### Exercise 2: Mode Exploration (30 min)
- Try each mode (Ask, Agent, Plan, Debug)
- Complete one task in each mode
- Compare results

### Exercise 3: Rules Creation (30 min)
- Create MUI rules
- Create Tailwind rules
- Create 2 custom rules
- Test rules with code generation

### Exercise 4: Harmony2 Project (45 min)
- Create new Harmony2 project
- Add a feature using Agent mode
- Implement tests
- Run and verify

### Exercise 5: Device Gallery (60 min)
- Set up Figma MCP
- Extract design from Figma
- Build device gallery
- Implement filtering and search
- Style to match design exactly
- Add tests

---

## Resources

### Documentation
- Cursor Docs: https://docs.cursor.com
- Harmony2 Docs: https://amdocs-studio.github.io/harmony-2.0
- Figma API: https://www.figma.com/developers/api

### Community
- Cursor Discord
- Cursor Forum
- Stack Overflow #cursor

### Further Learning
- Advanced prompt engineering
- Custom MCP servers
- Cursor extensions development
- AI-assisted code review workflows

---

## Feedback & Questions

**Workshop Feedback:**
- What worked well?
- What was confusing?
- What would you like to learn more about?
- How will you use Cursor in your projects?

**Q&A Session:**
Open floor for questions and discussion

---

## Next Steps

**Action Items:**
1. Install Cursor on your machine
2. Set up your first project with Cursor
3. Create custom rules for your team
4. Integrate Figma (if applicable)
5. Share learnings with your team

**30-Day Challenge:**
- Week 1: Use Cursor for 1 hour daily
- Week 2: Create a small project entirely with Cursor
- Week 3: Introduce Cursor to your team
- Week 4: Establish team rules and workflows

---

**End of Lab Guide**

Good luck with your Cursor journey! 🚀


