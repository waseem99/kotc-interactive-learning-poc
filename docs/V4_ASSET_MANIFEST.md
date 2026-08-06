# KOTC Learning Commons V4 — Asset Pack

## Status

Complete and ready for frontend implementation on `redesign/learning-commons-v4-assets`.

All files are SVG/CSS/JSON so they are scalable, editable, lightweight, and straightforward to use in Next.js.

## Core assets

| Purpose | File |
|---|---|
| Header logo reference | `public/assets/v4/brand/kotc-logo-placeholder.svg` |
| Homepage hero | `public/assets/v4/illustrations/hero-workshop.svg` |
| Interactive house | `public/assets/v4/illustrations/house-cutaway.svg` |
| Learning journey | `public/assets/v4/illustrations/learning-path.svg` |
| Materials learning | `public/assets/v4/illustrations/materials-board.svg` |
| Accessibility section | `public/assets/v4/illustrations/accessibility-devices.svg` |
| Supporting scenes | `public/assets/v4/images/context-scenes.svg` |
| Material textures | `public/assets/v4/materials/materials-sprite.svg` |
| Brand patterns | `public/assets/v4/patterns/brand-patterns.svg` |
| Functional icons | `public/assets/v4/icons/ui-icons.svg` |
| Semantic tokens | `design-system/learning-commons-v4-tokens.css` |

## SVG sprite use

```tsx
<svg role="img" aria-label="Timber framing detail">
  <use href="/assets/v4/images/context-scenes.svg#timber-framing" />
</svg>
```

Use the same pattern for material, brand-pattern, and icon sprites.

## Brand and cultural boundary

- The included logo file is an explicit layout placeholder, not a reconstructed or imitation KOTC logo.
- Replace it with an official KOTC SVG before client presentation or production.
- No cultural meaning is assigned to circles, rays, dots, houses, landscapes, colours, or horizon forms.
- No cultural identity, story, teaching, language, clothing, regalia, or symbolic interpretation has been invented.
- Documentary photography is intentionally excluded until KOTC supplies or approves imagery and releases.

## Accessibility rules

- Decorative assets: empty alt text or `aria-hidden="true"`.
- Informational assets: concise purpose-based alt text.
- The house visual must not become an image map; interactive rooms and hotspots remain real DOM controls.
- Do not place essential instructions solely inside SVG text.
- Do not use colour as the only status indicator.
- Respect reduced-motion preferences.
