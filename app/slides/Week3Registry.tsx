import { SlideData } from './types';

export const week3Slides: SlideData[] = [
  // Slide 1: Opening
  {
    id: 1,
    type: 'opening',
    title: 'Loops and Repetition in Engineering Workflows',
    durationMinutes: 5,
    content: {
      subtitle: 'Week 3: Automating Repetitive Tasks with For Loops',
      bullets: [
        'Understand repetition in programming',
        'Use for loops to automate repeated checks',
        'Use range() for numeric iteration',
        'Accumulate totals using loops',
        'Apply loops to geometry and compliance checks',
      ],
    },
    speakerNotes: [
      'Welcome to Week 3 - the power of automation scales up dramatically today.',
      'Previously: We checked one room, one beam, one point at a time.',
      'Today: Write code once, process hundreds of items automatically.',
      'This is where programming becomes essential for BIM workflows.',
      'By the end: You will process entire building datasets with a few lines of code.',
      'Ask: "What would you check if you could check everything automatically?"',
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
        'Why Repetition Matters (25 min)',
        'For Loops with range() (35 min)',
        'Accumulation – Calculating Totals (35 min)',
        'Loop + Condition = Automated Checking (40 min)',
        'Geometry Application – Looping Through Points (35 min)',
        'Mini Project: Multi-Room Analyzer (30 min)',
      ],
    },
    speakerNotes: [
      'Six modules, building from basic loops to complex automation.',
      'The mini project processes entire room lists automatically.',
      'Heavy emphasis on hands-on coding throughout.',
      'Breaks at 60 and 120 minutes.',
      'Today connects directly to BIM batch processing workflows.',
    ],
  },

  // Slide 3: Discussion
  {
    id: 3,
    type: 'discussion',
    title: 'The Problem of Scale',
    durationMinutes: 15,
    content: {
      discussionPrompt: 'If you had 200 rooms to check for minimum area, how would you do it manually? How long would it take? What might you miss?',
    },
    speakerNotes: [
      'Students discuss in pairs for 3 minutes.',
      'Manual approach: Open each room, check area, note violations, repeat.',
      'Time estimate: 30-60 seconds per room = 2-3 hours of tedious work.',
      'Error rate: Fatigue leads to missed violations.',
      'Computational approach: Write check once, apply to all 200 instantly.',
      'This is the business case for learning loops.',
      'Ask: "What is the largest dataset you work with regularly?"',
    ],
  },

  // Slide 4: Concept
  {
    id: 4,
    type: 'concept',
    title: 'From Repetition to Loop',
    durationMinutes: 10,
    content: {
      bullets: [
        'Manual repetition: Do the same task over and over',
        'Programmatic loop: Write once, execute many times',
        'Loop components: Initialization, condition, body, update',
        'Python for loops are designed for iterating over sequences',
        'range() generates sequences of numbers for counting loops',
      ],
    },
    speakerNotes: [
      'The conceptual shift: From "do this 200 times" to "do this for each item."',
      'Loop anatomy: What to iterate over, what to do each time.',
      'Python philosophy: Make common tasks simple.',
      'range() is our counter - generates 0, 1, 2, 3...',
      'Connect to BIM: Model elements are sequences we can loop through.',
      'Preview: Revit API returns element collections we loop over.',
      'This pattern applies to every repetitive engineering task.',
    ],
  },

  // Slide 5: For Loop Syntax
  {
    id: 5,
    type: 'concept',
    title: 'For Loop Syntax with range()',
    durationMinutes: 15,
    content: {
      bullets: [
        'for variable in range(stop): repeats from 0 to stop-1',
        'range(start, stop): customize beginning and end',
        'range(start, stop, step): control increment size',
        'Indentation defines what code repeats (loop body)',
        'Loop variable holds current value each iteration',
      ],
    },
    speakerNotes: [
      'range(5) produces: 0, 1, 2, 3, 4 (stops before 5).',
      'range(1, 6) produces: 1, 2, 3, 4, 5 (useful for floor numbers).',
      'The loop variable is temporary - exists only inside the loop.',
      'Critical: Indentation determines what is inside vs outside the loop.',
      'Live demo: Show range values in interpreter.',
      'Common error: Off-by-one - forgetting range stops before the end value.',
      'Common error: Forgetting to indent loop body.',
    ],
  },

  // Slide 6: Demo - Print Floor Numbers
  {
    id: 6,
    type: 'demo',
    title: 'Print Floor Numbers',
    durationMinutes: 15,
    content: {
      code: `# Print floor numbers 1 through 5
for floor in range(1, 6):
    print('Floor', floor)

print('Done checking all floors')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Simple counting loop - foundation of all repetition.',
      'range(1, 6) gives us 1-5 (stops before 6).',
      'floor variable changes each iteration: 1, then 2, then 3...',
      'The indented print runs 5 times, once per floor.',
      'Final print is outside loop - runs once at end.',
      'Experiment: Change to range(1, 11) for 10 floors.',
      'Connect to BIM: Iterate through floor levels in a building.',
    ],
  },

  // Slide 7: Demo - Repeat Compliance Check
  {
    id: 7,
    type: 'demo',
    title: 'Simulate Checking Multiple Rooms',
    durationMinutes: 15,
    content: {
      code: `# Simulate checking 5 rooms
for i in range(5):
    print('Checking room', i)
    print('  Measuring area...')
    print('  Verifying compliance...')
    print()

print('All rooms checked')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Simulating the process we will automate with real data.',
      'i is the standard name for a loop counter (index).',
      'Multiple indented lines all repeat together.',
      'Empty print() adds a blank line for readability.',
      'Show how the same code runs 5 times with different i values.',
      'This pattern scales: range(500) checks 500 rooms.',
      'Common error: Thinking i is a special word - it is just a variable name.',
    ],
  },

  // Slide 8: Exercise 1
  {
    id: 8,
    type: 'exercise',
    title: 'Exercise: Print Building Levels',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Use a for loop to print levels 1 through 20.',
        input: 'range(1, 21)',
        expectedOutput: 'Level: 1, Level: 2, ... Level: 20',
        hint: 'Use range(1, 21) and format the output as "Level:",filePathvariable',
      },
    },
    speakerNotes: [
      'Basic loop practice - ensures everyone can write for loop syntax.',
      'Check for correct range (1, 21) to get 1-20.',
      'Walk around to verify indentation is correct.',
      'Common error: range(1, 20) only gives 1-19.',
      'Solution should include formatted print statement.',
      'Encourage students to run code after writing.',
    ],
  },

  // Slide 9: Exercise 2
  {
    id: 9,
    type: 'exercise',
    title: 'Exercise: Even-Numbered Floors',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Print only even-numbered floors from 2 to 20.',
        input: 'range with step parameter',
        expectedOutput: 'Floor: 2, Floor: 4, ... Floor: 20',
        hint: 'Use range(2, 21, 2) - the third parameter is the step size.',
      },
    },
    speakerNotes: [
      'Introduces the step parameter in range().',
      'range(start, stop, step) counts by increments.',
      'Connect to real scenario: Mechanical floors, parking levels.',
      'Alternative solution: Check if floor % 2 == 0 (preview modulo).',
      'Check understanding: What would range(1, 20, 2) produce?',
      'Common error: Forgetting step applies to start value.',
    ],
  },

  // Slide 10: Exercise 3
  {
    id: 10,
    type: 'exercise',
    title: 'Exercise: Simulate Beam Checking',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Use a loop to simulate checking 10 beams. Print "Checking beam X" for each.',
        input: '10 beams',
        expectedOutput: 'Checking beam 0, Checking beam 1, ... Checking beam 9',
        hint: 'Use range(10) and include the loop variable in your print statement.',
      },
    },
    speakerNotes: [
      'Practical simulation - structural inspection workflow.',
      'Uses range(10) which produces 0-9 (computer counting starts at 0).',
      'Prepares for adding actual beam data in next section.',
      'Verify students understand loop variable substitution.',
      'Extension: Start from beam 1 instead of beam 0 (range(1, 11)).',
      'Discuss: When to start from 0 vs 1? (Computer science convention vs human convention)',
    ],
  },

  // Slide 11: Accumulation Concept
  {
    id: 11,
    type: 'concept',
    title: 'Accumulation – Calculating Totals',
    durationMinutes: 15,
    content: {
      bullets: [
        'Initialize a total variable before the loop: total = 0',
        'Inside loop: Add each value to total using +=',
        'After loop: Use final total for reporting or comparison',
        'Pattern: Initialize → Loop (accumulate) → Report',
        'Essential for quantity takeoffs and summaries',
      ],
    },
    speakerNotes: [
      'Accumulation is the foundation of quantity takeoff automation.',
      'The += operator means "add to current value."',
      'Must initialize outside loop, otherwise total resets each iteration.',
      'Real-world: Total area, total volume, total length calculations.',
      'Walk through pattern: Start at 0, add room 1, add room 2...',
      'Common error: Initializing total inside loop (resets each time).',
      'Common error: Forgetting to print total after loop ends.',
    ],
  },

  // Slide 12: Demo - Total Room Area
  {
    id: 12,
    type: 'demo',
    title: 'Calculate Total Room Area',
    durationMinutes: 15,
    content: {
      code: `# Calculate total area from list of rooms
room_areas = [12, 18, 25, 9]

# Initialize accumulator
total_area = 0

# Loop through each room and add to total
for area in room_areas:
    total_area += area
    print('Current room:', area, 'Running total:', total_area)

print('Final total area:', total_area, 'square meters')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'First real data processing - list of actual room areas.',
      'total_area starts at 0 before any additions.',
      'The += operator adds current area to running total.',
      'Running total print shows accumulation in action.',
      'Final print shows completed calculation.',
      'Experiment: Add more values to room_areas list.',
      'This is exactly how BIM software calculates program areas.',
    ],
  },

  // Slide 13: Demo - Total Beam Length
  {
    id: 13,
    type: 'demo',
    title: 'Calculate Total Beam Length',
    durationMinutes: 15,
    content: {
      code: `# Calculate total length of structural beams
beam_lengths = [6, 8, 10, 12]
total_length = 0

for length in beam_lengths:
    total_length += length

print('Individual beams:', beam_lengths)
print('Total beam length:', total_length, 'meters')

# Calculate average
average = total_length / len(beam_lengths)
print('Average beam length:', average, 'meters')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Structural quantity takeoff example.',
      'Same accumulation pattern, different domain.',
      'len() function counts items in the list.',
      'Extension: Calculate average by dividing total by count.',
      'Connect to procurement: Total length determines material order.',
      'Experiment: What if list is empty? (Division by zero error)',
      'Real application: Concrete volume, rebar length, formwork area.',
    ],
  },

  // Slide 14: Exercise 4
  {
    id: 14,
    type: 'exercise',
    title: 'Exercise: Total Concrete Volume',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Calculate total concrete volume from a list of slab volumes: [45.5, 38.2, 52.1, 29.8].',
        input: 'volumes = [45.5, 38.2, 52.1, 29.8]',
        expectedOutput: 'Total concrete volume: 165.6 cubic meters',
        hint: 'Initialize total_volume = 0, then loop and add each volume using +=',
      },
    },
    speakerNotes: [
      'Concrete quantity takeoff - core construction calculation.',
      'Uses floats instead of integers (real measurements).',
      'Verify correct initialization and accumulation pattern.',
      'Expected total: 165.6 cubic meters.',
      'Extension: Add 10% waste factor after calculating total.',
      'Connect to cost estimation: volume × price per cubic meter.',
    ],
  },

  // Slide 15: Exercise 5
  {
    id: 15,
    type: 'exercise',
    title: 'Exercise: Total Wall Perimeter',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Compute total perimeter from a list of wall lengths: [5.5, 4.2, 5.5, 4.2].',
        input: 'walls = [5.5, 4.2, 5.5, 4.2]',
        expectedOutput: 'Total perimeter: 19.4 meters',
        hint: 'Same accumulation pattern - add each wall length to running total.',
      },
    },
    speakerNotes: [
      'Room perimeter calculation - architectural application.',
      'Notice opposite walls have same length (rectangular room).',
      'Can verify: 5.5 + 4.2 + 5.5 + 4.2 = 19.4 meters.',
      'Connect to: Baseboard length, paint area, flooring.',
      'Alternative: Sum could be calculated with formula 2*(L+W).',
      'Discuss: When to use loops vs formulas? (Irregular shapes need loops)',
    ],
  },

  // Slide 16: Loop + Condition Concept
  {
    id: 16,
    type: 'concept',
    title: 'Loop + Condition = Automated Checking',
    durationMinutes: 15,
    content: {
      bullets: [
        'Combine for loops with if statements for smart filtering',
        'Check each item against rules or limits',
        'Count violations separately from processing',
        'Pattern: Loop → Check → Act (report or accumulate)',
        'Foundation of automated compliance checking',
      ],
    },
    speakerNotes: [
      'This combination is where automation becomes intelligent.',
      'Not just calculating - but evaluating and deciding.',
      'Pattern: For each item, if it fails check, report violation.',
      'Connect to code compliance, safety checks, quality control.',
      'Violations counter tracks how many items failed.',
      'Preview: Next week we will read this data from actual BIM models.',
      'This is the core of building code automation.',
    ],
  },

  // Slide 17: Demo - Room Compliance Checker
  {
    id: 17,
    type: 'demo',
    title: 'Room Compliance Checker',
    durationMinutes: 20,
    content: {
      code: `# Check room areas against minimum requirement
room_areas = [12, 18, 25, 9, 15, 22]
violations = 0
minimum_area = 15

print('Checking rooms against minimum', minimum_area, 'sqm requirement:')
print()

for area in room_areas:
    if area < minimum_area:
        print('NON-COMPLIANT: Room with area', area, 'sqm')
        violations += 1
    else:
        print('Compliant: Room with area', area, 'sqm')

print()
print('Total rooms checked:', len(room_areas))
print('Violations found:', violations)`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Complete automated compliance checking example.',
      'Checks 6 rooms in milliseconds vs minutes manually.',
      'violations counter tracks non-compliant rooms.',
      'if/else provides different output for pass vs fail.',
      'Final report summarizes findings.',
      'Experiment: Change minimum_area to see different results.',
      'This scales to thousands of rooms instantly.',
    ],
  },

  // Slide 18: Exercise 6
  {
    id: 18,
    type: 'exercise',
    title: 'Exercise: Beam Span Violations',
    durationMinutes: 15,
    content: {
      exercise: {
        problem: 'Check which beam spans exceed 12m. Count and report violations. Beam spans: [8, 15, 10, 14, 9].',
        input: 'spans = [8, 15, 10, 14, 9]',
        expectedOutput: '2 beams exceed 12m limit (15m and 14m)',
        hint: 'Initialize violation_count = 0, then if span > 12, increment counter.',
      },
    },
    speakerNotes: [
      'Structural compliance checking - maximum span validation.',
      'Expected: 2 violations (15m and 14m beams).',
      'Pattern: Loop through spans → Check condition → Count violations.',
      'Extension: Print beam index with violation for identification.',
      'Real application: Automated structural review.',
      'Discuss: What happens if limit changes? (Just change one number)',
    ],
  },

  // Slide 19: Exercise 7
  {
    id: 19,
    type: 'exercise',
    title: 'Exercise: Floor Height Compliance',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Count how many floor heights are below 2.8m minimum. Heights: [2.9, 2.7, 3.0, 2.6, 2.85].',
        input: 'heights = [2.9, 2.7, 3.0, 2.6, 2.85]',
        expectedOutput: '2 floors below minimum height',
        hint: 'Use if height < 2.8 to check for violations.',
      },
    },
    speakerNotes: [
      'Accessibility and comfort compliance - minimum ceiling height.',
      'Expected: 2 violations (2.7m and 2.6m).',
      'Connect to building codes and human factors.',
      'Precision matters: 2.85 is above 2.8, passes check.',
      'Extension: Print which floor numbers are non-compliant.',
      'Real scenario: Basement levels, mechanical floors.',
    ],
  },

  // Slide 20: Geometry Loops Concept
  {
    id: 20,
    type: 'concept',
    title: 'Looping Through Coordinate Points',
    durationMinutes: 15,
    content: {
      bullets: [
        'Lists can contain tuples: points = [(0,0), (5,0), (10,0)]',
        'Loop processes each point sequentially',
        'Access current point with index or directly',
        'Calculate distances between consecutive points',
        'Pattern essential for boundary and path calculations',
      ],
    },
    speakerNotes: [
      'Geometric data as lists of coordinate tuples.',
      'Each iteration processes one point or point pair.',
      'Used for: Site boundaries, grid lines, path profiles.',
      'Index-based access: points[i] for current, points[i+1] for next.',
      'Connect to GIS: Processing vertex sequences.',
      'Preview: Next week we will calculate full perimeter lengths.',
      'Foundation for polygon processing algorithms.',
    ],
  },

  // Slide 21: Demo - Grid Point Distances
  {
    id: 21,
    type: 'demo',
    title: 'Compute Grid Spacing',
    durationMinutes: 15,
    content: {
      code: `# Calculate horizontal distances between grid points
points = [(0, 0), (5, 0), (10, 0), (15, 0)]

print('Grid points:', points)
print()

# Loop through consecutive point pairs
for i in range(len(points) - 1):
    p1 = points[i]
    p2 = points[i + 1]
    spacing = p2[0] - p1[0]
    
    print(f'Spacing between point {i} and {i+1}: {spacing}m')

print()
    print('All grid spacings calculated')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Sequential processing of coordinate pairs.',
      'range(len(points) - 1) stops before last index.',
      'p1 = points[i], p2 = points[i+1] gets consecutive pair.',
      'f-string formatting (preview) for clean output.',
      'Connect to structural grid verification.',
      'Experiment: Change points to irregular spacing.',
      'Common error: range(len(points)) causes index out of range.',
    ],
  },

  // Slide 22: Exercise 8
  {
    id: 22,
    type: 'exercise',
    title: 'Exercise: Elevation Differences',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Print vertical differences between elevation points: [(0, 50), (0, 72), (0, 85)].',
        input: 'elevations = [(0, 50), (0, 72), (0, 85)]',
        expectedOutput: 'Rise: 22m, Rise: 13m',
        hint: 'Access y-coordinate with index [1], subtract consecutive points.',
      },
    },
    speakerNotes: [
      'Topographic/elevation analysis - vertical differences.',
      'Y-coordinate (index 1) represents elevation.',
      'Expected: 22m (72-50), then 13m (85-72).',
      'Connect to site grading and cut/fill calculations.',
      'Pattern applies to any sequential coordinate processing.',
      'Extension: Calculate total rise across all points.',
    ],
  },

  // Slide 23: Exercise 9
  {
    id: 23,
    type: 'exercise',
    title: 'Exercise: Boundary Point Coordinates',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Loop through 4 boundary points and print each coordinate pair: [(0,0), (50,0), (50,30), (0,30)].',
        input: 'boundary = [(0,0), (50,0), (50,30), (0,30)]',
        expectedOutput: 'Point 0: (0, 0), Point 1: (50, 0), ...',
        hint: 'Use enumerate() or track index with range(len(boundary)).',
      },
    },
    speakerNotes: [
      'Site boundary processing - fundamental GIS operation.',
      'enumerate() provides both index and value: for i, point in enumerate(boundary).',
      'Alternative: for i in range(len(boundary)): point = boundary[i].',
      'These are corner points of a rectangular site.',
      'Connect to site area and perimeter calculations.',
      'Preview: Next week we will close the polygon (last to first point).',
    ],
  },

  // Slide 24: Mini Project
  {
    id: 24,
    type: 'lab',
    title: 'Mini Project: Batch Room Validator',
    durationMinutes: 30,
    content: {
      labSteps: [
        {
          step: 1,
          instruction: 'Given room_areas = [12, 18, 25, 9, 30], calculate total area using a loop',
          expectedOutput: 'total_area = 94',
        },
        {
          step: 2,
          instruction: 'Calculate average area (total / count)',
          expectedOutput: 'average = 18.8',
        },
        {
          step: 3,
          instruction: 'Count non-compliant rooms (area < 15)',
          expectedOutput: 'violations = 2',
        },
        {
          step: 4,
          instruction: 'Print comprehensive report with all metrics',
          expectedOutput: 'Summary with total, average, violations count',
        },
      ],
    },
    speakerNotes: [
      'Capstone project integrating accumulation, conditionals, and reporting.',
      'Students work independently for 25 minutes.',
      'This mimics real BIM data analysis: process list, calculate metrics, report findings.',
      'Solution requires combining patterns learned today.',
      'Circulate and guide without giving full solution.',
      'After 20 minutes, review solution together.',
      'Expected violations: rooms with 12 and 9 sqm (2 total).',
    ],
  },

  // Slide 25: Recap
  {
    id: 25,
    type: 'recap',
    title: 'What We Learned Today',
    durationMinutes: 5,
    content: {
      recapItems: [
        'For loops automate repetitive tasks - write once, run many times',
        'range() generates sequences for counting and iteration',
        'Accumulation pattern: Initialize → Loop (+=) → Report totals',
        'Loop + condition enables automated compliance checking',
        'Coordinate lists can be processed sequentially for geometry operations',
      ],
    },
    speakerNotes: [
      'Review the power of automation: hundreds of items processed instantly.',
      'Loops transform manual checking into batch processing.',
      'Accumulation is essential for quantity takeoffs.',
      'Conditions make loops intelligent - not just counting but evaluating.',
      'Students can now automate significant portions of their workflows.',
      'Preview Week 4: Reading data from files and BIM models.',
      'Encourage practice with their own project data.',
    ],
  },

  // Slide 26: Preview Week 4
  {
    id: 26,
    type: 'preview',
    title: 'Next Week: Working with Real Data',
    durationMinutes: 5,
    content: {
      previewTopics: [
        'Reading data from CSV files (Excel exports)',
        'Processing Revit schedules and exported data',
        'Writing results to files for reports',
        'Building a complete quantity takeoff tool',
        'Connecting Python to actual BIM workflows',
      ],
    },
    speakerNotes: [
      'Week 4 bridges the gap: Python → real project data.',
      'CSV files: Universal format for exchanging data.',
      'Students will process actual exported BIM data.',
      'Building a complete tool they can use immediately.',
      'This is where the learning becomes professional capability.',
      'Homework: Export a schedule from your BIM software.',
      'Bring laptop and sample project data next week.',
    ],
  },
];

export const week3TotalSlides = week3Slides.length;

export function getWeek3SlideById(id: number): SlideData | null {
  return week3Slides.find((slide) => slide.id === id) || null;
}
