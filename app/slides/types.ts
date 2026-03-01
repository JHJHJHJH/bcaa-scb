// Types for the lecture slide deck
export type SlideType = 
  | 'opening' 
  | 'agenda' 
  | 'concept' 
  | 'diagram' 
  | 'demo' 
  | 'discussion' 
  | 'lab' 
  | 'exercise' 
  | 'recap' 
  | 'preview';

export interface SlideData {
  id: number;
  type: SlideType;
  title: string;
  durationMinutes: number;
  content: {
    subtitle?: string;
    bullets?: string[];
    code?: string;
    codeLanguage?: string;
    diagram?: string;
    diagramCaption?: string;
    discussionPrompt?: string;
    exercise?: {
      problem: string;
      input?: string;
      expectedOutput?: string;
      hint: string;
    };
    labSteps?: {
      step: number;
      instruction: string;
      expectedOutput?: string;
    }[];
    recapItems?: string[];
    previewTopics?: string[];
  };
  speakerNotes: string[];
}

export interface SlideDeckState {
  currentSlide: number;
  totalSlides: number;
  isPlaying: boolean;
  notesWindowOpen: boolean;
}
