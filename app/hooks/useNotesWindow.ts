'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import { SlideData } from '../slides/types';

interface UseNotesWindowProps {
  currentSlide: number;
  slideData: SlideData | null;
}

export function useNotesWindow({ currentSlide, slideData }: UseNotesWindowProps) {
  const notesWindowRef = useRef<Window | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openNotesWindow = useCallback(() => {
    if (notesWindowRef.current && !notesWindowRef.current.closed) {
      notesWindowRef.current.focus();
      return;
    }

    const width = 500;
    const height = 700;
    const left = window.screen.width - width - 50;
    const top = 100;

    const newWindow = window.open(
      '/notes',
      'SpeakerNotes',
      `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
    );

    if (newWindow) {
      notesWindowRef.current = newWindow;
      setIsOpen(true);

      // Send initial slide data after window loads
      const sendInitialData = () => {
        if (slideData) {
          newWindow.postMessage(
            {
              type: 'SLIDE_CHANGE',
              slideNumber: currentSlide,
              slideData,
            },
            '*'
          );
        }
      };

      // Wait for window to load
      if (newWindow.document.readyState === 'complete') {
        sendInitialData();
      } else {
        newWindow.addEventListener('load', sendInitialData);
      }
    }
  }, [currentSlide, slideData]);

  const closeNotesWindow = useCallback(() => {
    if (notesWindowRef.current && !notesWindowRef.current.closed) {
      notesWindowRef.current.close();
    }
    notesWindowRef.current = null;
    setIsOpen(false);
  }, []);

  // Send slide updates to notes window
  useEffect(() => {
    if (notesWindowRef.current && !notesWindowRef.current.closed && slideData) {
      notesWindowRef.current.postMessage(
        {
          type: 'SLIDE_CHANGE',
          slideNumber: currentSlide,
          slideData,
        },
        '*'
      );
    }
  }, [currentSlide, slideData]);

  // Check if window is closed periodically
  useEffect(() => {
    const checkClosed = setInterval(() => {
      if (notesWindowRef.current?.closed) {
        setIsOpen(false);
        notesWindowRef.current = null;
      }
    }, 1000);

    return () => clearInterval(checkClosed);
  }, []);

  // Close notes window when parent closes
  useEffect(() => {
    const handleBeforeUnload = () => {
      closeNotesWindow();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [closeNotesWindow]);

  return {
    isOpen,
    openNotesWindow,
    closeNotesWindow,
  };
}
