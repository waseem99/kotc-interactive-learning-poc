# Complete Design Process

## 1. Design objective

Create a functional, accessible, culturally cautious proof of concept that demonstrates technical feasibility and learner experience without pretending to be KOTC’s final visual identity.

The process prioritizes coded prototypes over separate high-fidelity mockups because the bid-stage value comes from demonstrating real interactions, responsive behavior, and accessibility.

## 2. Design governance

### Decision roles

| Area | Responsible | Final approval |
|---|---|---|
| POC scope | Product/PM | Proposal lead |
| UX flow | UX/design lead | Product/PM |
| Design system | UI/design lead | Design lead |
| Cultural safety | Proposal/cultural reviewer | KOTC in production; internal caution gate for POC |
| Technical feasibility | Frontend lead | Technical lead |
| Accessibility | QA/accessibility lead | Technical lead |
| External screenshots and claims | Proposal lead | Bid owner |

AI may propose options, but it does not approve any of the above.

## 3. Stage 1 — Requirement extraction

### Inputs

- KOTC RFP
- Approved technical proposal outline
- Agreed POC scope
- Agreed technology stack

### AI-assisted tasks

- Extract user groups, required actions, states, and constraints
- Convert requirements into user stories and acceptance criteria
- Identify ambiguities and risks
- Build a requirement-to-screen matrix

### Human outputs

- Approved screen inventory
- Approved demo journey
- Approved non-goals
- Cultural-safety disclaimer

### Gate

No design work begins until the team agrees that the POC demonstrates only the highest-value RFP requirements.

## 4. Stage 2 — Information architecture

### Deliverables

- Route map
- Page hierarchy
- Content hierarchy
- Navigation model
- Role-based pathway map

### Required routes

```text
/
/role-selection
/dashboard
/house
/lesson/sample
/activity/sample
/completion
/admin
/accessibility-statement
```

### AI-assisted tasks

- Generate route options
- Check missing transitions and dead ends
- Draft labels and navigation text

### Human review

- Confirm plain language
- Confirm role logic
- Confirm no unsupported claims

## 5. Stage 3 — User flows and state maps

### Primary learner flow

Role selection → Dashboard → Interactive house → Topic preview → Lesson → Activity → Completion

### Supporting flows

- Change accessibility preferences
- Switch house to list view
- Resume from saved progress
- Review transcript
- Return to dashboard
- View certificate state

### Administrator flow

Admin dashboard → Review content status → Open module shortcut → Review engagement summary

### State maps to define

- First visit
- Returning user
- Module available
- Module current
- Module completed
- Module locked
- Activity incomplete
- Activity completed
- Reduced-motion mode
- Large-text mode
- Mobile layout

## 6. Stage 4 — Content-first wireframing

Build low-fidelity layouts directly in Next.js using semantic HTML and placeholder components.

### Why coded wireframes

- Faster transition to working demo
- Early responsive testing
- Early keyboard and screen-reader testing
- No duplicate Figma-to-code effort
- Screenshots can be taken from the actual product

### AI-assisted tasks

- Generate initial component hierarchy
- Propose content density and responsive stacking
- Draft neutral placeholder copy

### Human review criteria

- Main task is obvious
- Reading order is logical
- No component exists only for decoration
- Mobile hierarchy remains usable
- Language is respectful and simple

## 7. Stage 5 — Design-system definition

Use `docs/DESIGN_SYSTEM.md` as the controlling specification.

### Required outputs

- Semantic color tokens
- Typography scale
- Spacing and layout rules
- Component contracts
- Interaction states
- Accessibility rules
- Light/dark theme
- Large-text mode
- Reduced-motion mode

### AI-assisted tasks

- Generate token scaffolding
- Produce component variants
- Detect inconsistent values
- Draft Storybook-style usage examples if time permits

### Human approval gate

The design lead approves design-system v0.1 before individual screens receive visual polish.

## 8. Stage 6 — Functional prototype design

### Screen 1: Role selection

Design focus:

- Simple choice architecture
- Clear role descriptions
- No forced demographic disclosure
- Keyboard-operable selection

### Screen 2: Learner dashboard

Design focus:

- Continue-learning priority
- Understandable progress
- Clear module states
- Accessible preferences

### Screen 3: Interactive house

Design focus:

- House as a chapter-navigation model
- Functional construction zones rather than cultural decoration
- Large interactive targets
- Persistent legend
- Same content in list view

### Screen 4: Lesson

Design focus:

- Reading and media balance
- Transcript visibility
- Progress context
- Resource access

### Screen 5: Activity

Design focus:

- Clear instructions
- Equivalent pointer and keyboard methods
- Supportive feedback
- Completion announcement

### Screen 6: Completion

Design focus:

- Clear accomplishment state
- Next action
- Certificate concept without real credentialing

### Screen 7: Administrator dashboard

Design focus:

- Operational usefulness
- Clearly marked sample data
- Accessible chart/table alternatives

## 9. Stage 7 — Cultural-safety review

The POC uses a precautionary review because final KOTC/community review is not available during bid development.

### Review questions

- Does any visual imply Indigenous identity without authorization?
- Does any icon, pattern, color story, illustration, or phrase claim cultural meaning?
- Are people or community stories represented without consent?
- Is the interactive-house metaphor functional rather than culturally decorative?
- Does feedback remain trauma-informed and non-shaming?
- Is the disclaimer visible and accurate?

### Required action

Remove or neutralize any questionable element. Do not attempt to “improve” it by inventing a more authentic-looking substitute.

## 10. Stage 8 — Accessibility design review

### Automated review

- axe-core
- Lighthouse
- linting for accessible JSX patterns

### Manual review

- Full keyboard path
- Visible focus
- Screen-reader spot check
- 200% zoom
- Narrow viewport reflow
- Dark mode
- Large-text mode
- Reduced-motion mode
- Touch target review
- Non-drag activity completion
- Interactive-house list equivalence

### Accessibility gate

No serious or critical issue remains on the primary demo path.

## 11. Stage 9 — Responsive and device review

Test at minimum:

- 360px mobile
- 390px mobile
- 768px tablet
- 1024px laptop
- 1440px desktop

Confirm:

- No important action is hidden
- House hotspots remain operable
- Drawers and dialogs fit the viewport
- Text-size mode does not overlap controls
- Navigation does not trap focus

## 12. Stage 10 — Usability review

Run a short internal task-based test with at least three people who did not build the screen.

### Tasks

1. Select a learner role.
2. Resume the current module.
3. Open a topic in the house using the keyboard.
4. Switch to the list-based house view.
5. Find the transcript.
6. Complete the activity without dragging.
7. Increase text size and enable reduced motion.
8. Identify that administrator data is illustrative.

### Record

- Completion success
- Confusion points
- Accessibility barriers
- Time to complete
- Recommended fix

## 13. Stage 11 — Visual refinement

Only after the complete flow works:

- Improve spacing and hierarchy
- Standardize component variants
- Add restrained motion
- Refine empty, loading, locked, and completed states
- Add neutral illustration detail
- Polish mobile layouts

Do not add new features during visual refinement.

## 14. Stage 12 — Evidence capture

Capture screenshots only from the final deployed build.

### Required proposal evidence

- Learner dashboard desktop
- Learner dashboard mobile
- Interactive house desktop
- Interactive house list alternative
- Lesson/transcript screen
- Accessible activity
- Administrator dashboard

### Each screenshot annotation should state

- RFP requirement demonstrated
- Functional behavior
- Accessibility consideration
- POC limitation where relevant

## 15. Stage 13 — Design handoff and documentation

### Required documentation

- Design-system specification
- Component contracts
- Route and user-flow map
- Accessibility notes
- Known limitations
- Screenshot inventory
- Demo script
- Deployment instructions

### Handoff rule

The repository is the source of truth. Any separate design artifact must not conflict with the deployed prototype.

## 16. AI prompt and review discipline

Every AI request should include:

1. Screen or component objective
2. Exact acceptance criteria
3. Accessibility requirements
4. Cultural-safety limits
5. Existing design tokens/components to reuse
6. Files allowed to change
7. Tests required

### Example implementation prompt structure

```text
Implement the learner progress card using the existing design tokens and Card component.

Requirements:
- Show overall percentage, current module, and continue action.
- Use semantic HTML.
- Work at 360px and 1440px.
- Provide visible focus and no color-only status.
- Do not add new dependencies.
- Add component and Playwright tests.
- Do not change unrelated files.
```

### Review rule

Never merge AI-generated code solely because it compiles. Review semantics, accessibility, state behavior, performance, visual consistency, and scope.

## 17. Final design acceptance checklist

- [ ] All required routes exist
- [ ] Primary demo journey is complete
- [ ] Design tokens are used consistently
- [ ] Culturally specific content is absent or explicitly authorized
- [ ] Functional disclaimer is visible
- [ ] Interactive house has equivalent list access
- [ ] Activity can be completed without dragging
- [ ] Keyboard path is complete
- [ ] Light, dark, large-text, and reduced-motion modes work
- [ ] Mobile layouts are usable
- [ ] Screenshots match the deployed demo
- [ ] No proposal claim exceeds demonstrated behavior
