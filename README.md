# 📝 Examination System

A web-based examination system built with HTML, CSS, JavaScript, and Bootstrap.

---

## 📌 Features

- **Register & Login** — User authentication stored in `localStorage`
- **Protected Routes** — Exam page is only accessible after login
- **Randomized Questions** — Questions are shuffled on every exam attempt
- **Timer** — 30-minute countdown, auto-redirects to timeout page if expired
- **Mark for Review** — Mark any question to keep track of it
- **Score Calculation** — Final score calculated on submit
- **Grades Page** — Displays student name and score after submission
- **Timeout Page** — Displays student name when time runs out
- **Logout** — Clears session and returns to login page

---

## 📁 Project Structure

```
├── index.html        # Login page
├── index.js          # Login logic
├── register.html     # Registration page
├── register.js       # Registration & validation logic
├── exam.html         # Exam page
├── exam.js           # Exam logic (timer, navigation, scoring)
├── grades.html       # Grades result page
├── timeout.html      # Timeout page
├── questions.json    # Questions & answers data
├── style.css         # Shared styles
```

---

## 🚀 How to Run

1. Clone or download the repository
2. Open `index.html` in your browser
3. Register a new account
4. Login and start the exam

> ⚠️ The project uses `fetch()` to load `questions.json`, so it must be served from a local server (e.g. VS Code **Live Server** extension), not opened directly as a file.

---

## 🛠️ Built With

- HTML5 & CSS3
- Vanilla JavaScript (ES6+)
- Bootstrap 5
- localStorage API

---

## 📋 Pages Flow

```
Register → Login → Exam → Grades (submitted in time)
                       → Timeout (time expired)
```
