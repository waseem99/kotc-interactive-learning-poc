# Contributing

## Branch strategy

- `main`: stable, deployable branch
- `planning/*`: planning and documentation
- `feat/*`: one feature or route
- `fix/*`: defect correction
- `chore/*`: tooling or maintenance

Examples:

- `feat/learner-dashboard`
- `feat/interactive-house`
- `feat/accessible-activity`
- `fix/house-keyboard-focus`

## Pull-request rule

No direct implementation work should be committed to `main`. Each pull request must have a narrow scope and pass automated checks.

## AI-assisted development rule

AI-generated code is treated as untrusted draft code until reviewed.

Every implementation request to an AI assistant should specify:

- Objective
- Acceptance criteria
- Accessibility behavior
- Cultural-safety limits
- Existing components/tokens to reuse
- Files allowed to change
- Tests required

The developer remains responsible for correctness, security, licensing, accessibility, and maintainability.

## Commit convention

Use conventional prefixes:

- `feat:` new user-facing behavior
- `fix:` defect correction
- `docs:` documentation
- `test:` tests
- `refactor:` internal restructuring
- `chore:` configuration/tooling
- `style:` visual-only change

## Definition of review-ready

A pull request is ready when:

- Scope is complete
- TypeScript and lint pass
- Relevant unit and Playwright tests are included
- Keyboard interaction has been checked
- Responsive states have been checked
- No final cultural imagery or unsupported claims were introduced
- Screenshots are attached for visual changes
- Known limitations are stated

## Mandatory review checklist

### Product and scope

- [ ] Directly supports an approved POC requirement
- [ ] Does not add production-only functionality
- [ ] Mock content/data is clearly illustrative

### Design system

- [ ] Uses semantic tokens
- [ ] Reuses existing components where appropriate
- [ ] Includes all required states
- [ ] Works in light/dark and text-size modes

### Accessibility

- [ ] Keyboard operable
- [ ] Focus visible and logical
- [ ] Accessible name/role/state present
- [ ] No color-only, hover-only, sound-only, or drag-only behavior
- [ ] Reduced-motion behavior considered

### Cultural safety

- [ ] No invented Indigenous motifs, symbols, language, stories, or identity claims
- [ ] Neutral placeholder visual direction maintained
- [ ] POC disclaimer remains accurate

### Engineering

- [ ] No unnecessary dependency
- [ ] No secrets or private proposal content committed
- [ ] Tests cover critical behavior
- [ ] No console errors
- [ ] Production build passes

## Security and confidentiality

Do not commit:

- Client-private content
- Personal data
- Secrets or tokens
- Final commercial pricing
- Unapproved artwork or photographs
- Private proposal attachments

Use `.env.local` for local values and Vercel environment variables for preview configuration.
