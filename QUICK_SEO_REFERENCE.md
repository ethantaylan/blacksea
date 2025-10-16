# Quick SEO Reference Card

## 🚀 What to Do After Deployment

### 1. Add Required Images (IMPORTANT)
Upload these to `/public/` directory:

```
/public/og-image.jpg       → 1200x630px for social sharing
/public/logo.png           → Your logo for schema markup
/public/apple-touch-icon.png → 180x180px for iOS
```

### 2. Update URLs in index.html
Replace `https://blacksea.agency` with your actual domain in:
- Line 32: `og:url`
- Line 35: `og:image`
- Line 42: `twitter:url`
- Line 45: `twitter:image`
- Line 53: Canonical URL
- Line 64-65: Organization schema URL and logo
- Lines 95-99: WebSite schema URLs

### 3. Update Social Links
In `/index.html` lines 67-70, replace with your actual social media URLs:
```json
"sameAs": [
  "https://www.linkedin.com/company/YOUR-COMPANY",
  "https://twitter.com/YOUR-HANDLE",
  "https://www.instagram.com/YOUR-HANDLE"
]
```

### 4. Submit to Search Engines

**Google Search Console**
1. Go to https://search.google.com/search-console
2. Add your property
3. Verify ownership (DNS or HTML file)
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

**Bing Webmaster Tools**
1. Go to https://www.bing.com/webmasters
2. Add your site
3. Submit sitemap

### 5. Test Your SEO

Run these checks AFTER deployment:

✅ **PageSpeed Insights**: https://pagespeed.web.dev/
   - Test mobile and desktop
   - Aim for 90+ score

✅ **Facebook Sharing**: https://developers.facebook.com/tools/debug/
   - Enter your URL
   - Click "Scrape Again"
   - Verify image and text appear correctly

✅ **Twitter Card**: https://cards-dev.twitter.com/validator
   - Test your homepage URL
   - Verify card preview

✅ **Schema Validator**: https://validator.schema.org/
   - Enter your URL
   - Check for errors in structured data

✅ **Lighthouse**:
   - Open Chrome DevTools (F12)
   - Go to Lighthouse tab
   - Run audit for Performance, Accessibility, SEO

### 6. Analytics Setup

**Via Google Tag Manager** (already installed):
1. Go to https://tagmanager.google.com
2. Create GA4 tag in GTM container `GTM-M5LKL552`
3. Add your GA4 Measurement ID
4. Publish container

---

## 📝 How to Add SEO to New Pages

When creating a new page, add the SEO component:

```tsx
import { SEO } from "../../components/SEO/SEO";

export default function MyNewPage() {
  return (
    <>
      <SEO
        title="Page Title | BLACKSEA Digital Agency"
        description="A compelling 155-character description of this page"
        keywords="relevant, keywords, for, this, page"
      />
      {/* Your page content */}
    </>
  );
}
```

**Add to sitemap.xml:**
```xml
<url>
  <loc>https://blacksea.agency/new-page</loc>
  <lastmod>2025-10-16</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

---

## 🎯 SEO Best Practices Checklist

When adding content:

### Page Titles
- [ ] Include brand name: "Page Title | BLACKSEA"
- [ ] 50-60 characters max
- [ ] Unique per page
- [ ] Include primary keyword

### Meta Descriptions
- [ ] 150-160 characters
- [ ] Include call-to-action
- [ ] Unique per page
- [ ] Include primary keyword naturally

### Content
- [ ] One H1 per page
- [ ] Logical heading hierarchy (H1 → H2 → H3)
- [ ] Alt text for all images
- [ ] Internal links to other pages
- [ ] Keywords in first paragraph

### Images
- [ ] Descriptive file names (not IMG_1234.jpg)
- [ ] Alt text describing the image
- [ ] Optimized size (use WebP when possible)
- [ ] Lazy loading: `loading="lazy"`
- [ ] Width and height attributes

---

## 🔍 Current SEO Features

### ✅ Implemented
- Complete meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Cards
- Structured data (Organization, WebSite, ProfessionalService)
- XML Sitemap with hreflang
- robots.txt
- Canonical URLs (auto-managed)
- PWA manifest
- Semantic HTML
- ARIA labels for accessibility
- Skip to content link
- Focus styles
- Reduced motion support
- Dynamic language switching (FR/EN)
- Performance optimizations (code splitting, minification)

### 📋 Recommended Next Steps
- Add blog section for content marketing
- Create service-specific landing pages
- Add customer testimonials with Review schema
- Implement FAQ schema
- Set up monthly SEO audits
- Monitor Core Web Vitals

---

## 🛠 Troubleshooting

### Social media not showing preview
1. Clear cache in Facebook Debugger
2. Verify og-image.jpg exists in /public
3. Check image is 1200x630px
4. Ensure HTTPS is working

### Google not indexing pages
1. Check robots.txt is accessible
2. Submit sitemap in Search Console
3. Verify canonical URLs are correct
4. Check for crawl errors in Search Console

### Accessibility issues
1. Run Lighthouse audit
2. Test with keyboard navigation (Tab key)
3. Check color contrast
4. Verify ARIA labels

---

## 📞 Quick Commands

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Development server
npm run dev
```

---

## 📚 Documentation Files

- `SEO_SUMMARY.md` → Complete overview of all changes
- `SEO_OPTIMIZATION.md` → Detailed technical guide
- `QUICK_SEO_REFERENCE.md` → This file (quick reference)

---

**Remember**: SEO is ongoing. Monitor, test, and improve regularly!
