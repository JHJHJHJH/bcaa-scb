import { SlideData } from './types';

export const week13Slides: SlideData[] = [
  // Slide 1: Opening
  {
    id: 1,
    type: 'opening',
    title: 'APIs, HTTP & Integrating External Services',
    durationMinutes: 5,
    content: {
      subtitle: 'Week 13: Connecting Your Code to the World',
      bullets: [
        'Understand what an API is',
        'Understand HTTP methods (GET, POST)',
        'Send requests using Python',
        'Handle API responses (JSON)',
        'Design simple internal API simulations',
      ],
    },
    speakerNotes: [
      'Welcome to Week 13 - we are connecting to external services.',
      'APIs unlock real-world data: weather, costs, currency rates.',
      'Your scripts become more powerful when connected.',
      'By the end: You will fetch live data and integrate it into BIM workflows.',
      'Ask: "What external data would help your projects?"',
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
        'What is an API? (30 min)',
        'Using requests Library (45 min)',
        'POST Requests & Sending Data (40 min)',
        'Mini Web Service Simulation (35 min)',
        'Mini Challenge: Construction Data Pipeline (30 min)',
      ],
    },
    speakerNotes: [
      'Five modules from API concepts to real integration.',
      'Start with theory, progress to live API calls.',
      'Emphasis on practical BIM integrations.',
      'Mini challenge: Complete data pipeline with API.',
    ],
  },

  // Slide 3: What is an API?
  {
    id: 3,
    type: 'concept',
    title: 'What is an API?',
    durationMinutes: 15,
    content: {
      bullets: [
        'API = Application Programming Interface',
        'Contract between software: how to request and receive data',
        'Client-Server model: Your code (client) asks, Server responds',
        'Think of API as a waiter: you order (request), kitchen prepares (server), you receive (response)',
        'APIs enable integration between different systems',
      ],
    },
    speakerNotes: [
      'API is how software talks to software',
      'Waiter analogy helps understanding',
      'Client sends request, server returns response',
      'APIs are everywhere: weather, maps, payments',
    ],
  },

  // Slide 4: HTTP Basics
  {
    id: 4,
    type: 'concept',
    title: 'HTTP Basics',
    durationMinutes: 15,
    content: {
      bullets: [
        'HTTP = HyperText Transfer Protocol (language of the web)',
        'GET: Request data from server (read)',
        'POST: Send data to server (create/submit)',
        'URL: Address of the resource (https://api.example.com/data)',
        'HTTP runs on the internet - same protocol as websites',
      ],
    },
    speakerNotes: [
      'HTTP is the foundation of web communication',
      'GET is like asking a question',
      'POST is like submitting a form',
      'URLs identify resources uniquely',
    ],
  },

  // Slide 5: HTTP Status Codes
  {
    id: 5,
    type: 'concept',
    title: 'HTTP Status Codes',
    durationMinutes: 10,
    content: {
      bullets: [
        '200 OK: Request succeeded, data returned',
        '404 Not Found: Resource does not exist',
        '500 Server Error: Problem on server side',
        '400 Bad Request: Client sent invalid request',
        '401 Unauthorized: Authentication required',
      ],
    },
    speakerNotes: [
      'Status codes tell you what happened',
      '200s = success, 400s = client error, 500s = server error',
      '404 is most common error to handle',
      'Always check status code before processing',
    ],
  },

  // Slide 6: Demo - Simulate Internal API Call
  {
    id: 6,
    type: 'demo',
    title: 'Demo: Simulate Internal API Call',
    durationMinutes: 15,
    content: {
      code: "# Simulate a cost database API\ndef get_material_cost(material_type):\n    \"\"\"Simulates API call to cost database\"\"\"\n    cost_database = {\n        'concrete': 150.0,  # per cubic meter\n        'steel': 800.0,     # per ton\n        'glass': 200.0,     # per sqm\n        'wood': 500.0       # per cubic meter\n    }\n    \n    if material_type in cost_database:\n        return {\n            'status': 200,\n            'data': {\n                'material': material_type,\n                'unit_cost': cost_database[material_type],\n                'unit': 'per_unit'\n            }\n        }\n    else:\n        return {\n            'status': 404,\n            'error': f'Material {material_type} not found'\n        }\n\n# Usage\nresult = get_material_cost('concrete')\nif result['status'] == 200:\n    print(f\"Cost: ${result['data']['unit_cost']}/unit\")\nelse:\n    print(f\"Error: {result['error']}\")",
      bullets: [
        'Create function that simulates cost database API',
        'Returns JSON-like dictionary structure',
        'Check status code before processing',
        'Handle 404 not found case',
      ],
    },
    speakerNotes: [
      'Start with simulation before real APIs',
      'Demonstrates API structure and status codes',
      'Always validate status before using data',
      'Pattern applies to real API calls',
    ],
  },

  // Slide 7: Practice - Status Code Checker
  {
    id: 7,
    type: 'exercise',
    title: 'Practice: Status Code Checker',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Write function that simulates API response and validates status before processing.',
        input: "api_response = {'status': 200, 'data': {'area': 100}} or status 404",
        expectedOutput: "Status 200: Process data OR Status 404: Resource not found",
        hint: 'Check response["status"] == 200 before accessing response["data"]',
      },
    },
    speakerNotes: [
      'Practice validation pattern',
      'Never assume success',
      'Status check comes first',
    ],
  },

  // Slide 8: Practice - Room Compliance API
  {
    id: 8,
    type: 'exercise',
    title: 'Practice: Room Compliance API',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Simulate API that returns compliance result for room area against minimum.',
        input: "room_area=8.5, min_area=10.0",
        expectedOutput: "{'compliant': False, 'deficit': 1.5} or {'compliant': True}",
        hint: 'Compare area to minimum. Return dict with compliant boolean and deficit if not.',
      },
    },
    speakerNotes: [
      'Practice creating API simulation',
      'Return structured data',
      'Business logic in API layer',
    ],
  },

  // Slide 9: Using requests Library
  {
    id: 9,
    type: 'concept',
    title: 'Using requests Library',
    durationMinutes: 15,
    content: {
      bullets: [
        'requests is Python library for HTTP calls',
        'Install: pip install requests',
        'Simple API: requests.get(url) for GET requests',
        'Response object contains status, headers, content',
        'JSON responses parsed with response.json()',
      ],
    },    speakerNotes: [
      'requests is the standard Python HTTP library',
      'Much easier than built-in urllib',
      'Response object has everything you need',
      'json() method parses JSON automatically',
    ],
  },

  // Slide 10: Demo - Public API GET Request
  {
    id: 10,
    type: 'demo',
    title: 'Demo: Public API GET Request',
    durationMinutes: 20,
    content: {
      code: "import requests\n\n# Example: Get current time from worldtimeapi\nurl = 'http://worldtimeapi.org/api/timezone/Etc/UTC'\n\ntry:\n    response = requests.get(url)\n    \n    # Check status code\n    if response.status_code == 200:\n        data = response.json()  # Parse JSON response\n        print(f\"Current UTC time: {data['datetime']}\")\n        print(f\"Timezone: {data['timezone']}\")\n    else:\n        print(f'Error: Status {response.status_code}')\n        \nexcept requests.exceptions.RequestException as e:\n    print(f'Request failed: {e}')",
      bullets: [
        'Send GET request to public API',
        'Check response.status_code',
        'Parse JSON with response.json()',
        'Wrap in try/except for network errors',
      ],
    },
    speakerNotes: [
      'Show real API call',
      'Always check status_code',
      'json() converts response to dict',
      'Network errors need handling too',
    ],
  },

  // Slide 11: Demo - Safe API Call Pattern
  {
    id: 11,
    type: 'demo',
    title: 'Demo: Safe API Call Pattern',
    durationMinutes: 15,
    content: {
      code: "import requests\n\ndef fetch_data_safely(url):\n    \"\"\"Safely fetch data from API with full error handling\"\"\"\n    try:\n        response = requests.get(url, timeout=10)\n        response.raise_for_status()  # Raises exception for 4xx/5xx\n        return {\n            'success': True,\n            'data': response.json()\n        }\n    except requests.exceptions.Timeout:\n        return {'success': False, 'error': 'Request timed out'}\n    except requests.exceptions.ConnectionError:\n        return {'success': False, 'error': 'Connection failed'}\n    except requests.exceptions.HTTPError as e:\n        return {'success': False, 'error': f'HTTP error: {e}'}\n    except requests.exceptions.RequestException as e:\n        return {'success': False, 'error': str(e)}\n\n# Usage\nresult = fetch_data_safely('https://api.example.com/data')\nif result['success']:\n    process_data(result['data'])\nelse:\n    print(f\"Failed: {result['error']}\")",
      bullets: [
        'Wrap API call with comprehensive error handling',
        'raise_for_status() checks for HTTP errors',
        'Handle timeout and connection errors',
        'Return consistent result structure',
      ],
    },
    speakerNotes: [
      'Production code needs comprehensive handling',
      'Different exceptions for different failures',
      'Timeout prevents hanging indefinitely',
      'Consistent return format helps caller',
    ],
  },

  // Slide 12: Practice - Weather-Based Construction Check
  {
    id: 12,
    type: 'exercise',
    title: 'Practice: Weather-Based Construction Check',
    durationMinutes: 15,
    content: {
      exercise: {
        problem: 'Fetch weather data and determine if conditions are safe for concrete pouring (temp > 5C, no rain).',
        input: 'Weather API returning temperature and conditions',
        expectedOutput: 'Safe to pour: True/False with reason',
        hint: 'Check temp > 5 and conditions not containing "rain". Return dict with safe boolean and reason.',
      },
    },
    speakerNotes: [
      'Real construction use case',
      'Multiple conditions to check',
      'Return structured decision',
    ],
  },

  // Slide 13: Practice - Currency Conversion
  {
    id: 13,
    type: 'exercise',
    title: 'Practice: Currency Conversion',
    durationMinutes: 15,
    content: {
      exercise: {
        problem: 'Fetch exchange rate from API and convert material cost to local currency.',
        input: 'cost_usd=1000, target_currency="EUR"',
        expectedOutput: 'Cost in EUR: 850.00 (rate: 0.85)',
        hint: 'Get rate from API. Calculate: local = usd * rate. Return formatted string.',
      },
    },
    speakerNotes: [
      'Real cost calculation scenario',
      'API provides conversion rate',
      'Apply rate to calculate local cost',
    ],
  },

  // Slide 14: POST Requests & Sending Data
  {
    id: 14,
    type: 'concept',
    title: 'POST Requests & Sending Data',
    durationMinutes: 15,
    content: {
      bullets: [
        'POST sends data to server (unlike GET which retrieves)',
        'Used for: creating records, submitting forms, sending calculations',
        'Data sent as JSON payload in request body',
        'Headers specify content type (application/json)',
        'Server processes data and returns result',
      ],
    },
    speakerNotes: [
      'POST is for sending data',
      'GET is for retrieving data',
      'JSON is the standard data format',
      'Headers tell server what to expect',
    ],
  },

  // Slide 15: Demo - Submit Building Data
  {
    id: 15,
    type: 'demo',
    title: 'Demo: Submit Building Data (POST)',
    durationMinutes: 20,
    content: {
      code: "import requests\nimport json\n\ndef submit_building_summary(api_url, building_data):\n    \"\"\"Submit building data to API\"\"\"\n    headers = {\n        'Content-Type': 'application/json'\n    }\n    \n    payload = {\n        'project_name': building_data['name'],\n        'total_area': building_data['total_area'],\n        'room_count': building_data['room_count'],\n        'levels': building_data['levels']\n    }\n    \n    try:\n        response = requests.post(\n            api_url,\n            headers=headers,\n            data=json.dumps(payload),\n            timeout=10\n        )\n        \n        if response.status_code == 201:  # Created\n            return {\n                'success': True,\n                'message': 'Building data submitted',\n                'id': response.json().get('id')\n            }\n        else:\n            return {\n                'success': False,\n                'error': f'Status {response.status_code}'\n            }\n    except requests.exceptions.RequestException as e:\n        return {'success': False, 'error': str(e)}\n\n# Usage\nbuilding = {'name': 'Tower A', 'total_area': 5000, 'room_count': 50, 'levels': 10}\nresult = submit_building_summary('https://api.example.com/buildings', building)",
      bullets: [
        'Send building summary JSON to API endpoint',
        'Set Content-Type header to application/json',
        'Use json.dumps() to serialize payload',
        '201 status means resource created successfully',
      ],
    },
    speakerNotes: [
      'POST creates resources on server',
      'Headers required for JSON content',
      'json.dumps converts dict to JSON string',
      '201 is standard success code for creation',
    ],
  },

  // Slide 16: Demo - API Payload Validation
  {
    id: 16,
    type: 'demo',
    title: 'Demo: API Payload Validation',
    durationMinutes: 15,
    content: {
      code: "def validate_and_submit(api_url, building_data):\n    \"\"\"Validate data before sending to API\"\"\"\n    # Validate required fields\n    required = ['name', 'total_area', 'room_count']\n    missing = [f for f in required if f not in building_data]\n    \n    if missing:\n        return {\n            'success': False,\n            'error': f'Missing fields: {missing}'\n        }\n    \n    # Validate data types\n    if not isinstance(building_data['total_area'], (int, float)):\n        return {'success': False, 'error': 'total_area must be numeric'}\n    \n    if building_data['total_area'] <= 0:\n        return {'success': False, 'error': 'total_area must be positive'}\n    \n    # All valid - submit\n    return submit_building_summary(api_url, building_data)\n\n# Usage\nresult = validate_and_submit(url, building_data)\nif not result['success']:\n    print(f\"Validation failed: {result['error']}\")",
      bullets: [
        'Validate required fields exist before sending',
        'Check data types match API expectations',
        'Validate business rules (positive area)',
        'Fail fast before expensive network call',
      ],
    },
    speakerNotes: [
      'Client-side validation saves time',
      'Catch errors before API call',
      'Reduces load on server',
      'Better user experience',
    ],
  },

  // Slide 17: Practice - Compliance Submission
  {
    id: 17,
    type: 'exercise',
    title: 'Practice: Compliance Submission',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Send room data to compliance API simulation via POST.',
        input: 'room = {"number": "101", "area": 8.5, "type": "office"}',
        expectedOutput: "{'status': 'non_compliant', 'deficit': 1.5}",
        hint: 'Create POST payload with room data. Validate before sending. Parse response.',
      },
    },
    speakerNotes: [
      'Practice POST request',
      'Send structured data',
      'Process response',
    ],
  },

  // Slide 18: Practice - Error Response Handling
  {
    id: 18,
    type: 'exercise',
    title: 'Practice: Error Response Handling',
    durationMinutes: 10,
    content: {
      exercise: {
        problem: 'Handle failed POST request with appropriate error message.',
        input: 'Network timeout or 500 server error',
        expectedOutput: 'User-friendly error message based on error type',
        hint: 'Use different except blocks for Timeout, ConnectionError, HTTPError.',
      },
    },
    speakerNotes: [
      'Practice error handling',
      'Different errors need different messages',
      'User-friendly error reporting',
    ],
  },

  // Slide 19: Mini Web Service Simulation
  {
    id: 19,
    type: 'concept',
    title: 'Mini Web Service Simulation',
    durationMinutes: 15,
    content: {
      bullets: [
        'Internal services can simulate API patterns',
        'Separate data processing from API layer',
        'Service functions act as reusable endpoints',
        'Enables testing without external dependencies',
        'Foundation for microservices architecture',
      ],
    },
    speakerNotes: [
      'Not all APIs are external',
      'Internal services use same patterns',
      'Separation of concerns',
      'Easier testing and maintenance',
    ],
  },

  // Slide 20: Demo - Mini Cost Estimator Service
  {
    id: 20,
    type: 'demo',
    title: 'Demo: Mini Cost Estimator Service',
    durationMinutes: 15,
    content: {
      code: "class CostEstimatorService:\n    \"\"\"Simulates internal cost estimation API\"\"\"\n    \n    RATES = {\n        'office': 1500.0,      # per sqm\n        'residential': 1200.0,\n        'commercial': 1800.0,\n        'industrial': 1000.0\n    }\n    \n    def estimate(self, building_type, area, levels):\n        \"\"\"Calculate estimated construction cost\"\"\"\n        \n        # Validate inputs\n        if building_type not in self.RATES:\n            return {\n                'status': 400,\n                'error': f'Unknown building type: {building_type}'\n            }\n        \n        if area <= 0 or levels <= 0:\n            return {\n                'status': 400,\n                'error': 'Area and levels must be positive'\n            }\n        \n        # Calculate cost\n        base_cost = area * self.RATES[building_type]\n        level_factor = 1 + (levels - 1) * 0.05  # 5% per additional level\n        total_cost = base_cost * level_factor\n        \n        return {\n            'status': 200,\n            'data': {\n                'building_type': building_type,\n                'area': area,\n                'levels': levels,\n                'estimated_cost': round(total_cost, 2),\n                'cost_per_sqm': round(total_cost / area, 2)\n            }\n        }",
      bullets: [
        'Create service class acting as API',
        'Encapsulates business logic',
        'Returns standard response format',
        'Validates inputs before processing',
      ],
    },
    speakerNotes: [
      'Service class simulates external API',
      'Same request/response pattern',
      'Encapsulates domain knowledge',
      'Easy to test and maintain',
    ],
  },

  // Slide 21: Practice - Multi-Building Cost Aggregator
  {
    id: 21,
    type: 'exercise',
    title: 'Practice: Multi-Building Cost Aggregator',
    durationMinutes: 15,
    content: {
      exercise: {
        problem: 'Send multiple building summaries to cost service and aggregate returned costs.',
        input: 'List of 3 buildings with different types and areas',
        expectedOutput: 'Total project cost: $X, breakdown by building',
        hint: 'Loop through buildings, call estimate() for each, sum the costs, return aggregate.',
      },
    },
    speakerNotes: [
      'Practice batch processing',
      'Aggregate results from multiple calls',
      'Real portfolio estimation scenario',
    ],
  },

  // Slide 22: Building Automation Pipelines
  {
    id: 22,
    type: 'concept',
    title: 'Building Automation Pipelines',
    durationMinutes: 15,
    content: {
      bullets: [
        'Pipeline pattern: Load → Process → Call API → Process Result → Export',
        'Each step is independent and testable',
        'API calls are just one step in the chain',
        'Error handling at each stage',
        'Reusable components across projects',
      ],
    },
    speakerNotes: [
      'APIs fit into larger workflows',
      'Pipeline pattern is powerful',
      'Each step has single responsibility',
      'Errors handled at appropriate level',
    ],
  },

  // Slide 23: Demo - Complete Pipeline Example
  {
    id: 23,
    type: 'demo',
    title: 'Demo: Complete Pipeline Example',
    durationMinutes: 15,
    content: {
      code: "import json\nimport requests\n\ndef construction_cost_pipeline(building_json_path, cost_api_url):\n    \"\"\"Complete pipeline: load, calculate, fetch cost, report\"\"\"\n    \n    # 1. LOAD\n    with open(building_json_path, 'r') as f:\n        building = json.load(f)\n    \n    # 2. CALCULATE\n    total_area = sum(room['area'] for room in building['rooms'])\n    room_count = len(building['rooms'])\n    \n    # 3. CALL COST API\n    cost_data = {\n        'type': building['type'],\n        'area': total_area,\n        'levels': building['levels']\n    }\n    \n    try:\n        response = requests.post(cost_api_url, json=cost_data, timeout=10)\n        response.raise_for_status()\n        cost_result = response.json()\n    except requests.exceptions.RequestException as e:\n        return {'success': False, 'error': f'Cost API failed: {e}'}\n    \n    # 4. GENERATE REPORT\n    report = {\n        'project': building['name'],\n        'total_area': total_area,\n        'room_count': room_count,\n        'estimated_cost': cost_result.get('estimated_cost'),\n        'cost_per_sqm': cost_result.get('cost_per_sqm')\n    }\n    \n    return {'success': True, 'report': report}",
      bullets: [
        'Load building data from JSON',
        'Calculate total area locally',
        'Fetch cost from external API',
        'Generate consolidated report',
      ],
    },
    speakerNotes: [
      'Shows complete integration pattern',
      'Local processing + API call + reporting',
      'Error handling at API stage',
      'Returns structured result',
    ],
  },

  // Slide 24: Mini Challenge - Construction Data Integration Pipeline
  {
    id: 24,
    type: 'lab',
    title: 'Mini Challenge: Construction Data Integration Pipeline',
    durationMinutes: 30,
    content: {
      labSteps: [
        { step: 1, instruction: 'Load building JSON file with room data' },
        { step: 2, instruction: 'Compute total GFA and room statistics locally' },
        { step: 3, instruction: 'Send summary to simulated cost API endpoint' },
        { step: 4, instruction: 'Receive cost breakdown from API response' },
        { step: 5, instruction: 'Generate final project report including area and cost data' },
      ],
    },
    speakerNotes: [
      'Integrates all Week 13 skills',
      'Complete pipeline from file to API to report',
      'Real-world automation pattern',
      'Tests error handling and data flow',
    ],
  },

  // Slide 25: API Best Practices
  {
    id: 25,
    type: 'concept',
    title: 'API Best Practices',
    durationMinutes: 15,
    content: {
      bullets: [
        'Always validate responses before processing',
        'Use timeouts to prevent hanging requests',
        'Handle all error cases gracefully',
        'Cache responses when appropriate',
        'Never hardcode API keys in source code',
        'Rate limit: Do not overwhelm servers with requests',
      ],
    },
    speakerNotes: [
      'Professional API usage guidelines',
      'Timeouts are essential',
      'Respect rate limits',
      'Security: protect API keys',
      'Caching improves performance',
    ],
  },

  // Slide 26: Recap
  {
    id: 26,
    type: 'recap',
    title: 'Week 13 Recap',
    durationMinutes: 5,
    content: {
      recapItems: [
        'APIs enable software-to-software communication',
        'HTTP GET retrieves data, POST sends data',
        'requests library simplifies HTTP calls',
        'Always check status codes and handle errors',
        'Validate data before sending to APIs',
        'Pipeline pattern: Load → Process → API → Report',
        'APIs unlock real-world data integration',
      ],
    },
    speakerNotes: [
      'APIs connect your code to the world',
      'HTTP is the protocol of the web',
      'requests makes Python HTTP easy',
      'Error handling is critical',
      'Pipelines combine local and remote processing',
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
        'Week 14: Final Project Workshop',
        'End-to-End BIM Automation Project',
        'Integration of All Course Concepts',
        'Best Practices and Code Review',
        'Presentation and Peer Feedback',
      ],
    },
    speakerNotes: [
      'Final project brings everything together',
      'Apply all skills to real problem',
      'Code review and best practices',
      'Showcase your automation capabilities',
    ],
  },
];

export const week13TotalSlides = week13Slides.length;

export function getWeek13SlideById(id: number): SlideData | null {
  return week13Slides.find((slide) => slide.id === id) || null;
}
