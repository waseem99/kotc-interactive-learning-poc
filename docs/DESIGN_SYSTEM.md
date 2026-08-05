# KOTC POC Design System v0.1

## 1. Purpose

This design system supports a coded proof of concept for the KOTC interactive learning platform. It is intentionally neutral, accessible, and easy to replace after KOTC-led cultural co-design.

It must not be presented as the final Indigenous visual identity.

## 2. Experience principles

1. **Culturally cautious:** use no invented Indigenous motifs, symbols, stories, language, or visual claims.
2. **Learner-controlled:** allow users to pause, return, resize text, reduce motion, and choose accessible alternatives.
3. **Clear before clever:** interaction must support learning, not decoration.
4. **Non-shaming:** feedback explains what to try next without punitive language.
5. **Equivalent access:** hover, drag, animation, and visual cues must have keyboard, touch, and text equivalents.
6. **Mobile-first:** primary tasks must work comfortably on smaller screens.
7. **Operationally maintainable:** components should map to reusable CMS patterns in the future platform.

## 3. Design-token architecture

Use semantic CSS custom properties rather than hard-coded values inside components.

```css
:root {
  --color-surface-page: #f7f6f2;
  --color-surface-card: #ffffff;
  --color-surface-subtle: #ecebe5;
  --color-text-primary: #1d2522;
  --color-text-secondary: #52605b;
  --color-border-default: #c9cfcc;
  --color-action-primary: #1f6b55;
  --color-action-primary-hover: #174f40;
  --color-action-secondary: #5b4b75;
  --color-focus: #005fcc;
  --color-success: #246b3c;
  --color-warning: #8a5a00;
  --color-danger: #a12b2b;
  --color-info: #1f5c8a;

  --font-sans: "Inter", system-ui, sans-serif;
  --font-display: "Atkinson Hyperlegible", "Inter", system-ui, sans-serif;

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.375rem;
  --text-2xl: 1.75rem;
  --text-3xl: 2.25rem;

  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;

  --radius-sm: 0.375rem;
  --radius-md: 0.75rem;
  --radius-lg: 1.25rem;
  --radius-pill: 999px;

  --shadow-sm: 0 1px 2px rgb(0 0 0 / 0.08);
  --shadow-md: 0 8px 24px rgb(0 0 0 / 0.10);

  --duration-fast: 120ms;
  --duration-standard: 220ms;
  --easing-standard: cubic-bezier(0.2, 0, 0, 1);
}
```

The palette is functional placeholder styling only. It must be replaced or approved during formal co-design.

## 4. Theme modes

Support:

- Light theme
- Dark theme
- System preference
- Reduced motion
- Standard, large, and extra-large text settings

Dark mode must use semantic token overrides rather than component-specific colors.

## 5. Typography

### Recommended fonts

- UI/body: Inter or system sans
- Accessible display/headings: Atkinson Hyperlegible where available

### Rules

- Body text minimum 16px equivalent
- Line height 1.5 or greater for paragraphs
- Maximum reading width approximately 70 characters
- Avoid all-caps for long labels
- Do not use typography to imitate Indigenous visual language
- Headings must follow a logical HTML hierarchy

## 6. Layout system

- 4px base spacing grid
- Mobile-first breakpoints
- Content container maximum width around 1200px
- Reading content width around 720px
- Minimum touch target 44x44 CSS pixels
- Persistent learner context should not obscure content on small screens

### Suggested breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 7. Core component inventory

### Foundation components

- Button
- Icon button
- Link
- Input
- Select
- Checkbox
- Radio group
- Badge
- Tag
- Tooltip
- Alert
- Dialog
- Drawer
- Tabs
- Progress bar
- Skeleton

### Learning components

- Program card
- Module card
- Lesson card
- Continue-learning card
- Progress summary
- Resource card
- Transcript panel
- Certificate card
- Feedback panel
- Activity instruction block
- Accessible alternative switch

### Interactive-house components

- House canvas
- Hotspot button
- Topic preview panel
- Completion marker
- House legend
- List-view equivalent
- Mobile topic sheet

### Administrator components

- Metric card
- Completion chart placeholder
- Content-status table
- Learner-status table
- Quick-action card
- Filter bar

## 8. Component states

Every interactive component must define:

- Default
- Hover
- Focus-visible
- Active/pressed
- Selected
- Disabled
- Loading
- Error
- Success/completed
- Locked, where relevant

State must never be communicated by color alone.

## 9. Interaction and motion rules

- Motion supports orientation and feedback only
- Default transitions: 120–220ms
- No autoplay animation that cannot be paused
- Respect `prefers-reduced-motion`
- Avoid parallax and large camera-like movement
- Do not require hover
- Do not use drag as the only completion method
- Maintain focus after drawers/dialogs close

## 10. Accessibility requirements

Target WCAG 2.2 Level AA in the POC.

Mandatory rules:

- Visible focus indicator
- Logical keyboard order
- Semantic landmarks and headings
- Accessible names for icon-only controls
- Sufficient color contrast
- Text zoom support to 200%
- Reflow without horizontal scrolling at narrow widths where practical
- Captions/transcript concept for media
- Accessible status announcements for activity feedback
- No keyboard trap
- Equivalent list-based interactive-house experience
- Non-drag alternative for the activity

## 11. Content style

Use plain, respectful, action-oriented language.

### Preferred patterns

- “Try another option.”
- “You can review the explanation before continuing.”
- “Your progress is saved on this device for the demonstration.”

### Avoid

- “Wrong.”
- “Failed.”
- “You should already know this.”
- Gamified language that trivializes cultural or workplace-safety topics

## 12. Iconography and imagery

- Use simple interface icons only
- Use neutral geometric or construction-related placeholder illustrations
- No feathers, dreamcatchers, medicine wheels, beadwork patterns, regalia, sacred items, or generic pan-Indigenous imagery
- No photographs of Indigenous people without appropriate permission and context
- All decorative images must have empty alt text; informative images require useful text alternatives

## 13. Data visualization rules

- All administrator data is illustrative
- Use labels and values, not color alone
- Provide table or text equivalents for charts
- Avoid decorative dashboards with no operational meaning
- Clearly mark mock metrics

## 14. Design-system implementation

Recommended files:

```text
design-system/
  tokens.css
  themes.css
  component-contracts.md
components/ui/
  button.tsx
  card.tsx
  progress.tsx
  dialog.tsx
  tabs.tsx
  alert.tsx
```

Each component contract should include:

- Purpose
- Props
- Variants
- States
- Keyboard behavior
- Screen-reader behavior
- Responsive behavior
- Example use
- Misuse to avoid

## 15. Design-system acceptance checklist

- [ ] Tokens are semantic and centralized
- [ ] Light and dark themes work
- [ ] Text-size controls do not break layouts
- [ ] Components expose focus-visible states
- [ ] No state relies on color alone
- [ ] All controls meet minimum target size
- [ ] Reduced-motion mode is respected
- [ ] House hotspots and activity controls work by keyboard
- [ ] Neutral placeholder visual direction is clearly disclosed
- [ ] Components are reusable across learner and administrator routes
