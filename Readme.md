# Audioly | Social Audio Live Room 🎙️

Audioly is a modern, interactive social audio dashboard built to simulate real-time participant management. This project serves as a frontend prototype for a niche audio-first engagement platform.

## 🚀 Features
- **Dynamic Member Management**: Add participants as Speakers or Listeners using JavaScript Objects.
- **Real-time UI Updates**: The DOM updates instantly without page refreshes.
- **Role Filtering**: Filter the room to see only active speakers using Array methods.
- **Glassmorphism UI**: A sleek, dark-themed interface designed for a premium user experience.

## 🛠️ Tech Stack
- **Frontend**: HTML5, CSS3 (Flexbox/Grid), Vanilla JavaScript (ES6+)
- **DevOps**: Docker (Nginx-based containerization)
- **CI/CD**: GitHub Actions (Automated Test -> Staging -> Production pipeline)

## 🐳 Running Locally with Docker
If you have Docker installed, you can containerize and run Audioly locally:

1. Build the image:
   ```bash
   docker build -t yeittu-app .