import React, { useEffect } from 'react';
import { Mic, MicOff, Save, X } from 'lucide-react';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
import { useNotesStore } from '../store/notesStore';
import toast from 'react-hot-toast';

interface VoiceRecorderProps {
  isRecording: boolean;
  setIsRecording: (value: boolean) => void;
}

const VoiceRecorder: React.FC<VoiceRecorderProps> = ({ isRecording, setIsRecording }) => {
  const { 
    transcript, 
    isListening, 
    startListening, 
    stopListening, 
    resetTranscript,
    isSupported,
    error 
  } = useSpeechRecognition();
  
  const { addNote } = useNotesStore();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleToggleRecording = () => {
    if (isListening) {
      stopListening();
      setIsRecording(false);
    } else {
      startListening();
      setIsRecording(true);
    }
  };

  const handleSaveNote = () => {
    if (transcript.trim()) {
      const title = transcript.substring(0, 50).trim() + (transcript.length > 50 ? '...' : '');
      
      addNote({
        title,
        content: transcript,
        transcript: transcript,
        tags: [],
        category: 'General'
      });
      
      resetTranscript();
      toast.success('Note saved successfully!');
    } else {
      toast.error('No transcript to save');
    }
  };

  const handleDiscard = () => {
    resetTranscript();
    toast('Transcript discarded', { icon: '🗑️' });
  };

  if (!isSupported) {
    return (
      <div className="voice-recorder">
        <div className="error-message">
          <p>⚠️ Speech recognition not supported</p>
          <small>Please use Chrome, Edge, or Safari</small>
        </div>
      </div>
    );
  }

  return (
    <div className="voice-recorder">
      <button 
        className={`record-btn ${isListening ? 'recording' : ''}`}
        onClick={handleToggleRecording}
        title={isListening ? 'Stop Recording' : 'Start Recording'}
      >
        {isListening ? <MicOff size={28} /> : <Mic size={28} />}
        <span>{isListening ? 'Stop Recording' : 'Start Recording'}</span>
      </button>

      {transcript && (
        <div className="transcript-preview">
          <div className="transcript-header">
            <h3>Live Transcript</h3>
            <button className="btn-icon" onClick={handleDiscard} title="Discard">
              <X size={16} />
            </button>
          </div>
          <p className="transcript-text">{transcript}</p>
          <button className="save-btn" onClick={handleSaveNote}>
            <Save size={18} /> Save as Note
          </button>
        </div>
      )}

      {isListening && (
        <div className="recording-indicator">
          <span className="pulse-dot"></span>
          <span>Listening...</span>
        </div>
      )}
    </div>
  );
};

export default VoiceRecorder;