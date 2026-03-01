import { SlideData } from './types';

export const week9Slides: SlideData[] = [
  // Slide 1: Opening
  {
    id: 1,
    type: 'opening',
    title: 'Functions & Modular Geometry Processing',
    durationMinutes: 5,
    content: {
      subtitle: 'Week 9: Building Reusable Geometry Libraries',
      bullets: [
        'Understand why functions are important',
        'Define and call functions',
        'Use parameters and return values',
        'Break geometry problems into reusable components',
        'Refactor large scripts into modular structure',
      ],
    },
    speakerNotes: [
      'Welcome to Week 9 - we are diving deep into functions and modularity.',
      'So far we have written many scripts with repeated code.',
      'Today: Transform scripts into reusable libraries.',
      'Functions are the building blocks of professional software.',
      'By the end: You will have a personal geometry utility library.',
      'Ask: "What code have you copy-pasted that should be a function?"',
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
        'Why Functions Matter (30 min)',
        'Functions with Geometry - Points & Vectors (45 min)',
        'Polygon & Bounding Box Utilities (50 min)',
        'Modular BIM Dataset Processor (35 min)',
        'Mini Challenge: Geometry Utility Library (20 min)',
      ],
    },
    speakerNotes: [
      'Five modules focused on functions and modularity.',
      'Progress from simple functions to complex geometry libraries.',
      'Emphasis on reusable code and clean architecture.',
      'Mini challenge: Build complete geometry toolkit.',
    ],
  },

  // Slide 3: Why Functions Matter
  {
    id: 3,
    type: 'concept',
    title: 'Why Functions Matter',
    durationMinutes: 15,
    content: {
      bullets: [
        'DRY Principle: Do not Repeat Yourself',
        'Write once, use many times - no copy-paste',
        'Easier maintenance - fix bugs in one place',
        'Readability - named operations describe intent',
        'Testing - verify small pieces independently',
      ],
    },
    speakerNotes: [
      'Functions solve the copy-paste problem.',
      'Real example: Distance formula written 10+ times so far.',
      'Bug found? Fix in one place, not 10.',
      'Code becomes self-documenting with good names.',
      'Small functions are easier to test and debug.',
      'Professional code is modular and reusable.',
    ],
  },

  // Slide 4: Function Syntax Review
  {
    id: 4,
    type: 'concept',
    title: 'Function Syntax: def, Parameters, Return',
    durationMinutes: 15,
    content: {
      bullets: [
        'def function_name(parameters): defines the function',
        'Parameters are inputs - variables that hold arguments',
        'Function body is indented code block',
        'return statement sends output back to caller',
        'Call with: function_name(arguments)',
      ],
    },
    speakerNotes: [
      'Review Week 5 concepts with emphasis on mastery.',
      'def, parameters, body, return - four components.',
      'Parameters are placeholders, arguments are actual values.',
      'return exits immediately and sends back value.',
      'Functions do not run until called.',
      'Scope: Variables inside function stay inside (usually).',
    ],
  },

  // Slide 5: Demo - Simple Area Function
  {
    id: 5,
    type: 'demo',
    title: 'Rectangle Area Function',
    durationMinutes: 15,
    content: {
      code: `# Define the function
def rectangle_area(width, height):
    """Calculate rectangle area from dimensions.
    
    Args:
        width: horizontal dimension
        height: vertical dimension
    
    Returns:
        Area as float
    """
    area = width * height
    return area

# Test with various inputs
print(f'Room 1: {rectangle_area(5, 4)} sq m')
print(f'Room 2: {rectangle_area(8, 6)} sq m')
print(f'Room 3: {rectangle_area(3.5, 4.2)} sq m')

# Use in calculations
total = rectangle_area(5, 4) + rectangle_area(8, 6)
print(f'Total area: {total} sq m')

# Direct use in expression
avg = (rectangle_area(10, 5) + rectangle_area(8, 4)) / 2
print(f'Average room area: {avg} sq m')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Complete function with docstring documentation.',
      'Multiple test calls show reusability.',
      'Can use return value directly in expressions.',
      'Function abstracts the multiplication formula.',
      'User does not need to remember width * height.',
      'Just call rectangle_area() with dimensions.',
    ],
  },

  // Slide 6: Exercise 1
  {
    id: 6,
    type: 'exercise',
    title: 'Exercise: Circle Area Function',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Write a function circle_area(radius) that returns the area of a circle (πr²). Use math.pi.',
        input: 'radius = 5',
        expectedOutput: '78.54 (approximately)',
        hint: 'Import math, return math.pi * radius ** 2',
      },
    },
    speakerNotes: [
      'Simple geometry function practice.',
      'Requires importing math module.',
      'Test with various radii.',
      'Expected: ~78.54 for radius 5.',
    ],
  },

  // Slide 7: Exercise 2
  {
    id: 7,
    type: 'exercise',
    title: 'Exercise: Slab Volume Function',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Create slab_volume(length, width, thickness) function. Calculate and return concrete volume.',
        input: 'slab_volume(10, 8, 0.2)',
        expectedOutput: '16.0 cubic meters',
        hint: 'Multiply all three dimensions together.',
      },
    },
    speakerNotes: [
      '3D volume calculation function.',
      'Practical quantity takeoff utility.',
      'Expected: 10 * 8 * 0.2 = 16.0.',
      'Pattern: Multiple parameters, single return value.',
    ],
  },

  // Slide 8: Exercise 3
  {
    id: 8,
    type: 'exercise',
    title: 'Exercise: Unit Conversion Function',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Write mm_to_m(value) that converts millimeters to meters. Test with 5400.',
        input: 'mm_to_m(5400)',
        expectedOutput: '5.4',
        hint: 'Divide by 1000.',
      },
    },
    speakerNotes: [
      'Utility function for common conversion.',
      'Simple mathematical operation.',
      'Used throughout BIM workflows.',
      'Expected: 5.4 meters.',
    ],
  },

  // Slide 9: Functions with Geometry
  {
    id: 9,
    type: 'concept',
    title: 'Functions with Geometry - Points & Vectors',
    durationMinutes: 15,
    content: {
      bullets: [
        'Pass tuples as parameters: distance(p1, p2)',
        'Return computed values or new tuples',
        'Encapsulate mathematical formulas',
        'Hide complexity, expose simple interface',
        'Build geometry toolkit function by function',
      ],
    },
    speakerNotes: [
      'Geometry functions work with coordinate tuples.',
      'Input: Points as (x, y) tuples.',
      'Output: Distance (float) or new point (tuple).',
      'User does not see math.sqrt, just calls distance().',
      'Each function is a tool in your geometry toolkit.',
      'Compose functions to solve complex problems.',
    ],
  },

  // Slide 10: Demo - Distance Function
  {
    id: 10,
    type: 'demo',
    title: 'Distance Between Points Function',
    durationMinutes: 20,
    content: {
      code: `import math

def distance(p1, p2):
    """Calculate Euclidean distance between two points.
    
    Args:
        p1: tuple of (x, y) coordinates
        p2: tuple of (x, y) coordinates
    
    Returns:
        Distance as float
    """
    x1, y1 = p1
    x2, y2 = p2
    return math.sqrt((x2 - x1)**2 + (y2 - y1)**2)

# Test with grid points
column_a = (0, 0)
column_b = (5, 0)
column_c = (5, 12)

print(f'A to B: {distance(column_a, column_b)}m')
print(f'B to C: {distance(column_b, column_c)}m')

# Use in loops
points = [(0, 0), (3, 4), (6, 0)]
for i in range(len(points) - 1):
    d = distance(points[i], points[i + 1])
    print(f'Segment {i+1}: {d:.2f}m')

# Verify with known triangle
print(f'3-4-5 triangle hypotenuse: {distance((0, 0), (3, 4))}m')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Professional distance function with docstring.',
      'Tuple unpacking for clean coordinate access.',
      'Use in various contexts: direct calls, loops.',
      'Verify with known 3-4-5 triangle (should be 5).',
      'Now reusable everywhere distance needed.',
      'No more rewriting this formula.',
    ],
  },

  // Slide 11: Demo - Midpoint Function
  {
    id: 11,
    type: 'demo',
    title: 'Midpoint Function',
    durationMinutes: 15,
    content: {
      code: `def midpoint(p1, p2):
    """Calculate midpoint between two points.
    
    Args:
        p1: tuple of (x, y)
        p2: tuple of (x, y)
    
    Returns:
        Midpoint as (x, y) tuple
    """
    x1, y1 = p1
    x2, y2 = p2
    return ((x1 + x2) / 2, (y1 + y2) / 2)

# Test midpoint calculation
p1 = (0, 0)
p2 = (10, 6)
mid = midpoint(p1, p2)
print(f'Midpoint of {p1} and {p2}: {mid}')

# Use for creating grid lines
grid_start = (0, 0)
grid_end = (20, 0)
center = midpoint(grid_start, grid_end)
print(f'Grid center: {center}')

# Chain with distance
p3 = (20, 0)
dist_to_mid = distance(p1, midpoint(p1, p3))
print(f'Distance to midpoint: {dist_to_mid}m')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Function returning a tuple (not just float).',
      'Useful for: Grid lines, center points, divisions.',
      'Can chain functions: distance(p1, midpoint(p1, p2)).',
      'Function composition builds complex operations.',
      'Each function simple, combination powerful.',
    ],
  },

  // Slide 12: Exercise 4
  {
    id: 12,
    type: 'exercise',
    title: 'Exercise: Vector Magnitude Function',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Write vector_length(v) where v is a vector tuple (x, y). Return magnitude sqrt(x² + y²).',
        input: 'vector_length((3, 4))',
        expectedOutput: '5.0',
        hint: 'Unpack or use indices: v[0], v[1]. Return math.sqrt(v[0]**2 + v[1]**2).',
      },
    },
    speakerNotes: [
      'Vector operation function.',
      'Same calculation as point distance from origin.',
      'Expected: 5.0 for (3, 4).',
      'Pattern: Single tuple parameter.',
    ],
  },

  // Slide 13: Exercise 5
  {
    id: 13,
    type: 'exercise',
    title: 'Exercise: Translate Point Function',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Write translate(point, dx, dy) that returns new point moved by dx and dy.',
        input: 'translate((5, 3), 2, -1)',
        expectedOutput: '(7, 2)',
        hint: 'Return (point[0] + dx, point[1] + dy)',
      },
    },
    speakerNotes: [
      'Point transformation function.',
      'Returns new point tuple.',
      'Expected: (7, 2).',
      'Pattern: Transformation functions.',
    ],
  },

  // Slide 14: Exercise 6
  {
    id: 14,
    type: 'exercise',
    title: 'Exercise: 3D Distance Function',
    durationMinutes: 15,
    content: {
      exercise: {
        problem: 'Extend distance function to 3D. distance_3d(p1, p2) with z-coordinate. Formula: sqrt(dx² + dy² + dz²).',
        input: 'distance_3d((0,0,0), (3,4,12))',
        expectedOutput: '13.0',
        hint: 'Unpack 3 values, include dz in calculation.',
      },
    },
    speakerNotes: [
      'Extension to 3D coordinates.',
      'Same pattern, extra coordinate.',
      '3-4-12 triangle: 9+16+144=169, sqrt=13.',
      'Pattern: Parameter expansion.',
    ],
  },

  // Slide 15: Polygon Utilities Concept
  {
    id: 15,
    type: 'concept',
    title: 'Polygon & Bounding Box Utilities',
    durationMinutes: 15,
    content: {
      bullets: [
        'Encapsulate shoelace formula in reusable function',
        'bounding_box(points) returns extremes',
        'polyline_length(points) sums segment distances',
        'Compose utilities for complex analysis',
        'Build professional geometry library',
      ],
    },
    speakerNotes: [
      'Advanced geometry as reusable functions.',
      'Shoelace: Complex algorithm, simple interface.',
      'Bounding box: Min/max extraction as function.',
      'Each utility tested independently.',
      'Library grows with each new function.',
      'Professional pattern: Encapsulate complexity.',
    ],
  },

  // Slide 16: Demo - Polygon Area Function
  {
    id: 16,
    type: 'demo',
    title: 'Polygon Area Function (Shoelace)',
    durationMinutes: 25,
    content: {
      code: `def polygon_area(points):
    """Calculate polygon area using shoelace formula.
    
    Args:
        points: list of (x, y) tuples forming polygon
    
    Returns:
        Area as float (absolute value)
    """
    n = len(points)
    area = 0
    
    for i in range(n):
        x1, y1 = points[i]
        x2, y2 = points[(i + 1) % n]
        area += x1 * y2 - x2 * y1
    
    return abs(area) / 2

# Test functions
rectangle = [(0, 0), (10, 0), (10, 5), (0, 5)]
print(f'Rectangle area: {polygon_area(rectangle)} sq m')

triangle = [(0, 0), (6, 0), (3, 4)]
print(f'Triangle area: {polygon_area(triangle)} sq m')

site = [(0, 0), (20, 0), (22, 8), (15, 15), (5, 12)]
print(f'Site area: {polygon_area(site):.2f} sq m')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Complete shoelace implementation as function.',
      'Complex algorithm hidden inside simple interface.',
      'Works for any simple polygon.',
      'Test with rectangle (known area), triangle, irregular.',
      'Function reusable for any polygon dataset.',
      'No need to understand shoelace to use it.',
    ],
  },

  // Slide 17: Demo - Bounding Box Function
  {
    id: 17,
    type: 'demo',
    title: 'Bounding Box Function',
    durationMinutes: 20,
    content: {
      code: `def bounding_box(points):
    """Calculate bounding box from points.
    
    Args:
        points: list of (x, y) tuples
    
    Returns:
        (min_x, min_y, max_x, max_y) tuple
    """
    xs = [p[0] for p in points]
    ys = [p[1] for p in points]
    
    return (min(xs), min(ys), max(xs), max(ys))

# Test with building footprint
footprint = [(5, 3), (15, 3), (18, 12), (10, 15), (2, 10)]
min_x, min_y, max_x, max_y = bounding_box(footprint)

print(f'Min corner: ({min_x}, {min_y})')
print(f'Max corner: ({max_x}, {max_y})')

# Calculate dimensions
width = max_x - min_x
height = max_y - min_y
print(f'Bounding box: {width}m x {height}m')
print(f'Box area: {width * height} sq m')

# Compare to actual footprint area
print(f'Footprint area: {polygon_area(footprint):.2f} sq m')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Clean bounding box extraction function.',
      'List comprehensions extract coordinate lists.',
      'Returns 4 values as tuple.',
      'Unpack to variables for easy use.',
      'Calculate derived metrics (width, height, area).',
      'Compare bounding box area to actual polygon area.',
    ],
  },

  // Slide 18: Exercise 7
  {
    id: 18,
    type: 'exercise',
    title: 'Exercise: Polyline Length Function',
    durationMinutes: 15,
    content: {
      exercise: {
        problem: 'Write polyline_length(points) that sums distance between consecutive points. Use your distance() function.',
        input: 'polyline_length([(0,0), (3,4), (6,0)])',
        expectedOutput: '11.0 (5 + 6)',
        hint: 'Loop through range(len(points)-1), sum distance between consecutive pairs.',
      },
    },
    speakerNotes: [
      'Reuse distance() function inside new function.',
      'Function composition: Build on existing tools.',
      'Expected: 5 (3-4-5 triangle) + 6 = 11.',
      'Pattern: Higher-level functions use lower-level.',
    ],
  },

  // Slide 19: Exercise 8
  {
    id: 19,
    type: 'exercise',
    title: 'Exercise: Centroid Approximation Function',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Write centroid_rectangle(points) that returns approximate centroid for rectangle. Use bounding box center.',
        input: 'Rectangle corner points',
        expectedOutput: 'Center point tuple',
        hint: 'Call bounding_box(), then return ((min_x + max_x)/2, (min_y + max_y)/2).',
      },
    },
    speakerNotes: [
      'Function composition: Use bounding_box() result.',
      'Calculate center from extremes.',
      'Pattern: Functions calling functions.',
      'Build complex analysis from simple pieces.',
    ],
  },

  // Slide 20: Modular BIM Processor Concept
  {
    id: 20,
    type: 'concept',
    title: 'Modular BIM Dataset Processor',
    durationMinutes: 15,
    content: {
      bullets: [
        'Break complex scripts into small functions',
        'Separate geometry logic from reporting logic',
        'Each function has single responsibility',
        'Compose functions for complex workflows',
        'Clean code: Easy to read, test, and maintain',
      ],
    },
    speakerNotes: [
      'Professional code organization principles.',
      'Single Responsibility: Each function does one thing.',
        'Separation of Concerns: Geometry vs Reporting.',
      'Compose: Small functions combine for complex tasks.',
      'Clean code is maintainable code.',
      'Future you (and colleagues) will thank you.',
    ],
  },

  // Slide 21: Demo - Room Area Processor
  {
    id: 21,
    type: 'demo',
    title: 'Modular Room Processor',
    durationMinutes: 20,
    content: {
      code: `def calculate_room_area(room):
    """Calculate area from room dimensions."""
    return room['length'] * room['width']

def total_area(rooms):
    """Sum areas of all rooms."""
    return sum(calculate_room_area(r) for r in rooms)

def find_large_rooms(rooms, min_area):
    """Filter rooms above threshold."""
    return [r for r in rooms if calculate_room_area(r) > min_area]

def print_report(rooms):
    """Generate formatted report."""
    print('ROOM ANALYSIS REPORT')
    print('=' * 40)
    for room in rooms:
        area = calculate_room_area(room)
        status = 'OK' if area > 15 else 'SMALL'
        print(f"{room['name']}: {area} sq m [{status}]")
    print(f'Total: {total_area(rooms)} sq m')

# Dataset
rooms = [
    {'name': 'Office 1', 'length': 5, 'width': 4},
    {'name': 'Office 2', 'length': 6, 'width': 5},
    {'name': 'Storage', 'length': 3, 'width': 2}
]

print_report(rooms)`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Modular design: Each function has one job.',
      'calculate_room_area: Geometry logic.',
      'total_area: Aggregation logic.',
      'find_large_rooms: Filtering logic.',
      'print_report: Presentation logic.',
      'Compose together in final report.',
      'Clean, testable, maintainable code.',
    ],
  },

  // Slide 22: Exercise 9
  {
    id: 22,
    type: 'exercise',
    title: 'Exercise: Tallest Column Function',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Write find_tallest(columns) that returns the column dictionary with maximum height.',
        input: 'List of column dicts with "height" key',
        expectedOutput: 'Column dict with max height',
        hint: 'Use max() with key=lambda c: c["height"] or track in loop.',
      },
    },
    speakerNotes: [
      'Finding extreme in dataset.',
      'Returns entire dictionary, not just value.',
      'Useful for: Reporting, highlighting, analysis.',
      'Pattern: Filter/Find functions.',
    ],
  },

  // Slide 23: Exercise 10
  {
    id: 23,
    type: 'exercise',
    title: 'Exercise: Minimum Area Checker',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Write check_min_area(rooms, min_value) that returns list of rooms below minimum.',
        input: 'Rooms dataset and threshold',
        expectedOutput: 'List of non-compliant rooms',
        hint: 'List comprehension with condition: [r for r in rooms if area < min_value]',
      },
    },
    speakerNotes: [
      'Compliance checking as reusable function.',
      'Parameterize threshold for flexibility.',
      'Returns list for further processing.',
      'Pattern: Validation functions.',
    ],
  },

  // Slide 24: Mini Challenge Intro
  {
    id: 24,
    type: 'concept',
    title: 'Mini Challenge: Geometry Utility Library',
    durationMinutes: 10,
    content: {
      bullets: [
        'Create reusable geometry library',
        'Include: distance, midpoint, polygon_area, bounding_box, polyline_length',
        'Use library to analyze multiple buildings',
        'Print professional report per building',
        'Demonstrates modular code organization',
      ],
    },
    speakerNotes: [
      'Final challenge: Build complete toolkit.',
      'Organize all functions in one file.',
      'Test each function independently.',
      'Apply to real building analysis.',
      '20 minutes to implement.',
      'This is professional reusable code.',
    ],
  },

  // Slide 25: Mini Challenge Starter
  {
    id: 25,
    type: 'demo',
    title: 'Geometry Library - Starter',
    durationMinutes: 10,
    content: {
      code: `# geometry_utils.py - Your reusable library
import math

def distance(p1, p2):
    """Calculate distance between points."""
    # TODO: Implement
    pass

def midpoint(p1, p2):
    """Calculate midpoint."""
    # TODO: Implement
    pass

def polygon_area(points):
    """Calculate polygon area using shoelace."""
    # TODO: Implement
    pass

def bounding_box(points):
    """Calculate bounding box."""
    # TODO: Implement
    pass

def polyline_length(points):
    """Calculate polyline length."""
    # TODO: Implement
    pass

# Test and use the library
if __name__ == '__main__':
    # Test each function
    # Then analyze buildings
    pass`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Provide skeleton library structure.',
      'Students implement all functions.',
      'Then test with building analysis.',
      'Encourage saving as separate file.',
      'Can import in other scripts.',
      'Professional module pattern.',
    ],
  },

  // Slide 26: Recap
  {
    id: 26,
    type: 'recap',
    title: 'What We Learned Today',
    durationMinutes: 5,
    content: {
      recapItems: [
        'Functions eliminate repetition (DRY principle)',
        'Geometry functions encapsulate mathematical formulas',
        'Functions can call other functions - composition',
        'Modular code separates concerns for clarity',
        'You have built a professional geometry utility library',
      ],
    },
    speakerNotes: [
      'Review function benefits and patterns.',
      'Students now have reusable toolkit.',
      'No more copy-pasting geometry code.',
      'Modular thinking applies to all programming.',
      'Encourage using library in real projects.',
      'Next week: Advanced topics and integration.',
    ],
  },

  // Slide 27: Preview Week 10
  {
    id: 27,
    type: 'preview',
    title: 'Next Week: Advanced Topics & Integration',
    durationMinutes: 5,
    content: {
      previewTopics: [
        'Error handling and validation',
        'Working with external data files',
        'Integrating with spreadsheet exports',
        'Building complete automation pipelines',
        'Best practices for production code',
      ],
    },
    speakerNotes: [
      'Week 10 brings real-world robustness.',
      'Error handling for professional tools.',
      'File I/O for project data integration.',
      'Complete automation workflows.',
      'Production-ready code practices.',
      'Continue building on your geometry library.',
    ],
  },
];

export const week9TotalSlides = week9Slides.length;

export function getWeek9SlideById(id: number): SlideData | null {
  return week9Slides.find((slide) => slide.id === id) || null;
}
