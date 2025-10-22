# 🤖 Copilot Instructions for Ripple

Welcome to the Ripple codebase! This guide is for AI coding agents (Copilot, Cursor, Claude, etc.) to maximize productivity and maintain project conventions.

## 🏗️ Project Architecture

- **Backend:** FastAPI app in `app/` (entrypoint: `app/main.py`).
- **Purpose:** Micro-posting social platform ("ripples" = posts).
- **Data Layer:** Uses SQL (PostgreSQL preferred, SQLite for testing). ORM: SQLAlchemy (planned).
- **API Docs:** Auto-generated at `/docs` and `/redoc` when running.

## 🛠️ Developer Workflows

- **Run dev server:**
  ```sh
  uvicorn app.main:app --reload
  ```
- **Virtualenv:**
  - Create: `python -m venv venv`
  - Activate: `source ./venv/Scripts/activate` (Windows)
- **Install deps:** `pip install -r requirements.txt` (file may be missing in early stages)
- **Config:** Copy `.env.example` to `.env` and edit for DB/secret (if/when present).
- **DB:**
  - Default: PostgreSQL (see `README_SETUP.md` for connection string)
  - Create DB: `createdb ripple_db`
  - Migrations: Alembic planned, not present yet
- **Docker:** Not yet implemented, but planned (see `README_SETUP.md`).

## 📁 Key Files & Directories

- `app/main.py`: FastAPI app, root endpoint (`/`).
- `README.md`: Project overview, tech stack, contribution process.
- `README_SETUP.md`: Step-by-step setup, dev workflow, troubleshooting.

## 📝 Patterns & Conventions

- **Endpoints:** Use FastAPI decorators (`@app.get`, `@app.post`, etc.).
- **Return:** JSON responses (dicts/objects).
- **Testing:** Not yet implemented; follow FastAPI/Pytest patterns when adding.
- **Secrets:** Use `.env` for config (not in repo yet).
- **Branching:** Feature branches: `feature/<name>`.

## ⚠️ Project Status

- Early stage: Many features (auth, DB models, migrations, Docker) are planned but not yet present.
- Update this file as new conventions or tools are added.

## 🧠 Tips for AI Agents

- Prefer explicit, readable code and docstrings.
- Reference `README.md` and `README_SETUP.md` for up-to-date workflows.
- If a file or tool is referenced but missing, note it in your output and suggest next steps.

---

For questions, see the main README or open an issue.
