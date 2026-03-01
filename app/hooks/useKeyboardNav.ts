'use client';

import { useEffect, useCallback } from 'react';

interface UseKeyboardNavProps {
  onNext: () => void;
  onPrevious: () => void;
  onFirst: () => void;
  onLast: () => void;
  enabled?: boolean;
}

export function useKeyboardNav({
  onNext,
  onPrevious,
  onFirst,
  onLast,
  enabled = true,
}: UseKeyboardNavProps) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!enabled) return;

      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
          event.preventDefault();
          onNext();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
          event.preventDefault();
          onPrevious();
          break;
        case 'Home':
          event.preventDefault();
          onFirst();
          break;
        case 'End':
          event.preventDefault();
          onLast();
          break;
      }
    },
    [enabled, onNext, onPrevious, onFirst, onLast]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
}
