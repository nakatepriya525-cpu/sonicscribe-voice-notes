# 📘 SonicScribe Setup Guide

Complete guide to set up and run SonicScribe locally.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** or **yarn**
- **Git** ([Download](https://git-scm.com/))
- **Java** 17+ (for backend)
- **PostgreSQL** 14+ (for backend)
- **Redis** 7+ (for backend caching)

## 🎯 Step-by-Step Setup

### 1. Clone the Repository

```bash
git clone https://github.com/nakatepriya525-cpu/sonicscribe-voice-notes.git
cd sonicscribe-voice-notes
```

### 2. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:3000`

### 3. Backend Setup (Coming Soon)

The Spring Boot backend setup will be added in the next phase.

```bash
# Navigate to backend directory
cd backend

# Build the project
./mvnw clean install

# Run the application
./mvnw spring-boot:run
```

The backend will be available at `http://localhost:8080`

### 4. Database Setup (Coming Soon)

```sql
-- Create database
CREATE DATABASE sonicscribe;

-- Create user
CREATE USER sonicscribe_user WITH PASSWORD 'your_secure_password';

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE sonicscribe TO sonicscribe_user;
```

## 🔧 Configuration

### Frontend Configuration

Edit `frontend/.env`:

```env
VITE_API_URL=http://localhost:8080/api
VITE_API_TIMEOUT=30000
VITE_ENABLE_VOICE_COMMANDS=true
VITE_ENABLE_AI_CATEGORIZATION=true
VITE_TFJS_BACKEND=webgl
```

### Backend Configuration (Coming Soon)

Edit `backend/src/main/resources/application.properties`:

```properties
# Database
spring.datasource.url=jdbc:postgresql://localhost:5432/sonicscribe
spring.datasource.username=sonicscribe_user
spring.datasource.password=your_secure_password

# Redis
spring.redis.host=localhost
spring.redis.port=6379

# JWT
jwt.secret=your_jwt_secret_key
jwt.expiration=86400000
```

## 🚀 Running the Application

### Development Mode

**Terminal 1 - Frontend:**
```bash
cd frontend
npm run dev
```

**Terminal 2 - Backend (Coming Soon):**
```bash
cd backend
./mvnw spring-boot:run
```

### Production Build

**Frontend:**
```bash
cd frontend
npm run build
npm run preview
```

## 🧪 Testing

### Frontend Tests (Coming Soon)

```bash
cd frontend
npm run test
```

### Backend Tests (Coming Soon)

```bash
cd backend
./mvnw test
```

## 🐛 Common Issues & Solutions

### Issue: Voice recognition not working

**Solution:**
- Use Chrome or Edge browser
- Grant microphone permissions
- Ensure you're on HTTPS (in production)

### Issue: Port already in use

**Solution:**
```bash
# Kill process on port 3000 (frontend)
lsof -ti:3000 | xargs kill -9

# Kill process on port 8080 (backend)
lsof -ti:8080 | xargs kill -9
```

### Issue: npm install fails

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📱 Browser Compatibility

| Browser | Voice Recognition | Recommended |
|---------|------------------|-------------|
| Chrome  | ✅ Full Support   | ✅ Yes      |
| Edge    | ✅ Full Support   | ✅ Yes      |
| Safari  | ⚠️ Limited       | ⚠️ Partial  |
| Firefox | ❌ Experimental   | ❌ No       |

## 🔐 Security Notes

1. **Never commit `.env` files** to version control
2. **Use strong passwords** for database and JWT secrets
3. **Enable HTTPS** in production
4. **Keep dependencies updated** regularly

## 📚 Next Steps

1. ✅ Frontend is ready to use
2. ⏳ Backend development in progress
3. ⏳ Database integration coming soon
4. ⏳ AI features to be added

## 💡 Tips

- Use Chrome DevTools for debugging
- Check browser console for errors
- Monitor network tab for API calls
- Use React DevTools extension

## 🆘 Getting Help

- Check [GitHub Issues](https://github.com/nakatepriya525-cpu/sonicscribe-voice-notes/issues)
- Read the [main README](../README.md)
- Contact: nakatepriya525@gmail.com

---

**Happy Coding! 🎉**