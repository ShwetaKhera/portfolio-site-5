# Portfolio Website - Quick Start Guide

## 🚀 Get Running in 5 Minutes

### Step 1: Install Dependencies
```bash
cd portfolio-site
npm install
```

### Step 2: Update Your Content
Edit `data/resume.json` with your information:
- Replace "Alex Chen" with your name
- Update your title, location, and contact info
- Add your work experience
- List your skills
- Add your education

### Step 3: Set Your Site URL
```bash
cp .env.example .env.local
```
Edit `.env.local` and set `NEXT_PUBLIC_SITE_URL` to your domain.

### Step 4: Run Development Server
```bash
npm run dev
```
Open http://localhost:3000 to see your portfolio!

## 📝 Making Changes

### Update Content
Simply edit `data/resume.json` - no code changes needed!

### Change Colors
Edit CSS variables in `styles/globals.css`:
```css
:root {
  --background: 255 255 255;    /* Background color */
  --foreground: 23 23 23;       /* Text color */
  --accent: 23 23 23;           /* Accent color */
  --muted: 115 115 115;         /* Secondary text */
}
```

### Adjust Animations
Modify timing in `lib/motion.ts`:
```typescript
export const TRANSITION = {
  duration: 0.3,  // Seconds
  ease: [0.4, 0, 0.2, 1],
};
```

## 🚢 Deploy to Vercel

### Method 1: GitHub (Recommended)
1. Push code to GitHub repository
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Set environment variable: `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`
6. Click "Deploy"

Done! Your site is live with automatic deployments on every push.

### Method 2: Vercel CLI
```bash
npm install -g vercel
vercel
```
Follow the prompts and you're deployed!

## 📊 Analytics

Analytics are automatically enabled via Vercel Analytics. View your stats in the Vercel dashboard after deployment.

What's tracked:
- Page views
- Scroll depth
- External link clicks (GitHub, LinkedIn, Email)

All tracking is privacy-friendly (no cookies, GDPR compliant).

## ❓ Common Questions

**Q: How do I add a new section?**  
A: Create a component in `app/sections/`, then import and add it to `app/page.tsx`.

**Q: Can I use a different font?**  
A: Yes! Update the font imports in `app/layout.tsx`. Use [Google Fonts](https://fonts.google.com/).

**Q: How do I change the domain?**  
A: Update `NEXT_PUBLIC_SITE_URL` in Vercel project settings or `.env.local`.

**Q: Do I need to rebuild after changing resume.json?**  
A: In development: No, it hot-reloads. In production: Yes, redeploy (automatic with Vercel).

## 🎨 Design Philosophy

This portfolio follows these principles:
- **Minimalism**: No visual noise, generous white space
- **Typography-First**: Content is king
- **Performance**: Fast loading, optimized assets
- **Accessibility**: Works for everyone
- **Professionalism**: Signals senior engineering quality

## 📚 Learn More

- Full documentation: See `README.md`
- Architecture decisions: See `ARCHITECTURE.md`
- Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind CSS: [tailwindcss.com](https://tailwindcss.com)

## 🆘 Need Help?

1. Check `README.md` for detailed documentation
2. Review `ARCHITECTURE.md` for design decisions
3. Open an issue on GitHub
4. Check Next.js documentation

## ✅ Checklist Before Going Live

- [ ] Updated all content in `data/resume.json`
- [ ] Set `NEXT_PUBLIC_SITE_URL` in production
- [ ] Tested on mobile devices
- [ ] Verified all links work
- [ ] Checked spelling and grammar
- [ ] Tested accessibility (keyboard navigation, screen reader)
- [ ] Reviewed OpenGraph preview (share on LinkedIn/Twitter)
- [ ] Confirmed analytics are tracking (after first deployment)

Good luck with your job search! 🎯
