# Deployment Guide

## Overview

The Platform Engineering Roadmap is automatically deployed to GitHub Pages using GitHub Actions. Every push to the `main` branch triggers a build and deployment.

## Deployment Process

### Automated Deployment (CI/CD)

The application uses GitHub Actions for continuous deployment:

**Workflow File**: `.github/workflows/deploy.yml`

**Triggers**:
- Push to `main` branch
- Manual workflow dispatch (via Actions tab)

**Process**:
1. Code checkout
2. Node.js 22 setup with npm cache
3. Dependency installation
4. Production build
5. GitHub Pages configuration
6. Artifact upload
7. Deployment to GitHub Pages

### Deployment Steps Detail

#### 1. Checkout
```yaml
- name: Checkout
  uses: actions/checkout@v4
```
Clones the repository code.

#### 2. Node.js Setup
```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '22'
    cache: 'npm'
```
- Installs Node.js 22 LTS
- Caches npm dependencies for faster builds

#### 3. Install Dependencies
```yaml
- name: Install dependencies
  run: npm ci
```
- Uses `npm ci` for clean, reproducible installs
- Faster than `npm install` in CI environment
- Ensures exact versions from package-lock.json

#### 4. Build
```yaml
- name: Build
  run: npm run build
```
- Runs Vite production build
- Outputs to `dist/` directory
- Minifies and optimizes assets
- Generates source maps

#### 5. Configure Pages
```yaml
- name: Setup Pages
  uses: actions/configure-pages@v5
```
Configures GitHub Pages settings.

#### 6. Upload Artifact
```yaml
- name: Upload artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: './dist'
```
Packages the `dist/` directory for deployment.

#### 7. Deploy
```yaml
- name: Deploy to GitHub Pages
  id: deployment
  uses: actions/deploy-pages@v4
```
Deploys the built site to GitHub Pages.

## Build Configuration

### Vite Configuration

**File**: `vite.config.js`

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/platform-engineering-roadmap/',
})
```

**Key Settings**:
- `base`: Sets the base path for GitHub Pages subdirectory deployment
- `plugins`: Enables React Fast Refresh and JSX transformation

### Build Output

**Directory**: `dist/`

**Structure**:
```
dist/
├── index.html              # Main HTML file
├── assets/
│   ├── index-[hash].js     # JavaScript bundle
│   └── index-[hash].css    # CSS bundle
└── vite.svg                # Static assets
```

**Characteristics**:
- Content-hashed filenames for cache busting
- Minified and optimized code
- Source maps for debugging
- Gzipped by GitHub Pages CDN

## GitHub Pages Configuration

### Repository Settings

1. **Navigate to**: Repository → Settings → Pages
2. **Source**: GitHub Actions (automatically configured by workflow)
3. **Branch**: Deployment from Actions (not direct branch)
4. **Custom Domain**: None (using default `github.io` subdomain)

### URL Structure

**Production URL**: 
```
https://mbianchidev.github.io/platform-engineering-roadmap/
```

**Components**:
- `mbianchidev.github.io`: GitHub Pages base domain
- `/platform-engineering-roadmap/`: Repository name path

### Base Path Handling

All internal links and asset references use the base path:
```javascript
// Configured in vite.config.js
base: '/platform-engineering-roadmap/'
```

This ensures:
- CSS/JS files load correctly
- Images and assets resolve properly
- Internal links work in subdirectory

## Manual Deployment

### Local Build and Deploy

If automatic deployment fails, you can deploy manually:

1. **Build locally**:
   ```bash
   npm ci
   npm run build
   ```

2. **Verify build**:
   ```bash
   npm run preview
   # Check http://localhost:4173/platform-engineering-roadmap/
   ```

3. **Deploy via GitHub UI**:
   - Go to Actions tab
   - Select "Deploy to GitHub Pages" workflow
   - Click "Run workflow"
   - Select `main` branch
   - Click "Run workflow"

### Force Redeploy

To force a redeployment without code changes:

1. Navigate to Actions tab
2. Select latest workflow run
3. Click "Re-run all jobs"

## Environment Variables

### Build-Time Variables

No environment variables are currently required. All configuration is in:
- `vite.config.js`: Build configuration
- `src/data/roadmapData.js`: Content data

### Future Considerations

For dynamic content or API integration:
- Use `.env` files (not committed)
- Reference via `import.meta.env.VITE_*` in code
- Configure in GitHub Actions secrets

## Deployment Verification

### Post-Deployment Checks

After deployment, verify:

1. **Site Loads**: Visit production URL
2. **Assets Load**: Check browser DevTools Network tab
3. **No Console Errors**: Open browser console
4. **Interactive Features**: 
   - Click topic cards
   - Open/close modal
   - Navigate sections
5. **Responsive Design**: Test on mobile/tablet
6. **Links Work**: Test external resource links

### Monitoring Deployment Status

**Via GitHub Actions**:
1. Go to repository → Actions tab
2. View latest workflow run
3. Check job status (build, deploy)
4. Review logs for errors

**Via Deployments**:
1. Go to repository → Environments → github-pages
2. View deployment history
3. Check deployment status and URL

## Performance

### CDN and Caching

GitHub Pages provides:
- **Global CDN**: Fast content delivery worldwide
- **HTTPS**: Automatic SSL/TLS encryption
- **Compression**: Automatic Gzip/Brotli compression
- **Caching**: Browser and CDN caching

### Build Optimization

Vite automatically handles:
- **Code Splitting**: Separate chunks for better caching
- **Tree Shaking**: Removes unused code
- **Minification**: Reduces file sizes
- **Asset Optimization**: Optimizes images and fonts

### Performance Metrics

**Target Performance**:
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Total Bundle Size: < 250 KB (gzipped < 100 KB)

**Monitor via**:
- Chrome DevTools Lighthouse
- WebPageTest
- Google PageSpeed Insights

## Rollback Procedure

### Reverting a Deployment

If a deployment introduces issues:

1. **Identify Last Working Commit**:
   ```bash
   git log --oneline
   ```

2. **Revert to Previous Commit**:
   ```bash
   git revert <commit-hash>
   git push origin main
   ```
   This triggers automatic redeployment.

3. **Or Reset Branch** (force push):
   ```bash
   git reset --hard <good-commit-hash>
   git push origin main --force
   ```
   **Warning**: Force push should be used cautiously.

### Emergency Procedure

If the site is completely broken:

1. Disable GitHub Pages temporarily:
   - Settings → Pages → Source → None

2. Fix the issue in a branch

3. Test thoroughly locally

4. Merge to main and re-enable Pages

## Troubleshooting

### Build Fails in CI

**Check**:
- GitHub Actions logs for error messages
- Dependency version conflicts
- Linting errors
- Build errors

**Solutions**:
```bash
# Test build locally
npm ci
npm run lint
npm run build

# Fix errors and push
git commit -am "fix: resolve build errors"
git push
```

### Deployment Succeeds but Site Doesn't Work

**Common Issues**:

1. **Wrong Base Path**:
   - Check `vite.config.js` has correct `base`
   - Should match repository name

2. **Assets Not Loading**:
   - Verify `dist/` contains all files
   - Check Network tab in browser DevTools
   - Ensure paths start with `/platform-engineering-roadmap/`

3. **404 Errors**:
   - Confirm GitHub Pages is enabled
   - Check repository settings
   - Verify deployment completed successfully

### Deployment Takes Too Long

**Typical Duration**: 2-5 minutes

**If Longer**:
- Check GitHub Status page for incidents
- Review Actions logs for hanging steps
- Cancel and restart workflow if stuck

### Changes Don't Appear

**Possible Causes**:

1. **Browser Cache**:
   - Hard refresh: Ctrl+Shift+R (Cmd+Shift+R on Mac)
   - Clear cache and reload

2. **CDN Cache**:
   - Wait 5-10 minutes for CDN propagation
   - Content-hashed filenames prevent cache issues

3. **Deployment Didn't Run**:
   - Check Actions tab for workflow run
   - Verify push was to `main` branch

## Security

### Deployment Security

**Permissions**:
- Workflow uses `GITHUB_TOKEN` with minimal permissions
- `contents: read` - Read repository code
- `pages: write` - Write to GitHub Pages
- `id-token: write` - Authentication token

**Best Practices**:
- No secrets in code (all configuration is public)
- Dependencies verified via npm audit
- Automated security scanning
- HTTPS enforced by GitHub Pages

### Content Security

**Measures**:
- All external links use `rel="noopener noreferrer"`
- No user-generated content
- Static site with no backend
- No cookies or tracking (privacy-friendly)

## Advanced Topics

### Custom Domain Setup

To use a custom domain:

1. **Add CNAME Record**: In your DNS provider
   ```
   CNAME @ mbianchidev.github.io
   ```

2. **Configure in GitHub**:
   - Settings → Pages → Custom domain
   - Enter your domain
   - Enable "Enforce HTTPS"

3. **Update Vite Config**:
   ```javascript
   base: '/',  // Change from '/platform-engineering-roadmap/'
   ```

### Preview Deployments

For PR previews (requires additional setup):

1. Use services like Netlify, Vercel, or Cloudflare Pages
2. Configure preview deployments for pull requests
3. Automatic preview URLs for each PR

### Multiple Environments

To add staging environment:

1. Create `staging` branch
2. Duplicate workflow for staging
3. Deploy to different GitHub Pages instance or external host

## Monitoring and Analytics

### GitHub Insights

**Traffic Stats**:
- Repository → Insights → Traffic
- View page views and unique visitors
- No user tracking or cookies

### Adding Analytics (Optional)

If analytics are needed:

1. **Privacy-Friendly Options**:
   - Plausible Analytics
   - Simple Analytics
   - Fathom Analytics

2. **Implementation**:
   - Add script to `index.html`
   - Configure in build environment
   - Ensure GDPR compliance

## Cost

**Total Cost**: $0

GitHub Pages is free for public repositories:
- Unlimited bandwidth
- Unlimited builds
- Global CDN included
- HTTPS certificate included

**Limitations**:
- 1 GB soft limit for site size
- 100 GB/month bandwidth soft limit
- 10 builds per hour

Current usage is well within these limits.

## Support

**Deployment Issues**:
1. Check [GitHub Status](https://www.githubstatus.com/)
2. Review [GitHub Pages Documentation](https://docs.github.com/en/pages)
3. Search [GitHub Community Forum](https://github.community/)
4. Open issue in repository

**Build Issues**:
1. Check workflow logs
2. Test locally with same Node.js version
3. Review recent commits for breaking changes
4. Open issue with error details
