# Alethia News - Reorganized File Structure

## ✅ REORGANIZATION COMPLETE!

Your website has been successfully reorganized. All HTML pages (except index.html) are now in the `pages/` folder, and all links have been updated.

---

## 📁 New File Structure

```
Your Website/
├── index.html          ← Main homepage (stays in root)
├── style.css           ← CSS styles (stays in root)
├── menu.js             ← Menu functionality (stays in root)
├── search.js           ← Search functionality (stays in root)
│
├── pages/              ← NEW FOLDER - All other pages
│   ├── about.html
│   ├── africa.html
│   ├── africa-drc.html
│   ├── africa-namibia.html
│   ├── africa-sudan.html
│   ├── america.html
│   ├── china.html
│   ├── china-byd.html
│   ├── china-executions.html
│   ├── china-japan.html
│   ├── contact.html
│   ├── ethics.html
│   ├── europe.html
│   ├── europe-bulgaria.html
│   ├── europe-denmark.html
│   ├── europe-france-x.html
│   ├── global-china-uruguay.html
│   ├── global-epstein-files.html
│   ├── global-new-start.html
│   ├── india.html
│   ├── india-budget.html
│   ├── india-cricket.html
│   ├── india-trade.html
│   ├── japan.html
│   ├── japan-abe.html
│   ├── japan-election.html
│   ├── japan-snowfall.html
│   ├── middle_east.html
│   ├── mideast-gaza.html
│   ├── mideast-iran.html
│   ├── mideast-israel.html
│   ├── russia.html
│   ├── russia-economy.html
│   ├── russia-energy.html
│   ├── russia-start.html
│   ├── sources.html
│   ├── usa-immigration.html
│   ├── usa-india-trade.html
│   └── usa-spending.html
│
└── images/             ← Your images folder (when you add it)
    ├── global1.jpg
    ├── usa1.jpg
    └── ...
```

---

## 🔄 What Changed

### Before:
```
/
├── index.html
├── about.html          ← All in root
├── africa.html         ← All in root
├── europe.html         ← All in root
├── ... (all pages)     ← All in root
```

### After:
```
/
├── index.html          ← Only homepage in root
├── style.css
├── menu.js
├── search.js
└── pages/
    ├── about.html      ← All pages now here
    ├── africa.html     ← All pages now here
    ├── europe.html     ← All pages now here
    └── ... (all other pages)
```

---

## ✅ All Links Updated

Every single link has been automatically updated:

### In index.html:
- ✅ Side menu: `about.html` → `pages/about.html`
- ✅ Navigation: `europe.html` → `pages/europe.html`
- ✅ Article links: `articles/africa-drc.html` → `pages/africa-drc.html`

### In pages/*.html files:
- ✅ Links to homepage: `index.html` → `../index.html`
- ✅ CSS/JS: `style.css` → `../style.css`
- ✅ Images: `images/pic.jpg` → `../images/pic.jpg`
- ✅ Regional navigation: All pages stay as `europe.html`, `africa.html`, etc.
- ✅ Internal links: About, sources, ethics, contact all work

---

## 🚀 How to Use

### Option 1: Local Testing
1. Extract all files
2. Open `index.html` in your browser
3. Everything works!

### Option 2: Deploy to Web Host
1. Upload ENTIRE folder structure to your web host
2. Keep the structure exactly as-is:
   - index.html in root
   - pages/ folder with all pages
   - style.css, menu.js, search.js in root
   - images/ folder in root (when you add images)

### Option 3: GitHub Pages / Netlify
1. Upload to your repository/drag to Netlify
2. Make sure to include:
   - index.html (root)
   - pages/ folder
   - style.css, menu.js, search.js
   - images/ folder

---

## 📝 File Count

- **Total HTML files**: 43
  - Root: 1 (index.html)
  - Pages folder: 42 (all other pages)
- **CSS files**: 1 (style.css)
- **JS files**: 2 (menu.js, search.js)

---

## 🎯 Benefits of This Organization

### 1. **Cleaner Root Directory**
- Only essential files in root
- Easier to find index.html
- Professional structure

### 2. **Better Organization**
- All content pages grouped together
- Easier to manage
- Easier to backup

### 3. **Scalability**
- Can easily add more pages to `pages/`
- Can create subfolders within `pages/` if needed
- Clean separation of concerns

### 4. **Deployment-Ready**
- Standard web hosting structure
- Works with any web host
- Compatible with GitHub Pages, Netlify, Vercel

---

## ⚠️ Important Notes

1. **DO NOT** change the folder structure
   - Keep pages/ folder as-is
   - Keep index.html in root
   - All links depend on this exact structure

2. **When adding images:**
   - Create `images/` folder in root (same level as index.html)
   - Links are already set up as `../images/` from pages/

3. **When adding new pages:**
   - Add them to `pages/` folder
   - Use existing pages as templates
   - Links to CSS/JS should use `../style.css`, `../menu.js`, etc.

---

## 🔍 Testing Checklist

✅ Homepage loads correctly
✅ Navigation bar works
✅ Side menu opens/closes
✅ Regional pages load (Europe, Africa, China, etc.)
✅ Article detail pages load
✅ About/Contact/Ethics pages work
✅ All styles applied correctly
✅ Search functionality works
✅ "Back to region" links work

---

## 📧 Need Help?

If anything doesn't work:
1. Check file structure matches above exactly
2. Make sure `pages/` folder exists
3. Verify all files are in correct locations
4. Check browser console for errors (F12)

---

## 🎉 You're All Set!

Your website is now organized, professional, and ready to deploy!

**Next steps:**
1. Test locally by opening index.html
2. Add images to `images/` folder when ready
3. Deploy to your web host or GitHub Pages

---

**Last updated**: February 7, 2026
**Structure**: Root → index.html | Pages → all other HTML files
