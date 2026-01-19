import React from 'react';
import { Note } from '../types';
import { FileText, Tag, Clock } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface NotesListProps {
  notes: Note[];
  selectedNoteId: string | null;
  onSelectNote: (id: string) => void;
}

const NotesList: React.FC<NotesListProps> = ({ notes, selectedNoteId, onSelectNote }) => {
  const activeNotes = notes.filter((note) => !note.isDeleted);

  return (
    <div className="notes-list">
      <div className="notes-list-header">
        <h2>Recent Notes</h2>
        <span className="notes-count">{activeNotes.length}</span>
      </div>

      {activeNotes.length === 0 ? (
        <div className="empty-state">
          <FileText size={48} strokeWidth={1} />
          <p>No notes yet</p>
          <small>Start recording to create your first note!</small>
        </div>
      ) : (
        <ul className="notes-items">
          {activeNotes.map((note) => (
            <li 
              key={note.id} 
              className={`note-item ${selectedNoteId === note.id ? 'active' : ''}`}
              onClick={() => onSelectNote(note.id)}
            >
              <div className="note-item-icon">
                <FileText size={18} />
              </div>
              
              <div className="note-item-content">
                <h4 className="note-item-title">{note.title}</h4>
                <p className="note-item-preview">
                  {note.content.substring(0, 80)}
                  {note.content.length > 80 ? '...' : ''}
                </p>
                
                <div className="note-item-meta">
                  <span className="note-category">{note.category}</span>
                  
                  {note.tags.length > 0 && (
                    <div className="note-tags">
                      {note.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="note-tag">
                          <Tag size={10} /> {tag}
                        </span>
                      ))}
                      {note.tags.length > 2 && (
                        <span className="note-tag-more">+{note.tags.length - 2}</span>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="note-item-time">
                  <Clock size={12} />
                  <span>{formatDistanceToNow(new Date(note.updatedAt), { addSuffix: true })}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotesList;