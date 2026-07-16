# Execution 02 CRUD Pack

Purpose: provide one additional execution pass for the design drift audit fixture without changing the canonical resource names.

Use the same core resources:

- GitHub repo: `parthempiricinfotech-rgb/frontend-design-system`
- Figma file: `Core UI Components`
- Audit sheet: `Design Drift Audit`, tab `Component Audit`
- Ownership sheet: `Component Ownership Matrix`
- Jira project: `DSSYNC`
- Teams channel: `TEST`

## CRUD Intent

This execution pack is designed to let a later agent exercise all four audit-side operations:

- Create: open Jira issues for newly confirmed drift candidates.
- Read: inspect Figma, Storybook, source, docs, tokens, and ownership rows.
- Update: write or refresh exactly one row per audited component in `Component Audit`.
- Delete: consolidate duplicate findings by not creating duplicate Jira issues or duplicate spreadsheet rows.

## Expected Execution 02 Behavior

- Preserve the canonical component list from `src/metadata/component-registry.json`.
- Treat Button, Tooltip, and LegacyBanner as documented exceptions.
- Treat Input, Badge, and Modal as confirmed drift candidates unless the implementation has changed.
- Treat Toast as Figma-only and missing an engineering owner.
- Keep the audit idempotent: repeated execution should not create duplicate rows or duplicate Jira issues.

