import { SlideData } from './types';

export const slides: SlideData[] = [
  // Slide 1: Opening
  {
    id: 1,
    type: 'opening',
    title: 'Computational Thinking for the Built Environment',
    durationMinutes: 5,
    content: {
      subtitle: 'Week 0: Problem-Solving Foundations Before Coding',
      bullets: [
        'Understand computational thinking as a problem-solving framework',
        'Break engineering problems into logical steps',
        'Recognize patterns and repetition in workflows',
        'Translate real-world geometry problems into structured logic',
        'Prepare mentally for coding in Python',
      ],
    },
    speakerNotes: [
      'Welcome to Week 0 - the foundation before we write any code.',
      'Computational thinking is not about computers - it is about structured problem-solving.',
      'As engineers and architects, you already think computationally. We are making it explicit.',
      'Today: pen and paper, thinking, discussion. No software required.',
      'By the end, you will see problems as step-by-step processes that can be automated.',
      'Ask: "What is the most complex calculation you do regularly?"',
    ],
  },

  // Slide 2: Agenda
  {
    id: 2,
    type: 'agenda',
    title: "Today's Journey",
    durationMinutes: 5,
    content: {
      bullets: [
        'What is Computational Thinking? (30 min)',
        'Decomposition – Breaking Problems Down (35 min)',
        'Pattern Recognition in Engineering Workflows (30 min)',
        'Abstraction – Simplifying Geometry (35 min)',
        'Algorithmic Thinking – Step-by-Step Logic (35 min)',
        'Mini Capstone – From Problem to Algorithm (25 min)',
      ],
    },
    speakerNotes: [
      'Today we build mental models before touching code.',
      'Each module builds on the previous one.',
      'Lots of discussion and hands-on activities - not lectures.',
      'The capstone ties all four thinking skills together.',
      'Breaks at 60 and 120 minutes.',
    ],
  },

  // Slide 3: What is Computational Thinking
  {
    id: 3,
    type: 'concept',
    title: 'Why Engineers Are Already Computational Thinkers',
    durationMinutes: 15,
    content: {
      bullets: [
        'We follow design procedures - sequential steps with decision points',
        'We apply codes and constraints - if-then logic for compliance',
        'We break complex systems into components - structural bays, MEP zones',
        'We recognize patterns - typical details, repeating grid layouts',
        'Computational thinking makes these instincts explicit and automatable',
      ],
    },
    speakerNotes: [
      'Reframe: You are not learning a new way to think.',
      'You are naming and systematizing what you already do.',
      'Example: Structural design - first loads, then analysis, then member sizing, then checks.',
      'Example: Code compliance - if corridor width < 1.2m then fail.',
      'The leap: from doing it manually to describing it precisely enough for a computer.',
      'Ask for examples of design procedures they follow.',
    ],
  },

  // Slide 4: The Four Pillars
  {
    id: 4,
    type: 'diagram',
    title: 'The Four Pillars of Computational Thinking',
    durationMinutes: 15,
    content: {
      diagram: `flowchart TD
    A[Computational Thinking] --> B[Decomposition]
    A --> C[Pattern Recognition]
    A --> D[Abstraction]
    A --> E[Algorithmic Thinking]
    B --> B1[Break into parts]
    C --> C1[Find similarities]
    D --> D1[Remove details]
    E --> E1[Step-by-step instructions]`,
      diagramCaption: 'Four interconnected skills that enable automated problem-solving',
    },
    speakerNotes: [
      'Walk through each pillar briefly - we will spend time on each.',
      'Decomposition: Breaking big problems into manageable pieces.',
      'Pattern recognition: Spotting repetition and similarities.',
      'Abstraction: Focusing on what matters, ignoring what does not.',
      'Algorithmic thinking: Creating precise step-by-step instructions.',
      'These work together - you will use all four in the capstone.',
      'Connection to AEC: Design phases are decomposition. Standards are patterns.',
    ],
  },

  // Slide 5: Discussion
  {
    id: 5,
    type: 'discussion',
    title: 'Your Current Problem-Solving Process',
    durationMinutes: 10,
    content: {
      discussionPrompt: 'Think about how you calculate slab volume manually. List the exact steps you take, in order, from receiving dimensions to getting the final number.',
    },
    speakerNotes: [
      'Give students 3 minutes to write down their steps individually.',
      'This reveals their current computational thinking - even if they do not call it that.',
      'Typical answer: Get length, get width, get thickness, multiply all three, add waste factor.',
      'Write responses on board. Highlight the sequence and inputs/outputs.',
      'Transition: "This is an algorithm. You just wrote it. Now we will make it precise."',
      'Common variation: Some include unit conversion, some check against limits.',
    ],
  },

  // Slide 6: Decomposition Concept
  {
    id: 6,
    type: 'concept',
    title: 'Decomposition: Breaking Problems Down',
    durationMinutes: 15,
    content: {
      bullets: [
        'Large problems become manageable when divided into sub-problems',
        'Each sub-problem has clear inputs and outputs',
        'Sub-problems can be solved independently, then combined',
        'In engineering: foundation, structure, envelope, MEP as separate systems',
        'Test each component separately before integration',
      ],
    },
    speakerNotes: [
      'Decomposition is second nature to engineers - we design by systems.',
      'Computational approach: Define the interface between components clearly.',
      'Example: Energy model - envelope inputs → loads calculation → equipment sizing.',
      'Key insight: If a problem feels too complex, you have not decomposed it enough.',
      'Rule of thumb: Each sub-problem should be explainable in one sentence.',
      'Common mistake: Decomposing by team rather than by logic flow.',
      'Ask: "How do you decompose a building design problem?"',
    ],
  },

  // Slide 7: Decomposition Diagram
  {
    id: 7,
    type: 'diagram',
    title: 'Decomposing Slab Volume Calculation',
    durationMinutes: 10,
    content: {
      diagram: `flowchart TD
    A[Calculate Slab Volume] --> B[Get Dimensions]
    A --> C[Compute Base Volume]
    A --> D[Apply Waste Factor]
    B --> B1[Length from drawing]
    B --> B2[Width from drawing]
    B --> B3[Thickness from spec]
    C --> C1[L × W × T]
    D --> D1[Base × 1.10]`,
      diagramCaption: 'Breaking one calculation into logical sub-tasks',
    },
    speakerNotes: [
      'Walk through the flow: three main phases, each with sub-tasks.',
      'Each arrow represents data flowing from one step to the next.',
      'Get Dimensions phase: three independent data gathering tasks.',
      'Compute Base Volume: one calculation using those inputs.',
      'Apply Waste Factor: adjustment step with output as final result.',
      'Emphasize: This flowchart is the decomposition visualized.',
      'Could any step be automated independently? Yes - that is the power of decomposition.',
    ],
  },

  // Slide 8: Guided Activity - Decomposition
  {
    id: 8,
    type: 'lab',
    title: 'Guided Activity: Decompose Wall Area Calculation',
    durationMinutes: 15,
    content: {
      labSteps: [
        {
          step: 1,
          instruction: 'Identify the main problem: Calculate total wall area for painting',
          expectedOutput: 'Clear problem statement',
        },
        {
          step: 2,
          instruction: 'Break into sub-problems: Get wall length, Get wall height, Calculate area per wall, Sum all walls',
          expectedOutput: '4-6 sub-problems identified',
        },
        {
          step: 3,
          instruction: 'For each sub-problem, define what goes in and what comes out',
          expectedOutput: 'Inputs and outputs specified',
        },
      ],
    },
    speakerNotes: [
      'Walk through this as a class exercise.',
      'Start with the problem statement written on board.',
      'Ask students to suggest sub-problems. Write them down.',
      'Guide toward: dimension extraction, area calculation, summation.',
      'Prompt: What about openings? Add sub-problem for door/window subtraction.',
      'Key learning: The same decomposition approach applies to any calculation.',
      'Validate: Each sub-problem is solvable independently.',
    ],
  },

  // Slide 9: Practice - Decomposition
  {
    id: 9,
    type: 'exercise',
    title: 'Exercise: Decompose Column Spacing Check',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Break down the steps required to check if any column spacing in a grid exceeds 6 meters. List the sub-problems and their inputs/outputs.',
        input: 'Column grid with coordinates for each column position',
        expectedOutput: 'List of steps: Get coordinates, Calculate distances between adjacent columns, Compare each to 6m limit, Report violations',
        hint: 'Think about how you would do this with a ruler on a drawing. What are the steps?',
      },
    },
    speakerNotes: [
      'Individual exercise - 5 minutes to work.',
      'This requires understanding the problem before decomposing.',
      'Key insight: Need to calculate multiple distances (pattern recognition preview).',
      'Expected decomposition: input data → distance calculations → comparison → output report.',
      'Walk through solution after 5 minutes.',
      'Validate different approaches - there are multiple valid decompositions.',
      'Common issue: Forgetting to specify what "exceeds 6m" means (strictly greater than? equal to?).',
    ],
  },

  // Slide 10: Pattern Recognition
  {
    id: 10,
    type: 'concept',
    title: 'Pattern Recognition in Engineering Workflows',
    durationMinutes: 15,
    content: {
      bullets: [
        'Repetition signals automation opportunity',
        'Similar problems can use similar solutions',
        'In BIM: checking room areas, validating clearances, exporting data',
        'Patterns exist across projects: code checks, typical details',
        'Once recognized, patterns become reusable logic',
      ],
    },
    speakerNotes: [
      'Pattern recognition is about seeing the generic in the specific.',
      'Example: Checking room 101 area uses same logic as room 102, 103...',
      'Computational approach: Write the check once, apply it many times.',
      'Ask: "What checks do you repeat across every project?"',
      'Common answers: egress widths, door swings, ceiling heights.',
      'Key insight: If you are doing it repeatedly, a computer should do it.',
      'This is where computational thinking saves time.',
    ],
  },

  // Slide 11: Where Do You Repeat Work
  {
    id: 11,
    type: 'concept',
    title: 'Where Do You Repeat Work?',
    durationMinutes: 15,
    content: {
      bullets: [
        'Checking room areas against program requirements',
        'Validating door widths against occupancy counts',
        'Measuring distances between columns for structural checks',
        'Exporting similar reports weekly for coordination meetings',
        'Renumbering rooms when program changes',
      ],
    },
    speakerNotes: [
      'These are all patterns - the same operation on different data.',
      'Each item here is an automation opportunity.',
      'Validating door widths: same check, different doors.',
      'Exporting reports: same format, different data.',
      'Transition: "If you recognize the pattern, you can write it once and apply forever."',
      'Build excitement: By Week 4, you will automate these patterns.',
      'Ask students to add their own repetitive tasks to the list.',
    ],
  },

  // Slide 12: Pattern Recognition Exercise
  {
    id: 12,
    type: 'exercise',
    title: 'Exercise: Identify Patterns',
    durationMinutes: 15,
    content: {
      exercise: {
        problem: 'Identify 3 repetitive tasks in your project workflow. For each, describe what stays the same (the pattern) and what changes (the data).',
        input: 'Your current workflow',
        expectedOutput: '3 tasks with pattern identified (e.g., "checking room areas" - same calculation, different rooms)',
        hint: 'Think about tasks where you think "I just did this yesterday" or "I will have to do this 50 times."',
      },
    },
    speakerNotes: [
      'Individual reflection exercise - 8 minutes.',
      'This personalizes the concept - their own pain points.',
      'Encourage specificity: not "checking drawings" but "checking door swings in plans."',
      'The output pattern vs data distinction is crucial.',
      'Example pattern: Check [dimension] against [limit]. Data: specific rooms.',
      'Have 2-3 students share their most painful repetitive task.',
      'Validate: Yes, that is a pattern. Yes, it can be automated.',
    ],
  },

  // Slide 13: Abstraction Concept
  {
    id: 13,
    type: 'concept',
    title: 'Abstraction: Simplifying Geometry',
    durationMinutes: 15,
    content: {
      bullets: [
        'Represent complex reality with simple models',
        'A point becomes (x, y) - just two numbers',
        'A room becomes two corner points - enough for area calculation',
        'Remove details that do not affect the calculation',
        'Abstraction is about choosing the right level of detail',
      ],
    },
    speakerNotes: [
      'Abstraction is the art of simplification without losing meaning.',
      'Critical skill: Knowing what to keep and what to discard.',
      'Example: For area calculation, room wall thickness does not matter.',
      'Example: For structural load, furniture layout does not matter (usually).',
      'The coordinate pair (x, y) is an abstraction of a physical location.',
      'Ask: "What details would you ignore when calculating slab volume?"',
      'Common answer: Surface finish, color, exact reinforcement layout.',
    ],
  },

  // Slide 14: Abstraction Diagram
  {
    id: 14,
    type: 'diagram',
    title: 'Abstracting a Room to Coordinates',
    durationMinutes: 10,
    content: {
      diagram: `flowchart LR
    A[Physical Room] --> B[Floor Plan View]
    B --> C[Two Corner Points]
    C --> D[(0, 0) and (6, 4)]
    D --> E[Width = 6]
    D --> F[Height = 4]
    E --> G[Area = 24]
    F --> G
    
    style A fill:#fee2e2
    style G fill:#dcfce7`,
      diagramCaption: 'Progressive abstraction from physical reality to calculation',
    },
    speakerNotes: [
      'Walk through the abstraction layers from left to right.',
      'Physical room has walls, doors, finishes, furniture.',
      'Floor plan view removes height information.',
      'Two corner points remove all interior details.',
      'Coordinates enable mathematical operations.',
      'Key question: Is this level of abstraction sufficient for our purpose?',
      'For area calculation: Yes. For acoustic analysis: No, need more detail.',
    ],
  },

  // Slide 15: Guided Activity - Abstraction
  {
    id: 15,
    type: 'lab',
    title: 'Guided Activity: Abstract a Site Boundary',
    durationMinutes: 15,
    content: {
      labSteps: [
        {
          step: 1,
          instruction: 'Problem: Calculate site area from a survey drawing',
          expectedOutput: 'Clear objective',
        },
        {
          step: 2,
          instruction: 'Identify necessary information: boundary corner coordinates',
          expectedOutput: 'Key data identified',
        },
        {
          step: 3,
          instruction: 'Identify unnecessary details: vegetation, existing structures, elevations',
          expectedOutput: 'Details to ignore listed',
        },
        {
          step: 4,
          instruction: 'Define the abstraction: list of (x,y) coordinate pairs',
          expectedOutput: 'Clear data structure defined',
        },
      ],
    },
    speakerNotes: [
      'Class discussion exercise. Write on board collaboratively.',
      'Start with: What information is on a typical survey?',
      'Guide toward: We only need boundary coordinates for area calculation.',
      'Discuss: What if we needed topography? Different abstraction.',
      'Key insight: Abstraction depends entirely on the question being asked.',
      'Validate: (x,y) coordinate list is sufficient for 2D area calculation.',
      'Preview: Next week we will represent this as a Python data structure.',
    ],
  },

  // Slide 16: Abstraction Exercise
  {
    id: 16,
    type: 'exercise',
    title: 'Exercise: What to Abstract Away',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'When calculating slab volume, list 5 pieces of information you would abstract away (ignore). Explain why each is unnecessary for this specific calculation.',
        input: 'Full architectural/structural model of a building',
        expectedOutput: '5 items: reinforcement details, surface finish, color, exact edge details, construction joints',
        hint: 'Focus only on what affects the volume of concrete needed.',
      },
    },
    speakerNotes: [
      'Individual exercise - 5 minutes.',
      'This tests understanding of purpose-driven abstraction.',
      'Expected answers include non-structural elements, detailed geometry.',
      'Important distinction: Some details matter for other calculations.',
      'Reinforcement matters for structural capacity, not for concrete volume.',
      'Walk through answers and ask "Would this ever matter for volume?"',
      'Edge case discussion: Complex profiles might need more detailed abstraction.',
    ],
  },

  // Slide 17: Algorithmic Thinking
  {
    id: 17,
    type: 'concept',
    title: 'Algorithmic Thinking: Precise Step-by-Step Logic',
    durationMinutes: 15,
    content: {
      bullets: [
        'Algorithm: A sequence of instructions to solve a problem',
        'Must be unambiguous - a computer cannot guess',
        'Must be complete - cover all cases including errors',
        'Must terminate - produce a result in finite time',
        'Pseudo-code bridges human thinking and computer code',
      ],
    },
    speakerNotes: [
      'Algorithmic thinking is the culmination of the other three skills.',
      'Algorithm is just a fancy word for "recipe" or "procedure."',
      'Precision matters: "Get dimensions" is vague. "Read length from property L" is precise.',
      'Computers are literal - they do exactly what you say, not what you mean.',
      'Pseudo-code uses human language with computer-like structure.',
      'Example coming next: distance calculation algorithm.',
      'Key concept: If you cannot write the algorithm, you cannot write the code.',
    ],
  },

  // Slide 18: Algorithm Example
  {
    id: 18,
    type: 'demo',
    title: 'Algorithm: Distance Between Two Points',
    durationMinutes: 10,
    content: {
      code: `ALGORITHM: Calculate Distance Between Points

INPUT: Point A with coordinates (x1, y1)
       Point B with coordinates (x2, y2)

STEP 1: Calculate difference in x coordinates
        dx = x2 - x1

STEP 2: Calculate difference in y coordinates  
        dy = y2 - y1

STEP 3: Square both differences
        dx_squared = dx × dx
        dy_squared = dy × dy

STEP 4: Sum the squared differences
        sum = dx_squared + dy_squared

STEP 5: Take the square root
        distance = square_root(sum)

OUTPUT: distance`,
      codeLanguage: 'text',
    },
    speakerNotes: [
      'Walk through each step of the algorithm.',
      'This is pseudo-code: structured but human-readable.',
      'Notice: Each step is simple. Complexity comes from combination.',
      'Input and output are clearly defined.',
      'This algorithm never guesses - every step is explicit.',
      'This algorithm terminates - 5 steps and done.',
      'Ask: "What if the points are the same?" Discuss edge cases.',
    ],
  },

  // Slide 19: Algorithm Components
  {
    id: 19,
    type: 'diagram',
    title: 'Anatomy of an Algorithm',
    durationMinutes: 10,
    content: {
      diagram: `flowchart TD
    A[INPUT] --> B[Step 1]
    B --> C[Step 2]
    C --> D[Step 3]
    D --> E[OUTPUT]
    
    F[Characteristics] --> G[Unambiguous]
    F --> H[Complete]
    F --> I[Finite]
    
    style A fill:#dbeafe
    style E fill:#dcfce7
    style F fill:#fef3c7`,
      diagramCaption: 'Every algorithm has defined inputs, processing steps, and outputs',
    },
    speakerNotes: [
      'Visual summary of algorithm structure.',
      'Top flow: Data enters, gets processed, result exits.',
      'Bottom: Three key characteristics to verify.',
      'Unambiguous: Each step has exactly one meaning.',
      'Complete: Handles normal cases and edge cases.',
      'Finite: Guaranteed to finish, not loop forever.',
      'This structure applies to every algorithm you will write.',
    ],
  },

  // Slide 20: Algorithm Exercise 1
  {
    id: 20,
    type: 'exercise',
    title: 'Exercise: Polygon Perimeter Algorithm',
    durationMinutes: 12,
    content: {
      exercise: {
        problem: 'Write an algorithm to calculate the perimeter of a polygon given its vertices as a list of (x, y) coordinate pairs. Include INPUT, STEPS, and OUTPUT sections.',
        input: 'List of points: [(0,0), (4,0), (4,3), (0,3)]',
        expectedOutput: 'Step-by-step algorithm that calculates each edge length and sums them',
        hint: 'Break it down: How do you calculate one edge? How do you repeat that for all edges? What about the closing edge?',
      },
    },
    speakerNotes: [
      'First full algorithm writing exercise.',
      'Requires applying distance calculation to multiple segments.',
      'Key challenge: Closing the polygon (last point back to first).',
      'Encourage decomposition: sub-problem for single edge calculation.',
      'Pattern recognition: Each edge uses same distance formula.',
      'Abstraction: Only coordinates matter, not visual appearance.',
      'Walk through solution after 7 minutes.',
    ],
  },

  // Slide 21: Algorithm Exercise 2
  {
    id: 21,
    type: 'exercise',
    title: 'Exercise: Point-in-Box Algorithm',
    durationMinutes: 12,
    content: {
      exercise: {
        problem: 'Write an algorithm to check if a point (x, y) lies inside a bounding box defined by bottom-left corner (x1, y1) and top-right corner (x2, y2).',
        input: 'Point: (5, 5), Box: (0, 0) to (10, 10)',
        expectedOutput: 'Algorithm with comparisons: if x >= x1 AND x <= x2 AND y >= y1 AND y <= y2 then inside',
        hint: 'Think about what "inside" means in terms of comparisons. What are the four conditions?',
      },
    },
    speakerNotes: [
      'Introduces decision-making in algorithms (if-then logic).',
      'Critical for code: Boolean logic (AND, OR, NOT).',
      'Walk through geometric intuition first.',
      'Visual: Point inside rectangle on coordinate plane.',
      'Four conditions: x between left and right, y between bottom and top.',
      'Edge case discussion: What if point is exactly on boundary?',
      'This algorithm is used in clash detection, zoning checks, etc.',
    ],
  },

  // Slide 22: Capstone Introduction
  {
    id: 22,
    type: 'concept',
    title: 'Mini Capstone: Room Compliance Logic',
    durationMinutes: 10,
    content: {
      bullets: [
        'Apply all four computational thinking skills together',
        'Problem: Check if room meets minimum area requirement',
        'Use decomposition, pattern recognition, abstraction, and algorithmic thinking',
        'Deliverable: Complete written algorithm with all sections',
        'This is the template for how you will approach every coding problem',
      ],
    },
    speakerNotes: [
      'Capstone brings together all four pillars.',
      'Real-world scenario: Code compliance checking.',
      'Many jurisdictions have minimum room area requirements.',
      'This is exactly the kind of check you will automate in Python.',
      'Process: Decompose → Recognize pattern → Abstract → Write algorithm.',
      'Set expectations: 20 minutes to work, then we review together.',
      'This algorithm will be your reference for Week 1 coding.',
    ],
  },

  // Slide 23: Capstone Instructions
  {
    id: 23,
    type: 'lab',
    title: 'Capstone: Room Compliance Algorithm',
    durationMinutes: 20,
    content: {
      labSteps: [
        {
          step: 1,
          instruction: 'DECOMPOSE: Break the problem into sub-problems (get dimensions, calculate area, compare to minimum)',
          expectedOutput: '3-4 sub-problems identified',
        },
        {
          step: 2,
          instruction: 'PATTERN RECOGNIZE: Identify the repeating logic and data elements',
          expectedOutput: 'Same check applies to any room',
        },
        {
          step: 3,
          instruction: 'ABSTRACT: Define the minimal data needed (what defines a room?)',
          expectedOutput: 'Room = length × width, minimum = 15 sqm',
        },
        {
          step: 4,
          instruction: 'WRITE ALGORITHM: Create step-by-step instructions with INPUT, STEPS, OUTPUT',
          expectedOutput: 'Complete algorithm document',
        },
      ],
    },
    speakerNotes: [
      'Students work individually for 15 minutes.',
      'Circulate and coach - this is the synthesis of the day.',
      'Look for: Clear decomposition, appropriate abstraction, precise steps.',
      'Common issues: Vague steps, missing edge cases, unclear inputs.',
      'After 15 minutes, ask for volunteer to share their algorithm.',
      'Class critique: What is clear? What could be more precise?',
      'Collect algorithms - they will code this in Week 1.',
    ],
  },

  // Slide 24: Recap
  {
    id: 24,
    type: 'recap',
    title: 'What We Learned Today',
    durationMinutes: 5,
    content: {
      recapItems: [
        'Computational thinking is structured problem-solving, not just coding',
        'Decomposition breaks complex problems into manageable sub-problems',
        'Pattern recognition identifies repetitive tasks for automation',
        'Abstraction simplifies reality by focusing on relevant details',
        'Algorithmic thinking produces precise, step-by-step instructions',
      ],
    },
    speakerNotes: [
      'Review each pillar one more time.',
      'Emphasize: These are thinking skills, not software skills.',
      'You have been using these skills implicitly - now use them explicitly.',
      'The capstone algorithm is proof you can think computationally.',
      'Next week: We translate these algorithms into Python code.',
      'Homework: Find one more algorithm opportunity in your work.',
      'Questions before we wrap?',
    ],
  },

  // Slide 25: Preview
  {
    id: 25,
    type: 'preview',
    title: 'Next Week: Your First Python Code',
    durationMinutes: 5,
    content: {
      previewTopics: [
        'From algorithm to Python: writing your first lines of code',
        'Variables: Storing data like room dimensions',
        'Data types: Numbers, text, and coordinates',
        'Operations: Calculating area, volume, distances',
        'You will code the room compliance algorithm from today',
      ],
    },
    speakerNotes: [
      'Build excitement for Week 1 - the coding begins.',
      'We will implement the algorithms written today.',
      'The room compliance check will be your first working program.',
      'Connection: Algorithms provide the logic, Python provides the language.',
      'Preparation: Review your algorithm before next class.',
      'Bring laptop next week - we code together.',
      'Thank them for engagement and thoughtful participation.',
    ],
  },
];

export const totalSlides = slides.length;

export function getSlideById(id: number): SlideData | null {
  return slides.find((slide) => slide.id === id) || null;
}
