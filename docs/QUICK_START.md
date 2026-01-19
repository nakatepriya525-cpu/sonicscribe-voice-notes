# ⚡ Quick Start Guide

Get SonicScribe up and running in 5 minutes!

## 🎯 Prerequisites

Make sure you have:
- ✅ Node.js 18+ installed
- ✅ npm or yarn
- ✅ Chrome or Edge browser (for voice recognition)
- ✅ A working microphone

## 🚀 Installation

### Option 1: Clone from GitHub (Recommended)

```bash
# 1. Clone the repository
git clone https://github.com/nakatepriya525-cpu/sonicscribe-voice-notes.git

# 2. Navigate to frontend directory
cd sonicscribe-voice-notes/frontend

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

### Option 2: Download ZIP

1. Download ZIP from [GitHub](https://github.com/nakatepriya525-cpu/sonicscribe-voice-notes)
2. Extract the files
3. Open terminal in `frontend` folder
4. Run `npm install`
5. Run `npm run dev`

## 🎤 First Steps

### 1. Grant Microphone Permission

When you first click the record button, your browser will ask for microphone permission. Click **Allow**.

### 2. Start Recording

1. Click the **"Start Recording"** button
2. Speak naturally into your microphone
3. Watch your words appear in real-time
4. Click **"Stop Recording"** when done

### 3. Save Your Note

1. Review the transcript
2. Click **"Save as Note"**
3. Your note appears in the sidebar

### 4. Edit Your Note

1. Click on any note in the sidebar
2. Edit the title and content
3. Add categories and tags
4. Changes are saved automatically

### 5. Search Notes

1. Use the search bar at the top
2. Type keywords to find notes
3. Results appear instantly

## 💡 Tips for Best Results

### Voice Recognition Tips

- **Speak clearly** at a normal pace
- **Use a good microphone** for better accuracy
- **Minimize background noise**
- **Pause briefly** between sentences
- **Use punctuation commands** (coming soon)

### Organization Tips

- **Use categories** to group related notes
- **Add tags** for easy searching
- **Keep titles descriptive**
- **Review and edit** transcripts for accuracy

## 🎨 Customization

### Change Categories

Edit the category list in `frontend/src/components/NoteEditor.tsx`:

```typescript
<select value={category} onChange={(e) => setCategory(e.target.value)}>
  <option value="General">General</option>
  <option value="Work">Work</option>
  <option value="Personal">Personal</option>
  // Add your own categories here
</select>
```

### Adjust Colors

Modify CSS variables in `frontend/src/index.css`:

```css
:root {
  --primary: #667eea;        /* Change primary color */
  --secondary: #764ba2;      /* Change secondary color */
  --success: #10b981;        /* Change success color */
  // Customize other colors
}
```

## 🐛 Troubleshooting

### Voice Recognition Not Working?

**Problem**: Microphone button doesn't work  
**Solution**: 
- Use Chrome or Edge browser
- Check microphone permissions in browser settings
- Ensure microphone is connected and working

**Problem**: Poor transcription accuracy  
**Solution**:
- Speak more clearly
- Reduce background noise
- Check microphone quality
- Try a different microphone

### Installation Issues?

**Problem**: `npm install` fails  
**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Problem**: Port 3000 already in use  
**Solution**:
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- --port 3001
```

## 📚 Next Steps

Now that you're up and running:

1. ✅ **Explore Features**: Try all the features
2. ✅ **Read Documentation**: Check out [FEATURES.md](FEATURES.md)
3. ✅ **Customize**: Make it your own
4. ✅ **Contribute**: See [CONTRIBUTING.md](../CONTRIBUTING.md)
5. ✅ **Stay Updated**: Watch the repo for updates

## 🎓 Learning Resources

### For Beginners

- [React Tutorial](https://react.dev/learn)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Web Speech API Guide](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)

### For Advanced Users

- [Zustand Documentation](https://docs.pmnd.rs/zustand)
- [Vite Guide](https://vitejs.dev/guide/)
- [TensorFlow.js](https://www.tensorflow.org/js)

## 💬 Get Help

Need help? Here's how:

1. **Check Documentation**: Read the docs in `/docs` folder
2. **Search Issues**: Look for similar issues on GitHub
3. **Ask Questions**: Open a new issue
4. **Contact**: Email nakatepriya525@gmail.com

## 🎉 You're Ready!

Congratulations! You're all set to use SonicScribe. Happy note-taking! 🎤📝

---

**Pro Tip**: Bookmark this guide for quick reference!