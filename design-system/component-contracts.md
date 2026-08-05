# Component contracts

This file records the minimum implementation contract for proposal-demo components.

## Button

- Uses a native `button` or semantically correct link.
- Minimum target size: 44×44 CSS pixels.
- Variants: primary, secondary, ghost, icon.
- States: default, hover, focus-visible, active, disabled.
- Icon-only controls require an accessible name.

## Status badge

- Status is always communicated by text and icon, never colour alone.
- Supported states: completed, current, available, locked.
- Does not receive focus because it is informational.

## Interactive-house topic

- Implemented as a semantic button.
- Supports pointer, touch, and keyboard activation.
- Exposes selected state with `aria-pressed`.
- Has a complete list-view equivalent using the same topic data.
- Does not contain culturally specific imagery or symbolism.

## Learning activity card

- Can be dragged by pointer users.
- Can also be selected and placed using standard buttons.
- Instructions explain both methods.
- Feedback is announced in a live region and uses supportive language.

## Progress presentation

- Always includes a numeric text value.
- Visual ring/bar is supplemental only.
- Values are clamped between 0 and 100.
