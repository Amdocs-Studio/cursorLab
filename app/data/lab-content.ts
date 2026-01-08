export interface Task {
  id: string
  label: string
}

export interface ContentBlock {
  type: 'text' | 'list' | 'code' | 'callout' | 'steps'
  value?: string
  language?: string
  title?: string
  variant?: 'info' | 'warning' | 'success'
  items?: string[]
  steps?: Array<{
    title: string
    description?: string
    code?: string
    language?: string
  }>
}

export interface LabSection {
  id: string
  title: string
  subtitle?: string
  duration: string
  tasks?: Task[]
  content: ContentBlock[]
}

export const labSections: LabSection[] = [
  {
    id: 'welcome',
    title: 'Welcome to Cursor Workshop!',
    subtitle: 'Hands-On Lab',
    duration: '5 min',
    content: [
      {
        type: 'text',
        value: '<p>Today you\'ll learn Cursor by actually using it!</p>'
      },
      {
        type: 'text',
        value: '<h3>What We\'ll Do:</h3>'
      },
      {
        type: 'list',
        items: [
          '✋ Get hands-on with Cursor',
          '🛠️ Build real projects',
          '🧪 Experiment and learn by doing'
        ]
      },
      {
        type: 'text',
        value: '<h3>Your Lab Journey:</h3>'
      },
      {
        type: 'list',
        items: [
          'Cursor Basics (Interface & Settings)',
          'Harmony2 Project Setup',
          'Customization (Docs & Rules)',
          'Device Gallery with Figma',
          'Advanced Topics (Personas & Commands)'
        ]
      },
    ]
  },
  {
    id: 'skip-to-advanced',
    title: 'Already Familiar with Cursor?',
    subtitle: 'Fast Track Option',
    duration: '2 min',
    content: [
      {
        type: 'callout',
        variant: 'warning',
        title: '⚡ For Advanced Users',
        value: 'Think you already know this stuff? We recommend spending 10 minutes reviewing the basics anyway - you might be surprised by what you learn!'
      },
      {
        type: 'text',
        value: '<h3>But if the lab feels too simple...</h3>'
      },
      {
        type: 'text',
        value: '<p>You can jump directly to the advanced sections where you\'ll tackle more complex challenges:</p>'
      },
      {
        type: 'list',
        items: [
          '🎭 <strong>Advanced Topics</strong>: Create custom personas, slash commands, and workflows',
          '🚀 <strong>Super Advanced</strong>: Build and deploy your own MCP server, create custom integrations, push the limits'
        ]
      },
      {
        type: 'callout',
        variant: 'success',
        title: '💡 Quick Tip',
        value: 'Even if you skip ahead, bookmark this lab - the Device Gallery section has great Figma MCP examples you can reference later!'
      },
      {
        type: 'text',
        value: '<p><strong>Ready to jump ahead?</strong> Use the sidebar on the left to navigate to "Advanced Topics" and then "Super Advanced Challenge".</p>'
      }
    ]
  },
  {
    id: 'basics',
    title: 'Cursor Basics',
    subtitle: 'Interface & Settings',
    duration: '5 min',
    tasks: [
      { id: 'task-1-1', label: 'Open Cursor Settings (Ctrl+Shift+J)' },
      { id: 'task-1-2', label: 'Open VS Code Settings (Command Palette)' },
      { id: 'task-1-3', label: 'Notice the differences' },
      { id: 'task-1-4', label: 'Open left panel (Explorer)' },
      { id: 'task-1-5', label: 'Open right panel (Chat - Ctrl+L)' },
      { id: 'task-1-6', label: 'Toggle terminal' },
      { id: 'task-1-7', label: 'Try opening multiple Cursor instances' },
    ],
    content: [
      {
        type: 'text',
        value: '<h3>Key Shortcuts:</h3>'
      },
      {
        type: 'list',
        items: [
          'Ctrl+Shift+J - Cursor Settings',
          'Ctrl+Shift+P - Command Palette',
          'Ctrl+L - Chat Panel',
          'Ctrl+` - Terminal'
        ]
      },
    ]
  },
  {
    id: 'context-tagging',
    title: 'Context & Tagging',
    subtitle: 'Give Cursor the Right Information',
    duration: '10 min',
    tasks: [
      { id: 'task-context-1', label: 'Try using @ to tag a file' },
      { id: 'task-context-2', label: 'Select code and "Add to Chat"' },
      { id: 'task-context-3', label: 'Copy console error and add to chat' },
      { id: 'task-context-4', label: 'Tag @Browser and ask a question' },
      { id: 'task-context-5', label: 'Open Browser tab in Cursor' },
    ],
    content: [
      {
        type: 'text',
        value: '<h3>📎 Tagging Files with @</h3>'
      },
      {
        type: 'text',
        value: '<p>Use <code>@</code> in chat to tag specific files and give Cursor context:</p>'
      },
      {
        type: 'list',
        items: [
          'Type <code>@</code> in chat to see available files',
          'Start typing filename to filter',
          'Select file(s) to include in conversation',
          'Cursor will read and understand the file content'
        ]
      },
      {
        type: 'code',
        title: 'Example',
        language: 'text',
        value: `"@App.tsx - Review this component for performance issues"`
      },
      {
        type: 'text',
        value: '<h3>✂️ Select Code & "Add to Chat"</h3>'
      },
      {
        type: 'text',
        value: '<p>Give Cursor specific code context:</p>'
      },
      {
        type: 'list',
        items: [
          'Select any code in your editor',
          'Right-click → "Add to Chat" (or use keyboard shortcut)',
          'The selected code is automatically included in the chat',
          'Ask questions specifically about that code'
        ]
      },
      {
        type: 'callout',
        variant: 'info',
        title: '💡 Pro Tip: Console Errors',
        value: 'Copy console errors or terminal output and paste into chat! Cursor can analyze errors and suggest fixes.'
      },
      {
        type: 'text',
        value: '<h3>🌐 Tag @Browser for Visual Context</h3>'
      },
      {
        type: 'text',
        value: '<p>Give Cursor visual context of your running app:</p>'
      },
      {
        type: 'list',
        items: [
          'Type <code>@Browser</code> in chat',
          'Cursor takes a screenshot of your app',
          'Ask about UI issues, layout problems, styling',
          'Example: "@Browser - Why is the header overlapping the content?"'
        ]
      },
      {
        type: 'text',
        value: '<h3>🔍 Open Browser Tab in Cursor</h3>'
      },
      {
        type: 'text',
        value: '<p>Interact with your app directly from Cursor:</p>'
      },
      {
        type: 'list',
        items: [
          'Open Browser tab in Cursor (look for Browser icon)',
          'Navigate to your running app (e.g., localhost:3000)',
          'Click "Select Element" to inspect specific UI elements',
          'Selected elements get added to chat automatically',
          'Great for debugging layout, styling, or functionality issues'
        ]
      },
      {
        type: 'callout',
        variant: 'success',
        title: '✅ Why This Matters',
        value: 'The more context you give Cursor (files, code, errors, visuals), the better and more accurate its responses will be!'
      },
      {
        type: 'text',
        value: '<h3>🎯 Practice Exercise</h3>'
      },
      {
        type: 'code',
        title: 'Try This',
        language: 'text',
        value: `1. Start your dev server
2. Open Browser in Cursor
3. Navigate to your app
4. Select an element (button, header, etc.)
5. Ask: "How can I improve this component's accessibility?"
6. Watch Cursor analyze the visual + code together!`
      }
    ]
  },
  {
    id: 'harmony2',
    title: 'Harmony2 Setup',
    subtitle: 'Create Your Project',
    duration: '20 min',
    content: [
      {
        type: 'callout',
        variant: 'info',
        title: '📦 Don\'t Have npm?',
        value: 'If you don\'t have npm installed, ask Cursor: "How do I install npm on my system?" - Cursor will guide you through the installation process.'
      },
      {
        type: 'callout',
        variant: 'warning',
        title: '🔧 Behind Corporate Proxy?',
        value: 'If you\'re behind a corporate proxy (like Amdocs), ask Cursor to configure your <code>.npmrc</code> file with:<br><code>proxy=http://genproxy.amdocs.com:8080/</code><br><code>https-proxy=http://genproxy.amdocs.com:8080/</code>'
      },
      {
        type: 'steps',
        steps: [
          {
            title: 'Create Project',
            description: 'npx will automatically install Harmony2 if needed',
            code: 'npx harmony2@latest create',
            language: 'bash'
          },
          {
            title: 'Explore Structure',
            description: 'Your project structure will look like this:',
            code: `src/
├── components/    # UI components
├── features/      # Feature modules
├── store/         # Redux store
└── App.tsx        # Root`,
            language: 'plaintext'
          },
          {
            title: 'Start Dev Server',
            code: 'npm start',
            language: 'bash'
          }
        ]
      }
    ]
  },
  {
    id: 'docs',
    title: 'Docs Integration',
    subtitle: 'Add Harmony2 Documentation',
    duration: '5 min',
    tasks: [
      { id: 'task-3-1', label: 'Open Cursor Settings (Ctrl+Shift+J)' },
      { id: 'task-3-2', label: 'Find "Docs" section' },
      { id: 'task-3-3', label: 'Add: https://amdocs-studio.github.io/harmony-2.0' },
      { id: 'task-3-4', label: 'Save configuration' },
    ],
    content: [
      {
        type: 'text',
        value: '<h3>Test It:</h3>'
      },
      {
        type: 'list',
        items: [
          'Ask Cursor: "How do I create a component in Harmony2?"',
          'Notice how it references the official docs!'
        ]
      },
      {
        type: 'callout',
        variant: 'success',
        title: 'Bonus',
        value: 'Add other docs (MUI, Tailwind, your company docs)'
      }
    ]
  },
  {
    id: 'rules',
    title: 'Creating Rules',
    subtitle: 'Let Cursor Create Rules for You!',
    duration: '20 min',
    content: [
      {
        type: 'callout',
        variant: 'warning',
        title: 'IMPORTANT',
        value: 'Don\'t create rules files manually! Explain to Cursor what you want, and it will create the rules for you. Rules go in .cursor/rules directory.'
      },
      {
        type: 'text',
        value: '<h3>Option 1: Download Pre-Made Rules</h3>'
      },
      {
        type: 'text',
        value: '<p>Download sample rules from: <a href="https://illin7809:9999/dev" target="_blank">https://illin7809:9999/dev</a></p><p>Then add to your project\'s .cursor/rules folder</p>'
      },
      {
        type: 'text',
        value: '<h3>Option 2: Let Cursor Create Custom Rules</h3>'
      },
      {
        type: 'code',
        title: 'Example: MUI Rules',
        language: 'text',
        value: `"Create rules for Material-UI that enforce:
- Import from @mui/material
- Use sx prop for styling
- Theme tokens for colors/spacing
- Accessibility with aria labels

Put these in .cursor/rules"`
      },
      {
        type: 'code',
        title: 'Example: Tailwind Rules',
        language: 'text',
        value: `"Create rules for Tailwind CSS that enforce:
- Utility-first approach
- Mobile-first responsive
- Config colors only
- Minimal @apply usage

Put these in .cursor/rules"`
      },
    ]
  },
  {
    id: 'figma',
    title: 'Figma MCP Setup',
    subtitle: 'MCP Integration',
    duration: '20 min',
    content: [
      {
        type: 'text',
        value: '<h3>Option 1: Cloud-Based Figma MCP (Recommended)</h3>'
      },
      {
        type: 'steps',
        steps: [
          {
            title: 'Configure MCP in Cursor',
            description: 'Open Cursor Settings (Ctrl+Shift+J) → Find "MCP" section',
            code: `"Figma": {
  "url": "https://mcp.figma.com/mcp",
  "headers": {
    "User-Agent": "MCP-Client/1.0"
  },
  "env": {
    "HTTP_PROXY": "http://genproxy.corp.amdocs.com:8080/",
    "HTTPS_PROXY": "http://genproxy.corp.amdocs.com:8080/",
    "NO_PROXY": "localhost,127.0.0.1"
  }
}`,
            language: 'json'
          },
          {
            title: 'Test Connection',
            code: '"Connect to Figma file: 9dCGGaBPPd9Ix4nlLm5JAA"',
            language: 'text'
          }
        ]
      },
      {
        type: 'text',
        value: '<h3>Option 2: Local Figma Desktop App</h3>'
      },
      {
        type: 'list',
        items: [
          'Download from: <a href="https://www.figma.com/downloads/" target="_blank">https://www.figma.com/downloads/</a>',
          'Install and sign in',
          'Activate the MCP Server option',
          'Keep app running in background'
        ]
      },
    ]
  },
  {
    id: 'gallery-analyze',
    title: 'Device Gallery - Part 1',
    subtitle: 'Analyze the Design',
    duration: '10 min',
    content: [
      {
        type: 'text',
        value: '<h3>Figma File:</h3><p><a href="https://www.figma.com/design/9dCGGaBPPd9Ix4nlLm5JAA/Cursor-workshop?node-id=0-1" target="_blank">Open Figma Design</a></p>'
      },
      {
        type: 'text',
        value: '<h3>What We\'ll Build:</h3>'
      },
      {
        type: 'list',
        items: [
          '📱 Device Cards: Image, name, specs, price, rating',
          '🔍 Search Bar: Real-time search',
          '🎛️ Filter Panel: Category, brand, price range',
          '📊 Gallery Grid: Responsive layout'
        ]
      },
      {
        type: 'callout',
        variant: 'info',
        title: 'Take 5 minutes',
        value: 'Open the Figma link, explore the design, and identify the components'
      }
    ]
  },
  {
    id: 'gallery-build',
    title: 'Device Gallery - Part 2',
    subtitle: 'Build with Figma MCP',
    duration: '60 min',
    content: [
      {
        type: 'text',
        value: '<h3>Step 1: Connect Cursor to Figma Design</h3>'
      },
      {
        type: 'text',
        value: '<p>First, tell Cursor which Figma design you\'re working with.</p>'
      },
      {
        type: 'code',
        title: 'In Cursor Chat (Agent Mode)',
        language: 'text',
        value: `"I want to build components from this Figma design:
https://www.figma.com/design/9dCGGaBPPd9Ix4nlLm5JAA/Cursor-workshop?node-id=0-1

Please analyze the design and tell me what components you see."`
      },
      {
        type: 'callout',
        variant: 'success',
        title: '✅ What Happens',
        value: 'Cursor connects via Figma MCP, analyzes the design, and lists components (DeviceCard, SearchBar, FilterPanel, etc.)'
      },
      {
        type: 'text',
        value: '<h3>Step 2: Start Small - Build Device Card</h3>'
      },
      {
        type: 'text',
        value: '<p>Start with the most important component: the Device Card.</p>'
      },
      {
        type: 'code',
        title: '🔹 ASK Mode - Understand First',
        language: 'text',
        value: `"Looking at the device card in this Figma design, 
what properties and data does it need?
What are the key visual elements?"`
      },
      {
        type: 'code',
        title: '🔹 AGENT Mode - Build It',
        language: 'text',
        value: `"Create a DeviceCard React component from the Figma design:
- Use Material-UI (or Tailwind CSS)
- Include: image, name, brand, specs, price, rating
- Match exact colors and spacing from Figma
- Make it responsive
- Add TypeScript types"`
      },
      {
        type: 'callout',
        variant: 'warning',
        title: '⚠️ Review!',
        value: 'Check if colors, spacing, layout match Figma. Ask Cursor to adjust if needed.'
      },
      {
        type: 'text',
        value: '<h3>Step 3: Build Filter Panel</h3>'
      },
      {
        type: 'code',
        title: 'Agent Mode',
        language: 'text',
        value: `"Create FilterPanel component from Figma:
- Category selection
- Price range slider
- Brand checkboxes
- Apply button
- Match Figma styling"`
      },
      {
        type: 'text',
        value: '<h3>Step 4: Build Search Bar</h3>'
      },
      {
        type: 'code',
        title: 'Agent Mode',
        language: 'text',
        value: `"Create SearchBar component from Figma:
- Search input with icon
- Real-time search
- Clear button
- Match styling"`
      },
      {
        type: 'text',
        value: '<h3>Step 5: Create Mock Data System</h3>'
      },
      {
        type: 'text',
        value: '<p>Before building the main gallery, we need proper mock data. HarmonyOS already has a built-in mock system!</p>'
      },
      {
        type: 'callout',
        variant: 'info',
        title: '💡 Tip: Use Built-in Mock Systems',
        value: 'Many frameworks have built-in mocking capabilities. Ask Cursor about what your framework provides!'
      },
      {
        type: 'code',
        title: '🔹 ASK Mode - Understand Mock System',
        language: 'text',
        value: `"What mock/testing system does HarmonyOS provide?
How can I create mock data handlers for my device gallery?"`
      },
      {
        type: 'text',
        value: '<p>After understanding the mock system, ask Cursor to analyze your page structure first:</p>'
      },
      {
        type: 'code',
        title: '🔹 PLAN Mode - Analyze Structure',
        language: 'text',
        value: `"Analyze the DeviceGallery page structure and data requirements:
- What data models do we need?
- What API endpoints should we mock?
- What properties does each device need?
- How should the data be structured?

Give me a detailed breakdown."`
      },
      {
        type: 'text',
        value: '<p>Now create the mock handlers:</p>'
      },
      {
        type: 'code',
        title: '🔹 AGENT Mode - Build Mock System',
        language: 'text',
        value: `"Create a proper mock data handler for the DeviceGallery:
- Use HarmonyOS built-in mock system
- Include realistic device data (phones, tablets, laptops)
- Mock API endpoints for:
  * GET /api/devices (all devices)
  * GET /api/devices/:id (single device)
  * GET /api/brands (available brands)
  * GET /api/categories (device categories)
- Include properties: id, name, brand, category, specs, price, rating, image
- Add 15-20 sample devices with variety
- Support query parameters for filtering/search"`
      },
      {
        type: 'callout',
        variant: 'success',
        title: '✅ Why This Matters',
        value: 'Proper mocking lets you develop without a backend, test different scenarios, and makes your code more maintainable.'
      },
      {
        type: 'text',
        value: '<h3>Step 6: Combine Everything - Main Gallery</h3>'
      },
      {
        type: 'code',
        title: '🔹 PLAN Mode - Strategy First',
        language: 'text',
        value: `"Plan DeviceGallery component that:
1. Uses DeviceCard, FilterPanel, SearchBar
2. Manages state for filters/search
3. Fetches device data from mock API
4. Implements filtering logic
5. Has responsive grid layout

Give me a step-by-step plan."`
      },
      {
        type: 'code',
        title: '🔹 AGENT Mode - Execute Plan',
        language: 'text',
        value: `"Create DeviceGallery using full Figma design:
https://www.figma.com/design/9dCGGaBPPd9Ix4nlLm5JAA/Cursor-workshop?node-id=0-1

- Use our DeviceCard, FilterPanel, SearchBar
- Connect to mock API endpoints
- State management for filters/search
- Responsive grid (1 col mobile, 2 tablet, 3 desktop)
- Filtering and search logic
- Match exact Figma layout"`
      },
      {
        type: 'text',
        value: '<h3>Step 7: Add Interactivity</h3>'
      },
      {
        type: 'code',
        language: 'text',
        value: `"Add interactive features:
- Favorite button (toggle state)
- Hover effects
- Loading skeleton
- Empty state for no results
- Smooth animations"`
      },
      {
        type: 'callout',
        variant: 'info',
        title: '🌐 Use Browser Tab to Test!',
        value: 'Open the Browser tab in Cursor, navigate to your gallery, and interact with it. Use "Select Element" to pick specific components, then ask Cursor to improve them. Example: Select a device card → "@Browser - Make this card more visually appealing with better shadows and hover effects"'
      },
      {
        type: 'text',
        value: '<h3>Step 8: Debug & Fix with Visual Context</h3>'
      },
      {
        type: 'text',
        value: '<p>Use Browser + @Browser tagging for visual debugging:</p>'
      },
      {
        type: 'list',
        items: [
          '1. Open Browser tab in Cursor',
          '2. Navigate to your gallery',
          '3. If you see a visual bug, use @Browser in chat',
          '4. Copy any console errors and paste into chat',
          '5. Select problematic elements and add to chat',
          '6. Ask Cursor to fix with full context'
        ]
      },
      {
        type: 'code',
        title: '🔹 Example: Visual Debugging',
        language: 'text',
        value: `"@Browser - The filter panel is not aligned properly on mobile.
Also, here's the console error I'm seeing:
[paste error here]

Please fix both issues."`
      },
      {
        type: 'callout',
        variant: 'success',
        title: '💡 Pro Tip',
        value: 'Combining @Browser screenshots + console errors + selected code gives Cursor complete context for faster, more accurate fixes!'
      },
    ]
  },
  {
    id: 'gallery-polish',
    title: 'Device Gallery - Part 3',
    subtitle: 'Polish & Best Practices',
    duration: '15 min',
    content: [
      {
        type: 'callout',
        variant: 'info',
        title: '💡 These Are Examples!',
        value: 'The prompts below are examples to inspire you. Write your own prompts based on YOUR specific needs and requirements. Experiment and find what works best for you!'
      },
      {
        type: 'text',
        value: '<h3>Step 1: Review the Complete Page</h3>'
      },
      {
        type: 'text',
        value: '<p>Before polishing, ask Cursor to review everything you\'ve built:</p>'
      },
      {
        type: 'code',
        title: '🔹 ASK Mode - Comprehensive Review',
        language: 'text',
        value: `"Review the entire DeviceGallery page:
- Check code quality and best practices
- Identify potential bugs or issues
- Suggest improvements for performance
- Review component structure
- Check accessibility concerns
- Verify responsive design

Give me a detailed analysis with priorities."`
      },
      {
        type: 'callout',
        variant: 'success',
        title: '✅ Why Review First',
        value: 'Get a comprehensive analysis before diving into specific improvements. This helps you prioritize what matters most.'
      },
      {
        type: 'text',
        value: '<h3>Step 2: Make It Production-Ready</h3>'
      },
      {
        type: 'text',
        value: '<p>Now tackle the improvements based on your review. Here are example prompts - write your own based on what you need:</p>'
      },
      {
        type: 'code',
        title: 'Example: Accessibility',
        language: 'text',
        value: `"Make the gallery fully accessible:
- Add proper ARIA labels
- Ensure keyboard navigation
- Add focus indicators
- Screen reader support"`
      },
      {
        type: 'code',
        title: 'Example: Performance',
        language: 'text',
        value: `"Optimize performance:
- Lazy load images
- Virtual scrolling for large lists
- Memoize expensive calculations
- Add loading states"`
      },
      {
        type: 'code',
        title: 'Example: Testing',
        language: 'text',
        value: `"Generate tests for:
- DeviceCard component
- FilterPanel functionality
- SearchBar behavior  
- Full gallery integration

Use React Testing Library."`
      },
      {
        type: 'text',
        value: '<h3>🎨 Step 3: Experiment with Your Ideas!</h3>'
      },
      {
        type: 'text',
        value: '<p>Now it\'s your turn! Try your own ideas. Here are some examples to inspire you:</p>'
      },
      {
        type: 'code',
        title: 'Example Ideas',
        language: 'text',
        value: `Try different approaches:

"Rebuild using Tailwind instead of MUI"
"Add animations on scroll"
"Create dark mode toggle"
"Add grid/list view switcher"
"Implement infinite scroll"

Write your own prompts for features YOU want!`
      },
      {
        type: 'text',
        value: '<h3>🔥 Advanced: Multi-Agent Parallelization</h3>'
      },
      {
        type: 'code',
        language: 'text',
        value: `Open 3 Cursor chat windows simultaneously:

Agent 1: "Improve DeviceCard styling and animations"
Agent 2: "Enhance FilterPanel with more options"
Agent 3: "Add sorting (price, rating, name)"

All agents work in parallel!`
      },
      {
        type: 'callout',
        variant: 'success',
        title: '🎉 Congratulations!',
        value: 'You\'ve built a complete device gallery from Figma using Cursor AI! This demonstrates the power of combining Figma MCP with AI-assisted development.'
      },
      {
        type: 'text',
        value: '<h3>💡 Key Takeaways</h3>'
      },
      {
        type: 'list',
        items: [
          '✅ Start small, then combine components',
          '✅ Use Figma links for design context',
          '✅ ASK mode to understand, PLAN for strategy, AGENT to build, DEBUG to fix',
          '✅ Always review AI code',
          '✅ Break big tasks into small steps',
          '✅ Iterate and refine continuously'
        ]
      }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced Topics',
    subtitle: 'Personas & Commands',
    duration: '30 min (Optional)',
    content: [
      {
        type: 'callout',
        variant: 'info',
        title: '🎯 Your Turn to Design!',
        value: 'Now that you\'ve learned the basics, it\'s time to customize Cursor for YOUR workflow. Think about what would make YOU more productive.'
      },
      {
        type: 'text',
        value: '<h3>🎭 Challenge 1: Create a Custom Persona</h3>'
      },
      {
        type: 'text',
        value: '<h4>Think About:</h4>'
      },
      {
        type: 'list',
        items: [
          'What expertise do you need most often in your work?',
          'What type of code review would help you most?',
          'What domain knowledge would be valuable? (e.g., E-commerce, Healthcare, Finance)',
          'What role perspective would improve your code? (Tech Lead, DevOps, UX Designer)'
        ]
      },
      {
        type: 'text',
        value: '<h4>Your Mission:</h4>'
      },
      {
        type: 'text',
        value: '<p><strong>Ask Cursor to create a persona that matches YOUR needs.</strong> Consider:</p>'
      },
      {
        type: 'list',
        items: [
          'What should this persona know?',
          'What should it focus on?',
          'How should it review/suggest code?',
          'What standards should it enforce?'
        ]
      },
      {
        type: 'callout',
        variant: 'success',
        title: '💡 Example Mission (if you need inspiration)',
        value: 'Create a "Senior Developer" persona that writes clean production code, follows best practices, and focuses on performance. OR create a "Code Reviewer" persona that checks for bugs, security issues, and suggests optimizations. But try to think of YOUR OWN first!'
      },
      {
        type: 'text',
        value: '<h3>⚡ Challenge 2: Design an Automated Workflow Command</h3>'
      },
      {
        type: 'text',
        value: '<h4>Think About Your Daily Workflow:</h4>'
      },
      {
        type: 'list',
        items: [
          'What repetitive tasks do you do every day?',
          'What steps do you always follow when creating something?',
          'How do you ensure quality before committing code?',
          'What checks do you wish happened automatically?'
        ]
      },
      {
        type: 'text',
        value: '<h4>Your Mission:</h4>'
      },
      {
        type: 'text',
        value: '<p><strong>Design a command that automates a multi-step workflow.</strong></p><p>Think about:</p>'
      },
      {
        type: 'list',
        items: [
          'What are the steps in your workflow?',
          'Which personas should be involved at each step?',
          'What should happen if issues are found?',
          'Should it iterate until perfect, or just give feedback?',
          'What should the final output be?'
        ]
      },
      {
        type: 'callout',
        variant: 'success',
        title: '💡 Example Workflow (if you need inspiration)',
        value: 'The "/dev-review-loop" - A command that: 1) Developer persona builds the feature, 2) Reviewer persona reviews it, 3) If issues found, Developer fixes them, 4) Reviewer checks again, 5) Repeats until no issues, 6) Provides summary. But what workflow would help YOU most?'
      },
      {
        type: 'text',
        value: '<h3>🚀 Now Build It!</h3>'
      },
      {
        type: 'text',
        value: '<p>Once you\'ve designed your persona or command:</p>'
      },
      {
        type: 'list',
        items: [
          '<strong>Explain it to Cursor</strong> - Describe what you want in natural language',
          '<strong>Ask Cursor to create it</strong> - Let AI build the persona/command for you',
          '<strong>Test it</strong> - Try using it on a real task',
          '<strong>Refine it</strong> - Adjust based on results',
          '<strong>Share with the group!</strong> - Show others your creative solution'
        ]
      },
      {
        type: 'text',
        value: '<h3>💭 More Ideas to Spark Your Creativity</h3>'
      },
      {
        type: 'text',
        value: '<h4>Persona Ideas:</h4>'
      },
      {
        type: 'list',
        items: [
          'Framework Expert (Harmony2, React, Angular)',
          'Security Auditor',
          'Performance Optimizer',
          'Accessibility Champion',
          'Test Engineer',
          'Documentation Writer',
          'DevOps Engineer',
          'Database Architect'
        ]
      },
      {
        type: 'text',
        value: '<h4>Command Ideas:</h4>'
      },
      {
        type: 'list',
        items: [
          '/feature-complete - Build, test, document, review',
          '/refactor-safe - Refactor with tests to ensure no breaking changes',
          '/security-audit - Comprehensive security review',
          '/performance-boost - Analyze and optimize performance',
          '/bug-hunt - Deep dive to find potential issues',
          '/prod-ready - Full production readiness checklist'
        ]
      },
      {
        type: 'callout',
        variant: 'warning',
        title: '🎯 The Goal',
        value: 'The best personas and commands are the ones YOU design for YOUR workflow. Don\'t just copy examples - think about what would actually make you more productive!'
      },
      {
        type: 'text',
        value: '<h3>⏰ Time to Experiment!</h3>'
      },
      {
        type: 'text',
        value: '<p>Spend the next 30 minutes:</p>'
      },
      {
        type: 'list',
        items: [
          '1. Think about what would help YOUR workflow most',
          '2. Design either a persona OR a command (or both if time permits)',
          '3. Ask Cursor to create it',
          '4. Test it on a real example',
          '5. Share your creation with others'
        ]
      }
    ]
  },
  {
    id: 'super-advanced',
    title: 'Super Advanced Challenge',
    subtitle: 'Live Your Dream - Build Something Amazing',
    duration: '60+ min (Open-ended)',
    content: [
      {
        type: 'callout',
        variant: 'success',
        title: '🚀 This Is Where You Break Free',
        value: 'No more guided steps. No more examples. It\'s time to build what YOU truly want to create. Think big, think bold, think game-changing!'
      },
      {
        type: 'text',
        value: '<h3>💭 What Do You Want to Achieve?</h3>'
      },
      {
        type: 'text',
        value: '<p>Take a moment and think deeply:</p>'
      },
      {
        type: 'list',
        items: [
          'What tool would make your daily work 10x easier?',
          'What integration is missing in your workflow?',
          'What data source do you wish Cursor could access?',
          'What automation would save you hours each week?',
          'What would make your team more productive?'
        ]
      },
      {
        type: 'text',
        value: '<h3>🎯 Challenge Ideas (Just to Inspire You)</h3>'
      },
      {
        type: 'text',
        value: '<h4>💡 Create Your Own MCP Server</h4>'
      },
      {
        type: 'text',
        value: '<p>MCP servers let Cursor access any data source or API. Build one that connects to:</p>'
      },
      {
        type: 'list',
        items: [
          'Your company\'s internal APIs or databases',
          'Project management tools (Jira, Monday, Asana)',
          'Analytics platforms (Google Analytics, Mixpanel)',
          'CI/CD systems (Jenkins, GitHub Actions)',
          'Documentation sites (Confluence, Notion)',
          'Monitoring tools (New Relic, DataDog)',
          'Custom business logic or calculations',
          'Your own creative idea!'
        ]
      },
      {
        type: 'code',
        title: 'Getting Started with MCP',
        language: 'text',
        value: `Ask Cursor:

"I want to create an MCP server that connects to [YOUR SERVICE].
Walk me through:
1. MCP server architecture and requirements
2. How to implement the server in TypeScript/Python
3. How to handle authentication
4. How to expose data to Cursor
5. How to test it locally
6. How to deploy it"

Then start building!`
      },
      {
        type: 'text',
        value: '<h4>🌐 Deploy to the Cloud</h4>'
      },
      {
        type: 'text',
        value: '<p>Once you\'ve built something, deploy it! Free hosting options:</p>'
      },
      {
        type: 'list',
        items: [
          '<strong>Vercel</strong>: Perfect for web apps, APIs, and serverless functions',
          '<strong>Netlify</strong>: Great for static sites and serverless backends',
          '<strong>Railway</strong>: Easy deployment for Node.js services',
          '<strong>Render</strong>: Free tier for web services and databases',
          '<strong>Cloudflare Workers</strong>: Serverless edge computing',
          '<strong>AWS Lambda</strong>: Serverless functions (free tier available)'
        ]
      },
      {
        type: 'code',
        title: 'Deploy to Vercel Example',
        language: 'text',
        value: `Ask Cursor:

"Help me deploy my MCP server to Vercel:
1. What changes do I need for Vercel deployment?
2. Create vercel.json configuration
3. Set up environment variables
4. Configure serverless functions
5. Guide me through the deployment process"

Cursor + Vercel = Deployed in minutes!`
      },
      {
        type: 'text',
        value: '<h4>🔧 More Challenge Ideas</h4>'
      },
      {
        type: 'list',
        items: [
          '<strong>AI-Powered Code Review Bot</strong>: Create a bot that reviews PRs using Cursor\'s AI',
          '<strong>Custom Documentation Generator</strong>: Auto-generate docs from your codebase',
          '<strong>Smart Test Generator</strong>: AI that writes comprehensive tests for your code',
          '<strong>Performance Analyzer</strong>: Tool that analyzes and suggests optimizations',
          '<strong>Migration Assistant</strong>: Help migrate between frameworks/libraries',
          '<strong>Security Scanner</strong>: Custom security checks for your stack',
          '<strong>Component Library Generator</strong>: Auto-create component library from designs',
          '<strong>API Client Generator</strong>: Generate typed API clients from OpenAPI specs'
        ]
      },
      {
        type: 'callout',
        variant: 'warning',
        title: '⚡ Pro Approach',
        value: 'Don\'t try to build everything at once! Start with MVP (Minimum Viable Product). Get it working with basic functionality, then iterate and improve. Ask Cursor to help you break down your big idea into small, achievable steps.'
      },
      {
        type: 'text',
        value: '<h3>🎯 Your Mission</h3>'
      },
      {
        type: 'list',
        items: [
          '<strong>Step 1</strong>: Choose ONE ambitious goal that excites you',
          '<strong>Step 2</strong>: Ask Cursor to help you plan it: "I want to build [YOUR IDEA]. Break this down into achievable milestones."',
          '<strong>Step 3</strong>: Start with milestone 1 - use everything you\'ve learned (personas, rules, MCP, etc.)',
          '<strong>Step 4</strong>: Build, test, iterate - use Cursor as your pair programmer',
          '<strong>Step 5</strong>: Deploy it and make it real!',
          '<strong>Step 6</strong>: Share what you built with others - inspire them!'
        ]
      },
      {
        type: 'callout',
        variant: 'success',
        title: '🌟 The Real Goal',
        value: 'This isn\'t about completing an exercise. It\'s about proving to yourself that with Cursor, you can build ANYTHING you can imagine. The only limit is your ambition!'
      },
      {
        type: 'text',
        value: '<h3>💡 Tips for Success</h3>'
      },
      {
        type: 'list',
        items: [
          'Start small, think big - MVP first, features later',
          'Plan thoroughly before coding - think about the end product',
          'Consult with Cursor to find gaps and validate your approach',
          'Ask Cursor for improvement ideas and alternative solutions',
          'Use @Browser to debug visual issues',
          'Tag relevant files with @ for better context',
          'Create custom personas for your specific domain',
          'Don\'t hesitate to ask Cursor "how should I approach this?"',
          'Iterate fast - build, test, refine, repeat',
          'Document as you go - future you will thank you',
          'If stuck, break the problem down smaller and tackle piece by piece'
        ]
      },
      {
        type: 'text',
        value: '<h3>🚀 Ready to Start?</h3>'
      },
      {
        type: 'text',
        value: '<p>Open Cursor, take a deep breath, and ask:</p>'
      },
      {
        type: 'code',
        language: 'text',
        value: `"I want to build [YOUR AMAZING IDEA]. 
Help me turn this vision into reality.
Let's start by breaking it down into steps."`
      },
      {
        type: 'callout',
        variant: 'info',
        title: '💬 Share Your Journey',
        value: 'As you build, share your progress with the group. Your challenges might help others, and their insights might help you. We\'re all learning together!'
      }
    ]
  },
  {
    id: 'wrap-up',
    title: 'Wrap-Up & Key Takeaways',
    duration: '15 min',
    content: [
      {
        type: 'text',
        value: '<h3>What You Learned:</h3>'
      },
      {
        type: 'list',
        items: [
          '✅ Cursor\'s 4 modes (Ask, Agent, Plan, Debug)',
          '✅ Settings, panels, and interface',
          '✅ Creating Harmony2 projects',
          '✅ Adding docs for better AI context',
          '✅ Creating rules for consistency',
          '✅ Figma MCP integration',
          '✅ Building real UI with AI assistance',
          '✅ Advanced: Personas & custom commands'
        ]
      },
      {
        type: 'text',
        value: '<h3>Remember:</h3>'
      },
      {
        type: 'list',
        items: [
          '🔍 Always review AI-generated code',
          '🎯 Use rules for consistency',
          '🚀 Start small, build confidence',
          '🤝 It augments you, doesn\'t replace you!'
        ]
      },
      {
        type: 'text',
        value: '<h3>📚 Resources:</h3>'
      },
      {
        type: 'list',
        items: [
          'Cursor: <a href="https://docs.cursor.com" target="_blank">https://docs.cursor.com</a>',
          'Harmony2: <a href="https://amdocs-studio.github.io/harmony-2.0" target="_blank">https://amdocs-studio.github.io/harmony-2.0</a>'
        ]
      },
      {
        type: 'text',
        value: '<h3>🎯 Your 30-Day Challenge:</h3>'
      },
      {
        type: 'list',
        items: [
          'Week 1: Use Cursor 1 hour/day',
          'Week 2: Build a small project with Cursor',
          'Week 3: Share with your team',
          'Week 4: Establish team workflows'
        ]
      }
    ]
  }
]

