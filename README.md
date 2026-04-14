# Aura Health - Smart Triage & Patient Management System

Aura Health is a web application built for clinics in South Africa. It helps healthcare workers organize patients based on how urgent their medical and social needs are

## Table of contents

- [Overview](#overview)
- [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
  - [How it Runs](#how-it-runs)
- [Author](#author)
- [Why built it](#why-built-it)

## Overview

Aura Health:
Smart Triage: Automatically colors patients as Red, Yellow, or Green based on their temperature and living conditions

Patient History: Keeps a digital record of every visit so doctors can see how a patient’s health changes over time

Clinic Dashboard: Shows real-time stats, like the average temperature in the clinic and how many urgent patients are waiting

Secure Access: Only registered Doctors and Nurses can see sensitive patient data

### Links

- Live Site URL: (coming)

## My process

### Built with

- Node.js
- Express.js
- MongoDB (Mongoose)
- Frontend 👇🏽👇🏽👇🏽👇🏽
- Semantic HTML5 markup (Coming)
- CSS custom properties (Coming)
- Flexbox (Coming)
- CSS Grid (Coming)
- [React](https://reactjs.org/) - JS library (Coming)
- [Styled Components](https://styled-components.com/) - For styles (Coming)

### What I learned

During this build, I moved from "just coding" to Software Engineering:

MVC Architecture: How to keep code clean by separating Models, Views, and Controllers.

Global Error Handling: How to build a "bulletproof" app that provides helpful error messages instead of crashing.

Data Relationships: Using Mongoose "Virtual Populate" to link patients to their medical history without slowing down the database.

### Continued development

Currently im working on:

Aggregation Pipelines: Writing complex queries to create "Heatmaps" of health risks in different neighborhoods

Advanced Security: Implementing JWT (JSON Web Tokens) and Bcrypt password hashing to protect patient privacy

Custom Middlewares: Building "Bouncer" functions to restrict access based on user roles (Admin vs. Nurse)

### AI Collaboration

- ChatGPT (debugging, brainstorming, roadmap planning)
- Gemini (debugging, brainstorming, project planning, architecture design)
- GitHub Copilot (debugging)

### How it Runs

🚀 How to run it
Clone the project:

Bash
git clone https://github.com/laurancemile/aura-health
Install tools:

Bash
npm install
Set up your environment:
Create a .env file and add your MONGO_URL, MONGO_PASSWORD, JWT_SECRET, JWT_EXPIRE, NODE_ENV=development

Start the server:

Bash
npm run start:dev

## Author

👨‍💻 Author
Laurance Mile BSc IT Student & Full-Stack Developer

- LinkedIn - [@laurancemile](https://www.linkedin.com/in/laurancemile/)

## WHY-BUILT-IT

I built Aura Health to solve a real-world problem: helping busy clinics prioritize care. It combines medical data with "social signals" (like food security, employment status, living situations) to make sure the most vulnerable patients get help first
