'use client';

import { useEffect, useState } from 'react';
import { SpeakerNotes } from '../slides/components/SpeakerNotes';
import { SlideData } from '../slides/types';

export default function NotesPage() {
  const [slideData, setSlideData] = useState<SlideData | null>(null);
  const [slideNumber, setSlideNumber] = useState(1);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'SLIDE_CHANGE') {
        setSlideNumber(event.data.slideNumber);
        setSlideData(event.data.slideData);
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Notify parent that notes window is ready
    if (window.opener) {
      window.opener.postMessage({ type: 'NOTES_READY' }, '*');
    }

    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <SpeakerNotes
      slideNumber={slideNumber}
      slideData={slideData}
    />
  );
}
