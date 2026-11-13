# Aksara Anti-Slop Agent

### Universal Rulebook & Skills Suite for AI Coding Agents
**Stop AI coding agents from shipping generic UI, marketing buzzwords, and AI-shaped code.**

Designed for **Antigravity, Claude Code, Cursor, Codex, Cline, Kimi Code, and Gemini CLI**.

---

## 🌟 Philosophy: A Filter, Not Just a Style Guide

Aksara Anti-Slop is **not** an aesthetic restriction. It does not ban gradients, shadows, or cards.
What it eliminates is **technique without purpose** (*AI Slop*):

* **Intentionality:** Every visual and copy decision must have a clear, articulable reason.
* **Functional Completeness:** Every button, modal, or link must genuinely work. No dead dummy controls.
* **Content-Driven:** Page layouts are driven by real product content, not boilerplate AI templates.
* **Resilience:** Built for 5 complete UI states (Ideal, Loading, Empty, Error, Edge) and keyboard accessibility (WCAG AA).
* **Zero Code Comments:** Clean, self-documenting code without AI commentary pollution.
* **Light Mode Priority:** Engineered for enterprise, industrial, and public-service systems where crisp contrast and daylight readability are paramount.

---

## 🚀 Quick Install

### 1. Antigravity / Gemini CLI
```bash
agy plugin install https://github.com/aksaradanardipa/aksara-anti-slop
```

### 2. Claude Code
```text
/plugin marketplace add https://github.com/aksaradanardipa/aksara-anti-slop
/plugin install aksara-anti-slop@aksara-anti-slop
```

### 3. Cursor IDE
Add to your project's `.cursorrules` or install via Cursor Plugin Marketplace:
```bash
agent plugin marketplace add https://github.com/aksaradanardipa/aksara-anti-slop
```

### 4. Codex
```bash
codex plugin add aksara-anti-slop@aksara-anti-slop
```

### 5. Local Workspace (Single File)
Copy `rules/aksara-anti-slop.md` into your project root as `AGENTS.md`.

---

## 📦 What's Inside

| Module | Location | Purpose |
| :--- | :--- | :--- |
| **Aksara Core Filter** | `skills/aksara-antislop/` | Core rule enforcement, liveliness dials, and Delivery Gate self-audit. |
| **Aksara UI** | `skills/aksara-ui/` | Industrial light-mode priority, 8pt spacing grid, and visual hierarchy. |
| **Aksara Copywriting** | `skills/aksara-copywriting/` | Strict ban on em dashes (`—`), removal of AI buzzwords, and contextual CTAs. |
| **Aksara Human (A11y)** | `skills/aksara-human/` | WCAG AA contrast (4.5:1), keyboard navigation, senior-friendly UX, and 5 UI states. |
| **Aksara Mobile** | `skills/aksara-layoutmobile/` | Fluid responsive reflow, 44px tap targets, and zero horizontal overflow. |
| **Aksara Code** | `skills/aksara-code/` | Zero code comments, anti-monolith boundaries, action locking, and token IDs. |

---

## 🛡️ Core Hard Gates (Absolute)

1. **No Em Dash (`—`):** Never use em dashes in generated UI copy. Use commas, periods, colons, or parentheses.
2. **Real Data & Honest Placeholders:** Never invent numbers, statistics ("99.9% Uptime", "10K+ Users"), or fake testimonials. Use `[REAL DATA]` or omit entirely.
3. **No Dead Buttons:** Every button or link must perform a real action (open modal, toggle state, navigate).
4. **Action Locking:** Action buttons must disable immediately on click to prevent double submission or duplicate payments.
5. **Anti-Enumeration IDs:** Order, invoice, and ticket IDs must use non-sequential tokens (e.g. `#WO-2027-0318-X9K2`) to prevent IDOR attacks.
6. **Zero Code Comments:** Code files must remain 100% free of inline and block comments.

---

## 📄 License

Distributed under the **MIT License**. Created with craftsmanship by [Aksara Danardipa](https://github.com/aksaradanardipa).
