# Development Guide

## Getting Started

### Prerequisites

- **Node.js**: Version 22 LTS or higher
- **npm**: Version 10.x or higher (comes with Node.js)
- **Git**: For version control
- **Modern Browser**: Chrome, Firefox, Safari, or Edge

### Initial Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/mbianchidev/platform-engineering-roadmap.git
   cd platform-engineering-roadmap
   ```

2. **Install dependencies**
   ```bash
   npm ci
   ```
   > **Note**: Use `npm ci` for reproducible installs in CI/CD and development. Use `npm install` only when adding/updating packages.

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173/platform-engineering-roadmap/`

## Development Workflow

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linter
npm run lint
```

### Development Server

The Vite dev server provides:
- **Hot Module Replacement (HMR)**: Instant updates without page reload
- **Fast Cold Start**: Server starts in milliseconds
- **React Fast Refresh**: Preserves component state during updates
- **Error Overlay**: In-browser error display

**Access**: `http://localhost:5173/platform-engineering-roadmap/`

> **Note**: Port may vary if 5173 is in use. Check console output.

### Making Changes

#### 1. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

#### 2. Make Your Changes
- Edit source files in `src/`
- Add/modify components in `src/components/`
- Update data in `src/data/roadmapData.js`
- Update styles in corresponding CSS files

#### 3. Test Locally
```bash
# Run linter
npm run lint

# Build and preview
npm run build
npm run preview
```

#### 4. Commit Changes
```bash
git add .
git commit -m "feat: add new feature"
```

Follow [Conventional Commits](https://www.conventionalcommits.org/) format:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

## Project Structure

```
platform-engineering-roadmap/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD
├── docs/                       # Documentation
│   ├── README.md              # Docs index
│   ├── ARCHITECTURE.md        # Architecture docs
│   ├── TECH_STACK.md          # Tech stack details
│   ├── DEVELOPMENT.md         # This file
│   └── DEPLOYMENT.md          # Deployment guide
├── public/                     # Static assets (served as-is)
├── src/
│   ├── components/            # React components
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── RoadmapSection.jsx
│   │   ├── RoadmapSection.css
│   │   ├── TopicCard.jsx
│   │   ├── TopicCard.css
│   │   ├── Modal.jsx
│   │   ├── Modal.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── data/
│   │   └── roadmapData.js     # Content data structure
│   ├── assets/                # Images, icons, etc.
│   ├── App.jsx                # Root component
│   ├── App.css                # Global app styles
│   ├── main.jsx               # Entry point
│   └── index.css              # Base styles
├── .gitignore                 # Git ignore rules
├── eslint.config.js           # ESLint configuration
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── package-lock.json          # Locked dependency versions
├── vite.config.js             # Vite configuration
├── README.md                  # Project overview
└── CONTRIBUTING.md            # Contribution guidelines
```

## Adding New Content

### Adding a New Topic

1. **Open** `src/data/roadmapData.js`

2. **Add to appropriate section**:
   ```javascript
   {
     id: "unique-topic-id",
     title: "Topic Title",
     description: "Short description for card",
     content: "Detailed content for modal",
     links: [
       { title: "Resource Name", url: "https://example.com" }
     ],
     subtopics: [
       { 
         name: "Subtopic Name", 
         description: "Subtopic description" 
       }
     ]
   }
   ```

3. **Save** - HMR will reload the page automatically

### Adding a New Section

```javascript
{
  id: "section-id",
  title: "Section Title",
  description: "Section description",
  topics: [
    // Add topics here
  ]
}
```

## Creating New Components

### Component Template

```javascript
import './ComponentName.css'

const ComponentName = ({ prop1, prop2 }) => {
  return (
    <div className="component-name">
      {/* Component content */}
    </div>
  )
}

export default ComponentName
```

### Component Best Practices

1. **One Component Per File**: Each component in its own file
2. **Co-locate Styles**: CSS file next to component file
3. **Prop Validation**: Document expected props in comments
4. **Functional Components**: Use function components with hooks
5. **Descriptive Names**: Clear, descriptive component and prop names
6. **Single Responsibility**: Each component does one thing well

### Adding a New Component

1. **Create component file**: `src/components/NewComponent.jsx`
2. **Create styles file**: `src/components/NewComponent.css`
3. **Import in parent**: `import NewComponent from './components/NewComponent'`
4. **Use in JSX**: `<NewComponent prop={value} />`

## Styling Guidelines

### CSS Organization

- **Component-Scoped**: Each component has its own CSS file
- **Naming Convention**: Use descriptive class names (BEM-inspired)
- **Global Styles**: Only in `index.css` and `App.css`

### CSS Best Practices

```css
/* Component root class matches component name */
.component-name {
  /* Layout properties first */
  display: flex;
  padding: 1rem;
  
  /* Visual properties */
  background: var(--color-bg);
  border-radius: 8px;
  
  /* Typography */
  font-size: 1rem;
  
  /* Transitions last */
  transition: all 0.3s ease;
}

/* Element classes describe their role */
.component-name__element {
  margin-top: 0.5rem;
}

/* Modifier classes describe state */
.component-name--active {
  opacity: 1;
}
```

### CSS Variables

Define reusable values in `:root`:
```css
:root {
  --color-primary: #007bff;
  --spacing-unit: 8px;
  --border-radius: 8px;
}
```

## Debugging

### React DevTools

1. **Install**: [React DevTools Browser Extension](https://react.dev/learn/react-developer-tools)
2. **Open**: Browser DevTools → React tab
3. **Inspect**: Component hierarchy, props, state

### Console Logging

```javascript
// Add temporary logging
console.log('Debug info:', variable)

// Remove before committing
```

### Vite Error Overlay

Syntax and runtime errors display in-browser with:
- Error message
- Stack trace
- File location
- Code snippet

### Source Maps

Production builds include source maps for debugging:
- Original source code visible in browser DevTools
- Set breakpoints in original code
- Step through React component logic

## Testing

### Manual Testing Checklist

Before submitting changes:

- [ ] Application builds without errors: `npm run build`
- [ ] Linter passes: `npm run lint`
- [ ] All links work correctly
- [ ] Modal opens and closes properly
- [ ] Responsive design works on mobile
- [ ] No console errors or warnings
- [ ] Changes work in different browsers

### Browser Testing

Test in multiple browsers:
- Chrome/Edge (Chromium)
- Firefox
- Safari (if on macOS)

### Responsive Testing

Test at different viewport sizes:
- Mobile: 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1920px

Use browser DevTools device emulation.

## Code Quality

### ESLint

**Run linter**:
```bash
npm run lint
```

**Common rules**:
- React Hooks rules enforced
- Unused variables flagged
- Component naming conventions
- Best practices for React

**Fix auto-fixable issues**:
```bash
npx eslint . --fix
```

### Code Formatting

- Use 2 spaces for indentation
- Use single quotes for strings
- Add trailing commas in objects/arrays
- Keep lines under 80 characters when reasonable

### Git Workflow

1. **Pull latest changes**: `git pull origin main`
2. **Create feature branch**: `git checkout -b feature/name`
3. **Make changes and commit**: `git commit -m "feat: description"`
4. **Push to GitHub**: `git push origin feature/name`
5. **Create Pull Request** on GitHub
6. **Wait for CI checks** to pass
7. **Request review** if required
8. **Merge after approval**

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 5173 (macOS/Linux)
lsof -ti:5173 | xargs kill -9

# Kill process on port 5173 (Windows)
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

### Node Version Issues

```bash
# Check Node version
node --version

# Should be 22.x or higher
# If not, install Node.js 22 LTS
```

### Dependency Issues

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Build Failures

```bash
# Clear Vite cache
rm -rf node_modules/.vite

# Rebuild
npm run build
```

### HMR Not Working

1. Save files manually (Ctrl/Cmd + S)
2. Check browser console for errors
3. Restart dev server: `Ctrl+C` then `npm run dev`

## Performance Tips

### Optimization Strategies

1. **Keep Components Small**: Break down large components
2. **Avoid Inline Functions**: Define handlers outside render
3. **Use Keys Properly**: Stable keys for list items
4. **Lazy Load Modal**: Modal only renders when open
5. **Optimize Images**: Compress images before adding

### Bundle Size Monitoring

```bash
# Build and check bundle size
npm run build

# Output shows gzipped sizes
```

## Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) for detailed contribution guidelines.

### Quick Contribution Steps

1. Fork the repository
2. Clone your fork
3. Create a feature branch
4. Make your changes
5. Test thoroughly
6. Commit with clear messages
7. Push to your fork
8. Open a Pull Request

## Getting Help

- **Issues**: Check [GitHub Issues](https://github.com/mbianchidev/platform-engineering-roadmap/issues)
- **Discussions**: Use [GitHub Discussions](https://github.com/mbianchidev/platform-engineering-roadmap/discussions)
- **Documentation**: Read docs in `/docs` folder
- **Code of Conduct**: See [CODE_OF_CONDUCT.md](../CODE_OF_CONDUCT.md)

## Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [ESLint Documentation](https://eslint.org)
- [MDN Web Docs](https://developer.mozilla.org)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
