# Changesets Demo

This is a demo project to show how to use changesets to manage application versioning and changelogs.

## Release Flow

1. Create a new branch
2. Make changes
3. Run `bun changeset`
4. Commit changes and push
5. Open pull request to `main` branch
6. Once pull request is merged, bot will create a new pull request called `Release` with updated version and changelog.
   This pull request will get updated on every new commit to `main` branch.
7. When `Release` pull request is merged, bot will create a new GitHub release.
8. GitHub release will trigger a new `deploy` workflow which will deploy the application to GitHub Pages.

## Getting Started

Install dependencies:

```bash
bun install
```

Start development server:

```bash
bun dev
```

## Bootstrapped with Vite.js

See [Getting Started | Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project), or run:

```bash
bun create vite
```
