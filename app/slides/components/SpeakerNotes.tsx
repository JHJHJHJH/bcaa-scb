'use client';

import { useEffect, useState } from 'react';
import { SlideData } from '../types';

interface SpeakerNotesProps {
  slideNumber: number;
  slideData: SlideData | null;
}

export function SpeakerNotes({ slideNumber, slideData }: SpeakerNotesProps) {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (slideData) {
      setTimeRemaining(slideData.durationMinutes * 60);
      setIsRunning(true);
    }
  }, [slideData]);

  useEffect(() => {
    if (!isRunning || timeRemaining <= 0) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timeRemaining]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getNextSlideTitle = () => {
    // This would need to be passed from parent or fetched from registry
    return 'Next slide...';
  };

  if (!slideData) {
    return (
      <div className="min-h-screen bg-slate-50 p-6">
        <p className="text-slate-500">Waiting for slide data...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">
              Slide {slideNumber} of 25
            </p>
            <h1 className="text-lg font-semibold text-slate-900 mt-0.5">
              {slideData.title}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className={`text-2xl font-mono font-bold ${
              timeRemaining < 60 ? 'text-red-600' : 'text-slate-900'
            }`}>
              {formatTime(timeRemaining)}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className="px-3 py-1.5 text-sm font-medium bg-slate-100 hover:bg-slate-200 rounded transition-colors"
              >
                {isRunning ? 'Pause' : 'Start'}
              </button>
              <button
                onClick={() => {
                  setTimeRemaining(slideData.durationMinutes * 60);
                  setIsRunning(false);
                }}
                className="px-3 py-1.5 text-sm font-medium bg-slate-100 hover:bg-slate-200 rounded transition-colors"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notes Content */}
      <div className="p-6">
        <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
            Speaker Notes
          </h2>
          <ul className="space-y-3">
            {slideData.speakerNotes.map((note, index) => (
              <li
                key={index}
                className="flex gap-3 text-slate-700 leading-relaxed"
              >
                <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-slate-100 rounded-full text-sm font-medium text-slate-600">
                  {index + 1}
                </span>
                <span className="pt-0.5">{note}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Next Slide Preview */}
        <div className="mt-6 bg-slate-100 rounded-lg border border-slate-200 p-4">
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
            Up Next
          </p>
          <p className="text-slate-700 mt-1">{getNextSlideTitle()}</p>
        </div>
      </div>
    </div>
  );
}
