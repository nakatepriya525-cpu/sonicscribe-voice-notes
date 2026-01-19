import React, { useState, useEffect } from 'react';
import { Save, Tag, Trash2, X, Plus } from 'lucide-react';
import { useNotesStore } from '../store/notesStore';
import toast from 'react-hot-toast';

interface NoteEditorProps {
  noteId: string | null;
  onClose: () => void;
}

const NoteEditor: React.FC<NoteEditorProps> = ({ noteId, onClose }) => {
  const { getNoteById, updateNote, deleteNote } = useNotesStore();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('General');
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');

  useEffect(() => {
    if (noteId) {
      const note = getNoteById(noteId);
      if (note) {
        setTitle(note.title);
        setContent(note.content);
        setCategory(note.category);
        setTags(note.tags);
      }
    } else {
      // Reset for new note
      setTitle('');
      setContent('');
      setCategory('General');
      setTags([]);
    }
  }, [noteId, getNoteById]);

  const handleSave = () => {
    if (!noteId) return;
    
    if (!title.trim() || !content.trim()) {
      toast.error('Title and content are required');
      return;
    }

    updateNote(noteId, {
      title: title.trim(),
      content: content.trim(),
      category,
      tags,
    });

    toast.success('Note updated successfully!');
  };

  const handleDelete = () => {
    if (!noteId) return;
    
    if (confirm('Are you sure you want to delete this note?')) {
      deleteNote(noteId);
      toast.success('Note deleted');
      onClose();
    }
  };

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  if (!noteId) {
    return (
      <div className="note-editor-empty">
        <div className="empty-editor-state">
          <h2>Select a note to edit</h2>
          <p>Or start recording to create a new note</p>
        </div>
      </div>
    );
  }

  return (
    <div className="note-editor">
      <div className="editor-header">
        <input 
          type="text" 
          placeholder="Note title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="title-input"
        />
        
        <div className="editor-actions">
          <button className="btn-icon" onClick={handleSave} title="Save">
            <Save size={20} />
          </button>
          <button className="btn-icon danger" onClick={handleDelete} title="Delete">
            <Trash2 size={20} />
          </button>
          <button className="btn-icon" onClick={onClose} title="Close">
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="editor-toolbar">
        <div className="category-selector">
          <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="General">General</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Ideas">Ideas</option>
            <option value="Meeting">Meeting</option>
            <option value="Todo">Todo</option>
          </select>
        </div>

        <div className="tags-section">
          <label>Tags:</label>
          <div className="tags-container">
            {tags.map((tag) => (
              <span key={tag} className="tag-chip">
                {tag}
                <button onClick={() => handleRemoveTag(tag)}>
                  <X size={12} />
                </button>
              </span>
            ))}
            <div className="tag-input-group">
              <input
                type="text"
                placeholder="Add tag..."
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
              />
              <button onClick={handleAddTag} className="btn-add-tag">
                <Plus size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <textarea 
        className="editor-content"
        placeholder="Start typing or use voice recording..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </div>
  );
};

export default NoteEditor;