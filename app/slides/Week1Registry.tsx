import { SlideData } from './types';

export const week1Slides: SlideData[] = [
  // Slide 1: Opening
  {
    id: 1,
    type: 'opening',
    title: 'Python Foundations for Built Environment Professionals',
    durationMinutes: 5,
    content: {
      subtitle: 'Week 1: Variables, Data Types, and Basic Operations',
      bullets: [
        'Understand what Python is and where it applies in BIM/construction workflows',
        'Run Python code using interpreter or editor',
        'Use variables and basic data types',
        'Perform arithmetic operations',
        'Work with simple coordinate data (points)',
      ],
    },
    speakerNotes: [
      'Welcome to Week 1 - your first hands-on coding session.',
      'Today we write actual Python code. You will leave with working programs.',
      'Focus is on fundamentals: storing data, calculating, and displaying results.',
      'Every example uses real construction/BIM scenarios.',
      'By the end: You will calculate room areas, concrete volumes, and distances programmatically.',
      'Ask: "What brought you here? What calculation do you want to automate first?"',
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
        'Why Python in Construction & BIM? (20 min)',
        'Running Python Code (25 min)',
        'Variables and Data Types (40 min)',
        'Arithmetic Operations (35 min)',
        'Introduction to Coordinates (40 min)',
        'Mini Project: Simple Room Calculator (20 min)',
      ],
    },
    speakerNotes: [
      'Six modules, each building on the previous.',
      'Heavy emphasis on live coding - bring your laptop.',
      'Mini project at the end ties everything together.',
      'Breaks at 60 and 120 minutes.',
      'Ask about prior coding experience, but emphasize we start from zero.',
    ],
  },

  // Slide 3: Why Python in Construction
  {
    id: 3,
    type: 'concept',
    title: 'Why Python in Construction & BIM?',
    durationMinutes: 10,
    content: {
      bullets: [
        'Automation eliminates repetitive manual tasks (renumbering, data exports)',
        'Dynamo for Revit uses Python for complex logic nodes',
        'Revit API allows custom tools and batch operations',
        'GIS and data processing for site analysis and reporting',
        'Thinking like a programmer: breaking problems into steps',
      ],
    },
    speakerNotes: [
      'Connect to their pain points from pre-course survey.',
      'Dynamo: Visual programming with Python for advanced users.',
      'Revit API: Create buttons that do exactly what your firm needs.',
      'GIS: Process thousands of survey points in seconds.',
      'The mindset shift: from "do this task" to "automate this task."',
      'Real example: 500 rooms renamed in 30 seconds vs 2 hours manually.',
      'Emphasize: You do not need to be a software developer to benefit.',
    ],
  },

  // Slide 4: Where Python Shows Up
  {
    id: 4,
    type: 'concept',
    title: 'Where Python Shows Up in AEC',
    durationMinutes: 10,
    content: {
      bullets: [
        'Automating repetitive BIM tasks (renumbering rooms, renaming views)',
        'Processing site data (CSV imports, coordinate transformations)',
        'Geometry manipulation (calculating areas, checking clearances)',
        'Quality checking models (parameter validation, clash detection prep)',
      ],
    },
    speakerNotes: [
      'Four concrete categories with examples.',
      'Renumbering rooms: When program changes, automation updates everything.',
      'Site data: Import survey CSV, calculate cut/fill volumes automatically.',
      'Geometry: What we focus on today - areas, volumes, distances.',
      'Quality checking: Validate that every room has required parameters.',
      'Ask students to categorize their repetitive tasks into these buckets.',
      'Preview: By Week 4, you will do all of these.',
    ],
  },

  // Slide 5: Discussion
  {
    id: 5,
    type: 'discussion',
    title: 'Your Repetitive Tasks',
    durationMinutes: 10,
    content: {
      discussionPrompt: 'List 3 repetitive tasks in your current workflow that involve calculations, data entry, or checking model elements.',
    },
    speakerNotes: [
      'Students write down their own tasks.',
      'Share with partner, then volunteers share with class.',
      'Categorize on board: data entry, calculation, validation, reporting.',
      'Connect to curriculum: "We will automate this type of task in Week X."',
      'Build excitement: "That is exactly what we will solve today."',
      'Document their answers - reference throughout the course.',
    ],
  },

  // Slide 6: Running Python Code
  {
    id: 6,
    type: 'concept',
    title: 'Running Python Code',
    durationMinutes: 12,
    content: {
      bullets: [
        'Python Interpreter: Type code, see immediate results (good for learning)',
        'Script File (.py): Save code to run later (good for reuse)',
        'print() function: Displays output to the screen',
        'Basic syntax: Indentation matters, case matters, parentheses matter',
        'Comments start with # and help explain your code',
      ],
    },
    speakerNotes: [
      'Demonstrate live: Open Python, type 2+2, show result.',
      'Then show creating hello.py and running it.',
      'print() is our first function - sends text to output.',
      'Critical rules: Python is picky about spelling and spacing.',
      'Show error: Print vs print (case sensitivity).',
      'Show error: print "hello" vs print("hello") (Python 3 syntax).',
      'Comments are for humans - use them generously.',
    ],
  },

  // Slide 7: Demo - Hello Construction World
  {
    id: 7,
    type: 'demo',
    title: 'Hello Construction World',
    durationMinutes: 13,
    content: {
      code: `# Your first Python program
print('Hello, BIM World!')

# Print multiple lines about a project
print('Project: Marina Tower')
print('Level: 12')
print('Status: Under Construction')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Type this code live, line by line.',
      'Single quotes work, double quotes work - be consistent.',
      'Each print() adds a new line automatically.',
      'Run the code - celebrate their first program!',
      'Exercise: Have them print their own project info.',
      'Common error: Missing closing quote. Show the error.',
      'Common error: Forgetting parentheses.',
    ],
  },

  // Slide 8: Variables Concept
  {
    id: 8,
    type: 'concept',
    title: 'Variables and Data Types',
    durationMinutes: 20,
    content: {
      bullets: [
        'Variables store data with descriptive names: building_height = 120',
        'Integers (int): Whole numbers - floor counts, item quantities',
        'Floats (float): Decimal numbers - dimensions, coordinates',
        'Strings (str): Text data - names, IDs, descriptions in quotes',
        'type() function shows what kind of data is stored',
      ],
    },
    speakerNotes: [
      'Variables are labeled boxes that hold values.',
      'Naming: Use descriptive names, snake_case in Python.',
      'int: 30 floors, 144 columns - whole items.',
      'float: 120.5 meters, 0.25 thickness - measurements.',
      'str: "Skyline Tower", "Level 12" - text.',
      'Live demo: x = 5, type(x), y = 5.5, type(y).',
      'Python figures out the type automatically - no need to declare.',
    ],
  },

  // Slide 9: Demo - Store Building Height
  {
    id: 9,
    type: 'demo',
    title: 'Store Building Data in Variables',
    durationMinutes: 20,
    content: {
      code: `# Store building information
height = 120
floors = 30
project_name = 'Skyline Residences'

# Display the values
print(height)
print(floors)
print(project_name)

# Check the data types
print(type(height))
print(type(project_name))`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Three variables, three different types.',
      'Print variable name (no quotes) to see the value.',
      'type() reveals the data type - useful for debugging.',
      'Ask: "What type is height? What type is project_name?"',
      'Experiment: Reassign height = 125, print again.',
      'Variables can change values - that is their power.',
      'Common confusion: "height" (string) vs height (variable).',
    ],
  },

  // Slide 10: Demo - Room Dimensions
  {
    id: 10,
    type: 'demo',
    title: 'Room Dimensions with Variables',
    durationMinutes: 15,
    content: {
      code: `# Store room dimensions
length = 5.5
width = 4.2
room_name = 'Conference Room A'

# Print formatted output
print('Room:', room_name)
print('Length:', length, 'meters')
print('Width:', width, 'meters')

# Check data types
print('Length is', type(length))`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Practical example: storing and displaying room data.',
      'Print accepts multiple items separated by commas.',
      'Python adds spaces between comma-separated items.',
      'type() helps verify your data is what you expect.',
      'Have students modify dimensions and rerun.',
      'Next: We will calculate area from these dimensions.',
      'Common error: Forgetting quotes around room_name string.',
    ],
  },

  // Slide 11: Arithmetic Operations
  {
    id: 11,
    type: 'concept',
    title: 'Arithmetic Operations',
    durationMinutes: 15,
    content: {
      bullets: [
        'Addition (+): Combining quantities, total loads',
        'Subtraction (-): Differences, remaining values',
        'Multiplication (*): Areas, volumes, scaling',
        'Division (/): Ratios, unit conversions',
        'Exponentiation (**): Squaring for area, cubing for volume',
      ],
    },
    speakerNotes: [
      'Same math you use in Excel or calculators.',
      'Python uses * for multiply, / for divide.',
      'Order of operations: PEMDAS applies.',
      'Use parentheses to make order explicit.',
      'Demo: 2 + 3 * 4 vs (2 + 3) * 4 - different results!',
      'Exponentiation: length**2 gives area from dimension.',
      'Common error: Using ^ instead of ** for exponents.',
    ],
  },

  // Slide 12: Demo - Room Area Calculation
  {
    id: 12,
    type: 'demo',
    title: 'Calculate Room Area',
    durationMinutes: 10,
    content: {
      code: `# Calculate room area
length = 5.0
width = 4.0

# Multiply to get area
area = length * width

# Display the result
print('Room dimensions:', length, 'x', width, 'meters')
print('Room area:', area, 'square meters')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'First practical calculation - something they do manually today.',
      'Pattern: Store inputs → Calculate → Store result → Display.',
      'area is a new variable holding the computed value.',
      'Ask: "How would we calculate 50 rooms?" (Preview loops).',
      'Experiment: Change values, instant recalculation.',
      'This is the foundation of quantity takeoff automation.',
      'Common error: Forgetting to assign result to a variable.',
    ],
  },

  // Slide 13: Demo - Concrete Volume
  {
    id: 13,
    type: 'demo',
    title: 'Calculate Concrete Volume',
    durationMinutes: 10,
    content: {
      code: `# Calculate slab volume for concrete ordering
slab_length = 10.0
slab_width = 8.0
slab_thickness = 0.2

# Volume = length * width * thickness
volume = slab_length * slab_width * slab_thickness

print('Slab dimensions:', slab_length, 'x', slab_width, 'x', slab_thickness, 'm')
print('Concrete volume required:', volume, 'cubic meters')

# Add 10% waste factor
volume_with_waste = volume * 1.1
print('Volume with 10% waste:', volume_with_waste, 'cubic meters')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Real-world quantity takeoff scenario.',
      'Three-dimensional calculation - everyday construction math.',
      'Waste factor: Practical construction consideration.',
      'Can be used immediately on actual projects.',
      'Extension: "How would we handle 5 slabs?"',
      'Once written, runs instantly with any dimensions.',
      'Common error: Mixing units (mm vs m). Ensure consistency.',
    ],
  },

  // Slide 14: Exercise 1
  {
    id: 14,
    type: 'exercise',
    title: 'Exercise: Site Area Calculation',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'A rectangular site measures 45m long and 32m wide. Calculate the site area in square meters.',
        input: 'length = 45, width = 32',
        expectedOutput: 'Site area: 1440 square meters',
        hint: 'Use variables for length and width, then multiply them together.',
      },
    },
    speakerNotes: [
      'First independent coding exercise.',
      'Apply the pattern: variables → calculation → display.',
      'Walk around to check their code.',
      'Common issues: Forgetting quotes on strings, typos in variable names.',
      'After 5 minutes, ask volunteer to share screen.',
      'Solution: length = 45, width = 32, area = length * width, print.',
    ],
  },

  // Slide 15: Exercise 2
  {
    id: 15,
    type: 'exercise',
    title: 'Exercise: Beam Volume',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Calculate the concrete volume for a beam that is 6m long, 0.3m wide, and 0.5m high.',
        input: 'length = 6, width = 0.3, height = 0.5',
        expectedOutput: 'Beam volume: 0.9 cubic meters',
        hint: 'Volume = length × width × height. Store each dimension in a variable.',
      },
    },
    speakerNotes: [
      '3D volume calculation - structural application.',
      'Emphasize descriptive variable names.',
      'Check units: all dimensions should be in meters.',
      'Expected answer: 0.9 cubic meters.',
      'Extension: Calculate for 10 identical beams (multiply by 10).',
      'Connect to quantity surveys they do manually.',
    ],
  },

  // Slide 16: Exercise 3
  {
    id: 16,
    type: 'exercise',
    title: 'Exercise: Unit Conversion',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Convert a wall length of 5400 millimeters to meters.',
        input: 'length_mm = 5400',
        expectedOutput: 'Length in meters: 5.4',
        hint: 'Divide by 1000 to convert millimeters to meters.',
      },
    },
    speakerNotes: [
      'Common BIM workflow: models in mm, calculations in m.',
      'Simple division operation.',
      'Pattern: Store in one unit, calculate, convert if needed.',
      'Real scenario: Revit exports in mm, Excel calculations in m.',
      'Discuss: When to convert - before or after calculation?',
      'Answer: length_m = length_mm / 1000',
    ],
  },

  // Slide 17: Coordinates Concept
  {
    id: 17,
    type: 'concept',
    title: 'Introduction to Coordinates (Geometry Foundation)',
    durationMinutes: 20,
    content: {
      bullets: [
        'Tuples store fixed coordinate pairs: point = (10, 20)',
        'First value is x (horizontal), second is y (vertical)',
        'Access values using indexes: point[0] for x, point[1] for y',
        'Indexes start at 0 (zero-based indexing)',
        'Perfect for grid points, corners, and spatial data',
      ],
    },
    speakerNotes: [
      'Tuples are containers for grouped data that does not change.',
      'Coordinate geometry foundation for BIM work.',
      'Critical: Index 0 is x, Index 1 is y. Zero-based!',
      'Live demo: p = (5, 10), p[0], p[1].',
      'Connect to Revit: Grid intersections, column locations.',
      'Tuples are immutable - coordinates will not accidentally change.',
      'Common error: Using index 1 for x (it is index 0).',
    ],
  },

  // Slide 18: Demo - Define a Point
  {
    id: 18,
    type: 'demo',
    title: 'Define and Access Points',
    durationMinutes: 15,
    content: {
      code: `# Define a point with x, y coordinates
point = (10, 20)

# Display the full point
print('Point:', point)

# Access individual coordinates
print('X coordinate:', point[0])
print('Y coordinate:', point[1])

# Two points representing a grid line
p1 = (0, 0)
p2 = (5, 0)
print('Grid line from', p1, 'to', p2)`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Creating and accessing tuple data.',
      'Print full tuple or individual elements.',
      'Two-point example previews distance calculation.',
      'Ask: "What is point[0]? What is point[1]?"',
      'Experiment: Create a point for your office location.',
      'This is how we will store all spatial data.',
      'Common error: Forgetting square brackets for indexing.',
    ],
  },

  // Slide 19: Demo - Distance Calculation
  {
    id: 19,
    type: 'demo',
    title: 'Distance in X Direction',
    durationMinutes: 15,
    content: {
      code: `# Two grid points
p1 = (0, 0)
p2 = (5, 0)

# Calculate horizontal distance
distance_x = p2[0] - p1[0]

# Calculate vertical distance (if different y values)
p3 = (5, 3)
distance_y = p3[1] - p1[1]

print('Point 1:', p1)
print('Point 2:', p2)
print('Horizontal distance:', distance_x, 'meters')
print('Vertical distance:', distance_y, 'meters')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Simple coordinate subtraction for axis-aligned distances.',
      'Horizontal: Subtract x-coordinates.',
      'Vertical: Subtract y-coordinates.',
      'Live experiment: Change p2 to (8, 0) and (5, 7).',
      'Connect to grid dimensioning in drawings.',
      'Next week: Full diagonal distance with Pythagorean theorem.',
      'Common error: Confusing which index is x vs y.',
    ],
  },

  // Slide 20: Exercise 4
  {
    id: 20,
    type: 'exercise',
    title: 'Exercise: Column Grid Points',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Create two points representing column grid intersections at (10, 15) and (25, 15). Compute the horizontal distance between them.',
        input: 'grid_a = (10, 15), grid_b = (25, 15)',
        expectedOutput: 'Horizontal span: 15 meters',
        hint: 'Subtract the x-coordinates (index 0) to get horizontal distance.',
      },
    },
    speakerNotes: [
      'Apply coordinate math to structural grid.',
      'Expected: 25 - 10 = 15 meters.',
      'Practice accessing tuple elements correctly.',
      'This mimics reading grid dimensions from drawings.',
      'Check: Are they using index [0] for x-coordinates?',
      'Common error: Subtracting full tuples instead of coordinates.',
    ],
  },

  // Slide 21: Exercise 5
  {
    id: 21,
    type: 'exercise',
    title: 'Exercise: Vertical Distance',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Two elevation points are at (0, 50) and (0, 72). Compute the vertical distance between them.',
        input: 'elev_1 = (0, 50), elev_2 = (0, 72)',
        expectedOutput: 'Vertical distance: 22 meters',
        hint: 'Subtract the y-coordinates (index 1) to get vertical distance.',
      },
    },
    speakerNotes: [
      'Vertical distance calculation - elevation difference.',
      'Expected: 72 - 50 = 22 meters.',
      'Practice with y-coordinates (index 1).',
      'Application: Height differences, level changes.',
      'Ask: "What BIM data uses elevation calculations?"',
      'Common error: Using x-coordinates when y is needed.',
    ],
  },

  // Slide 22: Mini Project Intro
  {
    id: 22,
    type: 'concept',
    title: 'Mini Project: Simple Room Calculator',
    durationMinutes: 10,
    content: {
      bullets: [
        'Combine variables, arithmetic, and coordinates',
        'Store two corner points of a rectangular room',
        'Compute width from x-coordinates',
        'Compute height from y-coordinates',
        'Calculate and display room area',
      ],
    },
    speakerNotes: [
      'Capstone project for Week 1 - brings it all together.',
      'Students will write this from scratch.',
      '20 minutes to work independently.',
      'Breakdown hint: width = p2[0] - p1[0], height = p2[1] - p1[1].',
      'This is a practical tool - they can use it Monday at work.',
      'Walk around and assist without giving full solution.',
      'Success: Changing corner points instantly updates area.',
    ],
  },

  // Slide 23: Mini Project Starter
  {
    id: 23,
    type: 'demo',
    title: 'Room Calculator - Starter Code',
    durationMinutes: 10,
    content: {
      code: `# Room Calculator - Starter
# Two opposite corners of rectangular room

p1 = (0, 0)
p2 = (6, 4)

# TODO: Calculate width from x-coordinates
width = 

# TODO: Calculate height from y-coordinates
height = 

# TODO: Calculate area
area = 

# TODO: Print results with labels
print('Width:', width, 'm')
print('Height:', height, 'm')
print('Area:', area, 'sq m')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Provide structure with TODOs for students to fill.',
      'Encourage running code after completing each TODO.',
      'Solution: width = p2[0] - p1[0], height = p2[1] - p1[1], area = width * height.',
      'Expected output: Width 6m, Height 4m, Area 24 sq m.',
      'After 15 minutes, review solution together.',
      'Celebrate: They built a working calculator!',
      'Challenge: What if room is not axis-aligned? (Preview Week 3)',
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
        'Python is a powerful tool for automating BIM and construction workflows',
        'Variables store data with descriptive names (height, area, project_name)',
        'Three essential data types: int, float, str for different kinds of data',
        'Arithmetic operations enable quantity calculations and conversions',
        'Tuples represent coordinates - access with point[0] and point[1]',
      ],
    },
    speakerNotes: [
      'Review each learning objective.',
      'Students have written working code today.',
      'Connect back to their initial repetitive tasks.',
      'They can now automate basic calculations.',
      'Encourage: Programming gets easier with practice.',
      'Homework: Try the room calculator with different dimensions.',
      'Questions before we wrap?',
    ],
  },

  // Slide 25: Preview Week 2
  {
    id: 25,
    type: 'preview',
    title: 'Next Week: Control Flow and Logic',
    durationMinutes: 5,
    content: {
      previewTopics: [
        'Boolean logic: making yes/no decisions in code',
        'Comparison operators: checking if values meet requirements',
        'If/elif/else: executing different code based on conditions',
        'Automated compliance checking: "Is this room big enough?"',
        'Distance calculations between any two points',
      ],
    },
    speakerNotes: [
      'Week 2 adds decision-making to programs.',
      'Programs will check compliance automatically.',
      'Example: If area < 15, print "Too small".',
      'Full distance formula with math module.',
      'This is where automation becomes truly useful.',
      'Preparation: Review your algorithms from Week 0.',
      'Bring laptop - we will code together again.',
    ],
  },
];

export const week1TotalSlides = week1Slides.length;

export function getWeek1SlideById(id: number): SlideData | null {
  return week1Slides.find((slide) => slide.id === id) || null;
}
