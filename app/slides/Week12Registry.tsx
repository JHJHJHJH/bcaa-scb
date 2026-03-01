import { SlideData } from './types';

export const week12Slides: SlideData[] = [
  // Slide 1: Opening
  {
    id: 1,
    type: 'opening',
    title: 'Object-Oriented Programming (OOP) for Geometry & BIM Modeling',
    durationMinutes: 5,
    content: {
      subtitle: 'Week 12: Modeling BIM Elements as Objects',
      bullets: [
        'Understand object-oriented programming concepts',
        'Create classes and objects',
        'Use attributes and methods',
        'Model BIM elements using classes',
        'Encapsulate geometry logic inside objects',
      ],
    },
    speakerNotes: [
      'Welcome to Week 12 - we are moving into object-oriented programming.',
      'OOP is how professional software is built.',
      'Classes let us model real-world BIM elements in code.',
      'By the end: You will have a mini BIM object model.',
      'Ask: "What is a Room in code? What properties does it have?"',
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
        'Introduction to OOP (35 min)',
        'Geometry as Objects (45 min)',
        'Building as an Object (50 min)',
        'Refactoring from Dictionaries to Classes (30 min)',
        'Mini Challenge: Mini BIM Object Model (20 min)',
      ],
    },
    speakerNotes: [
      'Five modules progressing from OOP basics to BIM modeling.',
      'Start with simple classes, build to complex object models.',
      'Emphasis on encapsulation and clean architecture.',
      'Mini challenge: Complete BIM object model.',
    ],
  },

  // Slide 3: What is Object-Oriented Programming?
  {
    id: 3,
    type: 'concept',
    title: 'What is Object-Oriented Programming?',
    durationMinutes: 15,
    content: {
      bullets: [
        'OOP organizes code around objects rather than functions',
        'Objects bundle data (attributes) and behavior (methods) together',
        'Class: Blueprint/template for creating objects',
        'Object: Instance of a class with actual values',
        'Think of a class as a cookie cutter, objects as the cookies',
      ],
    },
    speakerNotes: [
      'Contrast with procedural programming (functions only)',
      'OOP matches how we think about the world',
      'A Room class defines what a room IS and what it DOES',
      'Cookie cutter analogy helps beginners',
    ],
  },

  // Slide 4: Why OOP Matters for BIM
  {
    id: 4,
    type: 'concept',
    title: 'Why OOP Matters for BIM',
    durationMinutes: 15,
    content: {
      bullets: [
        'BIM elements are naturally objects: Rooms, Walls, Columns, Slabs',
        'Each element has properties (area, height, material) and behaviors (calculate volume, check compliance)',
        'OOP enables complex systems with clean, maintainable code',
        'Encapsulation: Hide complexity, expose simple interfaces',
        'Real BIM software (Revit, etc.) uses OOP internally',
      ],
    },
    speakerNotes: [
      'Connect to their Revit experience',
      'Revit families are classes, placed instances are objects',
      'OOP scales better than dictionaries for complex systems',
      'Industry-standard approach',
    ],
  },

  // Slide 5: Defining a Class
  {
    id: 5,
    type: 'demo',
    title: 'Defining a Class',
    durationMinutes: 15,
    content: {
      code: "# Define a Room class\nclass Room:\n    # Constructor method - creates new Room objects\n    def __init__(self, number, name, area, level):\n        self.number = number  # Instance attribute\n        self.name = name\n        self.area = area\n        self.level = level\n\n# Create Room objects (instances)\nroom1 = Room('101', 'Conference', 45.5, 'Level 1')\nroom2 = Room('102', 'Office', 12.0, 'Level 1')\n\n# Access attributes\nprint(f\"{room1.name}: {room1.area} sqm\")\nprint(f\"{room2.name}: {room2.area} sqm\")",
      bullets: [
        'class keyword defines a new class',
        '__init__ is the constructor - runs when object is created',
        'self refers to the current object instance',
        'Attributes store data unique to each object',
      ],
    },
    speakerNotes: [
      '__init__ is automatically called on creation',
      'self must be first parameter in all methods',
      'Attributes are accessed with dot notation',
      'Each object has its own copy of attributes',
    ],
  },

  // Slide 6: Adding Methods
  {
    id: 6,
    type: 'demo',
    title: 'Adding Methods to Classes',
    durationMinutes: 15,
    content: {
      code: "class Room:\n    def __init__(self, number, name, area, level):\n        self.number = number\n        self.name = name\n        self.area = area\n        self.level = level\n    \n    # Method to check if room is large\n    def is_large(self, min_area=20.0):\n        return self.area >= min_area\n    \n    # Method to get summary string\n    def summary(self):\n        return f\"{self.number} {self.name}: {self.area}sqm on {self.level}\"\n\n# Use the methods\nroom = Room('101', 'Conference', 45.5, 'Level 1')\nprint(room.summary())\nprint(f\"Is large: {room.is_large()}\")  # True\nprint(f\"Is large (min 50): {room.is_large(50)}\")  # False",
      bullets: [
        'Methods are functions inside a class',
        'self parameter gives access to object attributes',
        'Methods define object behaviors',
        'Call methods with dot notation',
      ],
    },
    speakerNotes: [
      'Methods are the verbs of the object',
      'is_large() checks a property of the room',
      'summary() formats room data for display',
      'Methods can have default parameters',
    ],
  },

  // Slide 7: Demo - Create a Room Class
  {
    id: 7,
    type: 'demo',
    title: 'Demo: Create a Room Class',
    durationMinutes: 15,
    content: {
      code: "# Define Room class with attributes and methods\nclass Room:\n    def __init__(self, number, name, area, level):\n        self.number = number\n        self.name = name\n        self.area = area\n        self.level = level\n    \n    def is_large(self, min_area=20.0):\n        return self.area >= min_area\n    \n    def summary(self):\n        return f\"{self.number} {self.name}: {self.area}sqm\"\n\n# Create instances\nconf_room = Room('101', 'Conference', 45.5, 'Level 1')\noffice = Room('102', 'Office', 12.0, 'Level 1')\n\n# Test methods\nprint(conf_room.summary())\nprint(f\"Conference is large: {conf_room.is_large()}\")\nprint(f\"Office is large: {office.is_large()}\")",
      bullets: [
        'Define Room class with attributes: name, area, level',
        'Add method is_large(min_area) to check compliance',
        'Create multiple Room objects',
        'Call methods on each object',
      ],
    },
    speakerNotes: [
      'Walk through class definition step by step',
      'Show how __init__ sets up each object',
      'Demonstrate self accessing instance data',
      'Create multiple objects to show independence',
    ],
  },

  // Slide 8: Practice - Column Class
  {
    id: 8,
    type: 'exercise',
    title: 'Practice: Column Class',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Create Column class with height, material, and location attributes.',
        input: 'height=3.5, material="concrete", location=(10.0, 20.0)',
        expectedOutput: 'Column at (10.0, 20.0): 3.5m concrete',
        hint: 'Define __init__ with height, material, location. Add summary() method.',
      },
    },
    speakerNotes: [
      'Simple class creation exercise',
      'Location as tuple (x, y)',
      'summary() method for formatted output',
    ],
  },

  // Slide 9: Practice - Slab Volume Method
  {
    id: 9,
    type: 'exercise',
    title: 'Practice: Slab Volume Method',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Create Slab class and add volume() method that calculates area × thickness.',
        input: 'area=50.0, thickness=0.2',
        expectedOutput: 'Volume: 10.0 cubic meters',
        hint: 'volume = self.area * self.thickness',
      },
    },
    speakerNotes: [
      'Method that performs calculation',
      'Returns computed value',
      'Encapsulates slab volume logic',
    ],
  },

  // Slide 10: Geometry as Objects
  {
    id: 10,
    type: 'concept',
    title: 'Geometry as Objects',
    durationMinutes: 15,
    content: {
      bullets: [
        'Geometric entities map perfectly to OOP: Point, Line, Polygon',
        'Point: x, y coordinates with distance_to() method',
        'Line: start and end points with length() method',
        'Polygon: list of points with area() and centroid() methods',
        'Encapsulate geometry formulas inside appropriate classes',
      ],
    },
    speakerNotes: [
      'Geometry is the ideal domain for OOP',
      'Natural mapping between math and code',
      'Methods hide formula complexity',
      'Point.distance_to() is cleaner than standalone function',
    ],
  },

  // Slide 11: Demo - Point Class
  {
    id: 11,
    type: 'demo',
    title: 'Demo: Point Class',
    durationMinutes: 20,
    content: {
      code: "import math\n\nclass Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    def distance_to(self, other):\n        return math.sqrt((self.x - other.x)**2 + (self.y - other.y)**2)\n    \n    def __repr__(self):\n        return f'Point({self.x}, {self.y})'\n\n# Create points\np1 = Point(0, 0)\np2 = Point(3, 4)\n\n# Use distance method\ndist = p1.distance_to(p2)\nprint(f'Distance: {dist}')  # 5.0\n\n# Points know their own coordinates\nprint(f'p1: {p1}')\nprint(f'p2: {p2}')",
      bullets: [
        'Create Point class with x, y attributes',
        'Add distance_to(other_point) method',
        '__repr__ controls string representation',
        'Encapsulates point geometry logic',
      ],
    },
    speakerNotes: [
      'Point is the fundamental geometry class',
      'distance_to() is a method, not a function',
      '__repr__ makes printing readable',
      'Methods use self and other points',
    ],
  },

  // Slide 12: Demo - Polygon Class
  {
    id: 12,
    type: 'demo',
    title: 'Demo: Polygon Class',
    durationMinutes: 20,
    content: {
      code: "class Polygon:\n    def __init__(self, points):\n        self.points = points  # List of Point objects\n    \n    def area(self):\n        # Shoelace formula\n        n = len(self.points)\n        if n < 3:\n            return 0\n        \n        total = 0\n        for i in range(n):\n            j = (i + 1) % n\n            total += self.points[i].x * self.points[j].y\n            total -= self.points[j].x * self.points[i].y\n        return abs(total) / 2\n    \n    def vertex_count(self):\n        return len(self.points)\n\n# Usage\npts = [Point(0, 0), Point(10, 0), Point(10, 5), Point(0, 5)]\nrect = Polygon(pts)\nprint(f'Area: {rect.area()}')  # 50.0\nprint(f'Vertices: {rect.vertex_count()}')  # 4",
      bullets: [
        'Create Polygon class with points list',
        'Implement area() method using shoelace formula',
        'Polygon encapsulates complex area calculation',
        'Uses Point objects internally',
      ],
    },
    speakerNotes: [
      'Polygon contains a list of Point objects',
      'Shoelace formula implementation',
      'Area calculation is encapsulated',
      'Method uses self.points to access data',
    ],
  },

  // Slide 13: Practice - Bounding Box Method
  {
    id: 13,
    type: 'exercise',
    title: 'Practice: Bounding Box Method',
    durationMinutes: 15,
    content: {
      exercise: {
        problem: 'Add bounding_box() method to Polygon class that returns (min_x, min_y, max_x, max_y).',
        input: 'Polygon with points [(0,0), (10,0), (10,5), (0,5)]',
        expectedOutput: '(0, 0, 10, 5)',
        hint: 'Loop through points to find min and max x and y values.',
      },
    },
    speakerNotes: [
      'Practice iterating over points',
      'Find min/max coordinates',
      'Return as tuple',
    ],
  },

  // Slide 14: Practice - Polyline Class
  {
    id: 14,
    type: 'exercise',
    title: 'Practice: Polyline Class',
    durationMinutes: 15,
    content: {
      exercise: {
        problem: 'Create Polyline class with length() method that sums segment lengths.',
        input: 'Points: [(0,0), (3,4), (6,0)]',
        expectedOutput: 'Length: 10.0 (5 + 5)',
        hint: 'Sum distance between consecutive points using distance_to().',
      },
    },
    speakerNotes: [
      'Polyline is open (unlike polygon)',
      'Sum distances between consecutive points',
      'Uses Point.distance_to() method',
    ],
  },

  // Slide 15: Practice - 3D Point Extension
  {
    id: 15,
    type: 'exercise',
    title: 'Practice: 3D Point Extension',
    durationMinutes: 15,
    content: {
      exercise: {
        problem: 'Extend Point class to support z coordinate and update distance_to for 3D.',
        input: 'p1 = Point3D(0, 0, 0), p2 = Point3D(3, 4, 0)',
        expectedOutput: 'Distance: 5.0',
        hint: 'Add z parameter to __init__. Update distance formula: sqrt(dx^2 + dy^2 + dz^2)',
      },
    },
    speakerNotes: [
      'Extend class with new attribute',
      'Update existing method',
      '3D distance formula',
    ],
  },

  // Slide 16: Building as an Object
  {
    id: 16,
    type: 'concept',
    title: 'Building as an Object',
    durationMinutes: 15,
    content: {
      bullets: [
        'Composition: Objects can contain other objects',
        'Building contains Rooms, Footprint (Polygon), etc.',
        'Encapsulation of complex logic inside Building class',
        'Building.summary() delegates to Room.summary()',
        'Object relationships mirror real-world structure',
      ],
    },
    speakerNotes: [
      'Composition is has-a relationship',
      'Building has Rooms, Building has Footprint',
      'Container objects manage contained objects',
      'Methods can call methods on contained objects',
    ],
  },

  // Slide 17: Demo - Building Class
  {
    id: 17,
    type: 'demo',
    title: 'Demo: Building Class with Composition',
    durationMinutes: 25,
    content: {
      code: "class Building:\n    def __init__(self, name):\n        self.name = name\n        self.rooms = []  # List of Room objects\n    \n    def add_room(self, room):\n        self.rooms.append(room)\n    \n    def total_area(self):\n        return sum(room.area for room in self.rooms)\n    \n    def room_count(self):\n        return len(self.rooms)\n    \n    def summary(self):\n        print(f'Building: {self.name}')\n        print(f'Total Rooms: {self.room_count()}')\n        print(f'Total Area: {self.total_area()} sqm')\n        print('Rooms:')\n        for room in self.rooms:\n            print(f'  {room.summary()}')\n\n# Create building and add rooms\nbuilding = Building('Office Tower')\nbuilding.add_room(Room('101', 'Conference', 45.5, 'Level 1'))\nbuilding.add_room(Room('102', 'Office', 12.0, 'Level 1'))\nbuilding.summary()",
      bullets: [
        'Building contains list of Room objects',
        'add_room() method to populate building',
        'total_area() delegates to room.area attributes',
        'Composition models real building structure',
      ],
    },
    speakerNotes: [
      'Building is a container class',
      'rooms list stores Room objects',
      'Methods aggregate data from rooms',
      'Show how objects collaborate',
    ],
  },

  // Slide 18: Demo - Total Area Method
  {
    id: 18,
    type: 'demo',
    title: 'Demo: Building Methods',
    durationMinutes: 15,
    content: {
      code: "class Building:\n    def __init__(self, name):\n        self.name = name\n        self.rooms = []\n    \n    def add_room(self, room):\n        self.rooms.append(room)\n    \n    def total_area(self):\n        return sum(room.area for room in self.rooms)\n    \n    def largest_room(self):\n        if not self.rooms:\n            return None\n        return max(self.rooms, key=lambda r: r.area)\n    \n    def rooms_by_level(self, level):\n        return [r for r in self.rooms if r.level == level]\n\n# Usage\nbuilding = Building('Tower A')\n# ... add rooms ...\nprint(f'Largest: {building.largest_room().name}')\nlevel1_rooms = building.rooms_by_level('Level 1')",
      bullets: [
        'total_area() sums all room areas',
        'largest_room() finds maximum area room',
        'rooms_by_level() filters by level',
        'Building class encapsulates aggregate logic',
      ],
    },
    speakerNotes: [
      'Methods provide building-level queries',
      'largest_room() uses max() with key',
      'rooms_by_level() uses list comprehension',
      'All logic encapsulated in Building class',
    ],
  },

  // Slide 19: Practice - Find Largest Room
  {
    id: 19,
    type: 'exercise',
    title: 'Practice: Find Largest Room',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Add largest_room() method to Building class that returns the Room with maximum area.',
        input: 'Building with 5 rooms of varying areas',
        expectedOutput: 'Room object with largest area',
        hint: 'Use max(self.rooms, key=lambda r: r.area) or loop to find max.',
      },
    },
    speakerNotes: [
      'Practice with max() function',
      'key parameter extracts comparison value',
      'Return Room object, not just name',
    ],
  },

  // Slide 20: Practice - Compliance Check
  {
    id: 20,
    type: 'exercise',
    title: 'Practice: Compliance Check',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Add validate_rooms(min_area) method that returns list of rooms below minimum area.',
        input: 'Building with rooms, min_area=10.0',
        expectedOutput: 'List of non-compliant Room objects',
        hint: 'Use list comprehension: [r for r in self.rooms if r.area < min_area]',
      },
    },
    speakerNotes: [
      'Filter rooms by condition',
      'Return list of failing rooms',
      'List comprehension approach',
    ],
  },

  // Slide 21: Practice - Footprint Integration
  {
    id: 21,
    type: 'exercise',
    title: 'Practice: Footprint Integration',
    durationMinutes: 15,
    content: {
      exercise: {
        problem: 'Add footprint Polygon to Building and compute site_coverage(site_area).',
        input: 'Building with footprint polygon and site_area=1000.0',
        expectedOutput: 'Site coverage: 25.0%',
        hint: 'Store Polygon in self.footprint. coverage = footprint.area() / site_area * 100',
      },
    },
    speakerNotes: [
      'Add Polygon as Building attribute',
      'Calculate coverage percentage',
      'Combine geometry and building data',
    ],
  },

  // Slide 22: Refactoring from Dictionaries to Classes
  {
    id: 22,
    type: 'concept',
    title: 'Refactoring from Dictionaries to Classes',
    durationMinutes: 15,
    content: {
      bullets: [
        'Dictionary: room = {"name": "Office", "area": 12.0}',
        'Class: room = Room("Office", 12.0, ...)',
        'Classes provide methods (behavior) + data',
        'Type safety: classes document expected attributes',
        'Refactoring: Convert old dict-based code to OOP',
      ],
    },
    speakerNotes: [
      'Show evolution from dict to class',
      'Classes add behavior (methods) to data',
      'Type hints work better with classes',
      'Refactoring improves code over time',
    ],
  },

  // Slide 23: Demo - Converting Dictionary to Object
  {
    id: 23,
    type: 'demo',
    title: 'Demo: Converting Dictionary to Object',
    durationMinutes: 15,
    content: {
      code: "# Old way: Dictionary\nroom_dict = {\n    'number': '101',\n    'name': 'Conference',\n    'area': 45.5,\n    'level': 'Level 1'\n}\n\n# New way: Object\nroom = Room('101', 'Conference', 45.5, 'Level 1')\n\n# Converting data\ndef room_from_dict(data):\n    return Room(\n        data['number'],\n        data['name'],\n        data['area'],\n        data['level']\n    )\n\n# Convert list of dicts to list of objects\nroom_dicts = [...]  # From JSON/CSV\nrooms = [room_from_dict(r) for r in room_dicts]\n\n# Now we can use methods!\nfor room in rooms:\n    print(room.summary())",
      bullets: [
        'Take existing room dictionary',
        'Create Room object from dictionary data',
        'Conversion function room_from_dict()',
        'List comprehension for batch conversion',
      ],
    },
    speakerNotes: [
      'Show before (dict) and after (object)',
      'Conversion function extracts values',
      'Batch convert with list comprehension',
      'Now methods are available',
    ],
  },

  // Slide 24: Practice - Convert JSON Data to Objects
  {
    id: 24,
    type: 'exercise',
    title: 'Practice: Convert JSON Data to Objects',
    durationMinutes: 15,
    content: {
      exercise: {
        problem: 'Load JSON data and create Building and Room objects.',
        input: '{"name": "Tower A", "rooms": [{"number": "101", "area": 45.5}, ...]}',
        expectedOutput: 'Building object with Room objects inside',
        hint: 'json.load() to get dict, then create Building, loop through rooms to create Room objects.',
      },
    },
    speakerNotes: [
      'Combine JSON loading with OOP',
      'Parse dict into object hierarchy',
      'Real-world data loading pattern',
    ],
  },

  // Slide 25: Mini Challenge - Mini BIM Object Model
  {
    id: 25,
    type: 'lab',
    title: 'Mini Challenge: Mini BIM Object Model',
    durationMinutes: 20,
    content: {
      labSteps: [
        { step: 1, instruction: 'Create Point class with x, y and distance_to() method' },
        { step: 2, instruction: 'Create Polygon class with points list and area() method' },
        { step: 3, instruction: 'Create Room class with number, name, area, level attributes' },
        { step: 4, instruction: 'Create Building class with name, rooms list, footprint (Polygon)' },
        { step: 5, instruction: 'Load building data, compute total GFA, footprint area, print compliance report using object methods' },
      ],
    },
    speakerNotes: [
      'Integrates all Week 12 skills',
      'Complete object model from scratch',
      'Uses composition and methods',
      'Clean output using class methods',
    ],
  },

  // Slide 26: Recap
  {
    id: 26,
    type: 'recap',
    title: 'Week 12 Recap',
    durationMinutes: 5,
    content: {
      recapItems: [
        'Classes are blueprints, objects are instances',
        '__init__ constructor initializes objects',
        'Attributes store data, methods define behavior',
        'Geometry classes: Point, Line, Polygon with methods',
        'Composition: Building contains Rooms and Footprint',
        'Refactoring: Converting dictionaries to classes',
        'OOP enables clean, scalable BIM modeling',
      ],
    },
    speakerNotes: [
      'OOP is powerful but takes practice',
      'Start simple, build complexity gradually',
      'Composition models real relationships',
      'Classes make code more maintainable',
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
        'Week 13: Inheritance & Polymorphism',
        'Extending Classes with Inheritance',
        'Specialized BIM Element Types',
        'Method Overriding and Polymorphism',
        'Advanced OOP Patterns',
      ],
    },
    speakerNotes: [
      'Next week: Advanced OOP concepts',
      'Inheritance for specialized elements',
      'Wall inherits from Element, etc.',
      'Polymorphism for processing mixed collections',
    ],
  },
];

export const week12TotalSlides = week12Slides.length;

export function getWeek12SlideById(id: number): SlideData | null {
  return week12Slides.find((slide) => slide.id === id) || null;
}
