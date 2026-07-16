# DSSYNC Audit Fixture Manifest

Created for the design drift audit prompt.

## Required Resources

- Git repository: `C:\Users\Empiric\Desktop\frontend-design-system`
- Repository name: `frontend-design-system`
- GitHub repository: `https://github.com/parthempiricinfotech-rgb/frontend-design-system`
- GitHub full name: `parthempiricinfotech-rgb/frontend-design-system`
- Figma file: `Core UI Components`
- Figma URL: `https://www.figma.com/design/j5gMJWE3Un9HnJhdUbTjW2`
- Figma library version label: `Core UI Components v2026.07.15`
- Storybook static export: `C:\Users\Empiric\Desktop\frontend-design-system\storybook-static`
- Storybook version: `static-main-2026-07-15T09:00:00+05:30`
- Design Drift Audit sheet: `https://docs.google.com/spreadsheets/d/1ovRqoX0Fy5PHZhauoGo__k1WaLwEypbrGmsNKJFnJL0`
- Required audit tab: `Component Audit`
- Component Ownership Matrix sheet: `https://docs.google.com/spreadsheets/d/1FRMI5aBDKXX4VTayiFAhO6qKKnnVvj1oLsIpOm-l7sA`
- Jira project: `DSSYNC` (created before this setup run)
- Microsoft Teams channel: `TEST` (created before this setup run)

## Seeded Audit Cases

- No expected drift: Card, Avatar, Toggle, Tabs, Select.
- Documented exceptions: Button focus ring, Tooltip reduced-motion transition, LegacyBanner deprecation.
- Confirmed drift candidates: Input error border token, Badge compact padding, Modal dark overlay opacity.
- Figma-only component: Toast.
- Code-only deprecated component: LegacyBanner.
- Missing ownership case: Toast engineering owner is blank in the ownership matrix.

## Additional Execution Packs

- Execution 02 CRUD pack: `mock-executions/execution-02`
- Execution 02 purpose: run one more audit pass that exercises create, read, update, and duplicate-consolidation/delete behavior without renaming the canonical resources.

## Figma Account Constraint

The connected Figma plan is Starter, so the mock library is organized into three pages: `Cover`, `Foundations`, and `Components`. Dark-mode evidence is represented through component variants and documentation notes rather than multi-mode Figma variables.
