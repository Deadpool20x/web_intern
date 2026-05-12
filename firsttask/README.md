# React Internship Project

This project demonstrates React concepts including component modularity, state management, prop injection, and environment configuration built with Vite.

## Technical Documentation

### i. Virtual DOM and Stamina Updates
The Virtual DOM creates a lightweight copy of the actual DOM, allowing React to efficiently calculate the minimum number of DOM mutations needed when state changes. When the stamina state updates via the "Write Code" button, React compares the new Virtual DOM tree with the previous one and only updates the specific DOM nodes that changed (the stamina percentage, progress bar width, and button state), resulting in optimal rendering performance.

### ii. Modulus Logic for 5th-Click Bug
```javascript
const burnAmount = newCount % 5 === 0 ? 15 : 2;
setStamina((prevStamina) => {
  const nextStamina = prevStamina - burnAmount;
  return nextStamina < 0 ? 0 : nextStamina; // Constraint: Cannot go below 0
});
```

### iii. 3 Differences Between Vite and Create React App (CRA)
1. **Development Server Speed**: Vite uses native ES modules and provides instant server startup with lightning-fast HMR, while CRA uses Webpack which has slower cold starts and incremental builds.
2. **Build Tooling**: Vite leverages Rollup for production builds with optimized chunking and code splitting, whereas CRA relies on Webpack's more mature but often slower bundling process.
3. **Configuration Simplicity**: Vite requires minimal configuration out-of-the-box with sensible defaults, while CRA often necessitates ejecting or using react-scripts overrides for customization needs.