import React, { useState } from 'react';
import { Mic, MicOff, Save, Search, Tag, Menu, Settings } from 'lucide-react';
import VoiceRecorder from './components/VoiceRecorder';
import NotesList from './components/NotesList';
import NoteEditor from './components/NoteEditor';
import SearchBar from './components/SearchBar';
import { useNotesStore } from './store/notesStore';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  const [isRecording, setIsRecording] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);
  const { notes } = useNotesStore();

  return (
    <div className="app">
      <Toaster position="top-right" />
      
      <header className="header">
        <div className="header-content">
          <h1>🎙️ SonicScribe</h1>
          <p>Voice-Controlled Smart Notes</p>
        </div>
        <div className="header-actions">
          <button className="icon-btn">
            <Settings size={20} />
          </button>
        </div>
      </header>

      <main className="main-content">
        <aside className="sidebar">
          <VoiceRecorder 
            isRecording={isRecording}
            setIsRecording={setIsRecording}
          />
          
          <SearchBar />
          
          <NotesList 
            notes={notes} 
            selectedNoteId={selectedNoteId}
            onSelectNote={setSelectedNoteId}
          />
        </aside>

        <section className="editor-area">
          <NoteEditor 
            noteId={selectedNoteId}
            onClose={() => setSelectedNoteId(null)}
          />
        </section>
      </main>
    </div>
  );
}

export default App;