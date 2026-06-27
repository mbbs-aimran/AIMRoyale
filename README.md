# AIMRoyale - Qwen Cloud Hackathon (Track 1)

## Overview
AIMRoyale is an AI-powered mathematical arena that generates highly personalized, real-time math challenges based on the user's school grade and difficulty level. Powered by Alibaba Cloud's Qwen-Max model, it features a native **MemoryAgent** that tracks the user's progress cross-session.

## Track 1: MemoryAgent Features
This project strictly implements the rules of the MemoryAgent track:
- **Cross-Session Memory:** Uses `localStorage` integrated with our AI prompt builder to remember user preferences, lore choices, and historical error rates.
- **Smart Decay (Timely Forgetting):** If a user successfully answers 3 questions in a row on a specific mathematical topic (e.g., Algebra), the agent declares the concept "mastered" and actively deletes past errors from its active context window to save tokens and avoid anchoring on outdated weaknesses.
- **Context Window Management (FIFO):** The agent limits its memory to the 5 most recent mistakes (`recentMistakes`). Older errors are evicted (First-In, First-Out) to ensure the prompt never exceeds the context limit while still recalling critical weaknesses.

## Architecture
- **Frontend:** Vanilla JS (`app.js`, `index.html`) using a sleek Fermat Chroma Design System.
- **Backend:** Node.js (`server.js`) acting as a proxy to authenticate and route requests securely.
- **AI Infrastructure:** Deployed using **Alibaba Cloud Model Studio (DashScope API)** utilizing the `qwen-max` model.

## Proof of Alibaba Cloud Deployment
Our architecture relies natively on Alibaba Cloud. You can verify our integration in the `server.js` file, which securely connects to `dashscope.aliyuncs.com` using the `qwen-max` model.

## License
MIT License.