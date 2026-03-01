# Python Foundations for BIM - Week 1 Lecture Deck

A complete 3-hour interactive lecture slide deck for teaching Python fundamentals to built environment professionals (BIM, construction, engineering, architecture).

## Features

- **25 Interactive Slides** covering:
  - Opening & Agenda
  - Why Python matters in BIM/Construction
  - Running Python code
  - Variables and data types
  - Arithmetic operations
  - Coordinates and geometry basics
  - Guided lab exercises
  - 3 Practice exercises
  - Recap & Week 2 preview

- **Professional Presentation Features:**
  - Keyboard navigation (Arrow keys, Home, End)
  - Smooth slide transitions with Framer Motion
  - Syntax-highlighted Python code blocks
  - Mermaid diagrams for visual concepts
  - Speaker notes in separate popup window
  - PDF export functionality
  - Light mode theme optimized for projection

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd bim-python-lecture/my-app

# Install dependencies (already done)
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the presentation.

### Building for Production

```bash
npm run build
```

The static export will be created in the `dist/` folder.

## Usage

### Navigation
- **Right Arrow / Down Arrow / Space**: Next slide
- **Left Arrow / Up Arrow**: Previous slide
- **Home**: First slide
- **End**: Last slide

### Speaker Notes
Click the "Speaker Notes" button in the header to open a popup window with:
- Current slide number and title
- Countdown timer per slide
- Speaker notes for teaching cues
- Next slide preview

### PDF Export
Click "Export PDF" to generate a PDF of all slides.

## Slide Structure

| Slide # | Type | Title | Duration |
|---------|------|-------|----------|
| 1 | Opening | Week 1: Python Foundations | 5 min |
| 2 | Agenda | Today's Journey | 5 min |
| 3 | Concept | Why This Matters in BIM & Construction | 10 min |
| 4 | Diagram | Python in the AEC Ecosystem | 10 min |
| 5 | Discussion | Your Repetitive Tasks | 10 min |
| 6 | Concept | Running Python Code | 12 min |
| 7 | Demo | Hello, Construction World | 13 min |
| 8 | Concept | Variables: Storing Building Data | 20 min |
| 9 | Demo | Variables in Action | 20 min |
| 10 | Diagram | Python Data Types for Building Data | 5 min |
| 11 | Demo | Room Dimensions with Variables | 15 min |
| 12 | Concept | Arithmetic Operations | 15 min |
| 13 | Demo | Calculate Room Area | 10 min |
| 14 | Demo | Calculate Concrete Volume | 10 min |
| 15 | Concept | Coordinates: Points in Space | 20 min |
| 16 | Diagram | Point Structure and Indexing | 10 min |
| 17 | Demo | Distance Between Points | 10 min |
| 18 | Lab | Room Calculator - Step 1 | 10 min |
| 19 | Lab | Calculate Dimensions | 10 min |
| 20 | Lab | Compute Final Area | 10 min |
| 21 | Exercise | Project Information | 10 min |
| 22 | Exercise | Slab Volume Calculator | 10 min |
| 23 | Exercise | Grid Point Distances | 10 min |
| 24 | Recap | What We Learned Today | 5 min |
| 25 | Preview | Next Week: Control Flow | 5 min |

**Total: ~3 hours**

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + anime.js
- **Syntax Highlighting**: react-syntax-highlighter
- **Diagrams**: Mermaid
- **PDF Export**: html2canvas + jsPDF
- **Icons**: Lucide React

## File Structure

```
my-app/
├── app/
│   ├── hooks/
│   │   ├── useKeyboardNav.ts    # Arrow key navigation
│   │   ├── useNotesWindow.ts    # Speaker notes popup
│   │   └── useSlideTimer.ts     # Per-slide countdown timer
│   ├── notes/
│   │   └── page.tsx             # Speaker notes page
│   ├── slides/
│   │   ├── components/
│   │   │   ├── BaseSlide.tsx    # Slide wrapper with animations
│   │   │   ├── CodeBlock.tsx    # Syntax highlighted code
│   │   │   ├── MermaidDiagram.tsx # Diagram renderer
│   │   │   └── SpeakerNotes.tsx # Notes panel component
│   │   ├── SlideRegistry.tsx    # All 25 slide definitions
│   │   └── types.ts             # TypeScript definitions
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Main presentation
├── lib/
│   ├── export-pdf.ts            # PDF generation utility
│   └── utils.ts                 # Helper functions
└── next.config.ts               # Next.js configuration
```

## Customization

### Adding/Modifying Slides

Edit `app/slides/SlideRegistry.tsx` to modify slide content. Each slide follows this structure:

```typescript
{
  id: 1,
  type: 'concept', // or 'demo', 'diagram', 'exercise', etc.
  title: 'Slide Title',
  durationMinutes: 10,
  content: {
    bullets: ['Point 1', 'Point 2'],
    code: 'print("Hello")',
    // ... other content properties
  },
  speakerNotes: [
    'Teaching cue 1',
    'Teaching cue 2'
  ]
}
```

### Changing Theme

Modify colors in `app/globals.css` and Tailwind classes in components.

## License

MIT

## Acknowledgments

Built for built environment professionals learning to code. Examples use real BIM/construction scenarios including room calculations, concrete volumes, and coordinate geometry.
