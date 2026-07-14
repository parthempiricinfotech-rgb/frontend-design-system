# Component Audit Notes

These notes are legitimate documentation for deciding whether a difference is intentional.

## Button

The implementation uses a 3px focus ring instead of the 2px library ring in Windows high contrast mode. This is intentional because the 2px token failed internal keyboard visibility review on 2026-07-08.

## Tooltip

The Tooltip transition is disabled when `prefers-reduced-motion: reduce` is active. This is intentional and should be logged as a documented exception, not implementation drift.

## LegacyBanner

`LegacyBanner` is deprecated and intentionally absent from the Figma component library. It remains in code until all marketing pages migrate to `Card` and `Badge` compositions. Removal target: 2026-08-31.

## Input

The design library defines the error border as `color/danger/500`. The implementation currently uses `--color-danger-600`. No exception has been approved.

## Badge

Compact badges should preserve an 8px horizontal padding value so icon and text variants align in dense tables. No compact-size exception has been approved.

## Modal

The design library defines the dark overlay as 64% opacity. The implementation token currently resolves to 72% in dark mode.
