
modules = [
    {
        "id": 7,
        "title": "Module 7: The Grand Opening (Deployment)",
        "icon": "🚀",
        "description": "Prepare your kitchen for the world! Learn Docker, Gunicorn, and how to deploy your FastAPI app to the cloud.",
        "lessons_data": [
            {
                "id": 31,
                "title": "The Shipping Container (Docker)",
                "module": "Module 7",
                "story": """<h2>🚚 The Magic Box</h2>
                     <p>Imagine if you could ship your entire kitchen (stoves, chefs, pantry) inside a magical shipping container. When it arrives at any location in the world, you just open it, and it works exactly the same.</p>
                     <p>This is <strong>Docker</strong>. It packages your code and all its dependencies (OS, libraries) into a standard unit.</p>""",
                "content": """<h2>Why Docker?</h2>
                     <ul>
                        <li><strong>Standardization:</strong> "It works on my machine" becomes "It works everywhere".</li>
                        <li><strong>Isolation:</strong> Each app runs in its own container, not affecting the host OS.</li>
                     </ul>

                     <h3>Installing Docker</h3>
                     <p>Download Docker Desktop for Mac/Windows from <a href="https://www.docker.com/" target="_blank">Docker.com</a>.</p>"""
            },
            {
                "id": 32,
                "title": "The Recipe (Dockerfile)",
                "module": "Module 7",
                "story": """<h2>📜 The Master Recipe</h2>
                     <p>A Dockerfile is the exact set of instructions to build your container image. "Start with Python 3.9. Add these requirements. Copy our code. Run this command."</p>""",
                "content": """<h2>Writing a Dockerfile</h2>
                     <p>Create a file named `Dockerfile` (no extension):</p>

                     <pre><code>
# 1. Base Image (The OS + Python)
FROM python:3.9-slim

# 2. Set Working Directory
WORKDIR /app

# 3. Copy Requirements first (for caching)
COPY requirements.txt .

# 4. Install Dependencies
RUN pip install --no-cache-dir -r requirements.txt

# 5. Copy Application Code
COPY . .

# 6. Command to Run
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]
                     </code></pre>
                     
                     <h3>Building It</h3>
                     <pre><code>docker build -t my-fastapi-app .</code></pre>
                     
                     <h3>Running It</h3>
                     <pre><code>docker run -d -p 80:80 my-fastapi-app</code></pre>"""
            },
            {
                "id": 33,
                "title": "Orchestration (Docker Compose)",
                "module": "Module 7",
                "story": """<h2>🎶 The Conductor</h2>
                     <p>Your app rarely runs alone. It needs a Database. Maybe a Cache (Redis). Managing multiple containers manually is hard.</p>
                     <p><strong>Docker Compose</strong> lets us define multi-container applications in a simple YAML file.</p>""",
                "content": """<h2>docker-compose.yml</h2>
                     <pre><code>version: "3.8"
services:
  web:
    build: .
    ports:
      - "8000:80"
    depends_on:
      - db
      
  db:
    image: postgres:13
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: db</code></pre>

                     <h3>Run Everything</h3>
                     <pre><code>docker-compose up -d</code></pre>"""
            },
            {
                "id": 34,
                "title": "Production Server (Gunicorn)",
                "module": "Module 7",
                "story": """<h2>🏭 The Factory Manager</h2>
                     <p>Uvicorn is great, but it's a single worker. In production, we want a Manager who spawns multiple workers to handle heavy traffic.</p>
                     <p>We use <strong>Gunicorn</strong> (the Manager) to manage Uvicorn (the Worker).</p>""",
                "content": """<h2>Running with Gunicorn</h2>
                     <p>Install it first:</p>
                     <pre><code>pip install gunicorn</code></pre>

                     <h3>The Command</h3>
                     <pre><code>gunicorn -w 4 -k uvicorn.workers.UvicornWorker main:app</code></pre>
                     <ul>
                        <li><code>-w 4</code>: Use 4 worker processes.</li>
                        <li><code>-k ...</code>: Use the Uvicorn worker class (async compatible).</li>
                     </ul>
                     <p>Update your Dockerfile CMD to use this!</p>"""
            },
            {
                "id": 35,
                "title": "Cloud Deployment",
                "module": "Module 7",
                "story": """<h2>⛅ Into the Clouds</h2>
                     <p>Now that your container is ready, you can deploy it anywhere that runs Docker.</p>""",
                "content": """<h2>Free Tier Options</h2>
                     <ul>
                        <li><strong>Render.com:</strong> Easiest for Docker/Python. Just link your GitHub repo.</li>
                        <li><strong>Railway.app:</strong> Great for full stack (Frontend + Backend + DB).</li>
                        <li><strong>Fly.io:</strong> Optimizes for global distribution.</li>
                     </ul>

                     <h3>Steps (Render)</h3>
                     <ol>
                        <li>Push code to GitHub.</li>
                        <li>Go to Dashboard > New Web Service.</li>
                        <li>Select Repo.</li>
                        <li>Choose Docker Environment.</li>
                        <li>Deploy! 🚀</li>
                     </ol>"""
            }
        ]
    }
]
