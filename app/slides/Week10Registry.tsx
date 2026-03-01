import { SlideData } from './types';

export const week10Slides: SlideData[] = [
  // Slide 1: Opening
  {
    id: 1,
    type: 'opening',
    title: 'File I/O, JSON & Structured Data Exchange',
    durationMinutes: 5,
    content: {
      subtitle: 'Week 10: Building the Bridge Between Code and External Data',
      bullets: [
        'Master Python File I/O: opening, reading, writing files safely',
        'Process CSV data: parse room data and building schedules',
        'Work with JSON: the standard format for modern BIM data exchange',
        'Build data pipelines: Load → Process → Validate → Export',
        'Create practical automations: quantity takeoff from external data',
      ],
    },
    speakerNotes: [
      'This is a practical, high-impact week',
      'These skills directly translate to real BIM automation tasks',
      'File I/O is often where beginners get stuck - we will make it clear',
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
        'File I/O Basics (35 min)',
        'CSV Processing (40 min)',
        'JSON Data (55 min)',
        'Mini Data Pipeline (30 min)',
        'Mini Challenge: Quantity Takeoff (20 min)',
      ],
    },
    speakerNotes: [
      'Five modules covering the complete data workflow',
      'From simple file reading to complete data pipelines',
      'Emphasis on practical BIM applications',
      'Mini challenge: Real quantity takeoff automation',
    ],
  },

  // Slide 3: Why File I/O and JSON
  {
    id: 3,
    type: 'concept',
    title: 'Why File I/O & JSON?',
    durationMinutes: 10,
    content: {
      bullets: [
        'Every BIM automation task involves data exchange:',
        'Revit schedules exported to CSV for analysis',
        'Room data reports in Excel need processing',
        'IFC/JSON files contain building information',
        'Dynamo scripts output JSON for external tools',
        'Analysis results must be written to reports',
      ],
    },
    speakerNotes: [
      'Connect to their experience with Excel exports',
      'This is the plumbing of BIM automation',
      'Revit schedules export to CSV',
      'Room data for area analysis',
      'Dynamo to JSON to Python pipeline',
    ],
  },

  // Slide 4: File I/O Basics
  {
    id: 4,
    type: 'demo',
    title: 'File I/O Basics',
    durationMinutes: 15,
    content: {
      code: "# Step 1: Open the file\nfile = open('data.txt', 'r')  # 'r' = read mode\n\n# Step 2: Read the content\ncontent = file.read()\n\n# Step 3: Close the file (important!)\nfile.close()\n\nprint(content)",
      bullets: [
        "'r' - Read mode (default)",
        "'w' - Write mode (creates new or overwrites)",
        "'a' - Append mode (adds to end)",
        "'x' - Create mode (fails if exists)",
      ],
    },
    speakerNotes: [
      'Always close files to free system resources',
      'Forgetting close() causes resource leaks',
      'Show both read and write modes',
    ],
  },

  // Slide 5: The with Statement
  {
    id: 5,
    type: 'demo',
    title: "The 'with' Statement",
    durationMinutes: 15,
    content: {
      code: "# Without 'with' - manual close required\nfile = open('data.txt', 'r')\ncontent = file.read()\nfile.close()  # Easy to forget!\n\n# With 'with' - automatic cleanup\nwith open('data.txt', 'r') as file:\n    content = file.read()\n    # File auto-closes here, even on error",
      bullets: [
        'The with statement automatically closes files',
        'Cleanup happens even if errors occur',
        'Best practice: Always use with for file operations',
      ],
    },
    speakerNotes: [
      "with is called a 'context manager'",
      'It guarantees cleanup even if exceptions occur',
      'This is the professional standard - always use with',
    ],
  },

  // Slide 6: Demo Reading Files
  {
    id: 6,
    type: 'demo',
    title: 'Demo: Reading Files',
    durationMinutes: 10,
    content: {
      code: "# Read room areas from file\nrooms = []\n\nwith open('room_areas.txt', 'r') as file:\n    lines = file.readlines()\n    \n    for line in lines:\n        parts = line.strip().split(',')\n        room = {\n            'name': parts[0],\n            'area': float(parts[1])\n        }\n        rooms.append(room)\n\nprint(f'Loaded {len(rooms)} rooms')\nfor room in rooms:\n    print(f\"{room['name']}: {room['area']} sqm\")",
      bullets: [
        'Create a text file with room data',
        'Use with to read and print content',
        'Parse the data to extract room names and areas',
      ],
    },
    speakerNotes: [
      'Create sample room_areas.txt file',
      'Show file.read() for full content',
      'Show file.readlines() for line-by-line',
    ],
  },

  // Slide 7: Reading Methods
  {
    id: 7,
    type: 'demo',
    title: 'Reading Methods',
    durationMinutes: 10,
    content: {
      code: "# Method 1: Read entire file as string\nwith open('data.txt', 'r') as file:\n    content = file.read()\n    print(content)  # Entire file\n\n# Method 2: Read line by line\nwith open('data.txt', 'r') as file:\n    for line in file:\n        print(line.strip())  # .strip() removes newline\n\n# Method 3: Read all lines into list\nwith open('data.txt', 'r') as file:\n    lines = file.readlines()\n    print(lines[0])  # First line",
      bullets: [
        'Method 2 is recommended for large files',
        'Memory-efficient and commonly used',
        'strip() removes newline characters',
      ],
    },
    speakerNotes: [
      'Method 2 is most common for processing data files',
      'strip() removes newline characters at end of lines',
      'readlines() returns a list you can index',
    ],
  },

  // Slide 8: Demo Writing Files
  {
    id: 8,
    type: 'demo',
    title: 'Demo: Writing Files',
    durationMinutes: 10,
    content: {
      code: "# Create a project summary report\nproject_name = 'Office Tower'\ntotal_area = 1250.5\nnum_rooms = 42\n\nwith open('project_report.txt', 'w') as file:\n    file.write('PROJECT SUMMARY\\n')\n    file.write('=' * 40 + '\\n')\n    file.write(f'Project: {project_name}\\n')\n    file.write(f'Total Area: {total_area} sqm\\n')\n    file.write(f'Number of Rooms: {num_rooms}\\n')\n    file.write('\\nGenerated by Python\\n')\n\nprint('Report saved to project_report.txt')",
      bullets: [
        'Open file in write mode (w)',
        'Write project summary with calculated totals',
        'Verify the file was created correctly',
      ],
    },
    speakerNotes: [
      "Use 'w' mode to create new file",
      'Show file.write() with strings',
      'Show file.writelines() with list',
    ],
  },

  // Slide 9: Writing to Files
  {
    id: 9,
    type: 'demo',
    title: 'Writing to Files',
    durationMinutes: 10,
    content: {
      code: "# Write mode 'w' - creates or overwrites\nwith open('output.txt', 'w') as file:\n    file.write('Building Analysis Report\\n')\n    file.write('=' * 30 + '\\n')\n\n# Append mode 'a' - adds to existing file\nwith open('output.txt', 'a') as file:\n    file.write('\\nTotal Area: 1250 sqm\\n')\n\n# Write multiple lines at once\nlines = ['Line 1\\n', 'Line 2\\n', 'Line 3\\n']\nwith open('output.txt', 'w') as file:\n    file.writelines(lines)",
      bullets: [
        "'w' mode overwrites existing files!",
        "'a' mode appends to existing files",
        'writelines() writes a list of strings',
      ],
    },
    speakerNotes: [
      "write() doesn't add newlines automatically",
      'Include \\n in strings for line breaks',
      "'w' is destructive - show how to be careful",
    ],
  },

  // Slide 10: CSV Data
  {
    id: 10,
    type: 'concept',
    title: 'CSV Data',
    durationMinutes: 15,
    content: {
      bullets: [
        'CSV (Comma-Separated Values) is the universal format for tabular data exchange:',
        'rooms.csv: Room Number, Room Name, Area, Level',
        'Revit schedules export to CSV',
        'Room data reports',
        'Cost estimates and quantity takeoffs',
        'Equipment schedules',
      ],
    },
    speakerNotes: [
      'CSV is the bridge between Revit and Python analysis',
      'Most BIM tools can export to CSV',
      "It's just text - Python can process it easily",
    ],
  },

  // Slide 11: Reading CSV Files
  {
    id: 11,
    type: 'demo',
    title: 'Reading CSV Files',
    durationMinutes: 20,
    content: {
      code: "# rooms.csv contains room data\nrooms = []\n\nwith open('rooms.csv', 'r') as file:\n    # Skip header line\n    header = file.readline()\n    \n    # Process each data line\n    for line in file:\n        # Remove newline and split by comma\n        parts = line.strip().split(',')\n        \n        room = {\n            'number': parts[0],\n            'name': parts[1],\n            'area': float(parts[2]),\n            'level': parts[3]\n        }\n        rooms.append(room)\n\nprint(f'Loaded {len(rooms)} rooms')",
      bullets: [
        'This pattern converts CSV rows to dictionaries',
        'Making data easy to work with in Python',
        'Use split() to break lines into values',
      ],
    },
    speakerNotes: [
      "split(',') breaks line into list of values",
      'Convert numeric strings with float() or int()',
      'skip header or use it to create keys',
    ],
  },

  // Slide 12: Demo CSV Room Parser
  {
    id: 12,
    type: 'demo',
    title: 'Demo: CSV Room Parser',
    durationMinutes: 10,
    content: {
      code: "# Load and analyze room data from CSV\nrooms = []\n\nwith open('rooms.csv', 'r') as file:\n    next(file)  # Skip header\n    for line in file:\n        parts = line.strip().split(',')\n        rooms.append({\n            'number': parts[0],\n            'name': parts[1],\n            'area': float(parts[2]),\n            'level': parts[3]\n        })\n\n# Calculate totals\ntotal_area = sum(room['area'] for room in rooms)\nlevel_1_area = sum(r['area'] for r in rooms if r['level'] == 'Level 1')\n\nprint(f'Total Area: {total_area} sqm')\nprint(f'Level 1 Area: {level_1_area} sqm')",
      bullets: [
        'Read rooms.csv file',
        'Convert to list of dictionaries',
        'Calculate total area and per-level statistics',
      ],
    },
    speakerNotes: [
      'Show CSV file contents first',
      'Parse with split(\',\')',
      'Compute totals with loop',
    ],
  },

  // Slide 13: Writing CSV Files
  {
    id: 13,
    type: 'demo',
    title: 'Writing CSV Files',
    durationMinutes: 10,
    content: {
      code: "# Data to export\nrooms = [\n    {'number': '101', 'name': 'Conference', 'area': 45.2},\n    {'number': '102', 'name': 'Office A', 'area': 12.5}\n]\n\n# Write CSV file\nwith open('output.csv', 'w') as file:\n    # Write header\n    file.write('Number,Name,Area\\n')\n    \n    # Write each room\n    for room in rooms:\n        line = f\"{room['number']},{room['name']},{room['area']}\\n\"\n        file.write(line)\n\nprint('CSV file created successfully')",
      bullets: [
        'CSV is just formatted text',
        'You control the format: commas, headers, line breaks',
        'f-strings make formatting easy',
      ],
    },
    speakerNotes: [
      'Building CSV manually is straightforward',
      'Ensure consistent formatting',
      'Use \\n at end of each line',
    ],
  },

  // Slide 14: JSON - The Data Standard
  {
    id: 14,
    type: 'concept',
    title: 'JSON: The Data Standard',
    durationMinutes: 15,
    content: {
      bullets: [
        'JSON (JavaScript Object Notation) is the modern standard for structured data exchange:',
        'Dynamo uses JSON for data exchange',
        'Web APIs return JSON',
        'BIM 360 and cloud platforms use JSON',
        'Human-readable and Python-friendly',
        'JSON structure: {"building": "Tower A", "floors": 25, "rooms": [...]}',
      ],
    },
    speakerNotes: [
      'JSON looks like Python dictionaries',
      "It's the standard for API data exchange",
      'BIM tools increasingly use JSON',
    ],
  },

  // Slide 15: Loading JSON Files
  {
    id: 15,
    type: 'demo',
    title: 'Loading JSON Files',
    durationMinutes: 20,
    content: {
      code: "import json\n\n# Load JSON from file\nwith open('building.json', 'r') as file:\n    building_data = json.load(file)\n\n# Now use like a dictionary\nprint(building_data['building'])  # Tower A\nprint(building_data['floors'])    # 25\n\n# Access nested data\nfor room in building_data['rooms']:\n    print(f\"{room['name']}: {room['area']} sqm\")",
      bullets: [
        'Use the json module',
        'json.load() converts JSON to Python dictionary',
        'Seamless integration with your existing code',
      ],
    },
    speakerNotes: [
      'json.load() reads file and parses in one step',
      'Result is a Python dictionary you already know',
      'Access nested data with chained brackets',
    ],
  },

  // Slide 16: Demo Load Building JSON
  {
    id: 16,
    type: 'demo',
    title: 'Demo: Load Building JSON',
    durationMinutes: 15,
    content: {
      code: "import json\n\n# Load building data from JSON\nwith open('building.json', 'r') as file:\n    data = json.load(file)\n\n# Extract project information\nprint(f\"Project: {data['project_name']}\")\nprint(f\"Location: {data['location']}\")\nprint(f\"Levels: {len(data['levels'])}\")\n\n# Calculate total area across all levels\ntotal_area = 0\nfor level in data['levels']:\n    level_area = sum(room['area'] for room in level['rooms'])\n    total_area += level_area\n    print(f\"{level['name']}: {level_area} sqm\")\n\nprint(f\"Total Building Area: {total_area} sqm\")",
      bullets: [
        'Load building data from JSON file',
        'Extract project information',
        'Calculate total area across all levels',
      ],
    },
    speakerNotes: [
      'Show JSON file structure',
      'Use json.load() to parse',
      'Loop through levels and rooms',
    ],
  },

  // Slide 17: Saving JSON Files
  {
    id: 17,
    type: 'demo',
    title: 'Saving JSON Files',
    durationMinutes: 15,
    content: {
      code: "import json\n\n# Python data structure\nproject = {\n    'name': 'Office Tower',\n    'client': 'ABC Corp',\n    'areas': {\n        'floor_1': 1250.0,\n        'floor_2': 1250.0,\n        'total': 2500.0\n    },\n    'complete': False\n}\n\n# Save to JSON file\nwith open('project.json', 'w') as file:\n    json.dump(project, file, indent=4)\n\nprint('Project saved to project.json')",
      bullets: [
        'json.dump() converts Python dict to JSON file',
        'indent=4 makes JSON human-readable',
        'Without indent, it writes as one line',
      ],
    },
    speakerNotes: [
      'json.dump() converts Python dict to JSON file',
      'indent parameter controls formatting',
      'Perfect for saving analysis results',
    ],
  },

  // Slide 18: The Data Pipeline Pattern
  {
    id: 18,
    type: 'diagram',
    title: 'The Data Pipeline Pattern',
    durationMinutes: 15,
    content: {
      diagram: 'flowchart LR\n    A[Load Data<br/>CSV/JSON] --> B[Process<br/>Analyze/Transform]\n    B --> C[Validate<br/>Check/Filter]\n    C --> D[Export<br/>Report/Save]\n    style A fill:#e1f5fe\n    style B fill:#fff3e0\n    style C fill:#f3e5f5\n    style D fill:#e8f5e9',
      diagramCaption: 'Load → Process → Validate → Export',
      bullets: [
        'Applied to BIM: Load Revit CSV export',
        'Process: Calculate areas, filter by level',
        'Validate: Check for errors, missing data',
        'Export: Write summary report',
      ],
    },
    speakerNotes: [
      'This 4-step pattern is fundamental',
      'Every automation script follows this flow',
      'Break problems into these phases',
    ],
  },

  // Slide 19: Mini BIM Data Processor
  {
    id: 19,
    type: 'demo',
    title: 'Mini BIM Data Processor',
    durationMinutes: 15,
    content: {
      code: "import json\n\n# 1. LOAD - Read room data from JSON\nwith open('rooms_export.json', 'r') as f:\n    data = json.load(f)\n\n# 2. PROCESS - Calculate per-level areas\nlevel_areas = {}\nfor room in data['rooms']:\n    level = room['level']\n    area = room['area']\n    if level not in level_areas:\n        level_areas[level] = 0\n    level_areas[level] += area\n\n# 3. VALIDATE - Check for issues\nissues = []\nfor room in data['rooms']:\n    if room['area'] <= 0:\n        issues.append(f\"Room {room['number']} has invalid area\")\n\nprint('Processing complete')",
      bullets: [
        'Complete pipeline example',
        'Load with json.load()',
        'Process with loops and conditionals',
        'Validate by checking for problems',
      ],
    },
    speakerNotes: [
      'Show each phase of the pipeline',
      'Load with json.load()',
      'Process with loops and conditionals',
      'Validate by checking for problems',
    ],
  },

  // Slide 20: Data Validation Techniques
  {
    id: 20,
    type: 'demo',
    title: 'Data Validation Techniques',
    durationMinutes: 15,
    content: {
      code: "# Common validation checks\ndef validate_room(room):\n    issues = []\n    \n    if not room.get('number'):\n        issues.append('Missing room number')\n    \n    if room.get('area', 0) <= 0:\n        issues.append(f\"Invalid area: {room.get('area')}\")\n    \n    if room.get('level') not in ['Level 1', 'Level 2', 'Level 3']:\n        issues.append(f\"Unknown level: {room.get('level')}\")\n    \n    return issues\n\n# Validate all rooms\nall_issues = []\nfor room in rooms:\n    room_issues = validate_room(room)\n    all_issues.extend(room_issues)\n\nprint(f'Found {len(all_issues)} issues')",
      bullets: [
        'Validation prevents garbage-in-garbage-out',
        'Catch data problems early in your pipeline',
        'Validation is critical for BIM data',
      ],
    },
    speakerNotes: [
      'Validation is critical for BIM data',
      'Check for missing values, invalid numbers',
      'Report issues for manual review',
    ],
  },

  // Slide 21: Lab - Quantity Takeoff Processor
  {
    id: 21,
    type: 'lab',
    title: 'Lab: Quantity Takeoff Processor',
    durationMinutes: 30,
    content: {
      labSteps: [
        { step: 1, instruction: 'Create a CSV with room/space data (number, name, area, level, department)' },
        { step: 2, instruction: 'Build a processor that loads the data using with and csv parsing' },
        { step: 3, instruction: 'Calculate quantities by category (total area, per-level, per-department)' },
        { step: 4, instruction: 'Validate the data - check for negative areas, missing fields' },
        { step: 5, instruction: 'Export results to a summary JSON file' },
      ],
    },
    speakerNotes: [
      'Provide sample CSV with errors',
      'Walk through pipeline together',
      'Show validation catching issues',
    ],
  },

  // Slide 22: Error Handling with Files
  {
    id: 22,
    type: 'demo',
    title: 'Error Handling with Files',
    durationMinutes: 15,
    content: {
      code: "# FileNotFoundError - file doesn't exist\ntry:\n    with open('missing.txt', 'r') as f:\n        data = f.read()\nexcept FileNotFoundError:\n    print('Error: File not found')\n\n# PermissionError - access denied\ntry:\n    with open('/root/protected.txt', 'r') as f:\n        data = f.read()\nexcept PermissionError:\n    print('Error: Permission denied')\n\n# Generic error handling\ntry:\n    with open('data.txt', 'r') as f:\n        data = f.read()\nexcept Exception as e:\n    print(f'Error: {e}')",
      bullets: [
        'FileNotFoundError is most common',
        'PermissionError on protected files',
        'Always wrap file operations in try-except',
      ],
    },
    speakerNotes: [
      'FileNotFoundError is most common',
      'PermissionError on protected files',
      'Always wrap file operations in try-except',
    ],
  },

  // Slide 23: Mini Challenge
  {
    id: 23,
    type: 'exercise',
    title: 'Mini Challenge: Project Data Exporter',
    durationMinutes: 20,
    content: {
      exercise: {
        problem: 'Create a script that creates a dictionary with project data (name, rooms list, totals), saves it to a JSON file, reads the JSON back and prints a formatted report',
        input: 'Project: Office Tower, Rooms: 12 rooms with varying areas',
        expectedOutput: 'Project: Office Tower\\n====================\\nTotal Rooms: 12\\nTotal Area: 1250.0 sqm\\nAverage Room: 104.2 sqm\\n\\nRooms by Level:\\n  Level 1: 6 rooms, 625.0 sqm\\n  Level 2: 6 rooms, 625.0 sqm',
        hint: 'Use json.dump() to save, json.load() to read. Build the report string with f-strings and loops.',
      },
    },
    speakerNotes: [
      'This integrates all Week 10 skills',
      'Students create, save, and load data',
      'Formatted output requires string manipulation',
    ],
  },

  // Slide 24: Recap
  {
    id: 24,
    type: 'recap',
    title: 'Week 10 Recap',
    durationMinutes: 5,
    content: {
      recapItems: [
        'File I/O with open() and the with statement',
        'Reading text and CSV files line by line',
        'Writing formatted output to files',
        'JSON: loading and saving structured data',
        'The 4-step pipeline: Load → Process → Validate → Export',
        'Data validation techniques',
        'Error handling for file operations',
      ],
    },
    speakerNotes: [
      'Connect to real BIM workflows',
      'CSV from Revit schedules',
      'JSON for modern data exchange',
      'These skills enable serious automation',
    ],
  },

  // Slide 25: Next Week Preview
  {
    id: 25,
    type: 'preview',
    title: 'Coming Up Next Week',
    durationMinutes: 5,
    content: {
      previewTopics: [
        'Week 11: APIs & External Services',
        'Connecting to Web Services and Cloud APIs',
        'Real-World Data Sources',
        'BIM 360 and Cloud Platform Integration',
        'Building Connected Workflows',
      ],
    },
    speakerNotes: [
      'Next week: Connecting to external services',
      'APIs open up a world of data',
      'Weather data, geographic data, BIM 360',
      'Building truly connected workflows',
    ],
  },
];

export const week10TotalSlides = week10Slides.length;

export function getWeek10SlideById(id: number): SlideData | null {
  return week10Slides.find((slide) => slide.id === id) || null;
}
