# Contributing to Platform Engineering Roadmap

Thank you for your interest in contributing to the Platform Engineering Roadmap!

One rule: No vendor pitches allowed.

## How to Contribute

I want this roadmap to be useful to the largest amount of people, and if you want to help, you are very welcome. 

Any contribution matters, whether that's an input, feedback, or even a PR.

## Ways to Contribute

### 1. Suggest New Topics
If you think a topic is missing or should be added to the roadmap:
- Open an issue describing the topic
- Explain why it's relevant to Platform Engineering
- Provide resources or references if possible

### 2. Improve Existing Content
- Fix typos or grammatical errors
- Add better descriptions to existing topics
- Add helpful resources and links
- Improve the overall clarity

### 3. Report Issues
Found a bug or something that doesn't work as expected?
- Open an issue with a clear description
- Include steps to reproduce if applicable

### 4. Submit Pull Requests
1. Fork the repository
2. Create a new branch for your changes
3. Make your changes
4. Test your changes locally
5. Submit a pull request with a clear description

## Development Setup

Use Node.js 22 (the CI version) or a supported newer LTS release.

```bash
# Clone the repository
git clone https://github.com/mbianchidev/platform-engineering-roadmap.git
cd platform-engineering-roadmap

# Restore locked dependencies
npm ci

# Run the development server
npm run dev

# Build the project
npm run build

# Lint the code
npm run lint

# Run unit tests
npm test

# Install the browser once, then run desktop and mobile interaction tests
npx playwright install chromium
npm run test:e2e
```

The browser tests build the production site and serve it on `127.0.0.1:4179`; that port must be free. On Linux, use `npx playwright install --with-deps chromium` if browser system dependencies are missing. Test output is written to the ignored `test-results/` directory.

Roadmap content lives in `src/data/roadmapData.js`. Keep topic IDs stable because shared topic URLs use them. The atlas searches existing content without changing it, and its branch lines represent categories rather than prerequisites.

## Code Style

Please follow the existing code style and conventions used in the project.

## Questions?

Feel free to open an issue if you have any questions about contributing!

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
