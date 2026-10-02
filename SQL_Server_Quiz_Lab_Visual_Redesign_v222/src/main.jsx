import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { questions, levels, tasks, codingTasks } from "./data";
import "./styles.css";
const icons = { Beginner: "🌱", Intermediate: "⚡", Advanced: "🧠", Expert: "🔥" };
const normalize = (value = "") => {
    return value
        // Remove single-line SQL comments
        .replace(/--[^\n\r]*/g, " ")

        // Remove block comments
        .replace(/\/\*[\s\S]*?\*\//g, " ")

        // Normalize SQL Server bracketed identifiers
        .replace(/\[([^\]]+)\]/g, "$1")

        // Convert everything to lowercase
        .toLowerCase()

        // Normalize whitespace
        .replace(/[\r\n\t]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();
};
function validateCode(code, task) {

    // Make sure we always have a string
    const source = String(code || "").trim();

    // No challenge selected
    if (!task) {
        return {
            checks: [],
            score: 0,
            passed: 0,
            complete: false,
            error: "No coding challenge is currently selected."
        };
    }

    // Challenge has no rules
    if (!Array.isArray(task.required) || task.required.length === 0) {
        return {
            checks: [],
            score: 0,
            passed: 0,
            complete: false,
            error: "This challenge does not have validation rules yet."
        };
    }

    // Empty editor
    if (!source) {
        return {
            checks: task.required.map(rule => ({
                label: rule.label,
                ok: false
            })),
            score: 0,
            passed: 0,
            complete: false,
            error: "Please enter your SQL query before clicking Check query."
        };
    }

    // Normalize SQL before testing
    const sql = normalize(source);

    // Run every validation rule safely
    const checks = task.required.map(rule => {

        let ok = false;

        try {
            if (Array.isArray(rule.tests)) {
                ok = rule.tests.some(test => {
                    if (typeof test !== "function") {
                        return false;
                    }

                    try {
                        return Boolean(test(sql));
                    } catch {
                        return false;
                    }
                });
            }
        } catch {
            ok = false;
        }

        return {
            label: rule.label,
            ok
        };
    });

    const passed = checks.filter(check => check.ok).length;

    const score = checks.length
        ? Math.round((passed / checks.length) * 100)
        : 0;

    const complete =
        checks.length > 0 &&
        passed === checks.length;

    return {
        checks,
        score,
        passed,
        complete,
        error: complete
            ? "Challenge passed!"
            : `You passed ${passed} of ${checks.length} requirements.`
    };
}
function App() {
    const [view, setView] = useState("home"), [level, setLevel] = useState("All"), [category, setCategory] = useState("All"), [quiz, setQuiz] = useState(null), [selected, setSelected] = useState(null), [revealed, setRevealed] = useState(false), [score, setScore] = useState(0), [index, setIndex] = useState(0), [theme, setTheme] = useState(() => localStorage.getItem("sql-theme") || "dark"), [progress, setProgress] = useState(() => JSON.parse(localStorage.getItem("sql-progress") || "{}")), [taskOpen, setTaskOpen] = useState(null), [codingLevel, setCodingLevel] = useState("All"), [codingId, setCodingId] = useState(codingTasks[0]?.id), [code, setCode] = useState(""), [codeResult, setCodeResult] = useState(null), [codeRuns, setCodeRuns] = useState(0), [streak, setStreak] = useState(() => Number(localStorage.getItem("sql-code-streak") || 0));
    useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem("sql-theme", theme) }, [theme]);
    useEffect(() => { localStorage.setItem("sql-progress", JSON.stringify(progress)) }, [progress]);
    useEffect(() => { localStorage.setItem("sql-code-streak", String(streak)) }, [streak]);
    const cats = useMemo(() => ["All", ...Array.from(new Set(questions.map(q => q.category))).sort()], [questions]);
    const filtered = useMemo(() => questions.filter(q => (level === "All" || q.level === level) && (category === "All" || q.category === category)), [level, category]);
    const codingFiltered = useMemo(() => codingTasks.filter(t => codingLevel === "All" || t.level === codingLevel), [codingLevel]);
    const codingTask = useMemo(() => codingTasks.find(t => t.id === codingId) || codingFiltered[0], [codingId, codingFiltered]);
    const current = quiz?.[index];
    const completion = Math.round((Object.values(progress).filter(v => v === "correct").length / questions.length) * 100);
    function startQuiz(source = filtered, count = 15) { const s = [...source].sort(() => Math.random() - .5).slice(0, Math.min(count, source.length)); setQuiz(s); setIndex(0); setSelected(null); setRevealed(false); setScore(0); setView("quiz") }
    function choose(opt) { if (revealed) return; setSelected(opt); setRevealed(true); const ok = opt === current.answer; if (ok) setScore(x => x + 1); setProgress(p => ({ ...p, [current.id]: ok ? "correct" : "seen" })) }
    function next() { if (index + 1 >= quiz.length) { setView("results"); return } setIndex(i => i + 1); setSelected(null); setRevealed(false) }
    function reset() { setQuiz(null); setView("home"); setSelected(null); setRevealed(false) }
    function openCoding(id) { setCodingId(id); setCode(""); setCodeResult(null) }
function runCode() {
  try {
    if (!codingTask) {
      setCodeResult({
        checks: [],
        score: 0,
        passed: 0,
        complete: false,
        error: "Please select a coding challenge first."
      });
      return;
    }

    const result = validateCode(code, codingTask);

    // Always show the result
    setCodeResult(result);

    // Count every check
    setCodeRuns(previous => previous + 1);

    // Update successful-run streak
    if (result.complete) {
      setStreak(previous => previous + 1);
    } else {
      setStreak(0);
    }

  } catch (error) {

    // Prevent the page from silently failing
    console.error("SQL checker error:", error);

    setCodeResult({
      checks: [],
      score: 0,
      passed: 0,
      complete: false,
      error: "The checker encountered an error. Please try the query again."
    });
  }
}
            function loadSolution() { setCode(codingTask?.solution || ""); setCodeResult(null) }
            function randomCoding() { const pool = codingFiltered.length ? codingFiltered : codingTasks; const next = pool[Math.floor(Math.random() * pool.length)]; openCoding(next.id) }
            return <div className="app"><div className="ambient a1" /><div className="ambient a2" /><div className="ambient a3" />
                <header className="topbar"><button className="brand" onClick={reset}><span className="brandmark">SQL</span><span>Quiz<span className="muted">Lab</span></span></button><nav><button className={view === "home" ? "active" : ""} onClick={reset}>Dashboard</button><button className={view === "practice" ? "active" : ""} onClick={() => setView("practice")}>Practice Tasks</button><button className={view === "coding" ? "active" : ""} onClick={() => setView("coding")}>Coding Lab</button><button onClick={() => startQuiz(questions, 20)}>Quick Quiz</button></nav><button className="theme" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme === "dark" ? "☀" : "☾"}</button></header>
                {view === "home" && <main className="container"><section className="hero"><div><div className="eyebrow">ADVENTUREWORKS • SQL SERVER</div><h1>Master SQL.<br /><span>One challenge at a time.</span></h1><p>{questions.length} source-based questions across four difficulty levels, plus hands-on SQL practice and a dynamic coding lab.</p><div className="hero-actions"><button className="primary" onClick={() => startQuiz(filtered, 15)}>Start quiz <span>→</span></button><button className="ghost" onClick={() => setView("practice")}>Open practice lab</button><button className="code-cta" onClick={() => setView("coding")}>⌘ Coding Lab</button></div></div><div className="hero-card"><div className="ring"><strong>{completion}%</strong><span>mastery</span></div><div className="mini-stat"><b>{questions.length}+</b><span>questions</span></div><div className="mini-stat"><b>{tasks.length}</b><span>practice tasks</span></div><div className="mini-stat glow"><b>{codingTasks.length}</b><span>coding challenges</span></div></div></section>
                    <section className="section-head"><div><div className="eyebrow">CHOOSE YOUR LEVEL</div><h2>Learn in layers</h2></div><span className="count">{filtered.length} questions available</span></section><div className="level-grid">{levels.map((l, i) => <button className={"level-card c" + i} key={l.name} onClick={() => { setLevel(l.name); setCategory("All"); startQuiz(questions.filter(q => q.level === l.name), 15) }}><span className="level-icon">{icons[l.name]}</span><span className="level-name">{l.name}</span><span className="level-sub">{l.subtitle}</span><span className="level-topics">{l.topics}</span><span className="arrow">↗</span></button>)}</div>
                    <section className="filters"><div><label>Question bank</label><select value={level} onChange={e => setLevel(e.target.value)}><option>All</option>{levels.map(l => <option key={l.name}>{l.name}</option>)}</select></div><div><label>Topic</label><select value={category} onChange={e => setCategory(e.target.value)}>{cats.map(c => <option key={c}>{c}</option>)}</select></div><button className="secondary" onClick={() => startQuiz(filtered, 20)}>20-question challenge →</button></section><section className="topic-cloud">{cats.slice(1).map(c => <button key={c} onClick={() => setCategory(c)}>{c}</button>)}</section></main>}
                {view === "quiz" && current && <main className="quiz-wrap"><div className="quiz-head"><button className="back" onClick={reset}>← Exit</button><span>{current.level} · {current.category}</span><span>{index + 1} / {quiz.length}</span></div><div className="progress"><i style={{ width: `${index / quiz.length * 100}%` }} /></div><div className="quiz-card"><div className="q-label">QUESTION {String(index + 1).padStart(2, "0")}</div><h2>{current.question}</h2><div className="options">{current.options.map((opt, i) => { const letter = String.fromCharCode(65 + i), chosen = selected === letter, correct = current.answer === letter; return <button key={letter} disabled={revealed} onClick={() => choose(letter)} className={"option " + (revealed ? (correct ? "correct" : chosen ? "wrong" : "") : "")}><span className="letter">{letter}</span><span>{opt}</span>{revealed && correct && <b>✓</b>}{revealed && chosen && !correct && <b>×</b>}</button> })}</div>{revealed && <div className={"explain " + (selected === current.answer ? "good" : "bad")}><div className="ex-title">{selected === current.answer ? "Correct — nice work" : "Not quite — learn from it"}</div><p>{current.explanation}</p></div>}<div className="quiz-footer"><span>Topic: {current.category}</span>{revealed ? <button className="primary small" onClick={next}>{index + 1 === quiz.length ? "See results" : "Next question →"}</button> : <span className="hint">Select an answer to continue</span>}</div></div></main>}
                {view === "results" && <main className="result-wrap"><div className="result-card"><div className="result-orb">✦</div><div className="eyebrow">QUIZ COMPLETE</div><h1>{score}/{quiz.length}</h1><p>{Math.round(score / quiz.length * 100)}% accuracy on this run.</p><div className="result-bars"><div><span>Correct</span><b>{score}</b></div><div><span>Reviewed</span><b>{quiz.length}</b></div><div><span>Missed</span><b>{quiz.length - score}</b></div></div><div className="hero-actions"><button className="primary" onClick={() => startQuiz(quiz, quiz.length)}>Try again</button><button className="ghost" onClick={reset}>Back to dashboard</button></div></div></main>}
                {view === "practice" && <main className="container"><section className="practice-hero"><div className="eyebrow">HANDS-ON LAB</div><h1>Practice, don't just memorize.</h1><p>Work through real SQL tasks based on the same AdventureWorks concepts in the study notes. Reveal the reference solution only after attempting the task.</p><button className="code-cta large" onClick={() => setView("coding")}>Continue to Dynamic Coding Lab →</button></section><div className="task-grid">{tasks.map(t => <article className="task-card" key={t.id}><div className="task-top"><span className="pill">{t.level}</span><span>{t.id}</span></div><h3>{t.title}</h3><p>{t.task}</p><div className="hintbox">💡 {t.hint}</div><button className="reveal" onClick={() => setTaskOpen(taskOpen === t.id ? null : t.id)}>{taskOpen === t.id ? "Hide solution" : "Reveal reference solution"}</button>{taskOpen === t.id && <pre>{t.solution}</pre>}</article>)}</div></main>}
                {view === "coding" && <main className="container coding-page"><section className="practice-hero coding-hero"><div><div className="eyebrow">DYNAMIC SQL CODING LAB</div><h1>Write the query.<br /><span>Run your reasoning.</span></h1><p>Choose a challenge, write SQL in the editor, and use the built-in dynamic checker to verify the required query ideas before revealing the reference solution.</p></div><div className="streak-card"><strong>{streak}</strong><span>successful runs</span><small>{codeRuns} total checks</small></div></section><div className="coding-toolbar"><div><label>Difficulty</label><select value={codingLevel} onChange={e => { setCodingLevel(e.target.value); setCodeResult(null) }}><option>All</option>{levels.map(l => <option key={l.name}>{l.name}</option>)}</select></div><button className="secondary" onClick={randomCoding}>↻ Random challenge</button></div><div className="coding-layout"><aside className="challenge-list">{codingFiltered.map(t => <button key={t.id} className={codingTask?.id === t.id ? "selected" : ""} onClick={() => openCoding(t.id)}><span>{icons[t.level]}</span><div><b>{t.title}</b><small>{t.level} · {t.category}</small></div><em>→</em></button>)}</aside><section className="editor-panel"><div className="editor-head"><div><span className="live-dot" />SQL Editor <small>{codingTask?.category}</small></div><span>{codingTask?.id}</span></div><div className="task-prompt"><span className="difficulty">{codingTask?.level}</span><h2>{codingTask?.title}</h2><p>{codingTask?.task}</p><div className="hintbox">💡 {codingTask?.hint}</div></div><textarea className="sql-editor" value={code} onChange={e => { setCode(e.target.value); setCodeResult(null) }} spellCheck="false" placeholder="-- Write your SQL query here\nSELECT ..." /><div className="editor-actions"><button className="primary" onClick={runCode}>▶ Check query</button><button className="ghost" onClick={() => setCode("")}>Clear</button><button className="reveal" onClick={loadSolution}>Show reference</button></div>{codeResult && <div className={"code-result " + (codeResult.complete ? "pass" : "partial")}><div className="result-score"><strong>{codeResult.score}%</strong><span>{codeResult.complete ? "Challenge passed" : "Keep improving"}</span></div><div className="check-list">{codeResult.checks.map((c, i) => <div key={i}><span>{c.ok ? "✓" : "○"}</span><span>{c.label}</span><b>{c.ok ? "Found" : "Missing"}</b></div>)}</div><p>{codeResult.complete ? "Excellent. Your query contains all required concepts for this challenge." : "The checker is looking for the required SQL building blocks. Revise the query and check again."}</p></div>}</section></div></main>}
                <footer><span>SQL Quiz Lab</span><span>139 questions • {tasks.length} guided tasks • {codingTasks.length} coding challenges</span><span>Progress saves locally</span></footer></div>
        }
createRoot(document.getElementById("root")).render(<App />);
