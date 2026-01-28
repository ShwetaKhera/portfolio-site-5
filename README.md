# Portfolio Website

A premium, editorial-style personal portfolio for senior engineers. Built with Next.js, TypeScript, and Tailwind CSS. All content is sourced from a single JSON file, making it easy to customize without touching code.

**Not a resume. A personal brand.**

## Features

- **Editorial Design**: Asymmetric layouts, refined typography, and warm color palette
- **Impact-Focused**: Case study presentation of selected work with problem/solution/impact structure
- **Fully Data-Driven**: All content sourced from `data/resume.json`
- **Senior Positioning**: Capabilities over tools, narrative over bullets, curated over comprehensive
- **Type-Safe**: Strict TypeScript with runtime validation
- **Performance Optimized**: Lighthouse score ≥ 95
- **Accessible**: WCAG AA compliant with semantic HTML
- **Thoughtful Animations**: Subtle, purposeful motion with Framer Motion
- **Privacy-Friendly Analytics**: GDPR-compliant tracking with Vercel Analytics
- **SEO Optimized**: Custom OpenGraph images and metadata

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + CSS variables
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create environment file:

```bash
cp .env.example .env.local
```

4. Update `NEXT_PUBLIC_SITE_URL` in `.env.local` with your domain

5. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## Updating Your Content

All visible content is controlled by `data/resume.json`. Simply edit this file to update your portfolio.

### Resume Structure

```json
{
  "basics": {
    "name": "Your Name",
    "title": "Your Professional Title",
    "headline": "Your positioning statement (e.g., 'I design and build...')",
    "location": "City, State",
    "email": "your.email@example.com",
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "summary": "Your professional summary..."
  },
  "skills": [
    {
      "category": "Category Name",
      "items": ["Skill 1", "Skill 2", "Skill 3"]
    }
  ],
  "experience": [
    {
      "company": "Company Name",
      "role": "Your Role",
      "location": "Location",
      "startDate": "2021-03",
      "endDate": "Present",
      "featured": true,  // Mark your best work for the Selected Work section
      "problem": "What challenge were you solving?",
      "solution": "How did you approach it?",
      "impact": "What measurable results did you achieve?",
      "highlights": [
        "Achievement or responsibility",
        "Another achievement"
      ]
    }
  ],
  "education": [
    {
      "institution": "University Name",
      "degree": "Degree Name",
      "period": "2009 – 2013"
    }
  ]
}
```

### Portfolio Sections

The site presents your data in these sections:

1. **Hero**: Your positioning statement and headline
2. **Selected Work**: 3-4 featured experiences as case studies (marked with `featured: true`)
3. **Capabilities**: Auto-grouped skill themes with descriptions
4. **Background**: Complete timeline of all experience + education
5. **Contact**: Clear call-to-action with prominent links

### Date Formatting

For experience dates, use `YYYY-MM` format (e.g., `"2021-03"`). The site will automatically format them as "Mar 2021". Use `"Present"` for current positions.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Set `NEXT_PUBLIC_SITE_URL` environment variable
4. Deploy

Vercel will automatically:
- Build your site
- Enable analytics
- Provide a production URL
- Set up automatic deployments

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/app
  layout.tsx          # Root layout with fonts and metadata
  page.tsx            # Main page composing all sections
  opengraph-image.tsx # Dynamic OG image generation
  /sections
    Hero.tsx          # Name, title, summary
    Experience.tsx    # Work history
    Skills.tsx        # Technical skills
    Education.tsx     # Educational background
    Contact.tsx       # Contact information

/components
  AnimatedSection.tsx # Reusable scroll animation wrapper
  SectionHeader.tsx   # Consistent section headers
  TimelineItem.tsx    # Experience/education entries
  SkillBadge.tsx      # Individual skill badges

/data
  resume.json         # All site content (EDIT THIS FILE)

/lib
  types.ts            # TypeScript interfaces and validation
  content.ts          # Content loading and formatting
  motion.ts           # Animation configuration
  analytics.ts        # Privacy-friendly analytics

/styles
  globals.css         # Global styles and design tokens
```

## Customization

### Colors

Edit CSS variables in `styles/globals.css`:

```css
:root {
  --background: 255 255 255;
  --foreground: 23 23 23;
  --accent: 23 23 23;
  --muted: 115 115 115;
}
```

### Fonts

Update font imports in `app/layout.tsx`. Current fonts:
- **Sans**: Inter
- **Mono**: JetBrains Mono

### Animations

All animation settings are centralized in `lib/motion.ts`. Modify `TRANSITION` constants to adjust animation speed and easing.

## Performance

The site is optimized for maximum performance:

- ✅ Static generation where possible
- ✅ Optimized font loading with `next/font`
- ✅ Minimal JavaScript
- ✅ No layout shift from animations
- ✅ Respects `prefers-reduced-motion`
- ✅ Dynamic imports for heavy components

## Accessibility

- Semantic HTML throughout
- ARIA labels on navigation
- Focus states on interactive elements
- Keyboard navigation support
- Screen reader friendly

## Analytics

The site uses Vercel Analytics for privacy-friendly tracking:

- ✅ No cookies
- ✅ GDPR compliant
- ✅ Tracks page views, scroll depth, and external link clicks
- ✅ Minimal performance impact

Configure in `lib/analytics.ts`.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Run production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please open an issue on GitHub.
