# SQL Server Quiz Lab

Responsive React/Vite quiz and practice website built from the supplied Microsoft SQL Server / AdventureWorks study notes.

## Included
- 139 quiz questions
- Beginner, Intermediate, Advanced and Expert levels
- Topic filtering
- Random 15- or 20-question quiz sessions
- Instant answer feedback and explanations
- Browser-local progress tracking
- Light/dark theme
- 16 hands-on SQL practice tasks with revealable reference solutions
- Responsive mobile/tablet/desktop UI
- Modern cards, gradients, animations and progress indicators
- No backend/database required

## Run
1. Install Node.js LTS (Node 20.19+ or Node 22+ recommended).
2. Open a terminal in this folder.
3. Run `npm install`
4. Run `npm run dev`
5. Open the localhost address shown by Vite (normally http://localhost:5173).

## Production
`npm run build`
then
`npm run preview`

## Files
- `src/main.jsx` — UI and quiz logic
- `src/data.js` — question bank and practice tasks
- `src/styles.css` — responsive design and themes
- `index.html` — app shell
- `package.json` — React/Vite setup

## Source coverage
The question bank follows the uploaded notes' terminology and examples: SELECT, WHERE, ORDER BY, GROUP BY, numerical/string/date functions, NULL handling, subqueries, EXISTS/ANY/ALL, UNION/UNION ALL/INTERSECT/EXCEPT, joins, and database backup concepts.
