# Cursor Workshop Lab Website

An interactive, progressive web app for the Cursor Workshop hands-on lab.

## Features

- ✅ **Progressive Navigation** - Step through lab sections sequentially
- ✅ **Task Tracking** - Check off completed tasks
- ✅ **Progress Saving** - Automatically saves your progress in localStorage
- ✅ **Copy Code** - One-click copy for all code blocks
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile
- ✅ **Dark Mode Support** - Automatically detects system preference
- ✅ **Interactive Sidebar** - Quick navigation between sections

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `out` folder (static export).

## Deploying to Vercel

### Option 1: Deploy from GitHub

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and deploy!

### Option 2: Deploy from CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 3: Deploy Static Export

```bash
# Build static export
npm run build

# The 'out' folder contains the static site
# You can deploy this to any static hosting service
```

## Project Structure

```
lab-website/
├── app/
│   ├── components/        # React components
│   │   ├── CodeBlock.tsx  # Code block with copy button
│   │   └── CheckboxTask.tsx  # Interactive checkbox
│   ├── data/
│   │   └── lab-content.ts # Lab content data
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # App layout
│   └── page.tsx           # Main page
├── public/                # Static files
├── next.config.js         # Next.js config
├── tailwind.config.js     # Tailwind CSS config
└── package.json
```

## Customization

### Adding Content

Edit `app/data/lab-content.ts` to add or modify lab sections:

```typescript
{
  id: 'new-section',
  title: 'New Section',
  subtitle: 'Subtitle',
  duration: '10 min',
  tasks: [
    { id: 'task-1', label: 'Task description' }
  ],
  content: [
    { type: 'text', value: '<p>Content here</p>' },
    { type: 'code', value: 'code here', language: 'bash' }
  ]
}
```

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.js`
- Colors: Modify `primary` and `secondary` in `tailwind.config.js`

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **LocalStorage API** - Progress tracking

## License

MIT

