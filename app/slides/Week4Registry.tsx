import { SlideData } from './types';

export const week4Slides: SlideData[] = [
  // Slide 1: Opening
  {
    id: 1,
    type: 'opening',
    title: 'Processing Geometry with Lists and Structured Data',
    durationMinutes: 5,
    content: {
      subtitle: 'Week 4: Nested Data and Geometric Calculations',
      bullets: [
        'Understand nested data structures (list of tuples)',
        'Process multiple geometric elements using loops',
        'Compute polyline length from coordinate sequences',
        'Compute bounding box from multiple points',
        'Compute polygon perimeter',
      ],
    },
    speakerNotes: [
      'Welcome to Week 4 - we are working with real geometric data structures now.',
      'Today: Complex shapes as lists of points, not just single points.',
      'By the end: Calculate perimeters, bounding boxes, and polyline lengths programmatically.',
      'These are the fundamental algorithms behind CAD and BIM software.',
      'Ask: "What geometric calculations do you do manually that could be automated?"',
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
        'Structured Geometry Data (30 min)',
        'Polyline Length Calculation (40 min)',
        'Bounding Box from Multiple Points (40 min)',
        'Polygon Perimeter (35 min)',
        'Mini Project: Site Geometry Processor (35 min)',
      ],
    },
    speakerNotes: [
      'Five modules focused on geometry processing.',
      'Each builds on previous weeks loops and conditionals.',
      'Mini project integrates all geometric calculations.',
      'Today is math-heavy but practical - CAD algorithms exposed.',
    ],
  },

  // Slide 3: Nested Data Structures
  {
    id: 3,
    type: 'concept',
    title: 'Structured Geometry Data',
    durationMinutes: 15,
    content: {
      bullets: [
        'Complex geometry is stored as lists of coordinate tuples',
        'Polygon = [(x1,y1), (x2,y2), (x3,y3), ...] - list of points',
        'Access nested elements: polygon[0] gets first point',
        'Double indexing: polygon[0][0] gets x of first point',
        'This structure represents polylines, boundaries, and paths',
      ],
    },
    speakerNotes: [
      'Data structure revelation: Shapes are just lists of points.',
      'polygon[0] returns a tuple (x, y).',
      'polygon[0][0] returns just the x-coordinate.',
      'This is exactly how CAD software stores geometry internally.',
      'Live demo: Create polygon, access various elements.',
      'Connect to BIM: Room boundaries, site perimeters, wall paths.',
      'The double bracket syntax is confusing at first - practice it.',
    ],
  },

  // Slide 4: Demo - Polygon as List of Points
  {
    id: 4,
    type: 'demo',
    title: 'Polygon as List of Points',
    durationMinutes: 15,
    content: {
      code: `# Define a rectangle as list of corner points
polygon = [(0, 0), (5, 0), (5, 4), (0, 4)]

print('Polygon:', polygon)
print('Number of vertices:', len(polygon))
print()

# Access individual points
print('First point:', polygon[0])
print('Last point:', polygon[-1])
print()

# Access coordinates (double indexing)
print('X of first point:', polygon[0][0])
print('Y of first point:', polygon[0][1])
print()

# Loop through all points
for i, point in enumerate(polygon):
    print(f'Vertex {i}: {point}')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Complete example of nested data structure operations.',
      'len(polygon) counts vertices automatically.',
      'enumerate provides both index and point tuple.',
      'f-strings (preview) for clean formatted output.',
      'Practice: Students create their own polygon and access elements.',
      'Key skill: Navigating nested data confidently.',
      'Common error: Forgetting which index is vertex vs coordinate.',
    ],
  },

  // Slide 5: Exercise 1
  {
    id: 5,
    type: 'exercise',
    title: 'Exercise: Store Grid Points',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Store 5 grid intersection points in a list: (0,0), (5,0), (10,0), (15,0), (20,0). Print the list and the third point.',
        input: 'Grid coordinates',
        expectedOutput: 'List of 5 tuples, third point: (10, 0)',
        hint: 'Create list with tuples, use index [2] for third element (0-indexed).',
      },
    },
    speakerNotes: [
      'Basic nested structure creation.',
      'Third point is index 2 (0, 1, 2).',
      'Verify correct tuple syntax inside list.',
      'Extension: Print x-coordinate of third point.',
      'Common error: Confusing 1-based vs 0-based indexing.',
    ],
  },

  // Slide 6: Exercise 2
  {
    id: 6,
    type: 'exercise',
    title: 'Exercise: Extract Y-Coordinates',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Given points = [(2,5), (4,8), (6,3), (8,9)], print all Y-coordinates using a loop.',
        input: 'points = [(2,5), (4,8), (6,3), (8,9)]',
        expectedOutput: '5, 8, 3, 9 (each on separate line)',
        hint: 'Loop through points, access y with index [1] on each point.',
      },
    },
    speakerNotes: [
      'Practice double-indexing in a loop context.',
      'Pattern: for point in points: y = point[1].',
      'Connects to elevation extraction from survey data.',
      'Extension: Calculate average y-coordinate.',
      'Common error: Using points[1] instead of point[1].',
    ],
  },

  // Slide 7: Exercise 3
  {
    id: 7,
    type: 'exercise',
    title: 'Exercise: Count Polygon Vertices',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Print the number of vertices in a polygon defined as [(0,0), (5,0), (5,4), (0,4), (2,2)].',
        input: 'polygon with 5 points',
        expectedOutput: 'Number of vertices: 5',
        hint: 'Use len() function on the polygon list.',
      },
    },
    speakerNotes: [
      'Simple application of len() to nested structure.',
      'Important for algorithms that depend on vertex count.',
      '5 points but check if closed (first == last) for polygons.',
      'Preview: Perimeter calculation needs vertex count.',
    ],
  },

  // Slide 8: Polyline Length Concept
  {
    id: 8,
    type: 'concept',
    title: 'Polyline Length Calculation',
    durationMinutes: 15,
    content: {
      bullets: [
        'Polyline: Sequence of connected line segments',
        'Total length = sum of all segment lengths',
        'Iterate through consecutive point pairs',
        'Use distance formula on each segment',
        'Accumulate total as you go',
      ],
    },
    speakerNotes: [
      'Polyline is common in CAD: walls, paths, utilities.',
      'Algorithm: For each segment, calculate length, add to total.',
      'Key insight: Segment i connects point i to point i+1.',
      'Range must stop at len-1 to avoid index error.',
      'This is how CAD software calculates path lengths.',
      'Connect to: Cable runs, piping, road centerlines.',
      'Common error: Off-by-one in range (trying to access beyond list).',
    ],
  },

  // Slide 9: Demo - Polyline Length
  {
    id: 9,
    type: 'demo',
    title: 'Compute Total Polyline Length',
    durationMinutes: 20,
    content: {
      code: `import math

# Define polyline as list of points
line = [(0, 0), (3, 0), (3, 4), (6, 4)]
total_length = 0

print('Polyline:', line)
print()

# Iterate through consecutive point pairs
for i in range(len(line) - 1):
    x1, y1 = line[i]
    x2, y2 = line[i + 1]
    
    # Calculate segment length using distance formula
    segment = math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
    total_length += segment
    
    print(f'Segment {i}: ({x1},{y1}) to ({x2},{y2}) = {segment}m')

print()
print(f'Total polyline length: {total_length}m')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Complete polyline length algorithm.',
      'range(len(line) - 1) stops before last point.',
      'Tuple unpacking: x1, y1 = line[i] for cleaner code.',
      'Accumulation pattern: total_length += segment.',
      'Expected: 3 + 4 + 3 = 10 meters.',
      'Verify by hand calculation to build confidence.',
      'This algorithm is foundation of many CAD tools.',
    ],
  },

  // Slide 10: Exercise 4
  {
    id: 10,
    type: 'exercise',
    title: 'Exercise: Site Boundary Length',
    durationMinutes: 15,
    content: {
      exercise: {
        problem: 'Compute total site boundary length from 4 corner points: [(0,0), (50,0), (50,30), (0,30)].',
        input: 'rectangle boundary points',
        expectedOutput: 'Total boundary length: 160m',
        hint: 'Use polyline length algorithm. Expected: 50 + 30 + 50 + 30 = 160.',
      },
    },
    speakerNotes: [
      'Rectangular site boundary - perimeter calculation.',
      'Expected: 160 meters (perimeter of 50x30 rectangle).',
      'Verification: Students can calculate by hand first.',
      'Common error: Forgetting to close the polygon (last to first).',
      'This calculates perimeter but does not close automatically.',
    ],
  },

  // Slide 11: Exercise 5
  {
    id: 11,
    type: 'exercise',
    title: 'Exercise: Print Segment Lengths',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Modify the polyline code to print each segment length separately, then print the total.',
        input: 'Any polyline',
        expectedOutput: 'Segment lengths listed, then total sum',
        hint: 'Print inside the loop for each segment, outside for total.',
      },
    },
    speakerNotes: [
      'Debugging exercise - understand loop flow.',
      'Inside loop: individual segment info.',
      'Outside loop: accumulated total.',
      'Useful for verifying calculations step-by-step.',
      'Pattern: Detail during iteration, summary after.',
    ],
  },

  // Slide 12: Bounding Box Concept
  {
    id: 12,
    type: 'concept',
    title: 'Bounding Box from Multiple Points',
    durationMinutes: 15,
    content: {
      bullets: [
        'Bounding box: Smallest rectangle containing all points',
        'Defined by min/max X and min/max Y coordinates',
        'Initialize with extreme values (infinity)',
        'Update min/max as you iterate through points',
        'Result: Lower-left and upper-right corners',
      ],
    },
    speakerNotes: [
      'Bounding box is fundamental spatial query in GIS and CAD.',
      'Algorithm: Track extreme coordinates while iterating.',
      'Initialize: min_x = infinity, max_x = -infinity.',
      'Update: If x < min_x, min_x = x (same for max).',
      'Result: (min_x, min_y) to (max_x, max_y).',
      'Applications: Zoom to fit, spatial indexing, clash detection.',
      'Common error: Initializing with 0 instead of infinity.',
    ],
  },

  // Slide 13: Demo - Bounding Box
  {
    id: 13,
    type: 'demo',
    title: 'Compute Bounding Box',
    durationMinutes: 20,
    content: {
      code: `points = [(2, 3), (5, 7), (1, 9), (4, 2), (6, 5)]

# Initialize with extreme values
min_x = float('inf')
max_x = float('-inf')
min_y = float('inf')
max_y = float('-inf')

print('Points:', points)
print()

# Iterate and update extremes
for x, y in points:
    if x < min_x:
        min_x = x
    if x > max_x:
        max_x = x
    if y < min_y:
        min_y = y
    if y > max_y:
        max_y = y
    
    print(f'Point ({x},{y}): Current box: ({min_x},{min_y}) to ({max_x},{max_y})')

print()
print(f'Final Bounding Box: ({min_x},{min_y}) to ({max_x},{max_y})')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Complete bounding box algorithm with debugging output.',
      'float(inf) represents infinity in Python.',
      'Shows intermediate values to understand algorithm flow.',
      'First point updates all values (1 < inf, etc.).',
      'Subsequent points only update if more extreme.',
      'Final box contains all input points.',
      'Expected: (1, 2) to (6, 9).',
    ],
  },

  // Slide 14: Exercise 6
  {
    id: 14,
    type: 'exercise',
    title: 'Exercise: Bounding Box Dimensions',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Given the bounding box calculation, compute and print the width and height of the bounding box.',
        input: 'min_x, max_x, min_y, max_y from bounding box',
        expectedOutput: 'Width: 5, Height: 7',
        hint: 'Width = max_x - min_x, Height = max_y - min_y.',
      },
    },
    speakerNotes: [
      'Simple calculation after bounding box is found.',
      'Width and height are basic spatial properties.',
      'Expected for demo data: width = 6-1 = 5, height = 9-2 = 7.',
      'Connect to: Site dimensions, building footprint size.',
    ],
  },

  // Slide 15: Exercise 7
  {
    id: 15,
    type: 'exercise',
    title: 'Exercise: Bounding Box Area',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Calculate the area of the bounding box from the previous exercise.',
        input: 'Bounding box width and height',
        expectedOutput: 'Bounding box area: 35',
        hint: 'Area = width × height.',
      },
    },
    speakerNotes: [
      'Simple area calculation from derived dimensions.',
      'Expected: 5 × 7 = 35 square units.',
      'Not the same as polygon area - this is the rectangular envelope.',
      'Useful for approximate site area or spatial indexing.',
    ],
  },

  // Slide 16: Exercise 8
  {
    id: 16,
    type: 'exercise',
    title: 'Exercise: Box Orientation Check',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Check if bounding box width is greater than height. Print "Wide" or "Tall/Narrow".',
        input: 'Bounding box dimensions',
        expectedOutput: 'Wide (if width > height)',
        hint: 'Use if/else to compare width and height.',
      },
    },
    speakerNotes: [
      'Classification exercise using bounding box properties.',
      'Connect to site planning: wide vs deep lots.',
      'Decision-making based on geometric analysis.',
      'Pattern: Calculate → Analyze → Classify.',
    ],
  },

  // Slide 17: Polygon Perimeter Concept
  {
    id: 17,
    type: 'concept',
    title: 'Polygon Perimeter',
    durationMinutes: 15,
    content: {
      bullets: [
        'Polygon: Closed shape with 3+ vertices',
        'Perimeter = sum of all edge lengths',
        'Challenge: Last vertex connects back to first',
        'Modulo operator (%) enables wrap-around indexing',
        'polygon[(i+1) % n] connects last to first',
      ],
    },
    speakerNotes: [
      'Perimeter requires closing the polygon.',
      'Polyline stops at last point, perimeter returns to start.',
      'Modulo % gives remainder: 4 % 4 = 0, wrapping to first vertex.',
      'This elegant solution handles closing automatically.',
      'Algorithm: For each vertex i, connect to (i+1) % n.',
      'Connect to: Site boundaries, room perimeters, material takeoffs.',
      'Common confusion: Understanding how modulo enables wrap-around.',
    ],
  },

  // Slide 18: Demo - Polygon Perimeter
  {
    id: 18,
    type: 'demo',
    title: 'Compute Polygon Perimeter',
    durationMinutes: 20,
    content: {
      code: `import math

polygon = [(0, 0), (5, 0), (5, 4), (0, 4)]
perimeter = 0
n = len(polygon)

print('Polygon vertices:', polygon)
print('Number of sides:', n)
print()

for i in range(n):
    x1, y1 = polygon[i]
    # Modulo wraps last vertex back to first
    x2, y2 = polygon[(i + 1) % n]
    
    segment = math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
    perimeter += segment
    
    print(f'Edge {i}: ({x1},{y1}) to ({x2},{y2}) = {segment}m')

print()
print(f'Perimeter: {perimeter}m')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Complete perimeter algorithm with modulo.',
      'Key line: polygon[(i+1) % n] wraps to first vertex.',
      'When i=3, (3+1) % 4 = 0, connecting back to start.',
      'Expected: 5 + 4 + 5 + 4 = 18 meters.',
      'Works for any polygon (triangle, rectangle, irregular).',
      'This is the foundation of property line calculations.',
      'Experiment: Add more vertices to make complex shape.',
    ],
  },

  // Slide 19: Exercise 9
  {
    id: 19,
    type: 'exercise',
    title: 'Exercise: 5-Point Site Boundary',
    durationMinutes: 15,
    content: {
      exercise: {
        problem: 'Compute perimeter of a 5-point site boundary: [(0,0), (10,0), (12,5), (6,8), (0,5)].',
        input: '5 boundary coordinates',
        expectedOutput: 'Perimeter: ~30.5m (accept reasonable precision)',
        hint: 'Use polygon perimeter algorithm with modulo for closing edge.',
      },
    },
    speakerNotes: [
      'Irregular pentagon - more complex than rectangle.',
      'Requires diagonal distance calculations.',
      'Students should get approximately 30.5 meters.',
      'Verify modulo correctly handles closing edge (point 4 to point 0).',
      'Real-world site boundaries are often irregular.',
    ],
  },

  // Slide 20: Exercise 10
  {
    id: 20,
    type: 'exercise',
    title: 'Exercise: Count Polygon Edges',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Modify the perimeter code to also count and print the number of edges.',
        input: 'Any polygon',
        expectedOutput: 'Number of edges: N, Perimeter: Xm',
        hint: 'The number of edges equals the number of vertices for a closed polygon.',
      },
    },
    speakerNotes: [
      'Simple addition to perimeter calculation.',
      'Edges = vertices for closed polygons.',
      'Use len(polygon) to get edge count.',
      'Useful for validating polygon complexity.',
    ],
  },

  // Slide 21: Mini Project Intro
  {
    id: 21,
    type: 'concept',
    title: 'Mini Project: Site Boundary Analyzer',
    durationMinutes: 10,
    content: {
      bullets: [
        'Integrate all geometric calculations into one tool',
        'Input: List of boundary coordinates',
        'Calculate: Perimeter, bounding box, width, height, area',
        'Output: Comprehensive site geometry report',
        'Reusable tool for any site boundary',
      ],
    },
    speakerNotes: [
      'Capstone project for Week 4 - brings together all skills.',
      'Students build a complete geometry analysis tool.',
      '35 minutes to work independently.',
      'Starter code provides boundary data.',
      'They must combine: perimeter algo, bounding box algo, calculations.',
      'This is a professional-grade utility.',
      'Encourage testing with different boundary shapes.',
    ],
  },

  // Slide 22: Mini Project Starter
  {
    id: 22,
    type: 'demo',
    title: 'Site Boundary Analyzer - Starter',
    durationMinutes: 25,
    content: {
      code: `# Site Boundary Analyzer - Starter Code
import math

# Irregular site boundary
boundary = [(0, 0), (10, 0), (12, 5), (6, 8), (0, 5)]

print('Site Boundary:', boundary)
print()

# TODO: Calculate perimeter using modulo technique
perimeter = 0
# ... your code here ...

print(f'Perimeter: {perimeter}m')
print()

# TODO: Calculate bounding box
min_x = float('inf')
max_x = float('-inf')
min_y = float('inf')
max_y = float('-inf')
# ... your code here ...

print(f'Bounding Box: ({min_x},{min_y}) to ({max_x},{max_y})')

# TODO: Calculate width, height, and area
# ... your code here ...`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Provide structure with TODOs.',
      'Students fill in perimeter and bounding box algorithms.',
      'Then calculate derived values (width, height, area).',
      'Circulate and assist without giving solutions.',
      'Expected perimeter: ~31.4m.',
      'Expected bounding box: (0,0) to (12,8).',
      'Celebrate completion of sophisticated geometry tool.',
    ],
  },

  // Slide 23: Recap
  {
    id: 23,
    type: 'recap',
    title: 'What We Learned Today',
    durationMinutes: 5,
    content: {
      recapItems: [
        'Nested data structures: Lists of tuples represent complex geometry',
        'Polyline length: Sum distances between consecutive points',
        'Bounding box: Track min/max X and Y while iterating',
        'Polygon perimeter: Use modulo (%) to close the shape',
        'These algorithms power CAD, GIS, and BIM software',
      ],
    },
    speakerNotes: [
      'Review the geometric algorithms mastered today.',
      'Students understand how CAD software calculates these values.',
      'Connect to professional tools they use daily.',
      'These are reusable patterns for any geometry processing.',
      'Encourage applying to their own project data.',
      'Next week: Real BIM data and file I/O.',
    ],
  },

  // Slide 24: Preview Week 5
  {
    id: 24,
    type: 'preview',
    title: 'Next Week: File I/O and Real BIM Data',
    durationMinutes: 5,
    content: {
      previewTopics: [
        'Reading coordinates from CSV files',
        'Processing exported Revit schedules',
        'Writing calculation results to files',
        'Building complete import/process/export workflows',
        'Connecting Python to your actual BIM projects',
      ],
    },
    speakerNotes: [
      'Week 5 bridges to real-world applications.',
      'No more hardcoded data - read from actual exports.',
      'CSV is universal format for data exchange.',
      'Students will process their own project data.',
      'This is where automation becomes truly practical.',
      'Homework: Export a schedule or coordinate list from your BIM software.',
      'Bring real project data to work with next week.',
    ],
  },
];

export const week4TotalSlides = week4Slides.length;

export function getWeek4SlideById(id: number): SlideData | null {
  return week4Slides.find((slide) => slide.id === id) || null;
}
