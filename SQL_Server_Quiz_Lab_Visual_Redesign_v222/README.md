# SQL Server Quiz Lab — Visual Redesign — React + Vite

A responsive Microsoft SQL Server / AdventureWorks learning website based on the supplied SQL study material.

## What's included

- 139 source-based multiple-choice questions
- Beginner, Intermediate, Advanced, and Expert levels
- Existing Quick Quiz, scoring, explanations, filters, topic cloud, local progress, and dark/light theme
- 16 guided SQL practice tasks with reference solutions
- **12 new dynamic SQL coding challenges**
- Coding Lab difficulty filter and random challenge button
- SQL editor with clear/run/reference controls
- Dynamic requirement checker that analyzes the learner's query and reports which SQL concepts were detected
- Coding score percentage and successful-run streak
- Hints and progressive feedback
- Richer gradients, animated backgrounds, hover effects, transitions, result animations, and responsive editor layout
- Mobile, tablet, and desktop support
- No backend or database connection is required for the learning UI

## Run on Windows

From the folder that directly contains `package.json`:

```powershell
npm.cmd install
npm.cmd run dev
```

Then open the local Vite address, normally:

```text
http://localhost:5173
```

If PowerShell permits npm normally, these also work:

```powershell
npm install
npm run dev
```

## Production build

```powershell
npm.cmd run build
npm.cmd run preview
```

## Important note about the Coding Lab

The Coding Lab uses a client-side learning validator. It checks for required SQL building blocks such as SELECT columns, WHERE conditions, JOIN/ON relationships, GROUP BY, DATEADD, subqueries, INTERSECT, CASE, and related concepts. It does **not** execute SQL against a live AdventureWorks database.

For actual query execution, run the reference or your own query in SQL Server Management Studio against your AdventureWorks database.


### Visual redesign
The interface has been substantially redesigned with a multi-accent visual system, glass-style navigation, gradient typography, animated ambient shapes, redesigned cards, animated quiz states, a refreshed results screen, and a redesigned SQL Coding Lab. Existing quiz/practice functionality is preserved.
