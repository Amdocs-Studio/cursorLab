export interface Task {
  id: string
  label: string
}

export interface ContentBlock {
  type: 'text' | 'list' | 'code' | 'callout' | 'steps'
  value: string
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
    duration: '3 min',
    content: [
      {
        type: 'text',
        value: '<p>Today you\'ll learn Cursor by actually using it!</p>'
      },
      {
        type: 'callout',
        variant: 'info',
        title: 'Note',
        value: 'Part 1 (Overview) will be presented live from https://illin7809:9999/dev'
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
    id: 'harmony2',
    title: 'Harmony2 Setup',
    subtitle: 'Create Your Project',
    duration: '15 min',
    content: [
      {
        type: 'steps',
        steps: [
          {
            title: 'Install Harmony2',
            code: 'npm install -g harmony2@latest',
            language: 'bash'
          },
          {
            title: 'Create Project',
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
      { id: 'task-3-2', label: 'Find "Docs" or "Context" section' },
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
            title: 'Get Figma Token',
            description: 'Go to Figma → Settings → Account → Personal Access Tokens → Create new token'
          },
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
          'Download from: https://www.figma.com/downloads/',
          'Install and sign in',
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
    subtitle: 'Build with Different Modes',
    duration: '50 min',
    content: [
      {
        type: 'text',
        value: '<h3>🔹 ASK Mode (Ctrl+K → Ask) - For Questions</h3>'
      },
      {
        type: 'code',
        language: 'text',
        value: `Select code in your gallery and ask:
"Explain how this component works"
"What are potential edge cases?"
"How can I improve performance?"

Try: "Create a React button component" → Fail! 
(Ask mode doesn't create, only explains)`
      },
      {
        type: 'text',
        value: '<h3>🔹 AGENT Mode (Chat Panel) - For Building</h3>'
      },
      {
        type: 'code',
        title: 'Phase 1: Generate Components (15 min)',
        language: 'text',
        value: `"Create a device gallery based on the Figma design with:
- DeviceCard component (image, name, specs, price)
- Gallery grid with responsive layout
- Use Material-UI components
- Match the Figma colors and spacing"`
      },
      {
        type: 'code',
        title: 'Phase 2: Add Features (15 min)',
        language: 'text',
        value: `"Add search functionality to filter devices by name"
"Add a filter panel for category and price range"
"Add favorite button to each card"`
      },
      {
        type: 'text',
        value: '<h3>🔹 PLAN Mode - For Strategy</h3>'
      },
      {
        type: 'code',
        language: 'text',
        value: `"Plan how to add user authentication to this gallery"
"Plan performance optimizations for the device gallery"
Review the plan, modify steps, then execute`
      },
      {
        type: 'text',
        value: '<h3>🔹 DEBUG Mode - For Fixing</h3>'
      },
      {
        type: 'list',
        items: [
          'Introduce a small bug in your gallery',
          'Ask Cursor to identify and fix it',
          'Watch it analyze and suggest solutions'
        ]
      },
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced Topics',
    subtitle: 'Personas & Commands',
    duration: '15 min (Optional)',
    content: [
      {
        type: 'text',
        value: '<h3>🎭 Creating Custom Personas</h3>'
      },
      {
        type: 'code',
        title: 'Developer Persona',
        language: 'text',
        value: `"Create a persona called 'Senior Developer' that:
- Writes clean, production-ready code
- Follows best practices and design patterns
- Implements features efficiently
- Focuses on functionality and performance"

Then use: @senior-developer "Implement user authentication"`
      },
      {
        type: 'code',
        title: 'Code Reviewer Persona',
        language: 'text',
        value: `"Create a persona called 'Code Reviewer' that:
- Reviews code critically for issues
- Checks for bugs, security vulnerabilities
- Ensures best practices are followed
- Suggests improvements and optimizations"

Then use: @code-reviewer "Review this authentication code"`
      },
      {
        type: 'text',
        value: '<h3>⚡ The Dev-Review Loop Command</h3>'
      },
      {
        type: 'code',
        title: 'Automated Quality Assurance',
        language: 'text',
        value: `"Create a custom command called '/dev-review-loop' that:

1. Switch to @senior-developer persona
2. Develop the feature based on the request
3. Switch to @code-reviewer persona
4. Review the code thoroughly
5. If issues found: fix and review again
6. Repeat until no more issues
7. Provide final summary

Usage: /dev-review-loop "Create a login form with validation"`
      },
      {
        type: 'callout',
        variant: 'success',
        title: 'Benefits',
        value: 'Automated QA, catch bugs early, improve code quality iteratively, save time on reviews'
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

