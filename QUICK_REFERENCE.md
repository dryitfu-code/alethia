# Quick Reference: Link Changes

## Summary
✅ 43 HTML files reorganized
✅ 1 file stays in root (index.html)
✅ 42 files moved to pages/ folder
✅ ALL links updated automatically

---

## Link Patterns Changed

### In index.html (root level):
| Old Link | New Link |
|----------|----------|
| `<a href="about.html">` | `<a href="pages/about.html">` |
| `<a href="europe.html">` | `<a href="pages/europe.html">` |
| `<a href="africa.html">` | `<a href="pages/africa.html">` |
| `<a href="articles/africa-drc.html">` | `<a href="pages/africa-drc.html">` |

### In pages/*.html files:
| Old Link | New Link |
|----------|----------|
| `<a href="index.html">` | `<a href="../index.html">` |
| `<link href="style.css">` | `<link href="../style.css">` |
| `<script src="menu.js">` | `<script src="../menu.js">` |
| `<img src="images/pic.jpg">` | `<img src="../images/pic.jpg">` |
| `<a href="europe.html">` | `<a href="europe.html">` (same folder) |

### In article detail pages (pages/*-*.html):
| Old Link | New Link |
|----------|----------|
| `<a href="../about.html">` | `<a href="about.html">` |
| `<a href="../africa.html">` | `<a href="africa.html">` |
| `<link href="../style.css">` | `<link href="../style.css">` (stays same) |
| `<a href="../index.html">` | `<a href="../index.html">` (stays same) |

---

## File Locations

### Root Directory (/):
- index.html ✅
- style.css ✅
- menu.js ✅
- search.js ✅

### Pages Directory (/pages/):
- about.html ✅
- africa.html ✅
- africa-drc.html ✅
- africa-namibia.html ✅
- africa-sudan.html ✅
- america.html ✅
- china.html ✅
- china-byd.html ✅
- china-executions.html ✅
- china-japan.html ✅
- contact.html ✅
- ethics.html ✅
- europe.html ✅
- europe-bulgaria.html ✅
- europe-denmark.html ✅
- europe-france-x.html ✅
- global-china-uruguay.html ✅
- global-epstein-files.html ✅
- global-new-start.html ✅
- india.html ✅
- india-budget.html ✅
- india-cricket.html ✅
- india-trade.html ✅
- japan.html ✅
- japan-abe.html ✅
- japan-election.html ✅
- japan-snowfall.html ✅
- middle_east.html ✅
- mideast-gaza.html ✅
- mideast-iran.html ✅
- mideast-israel.html ✅
- russia.html ✅
- russia-economy.html ✅
- russia-energy.html ✅
- russia-start.html ✅
- sources.html ✅
- usa-immigration.html ✅
- usa-india-trade.html ✅
- usa-spending.html ✅

---

## How to Test

1. **Open index.html**
   - Should load homepage
   - Navigation should show Global, European, American, etc.

2. **Click "How Alethia News Works" in side menu**
   - Should open pages/about.html
   - Page should have styles
   - Clicking homepage should return to index.html

3. **Click "European" in navigation**
   - Should open pages/europe.html
   - All styles should work
   - Navigation should work

4. **Click an article headline**
   - Should open article detail page (e.g., pages/europe-bulgaria.html)
   - "Back to European News" should work
   - All styles should apply

5. **Test search**
   - Type in search box
   - Articles should filter

---

## Common Issues & Fixes

### ❌ "Page not found" error
**Cause**: Files not in correct folders
**Fix**: Make sure pages/ folder exists with all 42 HTML files

### ❌ No styles (plain text)
**Cause**: CSS path incorrect
**Fix**: Verify style.css is in root, not in pages/

### ❌ Navigation doesn't work
**Cause**: Links not updated
**Fix**: Download the reorganized files again

### ❌ Images don't show
**Cause**: images/ folder missing or in wrong location
**Fix**: Create images/ folder in root (same level as index.html)

---

## Deployment Checklist

Before uploading to web host:

- [ ] index.html is in root directory
- [ ] pages/ folder exists with all 42 HTML files
- [ ] style.css is in root
- [ ] menu.js is in root
- [ ] search.js is in root
- [ ] images/ folder in root (when you add images)
- [ ] Tested locally by opening index.html

---

## File Verification

Total files in output:
- **Root**: 4 files (index.html, style.css, menu.js, search.js)
- **pages/**: 42 HTML files
- **Total**: 46 files + 1 folder

Run this command to verify (in terminal/command prompt):
```bash
# Count HTML files in pages
ls pages/*.html | wc -l
# Should output: 42

# List root files
ls *.html *.css *.js
# Should show: index.html style.css menu.js search.js
```

---

**Everything is ready to use!** 🎉
