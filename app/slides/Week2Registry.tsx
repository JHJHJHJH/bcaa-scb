import { SlideData } from './types';

export const week2Slides: SlideData[] = [
  // Slide 1: Opening
  {
    id: 1,
    type: 'opening',
    title: 'Control Flow and Geometric Logic',
    durationMinutes: 5,
    content: {
      subtitle: 'Week 2: Making Decisions and Validating Geometry',
      bullets: [
        'Understand boolean logic and comparison operators',
        'Use conditional statements (if, elif, else)',
        'Apply logic to engineering checks',
        'Compute 2D distance between points',
        'Validate geometry using rule-based checks',
      ],
    },
    speakerNotes: [
      'Welcome back to Week 2. Last week we learned variables and calculations.',
      'This week we add decision-making to our programs.',
      'Real-world example: "If beam span exceeds 12m, flag for review."',
      'By the end, you will write programs that check compliance automatically.',
      'Ask: "What checks do you perform manually that could be automated?"',
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
        'Boolean Logic & Comparisons (30 min)',
        'Conditional Statements (40 min)',
        'Distance Between Points (35 min)',
        'Conditional Logic Applied to Geometry (35 min)',
        'Mini Project: Site Compliance Checker (30 min)',
      ],
    },
    speakerNotes: [
      'Review the agenda. Note the hands-on coding time.',
      'Today builds directly on Week 1 variables and arithmetic.',
      'The mini project combines geometry with compliance checking.',
      'Encourage questions throughout - control flow can be tricky at first.',
    ],
  },

  // Slide 3: Boolean Logic Concept
  {
    id: 3,
    type: 'concept',
    title: 'Boolean Logic & Comparisons',
    durationMinutes: 15,
    content: {
      bullets: [
        'Boolean values: True or False (yes/no, pass/fail, compliant/non-compliant)',
        'Comparison operators: > (greater than), < (less than), >=, <=',
        'Equality: == (equal to), != (not equal to)',
        'Logical operators: and (both must be true), or (at least one true), not (invert)',
        'Result of any comparison is a boolean value',
      ],
    },
    speakerNotes: [
      'Booleans are the foundation of decision-making in code.',
      'Relate to engineering: "Is load greater than capacity?" True = failure.',
      'Double equals == is for comparison. Single = is for assignment. Critical distinction.',
      'and/or/not work like they do in logic or Excel formulas.',
      'Live demo: type comparisons in interpreter. 5 > 3, 10 == 10, etc.',
      'Common mistake: Using = instead of == in comparisons.',
      'Show truth tables for and/or if students seem confused.',
    ],
  },

  // Slide 4: Boolean Demo 1
  {
    id: 4,
    type: 'demo',
    title: 'Check Slab Thickness Compliance',
    durationMinutes: 15,
    content: {
      code: `# Check if slab meets minimum thickness requirement
thickness = 0.18
minimum_required = 0.2

# Compare and print result
is_compliant = thickness >= minimum_required
print('Is slab compliant?', is_compliant)

# Direct comparison also works
print('Direct check:', thickness >= minimum_required)`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Real-world compliance check. Simple but practical.',
      'Show that >= checks "greater than or equal to".',
      'The result is a boolean - True or False.',
      'Store the result in a variable or print directly.',
      'Ask: "What other minimum requirements do you check in your work?"',
      'Experiment: Change thickness to 0.25 and show it becomes True.',
      'Common mistake: Forgetting that 0.18 < 0.2, not greater.',
    ],
  },

  // Slide 5: Boolean Demo 2
  {
    id: 5,
    type: 'demo',
    title: 'Check Beam Span Range',
    durationMinutes: 15,
    content: {
      code: `# Check if beam span is within acceptable range
span = 8

# Check if span is greater than 6 AND less than 12
is_valid = span > 6 and span < 12
print('Is span valid?', is_valid)

# Alternative: Check if NOT in valid range
is_invalid = not is_valid
print('Is span invalid?', is_invalid)

# Check extremes with OR
is_extreme = span <= 3 or span >= 15
print('Is span extreme?', is_extreme)`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Introduce logical operators with real engineering constraints.',
      'and requires BOTH conditions to be true.',
      'or requires AT LEAST ONE condition to be true.',
      'not inverts the boolean value.',
      'Common pattern: Check if value is within acceptable range.',
      'Experiment: Change span to 4, 10, and 20. Show different results.',
      'Ask: "What engineering checks involve ranges rather than single limits?"',
    ],
  },

  // Slide 6: Conditional Statements Concept
  {
    id: 6,
    type: 'concept',
    title: 'Conditional Statements (if / elif / else)',
    durationMinutes: 20,
    content: {
      bullets: [
        'if statement: Execute code only when condition is True',
        'elif (else if): Check another condition if first was False',
        'else: Execute when no conditions matched',
        'Indentation defines which code belongs to which condition',
        'Conditions are evaluated in order - first match wins',
      ],
    },
    speakerNotes: [
      'This is where programs become intelligent - making decisions.',
      'Emphasize indentation: Python uses whitespace to define blocks.',
      'The colon : after condition is required and easy to forget.',
      'elif is optional - use when there are multiple exclusive options.',
      'else is optional - use for default/catch-all behavior.',
      'Draw flowchart on board: diamond (decision) → branches → outcomes.',
      'Common mistake: Forgetting the colon at end of if/elif lines.',
    ],
  },

  // Slide 7: Conditional Demo 1
  {
    id: 7,
    type: 'demo',
    title: 'Room Classification by Area',
    durationMinutes: 20,
    content: {
      code: `# Classify room based on floor area
area = 18

if area < 10:
    print('Small room')
elif area < 25:
    print('Medium room')
else:
    print('Large room')

# Note the order matters - elif only checks if previous conditions were False`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Classic multi-branch decision example.',
      'Walk through logic: area=18, first condition False, second True.',
      'Show that elif only executes if the if was False.',
      'Order matters: Check most specific conditions first.',
      'Live experiment: Change area to 5, 18, and 30. Show different outputs.',
      'Relate to code requirements: different rules for different room sizes.',
      'Common mistake: Checking >= before > - the more general catches everything.',
    ],
  },

  // Slide 8: Conditional Demo 2
  {
    id: 8,
    type: 'demo',
    title: 'Structural Safety Check',
    durationMinutes: 20,
    content: {
      code: `# Simple pass/fail structural check
load = 450
limit = 400

if load > limit:
    print('Overstressed')
    print('Investigation required')
else:
    print('Within limit')
    print('Design acceptable')

print('Check complete')  # This runs regardless of condition`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Simple if/else with multiple statements in each block.',
      'Point out that all indented lines after if belong to that block.',
      'The final print runs no matter what - it is outside the if/else.',
      'Show that indentation level determines block membership.',
      'Live experiment: Change load to 350 and 450. Show different paths.',
      'This pattern is fundamental to automated engineering checks.',
      'Common mistake: Inconsistent indentation (mixing tabs and spaces).',
    ],
  },

  // Slide 9: Exercise 1
  {
    id: 9,
    type: 'exercise',
    title: 'Exercise: Building Height Classification',
    durationMinutes: 15,
    content: {
      exercise: {
        problem: 'Write a program that classifies building height as "Low-rise" (<10m), "Mid-rise" (<40m), or "High-rise" (40m+). Test with height = 25.',
        input: 'height = 25',
        expectedOutput: 'Mid-rise',
        hint: 'Use if, elif, else. Check against 10 first, then 40.',
      },
    },
    speakerNotes: [
      'First independent exercise with conditionals.',
      'Students should plan the logic before writing code.',
      'Walk around and check their condition ordering.',
      'Common issue: Using if-if-if instead of if-elif-else.',
      'After 10 minutes, ask volunteer to share solution.',
      'Discuss why elif is better than multiple ifs in this case.',
      'Extension: Add a "Skyscraper" category for 100m+.',
    ],
  },

  // Slide 10: Exercise 2
  {
    id: 10,
    type: 'exercise',
    title: 'Exercise: Beam Length Warning',
    durationMinutes: 15,
    content: {
      exercise: {
        problem: 'Check if beam length exceeds 12m. If it does, print "Warning: Long span - structural review required". Otherwise print "Span acceptable".',
        input: 'beam_length = 15',
        expectedOutput: 'Warning: Long span - structural review required',
        hint: 'Simple if/else. Use > operator for comparison.',
      },
    },
    speakerNotes: [
      'Practical engineering check with clear output message.',
      'Students must write descriptive output messages.',
      'Remind them to test both cases (above and below threshold).',
      'This mimics real automated checking in BIM software.',
      'Common mistake: Forgetting quotes around the message string.',
      'Extension: Add another check for minimum span (< 2m).',
    ],
  },

  // Slide 11: Exercise 3
  {
    id: 11,
    type: 'exercise',
    title: 'Exercise: Temperature Range Check',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Check if temperature is within curing range (10°C to 35°C). Print "Suitable for curing" if yes, "Outside range" if no.',
        input: 'temperature = 22',
        expectedOutput: 'Suitable for curing',
        hint: 'Use and to check both lower and upper bounds.',
      },
    },
    speakerNotes: [
      'Range checking with logical operators.',
      'Requires combining comparison with and operator.',
      'Boundary values (10 and 35) should be included.',
      'Ask: "What happens at exactly 10°C?" Discuss >= vs >.',
      'Common mistake: Writing 10 < temp < 35 (works in Python but confusing).',
      'Encourage explicit: temp >= 10 and temp <= 35.',
    ],
  },

  // Slide 12: Distance Formula Concept
  {
    id: 12,
    type: 'concept',
    title: 'Distance Between Two Points',
    durationMinutes: 15,
    content: {
      bullets: [
        'Distance formula: square root of (dx² + dy²)',
        'Python math module provides sqrt() function',
        'Import modules at the top of your script',
        'Calculate dx = x2 - x1, dy = y2 - y1',
        'Combine with conditionals for spatial validation',
      ],
    },
    speakerNotes: [
      'Review the Pythagorean theorem from high school.',
      'Python math module is standard library - no installation needed.',
      'Import statement: brings external code into your program.',
      'Break calculation into steps: differences, squares, sum, sqrt.',
      'This is foundational for geometry processing in BIM.',
      'Ask: "Where do you calculate distances in your current workflow?"',
      'Preview: Next week we will automate this for hundreds of points.',
    ],
  },

  // Slide 13: Distance Demo
  {
    id: 13,
    type: 'demo',
    title: 'Compute 2D Distance',
    durationMinutes: 20,
    content: {
      code: `# Calculate distance between two points
import math

p1 = (0, 0)
p2 = (3, 4)

# Calculate differences
dx = p2[0] - p1[0]
dy = p2[1] - p1[1]

# Calculate distance using Pythagorean theorem
distance = math.sqrt(dx**2 + dy**2)

print('Point 1:', p1)
print('Point 2:', p2)
print('Distance:', distance, 'meters')

# Verify: 3-4-5 triangle should give 5.0
print('Expected: 5.0')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Classic 3-4-5 right triangle example.',
      'Walk through each step: import, points, differences, calculation.',
      'math.sqrt() takes square root. **2 means "squared".',
      'Break down calculation: dx**2 + dy**2 inside sqrt().',
      'Verification step: confirm result matches expectation.',
      'Live experiment: Change p2 to (6, 8) - another right triangle.',
      'Common mistake: Forgetting to import math module.',
    ],
  },

  // Slide 14: Distance with Validation Concept
  {
    id: 14,
    type: 'concept',
    title: 'Combining Distance with Conditional Logic',
    durationMinutes: 15,
    content: {
      bullets: [
        'Calculate distance, then check against limits',
        'Common checks: column spacing, exit distances, minimum clearances',
        'Pattern: Calculate → Compare → Report',
        'Store intermediate results in descriptive variables',
        'Clear output messages help users understand violations',
      ],
    },
    speakerNotes: [
      'This is where geometry meets compliance checking.',
      'The pattern: Input data → Calculate → Validate → Report.',
      'Emphasize descriptive variable names: spacing, not d.',
      'Real-world examples: Fire code exit spacing, structural grid limits.',
      'Preview: Next week we will check hundreds of elements automatically.',
      'Ask: "What spacing checks do you perform manually?"',
      'Common mistake: Confusing calculation with validation.',
    ],
  },

  // Slide 15: Column Spacing Check Demo
  {
    id: 15,
    type: 'demo',
    title: 'Column Spacing Check',
    durationMinutes: 20,
    content: {
      code: `# Check if column spacing meets structural guidelines
import math

p1 = (0, 0)
p2 = (7, 0)

# Calculate spacing
dx = p2[0] - p1[0]
dy = p2[1] - p1[1]
spacing = math.sqrt(dx**2 + dy**2)

print(f'Column spacing: {spacing}m')

# Check against recommended limit
if spacing > 6:
    print('WARNING: Spacing exceeds recommended 6m limit')
    print('Structural engineer review required')
else:
    print('Spacing acceptable')
    print('Within recommended guidelines')`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Complete workflow: calculation + validation + reporting.',
      'f-string formatting (preview): embeds variables in strings.',
      'Clear warning message tells user what is wrong and what to do.',
      'Store spacing in variable to use in both print and check.',
      'Live experiment: Change p2 to (5, 0) and (9, 0). Show different outcomes.',
      'This is exactly the kind of automated check that saves time.',
      'Common mistake: Checking > 6 when limit is >= 6. Discuss boundary cases.',
    ],
  },

  // Slide 16: Geometry Validation Exercise 1
  {
    id: 16,
    type: 'exercise',
    title: 'Exercise: Point in Range Check',
    durationMinutes: 15,
    content: {
      exercise: {
        problem: 'Check if a point lies within x-range 0–10 and y-range 0–5. Point is at (7, 3). Print "Inside bounds" or "Outside bounds".',
        input: 'point = (7, 3)',
        expectedOutput: 'Inside bounds',
        hint: 'Check point[0] for x-range and point[1] for y-range. Use and operator.',
      },
    },
    speakerNotes: [
      'Bounding box check - common in clash detection and spatial queries.',
      'Requires checking two conditions with logical and.',
      'Students need to access tuple elements correctly.',
      'Boundary test: Ask "What about point (10, 5)?" Discuss inclusive vs exclusive.',
      'This is foundation for spatial indexing and region queries.',
      'Common mistake: Using or instead of and (very different meaning).',
    ],
  },

  // Slide 17: Geometry Validation Exercise 2
  {
    id: 17,
    type: 'exercise',
    title: 'Exercise: Room Compliance Check',
    durationMinutes: 15,
    content: {
      exercise: {
        problem: 'Given room length=5 and width=3.6, calculate area and determine if compliant (minimum 15 sqm). Print area and compliance status.',
        input: 'length = 5, width = 3.6',
        expectedOutput: `Area: 18.0 sqm
Compliant: True`,
        hint: 'Calculate area first, then use if to check >= 15.',
      },
    },
    speakerNotes: [
      'Combines arithmetic from Week 1 with conditionals from Week 2.',
      'Two-step process: calculate, then validate.',
      'Students should print both the value and the compliance result.',
      'This mirrors building code compliance checking.',
      'Extension: Add width minimum check (> 2.4m for accessibility).',
      'Common mistake: Checking compliance before calculating area.',
    ],
  },

  // Slide 18: Geometry Validation Exercise 3
  {
    id: 18,
    type: 'exercise',
    title: 'Exercise: Bounding Box Aspect Ratio',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Given bounding box defined by points (0,0) and (8,5). Calculate width and height, then check if width exceeds height. Print dimensions and result.',
        input: 'p1 = (0, 0), p2 = (8, 5)',
        expectedOutput: `Width: 8
Height: 5
Width exceeds height: True`,
        hint: 'Width = p2[0] - p1[0]. Height = p2[1] - p1[1].',
      },
    },
    speakerNotes: [
      'Practical site analysis check.',
      'Requires understanding which coordinate difference gives which dimension.',
      'Many applications: site proportions, room orientation, solar analysis.',
      'Check understanding: "What if p2 was (5, 8) instead?"',
      'Encourage descriptive variable names: width, not w.',
      'Common mistake: Confusing x and y indices for width/height.',
    ],
  },

  // Slide 19: Mini Project Intro
  {
    id: 19,
    type: 'concept',
    title: 'Mini Project: Site Compliance Checker',
    durationMinutes: 10,
    content: {
      bullets: [
        'Given two site corner points, compute width and height',
        'Calculate site area',
        'Check if area meets minimum requirement (2000 sqm)',
        'Print detailed compliance report',
        'Combine all skills: variables, arithmetic, conditionals',
      ],
    },
    speakerNotes: [
      'Capstone project for Week 2.',
      'Integrates all concepts learned today.',
      'Real-world scenario: zoning compliance, site suitability.',
      'Students should work independently for 20 minutes.',
      'Walk around and provide guidance without giving solutions.',
      'Emphasize breaking problem into steps before coding.',
      'This is a practical tool they can adapt for actual work.',
    ],
  },

  // Slide 20: Mini Project Starter
  {
    id: 20,
    type: 'demo',
    title: 'Project Starter Code',
    durationMinutes: 20,
    content: {
      code: `# Site Compliance Checker - Starter
# Given two corner points of rectangular site

p1 = (0, 0)
p2 = (50, 30)

# TODO: Calculate width
width = 

# TODO: Calculate height  
height = 

# TODO: Calculate area
area = 

# TODO: Check compliance (minimum 2000 sqm)
# Print "Compliant" or "Non-compliant"

# BONUS: Print detailed report with all values`,
      codeLanguage: 'python',
    },
    speakerNotes: [
      'Provide starter code with TODO comments.',
      'Students fill in the calculations and logic.',
      'Encourage them to run frequently and check intermediate results.',
      'After 15 minutes, discuss solution as a class.',
      'Solution: width=50, height=30, area=1500, Non-compliant.',
      'Ask: "What p2 coordinate would make it compliant?" (e.g., 70, 30).',
      'Celebrate their completion of first real automation script.',
    ],
  },

  // Slide 21: Recap
  {
    id: 21,
    type: 'recap',
    title: 'What We Learned Today',
    durationMinutes: 5,
    content: {
      recapItems: [
        'Boolean logic enables yes/no decisions in programs',
        'Comparison operators (> < == !=) create conditions',
        'if/elif/else controls program flow based on conditions',
        'Distance formula with math.sqrt() enables geometric calculations',
        'Combining distance + conditionals creates automated validation tools',
      ],
    },
    speakerNotes: [
      'Review the progression from simple comparisons to complex validation.',
      'Students now have tools for automated engineering checks.',
      'Connect to their initial goals: they can now automate compliance checking.',
      'Validate learning: Ask for examples of what they can now automate.',
      'Programming is cumulative - each week builds on previous.',
      'Preview Week 3: We will add repetition (loops) for batch processing.',
    ],
  },

  // Slide 22: Preview Week 3
  {
    id: 22,
    type: 'preview',
    title: 'Next Week: Repetition and Batch Processing',
    durationMinutes: 5,
    content: {
      previewTopics: [
        'For loops: processing multiple items automatically',
        'Lists: storing collections of data (rooms, columns, points)',
        'Looping through coordinates and performing checks',
        'Aggregating results (total area, average spacing)',
        'Processing entire building models with scripts',
      ],
    },
    speakerNotes: [
      'Build excitement: This is where automation scales up.',
      'Loops allow processing hundreds of elements with same code.',
      'Example: Check spacing for ALL column pairs, not just one.',
      'Lists enable storing and manipulating entire datasets.',
      'By Week 3, they will process entire floor plans programmatically.',
      'Homework: Think about what collections of data they work with.',
      'Thank them for engagement and encourage practice before next week.',
    ],
  },
];

export const week2TotalSlides = week2Slides.length;

export function getWeek2SlideById(id: number): SlideData | null {
  return week2Slides.find((slide) => slide.id === id) || null;
}
