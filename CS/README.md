# Computer Science Department Website

React, React Router, Tailwind CSS, and Vite power the department website.

## Run locally

From the top-level CSKAC folder:

```powershell
npm --prefix CS ci
npm run dev
```

Open the local URL printed by Vite. The default port is 5173; Vite selects another port if it is occupied.

From the CS folder, use `npm ci` and `npm run dev` directly.

```powershell
npm run lint
npm run build
npm run preview
```

The commands also work from the top-level folder. Startup and build use Vite's native config loader to avoid configuration bundling errors on Windows. Validated with Node.js 22.23.2.

If OneDrive reports that its cloud file provider is not running, make the source files available locally and reinstall dependencies with `npm --prefix CS ci` from the top-level folder.

## Current functionality

Public pages include the homepage, about, faculty, courses, notices, events, gallery, research, achievements, and contact. Unknown or upcoming sections display an availability message.
