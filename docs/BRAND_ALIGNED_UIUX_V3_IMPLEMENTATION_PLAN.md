# KOTC Brand-Aligned UI/UX V3 — AI-First Implementation Plan

## 1. Decision and purpose

The existing Editorial V2 direction is a functional and accessibility baseline, but it is not approved as the final visual direction. It feels generic, visually restrained, and insufficiently connected to the current Keepers of the Circle brand shown in the supplied reference.

V3 will retain the working product flow and automated tests while rebuilding the interface around KOTC's approved visual language: strong navy, sky-blue surfaces, golden-yellow highlights, warm red accents, circular/sun-like geometry, dotted textures, layered horizon/wave bands, and a white-dominant canvas.

This is a brand-alignment redesign, not a change to the product scope.

## 2. Non-negotiable cultural and brand boundary

- Use only KOTC-provided or explicitly approved logos, icons, patterns, photographs, symbols, terminology, and cultural content.
- Do not infer or invent cultural meanings for circles, rays, colours, patterns, animals, medicines, teachings, or decorative motifs.
- The supplied reference is used to identify visual properties, not to interpret cultural significance.
- Any adapted motif must be presented to KOTC for approval before it is treated as production-ready.
- Placeholder illustrations remain clearly labelled until approved assets are supplied.

## 3. Brand observations from the supplied reference

### Recognizable visual assets

- Predominantly white page canvas with generous open areas.
- Deep navy used for text, links, icons, and primary actions.
- Pale sky-blue used for large contained surfaces.
- Golden yellow used as a strong highlight and circular/radiating graphic.
- Warm red used within the layered footer bands.
- Layered blue, white, yellow, and red horizon/wave bands.
- Dotted circular texture inside the dark-blue band.
- Rounded rectangular content containers with low visual complexity.
- Compact KOTC logo placement and clear utility-style navigation.

### Approximate working palette

These values are implementation starting points only and must be replaced by official brand values when supplied.

| Role | Working value | Usage |
|---|---:|---|
| KOTC navy | `#114976` | Primary actions, headings, navigation, key icons |
| KOTC mid blue | `#2F5C86` | Secondary data, selected states, supporting bands |
| KOTC sky | `#E8F6FB` | Large soft panels and learning surfaces |
| KOTC gold | `#F0D147` | Highlights, active markers, decorative horizon line |
| KOTC red | `#B5464E` | Limited supporting accent, progress milestones, footer band |
| White | `#FFFFFF` | Main canvas and card surfaces |
| Soft neutral | `#F5F7F8` | Alternate page sections and table backgrounds |
| Ink text | `#123A5A` | Body text where full navy is visually heavy |

Accessibility rule: yellow and red are not used for small text on white. Primary buttons use navy with white text. Decorative colours never carry meaning alone.

## 4. New creative direction: “Circle and Horizon”

The interface will feel recognizably KOTC without copying the current website literally.

### Design characteristics

- White-first, not colour-filled.
- Bold navy hierarchy with controlled sky-blue sections.
- Yellow and red used as intentional punctuation, not dominant surfaces.
- Circular progress, hotspot, and navigation cues derived from the brand's geometric language.
- Layered horizon bands used sparingly in hero, section transitions, completion, and footer.
- Dot textures restricted to decorative areas and never placed behind body copy.
- Modern humanist sans typography rather than a generic editorial serif treatment.
- Clear, friendly, community-oriented language with calm interaction patterns.

### Proposed typography

- Display and interface headings: `Manrope` or the approved KOTC brand typeface.
- Body and controls: `Atkinson Hyperlegible` or the approved accessible brand typeface.
- No serif headline system unless KOTC explicitly requests it.

## 5. Layout system

### Desktop

- Maximum content width: 1280 px.
- Reading width: 680–720 px.
- Page gutters: 32–48 px.
- Major section spacing: 88–112 px.
- Card spacing: 24–32 px.
- Minimum control height: 44 px.
- Card radius: 12–16 px; avoid excessive rounded-pill styling.

### Mobile

- Page gutters: 20 px.
- Major section spacing: 56–72 px.
- Single-column flow by default.
- Sticky actions only where they directly support task completion.
- Decorative motifs simplify or disappear rather than crowding content.

## 6. Global shell redesign

### Header

- White or very pale sky background.
- Approved KOTC logo at left.
- Learner navigation in navy text with a gold active indicator.
- Current progress shown as a compact circular marker rather than a green progress pill.
- One “Display settings” control with a clear accessible menu.
- Mobile header becomes logo, current-section label, and menu/settings controls.

### Footer

- Rebuild a responsive, simplified version of the brand's layered horizon/wave treatment.
- Preserve white breathing room above the bands.
- Use navy, white, gold, and red in the same visual hierarchy as the reference.
- Use dotted texture only inside the dark-blue band.
- Include proposal disclaimer and accessibility link without competing with the brand graphic.

### Shared surfaces

- White cards on white/neutral canvas use borders and spacing, not heavy shadows.
- Sky-blue panels identify contextual learning support.
- Navy panels are reserved for major moments: hero preview, completion, and selected admin summaries.
- Gold marks active learning position.
- Red marks a secondary pathway or review milestone, never errors unless explicitly defined.

## 7. Screen-by-screen redesign

### 7.1 Homepage

**Goal:** Immediate brand recognition and a stronger first impression.

- Use a clean white hero with a large navy headline.
- Add a controlled circular/radiating gold graphic behind or beside the product preview.
- Place a simplified horizon band at the bottom of the hero rather than using pastel geometric shapes.
- Use a navy primary CTA with white text and a gold interaction accent.
- Replace equal feature cards with one large learning-story block and two supporting capabilities.
- Show the interactive-house concept inside a realistic learner interface frame.
- Keep the POC disclaimer visible but visually secondary.

### 7.2 Sign-in and role selection

- Use a pale sky panel for the form while leaving the overall canvas white.
- Introduce a thin yellow/red horizon divider rather than decorative gradients.
- Use clear role cards with one navy and one red accent edge.
- Keep identity and consent messaging prominent and readable.

### 7.3 Learner dashboard

- Make “Continue learning” the dominant action.
- Use a circular progress motif with navy track and gold current-position marker.
- Present the module path as a horizontal/vertical learning trail, not a grid of generic cards.
- Use sky-blue for the active module and white for upcoming modules.
- Use red only for a separate review or employer pathway.
- Add a restrained brand band or dot pattern in the dashboard hero area.

### 7.4 Interactive house

- Treat this as the signature product screen.
- Use a white architectural canvas with dark-navy structure lines.
- Use gold numbered hotspots and navy selected states.
- Use sky-blue room fills with limited yellow/red room accents.
- Keep completed state visually distinct without turning rooms green.
- Preserve the accessible list alternative as an equal interaction mode.
- Move lesson details into a spacious right-side panel with clear CTA and duration.
- Use a subtle dotted background outside the house only, never behind labels.

### 7.5 Lesson experience

- Use a strong navy media frame and white reading canvas.
- Add a thin gold/red section-progress line at the top.
- Place transcript and downloadable resources in sky-blue support panels.
- Use clear chapter navigation with circular step markers.
- Replace pastel decorative surfaces with brand-colour rules, markers, and controlled bands.

### 7.6 Accessible activity

- Present materials as tactile sample cards on white.
- Use navy and sky-blue destination zones.
- Use gold for selection and keyboard focus.
- Use red only as a secondary category accent, not as failure feedback.
- Success feedback uses icon, text, and border treatment; colour is never the sole signal.
- Drag-and-drop and select-and-place remain functionally equivalent.

### 7.7 Completion and certificate

- Use a large white certificate with navy border, gold seal area, and a restrained red accent.
- Add a simplified horizon graphic below the certificate.
- Keep the concept disclaimer explicit.
- Avoid decorative cultural symbols unless supplied and approved by KOTC.

### 7.8 Administrator dashboard and CMS

- Use a white enterprise canvas with navy navigation and sky-blue selected states.
- Restrict data colours to navy, mid blue, gold, and red with accessible labels.
- Remove ornamental editorial styling from operational screens.
- Emphasize review status, accessibility status, transcript status, and cultural-review status.
- Use structured tables and timelines rather than excessive cards.

## 8. Component system to build

- `BrandHeader`
- `BrandFooterHorizon`
- `BrandLogoLockup`
- `CircleProgress`
- `HorizonDivider`
- `DotTexture`
- `PrimaryButton`
- `SecondaryButton`
- `TextLink`
- `LearningTrail`
- `LearningCard`
- `HouseHotspot`
- `HouseRoom`
- `SupportPanel`
- `StatusBadge`
- `TranscriptPanel`
- `ActivityMaterialCard`
- `ActivityDestination`
- `AdminMetric`
- `ReviewTimeline`
- `ProposalBoundaryNotice`

Each component requires light, dark, keyboard-focus, hover, disabled, loading, and responsive states where applicable.

## 9. AI-first delivery model

AI accelerates production work; human review controls brand, cultural, and usability decisions.

### Workstreams

1. **Brand-system agent**
   - Extracts approved colour, spacing, typography, and motif rules into tokens.
   - Generates component contracts and forbidden-use rules.

2. **Experience-shell agent**
   - Implements header, footer, home, sign-in, navigation, and responsive shell.

3. **Learner-flow agent**
   - Implements dashboard, house, lesson, activity, and completion screens.

4. **Admin-flow agent**
   - Implements administrator dashboard and CMS editing experience.

5. **Accessibility and QA agent**
   - Maintains Playwright, axe, keyboard, visual-regression, responsive, and reduced-motion checks.

6. **Documentation agent**
   - Maintains design decisions, screenshot index, proposal evidence, and known limitations.

### Human approval gates

- Gate A: official assets and brand-token approval.
- Gate B: homepage, header, and footer style tile approval.
- Gate C: dashboard and interactive-house approval.
- Gate D: lesson, activity, admin, and mobile approval.
- Gate E: final Vercel preview and proposal-screenshot approval.

AI-generated output must not pass a gate without human visual review.

## 10. GitHub implementation structure

### Primary branch

Continue on `redesign/editorial-v2` only as a technical baseline. The branch is not visually approved until V3 acceptance criteria are complete.

### Suggested work branches

- `v3/brand-foundation`
- `v3/global-shell`
- `v3/learner-dashboard-house`
- `v3/lesson-activity-completion`
- `v3/admin-cms`
- `v3/a11y-visual-qa`

### Required repository outputs

- `docs/BRAND_ASSET_REGISTER.md`
- `docs/BRAND_ALIGNED_UIUX_V3_IMPLEMENTATION_PLAN.md`
- `docs/BRAND_USAGE_RULES.md`
- `design-system/brand-v3-tokens.css`
- `design-system/brand-v3-component-contracts.md`
- `styles/09-brand-v3.css` or refactored component-level styles
- `docs/proposal-evidence-v3/`
- Playwright visual baselines for desktop and mobile

## 11. Phased implementation

### Phase 0 — Asset and design audit

- Obtain official logo files, colour values, typography rules, brand guide, footer motifs, and approved imagery.
- Build a brand asset register with owner, source, licensing, approved usage, and fallback state.
- Inventory every current screen and component.
- Mark what is retained, restyled, replaced, or removed.

**Exit:** brand inputs and non-invention boundary documented.

### Phase 1 — Brand foundation

- Replace Editorial V2 token system with Brand V3 tokens.
- Remove serif display typography.
- Build header, footer horizon, circle progress, buttons, focus states, dividers, and textures.
- Create a `/design-system` review route or Storybook stories.

**Exit:** approved style tile and component foundation.

### Phase 2 — Homepage and global shell

- Rebuild home hero, capabilities, process boundary, header, footer, and responsive navigation.
- Capture desktop and mobile screenshots.

**Exit:** first brand-recognition review.

### Phase 3 — Learner core

- Rebuild role selection, dashboard, interactive house, and accessible list view.
- Validate keyboard flow and 200% zoom.

**Exit:** approved end-to-end learner entry and discovery experience.

### Phase 4 — Learning and completion

- Rebuild lesson, transcript, activity, feedback, and certificate.
- Validate equivalent non-drag activity controls.

**Exit:** complete learner journey approved.

### Phase 5 — Administrator experience

- Rebuild analytics, content status, review timeline, content editor, and accessibility checklist.
- Validate data-label contrast and table responsiveness.

**Exit:** admin concept approved.

### Phase 6 — Hardening and preview

- Run typecheck, lint, unit tests, production build, Playwright, axe, Lighthouse, keyboard review, responsive checks, and reduced-motion checks.
- Generate final evidence screenshots.
- Deploy a protected Vercel preview.
- Merge only after visual approval.

**Exit:** green CI, approved preview, and proposal-ready evidence.

## 12. Acceptance criteria

### Visual

- The interface is recognizable as connected to KOTC's current approved brand without copying the current site page-for-page.
- White and neutral surfaces remain the majority of every major screen.
- Navy is the only dominant action colour.
- Sky blue is used for support surfaces, not the entire page.
- Yellow and red are accents, not universal backgrounds.
- Circle, dot, and horizon motifs appear consistently but sparingly.
- The header, hero, progress system, interactive house, and footer share one visual system.
- No unapproved cultural imagery or invented symbolism is present.

### UX

- Each learner screen has one obvious primary action.
- Dashboard answers: where am I, what is next, how much remains?
- Interactive house supports pointer, keyboard, and list-based use.
- Lesson content remains readable at 200% zoom.
- Activity is usable without dragging.
- Admin workflows visibly distinguish draft, review, accessibility, cultural review, and approved states.

### Quality

- WCAG 2.2 AA automated checks contain no serious or critical findings.
- All keyboard flows pass.
- No text relies on red, yellow, or colour alone for meaning.
- Responsive snapshots pass at 360, 768, 1024, and 1440 px.
- Light theme is complete; dark theme may be retained only if it meets the same visual and accessibility standard.
- CI passes typecheck, lint, unit, build, E2E, accessibility, and visual-regression checks.
- Vercel preview has no runtime errors on the main demo routes.

## 13. Definition of done

V3 is complete only when:

- Official assets are registered and approved.
- All planned screens use the Brand V3 system.
- Old green-heavy and generic Editorial V2 styling is removed from active routes.
- All acceptance criteria pass.
- New proposal screenshots are generated.
- A reviewable Vercel preview is approved.
- The PR is merged only after explicit visual approval.
