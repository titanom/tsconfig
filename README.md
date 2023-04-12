# @titanom/tsconfig

Default TypeScript configurations for projects at Titanom Technologies

## Installation

```shell
pnpm add -D @titanom/tsconfig
```

## Usage

This package includes multiple configurations for different environments.

Available configurations:

- `@titanom/tsconfig`: Base - all other configs extend from this.
- `@titanom/tsconfig/react`: For Projects using React & are run only in a browser environment.
- `@titanom/tsconfig/node`: For Projects using the Node.js runtime.
- `@titanom/tsconfig/nextjs`: For Projects using Next.js. Extends from react & node configs.

Update your `tsconfig.json`:

```json
{
  "extends": "@titanom/tsconfig/<variant>"
}
```
