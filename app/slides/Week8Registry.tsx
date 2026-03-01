import { SlideData } from './types';

export const week8Slides: SlideData[] = [
  // Slide 1: Opening
  {
    id: 1,
    type: 'opening',
    title: 'Dictionaries & Structured BIM Data Modeling',
    durationMinutes: 5,
    content: {
      subtitle: 'Week 8: Mastering BIM Data Structures',
      bullets: [
        'Understand dictionaries (key-value data structures)',
        'Model BIM elements using dictionaries',
        'Combine lists and dictionaries for structured datasets',
        'Query and filter structured data',
        'Compute metrics from structured engineering data',
      ],
    },
    speakerNotes: [
      'Welcome to Week 8 - the final week of our course.',
      'We have built up from basic variables to complex data structures.',
      'Today: Master dictionaries and build complete BIM data models.',
      'This is the capstone data structure week.',
      'By the end: You will process complex building datasets like real BIM software.',
      'Ask: "What building data would you want to model and analyze?"',
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
        'Dictionary Fundamentals (40 min)',
        'Lists of Dictionaries - Structured Datasets (50 min)',
        'Geometry Inside Dictionaries (45 min)',
        'Mini BIM Processor (30 min)',
        'Mini Challenge: Multi-Building Analyzer (15 min)',
      ],
    },
    speakerNotes: [
      'Five intensive modules covering complete BIM data modeling.',
      'Review plus advanced applications of dictionaries.',
      'Mini challenge integrates all 8 weeks of learning.',
      'This is professional-grade data processing.',
    ],
  },

  // Slide 3: Dictionary Fundamentals Review
  {
    id: 3,
    type: 'concept',
    title: 'Dictionary Fundamentals',
    durationMinutes: 15,
    content: {
      bullets: [
        'Dictionaries store key-value pairs: {"key": value}',
        'Keys are strings (typically), values any type',
        'Access: dict["key"] retrieves the value',
        'Modify: dict["key"] = new_value updates',
        'Add: dict["new_key"] = value creates new entry',
      ],
    },
    speakerNotes: [
      'Review of Week 6 concepts with emphasis on mastery.',
      'Curly braces define dict, colons separate key:value.',
      'Keys must be unique within a dictionary.',
      'Values can be numbers, strings, tuples, lists, even other dicts.',
      'Perfect for representing objects with multiple properties.',
      'Live demo: Create, access, modify, add to dictionary.',
      'This is how element properties are stored in BIM.',
    ],
  },

  // Slide 4: Demo - Single Room Dictionary
  {
    id: 4,
    type: 'demo',
    title: 'Single Room Dictionary',
    durationMinutes: 20,
    content: {
      code: `# Create a room as structured data
room = {
    'name': 'Conference Room',
    'area': 48.5,
    'level': 'Level 2',
    'centroid': (12.5, 8.3),
    'height': 3.2
}

# Access values
print(f"Room: {room['name']}")
print(f"Area: {room['area']} sq m")
print(f"Location: {room['centroid']}")

# Modify after recalculation
room['area'] = 50.2  # Updated measurement
print(f"Updated area: {room['area']} sq m")

# Add new properties
room['occupancy'] = 20
room['fire_rating'] = '1HR'

print(f"Occupancy: {room['occupancy']} people")
print(f"Fire rating: {room['fire_rating']}")

# Print complete room data
print(f"\nComplete room record: {room}")`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Complete room as business object with properties.',
      'Access individual fields by key.',
      'Modify existing values (area updated).',
      'Add new properties dynamically (occupancy, fire_rating).',
      'Self-documenting: Keys describe what values mean.',
      'This mirrors Revit element parameter storage.',
      'Professional pattern: Rich data structures for entities.',
    ],
  },

  // Slide 5: Exercise 1
  {
    id: 5,
    type: 'exercise',
    title: 'Exercise: Column Properties',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Create a dictionary for a structural column with keys: height (3.5), material ("concrete"), location (tuple x=5, y=10, z=0).',
        input: 'Column specifications',
        expectedOutput: 'Dictionary with 3 keys including nested location tuple',
        hint: 'Location value should be a tuple: (5, 10, 0).',
      },
    },
    speakerNotes: [
      'First dictionary creation - structural element.',
      'Emphasize nested tuple for 3D location.',
      'Verify correct syntax for both dict and tuple.',
      'This is how structural elements are modeled.',
    ],
  },

  // Slide 6: Exercise 2
  {
    id: 6,
    type: 'exercise',
    title: 'Exercise: Wall Fire Rating',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Add a fire_rating key with value "2HR" to a wall dictionary, then print the updated dictionary.',
        input: 'Existing wall dict',
        expectedOutput: 'Wall dict with new fire_rating key',
        hint: 'Simply assign: wall["fire_rating"] = "2HR"',
      },
    },
    speakerNotes: [
      'Dynamic property addition.',
      'Dictionaries grow as needed.',
      'Pattern: Start with core data, add computed/enrichment later.',
      'Connect to: Adding parameters in BIM software.',
    ],
  },

  // Slide 7: Exercise 3
  {
    id: 7,
    type: 'exercise',
    title: 'Exercise: Access Nested Tuple',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Given column dict with location (5, 10, 12), retrieve and print just the elevation (z-coordinate).',
        input: 'column["location"] = (5, 10, 12)',
        expectedOutput: '12',
        hint: 'Double indexing: column["location"][2] for third element.',
      },
    },
    speakerNotes: [
      'Accessing nested data structures.',
      'First index gets tuple from dict, second gets element from tuple.',
      'Common pattern: column["location"][2] for z-coordinate.',
      'Critical skill for BIM data processing.',
    ],
  },

  // Slide 8: Lists of Dictionaries
  {
    id: 8,
    type: 'concept',
    title: 'Lists of Dictionaries - Structured Datasets',
    durationMinutes: 15,
    content: {
      bullets: [
        'List of dictionaries = database table of elements',
        'Each dictionary = one row/record (room, column, beam)',
        'Consistent keys across dictionaries = columns',
        'Loop through to process entire dataset',
        'Filter and aggregate like SQL queries',
      ],
    },
    speakerNotes: [
      'Database concepts applied to Python data structures.',
      'List = table, Dict = row, Keys = columns.',
      'Enables complex queries and reports.',
      'Scales from 10 elements to 10,000 elements.',
      'This is the foundation of BIM data analysis.',
      'Connect to: Revit schedules, IFC property sets.',
      'Pattern: Store → Query → Analyze → Report.',
    ],
  },

  // Slide 9: Demo - Room Dataset
  {
    id: 9,
    type: 'demo',
    title: 'Room Dataset Processing',
    durationMinutes: 25,
    content: {
      code: `# Structured room dataset
rooms = [
    {'name': 'Conference', 'area': 48.5, 'level': 'L2', 'type': 'meeting'},
    {'name': 'Office 101', 'area': 22.3, 'level': 'L2', 'type': 'office'},
    {'name': 'Office 102', 'area': 18.7, 'level': 'L2', 'type': 'office'},
    {'name': 'Break Room', 'area': 35.0, 'level': 'L1', 'type': 'support'},
    {'name': 'Storage', 'area': 12.5, 'level': 'L1', 'type': 'support'}
]

print('Room Analysis Report')
print('=' * 40)

# Calculate total area
total_area = sum(room['area'] for room in rooms)
print(f'Total floor area: {total_area} sq m')

# Count rooms by level
level_counts = {}
for room in rooms:
    level = room['level']
    level_counts[level] = level_counts.get(level, 0) + 1

print(f'Rooms per level: {level_counts}')

# Filter large rooms (> 30 sqm)
print('\nLarge rooms (>30 sqm):')
for room in rooms:
    if room['area'] > 30:
        print(f"  {room['name']}: {room['area']} sq m")

# Find average office size
office_areas = [r['area'] for r in rooms if r['type'] == 'office']
if office_areas:
    avg_office = sum(office_areas) / len(office_areas)
    print(f'\nAverage office size: {avg_office:.1f} sq m')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Comprehensive dataset processing example.',
      'Aggregation: sum() with generator expression.',
      'Grouping: Dictionary to count by level.',
      'Filtering: if condition in loop.',
      'Category analysis: List comprehension for office type.',
      'Real BIM schedule functionality.',
      'Pattern: Multiple analysis passes over same dataset.',
    ],
  },

  // Slide 10: Exercise 4
  {
    id: 10,
    type: 'exercise',
    title: 'Exercise: Material Quantity Summary',
    durationMinutes: 15,
    content: {
      exercise: {
        problem: 'Given list of structural elements with "concrete_volume" key, sum total concrete volume.',
        input: 'List of element dicts',
        expectedOutput: 'Total concrete volume: X cubic meters',
        hint: 'Similar to room area sum: sum(e["concrete_volume"] for e in elements)',
      },
    },
    speakerNotes: [
      'Quantity takeoff from structured data.',
      'Generator expression for efficient summation.',
      'Pattern: Extract field → Aggregate → Report.',
      'Connect to: Material procurement, cost estimation.',
    ],
  },

  // Slide 11: Exercise 5
  {
    id: 11,
    type: 'exercise',
    title: 'Exercise: Find Tallest Column',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'From a list of column dictionaries, find and print the maximum height.',
        input: 'List of columns with "height" key',
        expectedOutput: 'Maximum column height: Xm',
        hint: 'Use max() with key parameter or track in loop.',
      },
    },
    speakerNotes: [
      'Finding extremes in dataset.',
      'Option 1: max(col["height"] for col in columns).',
      'Option 2: Loop and track maximum.',
      'Structural analysis application.',
    ],
  },

  // Slide 12: Exercise 6
  {
    id: 12,
    type: 'exercise',
    title: 'Exercise: Group by Level',
    durationMinutes: 15,
    content: {
      exercise: {
        problem: 'Print rooms grouped by their level (L1 rooms together, L2 rooms together).',
        input: 'Room dataset from demo',
        expectedOutput: 'Level L1: [list], Level L2: [list]',
        hint: 'Use dictionary to accumulate lists: groups[level].append(room).',
      },
    },
    speakerNotes: [
      'Grouping/organizing data by category.',
      'Advanced pattern: Dictionary of lists.',
      'Create groups dict, append rooms to appropriate list.',
      'Connect to: Level-based schedules in BIM.',
    ],
  },

  // Slide 13: Geometry Inside Dictionaries
  {
    id: 13,
    type: 'concept',
    title: 'Geometry Inside Dictionaries',
    durationMinutes: 15,
    content: {
      bullets: [
        'Store coordinate lists as dictionary values',
        'footprint: list of (x, y) tuples representing polygon',
        'Compute area from stored geometry using functions',
        'Compute bounding box from stored coordinates',
        'Data + Geometry = Powerful analysis capability',
      ],
    },
    speakerNotes: [
      'Combining data structures with geometric algorithms.',
      'building["footprint"] = [(0,0), (10,0), (10,5), (0,5)].',
      'Pass footprint to area() or bounding_box() functions.',
      'Store results back: building["area"] = calculated.',
      'Self-contained element with both data and geometry.',
      'Pattern: Geometry stored, metrics computed on demand.',
      'Professional BIM object model.',
    ],
  },

  // Slide 14: Demo - Building Footprint Model
  {
    id: 14,
    type: 'demo',
    title: 'Building Footprint with Geometry',
    durationMinutes: 25,
    content: {
      code: `import math

def polygon_area(points):
    """Calculate polygon area using shoelace formula."""
    n = len(points)
    area = 0
    for i in range(n):
        x1, y1 = points[i]
        x2, y2 = points[(i + 1) % n]
        area += x1 * y2 - x2 * y1
    return abs(area) / 2

# Building with embedded geometry
building = {
    'name': 'Office Block A',
    'footprint': [(0, 0), (20, 0), (20, 15), (10, 20), (0, 15)],
    'level': 'Site',
    'type': 'office'
}

print(f"Building: {building['name']}")
print(f"Vertices: {len(building['footprint'])}")

# Compute area from stored geometry
area = polygon_area(building['footprint'])
building['footprint_area'] = area

print(f'Footprint area: {area:.1f} sq m')

# Compute bounding box
xs = [p[0] for p in building['footprint']]
ys = [p[1] for p in building['footprint']]
building['bbox'] = (min(xs), min(ys), max(xs), max(ys))

print(f"Bounding box: {building['bbox']}")

# Calculate dimensions
width = max(xs) - min(xs)
height = max(ys) - min(ys)
print(f'Dimensions: {width}m x {height}m')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Complete geometry-enabled building object.',
      'Footprint stored as list of tuples.',
      'Shoelace function computes area from geometry.',
      'Bounding box extracted with list comprehensions.',
      'Results stored back into dictionary.',
      'Self-contained element with computed properties.',
      'Pattern: Store geometry, derive metrics, cache results.',
    ],
  },

  // Slide 15: Exercise 7
  {
    id: 15,
    type: 'exercise',
    title: 'Exercise: Facade Panel Model',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Create panel dictionary with 4 corner points, compute and store panel area.',
        input: 'Rectangular panel corners',
        expectedOutput: 'Panel dict with geometry and computed area',
        hint: 'Store corners as list of tuples, use rectangle area formula.',
      },
    },
    speakerNotes: [
      'Apply pattern to facade elements.',
      'Rectangle: width × height from corner coordinates.',
      'Store both geometry and computed area.',
      'Pattern: Geometry + Calculation = Enriched data.',
    ],
  },

  // Slide 16: Exercise 8
  {
    id: 16,
    type: 'exercise',
    title: 'Exercise: Roof Perimeter',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Given building dict with footprint polygon, compute total perimeter and add to dictionary.',
        input: 'Building with footprint',
        expectedOutput: 'Building dict with "perimeter" key added',
        hint: 'Use perimeter calculation with modulo indexing.',
      },
    },
    speakerNotes: [
      'Another computed property from stored geometry.',
      'Reuses polygon perimeter algorithm.',
      'Building becomes richer with each calculation.',
      'Pattern: Progressive enrichment of element data.',
    ],
  },

  // Slide 17: Exercise 9
  {
    id: 17,
    type: 'exercise',
    title: 'Exercise: Centroid Approximation',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Compute simple centroid (average of min/max x and y) for rectangular footprint and add to building dict.',
        input: 'Building footprint',
        expectedOutput: 'Building dict with "centroid" key',
        hint: 'Centroid x = (min_x + max_x) / 2, same for y.',
      },
    },
    speakerNotes: [
      'Simple centroid for rectangular shapes.',
      'Uses bounding box extremes.',
      'Accurate for rectangles, approximation for irregular.',
      'Common in quick spatial analysis.',
    ],
  },

  // Slide 18: Mini BIM Processor
  {
    id: 18,
    type: 'concept',
    title: 'Mini BIM Processor',
    durationMinutes: 10,
    content: {
      bullets: [
        'Process mixed element datasets (rooms, columns, slabs)',
        'Compute aggregate metrics across element types',
        'Generate formatted summary reports',
        'Detect data quality issues (missing values)',
        'Apply compliance rules and flag violations',
      ],
    },
    speakerNotes: [
      'Capstone integration: All weeks come together.',
      'Real BIM software processes mixed element types.',
      'Rooms (area), Columns (height), Slabs (volume).',
      'Generate professional reports with metrics.',
      'Data validation: Check for required fields.',
      'Compliance checking against codes.',
      'This is professional-grade automation.',
    ],
  },

  // Slide 19: Demo - Project Summary Generator
  {
    id: 19,
    type: 'demo',
    title: 'Project Summary Generator',
    durationMinutes: 20,
    content: {
      code: `# Mixed element dataset
elements = [
    {'type': 'room', 'name': 'Office 1', 'area': 22.5, 'level': 'L2'},
    {'type': 'room', 'name': 'Office 2', 'area': 18.3, 'level': 'L2'},
    {'type': 'column', 'name': 'C1', 'height': 3.5, 'level': 'L1'},
    {'type': 'column', 'name': 'C2', 'height': 3.5, 'level': 'L1'},
    {'type': 'slab', 'name': 'S1', 'area': 150.0, 'thickness': 0.2, 'level': 'L1'}
]

print('PROJECT SUMMARY REPORT')
print('=' * 50)

# Analyze by element type
rooms = [e for e in elements if e['type'] == 'room']
columns = [e for e in elements if e['type'] == 'column']
slabs = [e for e in elements if e['type'] == 'slab']

# Room metrics
total_room_area = sum(r['area'] for r in rooms)
print(f'Total room area: {total_room_area} sq m')
print(f'Number of rooms: {len(rooms)}')

# Column metrics
max_height = max(c['height'] for c in columns)
print(f'Number of columns: {len(columns)}')
print(f'Tallest column: {max_height}m')

# Slab metrics (volume)
for slab in slabs:
    slab['volume'] = slab['area'] * slab['thickness']
total_concrete = sum(s['volume'] for s in slabs)
print(f'Total concrete volume: {total_concrete} cubic m')

# Data quality check
print('\nData Quality Check:')
for elem in elements:
    if 'name' not in elem or 'level' not in elem:
        print(f"  WARNING: {elem.get('type', 'Unknown')} missing required fields")`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Complete mixed-element processing pipeline.',
      'Filter by type using list comprehensions.',
      'Calculate type-specific metrics.',
      'Concrete volume computed on the fly.',
      'Data quality validation checks for required fields.',
      'Professional report format with sections.',
      'Pattern: Parse → Validate → Analyze → Report.',
    ],
  },

  // Slide 20: Exercise 10
  {
    id: 20,
    type: 'exercise',
    title: 'Exercise: Detect Missing Data',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Identify elements missing required "area" key and print their names.',
        input: 'Mixed element dataset',
        expectedOutput: 'List of elements without area field',
        hint: 'Use if "area" not in elem to check for missing key.',
      },
    },
    speakerNotes: [
      'Data validation - critical for production code.',
      'Check for missing keys before processing.',
      'Prevents runtime errors.',
      'Pattern: Validate → Process or Flag.',
    ],
  },

  // Slide 21: Exercise 11
  {
    id: 21,
    type: 'exercise',
    title: 'Exercise: Area Threshold Checker',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Flag rooms with area < 15 sq m as non-compliant and print warnings.',
        input: 'Room dataset',
        expectedOutput: 'Warning messages for small rooms',
        hint: 'Filter rooms, check area, print if below threshold.',
      },
    },
    speakerNotes: [
      'Code compliance checking on dataset.',
      'Minimum area requirements common in codes.',
      'Automated quality control.',
      'Pattern: Iterate → Check → Report violations.',
    ],
  },

  // Slide 22: Mini Challenge Intro
  {
    id: 22,
    type: 'concept',
    title: 'Mini Challenge: Multi-Building Dataset Analyzer',
    durationMinutes: 10,
    content: {
      bullets: [
        'Given multiple buildings, each with footprint and room list',
        'Compute GFA (Gross Floor Area) per building',
        'Compute total site GFA',
        'Generate structured report with all metrics',
        'Integrates all 8 weeks of learning',
      ],
    },
    speakerNotes: [
      'Final challenge of the course.',
      'Nested data: List of buildings, each with rooms.',
      'Requires: Loops, aggregation, geometry, reporting.',
      '15 minutes to implement.',
      'This is real master planning analysis.',
      'Demonstrates complete competency.',
    ],
  },

  // Slide 23: Mini Challenge Starter
  {
    id: 23,
    type: 'demo',
    title: 'Multi-Building Analyzer - Starter',
    durationMinutes: 5,
    content: {
      code: `# Multi-Building Site Analyzer

site = [
    {
        'name': 'Building A',
        'footprint': [(0,0), (20,0), (20,10), (0,10)],
        'rooms': [
            {'name': 'A101', 'area': 45},
            {'name': 'A102', 'area': 35}
        ]
    },
    {
        'name': 'Building B',
        'footprint': [(25,0), (40,0), (40,15), (25,15)],
        'rooms': [
            {'name': 'B101', 'area': 60},
            {'name': 'B102', 'area': 40},
            {'name': 'B103', 'area': 25}
        ]
    }
]

# TODO: Loop through buildings
# TODO: Compute footprint area for each
# TODO: Sum room areas for GFA
# TODO: Calculate totals and print report`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Provide complex nested data structure.',
      'Students implement multi-level processing.',
      'Building level → Room level aggregation.',
      'Then site-level totals.',
      'Circulate to assist with nested loops.',
      'Expected: Building A GFA = 80, Building B GFA = 125, Total = 205.',
    ],
  },

  // Slide 24: Course Recap
  {
    id: 24,
    type: 'recap',
    title: 'Course Review: 8 Weeks of BIM Python',
    durationMinutes: 10,
    content: {
      recapItems: [
        'Week 0: Computational thinking and problem decomposition',
        'Weeks 1-2: Python fundamentals - variables, control flow',
        'Weeks 3-4: Automation - loops, geometry processing',
        'Weeks 5-6: Organization - functions, structured data',
        'Weeks 7-8: Mastery - advanced geometry, complete BIM models',
      ],
    },
    speakerNotes: [
      'Review the complete learning journey.',
      'Started with thinking, ended with professional tools.',
      'Students can now automate real BIM workflows.',
      'Emphasize how far they have come.',
      'Encourage continued practice and exploration.',
      'Congratulate them on completing the course.',
    ],
  },

  // Slide 25: Next Steps
  {
    id: 25,
    type: 'preview',
    title: 'Next Steps and Continuing Your Journey',
    durationMinutes: 5,
    content: {
      previewTopics: [
        'File I/O: Reading and writing CSV/Excel files',
        'Revit API: Direct BIM model interaction',
        'Pandas: Data analysis for large datasets',
        'Visualization: Matplotlib for charts and diagrams',
        'Share your scripts with colleagues',
      ],
    },
    speakerNotes: [
      'Recommendations for continued learning.',
      'File I/O connects to real project data.',
      'Revit API for direct model automation.',
      'Pandas for industrial-strength data analysis.',
      'Share knowledge - elevate your team.',
      'Thank students for their dedication and hard work.',
      'Encourage them to build tools for their real workflows.',
    ],
  },
];

export const week8TotalSlides = week8Slides.length;

export function getWeek8SlideById(id: number): SlideData | null {
  return week8Slides.find((slide) => slide.id === id) || null;
}
