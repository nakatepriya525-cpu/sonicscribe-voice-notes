# 🎙️ SonicScribe - Voice-Controlled Smart Notes App

[![React](https://img.shields.io/badge/React-18.2-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue.svg)](https://www.typescriptlang.org/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-green.svg)](https://spring.io/projects/spring-boot)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> A professional voice-controlled smart notes application with AI-powered categorization and real-time transcription.

**BSc IT Final Year Project 2025-2026**  
**Guru Nanak College of Arts, Science, and Commerce**  
**Developed by: Priya Nakate**

---

## 🌟 Features

- 🎤 **Real-time Voice Recognition** - Convert speech to text instantly using Web Speech API
- 🤖 **AI-Powered Categorization** - Automatic note categorization using TensorFlow.js
- 🏷️ **Smart Tagging System** - Auto-generate and manage tags
- 🔍 **Advanced Search** - Full-text search with filters
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- 🔐 **Secure Authentication** - JWT-based user authentication
- 💾 **Cloud Sync** - Cross-device synchronization
- 🎨 **Rich Text Editor** - Format your notes beautifully
- 🗣️ **Voice Commands** - Control the app with voice commands
- 👥 **Collaboration** - Share notebooks with team members

---

## 🏗️ Architecture

```
sonicscribe-voice-notes/
├── frontend/              # React + TypeScript frontend
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── hooks/        # Custom hooks
│   │   ├── store/        # State management
│   │   ├── services/     # API services
│   │   ├── utils/        # Utility functions
│   │   └── types/        # TypeScript types
│   └── package.json
│
├── backend/              # Spring Boot backend
│   ├── src/main/java/
│   │   └── com/sonicscribe/
│   │       ├── controller/
│   │       ├── service/
│   │       ├── repository/
│   │       ├── model/
│   │       └── config/
│   └── pom.xml
│
└── docs/                 # Documentation
```

---

## 🚀 Tech Stack

### Frontend
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **State Management**: Zustand
- **Styling**: CSS3 + Tailwind CSS
- **Voice Recognition**: Web Speech API
- **ML/AI**: TensorFlow.js
- **HTTP Client**: Axios
- **Icons**: Lucide React

### Backend
- **Framework**: Spring Boot 3.x
- **Language**: Java 17+
- **Database**: PostgreSQL
- **Caching**: Redis
- **Authentication**: Spring Security + JWT
- **API Documentation**: Swagger/OpenAPI

### DevOps
- **Version Control**: Git + GitHub
- **CI/CD**: GitHub Actions
- **Deployment**: Railway (Backend), Vercel (Frontend)

---

## 📋 Prerequisites

- Node.js 18+ and npm
- Java 17+
- PostgreSQL 14+
- Redis 7+
- Git

---

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/nakatepriya525-cpu/sonicscribe-voice-notes.git
cd sonicscribe-voice-notes
```

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on `http://localhost:3000`

### 3. Backend Setup

```bash
cd backend
./mvnw spring-boot:run
```

Backend will run on `http://localhost:8080`

### 4. Database Setup

```sql
CREATE DATABASE sonicscribe;
CREATE USER sonicscribe_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE sonicscribe TO sonicscribe_user;
```

---

## 📖 Usage

1. **Start Recording**: Click the microphone button to start voice recording
2. **Speak Naturally**: The app will transcribe your speech in real-time
3. **Auto-Save**: Notes are automatically saved and categorized
4. **Search**: Use the search bar to find notes quickly
5. **Voice Commands**: Try commands like "add tag work" or "find notes from yesterday"

---

## 🎯 Project Objectives

1. ✅ Develop a hands-free note-taking solution
2. ✅ Implement AI-powered organization
3. ✅ Create an accessible, browser-based interface
4. ✅ Enable cross-device synchronization
5. ✅ Support collaborative note-sharing

---

## 📊 Project Timeline

| Phase | Duration | Status |
|-------|----------|--------|
| Planning & Design | Week 1-2 | ✅ Complete |
| Frontend Development | Week 3-6 | 🔄 In Progress |
| Backend Development | Week 7-10 | ⏳ Pending |
| Integration & Testing | Week 11-12 | ⏳ Pending |
| Deployment | Week 13 | ⏳ Pending |

---

## 🤝 Contributing

This is an academic project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👩‍💻 Author

**Priya Nakate**  
BSc Information Technology  
Guru Nanak College of Arts, Science, and Commerce  
Seat No: 30/25

**Project Guide**: Mrs. Dhanashree Patil

---

## 🙏 Acknowledgments

- Dr. Puspinder G. Bhatia (Principal)
- Mrs. Harpreet Kaur (HOD, IT Department)
- Mrs. Dhanashree Patil (Project Guide)
- Department of Information Technology Faculty
- Family and Friends for their support

---

## 📞 Contact

- **Email**: nakatepriya525@gmail.com
- **GitHub**: [@nakatepriya525-cpu](https://github.com/nakatepriya525-cpu)
- **Project Repository**: [SonicScribe](https://github.com/nakatepriya525-cpu/sonicscribe-voice-notes)

---

**⭐ If you find this project helpful, please give it a star!**