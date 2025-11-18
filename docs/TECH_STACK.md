# Tech Stack

## Overview

The Platform Engineering Roadmap uses modern web technologies focused on performance, developer experience, and maintainability.

## Core Technologies

### Frontend Framework
**React 19.2.0**
- **Why React**: Component-based architecture, large ecosystem, excellent performance
- **Version**: 19.x (latest stable with React Compiler support)
- **Key Features Used**:
  - Functional components with Hooks
  - `useState` for state management
  - `useEffect` for side effects (modal lifecycle)
  - StrictMode for development checks

### Build Tool
**Vite 7.2.2**
- **Why Vite**: Lightning-fast dev server, optimized builds, native ESM support
- **Features**:
  - Hot Module Replacement (HMR) for instant updates
  - Optimized production builds
  - Built-in code splitting
  - Fast cold start times
- **Plugin**: `@vitejs/plugin-react` for React Fast Refresh

### Language
**JavaScript (ES2020+)**
- **Type**: ECMAScript Modules (ESM)
- **Features Used**:
  - Arrow functions
  - Destructuring
  - Template literals
  - Optional chaining
  - Spread operator
  - Modern array methods (map, filter)

## Development Tools

### Code Quality

#### ESLint 9.39.1
- **Purpose**: Code linting and style enforcement
- **Configuration**: Flat config format (eslint.config.js)
- **Plugins**:
  - `@eslint/js@9.39.1`: Core ESLint rules
  - `eslint-plugin-react-hooks@7.0.1`: React Hooks rules enforcement
  - `eslint-plugin-react-refresh@0.4.24`: React Fast Refresh validation
- **Rules**:
  - Enforces Rules of Hooks
  - Prevents common React mistakes
  - Ensures component refresh compatibility

### Type Checking (Development)
**TypeScript Type Definitions**
- `@types/react@19.2.5`
- `@types/react-dom@19.2.3`
- **Purpose**: Provides IDE intellisense and type hints
- **Note**: Project uses JavaScript with JSDoc comments where needed

### Other Development Dependencies
- **globals@16.5.0**: Global variable definitions for ESLint

## Styling

### CSS
- **Pure CSS**: No preprocessor (Sass/Less) needed
- **Modern CSS Features**:
  - CSS Grid for layouts
  - CSS Flexbox for alignment
  - CSS Custom Properties (variables) for theming
  - CSS Animations and transitions
- **Organization**: Component-scoped CSS files

### Design Approach
- **Mobile-First**: Responsive design starting from mobile
- **BEM-ish**: Block-Element-Modifier inspired naming
- **No CSS Framework**: Custom styles for full control and minimal bundle size

## Runtime Environment

### Node.js
**Version**: 22 LTS (Jod)
- **Why Node 22**: Latest LTS with long-term support
- **Used For**:
  - Development server
  - Build process
  - CI/CD pipeline
  - Package management

### Package Manager
**npm**
- **Version**: Included with Node.js 22
- **Lock File**: package-lock.json for reproducible installs
- **Scripts**:
  - `dev`: Start development server
  - `build`: Production build
  - `preview`: Preview production build
  - `lint`: Run ESLint

## Hosting & Deployment

### Hosting Platform
**GitHub Pages**
- **Why**: Free, reliable, integrated with GitHub
- **Domain**: `mbianchidev.github.io/platform-engineering-roadmap`
- **Configuration**: 
  - Base path: `/platform-engineering-roadmap/`
  - Static file serving from `dist/` directory

### CI/CD
**GitHub Actions**
- **Workflow**: `.github/workflows/deploy.yml`
- **Trigger**: Push to main branch or manual dispatch
- **Steps**:
  1. Checkout code
  2. Setup Node.js 22
  3. Install dependencies (`npm ci`)
  4. Build application (`npm run build`)
  5. Configure GitHub Pages
  6. Upload build artifacts
  7. Deploy to GitHub Pages

### Actions Used
- `actions/checkout@v4`: Checkout repository
- `actions/setup-node@v4`: Setup Node.js environment
- `actions/configure-pages@v5`: Configure GitHub Pages
- `actions/upload-pages-artifact@v3`: Upload build artifacts
- `actions/deploy-pages@v4`: Deploy to GitHub Pages

## Dependencies Overview

### Production Dependencies
```json
{
  "react": "^19.1.1",
  "react-dom": "^19.1.1"
}
```

### Development Dependencies
```json
{
  "@eslint/js": "^9.33.0",
  "@types/react": "^19.1.10",
  "@types/react-dom": "^19.1.7",
  "@vitejs/plugin-react": "^5.0.0",
  "eslint": "^9.33.0",
  "eslint-plugin-react-hooks": "^7.0.1",
  "eslint-plugin-react-refresh": "^0.4.20",
  "globals": "^16.3.0",
  "vite": "^7.1.2"
}
```

## Browser Support

### Target Browsers
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (last 2 versions)
- **ES2020 Support Required**: Native ESM, optional chaining, etc.
- **CSS Grid and Flexbox Required**

### Polyfills
- **None Required**: Target browsers support all used features natively
- **Vite Handles**: Automatic legacy browser support via plugin if needed

## Performance Characteristics

### Bundle Size (Production)
- **HTML**: ~0.55 KB
- **CSS**: ~7.8 KB (2.1 KB gzipped)
- **JavaScript**: ~210 KB (66 KB gzipped)
- **Total**: ~218 KB (~68 KB transferred)

### Performance Features
- **Code Splitting**: Automatic by Vite
- **Tree Shaking**: Dead code elimination
- **Minification**: CSS and JS minified
- **Compression**: Gzip supported by GitHub Pages
- **CDN**: GitHub Pages CDN for global distribution

## Security

### Dependency Management
- **Regular Updates**: Dependencies updated to latest stable versions
- **Security Audits**: `npm audit` run regularly
- **Known Vulnerabilities**: Zero vulnerabilities (as of latest update)
- **Advisory Database**: All dependencies checked against GitHub Advisory Database

### Security Headers
- **GitHub Pages**: Provides standard security headers
- **CSP**: Content Security Policy enforced
- **HTTPS**: Enforced on GitHub Pages domain

### Build Security
- **No Secrets in Code**: All configuration is public
- **Locked Dependencies**: package-lock.json ensures reproducible builds
- **Verified Actions**: Only official GitHub Actions used in workflow

## Development Experience

### Hot Module Replacement (HMR)
- **Instant Updates**: Changes reflect immediately without full reload
- **State Preservation**: Component state preserved during updates
- **React Fast Refresh**: Component updates without losing state

### IDE Support
- **IntelliSense**: Full autocomplete via TypeScript definitions
- **Error Detection**: ESLint integration in popular IDEs
- **Code Navigation**: Jump to definition, find references

### Developer Tools
- **React DevTools**: Component inspection and profiling
- **Browser DevTools**: Standard debugging capabilities
- **Source Maps**: Debug original source code in production

## Technology Decisions

### Why This Stack?

**React**: 
- Industry standard with excellent ecosystem
- Efficient updates with Virtual DOM
- Hooks provide clean state management
- Large community and resources

**Vite**:
- Significantly faster than webpack during development
- Optimized production builds
- Native ESM support
- Minimal configuration required

**No State Management Library**:
- Application state is simple (one piece of state)
- Prop drilling is minimal
- Avoids unnecessary complexity and bundle size

**No UI Framework**:
- Custom design provides unique identity
- Smaller bundle size
- Full control over styling
- Better performance

**Node.js 22 LTS**:
- Latest long-term support version
- Security updates guaranteed
- Modern JavaScript features
- Best performance

## Future Technology Considerations

### Potential Additions
1. **TypeScript**: For larger team or more complex features
2. **React Router**: If multi-page navigation is needed
3. **Zustand/Jotai**: Lightweight state management if complexity grows
4. **Vitest**: For unit and integration testing
5. **Playwright**: For end-to-end testing
6. **Storybook**: For component development and documentation
7. **PWA**: Service workers for offline support
8. **Analytics**: User behavior tracking (privacy-respecting)

### Upgrade Path
- All dependencies use semantic versioning
- Regular updates to stay current with security patches
- Vite and React have clear migration guides
- ESLint flat config is future-proof
