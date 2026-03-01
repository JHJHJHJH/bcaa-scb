import { SlideData } from './types';

export const week11Slides: SlideData[] = [
  // Slide 1: Opening
  {
    id: 1,
    type: 'opening',
    title: 'Error Handling, Validation & Defensive Engineering Code',
    durationMinutes: 5,
    content: {
      subtitle: 'Week 11: Writing Robust Geometry and BIM Processing Scripts',
      bullets: [
        'Understand common Python errors',
        'Use try/except blocks effectively',
        'Validate engineering data before processing',
        'Raise custom errors',
        'Write robust geometry and BIM processing scripts',
      ],
    },
    speakerNotes: [
      'Welcome to Week 11 - we are focusing on robustness and reliability.',
      'Real BIM scripts must handle messy data gracefully.',
      'Error handling separates amateur from professional code.',
      'By the end: You will write defensive, production-ready scripts.',
      'Ask: "What happens when your script meets bad data?"',
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
        'Understanding Errors in Python (35 min)',
        'try / except / else / finally (40 min)',
        'Data Validation for BIM & Geometry (50 min)',
        'Raising Custom Errors (30 min)',
        'Mini Challenge: Robust BIM Processor (25 min)',
      ],
    },
    speakerNotes: [
      'Five modules building defensive coding skills.',
      'Progress from understanding errors to custom exceptions.',
      'Emphasis on real-world BIM data validation.',
      'Mini challenge: Complete robust data processor.',
    ],
  },

  // Slide 3: Understanding Errors in Python
  {
    id: 3,
    type: 'concept',
    title: 'Understanding Errors in Python',
    durationMinutes: 15,
    content: {
      bullets: [
        'SyntaxError: Code that violates Python grammar rules',
        'Runtime Error: Code runs but fails during execution',
        'Common errors: TypeError, ValueError, KeyError, IndexError',
        'Reading error messages: Traceback shows file, line, and cause',
        'Debugging mindset: Errors are clues, not roadblocks',
      ],
    },
    speakerNotes: [
      'SyntaxError: Caught before running - missing colon, bad indentation',
      'Runtime Error: Division by zero, accessing missing key',
      'Traceback is your friend - read bottom to top',
      'Teach students to read error messages carefully',
    ],
  },

  // Slide 4: Common Python Errors
  {
    id: 4,
    type: 'demo',
    title: 'Common Python Errors',
    durationMinutes: 15,
    content: {
      code: "# TypeError: wrong type for operation\nresult = '10' + 5  # Cannot add string and int\n\n# ValueError: right type, bad value\nnum = int('abc')  # Cannot convert 'abc' to int\n\n# KeyError: missing dictionary key\nroom = {'name': 'Office'}\narea = room['area']  # Key 'area' does not exist\n\n# IndexError: list index out of range\npoints = [(0, 0), (1, 1)]\nthird = points[2]  # Index 2 does not exist\n\n# ZeroDivisionError: division by zero\navg = total / count  # Crashes if count is 0",
      bullets: [
        'TypeError: Wrong type used in operation',
        'ValueError: Right type but invalid value',
        'KeyError: Dictionary key not found',
        'IndexError: List index out of bounds',
        'ZeroDivisionError: Division by zero',
      ],
    },
    speakerNotes: [
      'Show each error and explain why it happens',
      'Connect to BIM scenarios: missing room data, bad coordinates',
      'ZeroDivisionError common in averages and ratios',
    ],
  },

  // Slide 5: Demo - Handling Division by Zero
  {
    id: 5,
    type: 'demo',
    title: 'Demo: Handling Division by Zero',
    durationMinutes: 10,
    content: {
      code: "# Problem: Safely compute load per column\ntotal_load = 5000  # kg\nnum_columns = 0    # What if no columns?\n\n# Without handling - crashes!\nload_per_column = total_load / num_columns  # ZeroDivisionError\n\n# With defensive check\nif num_columns > 0:\n    load_per_column = total_load / num_columns\n    print(f'Load per column: {load_per_column} kg')\nelse:\n    print('Error: No columns defined')\n    load_per_column = None",
      bullets: [
        'Safely compute load per column while handling zero columns',
        'Always check denominator before division',
        'Provide meaningful error message',
      ],
    },
    speakerNotes: [
      'Division by zero is common in engineering calculations',
      'Always validate inputs before math operations',
      'Show both the crash and the fix',
    ],
  },

  // Slide 6: Demo - Missing Dictionary Key
  {
    id: 6,
    type: 'demo',
    title: 'Demo: Missing Dictionary Key',
    durationMinutes: 10,
    content: {
      code: "# Problem: Access room['area'] safely\nroom = {'number': '101', 'name': 'Conference'}\n\n# Without handling - crashes!\narea = room['area']  # KeyError: 'area'\n\n# Solution 1: Check first\nif 'area' in room:\n    area = room['area']\nelse:\n    area = 0\n\n# Solution 2: Use get() with default\narea = room.get('area', 0)\n\n# Solution 3: Use get() and check for None\narea = room.get('area')\nif area is None:\n    print(f\"Warning: Room {room['number']} missing area\")",
      bullets: [
        'Access room data safely when key may not exist',
        'Use in operator to check key existence',
        'Use get() method with default value',
      ],
    },
    speakerNotes: [
      'BIM data often has missing fields',
      'get() method is the Pythonic way',
      'Show all three approaches, recommend get()',
    ],
  },

  // Slide 7: Practice - Invalid Numeric Input
  {
    id: 7,
    type: 'exercise',
    title: 'Practice: Invalid Numeric Input',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Write code that converts user input to float and handles invalid values gracefully.',
        input: "User enters 'abc' or '12.5'",
        expectedOutput: 'Valid: 12.5 OR Error: Please enter a valid number',
        hint: 'Use try/except around float() conversion. Catch ValueError.',
      },
    },
    speakerNotes: [
      'User input is always unreliable',
      'Try/except is the right tool here',
      'Give students 5 minutes to attempt',
    ],
  },

  // Slide 8: Practice - Index Out of Range
  {
    id: 8,
    type: 'exercise',
    title: 'Practice: Index Out of Range',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Safely access the 4th vertex of a polygon that may have fewer points.',
        input: 'points = [(0, 0), (1, 0), (1, 1)]  # Only 3 points',
        expectedOutput: 'Point 4: (x, y) OR Error: Polygon has only 3 points',
        hint: 'Check len(points) before accessing index 3.',
      },
    },
    speakerNotes: [
      'Polygon data can be malformed',
      'Always validate data structure before accessing',
      'Relate to geometry validation',
    ],
  },

  // Slide 9: Practice - Type Mismatch
  {
    id: 9,
    type: 'exercise',
    title: 'Practice: Type Mismatch',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Handle case where slab_thickness is provided as string instead of number.',
        input: "slab_thickness = '150mm'  # String instead of float",
        expectedOutput: 'Thickness: 150.0 OR Error: Thickness must be numeric',
        hint: 'Check type with isinstance() or attempt conversion with try/except.',
      },
    },
    speakerNotes: [
      'Data from external sources often has wrong types',
      'Type checking is defensive programming',
      'Show isinstance() and try/except approaches',
    ],
  },

  // Slide 10: try / except / else / finally
  {
    id: 10,
    type: 'concept',
    title: 'try / except / else / finally',
    durationMinutes: 15,
    content: {
      bullets: [
        'try: Code that might raise an exception',
        'except: Handle specific exceptions',
        'else: Run if no exception occurred',
        'finally: Always runs (cleanup code)',
        'Catching specific exceptions is better than catching all',
      ],
    },
    speakerNotes: [
      'Full error handling structure',
      'else block often overlooked but useful',
      'finally guarantees cleanup - files, connections',
      'Specific exceptions help debugging',
    ],
  },

  // Slide 11: Demo - Safe File Loader
  {
    id: 11,
    type: 'demo',
    title: 'Demo: Safe File Loader',
    durationMinutes: 15,
    content: {
      code: "import json\n\ndef load_building_data(filepath):\n    try:\n        with open(filepath, 'r') as file:\n            data = json.load(file)\n    except FileNotFoundError:\n        print(f'Error: File {filepath} not found')\n        return None\n    except json.JSONDecodeError:\n        print(f'Error: {filepath} contains invalid JSON')\n        return None\n    else:\n        print(f'Successfully loaded {filepath}')\n        return data\n\n# Usage\nbuilding = load_building_data('building.json')\nif building is not None:\n    process_building(building)",
      bullets: [
        'Load building.json with exception handling',
        'Catch FileNotFoundError for missing files',
        'Catch JSONDecodeError for malformed JSON',
        'Return None on failure, data on success',
      ],
    },
    speakerNotes: [
      'File operations must always be wrapped in try/except',
      'Specific exceptions give better error messages',
      'Return None pattern allows caller to check success',
    ],
  },

  // Slide 12: Demo - Safe CSV Parser
  {
    id: 12,
    type: 'demo',
    title: 'Demo: Safe CSV Parser',
    durationMinutes: 15,
    content: {
      code: "def parse_room_csv(filepath):\n    rooms = []\n    try:\n        with open(filepath, 'r') as file:\n            next(file)  # Skip header\n            for line_num, line in enumerate(file, start=2):\n                try:\n                    parts = line.strip().split(',')\n                    room = {\n                        'number': parts[0],\n                        'area': float(parts[1]),\n                        'level': parts[2]\n                    }\n                    rooms.append(room)\n                except (IndexError, ValueError) as e:\n                    print(f'Skipping line {line_num}: {e}')\n    except FileNotFoundError:\n        print(f'File not found: {filepath}')\n        return []\n    return rooms",
      bullets: [
        'Handle malformed rows while reading CSV',
        'Inner try/except for per-row errors',
        'Outer try/except for file-level errors',
        'Continue processing despite bad rows',
      ],
    },
    speakerNotes: [
      'Nested try/except for different error levels',
      'Row-level errors should not stop processing',
      'Line numbers help users find bad data',
    ],
  },

  // Slide 13: Practice - Geometry Validation
  {
    id: 13,
    type: 'exercise',
    title: 'Practice: Geometry Validation',
    durationMinutes: 15,
    content: {
      exercise: {
        problem: 'Handle invalid polygon with less than 3 points before calculating area.',
        input: 'points = [(0, 0), (1, 0)]  # Only 2 points - not a polygon',
        expectedOutput: 'Error: Polygon must have at least 3 points',
        hint: 'Check len(points) at start of function. Raise ValueError if insufficient.',
      },
    },
    speakerNotes: [
      'Geometry validation is critical',
      'Fail fast - check preconditions first',
      'Raise exceptions for invalid geometry',
    ],
  },

  // Slide 14: Practice - Bounding Box Safety
  {
    id: 14,
    type: 'exercise',
    title: 'Practice: Bounding Box Safety',
    durationMinutes: 15,
    content: {
      exercise: {
        problem: 'Prevent computing bounding box on empty list of points.',
        input: 'points = []  # Empty list',
        expectedOutput: 'Error: Cannot compute bounding box of empty point set',
        hint: 'Check if points list is empty. Return None or raise exception.',
      },
    },
    speakerNotes: [
      'Empty data is a common edge case',
      'Guard clauses prevent crashes',
      'Decide: return None or raise exception?',
    ],
  },

  // Slide 15: Data Validation for BIM & Geometry
  {
    id: 15,
    type: 'concept',
    title: 'Data Validation for BIM & Geometry',
    durationMinutes: 15,
    content: {
      bullets: [
        'Validate required dictionary keys before access',
        'Check numeric ranges (area > 0, count >= 0)',
        'Validate geometry structure (polygon has 3+ points)',
        'Use guard clauses: return early on invalid input',
        'Fail fast - report errors as soon as detected',
      ],
    },
    speakerNotes: [
      'Validation prevents garbage-in-garbage-out',
      'Guard clauses make code more readable',
      'Fail fast principle - catch errors early',
      'BIM data quality varies - validate everything',
    ],
  },

  // Slide 16: Demo - Room Data Validator
  {
    id: 16,
    type: 'demo',
    title: 'Demo: Room Data Validator',
    durationMinutes: 20,
    content: {
      code: "def validate_room(room):\n    errors = []\n    \n    # Check required keys\n    required = ['number', 'name', 'area', 'level']\n    for key in required:\n        if key not in room:\n            errors.append(f'Missing required field: {key}')\n    \n    if errors:\n        return False, errors\n    \n    # Validate area is positive number\n    if not isinstance(room['area'], (int, float)):\n        errors.append('Area must be numeric')\n    elif room['area'] <= 0:\n        errors.append('Area must be positive')\n    \n    # Validate level format\n    if not isinstance(room['level'], str):\n        errors.append('Level must be a string')\n    \n    return len(errors) == 0, errors\n\n# Usage\nroom = {'number': '101', 'name': 'Office', 'area': -50, 'level': 'Level 1'}\nis_valid, errors = validate_room(room)\nif not is_valid:\n    print('Validation failed:', errors)",
      bullets: [
        'Create function validate_room(room_dict)',
        'Check name, area, and level fields',
        'Return tuple: (is_valid, error_list)',
        'Collect all errors, not just first',
      ],
    },
    speakerNotes: [
      'Validation functions return status and errors',
      'Check required keys first',
      'Validate type, then value range',
      'Collect all errors for better UX',
    ],
  },

  // Slide 17: Demo - Polygon Validator
  {
    id: 17,
    type: 'demo',
    title: 'Demo: Polygon Validator',
    durationMinutes: 20,
    content: {
      code: "def validate_polygon(points):\n    errors = []\n    \n    # Check structure\n    if not isinstance(points, list):\n        errors.append('Points must be a list')\n        return False, errors\n    \n    # Check minimum vertices\n    if len(points) < 3:\n        errors.append(f'Polygon must have at least 3 points, got {len(points)}')\n    \n    # Check each point is valid coordinate\n    for i, point in enumerate(points):\n        if not isinstance(point, (list, tuple)):\n            errors.append(f'Point {i} is not a tuple/list')\n        elif len(point) != 2:\n            errors.append(f'Point {i} must have 2 coordinates')\n        else:\n            x, y = point\n            if not isinstance(x, (int, float)) or not isinstance(y, (int, float)):\n                errors.append(f'Point {i} coordinates must be numeric')\n    \n    return len(errors) == 0, errors",
      bullets: [
        'Create function validate_polygon(points)',
        'Check structure and minimum vertices',
        'Validate each point format',
        'Return validation status and errors',
      ],
    },
    speakerNotes: [
      'Geometry validation catches data issues early',
      'Check structure before content',
      'Validate each point individually',
      'Index in error messages helps debugging',
    ],
  },

  // Slide 18: Practice - Minimum Area Compliance
  {
    id: 18,
    type: 'exercise',
    title: 'Practice: Minimum Area Compliance',
    durationMinutes: 15,
    content: {
      exercise: {
        problem: 'Raise error if room area below regulation threshold (minimum 10 sqm).',
        input: "room = {'number': '101', 'area': 8.5}",
        expectedOutput: 'ComplianceError: Room 101 area 8.5 sqm below minimum 10.0 sqm',
        hint: 'Check room["area"] < min_area. Raise ValueError with descriptive message.',
      },
    },
    speakerNotes: [
      'Code compliance checking is real-world requirement',
      'Raise exceptions for violations',
      'Include context in error message',
    ],
  },

  // Slide 19: Practice - Negative Volume Detection
  {
    id: 19,
    type: 'exercise',
    title: 'Practice: Negative Volume Detection',
    durationMinutes: 15,
    content: {
      exercise: {
        problem: 'Detect and raise error for invalid negative slab thickness.',
        input: "slab = {'id': 'S1', 'thickness': -150}",
        expectedOutput: 'ValueError: Slab S1 has negative thickness: -150',
        hint: 'Check if thickness < 0. Raise ValueError with slab ID and value.',
      },
    },
    speakerNotes: [
      'Physical impossibilities must be caught',
      'Negative dimensions indicate data error',
      'Include object ID in error for traceability',
    ],
  },

  // Slide 20: Practice - Coordinate Format Checker
  {
    id: 20,
    type: 'exercise',
    title: 'Practice: Coordinate Format Checker',
    durationMinutes: 15,
    content: {
      exercise: {
        problem: 'Ensure all polygon points are tuples of length 2 with numeric values.',
        input: "points = [(0, 0), (1, 'a'), (2, 3, 4)]",
        expectedOutput: 'Errors: Point 1 Y not numeric, Point 2 has 3 coordinates',
        hint: 'Loop through points. Check len() == 2 and isinstance() for numbers.',
      },
    },
    speakerNotes: [
      'Coordinate format validation',
      'Check length and type of each component',
      'Report all issues, not just first',
    ],
  },

  // Slide 21: Raising Custom Errors
  {
    id: 21,
    type: 'concept',
    title: 'Raising Custom Errors',
    durationMinutes: 15,
    content: {
      bullets: [
        'Use raise keyword to trigger exceptions intentionally',
        'Custom exception classes inherit from Exception',
        'Design meaningful error messages with context',
        'Engineering-style error reporting: what, where, why',
        'Custom errors make debugging easier',
      ],
    },
    speakerNotes: [
      'Sometimes you must fail intentionally',
      'Custom exceptions document error types',
      'Include all relevant context in message',
      'Professional code raises appropriate errors',
    ],
  },

  // Slide 22: Demo - Custom GeometryError
  {
    id: 22,
    type: 'demo',
    title: 'Demo: Custom GeometryError',
    durationMinutes: 15,
    content: {
      code: "# Define custom exception\nclass GeometryError(Exception):\n    \"\"\"Raised when geometric data is invalid\"\"\"\n    pass\n\nclass ComplianceError(Exception):\n    \"\"\"Raised when design violates regulations\"\"\"\n    pass\n\n# Usage in validation\ndef validate_polygon(points):\n    if len(points) < 3:\n        raise GeometryError(\n            f'Polygon has {len(points)} points, minimum 3 required'\n        )\n\ndef check_room_compliance(room, min_area=10.0):\n    if room['area'] < min_area:\n        raise ComplianceError(\n            f\"Room {room['number']} area {room['area']}sqm \"\n            f'below minimum {min_area}sqm'\n        )",
      bullets: [
        'Create custom exception for invalid geometry',
        'Inherit from Exception base class',
        'Raise with descriptive message',
        'Separate error types for different failures',
      ],
    },
    speakerNotes: [
      'Custom exceptions improve code clarity',
      'Separate GeometryError from ComplianceError',
      'Include specific values in messages',
      'Docstrings document purpose',
    ],
  },

  // Slide 23: Practice - Column Height Rule
  {
    id: 23,
    type: 'exercise',
    title: 'Practice: Column Height Rule',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Raise error if column height exceeds design limit (max 4 meters).',
        input: "column = {'id': 'C1', 'height': 4.5}",
        expectedOutput: 'DesignError: Column C1 height 4.5m exceeds limit 4.0m',
        hint: 'Define DesignError class. Check column["height"] > max_height.',
      },
    },
    speakerNotes: [
      'Design constraints must be enforced',
      'Custom DesignError for this violation type',
      'Include actual vs limit values',
    ],
  },

  // Slide 24: Practice - Data Pipeline Guard
  {
    id: 24,
    type: 'exercise',
    title: 'Practice: Data Pipeline Guard',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Stop processing if building JSON missing required section.',
        input: "data = {'name': 'Tower A'}  # Missing 'rooms' section",
        expectedOutput: 'DataError: Building data missing required section: rooms',
        hint: 'Check if "rooms" in data. Raise DataError if missing.',
      },
    },
    speakerNotes: [
      'Pipeline guards prevent processing bad data',
      'Fail fast before expensive operations',
      'DataError indicates structural problem',
    ],
  },

  // Slide 25: Mini Challenge - Robust BIM Dataset Processor
  {
    id: 25,
    type: 'lab',
    title: 'Mini Challenge: Robust BIM Dataset Processor',
    durationMinutes: 25,
    content: {
      labSteps: [
        { step: 1, instruction: 'Create data processor function that loads building JSON' },
        { step: 2, instruction: 'Validate all rooms have required fields (number, name, area, level)' },
        { step: 3, instruction: 'Validate footprint geometry has at least 3 points' },
        { step: 4, instruction: 'Handle all errors gracefully with try/except and custom exceptions' },
        { step: 5, instruction: 'Output summary only if dataset passes validation, otherwise report errors' },
      ],
    },
    speakerNotes: [
      'Integrates all Week 11 skills',
      'Real-world scenario: processing BIM data',
      'Must handle multiple error types',
      'Clear output: success report OR error list',
    ],
  },

  // Slide 26: Recap
  {
    id: 26,
    type: 'recap',
    title: 'Week 11 Recap',
    durationMinutes: 5,
    content: {
      recapItems: [
        'Common Python errors: TypeError, ValueError, KeyError, IndexError',
        'try/except/else/finally structure for robust error handling',
        'Data validation: check keys, types, ranges, geometry',
        'Guard clauses and fail-fast principle',
        'Custom exceptions for domain-specific errors',
        'Defensive coding for production scripts',
      ],
    },
    speakerNotes: [
      'Error handling is professional practice',
      'Validate early, validate often',
      'Custom exceptions improve debugging',
      'BIM data requires defensive approach',
    ],
  },

  // Slide 27: Next Week Preview
  {
    id: 27,
    type: 'preview',
    title: 'Coming Up Next Week',
    durationMinutes: 5,
    content: {
      previewTopics: [
        'Week 12: APIs & External Services',
        'Connecting to Web Services and REST APIs',
        'Fetching Real-World Data (Weather, Geographic)',
        'BIM 360 and Cloud Platform Integration',
        'Building Connected Automation Workflows',
      ],
    },
    speakerNotes: [
      'Next week: Connecting to the world',
      'APIs unlock external data sources',
      'Weather, geolocation, cloud services',
      'Your scripts become truly powerful',
    ],
  },
];

export const week11TotalSlides = week11Slides.length;

export function getWeek11SlideById(id: number): SlideData | null {
  return week11Slides.find((slide) => slide.id === id) || null;
}
