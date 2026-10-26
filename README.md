# Nathnael Tesfaw — Portfolio

My personal portfolio: experience, projects, and education as a CS senior at Cornell.

**Live:** https://portfolio.nathnaeltesfaw.dev/

Design credit to [Kushal Patel](https://kushal-patel-portfolio.netlify.app/).

## Built With

- [Next.js 15](https://nextjs.org/) (App Router, static export) + React 18 + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/) for scroll reveals and "See more" transitions
- [next-themes](https://github.com/pacocoursey/next-themes) for light/dark mode
- [Lucide](https://lucide.dev/) icons

## Running Locally

```bash
git clone https://github.com/Nathnael45/Nathnael45.github.io.git
cd Nathnael45.github.io/portfolio
npm install
npm run dev
```

Then open http://localhost:3000.

## Updating Content

All copy lives in `portfolio/lib/data.ts`, so the page itself never needs editing for content changes:

- **Experience / projects:** edit the `experiences` and `projects` arrays. The first `featuredExperienceCount` experiences and the projects in `featuredProjectIds` show by default; the rest sit behind "See more".
- **Company logos:** drop the image in `portfolio/public/logos/` and set `logo` on the experience. Use a transparent background so it works in both themes.
- **Project icons:** mapped by project id in `portfolio/components/project-icon.tsx`.
- **Resume:** replace `portfolio/public/resume.pdf`.
- **Theme colors:** CSS variables in `portfolio/app/globals.css`.

## Project Structure

```
portfolio/
├── app/
│   ├── page.tsx        # Homepage (hero, about, experience, projects, contact)
│   ├── layout.tsx      # Fonts, theme provider, metadata
│   └── globals.css     # Light/dark color tokens
├── components/         # Doodles, theme toggle, project icons, shadcn/ui
├── lib/data.ts         # All site content
└── public/             # Photo, resume, logos, CNAME
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the static site and publishes `portfolio/out` to the `gh-pages` branch, served by GitHub Pages at the custom domain above.

To deploy by hand (e.g. from a feature branch), run `npm run deploy` from `portfolio/`. The next push to `main` will overwrite it.

## Contact

Nathnael Tesfaw — [nbt26@cornell.edu](mailto:nbt26@cornell.edu) · [LinkedIn](https://linkedin.com/in/nathnael-tesfaw)
