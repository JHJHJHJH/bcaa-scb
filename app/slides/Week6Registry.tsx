import { SlideData } from './types';

export const week6Slides: SlideData[] = [
  // Slide 1: Opening
  {
    id: 1,
    type: 'opening',
    title: 'Structured Data with Dictionaries and Element Processing',
    durationMinutes: 5,
    content: {
      subtitle: 'Week 6: Representing BIM Elements as Structured Data',
      bullets: [
        'Understand dictionaries as key-value data structures',
        'Represent BIM-like elements using structured data',
        'Process lists of structured elements',
        'Apply geometry utilities to structured records',
        'Build small data-processing pipelines',
      ],
    },
    speakerNotes: [
      'Welcome to Week 6 - we are representing real BIM elements now.',
      'Dictionaries let us store complex object data with named fields.',
      'Room with name, dimensions, area - all in one structure.',
      'By the end: Process datasets of building elements like mini BIM database.',
      'This bridges to actual Revit/IFC data structures.',
      'Ask: "What data do you associate with a room, column, or beam?"',
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
        'Dictionaries – Representing Structured Data (35 min)',
        'List of Dictionaries – Simulating BIM Elements (40 min)',
        'Integrating Geometry Utilities with Structured Data (35 min)',
        'Bounding Box from Structured Geometry (35 min)',
        'Mini Project: BIM-Like Element Analyzer (35 min)',
      ],
    },
    speakerNotes: [
      'Five modules building from single dictionaries to full datasets.',
      'Today connects data structures to real building elements.',
      'Mini project processes room dataset like real BIM software.',
      'Heavy coding day - all concepts come together.',
    ],
  },

  // Slide 3: Dictionaries Concept
  {
    id: 3,
    type: 'concept',
    title: 'Dictionaries – Key-Value Data Structures',
    durationMinutes: 15,
    content: {
      bullets: [
        'Dictionary: Collection of key-value pairs {key: value}',
        'Keys are strings (usually) that label the data',
        'Values can be any type: numbers, strings, tuples, lists',
        'Access with square brackets: dict["key"]',
        'Add or update: dict["new_key"] = value',
      ],
    },
    speakerNotes: [
      'Dictionaries are like labeled boxes - each piece of data has a name.',
      'Contrast with lists: Lists use index (0, 1, 2), dicts use keys ("name", "length").',
      'Perfect for representing objects: rooms, beams, columns.',
      'Keys are typically strings describing the data.',
      'Values flexible: Can store numbers, text, coordinates.',
      'Live demo: Create dictionary, access values, add new key.',
      'Common error: Forgetting quotes around key names.',
    ],
  },

  // Slide 4: Demo - Room as Dictionary
  {
    id: 4,
    type: 'demo',
    title: 'Represent a Room as Structured Data',
    durationMinutes: 20,
    content: {
      code: `# Define a room using dictionary
room = {
    'name': 'Meeting Room A',
    'length': 6,
    'width': 4,
    'height': 3
}

# Access values by key
print('Room name:', room['name'])
print('Length:', room['length'], 'meters')
print('Width:', room['width'], 'meters')

# Calculate and add new field
room['area'] = room['length'] * room['width']
print('Area:', room['area'], 'sq meters')

# Print entire dictionary
print('Full room data:', room)

# Update a value
room['height'] = 3.2
print('Updated height:', room['height'])`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Complete dictionary example with all operations.',
      'Curly braces {} define dictionary, colons separate key:value.',
      'Access with room["key"] - quotes required.',
      'Add computed field: room["area"] = calculation.',
      'Dictionaries are mutable - can update values.',
      'This is how BIM software stores element properties internally.',
      'Each room becomes a self-contained data record.',
    ],
  },

  // Slide 5: Exercise 1
  {
    id: 5,
    type: 'exercise',
    title: 'Exercise: Beam Dictionary',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Create a dictionary representing a beam with keys: length (6), width (0.3), height (0.5), material ("concrete"). Print the dictionary.',
        input: 'Beam data',
        expectedOutput: "{'length': 6, 'width': 0.3, 'height': 0.5, 'material': 'concrete'}",
        hint: 'Use curly braces with key:value pairs separated by commas.',
      },
    },
    speakerNotes: [
      'First dictionary creation exercise.',
      'Keys as strings, values as numbers and text.',
      'Verify correct syntax: quotes around keys and strings.',
      'This represents a structural element with properties.',
    ],
  },

  // Slide 6: Exercise 2
  {
    id: 6,
    type: 'exercise',
    title: 'Exercise: Add Volume Field',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Add a computed volume field to the beam dictionary. Volume = length × width × height. Print the updated dictionary.',
        input: 'Beam dictionary from previous exercise',
        expectedOutput: 'Beam dict with volume key added',
        hint: 'Access dimensions with beam["length"], etc., then assign to beam["volume"].',
      },
    },
    speakerNotes: [
      'Dictionary enrichment - adding computed properties.',
      'Pattern: Calculate from existing keys, add new key.',
      'Expected volume: 6 × 0.3 × 0.5 = 0.9 cubic meters.',
      'Common in BIM: Computed properties from base dimensions.',
    ],
  },

  // Slide 7: Exercise 3
  {
    id: 7,
    type: 'exercise',
    title: 'Exercise: Update and Print',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Update the beam height to 0.6 and print the modified dictionary. Then recalculate and update the volume.',
        input: 'Beam dictionary',
        expectedOutput: 'Updated height and volume',
        hint: 'Update with beam["height"] = 0.6, then recalculate volume.',
      },
    },
    speakerNotes: [
      'Modifying dictionary values.',
      'Important: When base values change, computed values may need update.',
      'New volume: 6 × 0.3 × 0.6 = 1.08 cubic meters.',
      'Preview: Future topics - computed properties that auto-update.',
    ],
  },

  // Slide 8: List of Dictionaries Concept
  {
    id: 8,
    type: 'concept',
    title: 'List of Dictionaries – Simulating BIM Elements',
    durationMinutes: 15,
    content: {
      bullets: [
        'List of dictionaries represents multiple elements',
        'Each dictionary is one element (room, beam, column)',
        'Loop through list to process entire dataset',
        'Access: list[i]["key"] for element i, field key',
        'Pattern: Database table with rows (dicts) and columns (keys)',
      ],
    },
    speakerNotes: [
      'This is how BIM databases work: List of element records.',
      ' rooms = [room1_dict, room2_dict, room3_dict].',
      'Loop: for room in rooms: process each room.',
      'Database analogy: List = table, Dict = row, Keys = columns.',
      'Connect to Revit: Element IDs with parameter values.',
      'This structure scales to thousands of elements.',
      'Foundation of data-driven building analysis.',
    ],
  },

  // Slide 9: Demo - Multiple Rooms Dataset
  {
    id: 9,
    type: 'demo',
    title: 'Processing Multiple Rooms',
    durationMinutes: 20,
    content: {
      code: `# Dataset of rooms - list of dictionaries
rooms = [
    {'name': 'Room 1', 'length': 4, 'width': 3},
    {'name': 'Room 2', 'length': 6, 'width': 5},
    {'name': 'Room 3', 'length': 2, 'width': 3}
]

print('Processing', len(rooms), 'rooms:')
print()

# Loop through and calculate areas
for room in rooms:
    area = room['length'] * room['width']
    print(f"{room['name']}: {room['length']}m × {room['width']}m = {area} sq m")

print()

# Calculate total area
total_area = 0
for room in rooms:
    total_area += room['length'] * room['width']

print(f'Total floor area: {total_area} sq m')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Complete dataset processing example.',
      'Three rooms as list of dictionaries.',
      'First loop: Calculate and display individual areas.',
      'Second loop: Accumulate total area.',
      'Pattern: Iterate → Access fields → Calculate → Report.',
      'This is exactly how BIM schedules work.',
      'Scalable to hundreds of rooms automatically.',
    ],
  },

  // Slide 10: Exercise 4
  {
    id: 10,
    type: 'exercise',
    title: 'Exercise: Flag Small Rooms',
    durationMinutes: 15,
    content: {
      exercise: {
        problem: 'Loop through the rooms dataset and flag (print warning) for rooms with area < 15 sqm.',
        input: 'rooms list from demo',
        expectedOutput: 'Warning messages for Room 1 and Room 3',
        hint: 'Calculate area in loop, check if < 15, print warning if true.',
      },
    },
    speakerNotes: [
      'Compliance checking on dataset.',
      'Expected: Room 1 (12 sqm) and Room 3 (6 sqm) flagged.',
      'Room 2 (30 sqm) passes.',
      'Pattern: Iterate → Calculate → Check condition → Report.',
      'Foundation of automated code checking.',
    ],
  },

  // Slide 11: Exercise 5
  {
    id: 11,
    type: 'exercise',
    title: 'Exercise: Enrich Dataset',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Loop through rooms and add an "area" key to each room dictionary with the calculated area.',
        input: 'rooms list',
        expectedOutput: 'Each room dict now has area field',
        hint: 'Modify room in place: room["area"] = calculation.',
      },
    },
    speakerNotes: [
      'Dataset enrichment - adding computed fields.',
      'Modifying dictionaries while iterating.',
      'Result: Richer dataset for future processing.',
      'Pattern: Pass through data → Enhance → Use enhanced data.',
      'Common in BIM: Adding calculated parameters.',
    ],
  },

  // Slide 12: Geometry with Structured Data Concept
  {
    id: 12,
    type: 'concept',
    title: 'Integrating Geometry with Structured Data',
    durationMinutes: 15,
    content: {
      bullets: [
        'Store coordinates in dictionary values',
        'Extract coordinate tuples for geometry functions',
        'Results can be stored back in dictionary',
        'Separation: Structured data + Geometry utilities',
        'Pattern: Extract → Calculate → Store result',
      ],
    },
    speakerNotes: [
      'Combine Week 5 functions with Week 6 data structures.',
      'Dictionary stores element data including coordinates.',
      'Extract coordinates: element["point"] gives (x, y).',
      'Pass to distance() or other geometry functions.',
      'Store results: element["spacing"] = calculated_value.',
      'This is professional BIM data processing pattern.',
      'Data and logic remain separate and reusable.',
    ],
  },

  // Slide 13: Demo - Distance with Structured Points
  {
    id: 13,
    type: 'demo',
    title: 'Distance Function with Structured Points',
    durationMinutes: 20,
    content: {
      code: `import math

# Geometry utility function
def distance(p1, p2):
    x1, y1 = p1
    x2, y2 = p2
    return math.sqrt((x2-x1)**2 + (y2-y1)**2)

# Structured column data
columns = [
    {'id': 'C1', 'point': (0, 0)},
    {'id': 'C2', 'point': (7, 0)},
    {'id': 'C3', 'point': (14, 0)}
]

print('Column spacing analysis:')
print()

# Calculate spacing between adjacent columns
for i in range(len(columns) - 1):
    col1 = columns[i]
    col2 = columns[i + 1]
    
    spacing = distance(col1['point'], col2['point'])
    
    print(f"{col1['id']} to {col2['id']}: {spacing}m")
    
    # Add compliance check
    if spacing > 6:
        print(f"  WARNING: Spacing exceeds 6m limit!")`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Integration of functions with structured data.',
      'Columns stored as dicts with ID and coordinates.',
      'Extract points: col1["point"] gives tuple.',
      'Pass to distance() function.',
      'Add compliance checking on results.',
      'Real-world structural grid analysis pattern.',
      'Shows data enrichment with analysis results.',
    ],
  },

  // Slide 14: Exercise 6
  {
    id: 14,
    type: 'exercise',
    title: 'Exercise: Column Spacing Dataset',
    durationMinutes: 15,
    content: {
      exercise: {
        problem: 'Store 3 column points in structured format with IDs C1, C2, C3 at (0,0), (5,0), (12,0). Compute and print spacing between adjacent columns.',
        input: '3 columns with coordinates',
        expectedOutput: 'C1 to C2: 5m, C2 to C3: 7m',
        hint: 'Create list of dicts, loop with range(len(columns)-1), extract points and calculate.',
      },
    },
    speakerNotes: [
      'Build dataset and process with existing function.',
      'Expected spacings: 5m and 7m.',
      'Practice data structure creation and iteration.',
      'Reinforces extract-calculate pattern.',
    ],
  },

  // Slide 15: Exercise 7
  {
    id: 15,
    type: 'exercise',
    title: 'Exercise: Add Compliance Field',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Modify the column processing to add a "compliant" key to each spacing relationship (True if <= 6m, False otherwise).',
        input: 'Column dataset',
        expectedOutput: 'Spacing data with compliance boolean',
        hint: 'Store results in new dictionary or add to existing structure.',
      },
    },
    speakerNotes: [
      'Data enrichment with analysis results.',
      'Creates audit trail of compliance checks.',
      'Could store in separate list or add to column dicts.',
      'Pattern: Analysis generates new data fields.',
    ],
  },

  // Slide 16: Bounding Box with Structured Data
  {
    id: 16,
    type: 'concept',
    title: 'Bounding Box from Structured Geometry',
    durationMinutes: 15,
    content: {
      bullets: [
        'Store boundary as structured feature with metadata',
        'Extract point list for geometry processing',
        'Reuse existing compute_bounding_box function',
        'Store results back in structure',
        'Data and logic separation enables reuse',
      ],
    },
    speakerNotes: [
      'Complex features: Dictionary with name, type, points list.',
      'boundary["points"] gives list for processing.',
      'Pass points to existing function - no rewrite needed.',
      'Store results: boundary["bbox"] = result.',
      'Clean separation: Data structure + Geometry engine.',
      'Professional pattern: Reusable logic on varied data.',
      'This is how GIS and BIM software architectures work.',
    ],
  },

  // Slide 17: Demo - Structured Boundary
  {
    id: 17,
    type: 'demo',
    title: 'Boundary as Structured Feature',
    durationMinutes: 20,
    content: {
      code: `import math

# Reuse previous bounding box function
def compute_bounding_box(points):
    min_x = float('inf')
    max_x = float('-inf')
    min_y = float('inf')
    max_y = float('-inf')

    for x, y in points:
        if x < min_x:
            min_x = x
        if x > max_x:
            max_x = x
        if y < min_y:
            min_y = y
        if y > max_y:
            max_y = y

    return (min_x, min_y), (max_x, max_y)

# Structured boundary data
boundary = {
    'name': 'Site A',
    'type': 'site_boundary',
    'points': [(0, 0), (10, 0), (12, 5), (6, 8), (0, 5)]
}

print(f"Processing {boundary['name']}...")
print(f"Number of vertices: {len(boundary['points'])}")

# Extract and process
bbox = compute_bounding_box(boundary['points'])
boundary['bbox'] = bbox

print(f'Bounding box: {bbox}')

# Calculate derived properties
min_corner, max_corner = bbox
width = max_corner[0] - min_corner[0]
height = max_corner[1] - min_corner[1]
boundary['bbox_area'] = width * height

print(f'Bounding box area: {boundary["bbox_area"]} sq m')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Complete structured boundary processing.',
      'Feature has metadata (name, type) and geometry (points).',
      'Extract points, compute, store results.',
      'Data accumulates: Original + bbox + bbox_area.',
      'Reusable function works on any point list.',
      'Pattern: Generic geometry + Specific data = Analysis.',
      'Expected: bbox (0,0) to (12,8), area 96 sq m.',
    ],
  },

  // Slide 18: Exercise 8
  {
    id: 18,
    type: 'exercise',
    title: 'Exercise: Store Bounding Box Area',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Compute bounding box area and store it inside the boundary dictionary under key "bbox_area". Print the enriched dictionary.',
        input: 'Boundary with points',
        expectedOutput: 'Boundary dict with bbox and bbox_area keys',
        hint: 'Calculate width × height from bbox corners, assign to boundary["bbox_area"].',
      },
    },
    speakerNotes: [
      'Complete data enrichment workflow.',
      'Derived metric stored with original data.',
      'Self-documenting data structure.',
      'Ready for reporting or further analysis.',
    ],
  },

  // Slide 19: Exercise 9
  {
    id: 19,
    type: 'exercise',
    title: 'Exercise: Check Bounding Box Orientation',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Check if bounding box width is greater than height. Print "Wide site" or "Deep site" and add this classification to the boundary dictionary.',
        input: 'Boundary with computed bbox',
        expectedOutput: 'Site classification stored in dict',
        hint: 'Compare width and height, store string in boundary["orientation"].',
      },
    },
    speakerNotes: [
      'Classification based on computed geometry.',
      'Adds qualitative analysis to quantitative data.',
      'Useful for site planning decisions.',
      'Pattern: Calculate → Analyze → Classify → Store.',
    ],
  },

  // Slide 20: Mini Project Intro
  {
    id: 20,
    type: 'concept',
    title: 'Mini Project: BIM-Like Element Analyzer',
    durationMinutes: 10,
    content: {
      bullets: [
        'Process dataset of room dictionaries',
        'Compute area and determine compliance',
        'Add computed fields to each room',
        'Generate summary statistics',
        'Print structured report',
      ],
    },
    speakerNotes: [
      'Capstone project integrating all Week 6 concepts.',
      'Real-world pattern: Import → Process → Enrich → Report.',
      '35 minutes to build complete analysis pipeline.',
      'Starter code provides room dataset.',
      'Students add area, compliance, then summarize.',
      'This mimics real BIM analysis workflows.',
      'Professional-grade data processing tool.',
    ],
  },

  // Slide 21: Mini Project Starter
  {
    id: 21,
    type: 'demo',
    title: 'Room Dataset Analyzer - Starter',
    durationMinutes: 25,
    content: {
      code: `# Room Dataset Analyzer - Starter Code

# Initial dataset
rooms = [
    {'name': 'Conference', 'length': 8, 'width': 6, 'type': 'meeting'},
    {'name': 'Office 1', 'length': 5, 'width': 4, 'type': 'office'},
    {'name': 'Office 2', 'length': 4, 'width': 3.5, 'type': 'office'},
    {'name': 'Storage', 'length': 3, 'width': 2, 'type': 'support'},
    {'name': 'Break Room', 'length': 6, 'width': 5, 'type': 'support'}
]

print('BIM Room Analysis Report')
print('=' * 40)
print()

# TODO: Calculate area for each room and add to dictionary
# ... your code here ...

# TODO: Determine compliance (area >= 15 for meeting/office)
# Add 'compliant' key: True/False
# ... your code here ...

# TODO: Calculate summary statistics
# - Total area
# - Number of rooms
# - Number of violations
# ... your code here ...

# TODO: Print detailed report
# ... your code here ...`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Provide structured dataset and processing framework.',
      'Students implement enrichment pipeline.',
      'Calculate area → Determine compliance → Summarize.',
      'Circulate and guide implementation.',
      'Expected: Conference and Break Room pass, Office 2 and Storage fail.',
      'Encourage professional report formatting.',
      'This is a tool they can use on real room data.',
    ],
  },

  // Slide 22: Recap
  {
    id: 22,
    type: 'recap',
    title: 'What We Learned Today',
    durationMinutes: 5,
    content: {
      recapItems: [
        'Dictionaries store structured data with named fields',
        'List of dictionaries represents BIM element datasets',
        'Process datasets by looping and accessing keys',
        'Integrate geometry functions with structured data',
        'Pattern: Extract → Calculate → Enrich → Report',
      ],
    },
    speakerNotes: [
      'Review the power of structured data processing.',
      'Students can now represent and process building elements.',
      'This is foundational for real BIM data workflows.',
      'Pattern applies to rooms, columns, beams, any element.',
      'Geometry + Data = Powerful analysis tools.',
      'Next week: File I/O - importing real project data.',
    ],
  },

  // Slide 23: Preview Week 7
  {
    id: 23,
    type: 'preview',
    title: 'Next Week: File I/O and Real Project Data',
    durationMinutes: 5,
    content: {
      previewTopics: [
        'Reading data from CSV files',
        'Importing Revit schedules and exports',
        'Processing real building element data',
        'Writing analysis results to files',
        'Connecting to actual project workflows',
      ],
    },
    speakerNotes: [
      'Week 7 bridges to real-world applications.',
      'No more hardcoded data - process actual exports.',
      'CSV: Universal format for BIM data exchange.',
      'Students will analyze their own project data.',
      'This completes the journey to professional automation.',
      'Homework: Export a schedule from your BIM software.',
      'Bring real project data next week.',
    ],
  },
];

export const week6TotalSlides = week6Slides.length;

export function getWeek6SlideById(id: number): SlideData | null {
  return week6Slides.find((slide) => slide.id === id) || null;
}
