import { create } from 'zustand';
import { Note, SearchFilters } from '../types';

interface NotesState {
  notes: Note[];
  searchFilters: SearchFilters;
  
  // Actions
  addNote: (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateNote: (id: string, updates: Partial<Note>) => void;
  deleteNote: (id: string) => void;
  getNoteById: (id: string) => Note | undefined;
  setSearchFilters: (filters: SearchFilters) => void;
  getFilteredNotes: () => Note[];
}

export const useNotesStore = create<NotesState>((set, get) => ({
  notes: [],
  searchFilters: {},
  
  addNote: (note) => set((state) => ({
    notes: [
      {
        ...note,
        id: crypto.randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date(),
        isDeleted: false,
      },
      ...state.notes
    ]
  })),
  
  updateNote: (id, updates) => set((state) => ({
    notes: state.notes.map((note) => 
      note.id === id 
        ? { ...note, ...updates, updatedAt: new Date() }
        : note
    )
  })),
  
  deleteNote: (id) => set((state) => ({
    notes: state.notes.map((note) =>
      note.id === id
        ? { ...note, isDeleted: true, updatedAt: new Date() }
        : note
    )
  })),
  
  getNoteById: (id) => {
    return get().notes.find((note) => note.id === id && !note.isDeleted);
  },
  
  setSearchFilters: (filters) => set({ searchFilters: filters }),
  
  getFilteredNotes: () => {
    const { notes, searchFilters } = get();
    let filtered = notes.filter((note) => !note.isDeleted);
    
    if (searchFilters.query) {
      const query = searchFilters.query.toLowerCase();
      filtered = filtered.filter((note) =>
        note.title.toLowerCase().includes(query) ||
        note.content.toLowerCase().includes(query)
      );
    }
    
    if (searchFilters.category) {
      filtered = filtered.filter((note) => note.category === searchFilters.category);
    }
    
    if (searchFilters.tags && searchFilters.tags.length > 0) {
      filtered = filtered.filter((note) =>
        searchFilters.tags!.some((tag) => note.tags.includes(tag))
      );
    }
    
    return filtered;
  },
}));