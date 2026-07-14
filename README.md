# frontend-design-system

Mock repository for a design drift audit run. This repo intentionally contains a mix of aligned components, documented implementation exceptions, real drift candidates, and code-only deprecated components.

## Audit Resources

- Figma library: `Core UI Components` (`https://www.figma.com/design/j5gMJWE3Un9HnJhdUbTjW2`)
- GitHub repository: `https://github.com/parthempiricinfotech-rgb/frontend-design-system`
- Storybook static export: `storybook-static/`, built from `main` at `15 Jul 2026 09:00 IST`
- Design tokens: `src/tokens/tokens.css` and `src/tokens/tokens.json`
- Component metadata: `src/metadata/component-registry.json`
- Component docs: `src/docs/component-audit-notes.md`
- Audit sheet seed: Google Sheet `Design Drift Audit`, tab `Component Audit` (`https://docs.google.com/spreadsheets/d/1ovRqoX0Fy5PHZhauoGo__k1WaLwEypbrGmsNKJFnJL0`)
- Ownership sheet seed: Google Sheet `Component Ownership Matrix` (`https://docs.google.com/spreadsheets/d/1FRMI5aBDKXX4VTayiFAhO6qKKnnVvj1oLsIpOm-l7sA`)
- Jira target: `DSSYNC`
- Teams target channel: `TEST`
- Handoff manifest: `AUDIT_FIXTURE_MANIFEST.md`

## Component Set

Implemented components: Button, Input, Card, Badge, Avatar, Toggle, Tooltip, Modal, Tabs, Select.

Intentional code-only component: `LegacyBanner` is deprecated and remains only for migration support.

Intentional Figma-only component: `Toast` is published in the library but has no implementation yet.

## Known Fixture Outcomes

- Button has a documented focus-ring exception for WCAG contrast in Windows high contrast mode.
- Input has a likely error-state drift: code uses `--color-danger-600`, design expects `--color-danger-500`.
- Badge has a likely density drift in compact size horizontal padding.
- Modal has a likely dark-mode overlay drift.
- Tooltip has a documented reduced-motion transition exception.
- Toast has no engineering owner in the ownership matrix.

These fixture outcomes are here to make the audit prompt deterministic while still requiring evidence collection across code, docs, Storybook, tokens, and metadata.
