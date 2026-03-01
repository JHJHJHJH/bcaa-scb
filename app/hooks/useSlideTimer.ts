'use client';

import { useState, useCallback, useEffect } from 'react';

interface UseSlideTimerProps {
  durationMinutes: number;
  isActive: boolean;
  onTimeUp?: () => void;
}

export function useSlideTimer({ durationMinutes, isActive, onTimeUp }: UseSlideTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState(durationMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);

  // Reset timer when duration changes
  useEffect(() => {
    setTimeRemaining(durationMinutes * 60);
    setIsRunning(false);
  }, [durationMinutes]);

  // Start/stop timer based on isActive
  useEffect(() => {
    if (isActive && !isRunning) {
      setIsRunning(true);
    } else if (!isActive && isRunning) {
      setIsRunning(false);
    }
  }, [isActive, isRunning]);

  // Countdown logic
  useEffect(() => {
    if (!isRunning || timeRemaining <= 0) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          onTimeUp?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timeRemaining, onTimeUp]);

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, []);

  const start = useCallback(() => setIsRunning(true), []);
  const pause = useCallback(() => setIsRunning(false), []);
  const reset = useCallback(() => {
    setTimeRemaining(durationMinutes * 60);
    setIsRunning(false);
  }, [durationMinutes]);

  return {
    timeRemaining,
    formattedTime: formatTime(timeRemaining),
    isRunning,
    start,
    pause,
    reset,
    progress: ((durationMinutes * 60 - timeRemaining) / (durationMinutes * 60)) * 100,
  };
}
