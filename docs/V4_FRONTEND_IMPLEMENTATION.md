# KOTC Learning Commons V4 — Frontend Implementation

## Status

The from-scratch Learning Commons V4 frontend is implemented on:

- Branch: `redesign/learning-commons-v4-frontend`
- Parent asset branch: `redesign/learning-commons-v4-assets`
- Product state: functional proposal-stage prototype
- Merge policy: do not merge or promote to the permanent client URL before visual approval

## Design direction

The implementation replaces the rejected Brand V3 landing-page treatment with a product-led learning experience.

### Visual distribution

- White and warm-neutral surfaces dominate the interface.
- Navy provides headings, structure, navigation, and primary actions.
- Sky blue supports learning, transcript, accessibility, and selected-content surfaces.
- Gold identifies current position, progress, focus, and limited milestones.
- Red remains a restricted secondary accent.
- Green is limited to completion and success.

### Typography and layout

- Humanist sans-serif system with Sora-style headings and Atkinson Hyperlegible-style body fallbacks.
- Maximum desktop content width: 1240 px.
- Reading width: approximately 680–720 px.
- Major desktop section spacing: 96 px.
- Mobile section spacing: 56 px.
- Minimum control target: 44 × 44 px.

## Implemented routes

### `/`

- Product-focused hero with a three-line maximum headline.
- Complete workshop illustration visible above the fold.
- Primary learner CTA and secondary administrator CTA.
- Quiet proposal-stage boundary below the hero.
- Five-step learner journey.
- Signature interactive-house presentation.
- Accessibility section using the device-support asset.
- Administrator content-review preview.

### `/sign-in`

- Account and privacy concept.
- Sign-in and account-creation modes.
- Secure-access, minimum-data, and enrollment explanation.
- Functional route progression to pathway selection.

### `/role-selection`

- Two clear pathway choices.
- Radio semantics and visible selected state.
- Supporting examples and one dominant continue action.

### `/dashboard`

- Dominant Continue Learning action.
- Circular progress and current-chapter hierarchy.
- House illustration used as the current-learning visual.
- Linear program trail instead of an equal-weight card grid.
- Subordinate completion and browser-storage information.

### `/house`

- Signature house-cutaway asset.
- Numbered DOM hotspots positioned over the illustration.
- Selected, current, available, and completed states.
- Equivalent list mode using the same topic data and destination.
- Topic panel with duration, learning format, access method, and one primary action.

### `/lesson/lower-impact-materials`

- Navy media frame and materials-board asset.
- Play, pause, volume, caption, timeline, and transcript concepts.
- Readable lesson content and learning callout.
- Downloadable-resource concept.
- Existing lesson interactions and next-step navigation retained.

### `/activity/material-match`

- Existing functional drag-and-drop activity retained.
- Equivalent select-and-place controls retained.
- V4 visual treatment for material cards, destination zones, instruction, feedback, and completion.

### `/completion`

- White certificate document inside a navy frame.
- Supplied logo reference used without redrawing.
- Gold seal treatment and restrained red learner-name accent.
- Explicit illustrative/non-credential disclaimer.
- Completion workflow capabilities and reset action.

### `/admin`

- Separate operational workspace with navy sidebar.
- Prioritized metrics, pathway data, completion data, workflow table, review states, and administrative actions.
- Text values accompany charts.
- Cultural and accessibility review remain visible workflow states.

### `/admin/content-editor`

- Structured lesson metadata, media, caption, transcript, activity, and publishing controls.
- Sticky review/publishing panel on desktop.
- Responsive single-column layout on smaller screens.

### `/accessibility`

- Four primary accessibility principles.
- Device-support illustration.
- WCAG 2.2 AA target statement.
- Automated, manual, assistive-technology, and representative-user verification boundary.

### `/design-system`

- V4 semantic colour roles.
- Core asset gallery.
- Component-state examples.
- Explicit logo and production-approval boundary.

## Assets used

- `public/assets/v4/brand/kotc-logo-supplied-reference.svg`
- `public/assets/v4/illustrations/hero-workshop.svg`
- `public/assets/v4/illustrations/house-cutaway.svg`
- `public/assets/v4/illustrations/learning-path.svg`
- `public/assets/v4/illustrations/materials-board.svg`
- `public/assets/v4/illustrations/accessibility-devices.svg`
- Context, material, icon, and brand-pattern sprites remain available for additional frontend refinements.

## Accessibility implementation

- Semantic headings, navigation, forms, tables, lists, and status text.
- Skip link and visible focus indicators.
- Keyboard-operable house hotspots and list equivalent.
- Drag-independent activity path.
- Transcript and captions represented next to media.
- Theme, text-size, and reduced-motion preferences retained.
- Dark-theme and responsive states defined.
- No status depends on colour alone.

## Brand and cultural boundary

- The supplied raster logo is a prototype reference and not a production master.
- No cultural meaning is assigned to circle, ray, dot, horizon, house, colour, or landscape geometry.
- No unapproved Indigenous language, regalia, teaching, story, or symbolic motif has been introduced.
- Final imagery, cultural content, terminology, official logo files, and review responsibilities require KOTC confirmation.

## Acceptance checklist

Before merge or promotion:

- [ ] Production dependency audit passes.
- [ ] TypeScript passes.
- [ ] ESLint passes.
- [ ] Unit tests pass.
- [ ] Next.js production build passes.
- [ ] Playwright core flows pass.
- [ ] Automated serious/critical accessibility findings are zero.
- [ ] Desktop and mobile routes receive visual review.
- [ ] Protected Vercel preview is verified.
- [ ] User provides explicit visual approval.
