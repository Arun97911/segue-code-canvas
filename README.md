This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

```
├── README.md
├── components
│   ├── Typeahead.tsx
│   └── global
│       ├── MenuButton.tsx
│       ├── Spinner.tsx
│       ├── StyledDialog.tsx
│       ├── StyledTabs.tsx
│       ├── forms
│       │   ├── FormButtonSubmit.tsx
│       │   ├── FormContainer.tsx
│       │   ├── FormInfo.tsx
│       │   ├── FormInputButton.tsx
│       │   ├── FormInputCheckbox.tsx
│       │   ├── FormInputDate.tsx
│       │   ├── FormInputNumeric.tsx
│       │   ├── FormInputSelect.tsx
│       │   ├── FormInputSetter.tsx
│       │   ├── FormInputText.tsx
│       │   ├── FormInputTime.tsx
│       │   └── FormInputUpload.tsx
│       └── table
│           └── Table.tsx
├── helpers
│   └── date.ts
├── interfaces
│   └── index.ts
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── api
│   │   └── hello.ts
│   └── index.tsx
├── postcss.config.js
├── public
│   ├── favicon.ico
│   ├── next.svg
│   ├── thirteen.svg
│   └── vercel.svg
├── styles
│   └── globals.css
├── tailwind.config.js
├── tsconfig.json
├── types
│   └── index.ts
└── utils
```

## Project Structure

The project's folder structure is organized as follows:

- **components:** This directory contains reusable React components, including form elements, tables, and various global UI components.

- **helpers:** In the "helpers" directory, you'll find utility functions that serve different purposes. Notably, `date.ts` provides functions related to date manipulation.

- **interfaces:** This directory defines TypeScript interfaces used throughout the project, helping to maintain type safety and consistency.

- **pages:** In the "pages" directory, you'll locate your Next.js pages. The `index.tsx` file serves as your primary landing page.

- **public:** Static assets, such as images and icons, are stored in the "public" directory for easy access.

- **styles:** The "styles" directory contains global CSS styles used to style the entire application.

- **types:** Here, you can find TypeScript type definitions to enhance code readability and maintainability.

- **utils:** The "utils" directory is the home for any additional utility functions or modules that might be needed to support your application.

This organized structure helps maintain clarity and consistency while developing your Next.js and Tailwind CSS project.




