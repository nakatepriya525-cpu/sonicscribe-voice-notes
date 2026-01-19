export interface Note {
  id: string;
  title: string;
  content: string;
  transcript?: string;
  tags: string[];
  category: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted?: boolean;
}

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export interface Notebook {
  id: string;
  name: string;
  ownerId: string;
  notes: Note[];
  collaborators: string[];
  createdAt: Date;
}

export interface VoiceCommand {
  action: string;
  params: string[];
}

export interface SearchFilters {
  query?: string;
  category?: string;
  tags?: string[];
  dateFrom?: Date;
  dateTo?: Date;
}