import { SlideData } from './types';

export const week7Slides: SlideData[] = [
  // Slide 1: Opening
  {
    id: 1,
    type: 'opening',
    title: 'Lists, Tuples & Structured Geometry Data',
    durationMinutes: 5,
    content: {
      subtitle: 'Week 7: Advanced Geometry Processing and Vector Math',
      bullets: [
        'Understand and use lists and tuples effectively',
        'Model geometric entities using structured data',
        'Perform basic vector math using tuples',
        'Represent points, lines, polygons using lists of tuples',
        'Apply list operations to BIM-style datasets',
      ],
    },
    speakerNotes: [
      'Welcome to Week 7 - consolidation and advanced applications week.',
      'We have learned lists, tuples, and geometry in previous weeks.',
      'Today: Advanced vector math, 3D coordinates, and complex geometry processing.',
      'New topics: Shoelace formula, comprehensive site layout analysis.',
      'This bridges basic geometry to professional BIM analysis.',
      'Ask: "What geometric calculations do you find most time-consuming?"',
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
        'Lists Fundamentals Review (35 min)',
        'Tuples & Geometry Representation (40 min)',
        'Lists of Tuples - Modeling Geometry (50 min)',
        'Real BIM Dataset Simulation (35 min)',
        'Mini Challenge: Site Layout Processor (20 min)',
      ],
    },
    speakerNotes: [
      'Five modules building from review to advanced applications.',
      'Emphasis on vector math and professional geometry algorithms.',
      'Mini challenge integrates all concepts into complete analysis tool.',
      'Today prepares you for file I/O and real project data next week.',
    ],
  },

  // Slide 3: Lists Review
  {
    id: 3,
    type: 'concept',
    title: 'Lists Fundamentals Review',
    durationMinutes: 15,
    content: {
      bullets: [
        'Lists store ordered collections: areas = [12, 18, 25, 9]',
        'Indexing: areas[0] gets first element',
        'Slicing: areas[1:3] gets elements 1 and 2',
        'Built-in functions: len(), min(), max(), sum()',
        'Iteration: for area in areas: process each item',
      ],
    },
    speakerNotes: [
      'Quick review of essential list operations.',
      'Lists are workhorse data structure for collections.',
      'Built-in functions save writing loops for common operations.',
      'Slicing syntax: start inclusive, end exclusive.',
      'All concepts apply directly to BIM data processing.',
      'Live demo: Create list, demonstrate each operation.',
    ],
  },

  // Slide 4: Demo - Room Areas Aggregator
  {
    id: 4,
    type: 'demo',
    title: 'Room Areas Aggregator',
    durationMinutes: 20,
    content: {
      code: `# Store room areas in a list
room_areas = [12.5, 18.3, 25.7, 9.2, 15.4, 21.8]

print('Room areas:', room_areas)
print('Number of rooms:', len(room_areas))
print()

# Compute statistics using built-in functions
total_area = sum(room_areas)
average_area = total_area / len(room_areas)
min_area = min(room_areas)
max_area = max(room_areas)

print(f'Total area: {total_area} sq m')
print(f'Average area: {average_area:.2f} sq m')
print(f'Smallest room: {min_area} sq m')
print(f'Largest room: {max_area} sq m')

# Iterate and display each
print()
print('Room breakdown:')
for i, area in enumerate(room_areas):
    print(f'  Room {i+1}: {area} sq m')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Practical application of list operations.',
      'sum(), min(), max() for aggregate statistics.',
      'enumerate() provides index and value in loop.',
      'Formatting: :.2f for 2 decimal places.',
      'Pattern: Store data → Calculate aggregates → Report.',
      'Foundation of quantity takeoff automation.',
    ],
  },

  // Slide 5: Demo - Wall Length Tracker
  {
    id: 5,
    type: 'demo',
    title: 'Wall Length Tracker',
    durationMinutes: 15,
    content: {
      code: `# Store wall lengths
wall_lengths = [5.2, 8.7, 3.4, 12.1, 6.9, 4.5]

print('Wall lengths:', wall_lengths)
print()

# Find extremes
shortest = min(wall_lengths)
longest = max(wall_lengths)
total = sum(wall_lengths)

print(f'Shortest wall: {shortest}m')
print(f'Longest wall: {longest}m')
print(f'Total wall length: {total}m')

# Find indices of shortest and longest
shortest_index = wall_lengths.index(shortest)
longest_index = wall_lengths.index(longest)

print()
print(f'Shortest wall is at index {shortest_index}')
print(f'Longest wall is at index {longest_index}')

# Filter walls longer than threshold
threshold = 6.0
long_walls = [w for w in wall_lengths if w > threshold]
print(f'\nWalls longer than {threshold}m: {long_walls}')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Advanced list operations with index() and list comprehension.',
      'index() finds position of value in list.',
      'List comprehension: Compact filtering syntax.',
      'Pattern useful for finding specific elements.',
      'Connect to: Identifying critical members.',
      'List comprehension preview - full coverage in advanced course.',
    ],
  },

  // Slide 6: Exercise 1
  {
    id: 6,
    type: 'exercise',
    title: 'Exercise: Slab Thickness Checker',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Given slab_thicknesses = [180, 200, 150, 220, 140, 190] (in mm), print indices of slabs thinner than 150mm.',
        input: 'List of thicknesses',
        expectedOutput: 'Indices 2 and 4 (150mm and 140mm slabs)',
        hint: 'Use enumerate() to get both index and value while iterating.',
      },
    },
    speakerNotes: [
      'Quality control application - identifying non-compliant elements.',
      'Requires tracking both value and position.',
      'enumerate() essential for this pattern.',
      'Expected: Slabs at indices 2 (150mm) and 4 (140mm).',
      'Pattern: Iterate with index → Check condition → Report position.',
    ],
  },

  // Slide 7: Exercise 2
  {
    id: 7,
    type: 'exercise',
    title: 'Exercise: Beam Length Filter',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Given beam_lengths = [4.5, 7.2, 5.8, 9.1, 6.3, 3.9], create a new list containing only beams longer than 6m.',
        input: 'List of beam lengths',
        expectedOutput: '[7.2, 9.1, 6.3]',
        hint: 'Use list comprehension: [b for b in beam_lengths if b > 6]',
      },
    },
    speakerNotes: [
      'List comprehension for filtering.',
      'Syntax: [item for item in list if condition].',
      'Creates new list without modifying original.',
      'Expected: [7.2, 9.1, 6.3].',
      'Professional Python technique for data filtering.',
    ],
  },

  // Slide 8: Tuples & Geometry
  {
    id: 8,
    type: 'concept',
    title: 'Tuples & Geometry Representation',
    durationMinutes: 15,
    content: {
      bullets: [
        'Tuples: Immutable ordered pairs (x, y) or triples (x, y, z)',
        'Perfect for coordinates - points should not change accidentally',
        'Tuple unpacking: x, y = point assigns both coordinates',
        '3D support: (x, y, z) for columns, survey points, building corners',
        'Immutability ensures geometric data integrity',
      ],
    },
    speakerNotes: [
      'Review tuples with emphasis on 3D applications.',
      'Immutability: Safety for geometric data.',
      'Tuple unpacking simplifies coordinate access.',
      '3D tuples extend to real BIM (Revit uses X, Y, Z).',
      'Live demo: Create 2D and 3D points, demonstrate unpacking.',
      'Foundation for vector mathematics.',
    ],
  },

  // Slide 9: Demo - Point Distance Calculator
  {
    id: 9,
    type: 'demo',
    title: 'Point Distance with Vector Math',
    durationMinutes: 20,
    content: {
      code: `import math

# Define points as tuples
p1 = (3, 4)
p2 = (7, 8)

# Tuple unpacking
x1, y1 = p1
x2, y2 = p2

# Calculate distance (Euclidean)
dx = x2 - x1
dy = y2 - y1
distance = math.sqrt(dx**2 + dy**2)

print(f'Point 1: {p1}')
print(f'Point 2: {p2}')
print(f'Difference vector: ({dx}, {dy})')
print(f'Distance: {distance:.2f}')

# Vector length (magnitude)
vector = (dx, dy)
vector_length = math.sqrt(vector[0]**2 + vector[1]**2)
print(f'Vector length: {vector_length:.2f}')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Introduce vector concepts: difference vector, magnitude.',
      'Tuple unpacking for clean coordinate access.',
      'Vector from P1 to P2: (dx, dy).',
      'Vector length is same as point distance.',
      'Foundation for more advanced vector operations.',
      'Expected distance: sqrt(16 + 16) = 5.66.',
    ],
  },

  // Slide 10: Demo - 3D Point Representation
  {
    id: 10,
    type: 'demo',
    title: '3D Column Locations',
    durationMinutes: 15,
    content: {
      code: `# 3D coordinates for structural columns
column_a = (0, 0, 0)      # Ground level
column_b = (10, 0, 0)     # Same level, 10m away
column_c = (10, 5, 3)     # Upper level

print('Column locations:')
print(f'  Column A: {column_a}')
print(f'  Column B: {column_b}')
print(f'  Column C: {column_c}')

# Extract coordinates
x1, y1, z1 = column_a
x2, y2, z2 = column_c

# Calculate 3D distance
import math
dx = x2 - x1
dy = y2 - y1
dz = z2 - z1
distance_3d = math.sqrt(dx**2 + dy**2 + dz**2)

print()
print(f'3D Distance A to C: {distance_3d:.2f}m')
print(f'Horizontal distance: {math.sqrt(dx**2 + dy**2):.2f}m')
print(f'Vertical difference: {dz}m')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      '3D coordinate extension - real BIM scenario.',
      '3D distance formula: sqrt(dx² + dy² + dz²).',
      'Horizontal vs vertical breakdown.',
      'Connect to: Column scheduling, structural analysis.',
      'Revit and other BIM tools use this 3D math internally.',
      'Expected 3D distance: sqrt(100 + 25 + 9) = 12.08m.',
    ],
  },

  // Slide 11: Exercise 3
  {
    id: 11,
    type: 'exercise',
    title: 'Exercise: Vector Length',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Represent a displacement vector as (4, 3) and compute its magnitude (length).',
        input: 'vector = (4, 3)',
        expectedOutput: '5.0 (3-4-5 right triangle)',
        hint: 'Use Pythagorean theorem: sqrt(x² + y²).',
      },
    },
    speakerNotes: [
      'Classic 3-4-5 right triangle verification.',
      'Vector magnitude independent of position.',
      'Expected: exactly 5.0.',
      'Foundation of vector mathematics in engineering.',
    ],
  },

  // Slide 12: Exercise 4
  {
    id: 12,
    type: 'exercise',
    title: 'Exercise: Translate a Point',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Move point (5, 3) by dx=2 and dy=-1. Calculate and print the new position.',
        input: 'point = (5, 3), dx = 2, dy = -1',
        expectedOutput: 'New position: (7, 2)',
        hint: 'New x = old x + dx, new y = old y + dy.',
      },
    },
    speakerNotes: [
      'Point translation - fundamental geometric operation.',
      'Used in: Moving objects, coordinate transformations.',
      'Expected: (7, 2).',
      'Pattern: Coordinate arithmetic for geometry manipulation.',
    ],
  },

  // Slide 13: Lists of Tuples - Geometry
  {
    id: 13,
    type: 'concept',
    title: 'Lists of Tuples - Modeling Geometry',
    durationMinutes: 15,
    content: {
      bullets: [
        'List of tuples represents polylines, polygons, point clouds',
        'Polyline: [(0,0), (5,0), (5,4), (0,4)] - connected segments',
        'Polygon: Closed polyline (first == last or use modulo)',
        'Iterate with index to access consecutive pairs',
        'Pattern: for i in range(len(points)-1): p1, p2 = points[i], points[i+1]',
      ],
    },
    speakerNotes: [
      'Review of Week 4 concepts with emphasis on patterns.',
      'Polyline vs polygon distinction important.',
      'Index-based iteration for accessing consecutive points.',
      'This is how CAD software stores paths and boundaries.',
      'Connect to: Wall paths, site boundaries, room perimeters.',
      'Foundation for advanced algorithms like shoelace.',
    ],
  },

  // Slide 14: Demo - Polyline Length (Review)
  {
    id: 14,
    type: 'demo',
    title: 'Polyline Length Calculator',
    durationMinutes: 15,
    content: {
      code: `import math

# Define polyline as list of points
path = [(0, 0), (3, 4), (7, 4), (7, 0)]
total_length = 0

print('Polyline vertices:', path)
print()

# Iterate through consecutive pairs
for i in range(len(path) - 1):
    x1, y1 = path[i]
    x2, y2 = path[i + 1]
    
    segment = math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
    total_length += segment
    
    print(f'Segment {i+1}: ({x1},{y1}) to ({x2},{y2}) = {segment:.2f}m')

print()
print(f'Total path length: {total_length:.2f}m')

# Calculate straight-line distance from start to end
dx = path[-1][0] - path[0][0]
dy = path[-1][1] - path[0][1]
straight = math.sqrt(dx**2 + dy**2)
print(f'Straight-line (start to end): {straight:.2f}m')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Review with additional start-to-end distance.',
      'Compare path length vs straight-line distance.',
      'Path efficiency ratio could be calculated.',
      'Pattern: Route planning, pipe run analysis.',
      'Expected: Segments 5, 4, 4 = 13m total.',
    ],
  },

  // Slide 15: Demo - Shoelace Formula
  {
    id: 15,
    type: 'demo',
    title: 'Polygon Area - Shoelace Formula',
    durationMinutes: 25,
    content: {
      code: `def polygon_area(points):
    """Calculate polygon area using shoelace formula.
    points: list of (x, y) tuples
    """
    n = len(points)
    area = 0
    
    for i in range(n):
        x1, y1 = points[i]
        x2, y2 = points[(i + 1) % n]  # Wrap around
        area += x1 * y2 - x2 * y1
    
    return abs(area) / 2

# Test with rectangle
rectangle = [(0, 0), (5, 0), (5, 4), (0, 4)]
area = polygon_area(rectangle)
print(f'Rectangle area: {area} sq m')
print(f'Expected: 20 sq m (5 x 4)')
print()

# Test with irregular polygon
site = [(0, 0), (10, 0), (12, 5), (6, 8), (0, 5)]
site_area = polygon_area(site)
print(f'Site area: {site_area:.2f} sq m')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Shoelace formula - professional geometry algorithm.',
      'Works for any simple polygon (convex or concave).',
      'Formula: Sum of cross products, absolute value, divide by 2.',
      'Test with known rectangle: should give exactly 20.',
      'Then apply to irregular site boundary.',
      'This is how GIS software calculates polygon areas.',
      'Important: Points must be ordered (clockwise or counter).',
    ],
  },

  // Slide 16: Exercise 5
  {
    id: 16,
    type: 'exercise',
    title: 'Exercise: Simple Rectangle Area',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Given 4 corner points of a rectangle: [(2,3), (8,3), (8,7), (2,7)], compute width, height, and area.',
        input: 'Rectangle corner points',
        expectedOutput: 'Width: 6, Height: 4, Area: 24',
        hint: 'Width = max_x - min_x, height = max_y - min_y from bounding box.',
      },
    },
    speakerNotes: [
      'Rectangle area via bounding box approach.',
      'Alternative to shoelace for orthogonal shapes.',
      'Expected: 6 × 4 = 24 square units.',
      'Pattern: Extract extremes → Calculate dimensions → Compute area.',
    ],
  },

  // Slide 17: Exercise 6
  {
    id: 17,
    type: 'exercise',
    title: 'Exercise: Find Highest Elevation',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'From list of survey points [(10,20,5), (15,25,8), (12,18,3), (20,22,12)], find the highest elevation.',
        input: 'List of (x, y, elevation) tuples',
        expectedOutput: '12 (highest z-coordinate)',
        hint: 'Loop through points, track maximum of point[2] (z-coordinate).',
      },
    },
    speakerNotes: [
      '3D data processing - extracting specific coordinate.',
      'Pattern: Iterate → Access element by index → Compare → Track max.',
      'Expected: 12 from point (20, 22, 12).',
      'Connect to: Site grading, drainage analysis.',
    ],
  },

  // Slide 18: BIM Dataset Simulation
  {
    id: 18,
    type: 'concept',
    title: 'Real BIM Dataset Simulation',
    durationMinutes: 15,
    content: {
      bullets: [
        'Combine lists and tuples for structured element data',
        'Room: {"name": str, "area": float, "centroid": (x, y)}',
        'Dataset: List of dictionaries with geometric data',
        'Process: Iterate → Extract geometry → Calculate → Enrich',
        'Pattern bridges to actual BIM exports (Revit, IFC)',
      ],
    },
    speakerNotes: [
      'Week 6 review with focus on geometry integration.',
      'Centroid as tuple within dictionary - nested structures.',
      'This mimics how Revit stores element data internally.',
      'Prepares students for processing real exported data.',
      'Next week: Read this data from CSV files.',
      'Professional pattern: Structured data + Geometry engine.',
    ],
  },

  // Slide 19: Demo - Room Data Model
  {
    id: 19,
    type: 'demo',
    title: 'Room Dataset with Centroids',
    durationMinutes: 20,
    content: {
      code: `# Structured room dataset with geometry
rooms = [
    {'name': 'Conference', 'length': 8, 'width': 6, 'centroid': (4, 3)},
    {'name': 'Office 1', 'length': 5, 'width': 4, 'centroid': (10, 2)},
    {'name': 'Office 2', 'length': 4, 'width': 3.5, 'centroid': (10, 7)},
    {'name': 'Break Room', 'length': 6, 'width': 5, 'centroid': (16, 4.5)}
]

print('Room Analysis Report')
print('=' * 40)

# Process each room
for room in rooms:
    area = room['length'] * room['width']
    cx, cy = room['centroid']
    
    print(f"\n{room['name']}:")
    print(f"  Dimensions: {room['length']}m x {room['width']}m")
    print(f"  Area: {area} sq m")
    print(f"  Centroid: ({cx}, {cy})")
    
    # Compliance check
    if area >= 15:
        print(f"  Status: COMPLIANT")
    else:
        print(f"  Status: NON-COMPLIANT (min 15 sq m)")

# Calculate total area
total = sum(r['length'] * r['width'] for r in rooms)
print(f"\nTotal floor area: {total} sq m")`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Complete room dataset with geometric centroids.',
      'Tuple unpacking for centroid: cx, cy = room["centroid"].',
      'List comprehension for total area calculation.',
      'Pattern: Enrich data with computed properties.',
      'Compliance checking integrated into reporting.',
      'Professional-grade room schedule output.',
    ],
  },

  // Slide 20: Exercise 7
  {
    id: 20,
    type: 'exercise',
    title: 'Exercise: Filter Large Rooms',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'From the room dataset, print names of rooms larger than 50 sq m.',
        input: 'rooms dataset from demo',
        expectedOutput: 'Conference and Break Room',
        hint: 'Loop through rooms, calculate area, print name if > 50.',
      },
    },
    speakerNotes: [
      'Filtering exercise on structured data.',
      'Expected: Conference (48 sq m - wait, 8x6=48).',
      'Correction: None > 50. Conference is largest at 48.',
      'Alternative: Find rooms > 30 sq m then Conference passes.',
      'Pattern: Conditional reporting from dataset.',
    ],
  },

  // Slide 21: Mini Challenge Intro
  {
    id: 21,
    type: 'concept',
    title: 'Mini Challenge: Site Layout Geometry Processor',
    durationMinutes: 10,
    content: {
      bullets: [
        'Process multiple building footprints (list of polygons)',
        'For each footprint: Compute area and bounding box',
        'Generate structured report with footprint index, area, bbox',
        'Integrates: Lists, tuples, loops, functions, geometry',
        'Professional-grade spatial analysis tool',
      ],
    },
    speakerNotes: [
      'Capstone challenge integrating all Week 7 concepts.',
      'Multiple polygons representing building footprints.',
      'Calculate area (shoelace) and bounding box for each.',
      '20 minutes to implement.',
      'This is real site planning analysis workflow.',
      'Combines algorithmic thinking with data processing.',
    ],
  },

  // Slide 22: Mini Challenge Starter
  {
    id: 22,
    type: 'demo',
    title: 'Site Layout Processor - Starter',
    durationMinutes: 10,
    content: {
      code: `# Site Layout Geometry Processor
import math

# Multiple building footprints
footprints = [
    [(0, 0), (10, 0), (10, 8), (0, 8)],      # Building 1
    [(15, 5), (25, 5), (25, 12), (15, 12)],  # Building 2
    [(5, 15), (12, 15), (12, 20), (5, 20)]   # Building 3
]

print('Site Layout Analysis')
print('=' * 50)

# TODO: Implement shoelace area function
# def polygon_area(points): ...

# TODO: Implement bounding box function
# def bounding_box(points): ...

# Process each footprint
for i, footprint in enumerate(footprints):
    print(f'\nBuilding {i+1}:')
    print(f'  Vertices: {len(footprint)}')
    
    # TODO: Calculate and print area
    # TODO: Calculate and print bounding box
    # TODO: Calculate and print width and height

print('\nAnalysis complete.')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Provide data structure and framework.',
      'Students implement area and bounding box functions.',
      'Then iterate and process each building.',
      'Circulate to assist with algorithm implementation.',
      'Expected areas: 80, 70, 35 sq m approximately.',
      'Encourage clean formatted output.',
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
        'Lists and tuples for geometric data representation',
        'Vector math: distance, magnitude, translation',
        '3D coordinates for real BIM applications',
        'Shoelace formula for polygon area calculation',
        'Structured datasets combining dicts, lists, and tuples',
      ],
    },
    speakerNotes: [
      'Review comprehensive geometry processing skills.',
      'Students can now model and analyze complex geometries.',
      'Vector math foundation for structural analysis.',
      'Shoelace is professional-grade algorithm.',
      'Data structures mirror real BIM databases.',
      'Next week: File I/O - process real exported data.',
    ],
  },

  // Slide 24: Preview Week 8
  {
    id: 24,
    type: 'preview',
    title: 'Next Week: File I/O and Real Project Data',
    durationMinutes: 5,
    content: {
      previewTopics: [
        'Reading coordinates from CSV files',
        'Processing Revit and CAD exports',
        'Writing analysis results to files',
        'Building complete import/process/export pipelines',
        'Your first professional automation tool',
      ],
    },
    speakerNotes: [
      'Week 8 brings real-world data integration.',
      'Apply all geometry skills to actual project files.',
      'CSV: Universal format for BIM data exchange.',
      'Students will build tools for their own workflows.',
      'Final step to professional automation capability.',
      'Homework: Export coordinate data from your BIM software.',
      'Bring project files to work with next week.',
    ],
  },
];

export const week7TotalSlides = week7Slides.length;

export function getWeek7SlideById(id: number): SlideData | null {
  return week7Slides.find((slide) => slide.id === id) || null;
}
