
import json
from backend_modules import modules as m1
from backend_modules_part2 import modules as m2
from backend_modules_part3 import modules as m3
from backend_modules_part4 import modules as m4

# Merge modules
modules = m1 + m2 + m3 + m4

# Serialize curriculum to JSON
curriculum_json = json.dumps(modules, indent=4)

# Read the logic part
try:
    with open('backend_logic.js', 'r') as f:
        logic_content = f.read()
except FileNotFoundError:
    print("Error: backend_logic.js not found. Please run extraction step.")
    exit(1)

# Combined content
final_content = f"""// FastAPI Backend Masterclass - Complete Curriculum
// 35 lessons covering FastAPI from basics to production deployment

const BACKEND_CURRICULUM = {curriculum_json};

// ============================================
// APPLICATION LOGIC
// ============================================

{logic_content}
"""

# Write to backend-app.js
with open('backend-app.js', 'w') as f:
    f.write(final_content)

print(f"Successfully generated backend-app.js with {len(modules)} modules covering {sum(len(m['lessons_data']) for m in modules)} lessons.")
