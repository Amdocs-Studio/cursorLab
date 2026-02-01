# Tailwind CSS Development Rules

## Core Principles

### Utility-First Approach

- Use utility classes instead of custom CSS
- Avoid creating custom CSS classes for simple styling
- Compose utilities to build complex components

```html
<!-- ✅ Good - Utility classes -->
<button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
  Click Me
</button>

<!-- ❌ Bad - Custom CSS -->
<button class="custom-button">Click Me</button>
<style>
  .custom-button {
    padding: 0.5rem 1rem;
    background-color: #3b82f6;
    color: white;
    border-radius: 0.25rem;
  }
</style>
```

## Responsive Design

### Mobile-First Required

- Start with mobile layout (no prefix)
- Add responsive modifiers for larger screens: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Test all breakpoints

```html
<!-- ✅ Good - Mobile-first progression -->
<div class="flex flex-col md:flex-row gap-4 p-4 md:p-6 lg:p-8">
  <div class="w-full md:w-1/2">Content 1</div>
  <div class="w-full md:w-1/2">Content 2</div>
</div>

<!-- ❌ Bad - Desktop-first -->
<div class="flex-row p-8 sm:flex-col sm:p-4">
  Content
</div>
```

### Breakpoints Reference

- `sm`: 640px - Small tablets
- `md`: 768px - Tablets  
- `lg`: 1024px - Laptops
- `xl`: 1280px - Desktops
- `2xl`: 1536px - Large desktops

## Color System

### Use Config Colors Only

- Reference colors from `tailwind.config.js`
- Avoid arbitrary color values
- Use semantic color names when possible

```html
<!-- ✅ Good - Config colors -->
<div class="bg-blue-500 text-white hover:bg-blue-700">
  Content
</div>

<!-- ❌ Bad - Arbitrary colors -->
<div class="bg-[#3b82f6] text-[#ffffff] hover:bg-[#1d4ed8]">
  Content
</div>
```

### Color Palette Usage

- Use color scales (50-900) for variations
- `50`: Lightest tint
- `500`: Base color (default)
- `900`: Darkest shade

```html
<div class="bg-gray-50 border-gray-200 text-gray-900">
  Light background with dark text
</div>
```

## Spacing & Layout

### Consistent Spacing Scale

- Use standard spacing utilities: `p-4`, `m-2`, `gap-6`
- Follow consistent progression: 2, 4, 6, 8, 12, 16, 24, 32
- Avoid arbitrary values for spacing

```html
<!-- ✅ Good - Standard spacing -->
<div class="p-4 md:p-6 lg:p-8 space-y-4">
  <div class="mb-4">Section 1</div>
  <div class="mb-4">Section 2</div>
</div>

<!-- ❌ Bad - Arbitrary spacing -->
<div class="p-[13px] space-y-[17px]">
  Content
</div>
```

### Layout Patterns

**Flexbox:**
```html
<div class="flex items-center justify-between gap-4">
  <div>Left</div>
  <div>Right</div>
</div>
```

**Grid:**
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## Typography

### Scale Responsively

```html
<!-- ✅ Good - Responsive typography -->
<h1 class="text-2xl md:text-3xl lg:text-4xl font-bold">
  Heading
</h1>
<p class="text-sm md:text-base lg:text-lg text-gray-700">
  Body text
</p>

<!-- ❌ Bad - Fixed sizes -->
<h1 class="text-4xl">Heading</h1>
```

### Font Weight Guidelines

- `font-normal`: 400 (body text)
- `font-medium`: 500 (emphasis)
- `font-semibold`: 600 (subheadings)
- `font-bold`: 700 (headings)

## @apply Usage

### Minimal Use Only

- Use `@apply` only for repeated component patterns
- Not for simple utility combinations
- Extract to components instead when possible

```css
/* ✅ Good - Complex repeated pattern */
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded-lg font-medium
           hover:bg-blue-700 focus:outline-none focus:ring-2 
           focus:ring-blue-500 focus:ring-offset-2 
           disabled:opacity-50 disabled:cursor-not-allowed
           transition-colors duration-200;
  }
}

/* ❌ Bad - Simple utilities that should stay in markup */
@layer components {
  .flex-center {
    @apply flex items-center justify-center;
  }
}
```

## Class Organization

### Group Related Utilities

Order classes logically:
1. Layout (display, position, flex/grid)
2. Spacing (margin, padding)
3. Sizing (width, height)
4. Typography (font, text)
5. Visual (colors, borders, shadows)
6. Effects (transitions, transforms)
7. States (hover, focus, active)

```html
<!-- ✅ Good - Organized -->
<button class="
  flex items-center gap-2
  px-6 py-3 mx-auto
  w-full md:w-auto
  text-sm font-medium text-white
  bg-blue-600 rounded-lg shadow-md
  hover:bg-blue-700 hover:shadow-lg
  focus:outline-none focus:ring-2 focus:ring-blue-500
  transition-all duration-200
">
  Submit
</button>

<!-- ❌ Bad - Random order -->
<button class="text-white hover:bg-blue-700 flex bg-blue-600 px-6 w-full items-center">
  Submit
</button>
```

## State Variants

### Interactive States

Always include hover, focus, and active states:

```html
<button class="
  bg-blue-500 hover:bg-blue-600 active:bg-blue-700
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
">
  Button
</button>
```

### Form States

```html
<input class="
  w-full px-4 py-2 
  border border-gray-300 rounded-lg
  focus:border-blue-500 focus:ring-2 focus:ring-blue-200
  disabled:bg-gray-100 disabled:cursor-not-allowed
  invalid:border-red-500 invalid:ring-red-200
" />
```

## Accessibility

### Focus Indicators Required

```html
<!-- ✅ Good - Visible focus state -->
<a class="text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Link
</a>

<!-- ❌ Bad - No focus indicator -->
<a class="text-blue-600 hover:text-blue-800">
  Link
</a>
```

### Color Contrast

- Ensure sufficient contrast for text
- Use darker shades for text on light backgrounds
- Use lighter shades for text on dark backgrounds

```html
<!-- ✅ Good contrast -->
<div class="bg-white text-gray-900">Dark text on light</div>
<div class="bg-gray-900 text-gray-100">Light text on dark</div>

<!-- ❌ Poor contrast -->
<div class="bg-gray-200 text-gray-300">Hard to read</div>
```

### Screen Reader Utilities

```html
<span class="sr-only">Hidden text for screen readers only</span>
<div class="not-sr-only">Visible to all</div>
```

## Dark Mode Support

### Use Dark Mode Variants

```html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
  Content that adapts to dark mode
</div>

<button class="
  bg-blue-500 dark:bg-blue-600
  hover:bg-blue-600 dark:hover:bg-blue-700
">
  Dark Mode Ready Button
</button>
```

## Performance Best Practices

### Avoid Arbitrary Values

Arbitrary values increase CSS bundle size:

```html
<!-- ✅ Good - Standard utilities -->
<div class="w-64 h-32 p-4">Content</div>

<!-- ❌ Bad - Arbitrary values -->
<div class="w-[256px] h-[128px] p-[16px]">Content</div>
```

### Purge Unused Styles

Ensure `tailwind.config.js` has proper content paths:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  // ...
}
```

## Component Patterns

### Card Component

```html
<div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
  <img src="image.jpg" alt="Card image" class="w-full h-48 object-cover">
  <div class="p-6">
    <h3 class="text-xl font-semibold mb-2 text-gray-900">Title</h3>
    <p class="text-gray-600 mb-4">Description text goes here.</p>
    <button class="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
      Action
    </button>
  </div>
</div>
```

### Form Input

```html
<div class="space-y-2">
  <label class="block text-sm font-medium text-gray-700">
    Email Address
  </label>
  <input 
    type="email"
    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    placeholder="you@example.com"
  />
  <p class="text-sm text-gray-500">We'll never share your email.</p>
</div>
```

### Navigation

```html
<nav class="bg-white shadow-lg">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <div class="flex items-center gap-8">
        <a href="/" class="text-xl font-bold text-gray-900">Logo</a>
        <div class="hidden md:flex gap-4">
          <a href="#" class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-gray-100">
            Home
          </a>
          <a href="#" class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-gray-100">
            About
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
```

## Anti-Patterns to Avoid

❌ Don't use arbitrary values when standard utilities exist
❌ Don't create custom CSS for simple patterns
❌ Don't use `!important` - restructure specificity instead
❌ Don't ignore responsive design
❌ Don't skip hover/focus states
❌ Don't use inline styles - use Tailwind utilities
❌ Don't forget to configure purge paths
❌ Don't overuse `@apply` - prefer utilities in markup

## Configuration Best Practices

### Extend, Don't Replace

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          500: '#0ea5e9',
          900: '#0c4a6e',
        },
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
}
```

## TypeScript Integration

```typescript
// Use class variance authority (CVA) for type-safe variants
import { cva, type VariantProps } from 'class-variance-authority';

const button = cva('px-4 py-2 rounded font-medium', {
  variants: {
    intent: {
      primary: 'bg-blue-500 text-white hover:bg-blue-600',
      secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    },
    size: {
      small: 'text-sm px-3 py-1',
      large: 'text-lg px-6 py-3',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
});

type ButtonProps = VariantProps<typeof button>;
```


