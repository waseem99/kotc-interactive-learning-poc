# Demo Scope and Acceptance Matrix

## 1. Proposal purpose

The demo exists to prove technical and UX capability against the most important KOTC RFP requirements. It is not a full implementation and must not create an expectation that production data, hosting, CMS, or cultural design is complete.

## 2. Requirement-to-demo matrix

| RFP capability | Demo evidence | Acceptance criteria | Explicit limitation |
|---|---|---|---|
| Employer vs employee content | Role-selection screen and role label on dashboard | Both roles can be selected and persisted locally | No real account or authorization model |
| Progress tracking | Dashboard progress, module states, resume action | Progress persists after refresh | Stored on device only |
| Certificate of completion | Completion/certificate concept state | Certificate card appears after sample activity completion | Not a real credential or downloadable signed certificate |
| Click and drag | Sample categorization activity | Pointer/touch interaction works | Sample activity only |
| Accessible drag alternative | Select-and-place or ordered controls | Activity can be completed without dragging | Demonstrates approach, not full authoring system |
| Click and flip | Reveal-card pattern in lesson/activity | Works by click and keyboard | Sample content only |
| Hover to reveal | Topic preview where supported | Same content available by click, focus, and touch | Hover is not required |
| Scroll/highlight interaction | Optional sample lesson emphasis | Reduced-motion/static alternative exists | Can be excluded if schedule risk arises |
| Interactive house | 2D house with hotspots and progress states | Keyboard, touch, and pointer access; list equivalent | Neutral placeholder concept, not final artwork |
| Video, captions, transcript | Lesson media placeholder and transcript panel | Transcript accessible and navigable | No final media supplied |
| Day/night mode | Theme control | Preference persists locally | POC theming only |
| Font accessibility | Text-size control | Layout remains usable in all modes | Not a browser-level assistive technology |
| KOTC administrative control | Admin dashboard and content shortcuts | Key administrative concepts are visible | No actual CMS editing or backend |
| Analytics dashboard | Sample metrics and content status | Data clearly marked illustrative | No tracking is performed |
| Mobile responsive | Mobile dashboard and house layouts | Primary flow works at 360px | Device/browser matrix remains limited |
| Cultural safety | Neutral visuals and disclaimer | No invented cultural motifs or claims | Final design requires KOTC-led co-design |

## 3. Primary route acceptance

### `/role-selection`

- [ ] Two role choices are understandable
- [ ] Selection works by keyboard and pointer
- [ ] Selected role is announced and stored
- [ ] No sensitive demographic information is requested

### `/dashboard`

- [ ] Shows role and illustrative progress
- [ ] Continue action is visually prominent
- [ ] Completed/current/locked states are distinguishable without color alone
- [ ] Theme, text-size, and reduced-motion controls are available

### `/house`

- [ ] Four to six hotspots are present
- [ ] Each hotspot has an accessible name
- [ ] Keyboard users can open every topic
- [ ] Focus remains logical when the topic panel opens/closes
- [ ] List view exposes the same topics and completion states
- [ ] House remains usable on mobile

### `/lesson/sample`

- [ ] Lesson heading, duration, progress, content, media placeholder, transcript, and resources appear
- [ ] Transcript can be opened and navigated by keyboard
- [ ] Previous/next navigation is clear

### `/activity/sample`

- [ ] Instructions are understandable
- [ ] Activity works by pointer/touch
- [ ] Activity works without dragging
- [ ] Feedback is supportive and announced to assistive technology
- [ ] Completion persists locally

### `/completion`

- [ ] Completion state is clear
- [ ] Certificate is explicitly a concept/example
- [ ] User has a clear next action

### `/admin`

- [ ] Metrics are clearly illustrative
- [ ] Tables or labels support any charted values
- [ ] Quick actions represent content, users, certificates, and reporting
- [ ] No operational claim implies a functioning backend

## 4. Cross-cutting acceptance

### Accessibility

- [ ] WCAG 2.2 AA target is stated
- [ ] No serious or critical automated accessibility findings on primary routes
- [ ] Full demo journey is keyboard operable
- [ ] Focus is visible
- [ ] Text can scale without loss of primary functionality
- [ ] Reduced-motion mode is respected
- [ ] No essential information depends on color, sound, hover, or drag alone

### Responsive behavior

- [ ] 360px
- [ ] 390px
- [ ] 768px
- [ ] 1024px
- [ ] 1440px

### Quality

- [ ] TypeScript passes
- [ ] Lint passes
- [ ] Unit tests pass
- [ ] Playwright primary journey passes
- [ ] Production build passes
- [ ] Console contains no unhandled errors

### Proposal readiness

- [ ] Demo disclaimer is visible
- [ ] Vercel is described only as preview hosting
- [ ] AWS Canada remains the production recommendation
- [ ] Screenshots are taken from the deployed build
- [ ] All sample content and metrics are marked illustrative
- [ ] No final cultural artwork or unsupported identity claim is present

## 5. Scope-change rule

A new feature may be accepted only when:

1. It demonstrates a direct RFP requirement.
2. The core demo flow is already complete.
3. It can be implemented and tested without risking final deployment.
4. The product, technical, and proposal leads agree to include it.

Otherwise, record it as a future production feature and do not add it to the POC.
