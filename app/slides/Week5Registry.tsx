import { SlideData } from './types';

export const week5Slides: SlideData[] = [
  // Slide 1: Opening
  {
    id: 1,
    type: 'opening',
    title: 'Functions and Reusable Geometry Utilities',
    durationMinutes: 5,
    content: {
      subtitle: 'Week 5: Building Reusable Code Blocks',
      bullets: [
        'Understand functions as reusable logic blocks',
        'Define functions using def',
        'Use parameters and return values',
        'Refactor repeated geometry logic into functions',
        'Build reusable geometry utilities',
      ],
    },
    speakerNotes: [
      'Welcome to Week 5 - we are moving from scripts to reusable tools.',
      'So far: We have written the same algorithms multiple times.',
      'Today: Write once, reuse everywhere with functions.',
      'Functions are the foundation of professional programming.',
      'By the end: You will have a personal geometry toolkit.',
      'Ask: "What calculations do you repeat across different projects?"',
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
        'Why Functions Matter (25 min)',
        'Defining and Calling Functions (40 min)',
        'Distance Function - Geometry Core (35 min)',
        'Bounding Box Function (40 min)',
        'Polygon Perimeter Function (30 min)',
        'Mini Project: Geometry Utility Toolkit (30 min)',
      ],
    },
    speakerNotes: [
      'Six modules building from function basics to geometry utilities.',
      'Each function encapsulates an algorithm we have learned.',
      'The toolkit is reusable across all your projects.',
      'Today transforms you from script writer to tool builder.',
    ],
  },

  // Slide 3: Discussion
  {
    id: 3,
    type: 'discussion',
    title: 'The Problem of Repeated Code',
    durationMinutes: 15,
    content: {
      discussionPrompt: 'How many times have we rewritten the distance formula already? What about the bounding box algorithm? What problems arise from copy-pasting code?',
    },
    speakerNotes: [
      'Students reflect on repeated code from previous weeks.',
      'Distance formula: Used in Week 2, Week 3, Week 4 exercises.',
      'Problems with repetition: Errors, maintenance, inconsistency.',
      'Find a bug in copied code? Fix it everywhere you pasted.',
      'Functions solve this: One definition, many uses.',
      'Engineering parallel: Standard details vs reinventing each time.',
      'This is about professional code quality.',
    ],
  },

  // Slide 4: Why Functions Matter
  {
    id: 4,
    type: 'concept',
    title: 'Function = Reusable Engineering Tool',
    durationMinutes: 10,
    content: {
      bullets: [
        'Encapsulation: Hide complexity, expose simple interface',
        'Reusability: Write once, call many times',
        'Maintainability: Fix in one place, fixes everywhere',
        'Readability: Named operations describe intent',
        'Modularity: Break complex problems into manageable pieces',
      ],
    },
    speakerNotes: [
      'Function is like a well-designed engineering component.',
      'You do not rebuild a pump each time - you specify and reuse.',
      'Encapsulation: User does not need to know internal details.',
      'Input → Process → Output pattern, just like engineering systems.',
      'Good function names document your code automatically.',
      'Modularity: Solve sub-problems independently.',
      'This is how professional software is organized.',
    ],
  },

  // Slide 5: Function Syntax
  {
    id: 5,
    type: 'concept',
    title: 'Defining and Calling Functions',
    durationMinutes: 15,
    content: {
      bullets: [
        'def keyword defines a new function',
        'Parameters: Inputs the function expects',
        'Function body: Indented code that runs when called',
        'return statement: Sends output back to caller',
        'Calling: Use function name with arguments in parentheses',
      ],
    },
    speakerNotes: [
      'def function_name(parameters): defines the function.',
      'Parameters are variables that hold input values.',
      'Indentation defines what code belongs to the function.',
      'return exits the function and sends back a value.',
      'Calling: function_name(arguments) executes the code.',
      'Live demo: Define simple function, show it does nothing until called.',
      'Common error: Forgetting parentheses when calling.',
    ],
  },

  // Slide 6: Demo - Simple Area Function
  {
    id: 6,
    type: 'demo',
    title: 'Simple Area Function',
    durationMinutes: 20,
    content: {
      code: `# Define the function
def rectangle_area(length, width):
    area = length * width
    return area

# Call the function with different inputs
result1 = rectangle_area(5, 4)
print('Area 1:', result1)

result2 = rectangle_area(10, 8)
print('Area 2:', result2)

result3 = rectangle_area(3.5, 2.5)
print('Area 3:', result3)`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Complete function definition and multiple calls.',
      'length and width are parameters (placeholders).',
      '5, 4 and 10, 8 are arguments (actual values).',
      'Function returns area, which we store in result variables.',
      'Same function, different inputs, different outputs.',
      'Show that function can be called any number of times.',
      'This is reusability in action.',
    ],
  },

  // Slide 7: Demo - Slab Volume Function
  {
    id: 7,
    type: 'demo',
    title: 'Slab Volume Function',
    durationMinutes: 20,
    content: {
      code: `# Compact function with direct return
def slab_volume(length, width, thickness):
    return length * width * thickness

# Calculate volumes for multiple slabs
slab1 = slab_volume(10, 5, 0.2)
slab2 = slab_volume(8, 4, 0.25)
slab3 = slab_volume(12, 6, 0.2)

total_volume = slab1 + slab2 + slab3

print(f'Slab 1: {slab1} cubic meters')
print(f'Slab 2: {slab2} cubic meters')
print(f'Slab 3: {slab3} cubic meters')
print(f'Total: {total_volume} cubic meters')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Direct return: Calculate and return in one line.',
      'No intermediate variable needed.',
      'Practical example: Concrete quantity takeoff.',
      'Function abstracts the volume calculation formula.',
      'Calculate many slabs without rewriting formula.',
      'Sum results for total project volume.',
      'This is how professional quantity software works.',
    ],
  },

  // Slide 8: Exercise 1
  {
    id: 8,
    type: 'exercise',
    title: 'Exercise: Unit Conversion Function',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Write a function mm_to_m(mm) that converts millimeters to meters. Call it with 5400 and 3200.',
        input: 'mm_to_m(5400)',
        expectedOutput: '5.4 and 3.2',
        hint: 'Divide mm by 1000 and return the result.',
      },
    },
    speakerNotes: [
      'Simple conversion function - utility pattern.',
      'Common need in BIM: Model in mm, calculate in m.',
      'Test with multiple values to verify.',
      'Function name clearly describes purpose.',
      'Solution: def mm_to_m(mm): return mm / 1000.',
    ],
  },

  // Slide 9: Exercise 2
  {
    id: 9,
    type: 'exercise',
    title: 'Exercise: Compliance Check Function',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Write a function is_compliant(area) that returns True if area > 15, else False. Test with 12 and 18.',
        input: 'is_compliant(12), is_compliant(18)',
        expectedOutput: 'False, True',
        hint: 'Use return area > 15 for direct boolean result.',
      },
    },
    speakerNotes: [
      'Function returning boolean value.',
      'Boolean expression evaluates to True or False.',
      'Can be used directly in if statements.',
      'if is_compliant(room_area): print("OK").',
      'Pattern: Predicate functions that check conditions.',
    ],
  },

  // Slide 10: Distance Function Concept
  {
    id: 10,
    type: 'concept',
    title: 'Distance Function - Geometry Core',
    durationMinutes: 15,
    content: {
      bullets: [
        'Encapsulate the distance formula in a reusable function',
        'Parameters can be tuples: distance(p1, p2)',
        'Import math once at top of file',
        'Returns calculated distance as float',
        'Use anywhere you need point-to-point distance',
      ],
    },
    speakerNotes: [
      'We have written distance calculations 5+ times already.',
      'Function encapsulates the Pythagorean theorem.',
      'Tuple parameters: Pass (x, y) points directly.',
      'Tuple unpacking inside function: x1, y1 = p1.',
      'Single import of math at file level.',
      'This becomes your personal geometry library.',
      'Use for: Spacing checks, path lengths, nearest neighbor.',
    ],
  },

  // Slide 11: Demo - Distance Function
  {
    id: 11,
    type: 'demo',
    title: 'Distance Between Two Points Function',
    durationMinutes: 20,
    content: {
      code: `import math

def distance(p1, p2):
    """Calculate distance between two points.
    p1, p2: tuples of (x, y)
    Returns: distance as float
    """
    x1, y1 = p1
    x2, y2 = p2
    return math.sqrt((x2 - x1)**2 + (y2 - y1)**2)

# Use the function
column_a = (0, 0)
column_b = (3, 4)
spacing = distance(column_a, column_b)
print(f'Column spacing: {spacing}m')

# Check multiple pairs
points = [(0, 0), (6, 0), (6, 8)]
for i in range(len(points) - 1):
    d = distance(points[i], points[i + 1])
    print(f'Segment {i}: {d}m')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Professional function with docstring (documentation).',
      'Tuple unpacking makes code readable.',
      'Test with known 3-4-5 triangle: should return 5.0.',
      'Reuse in loop for polyline length calculation.',
      'Function is building block for complex algorithms.',
      'Once defined, use anywhere without rewriting.',
      'This function will be used for the rest of the course.',
    ],
  },

  // Slide 12: Exercise 3
  {
    id: 12,
    type: 'exercise',
    title: 'Exercise: Column Spacing Check',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Use the distance function to compute spacing between columns at (0,0) and (7,0). Print result.',
        input: 'p1 = (0,0), p2 = (7,0)',
        expectedOutput: 'Column spacing: 7.0m',
        hint: 'Call distance(p1, p2) and format the output.',
      },
    },
    speakerNotes: [
      'Apply function to structural grid scenario.',
      'Expected: 7.0 meters (horizontal distance).',
      'Function abstraction hides math.sqrt complexity.',
      'User just thinks: distance between points.',
      'Pattern: Complex logic hidden, simple interface exposed.',
    ],
  },

  // Slide 13: Exercise 4
  {
    id: 13,
    type: 'exercise',
    title: 'Exercise: Distance Limit Check',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Write a function exceeds_limit(p1, p2, limit) that returns True if distance between points exceeds limit.',
        input: 'exceeds_limit((0,0), (7,0), 6)',
        expectedOutput: 'True (7 > 6)',
        hint: 'Calculate distance, then return distance > limit.',
      },
    },
    speakerNotes: [
      'Function composition: Use distance() inside new function.',
      'Build higher-level logic from lower-level functions.',
      'Expected: True for 7m spacing with 6m limit.',
      'Demonstrates layering of abstractions.',
      'Reuse distance() without rewriting formula.',
    ],
  },

  // Slide 14: Bounding Box Function Concept
  {
    id: 14,
    type: 'concept',
    title: 'Bounding Box Function',
    durationMinutes: 15,
    content: {
      bullets: [
        'Encapsulate bounding box algorithm in reusable function',
        'Input: List of points',
        'Processing: Find min/max X and Y',
        'Output: Two tuples representing corners',
        'Returns multiple values as tuple of tuples',
      ],
    },
    speakerNotes: [
      'Last week we wrote bounding box code inline.',
      'Now we package it as a reusable utility.',
      'Function signature: compute_bounding_box(points).',
      'Returns: ((min_x, min_y), (max_x, max_y)).',
      'Multiple return values as nested tuples.',
      'Useful for: Zoom extents, spatial indexing, site analysis.',
      'Pattern: Input list → Process → Return structured result.',
    ],
  },

  // Slide 15: Demo - Bounding Box Function
  {
    id: 15,
    type: 'demo',
    title: 'Bounding Box Utility Function',
    durationMinutes: 20,
    content: {
      code: `def compute_bounding_box(points):
    """Calculate bounding box from list of points.
    Returns: ((min_x, min_y), (max_x, max_y))
    """
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

# Use the function
site_points = [(2, 3), (10, 5), (5, 12), (8, 2)]
min_corner, max_corner = compute_bounding_box(site_points)

print(f'Min corner: {min_corner}')
print(f'Max corner: {max_corner}')

# Calculate width and height
width = max_corner[0] - min_corner[0]
height = max_corner[1] - min_corner[1]
print(f'Bounding box: {width}m x {height}m')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Complete bounding box function with docstring.',
      'Returns two tuples - unpacked to min_corner, max_corner.',
      'Demonstrates multiple return value unpacking.',
      'Calculate derived values from function output.',
      'Function abstracts the min/max tracking logic.',
      'Reusable for any set of points.',
      'Expected: (2, 2) to (10, 12), width=8, height=10.',
    ],
  },

  // Slide 16: Exercise 5
  {
    id: 16,
    type: 'exercise',
    title: 'Exercise: Bounding Box with Dimensions',
    durationMinutes: 15,
    content: {
      exercise: {
        problem: 'Modify compute_bounding_box to also return width and height as a third and fourth value.',
        input: 'List of points',
        expectedOutput: '((min_x, min_y), (max_x, max_y), width, height)',
        hint: 'Calculate width and height before return, include in return statement.',
      },
    },
    speakerNotes: [
      'Function returning four values.',
      'Calculate width = max_x - min_x inside function.',
      'Return: (min_corner, max_corner, width, height).',
      'Demonstrates flexible return value packing.',
      'More convenient for caller - gets all data at once.',
    ],
  },

  // Slide 17: Exercise 6
  {
    id: 17,
    type: 'exercise',
    title: 'Exercise: Bounding Box Area',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Use the bounding box function to compute and print the bounding box area.',
        input: 'Any set of points',
        expectedOutput: 'Bounding box area: X square meters',
        hint: 'Get width and height from function (or calculate), then multiply.',
      },
    },
    speakerNotes: [
      'Apply function output to new calculation.',
      'Area = width × height.',
      'Shows how functions enable calculation chains.',
      'Pattern: Function output → New calculations → Results.',
    ],
  },

  // Slide 18: Perimeter Function Concept
  {
    id: 18,
    type: 'concept',
    title: 'Polygon Perimeter Function',
    durationMinutes: 15,
    content: {
      bullets: [
        'Encapsulate perimeter calculation with modulo logic',
        'Input: List of polygon vertices',
        'Processing: Loop with wrap-around indexing',
        'Output: Perimeter as float',
        'Reusable for any polygon (regular or irregular)',
      ],
    },
    speakerNotes: [
      'Perimeter code had complex modulo logic.',
      'Function hides complexity from user.',
      'Input: Just the polygon vertices.',
      'Function handles closing edge automatically.',
      'User does not need to understand modulo to use it.',
      'Encapsulation at work: Complex inside, simple outside.',
      'Part of your growing geometry toolkit.',
    ],
  },

  // Slide 19: Demo - Perimeter Function
  {
    id: 19,
    type: 'demo',
    title: 'Perimeter Utility Function',
    durationMinutes: 15,
    content: {
      code: `import math

def polygon_perimeter(polygon):
    """Calculate perimeter of a polygon.
    polygon: list of (x, y) vertices
    Returns: perimeter as float
    """
    perimeter = 0
    n = len(polygon)

    for i in range(n):
        x1, y1 = polygon[i]
        x2, y2 = polygon[(i + 1) % n]
        segment = math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
        perimeter += segment

    return perimeter

# Use for different polygons
rectangle = [(0, 0), (5, 0), (5, 4), (0, 4)]
print(f'Rectangle perimeter: {polygon_perimeter(rectangle)}m')

site_boundary = [(0, 0), (10, 0), (12, 5), (6, 8), (0, 5)]
print(f'Site perimeter: {polygon_perimeter(site_boundary)}m')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Complete perimeter function with docstring.',
      'Works for any number of vertices.',
      'Modulo logic hidden inside function.',
      'Two examples: Rectangle and irregular polygon.',
      'Same function, different shapes, correct results.',
      'Function becomes part of reusable library.',
      'Expected: 18m for rectangle, ~31.4m for site.',
    ],
  },

  // Slide 20: Exercise 7
  {
    id: 20,
    type: 'exercise',
    title: 'Exercise: Site Boundary Perimeter',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Use polygon_perimeter to compute perimeter of site boundary: [(0,0), (20,0), (25,10), (10,15), (0,10)].',
        input: '5-point site boundary',
        expectedOutput: 'Perimeter: approximately 54.1m',
        hint: 'Pass the list directly to polygon_perimeter function.',
      },
    },
    speakerNotes: [
      'Apply function to new site data.',
      'Complex polygon with diagonal edges.',
      'Function handles all calculations automatically.',
      'Expected approximately 54.1 meters.',
      'Demonstrates function reusability.',
    ],
  },

  // Slide 21: Exercise 8
  {
    id: 21,
    type: 'exercise',
    title: 'Exercise: Perimeter Limit Check',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Write a function perimeter_exceeds(polygon, limit) that returns True if perimeter exceeds limit.',
        input: 'perimeter_exceeds(site_boundary, 50)',
        expectedOutput: 'True (if perimeter > 50)',
        hint: 'Use polygon_perimeter inside your new function.',
      },
    },
    speakerNotes: [
      'Function composition: Use perimeter() in new function.',
      'Build higher-level checks from lower-level tools.',
      'Pattern: Reusable base functions → Specialized checks.',
      'Demonstrates layered abstraction.',
    ],
  },

  // Slide 22: Mini Project Intro
  {
    id: 22,
    type: 'concept',
    title: 'Mini Project: Geometry Utility Toolkit',
    durationMinutes: 10,
    content: {
      bullets: [
        'Build a complete geometry utility module',
        'Include: distance, bounding_box, rectangle_area, polygon_perimeter',
        'Organize code cleanly with docstrings',
        'Test each function with different inputs',
        'Create reusable tool for all future projects',
      ],
    },
    speakerNotes: [
      'Capstone project for Week 5 - your personal library.',
      '30 minutes to organize and test all functions.',
      'This toolkit grows with your programming skills.',
      'Save this file - reuse it in future projects.',
      'Professional approach: Build personal utility libraries.',
      'Add functions to this toolkit as you learn more.',
      'This is your first professional-grade code module.',
    ],
  },

  // Slide 23: Mini Project Starter
  {
    id: 23,
    type: 'demo',
    title: 'Geometry Toolkit - Template',
    durationMinutes: 20,
    content: {
      code: `# Geometry Utility Toolkit
# Your personal reusable geometry functions

import math

# TODO: Add distance function
# def distance(p1, p2):
#     ...

# TODO: Add rectangle_area function
# def rectangle_area(length, width):
#     ...

# TODO: Add compute_bounding_box function
# def compute_bounding_box(points):
#     ...

# TODO: Add polygon_perimeter function
# def polygon_perimeter(polygon):
#     ...

# Test section
if __name__ == '__main__':
    # Test your functions here
    print('Testing geometry toolkit...')
    
    # Example: test distance
    # d = distance((0,0), (3,4))
    # print(f'Distance: {d}')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Provide template with all functions to implement.',
      'Students copy/paste their previous work.',
      'Add docstrings to each function.',
      'if __name__ == "__main__": pattern for testing.',
      'Encourage saving this as geometry_utils.py.',
      'Test thoroughly with various inputs.',
      'This becomes importable module for other scripts.',
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
        'Functions encapsulate reusable logic blocks',
        'Parameters and return values define function interface',
        'Write once, call many times - no more copy-paste',
        'Functions can call other functions - layered abstraction',
        'You now have a personal geometry utility toolkit',
      ],
    },
    speakerNotes: [
      'Review the power of functional abstraction.',
      'Students transformed from script writers to tool builders.',
      'Toolkit will grow throughout the course.',
      'Encourage adding new functions as they learn.',
      'This is professional software development practice.',
      'Next week: Putting it all together with real projects.',
    ],
  },

  // Slide 25: Preview Week 6
  {
    id: 25,
    type: 'preview',
    title: 'Next Week: Real-World Project Integration',
    durationMinutes: 5,
    content: {
      previewTopics: [
        'Building complete automation scripts',
        'Processing real BIM exported data',
        'Error handling and validation',
        'Creating professional deliverables',
        'Your first complete building analysis tool',
      ],
    },
    speakerNotes: [
      'Week 6 brings everything together in a capstone project.',
      'Use your geometry toolkit on real data.',
      'Build professional-grade automation script.',
      'Error handling: Making code robust.',
      'Create tool you can use immediately at work.',
      'Bring sample project data if available.',
      'This is where skills become professional capability.',
    ],
  },
];

export const week5TotalSlides = week5Slides.length;

export function getWeek5SlideById(id: number): SlideData | null {
  return week5Slides.find((slide) => slide.id === id) || null;
}
