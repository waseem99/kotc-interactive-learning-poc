# AI-First Implementation Plan

## 1. Delivery objective

Build a polished, front-end-only proof of concept that demonstrates the strongest parts of the KOTC technical proposal:

1. Role selection
2. Learner dashboard and saved progress
3. Interactive-house chapter navigation
4. Sample multimedia lesson
5. Accessible learning activity
6. Completion and certificate state
7. Administrator dashboard

The POC is for proposal evaluation. It is not the production platform and will not include real authentication, CMS, backend APIs, learner data, analytics, or final cultural artwork.

## 2. AI-first operating model

AI accelerates planning, coding, content scaffolding, testing, documentation, and review. Humans retain authority over scope, cultural safety, visual direction, accessibility acceptance, and all external claims.

### AI workstreams

| AI workstream | Primary outputs | Human approval gate |
|---|---|---|
| Product analyst | Requirements map, user stories, acceptance criteria, edge cases | Product/PM confirms scope |
| UX assistant | User flows, screen inventory, content hierarchy, interaction states | UX lead approves flow |
| Design-system assistant | Tokens, component specifications, variants, responsive rules | Design lead approves system |
| Frontend coding assistant | Next.js components, mock data, state logic, tests | Engineer reviews every change |
| Accessibility reviewer | Keyboard paths, semantics, ARIA review, contrast and motion checks | Accessibility/QA lead signs off |
| Content reviewer | Plain-language labels, neutral placeholders, error and feedback copy | Proposal/content lead approves |
| QA assistant | Test cases, Playwright scenarios, regression checklist | QA lead validates results |
| DevOps assistant | Vercel configuration, CI workflow, preview and deployment notes | Technical lead approves deployment |

## 3. Locked POC technology stack

- Next.js with App Router
- React and TypeScript
- Tailwind CSS
- CSS custom properties for design tokens
- Framer Motion for restrained transitions
- dnd-kit only where a drag interaction is retained
- Lucide icons
- Local JSON/mock data
- localStorage for simulated progress and preferences
- Playwright for end-to-end checks
- axe-core for accessibility checks
- Vitest and React Testing Library for component tests
- GitHub Actions for lint, type-check, test, and build
- Vercel for bid-stage preview hosting

Production references in the proposal remain NestJS, Strapi, PostgreSQL, Cognito, and AWS Canada. They are not required in this POC.

## 4. Functional scope

### 4.1 Role-selection experience

- Employee/learner pathway
- Employer/union pathway
- Brief explanation of how content differs
- Continue button with keyboard and screen-reader support
- Role saved locally

### 4.2 Learner dashboard

- Welcome state and selected role
- Overall progress
- Continue-learning card
- Module list with current/completed/locked states
- Certificate status
- Accessibility controls: theme, text size, reduced motion

### 4.3 Interactive house

- Responsive 2D SVG or semantic layered illustration
- Four to six neutral functional hotspots
- Current, completed, and available states
- Keyboard-operable hotspot navigation
- Touch-friendly controls
- Accessible list-view alternative containing the same information
- Topic preview drawer/panel

### 4.4 Sample lesson

- Lesson title, duration, and progress
- Video placeholder with caption/transcript concept
- Structured text and resource card
- Previous/next navigation
- Save-and-return state

### 4.5 Accessible activity

- One category-matching or sequencing activity
- Pointer, touch, and keyboard operation
- Non-drag alternative
- Clear, non-shaming feedback
- Completion state stored locally
- Reduced-motion behavior

### 4.6 Administrator dashboard

- Mock learner counts and completion indicators
- Employer/employee participation split
- Certificates issued
- Content-review status
- Quick actions for modules, media, activities, and reports
- Clearly marked simulated data

## 5. Non-goals

Do not build:

- Real user registration or authentication
- NestJS services or APIs
- Strapi integration
- Database persistence
- Cognito configuration
- Real analytics
- Real certificate generation
- AWS infrastructure
- Payment or monetization functionality
- Final Indigenous imagery, patterns, language, stories, or symbolism
- AI features inside the product

## 6. Proposed repository structure

```text
app/
  (demo)/
    role-selection/
    dashboard/
    house/
    lesson/[slug]/
    activity/[slug]/
    completion/
    admin/
  layout.tsx
  page.tsx
components/
  accessibility/
  activities/
  admin/
  house/
  learning/
  navigation/
  ui/
content/
  mock-program.ts
  mock-lessons.ts
  mock-analytics.ts
design-system/
  tokens.css
  component-contracts.md
lib/
  accessibility.ts
  demo-state.ts
  progress.ts
  types.ts
public/
  demo-assets/
tests/
  e2e/
  accessibility/
docs/
```

## 7. AI-assisted implementation sequence

### Day 0 — Planning and setup

- Confirm POC boundary and disclaimer
- Generate user stories and acceptance criteria from the RFP
- Initialize Next.js, TypeScript, linting, formatting, testing, and CI
- Establish folder structure and branch rules

**Exit gate:** approved scope, route map, backlog, and repository baseline.

### Day 1 — Design foundations

- Define experience principles
- Create semantic tokens and responsive rules
- Define core component contracts
- Build application shell, header, navigation, accessibility toolbar, and base cards
- Create low-fidelity coded layouts rather than separate static mockups

**Exit gate:** design system v0.1 and approved dashboard/house skeletons.

### Day 2 — Core learner flow

- Build role selection
- Build learner dashboard
- Build interactive house and list alternative
- Add topic preview states and local progress
- Test responsive behavior and keyboard path

**Exit gate:** complete Role → Dashboard → House flow.

### Day 3 — Lesson, activity, and admin

- Build sample lesson
- Build one accessible activity
- Build completion state
- Build administrator dashboard
- Add theme, text-size, and reduced-motion preferences

**Exit gate:** full proposal demo flow is functional.

### Day 4 — QA, evidence, and deployment

- Run lint, type-check, unit, end-to-end, accessibility, and production build
- Conduct manual keyboard and screen-reader spot checks
- Remove unsupported cultural content and external claims
- Deploy to Vercel
- Capture desktop/mobile screenshots
- Prepare demo notes, known limitations, and proposal appendix material

**Exit gate:** stable public preview, evidence pack, and no critical defects.

## 8. Definition of done

The POC is complete when:

- The full demo flow works without a backend
- Every interactive-house hotspot is keyboard accessible
- Every drag-based task has a non-drag alternative
- Theme, text-size, and reduced-motion preferences work
- Progress survives a browser refresh through localStorage
- Layouts are usable at mobile, tablet, and desktop widths
- Automated accessibility checks report no serious or critical issues on key routes
- No final cultural design claim is implied
- Demo disclaimer is visible in the interface and README
- All mock metrics and content are visibly identified as illustrative
- GitHub Actions passes and Vercel deployment succeeds

## 9. Human review gates

No AI-generated output proceeds without the following review:

1. **Scope gate:** PM confirms it belongs in the bid-stage POC.
2. **Cultural-safety gate:** neutral content only; no invented symbols, stories, or language.
3. **Design gate:** design lead approves tokens, hierarchy, and interaction patterns.
4. **Engineering gate:** engineer reviews code, dependencies, and state behavior.
5. **Accessibility gate:** QA reviews keyboard, semantics, focus, contrast, and alternatives.
6. **Proposal gate:** screenshots and claims match what the demo actually does.

## 10. Primary risks and controls

| Risk | Control |
|---|---|
| POC expands into production work | Enforce non-goals and fixed routes |
| Cultural overreach | Use neutral assets and explicit KOTC-led-design disclaimer |
| AI-generated inaccessible code | Mandatory manual and automated accessibility review |
| Visual polish delays functionality | Build coded low-fidelity flow first, polish only after completion |
| Vercel is mistaken for production hosting | State clearly that production hosting is proposed on AWS Canada |
| Mock data appears factual | Label all data as illustrative |
| Last-minute regressions | Freeze features before final QA and only accept critical fixes |
