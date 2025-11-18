# Architecture

## Overview

The Platform Engineering Roadmap is a single-page application (SPA) built with React. It follows a component-based architecture with a clear separation of concerns between presentation, state management, and data.

## Application Structure

```
platform-engineering-roadmap/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx       # Site header with title and description
│   │   ├── RoadmapSection.jsx  # Section container for topic groups
│   │   ├── TopicCard.jsx    # Individual topic card with preview
│   │   ├── Modal.jsx        # Detail view for topics
│   │   └── Footer.jsx       # Site footer
│   ├── data/
│   │   └── roadmapData.js   # Structured roadmap content
│   ├── assets/              # Static assets (images, icons)
│   ├── App.jsx              # Root component
│   ├── App.css              # Global styles
│   ├── main.jsx             # Application entry point
│   └── index.css            # Base CSS
├── public/                  # Public static assets
├── .github/workflows/       # CI/CD configuration
└── vite.config.js          # Build configuration
```

## Component Architecture

### Component Hierarchy

```
App (Root)
├── Header
├── Main Content
│   └── RoadmapSection (multiple)
│       └── TopicCard (multiple)
├── Footer
└── Modal (conditional)
```

### Component Responsibilities

#### App.jsx
- **Purpose**: Root component managing application state
- **State**: 
  - `selectedTopic`: Currently selected topic for modal display
- **Responsibilities**:
  - Coordinate data flow between components
  - Manage modal visibility state
  - Render main layout structure

#### Header.jsx
- **Purpose**: Display site branding and description
- **Props**: `data` (roadmap metadata)
- **Responsibilities**:
  - Render site title and tagline
  - Display header content

#### RoadmapSection.jsx
- **Purpose**: Group and display related topics
- **Props**: 
  - `section` (section data including title, description, topics)
  - `onTopicClick` (callback for topic selection)
- **Responsibilities**:
  - Render section header
  - Create grid layout for topic cards
  - Pass click handlers to child components

#### TopicCard.jsx
- **Purpose**: Display topic preview with interactive card
- **Props**: 
  - `topic` (topic data)
  - `onClick` (click handler)
- **Responsibilities**:
  - Display topic title and description
  - Show subtopic count and preview
  - Provide visual feedback for interaction

#### Modal.jsx
- **Purpose**: Display detailed topic information
- **Props**: 
  - `topic` (selected topic data)
  - `onClose` (close handler)
- **Responsibilities**:
  - Show full topic content
  - Display subtopics with descriptions
  - Provide external resource links
  - Handle keyboard (Escape) and backdrop click events
  - Manage body scroll lock when open

#### Footer.jsx
- **Purpose**: Display footer information
- **Responsibilities**:
  - Render footer content and links

## Data Flow

### Unidirectional Data Flow

```
roadmapData.js
      ↓
    App.jsx
      ↓
  [Props passing]
      ↓
Child Components
```

1. **Data Source**: Static data defined in `src/data/roadmapData.js`
2. **App Component**: Imports and owns the data, passes to children via props
3. **Child Components**: Receive data through props, remain stateless where possible
4. **Event Flow**: User interactions bubble up through callbacks (e.g., `onTopicClick`)

### State Management

The application uses React's built-in state management:

- **Local State**: Managed in `App.jsx` using `useState` hook
- **No External State Library**: Application complexity doesn't warrant Redux/MobX
- **State Updates**: Triggered by user interactions (topic selection, modal close)

```javascript
// Example state management in App.jsx
const [selectedTopic, setSelectedTopic] = useState(null)

const openModal = (topic) => {
  setSelectedTopic(topic)
}

const closeModal = () => {
  setSelectedTopic(null)
}
```

## Data Model

### Roadmap Data Structure

```javascript
{
  title: String,              // Site title
  description: String,        // Site description
  image: String,             // Hero image path
  sections: [                // Array of topic sections
    {
      id: String,            // Unique section identifier
      title: String,         // Section display name
      description: String,   // Section description
      topics: [              // Array of topics in this section
        {
          id: String,        // Unique topic identifier
          title: String,     // Topic display name
          description: String, // Short description
          content: String,   // Detailed content for modal
          links: [           // External resources
            {
              title: String, // Link display text
              url: String    // Link URL
            }
          ],
          subtopics: [       // Related sub-topics
            {
              name: String,  // Subtopic name
              description: String // Subtopic description
            }
          ]
        }
      ]
    }
  ]
}
```

## Design Patterns

### Component Composition
- Components are composed hierarchically
- Each component has a single responsibility
- Props are used for component configuration and data passing

### Presentational vs Container Components
- **Container**: `App.jsx` manages state and logic
- **Presentational**: All other components focus on display
- Clear separation enables easier testing and maintenance

### Event Handling
- Event handlers are defined at the appropriate level
- Callbacks are passed down as props
- Events bubble up through callback invocation

### Conditional Rendering
- Modal is conditionally rendered based on state
- Content elements (links, subtopics) render based on data presence
- Uses short-circuit evaluation and ternary operators

```javascript
{selectedTopic && <Modal topic={selectedTopic} onClose={closeModal} />}
```

## Styling Approach

### CSS Modules per Component
Each component has a corresponding CSS file:
- `Header.jsx` → `Header.css`
- `TopicCard.jsx` → `TopicCard.css`
- etc.

### Global Styles
- `index.css`: CSS reset and base styles
- `App.css`: Layout and theme variables

### Responsive Design
- Mobile-first approach
- CSS Grid and Flexbox for layouts
- Media queries for breakpoints

## Performance Considerations

### Optimization Strategies
1. **Component Keys**: Proper key usage in lists for efficient reconciliation
2. **Event Handler Stability**: Callbacks defined to prevent unnecessary re-renders
3. **Lazy Loading**: Modal content only rendered when needed
4. **CSS Grid**: Efficient layout without JavaScript calculation

### Bundle Optimization
- Vite handles code splitting and optimization
- React production build removes development overhead
- Static site generation for fast initial load

## Accessibility

### ARIA and Semantic HTML
- Modal uses proper ARIA attributes
- Semantic HTML elements (`header`, `main`, `section`, `footer`)
- Keyboard navigation support (Escape to close modal)

### Focus Management
- Modal traps focus when open
- Backdrop click closes modal
- Body scroll prevention when modal is active

## Future Architectural Considerations

### Potential Enhancements
1. **Search Functionality**: Add topic search/filter capability
2. **Progress Tracking**: User progress persistence (localStorage/backend)
3. **Dark Mode**: Theme switching support
4. **Internationalization**: Multi-language support
5. **Animation**: Smooth transitions and micro-interactions
6. **Progressive Web App**: Offline support and installability
