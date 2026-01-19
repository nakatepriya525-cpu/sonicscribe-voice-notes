# 📂 SonicScribe Project Structure

Complete overview of the project architecture and file organization.

## 🏗️ High-Level Architecture

```
SonicScribe
├── Frontend (React + TypeScript)
│   ├── Voice Recognition (Web Speech API)
│   ├── State Management (Zustand)
│   ├── UI Components
│   └── API Integration
│
├── Backend (Spring Boot) [Coming Soon]
│   ├── REST API
│   ├── Authentication (JWT)
│   ├── Database (PostgreSQL)
│   └── Caching (Redis)
│
└── AI/ML Features [Coming Soon]
    ├── TensorFlow.js (Client-side)
    ├── Auto-categorization
    └── Voice Commands Parser
```

## 📁 Directory Structure

```
sonicscribe-voice-notes/
│
├── frontend/                    # React frontend application
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── VoiceRecorder.tsx
│   │   │   ├── NotesList.tsx
│   │   │   ├── NoteEditor.tsx
│   │   │   └── SearchBar.tsx
│   │   │
│   │   ├── hooks/              # Custom React hooks
│   │   │   └── useSpeechRecognition.ts
│   │   │
│   │   ├── store/              # State management
│   │   │   └── notesStore.ts
│   │   │
│   │   ├── types/              # TypeScript definitions
│   │   │   └── index.ts
│   │   │
│   │   ├── utils/              # Utility functions [Coming Soon]
│   │   ├── services/           # API services [Coming Soon]
│   │   ├── App.tsx             # Main app component
│   │   ├── App.css             # App styles
│   │   ├── main.tsx            # Entry point
│   │   └── index.css           # Global styles
│   │
│   ├── .env.example            # Environment variables template
│   ├── index.html              # HTML entry point
│   ├── package.json            # Dependencies
│   ├── tsconfig.json           # TypeScript config
│   ├── vite.config.ts          # Vite configuration
│   └── README.md               # Frontend documentation
│
├── backend/                     # Spring Boot backend [Coming Soon]
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/sonicscribe/
│   │   │   │   ├── controller/     # REST controllers
│   │   │   │   ├── service/        # Business logic
│   │   │   │   ├── repository/     # Data access
│   │   │   │   ├── model/          # Entity models
│   │   │   │   ├── config/         # Configuration
│   │   │   │   ├── security/       # Security & JWT
│   │   │   │   └── dto/            # Data transfer objects
│   │   │   │
│   │   │   └── resources/
│   │   │       ├── application.properties
│   │   │       └── schema.sql
│   │   │
│   │   └── test/                   # Unit & integration tests
│   │
│   ├── pom.xml                     # Maven dependencies
│   └── README.md                   # Backend documentation
│
├── docs/                           # Project documentation
│   ├── SETUP_GUIDE.md             # Setup instructions
│   ├── PROJECT_STRUCTURE.md       # This file
│   ├── API_DOCUMENTATION.md       # API docs [Coming Soon]
│   └── DEPLOYMENT.md              # Deployment guide [Coming Soon]
│
├── .gitignore                      # Git ignore rules
├── LICENSE                         # MIT License
└── README.md                       # Main project README
```

## 🎨 Frontend Architecture

### Components Hierarchy

```
App
├── Header
│   └── Settings Button
│
├── Sidebar
│   ├── VoiceRecorder
│   │   ├── Record Button
│   │   ├── Transcript Preview
│   │   └── Save Button
│   │
│   ├── SearchBar
│   │   ├── Search Input
│   │   └── Filter Button
│   │
│   └── NotesList
│       └── NoteItem (multiple)
│           ├── Title
│           ├── Preview
│           ├── Category
│           ├── Tags
│           └── Timestamp
│
└── EditorArea
    └── NoteEditor
        ├── Title Input
        ├── Toolbar
        │   ├── Category Selector
        │   └── Tags Manager
        ├── Content Editor
        └── Action Buttons
```

### State Management (Zustand)

```typescript
NotesStore
├── notes: Note[]
├── searchFilters: SearchFilters
├── addNote()
├── updateNote()
├── deleteNote()
├── getNoteById()
├── setSearchFilters()
└── getFilteredNotes()
```

### Data Flow

```
User Action
    ↓
Component Event Handler
    ↓
Zustand Store Action
    ↓
State Update
    ↓
Component Re-render
    ↓
UI Update
```

## 🔧 Backend Architecture [Coming Soon]

### Layered Architecture

```
Controller Layer (REST API)
    ↓
Service Layer (Business Logic)
    ↓
Repository Layer (Data Access)
    ↓
Database (PostgreSQL)
```

### API Endpoints Structure

```
/api
├── /auth
│   ├── POST /register
│   ├── POST /login
│   └── POST /refresh
│
├── /notes
│   ├── GET    /notes
│   ├── POST   /notes
│   ├── GET    /notes/:id
│   ├── PUT    /notes/:id
│   └── DELETE /notes/:id
│
├── /notebooks
│   ├── GET    /notebooks
│   ├── POST   /notebooks
│   └── POST   /notebooks/:id/share
│
└── /search
    └── GET /search?q=query
```

## 🗄️ Database Schema [Coming Soon]

```sql
users
├── id (UUID, PK)
├── email (VARCHAR, UNIQUE)
├── password_hash (VARCHAR)
├── name (VARCHAR)
└── created_at (TIMESTAMP)

notes
├── id (UUID, PK)
├── user_id (UUID, FK → users)
├── title (VARCHAR)
├── content (TEXT)
├── transcript (TEXT)
├── category (VARCHAR)
├── tags (TEXT[])
├── created_at (TIMESTAMP)
├── updated_at (TIMESTAMP)
└── is_deleted (BOOLEAN)

notebooks
├── id (UUID, PK)
├── name (VARCHAR)
├── owner_id (UUID, FK → users)
└── created_at (TIMESTAMP)

notebook_collaborators
├── notebook_id (UUID, FK → notebooks)
├── user_id (UUID, FK → users)
├── permission (VARCHAR)
└── PRIMARY KEY (notebook_id, user_id)
```

## 🔐 Security Architecture

### Authentication Flow

```
1. User Login
   ↓
2. Validate Credentials
   ↓
3. Generate JWT Token
   ↓
4. Return Token to Client
   ↓
5. Client Stores Token
   ↓
6. Include Token in API Requests
   ↓
7. Server Validates Token
   ↓
8. Process Request
```

### JWT Structure

```json
{
  "header": {
    "alg": "HS256",
    "typ": "JWT"
  },
  "payload": {
    "sub": "user_id",
    "email": "user@example.com",
    "iat": 1234567890,
    "exp": 1234654290
  }
}
```

## 📦 Build & Deployment

### Development Workflow

```
1. Local Development
   ├── Frontend: npm run dev (Port 3000)
   └── Backend: ./mvnw spring-boot:run (Port 8080)

2. Testing
   ├── Unit Tests
   ├── Integration Tests
   └── E2E Tests

3. Build
   ├── Frontend: npm run build → dist/
   └── Backend: ./mvnw package → target/*.jar

4. Deployment
   ├── Frontend → Vercel/Netlify
   └── Backend → Railway/Heroku
```

## 🚀 Technology Stack Summary

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | React 18 | UI Framework |
| Frontend | TypeScript | Type Safety |
| Frontend | Vite | Build Tool |
| Frontend | Zustand | State Management |
| Frontend | Web Speech API | Voice Recognition |
| Backend | Spring Boot 3 | API Framework |
| Backend | PostgreSQL | Database |
| Backend | Redis | Caching |
| Backend | JWT | Authentication |
| ML/AI | TensorFlow.js | Client-side ML |

## 📝 File Naming Conventions

- **Components**: PascalCase (e.g., `VoiceRecorder.tsx`)
- **Hooks**: camelCase with 'use' prefix (e.g., `useSpeechRecognition.ts`)
- **Stores**: camelCase with 'Store' suffix (e.g., `notesStore.ts`)
- **Types**: PascalCase (e.g., `Note`, `User`)
- **Utils**: camelCase (e.g., `formatDate.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)

## 🎯 Development Phases

### Phase 1: MVP (Current)
- ✅ Frontend setup
- ✅ Voice recording
- ✅ Basic note CRUD
- ✅ Local state management

### Phase 2: Backend Integration
- ⏳ Spring Boot API
- ⏳ Database setup
- ⏳ Authentication
- ⏳ API integration

### Phase 3: Advanced Features
- ⏳ AI categorization
- ⏳ Voice commands
- ⏳ Collaboration
- ⏳ Advanced search

### Phase 4: Polish & Deploy
- ⏳ Testing
- ⏳ Performance optimization
- ⏳ Deployment
- ⏳ Documentation

---

**Last Updated**: January 2026  
**Maintained by**: Priya Nakate