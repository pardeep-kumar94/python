
modules = [
    {
        "id": 3,
        "title": "Module 3: The Pantry (Database)",
        "icon": "🗄️",
        "description": "Connect your API to a real database using SQLModel (SQLAlchemy + Pydantic) to store data permanently.",
        "lessons_data": [
            {
                "id": 11,
                "title": "The Infinite Pantry (SQLModel)",
                "module": "Module 3",
                "story": """<h2>🥡 The Problem with RAM</h2>
                    <p>So far, we've stored data in Python lists `items = []`. But when the restaurant (server) closes for the night (restarts), all that food disappears. We need a Pantry that persists—a Database.</p>
                    <p>Enter <strong>SQLModel</strong>. It's a library by the creator of FastAPI that combines SQLAlchemy (the SQL power) with Pydantic (validation).</p>""",
                "content": """<h2>Installation</h2>
                    <div class="code-block">
                        <div class="code-header">Terminal</div>
                        <pre><code>pip install sqlmodel</code></pre>
                    </div>

                    <h3>Defining a Model (Table)</h3>
                    <p>In SQLModel, a class defines BOTH the SQL Table and the Pydantic Model. It saves you writing code twice!</p>

                    <div class="code-block">
                        <div class="code-header">models.py</div>
                        <pre><code>from typing import Optional
from sqlmodel import Field, SQLModel

class Hero(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    secret_name: str
    age: Optional[int] = None</code></pre>
                    </div>
                    <ul>
                        <li><code>table=True</code>: Tells SQLModel this is a database table.</li>
                        <li><code>Field(primary_key=True)</code>: This is the unique ID for the row.</li>
                    </ul>"""
            },
            {
                "id": 12,
                "title": "Creating the Engine",
                "module": "Module 3",
                "story": """<h2>🔌 Connecting the Pipes</h2>
                    <p>The <strong>Engine</strong> is the central connection to your database. It handles the actual communication (dialect, pooling connections).</p>
                    <p>We'll use SQLite for now because it's like a portable pantry (a single file), but the code works for PostgreSQL (a giant warehouse) too.</p>""",
                "content": """<h2>Setting up the Database Connection</h2>
                    <p>Create a `database.py` file to manage the connection.</p>

                    <div class="code-block">
                        <div class="code-header">database.py</div>
                        <pre><code>from sqlmodel import SQLModel, create_engine

sqlite_file_name = "database.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"

# check_same_thread=False is needed only for SQLite
engine = create_engine(sqlite_url, connect_args={"check_same_thread": False})

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)</code></pre>
                    </div>

                    <p>Call `create_db_and_tables()` when your app starts (e.g., in a startup event) to ensure tables exist.</p>"""
            },
            {
                "id": 13,
                "title": "The Session (Dependency Injection)",
                "module": "Module 3",
                "story": """<h2>🤝 The Helper</h2>
                     <p>You don't want every chef to run to the warehouse personally. You want a Helper (Session) who grabs the ingredients for this specific order and then closes the door.</p>
                     <p>In FastAPI, we use <strong>Dependency Injection</strong> to give every request its own fresh Database Session.</p>""",
                "content": """<h2>Dependency Injection for DB Sessions</h2>
                     <p>This is the "Clean Architecture" way to handle DB connections.</p>

                     <div class="code-block">
                         <div class="code-header">database.py</div>
                         <pre><code>from sqlmodel import Session

def get_session():
    with Session(engine) as session:
        yield session</code></pre>
                     </div>

                     <h3>Using it in a Route</h3>
                     <p>Now, any route can ask for a session:</p>
                     <pre><code>from fastapi import Depends, FastAPI
from sqlmodel import Session
from .database import get_session

@app.post("/heroes/")
def create_hero(hero: Hero, session: Session = Depends(get_session)):
    session.add(hero)
    session.commit()
    session.refresh(hero)
    return hero</code></pre>
                     
                     <div class="tip-box">
                         <div class="box-title">Why yield?</div>
                         <p>The `yield` allows code to run <em>after</em> the route finishes (like closing the session). Dependency Injection handles setup and teardown automatically!</p>
                     </div>"""
            },
            {
                "id": 14,
                "title": "CRUD Operations",
                "module": "Module 3",
                "story": """<h2>📋 The Daily Routine</h2>
                     <p>Every restaurant does 4 things: Accepts deliveries (Create), Checks inventory (Read), Updates the menu (Update), and throws out bad food (Delete). This is <strong>CRUD</strong>.</p>""",
                "content": """<h2>Reading Data (Select)</h2>
                     <p>To read data, we use `select` statements.</p>

                     <div class="code-block">
                         <div class="code-header">main.py</div>
                         <pre><code>from sqlmodel import select

@app.get("/heroes/")
def read_heroes(session: Session = Depends(get_session)):
    heroes = session.exec(select(Hero)).all()
    return heroes</code></pre>
                     </div>

                     <h2>Updating Data</h2>
                     <pre><code>@app.patch("/heroes/{hero_id}")
def update_hero(hero_id: int, hero_data: HeroUpdate, session: Session = Depends(get_session)):
    hero_db = session.get(Hero, hero_id)
    if not hero_db:
        raise HTTPException(status_code=404, detail="Hero not found")
    
    hero_data_dict = hero_data.dict(exclude_unset=True)
    for key, value in hero_data_dict.items():
        setattr(hero_db, key, value)
        
    session.add(hero_db)
    session.commit()
    session.refresh(hero_db)
    return hero_db</code></pre>"""
            },
            {
                "id": 15,
                "title": "Async Databases (Advanced)",
                "module": "Module 3",
                "story": """<h2>⚡ The Hyper-Speed Helper</h2>
                     <p>Standard SQLModel/SQLAlchemy is synchronous (blocking). If the DB is slow, the server waits. For maximum performance, we want an <strong>Async</strong> Engine.</p>
                     <p>This allows the server to handle other requests while waiting for the database to reply.</p>""",
                "content": """<h2>Async Engine Setup</h2>
                     <p>You need to install an async driver like `aiosqlite` or `asyncpg`.</p>
                     <pre><code>pip install aiosqlite</code></pre>
                     
                     <h3>Async Code</h3>
                     <pre><code>from sqlalchemy.ext.asyncio import create_async_engine
from sqlmodel.ext.asyncio.session import AsyncSession

async_engine = create_async_engine("sqlite+aiosqlite:///database.db")

async def get_session() -> AsyncSession:
    async with AsyncSession(async_engine) as session:
        yield session</code></pre>

                     <p>Now your detailed routes must use `await session.exec(...)`.</p>
                     
                     <div class="warning-box">
                         <div class="box-title">Complexity Tradeoff</div>
                         <p>Async SQL adds complexity. For many apps, standard synchronous SQL is plenty fast. Only optimize if you need to!</p>
                     </div>"""
            }
        ]
    },
    {
        "id": 4,
        "title": "Module 4: The VIP Area (Authentication)",
        "icon": "🔐",
        "description": "Secure your API with OAuth2 and JWT tokens. Learn how to hash passwords and protect routes.",
        "lessons_data": [
            {
                "id": 16,
                "title": "Security Concepts",
                "module": "Module 4",
                "story": """<h2>🎟️ The Nightclub</h2>
                     <p>You can't just let anyone into the VIP area. You need a system.</p>
                     <ul>
                        <li><strong>Identification:</strong> "Who are you?" (Username/Password).</li>
                        <li><strong>Authentication:</strong> "Prove it." (Checking password).</li>
                        <li><strong>Authorization:</strong> "Are you allowed in here?" (Checking roles/scopes).</li>
                     </ul>
                     <p>FastAPI provides tools to build this securely using standard protocols like <strong>OAuth2</strong>.</p>""",
                "content": """<h2>OAuth2 Password Flow</h2>
                     <p>This is the standard flow for logging into a web app:</p>
                     <ol>
                        <li>User sends username/password to `/token`.</li>
                        <li>Server verifies and returns a <strong>Token</strong> (access_token).</li>
                        <li>User sends this Token in the Header of all future requests (`Authorization: Bearer <token>`).</li>
                     </ol>

                     <h3>Setting up OAuth2</h3>
                     <pre><code>from fastapi.security import OAuth2PasswordBearer

# This tells FastAPI that the URL to get the token is /token
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

@app.get("/users/me")
async def read_users_me(token: str = Depends(oauth2_scheme)):
    return {"token": token}</code></pre>
                     <p>If you call `/users/me` without a token, FastAPI automatically returns a 401 Unauthorized error.</p>"""
            },
            {
                "id": 17,
                "title": "Hashing Passwords",
                "module": "Module 4",
                "story": """<h2>🤫 The Secret Recipe</h2>
                     <p>Never store passwords in plain text! If hackers steal your DB, they have everything.</p>
                     <p>Instead, we store a <strong>Hash</strong>. It's like turning a potato into mashed potatoes. You can't turn mashed potatoes back into a raw potato, but if you have a potato, you can mash it and see if it looks the same.</p>""",
                "content": """<h2>Using Passlib</h2>
                     <p>We use `passlib` with `bcrypt` (a secure hashing algorithm).</p>
                     <pre><code>pip install "passlib[bcrypt]"</code></pre>

                     <h3>Hashing Logic</h3>
                     <div class="code-block">
                        <div class="code-header">security.py</div>
                        <pre><code>from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)</code></pre>
                     </div>"""
            },
            {
                "id": 18,
                "title": "JWT Tokens (The Wristband)",
                "module": "Module 4",
                "story": """<h2>🎫 The Wristband</h2>
                     <p>Once you verify your ID at the door, the bouncer gives you a wristband. You don't show your ID at every single bar station; you just show the wristband.</p>
                     <p>A <strong>JWT (JSON Web Token)</strong> is that wristband. It's a cryptographically signed string that proves who you are.</p>""",
                "content": """<h2>Creating JWTs</h2>
                     <p>You need the `python-jose` library.</p>
                     <pre><code>pip install "python-jose[cryptography]"</code></pre>

                     <h3>Token Structure</h3>
                     <p>A JWT has 3 parts: Header, Payload (Data), and Signature.</p>
                     <pre><code>from jose import jwt
from datetime import datetime, timedelta

SECRET_KEY = "mysecretkey"
ALGORITHM = "HS256"

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=30)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt</code></pre>"""
            },
            {
                "id": 19,
                "title": "The Login Endpoint",
                "module": "Module 4",
                "story": """<h2>🔑 The Front Door</h2>
                     <p>This is where the user exchanges their credentials for the JWT.</p>""",
                "content": """<h2>Implementing /token</h2>
                     <p>FastAPI has a strict spec for this form data called `OAuth2PasswordRequestForm`.</p>

                     <pre><code>from fastapi.security import OAuth2PasswordRequestForm

@app.post("/token")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    # 1. Verify user exists and password is correct
    user = authenticate_user(fake_users_db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    
    # 2. Create JWT
    access_token = create_access_token(data={"sub": user.username})
    
    # 3. Return it
    return {"access_token": access_token, "token_type": "bearer"}</code></pre>"""
            },
            {
                "id": 20,
                "title": "Protecting Routes (Get Current User)",
                "module": "Module 4",
                "story": """<h2>🕵️‍♂️ The Identity Check</h2>
                     <p>Now we want to know <em>who</em> is making the request in our protected routes.</p>
                     <p>We create a dependency `get_current_user` that takes the token, decodes it, finds the user, and returns the User object.</p>""",
                "content": """<h2>The Get Current User Dependency</h2>
                     <pre><code>async def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
        
    user = get_user(fake_users_db, username=username)
    return user</code></pre>

                     <h3>Using it</h3>
                     <pre><code>@app.get("/users/me")
async def read_users_me(current_user: User = Depends(get_current_user)):
    return current_user</code></pre>
                     
                     <p>Now, inside `read_users_me`, you have the full `current_user` object effectively "injected" into your function!</p>"""
            }
        ]
    }
]
