# SonicScribe Frontend

React + TypeScript frontend for the SonicScribe voice-controlled smart notes app.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── VoiceRecorder.tsx
│   ├── NotesList.tsx
│   ├── NoteEditor.tsx
│   └── SearchBar.tsx
├── hooks/              # Custom React hooks
│   └── useSpeechRecognition.ts
├── store/              # Zustand state management
│   └── notesStore.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx             # Main app component
├── App.css             # App styles
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🎯 Key Features

- **Voice Recognition**: Real-time speech-to-text using Web Speech API
- **State Management**: Zustand for lightweight, efficient state management
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Works on desktop and mobile devices
- **Hot Reload**: Fast development with Vite HMR

## 🛠️ Technologies

- React 18
- TypeScript 5
- Vite 5
- Zustand (State Management)
- Web Speech API
- Lucide React (Icons)
- date-fns (Date formatting)
- React Hot Toast (Notifications)

## 🌐 Browser Support

Requires browsers with Web Speech API support:
- ✅ Chrome/Edge (Recommended)
- ✅ Safari (Limited support)
- ⚠️ Firefox (Experimental)

## 📝 Development Notes

### Adding New Components

1. Create component in `src/components/`
2. Import and use in `App.tsx` or other components
3. Add types in `src/types/index.ts` if needed

### State Management

The app uses Zustand for state management. See `src/store/notesStore.ts` for the main store.

### Styling

- Global styles: `src/index.css`
- Component styles: `src/App.css`
- CSS variables defined in `:root` for theming

## 🔧 Configuration

Copy `.env.example` to `.env` and configure:

```env
VITE_API_URL=http://localhost:8080/api
VITE_ENABLE_VOICE_COMMANDS=true
VITE_ENABLE_AI_CATEGORIZATION=true
```

## 📦 Building for Production

```bash
npm run build
```

Output will be in `dist/` directory.

## 🐛 Troubleshooting

**Voice recognition not working?**
- Ensure you're using Chrome or Edge
- Check microphone permissions
- Use HTTPS in production (required for Web Speech API)

**Build errors?**
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`

## 👩‍💻 Author

Priya Nakate - BSc IT Final Year Project