'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useKeyboardNav } from './hooks/useKeyboardNav';
import { useNotesWindow } from './hooks/useNotesWindow';
import { slides as week0Slides, totalSlides as week0Total, getSlideById as getWeek0Slide } from './slides/Week0Registry';
import { week1Slides, week1TotalSlides as week1Total, getWeek1SlideById } from './slides/Week1Registry';
import { week2Slides, week2TotalSlides as week2Total, getWeek2SlideById } from './slides/Week2Registry';
import { week3Slides, week3TotalSlides as week3Total, getWeek3SlideById } from './slides/Week3Registry';
import { week4Slides, week4TotalSlides as week4Total, getWeek4SlideById } from './slides/Week4Registry';
import { week5Slides, week5TotalSlides as week5Total, getWeek5SlideById } from './slides/Week5Registry';
import { week6Slides, week6TotalSlides as week6Total, getWeek6SlideById } from './slides/Week6Registry';
import { week7Slides, week7TotalSlides as week7Total, getWeek7SlideById } from './slides/Week7Registry';
import { week8Slides, week8TotalSlides as week8Total, getWeek8SlideById } from './slides/Week8Registry';
import { week9Slides, week9TotalSlides as week9Total, getWeek9SlideById } from './slides/Week9Registry';
import { week10Slides, week10TotalSlides as week10Total, getWeek10SlideById } from './slides/Week10Registry';
import { week11Slides, week11TotalSlides as week11Total, getWeek11SlideById } from './slides/Week11Registry';
import { week12Slides, week12TotalSlides as week12Total, getWeek12SlideById } from './slides/Week12Registry';
import { week13Slides, week13TotalSlides as week13Total, getWeek13SlideById } from './slides/Week13Registry';
import { SlideData } from './slides/types';
import { BaseSlide } from './slides/components/BaseSlide';
import { CodeBlock } from './slides/components/CodeBlock';
import { MermaidDiagram } from './slides/components/MermaidDiagram';
import { Presentation, BookOpen, FileText, ChevronLeft, ChevronRight, Download, Calendar, ChevronDown } from 'lucide-react';
import { exportToPDF } from '../lib/export-pdf';

// Week configuration
const WEEKS = [
  { id: 0, name: 'Week 0', title: 'Computational Thinking', slides: week0Slides, total: week0Total, getSlide: getWeek0Slide },
  { id: 1, name: 'Week 1', title: 'Python Foundations', slides: week1Slides, total: week1Total, getSlide: getWeek1SlideById },
  { id: 2, name: 'Week 2', title: 'Control Flow', slides: week2Slides, total: week2Total, getSlide: getWeek2SlideById },
  { id: 3, name: 'Week 3', title: 'Loops & Repetition', slides: week3Slides, total: week3Total, getSlide: getWeek3SlideById },
  { id: 4, name: 'Week 4', title: 'Geometry Processing', slides: week4Slides, total: week4Total, getSlide: getWeek4SlideById },
  { id: 5, name: 'Week 5', title: 'Functions & Utilities', slides: week5Slides, total: week5Total, getSlide: getWeek5SlideById },
  { id: 6, name: 'Week 6', title: 'Structured Data & Dicts', slides: week6Slides, total: week6Total, getSlide: getWeek6SlideById },
  { id: 7, name: 'Week 7', title: 'Lists, Tuples & Geometry', slides: week7Slides, total: week7Total, getSlide: getWeek7SlideById },
  { id: 8, name: 'Week 8', title: 'Dictionaries & BIM Data', slides: week8Slides, total: week8Total, getSlide: getWeek8SlideById },
  { id: 9, name: 'Week 9', title: 'Functions & Modular Processing', slides: week9Slides, total: week9Total, getSlide: getWeek9SlideById },
  { id: 10, name: 'Week 10', title: 'File I/O & JSON', slides: week10Slides, total: week10Total, getSlide: getWeek10SlideById },
  { id: 11, name: 'Week 11', title: 'Error Handling & Validation', slides: week11Slides, total: week11Total, getSlide: getWeek11SlideById },
  { id: 12, name: 'Week 12', title: 'OOP for BIM', slides: week12Slides, total: week12Total, getSlide: getWeek12SlideById },
  { id: 13, name: 'Week 13', title: 'APIs & External Services', slides: week13Slides, total: week13Total, getSlide: getWeek13SlideById },
];

// Slide type icon mapping
const slideTypeIcons: Record<string, React.ReactNode> = {
  opening: <Presentation className="w-4 h-4" />,
  agenda: <BookOpen className="w-4 h-4" />,
  concept: <BookOpen className="w-4 h-4" />,
  diagram: <Presentation className="w-4 h-4" />,
  demo: <FileText className="w-4 h-4" />,
  discussion: <BookOpen className="w-4 h-4" />,
  lab: <FileText className="w-4 h-4" />,
  exercise: <FileText className="w-4 h-4" />,
  recap: <BookOpen className="w-4 h-4" />,
  preview: <BookOpen className="w-4 h-4" />,
};

export default function Home() {
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [direction, setDirection] = useState(0);
  const [isExporting, setIsExporting] = useState(false);
  const [showWeekSelector, setShowWeekSelector] = useState(false);
  const weekSelectorRef = useRef<HTMLDivElement>(null);

  const currentWeek = WEEKS[currentWeekIndex];
  const slideData = currentWeek.getSlide(currentSlide);
  const totalSlides = currentWeek.total;

  const { isOpen: notesOpen, openNotesWindow, closeNotesWindow } = useNotesWindow({
    currentSlide,
    slideData,
  });

  const switchWeek = useCallback((weekIndex: number) => {
    setCurrentWeekIndex(weekIndex);
    setCurrentSlide(1);
    setDirection(0);
    setShowWeekSelector(false);
  }, []);

  const goToSlide = useCallback((slideId: number, dir: number) => {
    if (slideId >= 1 && slideId <= totalSlides) {
      setDirection(dir);
      setCurrentSlide(slideId);
    }
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1, 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1, -1);
  }, [currentSlide, goToSlide]);

  const firstSlide = useCallback(() => {
    goToSlide(1, -1);
  }, [goToSlide]);

  const lastSlide = useCallback(() => {
    goToSlide(totalSlides, 1);
  }, [goToSlide, totalSlides]);

  useKeyboardNav({
    onNext: nextSlide,
    onPrevious: prevSlide,
    onFirst: firstSlide,
    onLast: lastSlide,
  });

  // Close week selector when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (weekSelectorRef.current && !weekSelectorRef.current.contains(event.target as Node)) {
        setShowWeekSelector(false);
      }
    };

    if (showWeekSelector) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showWeekSelector]);

  const handleExportPDF = async () => {
    setIsExporting(true);
    try {
      await exportToPDF(currentWeek.slides);
    } finally {
      setIsExporting(false);
    }
  };

  const renderSlideContent = (slide: SlideData) => {
    const { content, type, title } = slide;

    switch (type) {
      case 'opening':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-medium mb-6">
                {currentWeek.name} of 8
              </span>
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6 max-w-4xl leading-tight">
              {title}
            </h1>
            {content.subtitle && (
              <p className="text-2xl text-slate-600 mb-12">{content.subtitle}</p>
            )}
            <div className="grid grid-cols-2 gap-4 text-left max-w-2xl">
              {content.bullets?.map((bullet, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-slate-200 rounded-full text-sm font-semibold text-slate-700">
                    {i + 1}
                  </span>
                  <span className="text-slate-700">{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'agenda':
        return (
          <div className="flex flex-col h-full">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">{title}</h2>
            <div className="flex-1 flex items-center">
              <div className="w-full max-w-4xl">
                {content.bullets?.map((bullet, i) => {
                  const [topic, duration] = bullet.split('(');
                  return (
                    <div
                      key={i}
                      className="flex items-center justify-between py-4 border-b border-slate-200"
                    >
                      <div className="flex items-center gap-4">
                        <span className="w-8 h-8 flex items-center justify-center bg-slate-100 rounded-full text-sm font-semibold text-slate-600">
                          {i + 1}
                        </span>
                        <span className="text-lg text-slate-800">{topic.trim()}</span>
                      </div>
                      <span className="text-sm text-slate-500 font-mono">
                        {duration?.replace(')', '')}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );

      case 'concept':
        return (
          <div className="flex flex-col h-full">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">{title}</h2>
            <div className="flex-1 flex items-center">
              <ul className="space-y-6 max-w-4xl">
                {content.bullets?.map((bullet, i) => (
                  <li key={i} className="flex gap-4 text-xl text-slate-700 leading-relaxed">
                    <span className="flex-shrink-0 w-2 h-2 mt-3 bg-slate-400 rounded-full" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'diagram':
        return (
          <div className="flex flex-col h-full">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">{title}</h2>
            <div className="flex-1 flex flex-col items-center justify-center">
              {content.diagram && (
                <MermaidDiagram
                  chart={content.diagram}
                  caption={content.diagramCaption}
                />
              )}
            </div>
          </div>
        );

      case 'discussion':
        return (
          <div className="flex flex-col h-full">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">{title}</h2>
            <div className="flex-1 flex items-center justify-center">
              <div className="bg-slate-50 border-l-4 border-slate-400 p-8 rounded-r-lg max-w-3xl">
                <p className="text-2xl text-slate-700 leading-relaxed">
                  {content.discussionPrompt}
                </p>
              </div>
            </div>
          </div>
        );

      case 'demo':
        return (
          <div className="flex flex-col h-full">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{title}</h2>
            <div className="flex-1 flex flex-col justify-center">
              {content.code && (
                <CodeBlock
                  code={content.code}
                  language={content.codeLanguage}
                  showLineNumbers
                />
              )}
            </div>
          </div>
        );

      case 'lab':
        return (
          <div className="flex flex-col h-full">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{title}</h2>
            <div className="flex-1 space-y-4">
              {content.labSteps?.map((step) => (
                <div
                  key={step.step}
                  className="flex gap-4 p-4 bg-slate-50 rounded-lg"
                >
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-slate-200 rounded-full text-sm font-bold text-slate-700">
                    {step.step}
                  </span>
                  <div>
                    <p className="text-slate-800 font-medium">{step.instruction}</p>
                    {step.expectedOutput && (
                      <p className="text-sm text-slate-500 mt-1 font-mono">
                        Expected: {step.expectedOutput}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'exercise':
        const exercise = content.exercise;
        return (
          <div className="flex flex-col h-full">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{title}</h2>
            {exercise && (
              <div className="flex-1 space-y-6">
                <div className="p-6 bg-slate-50 rounded-lg">
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-2">
                    Problem
                  </h3>
                  <p className="text-lg text-slate-800">{exercise.problem}</p>
                </div>
                {exercise.input && (
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                      Sample Input
                    </h3>
                    <code className="text-blue-800 font-mono">{exercise.input}</code>
                  </div>
                )}
                {exercise.expectedOutput && (
                  <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                    <h3 className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">
                      Expected Output
                    </h3>
                    <pre className="text-green-800 font-mono whitespace-pre-wrap">
                      {exercise.expectedOutput}
                    </pre>
                  </div>
                )}
                <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
                  <h3 className="text-sm font-semibold text-amber-600 uppercase tracking-wide mb-2">
                    Hint
                  </h3>
                  <p className="text-amber-800">{exercise.hint}</p>
                </div>
              </div>
            )}
          </div>
        );

      case 'recap':
        return (
          <div className="flex flex-col h-full">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">{title}</h2>
            <div className="flex-1 flex items-center">
              <div className="grid grid-cols-1 gap-4 max-w-4xl">
                {content.recapItems?.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg"
                  >
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-slate-200 rounded-full text-sm font-bold text-slate-700">
                      {i + 1}
                    </span>
                    <span className="text-lg text-slate-700 pt-0.5">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'preview':
        return (
          <div className="flex flex-col h-full">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">{title}</h2>
            <div className="flex-1 flex items-center">
              <div className="grid grid-cols-1 gap-4 max-w-4xl">
                {content.previewTopics?.map((topic, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg"
                  >
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-slate-200 rounded-full text-sm font-bold text-slate-700">
                      {i + 1}
                    </span>
                    <span className="text-lg text-slate-700">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-screen bg-white overflow-hidden flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-3 border-b border-slate-200 bg-white">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">Py</span>
          </div>
          <span className="font-semibold text-slate-700">Python for BIM</span>
          
          {/* Week Selector */}
          <div className="relative" ref={weekSelectorRef}>
            <button
              onClick={() => setShowWeekSelector(!showWeekSelector)}
              className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>{currentWeek.name}: {currentWeek.title}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showWeekSelector ? 'rotate-180' : ''}`} />
            </button>
            
            {showWeekSelector && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-slate-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
                <div className="p-2">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide px-3 py-2">
                    Select Week
                  </p>
                  {WEEKS.map((week, index) => (
                    <button
                      key={week.id}
                      onClick={() => switchWeek(index)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        currentWeekIndex === index
                          ? 'bg-blue-50 text-blue-700'
                          : 'hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <span className={`w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold ${
                        currentWeekIndex === index
                          ? 'bg-blue-200 text-blue-800'
                          : 'bg-slate-200 text-slate-600'
                      }`}>
                        {week.id}
                      </span>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{week.name}</p>
                        <p className="text-xs text-slate-500">{week.title}</p>
                      </div>
                      {currentWeekIndex === index && (
                        <span className="w-2 h-2 bg-blue-500 rounded-full" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={notesOpen ? closeNotesWindow : openNotesWindow}
            className={`flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded transition-colors ${
              notesOpen
                ? 'bg-blue-100 text-blue-700'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            {notesOpen ? 'Notes Open' : 'Speaker Notes'}
          </button>
          <button
            onClick={handleExportPDF}
            disabled={isExporting}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 rounded transition-colors disabled:opacity-50"
          >
            <Download className="w-4 h-4" />
            {isExporting ? 'Exporting...' : 'Export PDF'}
          </button>
        </div>
      </header>

      {/* Main Slide Area */}
      <main className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={`${currentWeekIndex}-${currentSlide}`}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            variants={{
              enter: (dir: number) => ({
                x: dir > 0 ? 1000 : -1000,
                opacity: 0,
                scale: 0.95,
              }),
              center: {
                x: 0,
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1],
                },
              },
              exit: (dir: number) => ({
                x: dir < 0 ? 1000 : -1000,
                opacity: 0,
                scale: 0.95,
                transition: {
                  duration: 0.4,
                },
              }),
            }}
            className="absolute inset-0 p-12"
          >
            {slideData && (
              <BaseSlide direction={direction}>
                {renderSlideContent(slideData)}
              </BaseSlide>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Navigation */}
      <footer className="flex items-center justify-between px-6 py-3 border-t border-slate-200 bg-white">
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-500">
            Slide {currentSlide} of {totalSlides}
          </span>
          {slideData && (
            <span className="flex items-center gap-2 text-sm text-slate-400">
              {slideTypeIcons[slideData.type]}
              {slideData.type.charAt(0).toUpperCase() + slideData.type.slice(1)}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 1}
            className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-1 px-3 py-1 bg-slate-100 rounded-lg max-w-[200px] overflow-x-auto">
            {currentWeek.slides.map((slide) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(slide.id, slide.id > currentSlide ? 1 : -1)}
                className={`w-2 h-2 rounded-full transition-colors flex-shrink-0 ${
                  slide.id === currentSlide
                    ? 'bg-slate-900'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides}
            className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        {slideData && (
          <span className="text-sm text-slate-400">
            {slideData.durationMinutes} min
          </span>
        )}
      </footer>
    </div>
  );
}
