# AGENTS.md - Developer Guidelines

## Overview

This is a React 19 portfolio application built with Vite, TypeScript, React Router, TanStack Query, and React Bootstrap. It uses pnpm as the package manager.

## Build Commands

```bash
pnpm dev        # Start development server
pnpm build      # Run TypeScript check and build for production
pnpm lint       # Run ESLint on all files
pnpm preview    # Preview production build locally
```

### Running a Single Test

No test framework is currently configured. To add tests, install Vitest and configure it:
```bash
pnpm add -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

Then add a test script to package.json and run individual tests with:
```bash
pnpm vitest run src/path/to/test-file.test.tsx
```

## Code Style Guidelines

### General Principles

- Use TypeScript with **strict mode** enabled
- Prefer functional components with hooks
- Keep components focused and single-purpose
- Use descriptive names for all identifiers

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `ContactForm`, `PageBanner` |
| Hooks | camelCase, prefix with `use` | `useGithubData` |
| Types/Interfaces | PascalCase | `Inputs`, `Repo`, `Repos` |
| Constants | camelCase | `reposToInclude`, `endpoint` |
| Files (components) | PascalCase | `ContactForm.tsx` |
| Files (utilities/hooks) | camelCase | `useGithubData.ts`, `normalize-repo-name.ts` |

### Imports

```typescript
// External libraries first (grouped)
import { useQuery } from '@tanstack/react-query'
import { z } from 'zod'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import { IoMdSend } from 'react-icons/io'
import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'

// Relative imports last
import { Layout } from './components/Layout'
import { Homepage } from './pages/homepage/Homepage'
import queryClient from './lib/tanstack-query'
import './index.css'
```

### TypeScript

- Always define types explicitly; avoid `any`
- Use Zod for runtime schema validation on API responses
- Infer types when obvious: `const name: string = "test"` → `const name = "test"`
- Export types that are reused across files

```typescript
// Good: Zod schema for API validation
export const RepoItemSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable(),
})

export type Repo = z.infer<typeof RepoItemSchema>
```

### React Patterns

- Use functional components exclusively
- Destructure props for readability
- Use React Query (`useQuery`, `useMutation`) for server state
- Use React Hook Form for form handling

```typescript
// Component with typed props
export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // handle submission
  }

  return <Form onSubmit={handleSubmit(onSubmit)}>...</Form>
}
```

### Error Handling

- Use try/catch for async operations
- Validate API responses with Zod `safeParse`
- Log errors appropriately (console.error for critical, console.log for debugging)
- Return fallback values on error rather than throwing

```typescript
const getRepos = async (url: string) => {
  const response = await fetch(url)
  if (!response.ok) {
    console.error('Network response was not ok')
    return []
  }
  const data: unknown = await response.json()
  const result = await ItemsSchema.safeParseAsync(data)
  if (result.success) return result.data.items
  if (result.error) {
    console.log(result.error.message)
    return []
  }
}
```

### CSS/Styling

- Use React Bootstrap components with Bootstrap classes
- Use custom CSS for component-specific styles (co-located: `ContactForm.tsx` + `ContactForm.css`)
- Use inline styles sparingly for dynamic values
- Use Bootstrap utility classes for layout (flexbox, spacing)

```typescript
// Bootstrap classes + inline for dynamic values
<Button
  variant='dark'
  className='d-flex align-items-center gap-2'
  style={{ width: 'fit-content' }}
  disabled={isSubmitting}
>
  Submit <IoMdSend />
</Button>
```

### Linting

The project uses ESLint with:
- `@eslint/js` - Recommended JavaScript rules
- `typescript-eslint` - TypeScript support
- `eslint-plugin-react-hooks` - React Hooks rules
- `eslint-plugin-react-refresh` - HMR-safe code checks

Run `pnpm lint` before committing. Fix auto-fixable issues with `pnpm lint --fix`.

### File Organization

```
src/
├── components/        # Reusable UI components
├── pages/            # Route page components
│   ├── homepage/     # Homepage-specific components
│   └── projects/     # Projects page components
├── hooks/            # Custom React hooks
├── lib/              # Library configuration (QueryClient, etc.)
├── error/            # Error components
├── utilities/        # Helper functions
├── preloader/        # Preloader components
├── App.tsx           # Root component with routing
└── main.tsx          # Entry point
```

### Prohibited Patterns

- No class components
- No `any` types in TypeScript (unless absolutely necessary)
- No unused variables (ESLint will catch this)
- No `console.log` in production code (use console.error for errors)
- Don't disable strict mode in tsconfig

### Quick Reference

| Category | Tool/Library |
|----------|--------------|
| UI Components | React Bootstrap |
| Routing | React Router DOM v7 |
| Data Fetching | TanStack React Query |
| Forms | React Hook Form |
| Validation | Zod |
| Icons | React Icons |
| Markdown | React Markdown |
| Build Tool | Vite 7 |
| Package Manager | pnpm |
