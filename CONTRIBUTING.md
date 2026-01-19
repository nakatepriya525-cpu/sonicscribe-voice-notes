# Contributing to SonicScribe

Thank you for your interest in contributing to SonicScribe! This document provides guidelines for contributing to the project.

## 🎯 Project Goals

SonicScribe aims to be a professional, accessible voice-controlled smart notes application. All contributions should align with these core principles:

1. **Accessibility**: Make note-taking accessible to everyone
2. **Performance**: Keep the app fast and responsive
3. **User Experience**: Prioritize intuitive, clean interfaces
4. **Code Quality**: Maintain high standards for code quality

## 🚀 Getting Started

1. **Fork the repository**
2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/sonicscribe-voice-notes.git
   ```
3. **Create a branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes**
5. **Test your changes**
6. **Commit with clear messages**:
   ```bash
   git commit -m "Add: Brief description of your changes"
   ```
7. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
8. **Create a Pull Request**

## 📝 Commit Message Guidelines

Use clear, descriptive commit messages:

- `Add: New feature or functionality`
- `Fix: Bug fix`
- `Update: Improvements to existing features`
- `Refactor: Code restructuring`
- `Docs: Documentation changes`
- `Style: Code formatting, no logic changes`
- `Test: Adding or updating tests`

Examples:
```
Add: Voice command parser for note operations
Fix: Speech recognition not stopping on Safari
Update: Improve note search performance
Docs: Add API documentation for notes endpoint
```

## 🏗️ Code Style

### TypeScript/React

- Use TypeScript for type safety
- Follow React best practices and hooks guidelines
- Use functional components
- Keep components small and focused
- Use meaningful variable and function names

```typescript
// Good
const handleSaveNote = () => {
  // Implementation
};

// Avoid
const func1 = () => {
  // Implementation
};
```

### CSS

- Use CSS variables for theming
- Follow BEM naming convention when appropriate
- Keep styles modular and component-specific

```css
/* Good */
.note-item {
  padding: 1rem;
}

.note-item__title {
  font-size: 1.2rem;
}

/* Avoid */
.ni {
  padding: 1rem;
}
```

## 🧪 Testing

- Write tests for new features
- Ensure existing tests pass
- Test on multiple browsers (Chrome, Edge, Safari)
- Test voice recognition functionality

## 📚 Documentation

- Update README.md if adding new features
- Add JSDoc comments for complex functions
- Update relevant documentation in `/docs`

## 🐛 Reporting Bugs

When reporting bugs, please include:

1. **Description**: Clear description of the issue
2. **Steps to Reproduce**: Detailed steps to reproduce the bug
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Environment**: Browser, OS, version
6. **Screenshots**: If applicable

## 💡 Suggesting Features

Feature suggestions are welcome! Please:

1. Check if the feature already exists or is planned
2. Clearly describe the feature and its benefits
3. Explain use cases
4. Consider implementation complexity

## 🔍 Code Review Process

All submissions require review. We'll:

1. Review code quality and style
2. Test functionality
3. Check for breaking changes
4. Provide constructive feedback

## ⚖️ License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You!

Your contributions help make SonicScribe better for everyone!

---

**Questions?** Contact: nakatepriya525@gmail.com