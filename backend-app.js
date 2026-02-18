// FastAPI Backend Masterclass - Complete Curriculum
// 35 lessons covering FastAPI from basics to production deployment

const BACKEND_CURRICULUM = [
    {
        id: 1,
        title: "Module 1: FastAPI Foundations",
        icon: "🎯",
        description: "Set up FastAPI, understand ASGI, and build your first API endpoints",
        lessons: 5,
        duration: "2 hours",
        lessons_data: [
            {
                id: 1,
                title: "Why FastAPI? The Modern Backend Revolution",
                module: "Module 1",
                story: `<h2>📖 The Story of API Evolution</h2>
                    <p>Imagine you're running a restaurant. In the old days (Flask/Django), you had ONE waiter serving ALL tables sequentially. If table 5 ordered a slow-cooked meal, everyone else waited!</p>
                    <p>FastAPI is like having a team of efficient waiters who can serve multiple tables simultaneously (async). When table 5 is waiting for their meal, the waiter helps other tables!</p>
                    <p>This is why FastAPI is FASTER than Node.js and even Go for certain tasks!</p>`,
                content: `<h2>What Makes FastAPI Special?</h2>
                    <p>FastAPI isn't just another Python framework - it's a complete paradigm shift in how we build APIs.</p>
                    
                    <div class="story-box">
                        <div class="box-title">🚀 FastAPI vs The Competition</div>
                        <ul>
                            <li><strong>vs Flask:</strong> 3-4x faster, automatic validation, auto docs</li>
                            <li><strong>vs Django REST:</strong> Lighter, async native, modern Python</li>
                            <li><strong>vs Node.js Express:</strong> Comparable speed, but with Python!</li>
                            <li><strong>vs Go:</strong> Easier to learn, faster development</li>
                        </ul>
                    </div>

                    <h3>Key Features</h3>
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-language">FastAPI Advantages</span>
                        </div>
                        <pre><code>✅ Automatic API documentation (Swagger + ReDoc)
✅ Data validation using Pydantic
✅ Async/await support (true concurrency) 
✅ Type hints for better IDE support
✅ OAuth2, JWT authentication built-in
✅ WebSockets support
✅ GraphQL support
✅ Dependency injection system</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 How FastAPI Achieves Speed</div>
                        <ol>
                            <li><strong>Starlette:</strong> Ultra-fast ASGI framework underneath</li>
                            <li><strong>Pydantic:</strong> Rust-powered validation (C bindings)</li>
                            <li><strong>Async/Await:</strong> Non-blocking I/O operations</li>
                            <li><strong>Type Hints:</strong> Compiled optimizations possible</li>
                        </ol>
                        <p>Result: 20,000-30,000 requests/second vs Flask's 5,000-8,000!</p>
                    </div>

                    <h3>Real-World Use Cases</h3>
                    <div class="tip-box">
                        <div class="box-title">💡 Where FastAPI Shines</div>
                        <ul>
                            <li>🤖 <strong>ML/AI APIs:</strong> Serve machine learning models</li>
                            <li>📱 <strong>Mobile Backends:</strong> Power iOS/Android apps</li>
                            <li>🎮 <strong>Real-time Apps:</strong> Chat, gaming, live updates</li>
                            <li>🏢 <strong>Microservices:</strong> Modern cloud architecture</li>
                            <li>📊 <strong>Data APIs:</strong> Serve analytics and dashboards</li>
                        </ul>
                    </div>`
            },
            {
                id: 2,
                title: "Installation & Your First API",
                module: "Module 1",
                content: `<h2>Setting Up FastAPI</h2>
                    
                    <h3>Step 1: Create Virtual Environment</h3>
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-language">Terminal</span>
                            <button class="copy-button" onclick="copyCode(this)">Copy</button>
                        </div>
                        <pre><code class="language-bash"># Create project directory
mkdir fastapi-project
cd fastapi-project

# Create virtual environment
python -m venv venv

# Activate it
# On Mac/Linux:
source venv/bin/activate
# On Windows:
venv\\Scripts\\activate</code></pre>
                    </div>

                    <h3>Step 2: Install FastAPI + Uvicorn</h3>
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-language">Terminal</span>
                            <button class="copy-button" onclick="copyCode(this)">Copy</button>
                        </div>
                        <pre><code class="language-bash"># Install FastAPI and ASGI server
pip install fastapi uvicorn[standard]

# For development, also install:
pip install python-multipart  # For file uploads
pip install python-jose[cryptography]  # For JWT
pip install passlib[bcrypt]  # For passwords</code></pre>
                    </div>

                    <h3>Step 3: Your First API! 🎉</h3>
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-language">Python (main.py)</span>
                            <button class="copy-button" onclick="copyCode(this)">Copy</button>
                        </div>
                        <pre><code class="language-python">from fastapi import FastAPI

# Create FastAPI instance
app = FastAPI()

# Your first endpoint!
@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}</code></pre>
                    </div>

                    <h3>Step 4: Run Your API</h3>
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-language">Terminal</span>
                            <button class="copy-button" onclick="copyCode(this)">Copy</button>
                        </div>
                        <pre><code class="language-bash"># Start the server
uvicorn main:app --reload

# Output:
# INFO:     Uvicorn running on http://127.0.0.1:8000
# INFO:     Application startup complete.</code></pre>
                    </div>

                    <div class="tip-box">
                        <div class="box-title">💡 Visit These URLs!</div>
                        <ul>
                            <li>📍 <strong>http://127.0.0.1:8000</strong> - Your API</li>
                            <li>📚 <strong>http://127.0.0.1:8000/docs</strong> - Swagger UI (Interactive docs!)</li>
                            <li>📖 <strong>http://127.0.0.1:8000/redoc</strong> - ReDoc (Alternative docs)</li>
                        </ul>
                        <p>The docs are AUTO-GENERATED! 🤯 You just wrote an API with professional documentation!</p>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 What Just Happened?</div>
                        <ol>
                            <li><strong>FastAPI():</strong> Creates ASGI application instance</li>
                            <li><strong>@app.get("/"):</strong> Decorator registers GET endpoint</li>
                            <li><strong>Type hints (item_id: int):</strong> Auto validation!</li>
                            <li><strong>Uvicorn:</strong> ASGI server runs your app</li>
                            <li><strong>--reload:</strong> Auto-restart on code changes</li>
                        </ol>
                    </div>`
            },
            {
                id: 3,
                title: "Path Parameters & Query Parameters",
                module: "Module 1",
                content: `<h2>Understanding Request Parameters</h2>
                    
                    <h3>Path Parameters (URL Variables)</h3>
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-language">Python</span>
                            <button class="copy-button" onclick="copyCode(this)">Copy</button>
                        </div>
                        <pre><code class="language-python">from fastapi import FastAPI

app = FastAPI()

@app.get("/users/{user_id}")
def get_user(user_id: int):
    return {"user_id": user_id}

# URL: /users/42  → {"user_id": 42}

@app.get("/users/{user_id}/posts/{post_id}")
def get_user_post(user_id: int, post_id: int):
    return {"user_id": user_id, "post_id": post_id}

# URL: /users/42/posts/7 → {"user_id": 42, "post_id": 7}</code></pre>
                    </div>

                    <h3>Query Parameters (?key=value)</h3>
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-language">Python</span>
                            <button class="copy-button" onclick="copyCode(this)">Copy</button>
                        </div>
                        <pre><code class="language-python">@app.get("/items")
def list_items(skip: int = 0, limit: int = 10):
    return {"skip": skip, "limit": limit}

# URL: /items?skip=20&limit=5
# Returns: {"skip": 20, "limit": 5}

# Optional parameters
@app.get("/search")
def search(q: str = None, category: str = None):
    return {"query": q, "category": category}

# URL: /search?q=laptop  → {"query": "laptop", "category": null}</code></pre>
                    </div>

                    <h3>Combining Both</h3>
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-language">Python</span>
                            <button class="copy-button" onclick="copyCode(this)">Copy</button>
                        </div>
                        <pre><code class="language-python">@app.get("/users/{user_id}/items")
def get_user_items(user_id: int, skip: int = 0, limit: int = 10):
    return {
        "user_id": user_id,
        "skip": skip,
        "limit": limit
    }

# URL: /users/42/items?skip=10&limit=20</code></pre>
                    </div>

                    <div class="story-box">
                        <div class="box-title">🎭 Auto-Validation Magic!</div>
                        <p>If you visit /users/abc instead of /users/42, FastAPI automatically returns:</p>
                        <pre><code>{
  "detail": [
    {
      "loc": ["path", "user_id"],
      "msg": "value is not a valid integer",
      "type": "type_error.integer"
    }
  ]
}</code></pre>
                        <p>You didn't write ANY validation code! FastAPI did it for you! 🎉</p>
                    </div>`
            },
            {
                id: 4,
                title: "Request Body & Pydantic Models",
                module: "Module 1",
                content: `<h2>Handling POST Requests with Data Validation</h2>
                    
                    <h3>Pydantic Models (Data Schemas)</h3>
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-language">Python</span>
                            <button class="copy-button" onclick="copyCode(this)">Copy</button>
                        </div>
                        <pre><code class="language-python">from fastapi import FastAPI
from pydantic import BaseModel, EmailStr
from typing import Optional

app = FastAPI()

# Define data model
class User(BaseModel):
    username: str
    email: EmailStr
    full_name: Optional[str] = None
    age: int

@app.post("/users")
def create_user(user: User):
    return {
        "message": "User created",
        "user": user
    }</code></pre>
                    </div>

                    <div class="tip-box">
                        <div class="box-title">💡 Test with cURL or Postman</div>
                        <pre><code>POST http://127.0.0.1:8000/users
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "full_name": "John Doe", 
  "age": 30
}</code></pre>
                    </div>

                    <h3>Advanced Validation</h3>
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-language">Python</span>
                            <button class="copy-button" onclick="copyCode(this)">Copy</button>
                        </div>
                        <pre><code class="language-python">from pydantic import BaseModel, Field, validator

class Product(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    price: float = Field(..., gt=0, description="Price must be greater than 0")
    quantity: int = Field(default=1, ge=1, le=1000)
    
    @validator('name')
    def name_must_not_be_empty(cls, v):
        if not v.strip():
            raise ValueError('name cannot be empty')
        return v

@app.post("/products")
def create_product(product: Product):
    return product</code></pre>
                    </div>`
            },
            {
                id: 5,
                title: "Response Models & Status Codes",
                module: "Module 1",
                hasQuiz: true,
                content: `<h2>Professional API Responses</h2>
                    
                    <h3>Response Models</h3>
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-language">Python</span>
                            <button class="copy-button" onclick="copyCode(this)">Copy</button>
                        </div>
                        <pre><code class="language-python">from fastapi import FastAPI, status
from pydantic import BaseModel

app = FastAPI()

class UserIn(BaseModel):
    username: str
    password: str
    email: str

class UserOut(BaseModel):
    username: str
    email: str
    # Password excluded!

@app.post("/users", response_model=UserOut, status_code=status.HTTP_201_CREATED)
def create_user(user: UserIn):
    # Save user to database...
    return user  # Password automatically filtered out!</code></pre>
                    </div>

                    <h3>Status Codes</h3>
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-language">Python</span>
                            <button class="copy-button" onclick="copyCode(this)">Copy</button>
                        </div>
                        <pre><code class="language-python">from fastapi import FastAPI, HTTPException, status

@app.get("/items/{item_id}")
def get_item(item_id: int):
    if item_id not in database:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Item not found"
        )
    return database[item_id]

# Common status codes:
# 200: OK
# 201: Created
# 204: No Content
# 400: Bad Request
# 401: Unauthorized
# 403: Forbidden
# 404: Not Found
# 500: Internal Server Error</code></pre>
                    </div>

                    <h3>Module 1 Complete! 🎉</h3>
                    <p>You can now:</p>
                    <ul>
                        <li>✅ Build basic APIs with FastAPI</li>
                        <li>✅ Handle path and query parameters</li>
                        <li>✅ Validate request bodies with Pydantic</li>
                        <li>✅ Return proper HTTP status codes</li>
                        <li>✅ Filter response data with response models</li>
                    </ul>
                    <p>Next up: Databases! We'll connect FastAPI to real databases!</p>`
            }
        ]
    },
    {
        id: 2,
        title: "Module 2: Databases & ORMs",
        icon: "💾",
        description: "Connect to databases using SQLAlchemy, create models, and perform CRUD operations",
        lessons: 6,
        duration: "3 hours",
        lessons_data: [
            { id: 6, title: "SQLAlchemy Setup & Connection", module: "Module 2", content: `<h2>Database Setup</h2><div class="code-block"><div class="code-header"><span class="code-language">Terminal</span></div><pre><code>pip install sqlalchemy databases[sqlite]\npip install alembic</code></pre></div><div class="code-block"><div class="code-header"><span class="code-language">Python (database.py)</span></div><pre><code>from sqlalchemy import create_engine\nfrom sqlalchemy.ext.declarative import declarative_base\nfrom sqlalchemy.orm import sessionmaker\n\nDATABASE_URL = "sqlite:///./test.db"\n\nengine = create_engine(DATABASE_URL)\nSessionLocal = sessionmaker(bind=engine)\nBase = declarative_base()\n\ndef get_db():\n    db = SessionLocal()\n    try:\n        yield db\n    finally:\n        db.close()</code></pre></div>` },
            { id: 7, title: "Database Models & Relationships", module: "Module 2", content: `<h2>Creating Models</h2><div class="code-block"><div class="code-header"><span class="code-language">Python</span></div><pre><code>from sqlalchemy import Column, Integer, String, ForeignKey\nfrom sqlalchemy.orm import relationship\n\nclass User(Base):\n    __tablename__ = "users"\n    id = Column(Integer, primary_key=True)\n    email = Column(String, unique=True)\n    posts = relationship("Post")\n\nclass Post(Base):\n    __tablename__ = "posts"\n    id = Column(Integer, primary_key=True)\n    title = Column(String)\n    user_id = Column(Integer, ForeignKey("users.id"))</code></pre></div>` },
            { id: 8, title: "CRUD Operations", module: "Module 2", content: `<h2>Database Operations</h2><div class="code-block"><div class="code-header"><span class="code-language">Python</span></div><pre><code>@app.post("/users/")\ndef create_user(user: UserCreate, db: Session = Depends(get_db)):\n    db_user = User(email=user.email)\n    db.add(db_user)\n    db.commit()\n    return db_user\n\n@app.get("/users/")\ndef read_users(db: Session = Depends(get_db)):\n    return db.query(User).all()\n\n@app.delete("/users/{user_id}")\ndef delete_user(user_id: int, db: Session = Depends(get_db)):\n    user = db.query(User).filter(User.id == user_id).first()\n    db.delete(user)\n    db.commit()\n    return {"deleted": True}</code></pre></div>` },
            { id: 9, title: "Database Migrations with Alembic", module: "Module 2", content: `<h2>Alembic Migrations</h2><div class="code-block"><div class="code-header"><span class="code-language">Terminal</span></div><pre><code>alembic init alembic\nalembic revision --autogenerate -m "init"\nalembic upgrade head</code></pre></div>` },
            { id: 10, title: "Async Database Operations", module: "Module 2", content: `<h2>Async SQLAlchemy</h2><div class="code-block"><div class="code-header"><span class="code-language">Python</span></div><pre><code>from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession\n\n@app.get("/users/")\nasync def read_users(db: AsyncSession = Depends(get_db)):\n    result = await db.execute(select(User))\n    return result.scalars().all()</code></pre></div>` },
            { id: 11, title: "Query Optimization & Pagination", module: "Module 2", hasQuiz: true, content: `<h2>Efficient Queries</h2><div class="code-block"><div class="code-header"><span class="code-language">Python</span></div><pre><code>@app.get("/posts/")\ndef get_posts(page: int = 1, size: int = 10, db: Session = Depends(get_db)):\n    skip = (page - 1) * size\n    posts = db.query(Post).offset(skip).limit(size).all()\n    total = db.query(Post).count()\n    return {"items": posts, "total": total, "pages": total//size + 1}</code></pre></div><h3>Module 2 Complete! 🎉</h3>` }
        ]
    },
    {
        id: 3,
        title: "Module 3: Authentication & Security",
        icon: "🔐",
        description: "Implement JWT authentication, OAuth2, password hashing, and API security",
        lessons: 6,
        duration: "3 hours",
        lessons_data: [
            { id: 12, title: "Password Hashing with Passlib", module: "Module 3", content: `<h2>Secure Passwords</h2><div class="code-block"><div class="code-header"><span class="code-language">Python</span></div><pre><code>from passlib.context import CryptContext\n\npwd_context = CryptContext(schemes=["bcrypt"])\n\ndef hash_password(password: str):\n    return pwd_context.hash(password)\n\ndef verify_password(plain, hashed):\n    return pwd_context.verify(plain, hashed)</code></pre></div>` },
            { id: 13, title: "JWT Tokens - Creation & Validation", module: "Module 3", content: `<h2>JWT Authentication</h2><div class="code-block"><div class="code-header"><span class="code-language">Python</span></div><pre><code>from jose import JWTError, jwt\nfrom datetime import datetime, timedelta\n\nSECRET_KEY = "your-secret-key"\nALGORITHM = "HS256"\n\ndef create_access_token(data: dict):\n    expire = datetime.utcnow() + timedelta(minutes=30)\n    to_encode = data.copy()\n    to_encode.update({"exp": expire})\n    return jwt.encode(to_encode, SECRET_KEY, ALGORITHM)\n\ndef verify_token(token: str):\n    payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])\n    return payload</code></pre></div>` },
            { id: 14, title: "OAuth2 with Password Flow", module: "Module 3", content: `<h2>OAuth2 Implementation</h2><div class="code-block"><div class="code-header"><span class="code-language">Python</span></div><pre><code>from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm\n\noauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")\n\n@app.post("/token")\ndef login(form_data: OAuth2PasswordRequestForm = Depends()):\n    user = authenticate_user(form_data.username, form_data.password)\n    if not user:\n        raise HTTPException(status_code=401)\n    token = create_access_token({"sub": user.email})\n    return {"access_token": token, "token_type": "bearer"}</code></pre></div>` },
            { id: 15, title: "Protected Routes & Dependencies", module: "Module 3", content: `<h2>Protecting Endpoints</h2><div class="code-block"><div class="code-header"><span class="code-language">Python</span></div><pre><code>async def get_current_user(token: str = Depends(oauth2_scheme)):\n    try:\n        payload = verify_token(token)\n        email = payload.get("sub")\n        if email is None:\n            raise HTTPException(status_code=401)\n        return email\n    except JWTError:\n        raise HTTPException(status_code=401)\n\n@app.get("/me")\ndef read_users_me(current_user: str = Depends(get_current_user)):\n    return {"email": current_user}</code></pre></div>` },
            { id: 16, title: "Role-Based Access Control (RBAC)", module: "Module 3", content: `<h2>User Roles & Permissions</h2><div class="code-block"><div class="code-header"><span class="code-language">Python</span></div><pre><code>def require_role(role: str):\n    def role_checker(current_user: User = Depends(get_current_user)):\n        if current_user.role != role:\n            raise HTTPException(status_code=403, detail="Not authorized")\n        return current_user\n    return role_checker\n\n@app.delete("/admin/users/{user_id}")\ndef delete_user(user_id: int, admin: User = Depends(require_role("admin"))):\n    # Only admins can access\n    return {"deleted": user_id}</code></pre></div>` },
            { id: 17, title: "API Keys & Rate Limiting", module: "Module 3", hasQuiz: true, content: `<h2>API Security</h2><div class="code-block"><div class="code-header"><span class="code-language">Python</span></div><pre><code>from fastapi import Header\nfrom slowapi import Limiter, _rate_limit_exceeded_handler\n\nlimiter = Limiter(key_func=lambda: "global")\n\n@app.get("/api/data")\n@limiter.limit("5/minute")\ndef get_data(api_key: str = Header(...)):\n    if api_key not in valid_keys:\n        raise HTTPException(status_code=401)\n    return {"data": "secret"}</code></pre></div><h3>Module 3 Complete! 🎉</h3>` }
        ]
    },
    {
        id: 4,
        title: "Module 4: Advanced Features",
        icon: "🚀",
        description: "File uploads, WebSockets, background tasks, and middleware",
        lessons: 6,
        duration: "3.5 hours",
        lessons_data: [
            { id: 18, title: "File Uploads & Download", module: "Module 4", content: `<h2>File Handling</h2><div class="code-block"><div class="code-header"><span class="code-language">Python</span></div><pre><code>from fastapi import File, UploadFile\n\n@app.post("/upload/")\nasync def upload_file(file: UploadFile = File(...)):\n    contents = await file.read()\n    with open(f"uploads/{file.filename}", "wb") as f:\n        f.write(contents)\n    return {"filename": file.filename, "size": len(contents)}</code></pre></div>` },
            { id: 19, title: "WebSockets for Real-Time Communication", module: "Module 4", content: `<h2>WebSocket Connections</h2><div class="code-block"><div class="code-header"><span class="code-language">Python</span></div><pre><code>from fastapi import WebSocket\n\n@app.websocket("/ws")\nasync def websocket_endpoint(websocket: WebSocket):\n    await websocket.accept()\n    while True:\n        data = await websocket.receive_text()\n        await websocket.send_text(f"Echo: {data}")</code></pre></div>` },
            { id: 20, title: "Background Tasks", module: "Module 4", content: `<h2>Async Background Jobs</h2><div class="code-block"><div class="code-header"><span class="code-language">Python</span></div><pre><code>from fastapi import BackgroundTasks\n\ndef send_email(email: str, message: str):\n    # Send email logic\n    print(f"Sending to {email}: {message}")\n\n@app.post("/send-notification/")\ndef notify(email: str, background_tasks: BackgroundTasks):\n    background_tasks.add_task(send_email, email, "Welcome!")\n    return {"message": "Notification queued"}</code></pre></div>` },
            { id: 21, title: "Custom Middleware", module: "Module 4", content: `<h2>Request/Response Middleware</h2><div class="code-block"><div class="code-header"><span class="code-language">Python</span></div><pre><code>from starlette.middleware.base import BaseHTTPMiddleware\nimport time\n\nclass TimingMiddleware(BaseHTTPMiddleware):\n    async def dispatch(self, request, call_next):\n        start = time.time()\n        response = await call_next(request)\n        duration = time.time() - start\n        response.headers["X-Process-Time"] = str(duration)\n        return response\n\napp.add_middleware(TimingMiddleware)</code></pre></div>` },
            { id: 22, title: "CORS & Headers", module: "Module 4", content: `<h2>Cross-Origin Requests</h2><div class="code-block"><div class="code-header"><span class="code-language">Python</span></div><pre><code>from fastapi.middleware.cors import CORSMiddleware\n\napp.add_middleware(\n    CORSMiddleware,\n    allow_origins=["*"],\n    allow_credentials=True,\n    allow_methods=["*"],\n    allow_headers=["*"]\n)</code></pre></div>` },
            { id: 23, title: "Email Sending & Notifications", module: "Module 4", hasQuiz: true, content: `<h2>Email Integration</h2><div class="code-block"><div class="code-header"><span class="code-language">Python</span></div><pre><code>from fastapi_mail import FastMail, MessageSchema, ConnectionConfig\n\nconf = ConnectionConfig(\n    MAIL_USERNAME="your@email.com",\n    MAIL_FROM="your@email.com",\n    MAIL_PASSWORD="password",\n    MAIL_SERVER="smtp.gmail.com"\n)\n\n@app.post("/email/")\nasync def send_email(email: str):\n    message = MessageSchema(\n        subject="Welcome!",\n        recipients=[email],\n        body="Thanks for signing up!"\n    )\n    fm = FastMail(conf)\n    await fm.send_message(message)\n    return {"sent": True}</code></pre></div><h3>Module 4 Complete! 🎉</h3>` }
        ]
    },
    {
        id: 5,
        title: "Module 5: Testing & Documentation",
        icon: "🧪",
        description: "Write tests, generate docs, and ensure code quality",
        lessons: 5,
        duration: "2.5 hours",
        lessons_data: [
            { id: 24, title: "Unit Testing with Pytest", module: "Module 5", content: `<h2>Testing FastAPI</h2><div class="code-block"><div class="code-header"><span class="code-language">Python</span></div><pre><code>from fastapi.testclient import TestClient\nfrom main import app\n\nclient = TestClient(app)\n\ndef test_read_main():\n    response = client.get("/")\n    assert response.status_code == 200\n    assert response.json() == {"message": "Hello"}</code></pre></div>` },
            { id: 25, title: "Integration Testing APIs", module: "Module 5", content: `<h2>Full API Tests</h2><div class="code-block"><div class="code-header"><span class="code-language">Python</span></div><pre><code>def test_create_user():\n    response = client.post("/users/", json={\n        "email": "test@example.com",\n        "password": "secret123"\n    })\n    assert response.status_code == 201\n    assert "id" in response.json()</code></pre></div>` },
            { id: 26, title: "Test Coverage & Mocking", module: "Module 5", content: `<h2>Code Coverage</h2><div class="code-block"><div class="code-header"><span class="code-language">Terminal</span></div><pre><code>pip install pytest-cov\npytest --cov=app tests/\n\n# Generate HTML report\npytest --cov=app --cov-report=html tests/</code></pre></div>` },
            { id: 27, title: "Custom OpenAPI Documentation", module: "Module 5", content: `<h2>Customize Docs</h2><div class="code-block"><div class="code-header"><span class="code-language">Python</span></div><pre><code>app = FastAPI(\n    title="My API",\n    description="Awesome API docs",\n    version="1.0.0",\n    docs_url="/documentation",\n    redoc_url="/redoc"\n)</code></pre></div>` },
            { id: 28, title: "API Versioning", module: "Module 5", hasQuiz: true, content: `<h2>Version Control</h2><div class="code-block"><div class="code-header"><span class="code-language">Python</span></div><pre><code>from fastapi import APIRouter\n\nv1 = APIRouter(prefix="/api/v1")\nv2 = APIRouter(prefix="/api/v2")\n\n@v1.get("/users")\ndef get_users_v1():\n    return {"version": 1, "users": []}\n\n@v2.get("/users")\ndef get_users_v2():\n    return {"version": 2, "users": [], "total": 0}\n\napp.include_router(v1)\napp.include_router(v2)</code></pre></div><h3>Module 5 Complete! 🎉</h3>` }
        ]
    },
    {
        id: 6,
        title: "Module 6: Deployment & Production",
        icon: "☁️",
        description: "Deploy to production with Docker, CI/CD, monitoring, and scaling",
        lessons: 4,
        duration: "3 hours",
        lessons_data: [
            { id: 29, title: "Docker & Docker Compose", module: "Module 6", content: `<h2>Containerization</h2><div class="code-block"><div class="code-header"><span class="code-language">Dockerfile</span></div><pre><code>FROM python:3.11\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install -r requirements.txt\nCOPY . .\nCMD ["uvicorn", "main:app", "--host", "0.0.0.0"]</code></pre></div><div class="code-block"><div class="code-header"><span class="code-language">docker-compose.yml</span></div><pre><code>version: '3.8'\nservices:\n  web:\n    build: .\n    ports:\n      - "8000:8000"\n  db:\n    image: postgres:15\n    environment:\n      POSTGRES_PASSWORD: secret</code></pre></div>` },
            { id: 30, title: "Deploy to AWS/GCP/Heroku", module: "Module 6", content: `<h2>Cloud Deployment</h2><div class="tip-box"><div class="box-title">☁️ Deployment Options</div><ul><li><strong>AWS:</strong> Elastic Beanstalk, ECS, Lambda</li><li><strong>GCP:</strong> Cloud Run, App Engine</li><li><strong>Heroku:</strong> Git push deployment</li><li><strong>DigitalOcean:</strong> App Platform</li></ul></div><div class="code-block"><div class="code-header"><span class="code-language">Heroku Deployment</span></div><pre><code># Procfile\nweb: uvicorn main:app --host 0.0.0.0 --port $PORT\n\n# Deploy\nheroku create my-fastapi-app\ngit push heroku main</code></pre></div>` },
            { id: 31, title: "CI/CD with GitHub Actions", module: "Module 6", content: `<h2>Automated Deployment</h2><div class="code-block"><div class="code-header"><span class="code-language">.github/workflows/deploy.yml</span></div><pre><code>name: Deploy\non:\n  push:\n    branches: [main]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - name: Run tests\n        run: |\n          pip install -r requirements.txt\n          pytest\n  deploy:\n    needs: test\n    runs-on: ubuntu-latest\n    steps:\n      - name: Deploy to production\n        run: echo "Deploying..."</code></pre></div>` },
            { id: 32, title: "Monitoring, Logging & Performance", module: "Module 6", hasQuiz: true, content: `<h2>Production Monitoring</h2><div class="code-block"><div class="code-header"><span class="code-language">Python</span></div><pre><code>import logging\nfrom prometheus_fastapi_instrumentator import Instrumentator\n\n# Logging\nlogging.basicConfig(level=logging.INFO)\nlogger = logging.getLogger(__name__)\n\n@app.get("/")\ndef root():\n    logger.info("Root endpoint accessed")\n    return {"status": "ok"}\n\n# Prometheus metrics\nInstrumentator().instrument(app).expose(app)</code></pre></div><h3>Module 6 Complete! 🎉</h3>` }
        ]
    },
    {
        id: 7,
        title: "Module 7: Real-World Projects",
        icon: "💼",
        description: "Build complete production-ready applications",
        lessons: 3,
        duration: "5 hours",
        lessons_data: [
            { id: 33, title: "Project 1: Blog API with Auth", module: "Module 7", content: `<h2>Complete Blog API</h2><p>Build a full-featured blog with:</p><ul><li>✅ User authentication (JWT)</li><li>✅ CRUD for posts & comments</li><li>✅ Categories and tags</li><li>✅ File uploads for images</li><li>✅ Pagination & search</li></ul><div class="code-block"><div class="code-header"><span class="code-language">Key Endpoints</span></div><pre><code>POST /auth/register\nPOST /auth/login\nGET /posts?page=1&limit=10\nPOST /posts\nGET /posts/{post_id}\nDELETE /posts/{post_id}\nPOST /posts/{post_id}/comments</code></pre></div>` },
            { id: 34, title: "Project 2: E-commerce Backend", module: "Module 7", content: `<h2>E-commerce API</h2><p>Build a complete shopping platform:</p><ul><li>✅ Product catalog with search</li><li>✅ Shopping cart management</li><li>✅ Order processing</li><li>✅ Payment integration</li><li>✅ Inventory tracking</li></ul><div class="code-block"><div class="code-header"><span class="code-language">Core Features</span></div><pre><code>GET /products?category=electronics\nPOST /cart/add\nPOST /orders/checkout\nGET /orders/{order_id}\nPOST /payments/process</code></pre></div>` },
            { id: 35, title: "Project 3: Real-Time Chat Application", module: "Module 7", hasQuiz: true, content: `<h2>Real-Time Chat App</h2><p>Build a chat application with:</p><ul><li>✅ WebSocket connections</li><li>✅ Real-time messaging</li><li>✅ Chat rooms</li><li>✅ User presence</li><li>✅ Message history</li></ul><div class="code-block"><div class="code-header"><span class="code-language">Python</span></div><pre><code>class ConnectionManager:\n    def __init__(self):\n        self.active_connections = []\n    \n    async def connect(self, websocket):\n        await websocket.accept()\n        self.active_connections.append(websocket)\n    \n    async def broadcast(self, message):\n        for connection in self.active_connections:\n            await connection.send_text(message)\n\nmanager = ConnectionManager()\n\n@app.websocket("/ws/{client_id}")\nasync def chat(websocket: WebSocket, client_id: str):\n    await manager.connect(websocket)\n    while True:\n        data = await websocket.receive_text()\n        await manager.broadcast(f"{client_id}: {data}")</code></pre></div><h3>🎉 CONGRATULATIONS! 🎉</h3><p>You completed the entire FastAPI Masterclass!</p><p>You can now build production-ready backends!</p>` }
        ]
    }
];

// Copy application logic from app.js but adapted for backend curriculum
let currentLesson = null;
let completedLessons = new Set(JSON.parse(localStorage.getItem('backendCompletedLessons') || '[]'));
let currentTheme = localStorage.getItem('theme') || 'dark';

document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    renderSidebar();
    renderModulesGrid();
    updateProgress();
    setupEventListeners();
    hljs.highlightAll();
});

function initializeTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

function renderSidebar() {
    const nav = document.getElementById('sidebar-nav');
    nav.innerHTML = '';

    BACKEND_CURRICULUM.forEach((module, moduleIndex) => {
        const moduleSection = document.createElement('div');
        moduleSection.className = 'module-section';

        const moduleHeader = document.createElement('div');
        moduleHeader.className = 'module-header';
        if (moduleIndex === 0) moduleHeader.classList.add('expanded');

        moduleHeader.innerHTML = `
            <div class="module-title">
                <span class="module-number">M${module.id}</span>
                <h3>${module.title.replace('Module ' + module.id + ': ', '')}</h3>
            </div>
            <svg class="module-chevron" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        `;

        const lessonsList = document.createElement('div');
        lessonsList.className = 'lessons-list';
        if (moduleIndex === 0) lessonsList.classList.add('expanded');

        if (module.lessons_data && module.lessons_data.length > 0) {
            module.lessons_data.forEach(lesson => {
                const lessonItem = document.createElement('div');
                lessonItem.className = 'lesson-item';
                if (completedLessons.has(lesson.id)) lessonItem.classList.add('completed');

                lessonItem.innerHTML = `
                    <span class="lesson-title">${lesson.title}</span>
                    <svg class="lesson-check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                `;

                lessonItem.addEventListener('click', () => loadLesson(lesson));
                lessonsList.appendChild(lessonItem);
            });
        }

        moduleHeader.addEventListener('click', () => toggleModule(moduleHeader, lessonsList));

        moduleSection.appendChild(moduleHeader);
        moduleSection.appendChild(lessonsList);
        nav.appendChild(moduleSection);
    });
}

function renderModulesGrid() {
    const grid = document.getElementById('modules-grid');
    grid.innerHTML = '';

    BACKEND_CURRICULUM.forEach(module => {
        const card = document.createElement('div');
        card.className = 'module-card';
        card.innerHTML = `
            <div class="module-card-header">
                <span class="module-icon">${module.icon}</span>
                <span class="module-card-number">Module ${module.id}</span>
            </div>
            <h3>${module.title.replace('Module ' + module.id + ': ', '')}</h3>
            <p>${module.description}</p>
            <div class="module-card-meta">
                <span>📚 ${module.lessons} lessons</span>
                <span>⏱️ ${module.duration}</span>
            </div>
        `;

        card.addEventListener('click', () => {
            if (module.lessons_data && module.lessons_data.length > 0) {
                loadLesson(module.lessons_data[0]);
            }
        });

        grid.appendChild(card);
    });
}

function loadLesson(lesson) {
    currentLesson = lesson;

    const welcomeScreen = document.getElementById('welcome-screen');
    const lessonContent = document.getElementById('lesson-content');

    welcomeScreen.style.display = 'none';
    lessonContent.style.display = 'block';

    document.querySelectorAll('.lesson-item').forEach(item => item.classList.remove('active'));

    lessonContent.innerHTML = `
        <div class="lesson-header">
            <div class="lesson-meta">
                <span class="lesson-badge">${lesson.module}</span>
            </div>
            <h1>${lesson.title}</h1>
        </div>
        
        ${lesson.story || ''}
        
        <div class="lesson-body">
            ${lesson.content || '<p>Lesson content coming soon...</p>'}
        </div>
        
        <div class="lesson-navigation">
            <button class="nav-button" onclick="previousLesson()">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                <div class="nav-button-content">
                    <div class="nav-button-label">Previous</div>
                    <div class="nav-button-title">Lesson</div>
                </div>
            </button>
            
            <button class="nav-button" onclick="markComplete()" style="flex: 0.5; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none;">
                <span style="flex: 1; font-weight: 600;">Mark Complete</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </button>
            
            <button class="nav-button" onclick="nextLesson()">
                <div class="nav-button-content">
                    <div class="nav-button-label">Next</div>
                    <div class="nav-button-title">Lesson</div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
        </div>
    `;

    lessonContent.querySelectorAll('pre code').forEach(block => {
        hljs.highlightElement(block);
    });

    window.scrollTo(0, 0);
}

function markComplete() {
    if (currentLesson) {
        completedLessons.add(currentLesson.id);
        localStorage.setItem('backendCompletedLessons', JSON.stringify([...completedLessons]));
        updateProgress();
        renderSidebar();
        nextLesson();
    }
}

function toggleModule(header, lessonsList) {
    header.classList.toggle('expanded');
    lessonsList.classList.toggle('expanded');
}

function startLearning() {
    if (BACKEND_CURRICULUM[0].lessons_data && BACKEND_CURRICULUM[0].lessons_data.length > 0) {
        loadLesson(BACKEND_CURRICULUM[0].lessons_data[0]);
    }
}

function updateProgress() {
    const totalLessons = BACKEND_CURRICULUM.reduce((sum, module) => sum + (module.lessons_data?.length || 0), 0);
    const completed = completedLessons.size;
    const percentage = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;

    document.getElementById('completed-count').textContent = completed;
    document.getElementById('total-count').textContent = totalLessons;
    document.getElementById('progress-fill').style.width = percentage + '%';
    document.getElementById('progress-text').textContent = percentage + '% Complete';
}

function copyCode(button) {
    const codeBlock = button.closest('.code-block').querySelector('code');
    navigator.clipboard.writeText(codeBlock.textContent);
    button.textContent = 'Copied!';
    setTimeout(() => button.textContent = 'Copy', 2000);
}

function setupEventListeners() {
    document.getElementById('theme-toggle').addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
        document.documentElement.setAttribute('data-theme', currentTheme);
    });

    document.getElementById('search-input').addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        document.querySelectorAll('.lesson-item').forEach(item => {
            const title = item.querySelector('.lesson-title').textContent.toLowerCase();
            item.style.display = title.includes(query) ? 'flex' : 'none';
        });
    });
}

function nextLesson() {
    if (!currentLesson) return;
    const allLessons = getAllLessons();
    const currentIndex = allLessons.findIndex(l => l.id === currentLesson.id);
    if (currentIndex < allLessons.length - 1) {
        loadLesson(allLessons[currentIndex + 1]);
    }
}

function previousLesson() {
    if (!currentLesson) return;
    const allLessons = getAllLessons();
    const currentIndex = allLessons.findIndex(l => l.id === currentLesson.id);
    if (currentIndex > 0) {
        loadLesson(allLessons[currentIndex - 1]);
    }
}

function getAllLessons() {
    const all = [];
    BACKEND_CURRICULUM.forEach(module => {
        if (module.lessons_data) {
            all.push(...module.lessons_data);
        }
    });
    return all;
}
