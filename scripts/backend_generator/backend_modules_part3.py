
modules = [
    {
        "id": 5,
        "title": "Module 5: Connecting the Dots (Relationships)",
        "icon": "🔗",
        "description": "Learn how to link data together: One-to-Many, Many-to-Many, and how to query related data efficiently.",
        "lessons_data": [
            {
                "id": 21,
                "title": "The Network (Foreign Keys)",
                "module": "Module 5",
                "story": """<h2>🕸️ The Web of Data</h2>
                     <p>Data rarely lives alone. A User has many Tweets. A Tweet has many Likes. A Like belongs to one User.</p>
                     <p>We connect tables using <strong>Foreign Keys</strong>. Think of it like a reference pointer: "See attached file #123".</p>""",
                "content": """<h2>One-to-Many Relationship</h2>
                     <p>Let's say one `Team` has many `Heroes`.</p>

                     <div class="code-block">
                        <div class="code-header">models.py</div>
                        <pre><code>class Team(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    headquarters: str

    # Relationship back to heroes
    heroes: list["Hero"] = Relationship(back_populates="team")

class Hero(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    
    # The Foreign Key
    team_id: Optional[int] = Field(default=None, foreign_key="team.id")
    
    # Relationship to the Team object
    team: Optional[Team] = Relationship(back_populates="heroes")</code></pre>
                     </div>

                     <ul>
                        <li><code>foreign_key="team.id"</code>: This column stores the ID (integer).</li>
                        <li><code>Relationship(...)</code>: This is a magic attribute. When you access `hero.team`, SQLModel fetches the Team object automatically.</li>
                     </ul>"""
            },
            {
                "id": 22,
                "title": "Creating Related Data",
                "module": "Module 5",
                "story": """<h2>📦 The Package Deal</h2>
                     <p>When you create a Hero, you can assign them to a Team immediately.</p>""",
                "content": """<h2>Assigning Relationships</h2>
                     <pre><code>def create_hero(session: Session):
    team_preventers = Team(name="Preventers", headquarters="Sharp Tower")
    hero_deadpond = Hero(name="Deadpond", team=team_preventers)
    
    session.add(hero_deadpond)
    # Note: We didn't add team_preventers explicitly!
    # SQLModel forces the creation of the team because it's linked.
    
    session.commit()</code></pre>

                     <h3>Reading Related Data</h3>
                     <p>FastAPI/SQLModel supports "Lazy Loading" by default, but for async, we often use "Read with Links".</p>
                     <p>If you access `hero.team`, SQLModel performs a SELECT query behind the scenes to fetch the team.</p>"""
            },
            {
                "id": 23,
                "title": "Querying with Joins",
                "module": "Module 5",
                "story": """<h2>🔍 The Detective</h2>
                     <p>Sometimes you want to ask complex questions: "Give me all Heroes who are in a Team based in New York".</p>
                     <p>To do this efficiently (in one query instead of 50), we use <strong>JOINs</strong>.</p>""",
                "content": """<h2>Selecting with Joins</h2>
                     <pre><code>statement = select(Hero, Team).where(Hero.team_id == Team.id)
results = session.exec(statement).all()

for hero, team in results:
    print(f"Hero: {hero.name}, Team: {team.name}")</code></pre>
                    
                     <h3>Left Outer Joins</h3>
                     <p>If you want ALL heroes, even those without a team:</p>
                     <pre><code>statement = select(Hero, Team).join(Team, isouter=True)</code></pre>"""
            },
            {
                "id": 24,
                "title": "Many-to-Many Relationships",
                "module": "Module 5",
                "story": """<h2>🤝 The Collaboration</h2>
                     <p>Sometimes relationships are complex. A Hero can learn many Skills. A Skill can be learned by many Heroes.</p>
                     <p>This is a <strong>Many-to-Many</strong> relationship. It requires a neutral third party: The <strong>Link Table</strong>.</p>""",
                "content": """<h2>The Link Model</h2>
                     <pre><code>class HeroSkillLink(SQLModel, table=True):
    hero_id: Optional[int] = Field(default=None, foreign_key="hero.id", primary_key=True)
    skill_id: Optional[int] = Field(default=None, foreign_key="skill.id", primary_key=True)</code></pre>

                     <h3>Updating the Models</h3>
                     <pre><code>class Hero(SQLModel, table=True):
    ...
    skills: list["Skill"] = Relationship(back_populates="heroes", link_model=HeroSkillLink)

class Skill(SQLModel, table=True):
    ...
    heroes: list["Hero"] = Relationship(back_populates="skills", link_model=HeroSkillLink)</code></pre>"""
            },
            {
                "id": 25,
                "title": "Cascades & Orphan Data",
                "module": "Module 5",
                "story": """<h2>🧹 The Cleanup Crew</h2>
                     <p>Unless you specify otherwise, deleting a Team might leave Heroes pointing to a non-existent team ID (Database Error!).</p>
                     <p>We configure <strong>Cascades</strong> to tell the database: "If the Team is deleted, delete the Heroes too" OR "Set their team_id to NULL".</p>""",
                "content": """<h2>configuring Cascades</h2>
                     <p>In SQLAlchemy (under the hood):</p>
                     <pre><code>team: Optional[Team] = Relationship(
    back_populates="heroes", 
    sa_relationship_kwargs={"cascade": "all, delete"}
)</code></pre>
                     <p>Use with caution! `delete` means literal deletion of the child records.</p>"""
            }
        ]
    },
    {
        "id": 6,
        "title": "Module 6: The Inspection (Testing)",
        "icon": "🧪",
        "description": "Write automated tests using Pytest and TestClient directly from FastAPI to ensure your kitchen produces perfect dishes every time.",
        "lessons_data": [
            {
                "id": 26,
                "title": "Intro to Testing",
                "module": "Module 6",
                "story": """<h2>🤖 The Robot Taster</h2>
                     <p>Imagine having a robot that tastes every single dish on the menu in 1 second before you open the restaurant. That's <strong>Automated Testing</strong>.</p>
                     <p>If you change the soup recipe, the robot instantly tells you: "Too salty!". This gives you confidence to refactor code.</p>""",
                "content": """<h2>Setup Pytest</h2>
                     <pre><code>pip install pytest httpx</code></pre>

                     <h3>Writing a Test</h3>
                     <p>Create `test_main.py`:</p>
                     <pre><code>def test_math():
    assert 1 + 1 == 2</code></pre>

                     <p>Run it with just `pytest`.</p>"""
            },
            {
                "id": 27,
                "title": "The TestClient",
                "module": "Module 6",
                "story": """<h2>🕵️‍♂️ The Mystery Shopper</h2>
                     <p>FastAPI provides a `TestClient`. It pretends to be a real web browser sending requests to your API. It doesn't even need to start the Uvicorn server!</p>""",
                "content": """<h2>Using TestClient</h2>
                     <pre><code>from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello World"}</code></pre>

                     <p>This runs your actual API code instantly.</p>"""
            },
            {
                "id": 28,
                "title": "Testing Databases (Fixtures)",
                "module": "Module 6",
                "story": """<h2>🎭 The Stunt Double</h2>
                     <p>You shouldn't run tests on your Production Database! You might delete real users!</p>
                     <p>We use <strong>Fixtures</strong> to create a fresh, empty database for every test. Often we use SQLite in-memory mode for speed.</p>""",
                "content": """<h2>Pytest Fixtures</h2>
                     <pre><code>import pytest
from sqlmodel import Session, SQLModel, create_engine

# Use in-memory SQLite
engine = create_engine("sqlite://")

@pytest.fixture(name="session")
def session_fixture():
    SQLModel.metadata.create_all(engine)
    with Session(engine) as session:
        yield session
    SQLModel.metadata.drop_all(engine)</code></pre>

                     <p>Now pass `session` to your test functions.</p>"""
            },
            {
                "id": 29,
                "title": "Overriding Dependencies",
                "module": "Module 6",
                "story": """<h2>🎭 The Mask</h2>
                     <p>Your API uses `get_session` to connect to the real DB file. During testing, we want to force it to use our test DB fixture.</p>
                     <p>FastAPI allows <strong>Dependency Overrides</strong>.</p>""",
                "content": """<h2>app.dependency_overrides</h2>
                     <pre><code>from main import app, get_session

def test_create_hero(session: Session):
    def get_session_override():
        return session

    app.dependency_overrides[get_session] = get_session_override
    
    client = TestClient(app)
    response = client.post("/heroes/", json={"name": "Test Hero"})
    
    app.dependency_overrides.clear()
    
    assert response.status_code == 200</code></pre>"""
            },
            {
                "id": 30,
                "title": "Test Coverage",
                "module": "Module 6",
                "story": """<h2>📊 The Report Card</h2>
                     <p>How do you know if you tested everything? <strong>Coverage</strong> tools analyze which lines of code were executed during tests.</p>""",
                "content": """<h2>Running Coverage</h2>
                     <pre><code>pip install pytest-cov
pytest --cov=app</code></pre>

                     <p>Aim for high coverage, but remember: 100% coverage doesn't mean 0 bugs. It just means your tests ran every line.</p>"""
            }
        ]
    }
]
