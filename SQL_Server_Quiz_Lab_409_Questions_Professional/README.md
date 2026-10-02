# SQL Server Quiz Lab — Professional Quiz Engine Edition

A React + Vite SQL Server learning website built around the supplied SQL Server / AdventureWorks study material.

## What is improved in this edition?

### Quiz answer randomization
The original question bank stores many correct answers in the same option position. The quiz engine now fixes that at runtime instead of changing the source question content.

Every quiz attempt:
- Randomizes the question order.
- Randomizes all four answer choices.
- Automatically remaps the correct answer key.
- Balances A/B/C/D correct-answer positions across each quiz session.
- Uses a different randomized position sequence for every session.
- Keeps explanations and question wording unchanged.
- Re-randomizes choices when you use **Try again**.

This means learners cannot reliably guess the answer from its position.

### Coding Lab
The Dynamic SQL Coding Lab includes:
- SQL query editor
- Check Query validation
- Percentage scoring
- Found / Missing requirements
- Empty-query feedback
- Ctrl+Enter / Cmd+Enter shortcut
- Reference solutions
- Successful-run streak
- Defensive validation error handling

### Existing functionality retained
- 409 source-based SQL questions
- Beginner, Intermediate, Advanced and Expert levels
- Topic filtering
- 16 guided practice tasks
- 12 coding challenges
- Quick Quiz
- Progress saved in localStorage
- Dark / light theme
- Responsive layout
- Animated visual design

## Run

Use PowerShell:

```powershell
npm.cmd install
npm.cmd run dev
```

Then open the local Vite URL shown in the terminal, normally:

```text
http://localhost:5173/
```

## Windows PowerShell note

If `npm` is blocked by PowerShell execution policy, use `npm.cmd` exactly as shown above.

## Main source files

```text
src/
  data.js       Question, task and coding data
  main.jsx      React application and quiz/coding logic
  styles.css    Visual design and responsive styling
```


## Expanded Question Bank

This edition contains **409 quiz questions** based on the supplied SQL Server / AdventureWorks study material. The bank covers SELECT, WHERE, ORDER BY, GROUP BY, aggregate and non-aggregate functions, string functions, date functions, NULL handling, conditional logic, subqueries, ANY/ALL/EXISTS, UNION/UNION ALL/INTERSECT/EXCEPT, joins, arithmetic, and backup/workload concepts.

The quiz engine randomizes question order and answer-option order for every attempt. Correct answer positions are deliberately distributed across A, B, C, and D so learners cannot rely on answer-position patterns.

The dashboard also provides 20-, 30-, and 50-question challenge modes.
