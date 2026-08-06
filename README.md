# KOTC Interactive Learning Platform — Functional Proof of Concept

A polished, accessible Next.js proof of concept prepared for the Keepers of the Circle Interactive Educational Website proposal.

## Live demonstration

**Current production proposal demo:** https://kotc-interactive-learning-poc.vercel.app

The public production URL remains on the approved baseline until the Brand V3 preview is reviewed. The deployed demonstration is excluded from search-engine indexing. Vercel is used only for bid-stage presentation; the proposed production environment remains AWS Canada.

## Purpose

This repository demonstrates the proposed learner experience and technical approach for the RFP’s highest-value requirements:

- Illustrative account access and role selection
- Employer/union and trades-learner pathways
- Learner dashboard with locally saved progress
- Accessible interactive-house chapter navigation
- Multimedia lesson with captions/transcript concept
- Click-and-flip and scroll-to-highlight learning patterns
- Drag-and-drop activity with an equivalent select-and-place method
- Completion and certificate concept
- Administrator analytics and CMS content-editor concepts
- Theme, text-size, reduced-motion, keyboard, and mobile support

This is a **functional bid-stage concept**, not the final platform or cultural design. Final imagery, terminology, symbolism, stories, curriculum, and brand treatment must be developed through KOTC-led co-design, cultural review, community input, and formal approval.

## Brand-Aligned UI/UX V3

The active redesign branch implements the **Circle and Horizon** direction based on observable visual properties in the supplied KOTC website reference:

- White-dominant page canvas
- Deep KOTC-style navy for hierarchy and primary actions
- Pale sky-blue support and selected surfaces
- Golden-yellow active markers and geometric highlights
- Warm-red supporting accents
- Responsive circle/ray, dotted texture, and layered horizon treatments
- Humanist sans typography
- Green reserved for completion and success only
- Branded header, footer, homepage, dashboard, interactive house, lesson, activity, completion, administrator, and CMS screens

The implementation does not copy or claim an official logo. The working geometric/text lockup, colour values, and decorative motifs remain explicitly subject to replacement by KOTC-provided official assets.

## Demo journey

`Sign in concept → Role selection → Learner dashboard → Interactive house → Lesson → Activity → Completion`

Separate routes demonstrate administration, structured content editing, the accessibility approach, and the Brand V3 component evidence.

## Routes

| Route | Demonstrates |
|---|---|
| `/` | Brand-aligned proposal concept and scope boundary |
| `/sign-in` | Registration, sign-in, consent, and privacy approach |
| `/role-selection` | Employer/union and trades-learner pathways |
| `/dashboard` | Progress, resume learning, module states, certificate status |
| `/house` | Interactive chapter navigation and accessible list equivalent |
| `/lesson/lower-impact-materials` | Media, transcript, resources, flip cards, scroll highlighting |
| `/activity/material-match` | Drag-and-drop plus non-drag keyboard/touch alternative |
| `/completion` | Completion and verifiable-certificate concept |
| `/admin` | Illustrative analytics, content status, quick actions |
| `/admin/content-editor` | Structured CMS authoring and publishing workflow |
| `/accessibility` | WCAG 2.2 AA target and verification approach |
| `/design-system` | Brand V3 tokens, geometry, component, and boundary evidence |

## Technology

- Next.js 16 with App Router
- React 19 and TypeScript
- Tailwind CSS 4 plus semantic CSS custom properties
- Lucide icons
- Local JSON and browser `localStorage`
- Vitest for unit tests
- Playwright and axe-core for end-to-end and accessibility checks
- GitHub Actions for dependency audit, type-check, lint, unit tests, build, browser tests, and proposal screenshots
- Vercel for bid-stage preview hosting only

The production proposal remains based on Next.js, NestJS, Strapi, PostgreSQL, Amazon Cognito, and AWS Canada. Those production services are intentionally not implemented in this front-end proof of concept.

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality commands

```bash
npm audit --omit=dev --audit-level=high
npm run typecheck
npm run lint
npm run test
npm run build
npx playwright install chromium
npm run test:e2e
```

## Accessibility target

The POC is designed and tested toward WCAG 2.2 Level AA, including:

- Semantic landmarks and headings
- Visible focus
- Keyboard-operable primary journey
- Interactive-house list equivalent
- Non-drag activity completion
- Captions/transcript concept
- Light, dark, and system themes
- Standard, large, and extra-large text
- Reduced-motion preference
- Numeric/text alternatives for charts and progress

This is not a formal independent accessibility certification.

## Cultural-safety boundary

The POC deliberately avoids invented Indigenous imagery, motifs, patterns, language, stories, identity claims, and symbolism. Circle, ray, dot, and horizon geometry is treated only as an observable brand property from the supplied reference. No cultural meaning is assigned without KOTC approval.

## Preview and production distinction

- **Vercel:** bid-stage proposal previews and final public demonstration
- **Proposed production environment:** AWS Canada with secure application, database, media, monitoring, backup, and identity services

## Documentation

- [Brand-Aligned UI/UX V3 implementation plan](docs/BRAND_ALIGNED_UIUX_V3_IMPLEMENTATION_PLAN.md)
- [Brand asset register](docs/BRAND_ASSET_REGISTER.md)
- [Brand usage rules](docs/BRAND_USAGE_RULES.md)
- [AI-first implementation plan](docs/AI_FIRST_IMPLEMENTATION_PLAN.md)
- [Original functional design system](docs/DESIGN_SYSTEM.md)
- [Complete design process](docs/DESIGN_PROCESS.md)
- [Demo scope and acceptance](docs/DEMO_SCOPE_AND_ACCEPTANCE.md)
- [Implementation status](docs/IMPLEMENTATION_STATUS.md)
- [Demo script](docs/DEMO_SCRIPT.md)
- [Known limitations](docs/KNOWN_LIMITATIONS.md)
- [Proposal evidence guide](docs/PROPOSAL_EVIDENCE.md)
- [Contribution and AI-review workflow](CONTRIBUTING.md)
