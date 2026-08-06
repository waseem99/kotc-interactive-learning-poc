# KOTC Learning Commons V4 — Frontend Implementation Plan

## Objective

Rebuild the proposal frontend from the ground up using the Learning Commons V4 asset pack. The new interface must feel like a credible educational product rather than a proposal landing page or generic LMS.

## Implementation priorities

1. Replace reconstructed branding with the user-supplied KOTC logo reference.
2. Remove the oversized hero headline, fake browser window, floating notes, top disclaimer bar, and decorative overload.
3. Introduce a calm product shell with one clear action per screen.
4. Make the interactive house the signature learner interaction.
5. Use the V4 illustrations and sprites consistently across learner, lesson, activity, completion, and admin routes.
6. Preserve existing route logic, accessibility preferences, saved progress, keyboard alternatives, and automated tests.

## Global shell

- 72 px white header.
- Official supplied logo at 150–170 px desktop and 124–140 px mobile.
- Primary navigation: My learning, Interactive house, Resources, Admin preview.
- Thin gold active underline.
- Accessibility control reduced to a utility action, not a dominant CTA.
- Proposal notice moved below the homepage hero and into the footer.
- Footer uses a restrained horizon treatment, not a full-screen decorative wave.

## Homepage

- Two-column hero within a 1240 px container.
- Headline capped at three lines and 64 px desktop / 42 px mobile.
- Complete interactive-house composition visible above the fold.
- Hero illustration: `/assets/v4/illustrations/hero-workshop.svg`.
- Signature house: `/assets/v4/illustrations/house-cutaway.svg`.
- Five-step journey: `/assets/v4/illustrations/learning-path.svg`.
- Accessibility visual: `/assets/v4/illustrations/accessibility-devices.svg`.
- Materials visual: `/assets/v4/illustrations/materials-board.svg`.
- No fake browser chrome or clipped dashboard preview.

## Learner dashboard

- Dominant Continue learning panel.
- Progress ring, current chapter, estimated time, and next action grouped together.
- Learning trail replaces equal card grid.
- Resources and certificate remain secondary.

## Interactive house

- House occupies 65% of desktop canvas; lesson panel 35%.
- Diagram/List segmented control is always visible.
- Hotspots are real DOM controls positioned over the SVG, not an image map.
- Current hotspot uses gold + navy; completed uses icon + text + restrained success colour.
- Same lesson state is reachable by pointer, keyboard, and list view.

## Lesson

- 680–720 px reading measure.
- Media area, transcript drawer, resources panel, glossary, and chapter progress.
- Transcript and resources use sky-blue surfaces.
- Previous/next navigation remains persistent and keyboard accessible.

## Activity

- Material cards use `materials-sprite.svg` or `materials-board.svg`.
- Drag-and-drop and select-and-place remain equivalent.
- Feedback always includes icon, heading, explanation, and next action.

## Completion

- White certificate with navy border, gold seal, and restrained red accent.
- No claim of formal certification.
- Horizon treatment appears only below the certificate.

## Admin

- Separate operational layout with calm white canvas.
- Structured tables and timelines instead of excessive cards.
- Every chart value available as text.
- Review statuses: Draft, Accessibility review, Cultural review, Ready for approval, Approved, Published.

## Accessibility acceptance

- WCAG 2.2 AA target.
- 44 × 44 px minimum touch target.
- 200% zoom support.
- Keyboard-visible focus.
- Reduced-motion support.
- No colour-only status.
- House list alternative remains first-class.
- Automated axe serious/critical findings remain zero.

## Delivery sequence

1. Global shell and tokens.
2. Homepage.
3. Dashboard and house.
4. Lesson and activity.
5. Completion and admin.
6. Responsive refinement.
7. Automated tests and proposal screenshots.
8. Protected Vercel preview.

## Definition of done

- All current routes remain functional.
- V4 assets are used from `/public/assets/v4`.
- No Brand V3 oversized typography or fake browser composition remains.
- Desktop, tablet, mobile, large-text, dark-mode, and reduced-motion states pass.
- Typecheck, lint, unit tests, build, Playwright, and axe pass.
- PR remains draft until visual approval.
