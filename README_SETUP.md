# ⚙️ Ripple Setup Guide

Welcome to the **Ripple** setup guide.

This document explains how to install dependencies, configure your environment, and launch the FastAPI backend for development.

---

## 🧩 Prerequisites

Before starting, make sure you have the following installed:

- **Python 3.12+**
- **Git**
- **pip**
- **PostgreSQL** (or **SQLite** for testing)
- **Docker** (optional, for containerized setup)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ezaz-ahmed/ripple.git
cd ripple
```

---

### 2. Create and Activate a Virtual Environment

```bash
# Create a virtual environment
python -m venv venv

# Activate it
source venv/bin/activate           # macOS/Linux
source ./venv/Scripts/activate     # Windows
```

---

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

If you plan to use **Docker**, you can skip this step — the dependencies will be installed inside the container.

---

### 4. Environment Configuration

Duplicate the example environment file and adjust it for your setup:

```bash
cp .env.example .env
```

Then open `.env` in your editor and update the values as needed:

```bash
DATABASE_URL=postgresql://user:password@localhost:5432/ripple_db
SECRET_KEY=your-secret-key-here
```

---

### 5. Database Setup

Make sure your PostgreSQL service is running, then create a database for Ripple:

```bash
createdb ripple_db
```

If you’re using **SQLAlchemy + Alembic**, run migrations (once set up):

```bash
alembic upgrade head
```

---

### 6. Run the Application

Start the development server:

```bash
uvicorn app.main:app --reload
```

You should now see output like:

```
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
```

Then open your browser and visit:

👉 [http://127.0.0.1:8000](http://127.0.0.1:8000)

---

### 7. Explore the API

FastAPI automatically generates interactive API documentation for you:

- **Swagger UI:** [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
- **ReDoc:** [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)

---

## 🐳 Optional: Run with Docker

You can also run Ripple inside a Docker container for a consistent environment.

### 1. Build the Image

```bash
docker build -t ripple .
```

### 2. Run the Container

```bash
docker run -d -p 8000:8000 --name ripple-container ripple
```

Now you can access Ripple at [http://localhost:8000](http://localhost:8000).

---

## 🧠 Troubleshooting

- If you see database connection errors, verify your `DATABASE_URL` and ensure PostgreSQL is running.
- Use `--reload` with Uvicorn only in development mode.
- Check your virtual environment activation if dependencies are missing.

---

## 📚 Next Steps

- Explore the [API Documentation](http://127.0.0.1:8000/docs)
- Review the [Main README](./README.md) for contribution guidelines and project overview.
- Start building features and experimenting with the backend!

---

> 💡 _Ripple is more than a project — it’s a journey toward mastering backend development with Python._
> Happy coding! 🚀
