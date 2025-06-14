export interface KnowledgeBase {
  id: string;
  title: string;
  description: string;
  videoCount: number;
  totalDuration: number;
  thumbnail: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  duration: number;
  thumbnail: string;
  url: string;
  knowledgeBaseId: string;
  transcription?: string;
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: string;
  videoTimestamp?: number;
  feedback?: 'positive' | 'negative';
  feedbackComment?: string;
}

export interface SearchFilters {
  query: string;
  tags: string[];
  dateRange: {
    start?: string;
    end?: string;
  };
  duration: {
    min?: number;
    max?: number;
  };
}

export interface Theme {
  mode: 'light' | 'dark';
  primaryColor: string;
  secondaryColor: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  preferences: {
    theme: Theme;
    language: string;
  };
}

export interface Feedback {
  messageId: string;
  type: 'positive' | 'negative';
  comment?: string;
  timestamp: string;
  userId?: string;
}