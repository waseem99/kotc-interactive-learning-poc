# KOTC Interactive Learning Platform — Functional Proof of Concept

A polished, accessible Next.js proof of concept prepared for the Keepers of the Circle Interactive Educational Website proposal.

## Live demonstration

**Public proposal demo:** https://kotc-interactive-learning-poc.vercel.app

The deployed demonstration is intentionally excluded from search-engine indexing. Vercel is used only for bid-stage presentation; the proposed production environment remains AWS Canada.

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

## Editorial v2 visual direction

The current demonstration uses a warm editorial and architectural system rather than a green-heavy sustainability treatment:

- Warm ivory and white page surfaces
- Deep ink-blue primary actions
- Clay, ochre, muted blue and plum supporting accents
- Green reserved for completion and success
- Larger whitespace and clearer content hierarchy
- Architectural-grid interactive house presentation
- Multi-accent administrator analytics
- Consolidated accessible display-settings menu

The palette is a functional proposal direction only. It deliberately avoids invented Indigenous motifs, patterns, language, stories and symbolism.

## Demo journey

`Sign in concept → Role selection → Learner dashboard → Interactive house → Lesson → Activity → Completion`

Separate routes demonstrate administration, structured content editing, and the accessibility approach.

## Routes

| Route | Demonstrates |
|---|---|
| `/` | Proposal concept and scope boundary |
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

## Technology

- Next.js 16 with App Router
- React 19 and TypeScript
- Tailwind CSS 4 plus semantic CSS custom properties
- Lucide icons
- Local JSON and browser `localStorage`
- Vitest for unit tests
- Playwright and axe-core for end-to-end and accessibility checks
- GitHub Actions for dependency audit, type-check, lint, unit tests, build, and browser tests
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

The POC deliberately avoids invented Indigenous imagery, motifs, patterns, language, stories, identity claims, and symbolism. The architectural and material-inspired visual system is a functional placeholder only.

## Preview and production distinction

- **Vercel:** public proposal demonstration at https://kotc-interactive-learning-poc.vercel.app
- **Proposed production environment:** AWS Canada with secure application, database, media, monitoring, backup, and identity services

## Documentation

- [AI-first implementation plan](docs/AI_FIRST_IMPLEMENTATION_PLAN.md)
- [Editorial design system v0.2](docs/EDITORIAL_V2_DESIGN_SYSTEM.md)
- [Original functional design system v0.1](docs/DESIGN_SYSTEM.md)
- [Complete design process](docs/DESIGN_PROCESS.md)
- [Demo scope and acceptance](docs/DEMO_SCOPE_AND_ACCEPTANCE.md)
- [Implementation status](docs/IMPLEMENTATION_STATUS.md)
- [Demo script](docs/DEMO_SCRIPT.md)
- [Known limitations](docs/KNOWN_LIMITATIONS.md)
- [Proposal evidence guide](docs/PROPOSAL_EVIDENCE.md)
- [Contribution and AI-review workflow](CONTRIBUTING.md)