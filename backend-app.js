// FastAPI Backend Masterclass - Complete Curriculum
// 35 lessons covering FastAPI from basics to production deployment

const BACKEND_CURRICULUM = [
    {
        "id": 1,
        "title": "Module 1: The Modern Kitchen (Foundations)",
        "icon": "\ud83d\udc68\u200d\ud83c\udf73",
        "description": "Start your journey by setting up your FastAPI kitchen and understanding why it's revolutionizing Python web development.",
        "lessons_data": [
            {
                "id": 1,
                "title": "The Story of API Evolution",
                "module": "Module 1",
                "story": "<h2>\ud83d\udcd6 The Tale of Three Restaurants</h2>\n                    <p>Imagine the history of Python web frameworks as the evolution of restaurants in a busy city.</p>\n                    \n                    <div class=\"story-box\">\n                        <h3>1. The Flask Tavern (Synchronous)</h3>\n                        <p>In the beginning, there was Flask. It was simple and loved. But it had one waiter (the thread). If a customer ordered a slow-cooked stew (a database query), the waiter would stand by the kitchen door, frozen, waiting for the stew. Meanwhile, new customers lined up outside, ignored.</p>\n                        <p><strong>Problem:</strong> One slow task blocked everyone else.</p>\n                    </div>\n\n                    <div class=\"story-box\">\n                        <h3>2. The Node.js Bistro (Callbacks)</h3>\n                        <p>Across the street, the Node.js Bistro opened. Their waiters were hyper-active. They took an order, ran to the kitchen, shouted it, and immediately ran back to take new orders. When the food was ready, a bell rang (callback). It was chaotic but fast.</p>\n                        <p><strong>Problem:</strong> The \"Callback Hell\" kitchen was messy and hard to organize.</p>\n                    </div>\n\n                    <div class=\"story-box\">\n                        <h3>3. The FastAPI Kitchen (Modern Async)</h3>\n                        <p>Then came FastAPI. It adopted the modern `async/await` system. Waiters are highly organized. They take an order, digitally log it (await), and instantly turn to the next customer. The system handles the waiting.</p>\n                        <p>But FastAPI did something more: It hired a strict Health Inspector named <strong>Pydantic</strong>. Before any ingredient (data) enters the kitchen, it is rigorously checked. No rotten tomatoes (wrong data types) ever reach the pot.</p>\n                    </div>",
                "content": "<h2>What Makes FastAPI Special?</h2>\n                    <p>FastAPI combines the best of all worlds: the speed of Node.js/Go and the simplicity of Python.</p>\n                    \n                    <h3>Key Superpowers</h3>\n                    <ul>\n                        <li><strong>\ud83d\ude80 Speed:</strong> High performance, on par with NodeJS and Go (thanks to Starlette and Pydantic).</li>\n                        <li><strong>\ud83d\udee1\ufe0f Data Validation:</strong> Automatic validation using Python type hints.</li>\n                        <li><strong>\ud83d\udcda Documentation:</strong> Automatic interactive API docs (Swagger UI) generated from your code.</li>\n                        <li><strong>\ud83d\udd0c Standards-based:</strong> Based on (and fully compatible with) the open standards for APIs: OpenAPI and JSON Schema.</li>\n                    </ul>\n\n                    <div class=\"tip-box\">\n                        <div class=\"box-title\">Why \"Fast\"?</div>\n                        <p>It's fast to <em>run</em> (performance) but also fast to <em>code</em> (developer speed). It reduces bugs by approx 40%.</p>\n                    </div>\n\n                    <h3>The Components</h3>\n                    <p>FastAPI stands on the shoulders of giants:</p>\n                    <ul>\n                        <li><strong>Starlette:</strong> For the web parts (routing, async).</li>\n                        <li><strong>Pydantic:</strong> For the data parts (validation, serialization).</li>\n                        <li><strong>Uvicorn:</strong> The lightning-fast ASGI server that runs your app.</li>\n                    </ul>"
            },
            {
                "id": 2,
                "title": "Setting Up Your Station",
                "module": "Module 1",
                "story": "<h2>\ud83d\udee0\ufe0f Preparing the Kitchen</h2>\n                    <p>Before a chef can cook, they must sharpen their knives and organize their station (Mise en place). In Python, this means removing the clutter of global installations and creating a clean, dedicated workspace: the <strong>Virtual Environment</strong>.</p>\n                    <p>Think of the Virtual Environment as a private kitchen where your ingredients (libraries) don't mix with the restaurant next door.</p>",
                "content": "<h2>Installation Guide</h2>\n                    <p>We need two main ingredients: <strong>FastAPI</strong> (the framework) and <strong>Uvicorn</strong> (the server).</p>\n\n                    <h3>Step 1: Create a Virtual Environment</h3>\n                    <div class=\"code-block\">\n                        <div class=\"code-header\">Terminal</div>\n                        <pre><code># Create the environment\npython3 -m venv venv\n\n# Activate it (Mac/Linux)\nsource venv/bin/activate\n\n# Activate it (Windows)\nvenv\\Scripts\\activate</code></pre>\n                    </div>\n\n                    <h3>Step 2: Install the Tools</h3>\n                    <div class=\"code-block\">\n                        <div class=\"code-header\">Terminal</div>\n                        <pre><code>pip install fastapi \"uvicorn[standard]\"</code></pre>\n                    </div>\n                    <p>Note: The <code>[standard]</code> part installs extra dependencies like `uvloop` (for speed) and `watchfiles` (for auto-reloading).</p>\n\n                    <div class=\"warning-box\">\n                        <div class=\"box-title\">Common Mistake</div>\n                        <p>Don't call your file <code>fastapi.py</code>! This will confuse Python when it tries to import the library. Name it <code>main.py</code> or <code>app.py</code>.</p>\n                    </div>"
            },
            {
                "id": 3,
                "title": "The First Dish (Hello World)",
                "module": "Module 1",
                "story": "<h2>\ud83e\udd57 The Appetizer</h2>\n                    <p>Every great meal starts with a simple appetizer. In programming, this is the \"Hello World\". It proves your kitchen is operational, the gas is on, and the chef is ready.</p>\n                    <p>We are going to create an API endpoint. Think of an <strong>Endpoint</strong> as a menu item. When a customer points to \"Item #1\" on the menu (the URL), the kitchen prepares that specific dish.</p>",
                "content": "<h2>Your First API</h2>\n                    <p>Create a file named <code>main.py</code> and add this code:</p>\n\n                    <div class=\"code-block\">\n                        <div class=\"code-header\">main.py</div>\n                        <pre><code>from fastapi import FastAPI\n\n# 1. Initialize the App (The Kitchen)\napp = FastAPI()\n\n# 2. Define a Path Operation (The Menu Item)\n@app.get(\"/\")\nasync def root():\n    # 3. Return the Content (The Dish)\n    return {\"message\": \"Hello World\"}</code></pre>\n                    </div>\n\n                    <h3>Breaking it Down</h3>\n                    <ul>\n                        <li><code>@app.get(\"/\")</code>: This decorator tells FastAPI that the function below handles <strong>GET</strong> requests to the path <code>/</code>.</li>\n                        <li><code>async def</code>: Defines an asynchronous function.</li>\n                        <li><code>return dict</code>: FastAPI automatically converts Python dictionaries to JSON.</li>\n                    </ul>\n\n                    <h3>Serving the Dish</h3>\n                    <p>Unlike standard Python scripts, you don't run this with `python main.py`. You need a server (Uvicorn) to serve it.</p>\n                    <div class=\"code-block\">\n                        <div class=\"code-header\">Terminal</div>\n                        <pre><code>uvicorn main:app --reload</code></pre>\n                    </div>\n                    <ul>\n                        <li><code>main</code>: The file `main.py`.</li>\n                        <li><code>app</code>: The object created inside of `main.py` with `app = FastAPI()`.</li>\n                        <li><code>--reload</code>: Makes the server restart after code changes. Only use for development.</li>\n                    </ul>\n\n                    <div class=\"memory-box\">\n                        <div class=\"box-title\">Check the Docs!</div>\n                        <p>Go to <a href=\"http://127.0.0.1:8000/docs\" target=\"_blank\">http://127.0.0.1:8000/docs</a>. You will see the automatic interactive API documentation (Swagger UI). It's magic! \u2728</p>\n                    </div>"
            },
            {
                "id": 4,
                "title": "Specific Orders (Path Parameters)",
                "module": "Module 1",
                "story": "<h2>\ud83c\udf54 \"I'll have the #5\"</h2>\n                    <p>A menu isn't just one item. Customers want variety. They don't just say \"Give me food\", they say \"Give me Burger #5\".</p>\n                    <p>In APIs, this is a <strong>Path Parameter</strong>. It's a variable part of the URL path that acts like a specific identifier for a resource.</p>",
                "content": "<h2>Implementing Path Parameters</h2>\n                    <p>You can declare path \"parameters\" or \"variables\" with the same syntax used by Python format strings.</p>\n\n                    <div class=\"code-block\">\n                        <div class=\"code-header\">main.py</div>\n                        <pre><code>@app.get(\"/items/{item_id}\")\nasync def read_item(item_id: int):\n    return {\"item_id\": item_id}</code></pre>\n                    </div>\n\n                    <h3>Type Validation (Pydantic Magic)</h3>\n                    <p>Notice <code>item_id: int</code>? This is a Python type hint. FastAPI uses it to validate data.</p>\n                    <ul>\n                        <li>If you go to <code>/items/5</code> -> You get <code>{\"item_id\": 5}</code> (as an integer).</li>\n                        <li>If you go to <code>/items/foo</code> -> You get a nice error saying \"value is not a valid integer\".</li>\n                    </ul>\n\n                    <div class=\"tip-box\">\n                        <div class=\"box-title\">Order Matters</div>\n                        <p>If you have paths like <code>/users/me</code> and <code>/users/{user_id}</code>, you must define <code>/users/me</code> <strong>first</strong>. Otherwise, `{user_id}` will match \"me\" and try to convert it to an integer!</p>\n                    </div>"
            },
            {
                "id": 5,
                "title": "Special Requests (Query Parameters)",
                "module": "Module 1",
                "story": "<h2>\ud83c\udf5f \"With extra salt\"</h2>\n                    <p>Sometimes customers want to modify their order. \"I want the burger, but <em>extra crispy</em> and <em>hold the onions</em>.\"</p>\n                    <p>These are optional modifications to the main request. In web APIs, we use <strong>Query Parameters</strong> for this. They appear at the end of the URL after `?`, like `?crispy=true&onion=false`.</p>",
                "content": "<h2>Query Parameters</h2>\n                    <p>When you declare other function parameters that are not part of the path parameters, they are automatically interpreted as \"query\" parameters.</p>\n\n                    <div class=\"code-block\">\n                        <div class=\"code-header\">main.py</div>\n                        <pre><code>fake_items_db = [{\"item_name\": \"Foo\"}, {\"item_name\": \"Bar\"}, {\"item_name\": \"Baz\"}]\n\n@app.get(\"/items/\")\nasync def read_item(skip: int = 0, limit: int = 10):\n    return fake_items_db[skip : skip + limit]</code></pre>\n                    </div>\n\n                    <p>Now you can call: <code>http://127.0.0.1:8000/items/?skip=0&limit=2</code></p>\n\n                    <h3>Defaults and Optionals</h3>\n                    <p>Because we provided default values (`= 0`, `= 10`), the parameters are optional. If the user visits just <code>/items/</code>, they get the defaults.</p>\n                    \n                    <p>You can also create optional parameters using standard Python typing:</p>\n                    <pre><code>from typing import Optional\n\n@app.get(\"/items/{item_id}\")\nasync def read_item(item_id: str, q: Optional[str] = None):\n    if q:\n        return {\"item_id\": item_id, \"q\": q}\n    return {\"item_id\": item_id}</code></pre>\n                    \n                    <div class=\"memory-box\">\n                        <div class=\"box-title\">Rule of Thumb</div>\n                        <p><strong>Path Parameters</strong>: Identifies a specific resource (Essential).<br>\n                        <strong>Query Parameters</strong>: Sorts, filters, or paginates that resource (Optional).</p>\n                    </div>"
            }
        ]
    },
    {
        "id": 2,
        "title": "Module 2: The Inspection Station (Validation)",
        "icon": "\ud83d\udee1\ufe0f",
        "description": "Learn how to receive data securely using Pydantic models to ensure your kitchen never cooks with bad ingredients.",
        "lessons_data": [
            {
                "id": 6,
                "title": "The Bouncer (Request Body)",
                "module": "Module 2",
                "story": "<h2>\ud83d\udce6 The Delivery Truck</h2>\n                    <p>GET requests are for asking for data. But to <em>send</em> data (like creating a new user or posting a tweet), we need to send a package. This package is the <strong>Request Body</strong>.</p>\n                    <p>However, you can't just let any truck dump cargo in your kitchen. You need a Bouncer at the loading dock to inspect the manifest. This Bouncer is <strong>Pydantic</strong>.</p>",
                "content": "<h2>Sending Data with Pydantic</h2>\n                    <p>To expect a request body, you define a Pydantic Model. This model describes exactly what your data should look like.</p>\n\n                    <div class=\"code-block\">\n                        <div class=\"code-header\">main.py</div>\n                        <pre><code>from typing import Optional\nfrom fastapi import FastAPI\nfrom pydantic import BaseModel\n\nclass Item(BaseModel):\n    name: str\n    description: Optional[str] = None\n    price: float\n    tax: Optional[float] = None\n\napp = FastAPI()\n\n@app.post(\"/items/\")\nasync def create_item(item: Item):\n    return item</code></pre>\n                    </div>\n\n                    <h3>What just happened?</h3>\n                    <ol>\n                        <li>We created a class inheriting from `BaseModel`.</li>\n                        <li>We defined typed fields. `name` is required (no default). `description` is optional.</li>\n                        <li>We added it as a parameter to the path operation.</li>\n                    </ol>\n\n                    <p>FastAPI will now:</p>\n                    <ul>\n                        <li>Read the body as JSON.</li>\n                        <li>Convert types (if you send \"price\": \"5.5\", it converts to float).</li>\n                        <li>Validate data (if \"name\" is missing, it returns 422 Error).</li>\n                        <li>Give you specific editor support (autocomplete) inside the function.</li>\n                    </ul>"
            },
            {
                "id": 7,
                "title": "Validation Rules (Field)",
                "module": "Module 2",
                "story": "<h2>\ud83d\udccf Strict Standards</h2>\n                    <p>Just saying \"name must be a string\" isn't enough. What if someone sends a name that is 10,000 characters long? Or a price of -50 dollars?</p>\n                    <p>We need strict quality control. Pydantic's <code>Field</code> allows us to enforce rules like min_length, max_length, and regex patterns.</p>",
                "content": "<h2>Using Field for Validation</h2>\n                    <p>You can customize validation by using `Field` directly in your Pydantic models.</p>\n\n                    <div class=\"code-block\">\n                        <div class=\"code-header\">main.py</div>\n                        <pre><code>from pydantic import BaseModel, Field\n\nclass Item(BaseModel):\n    name: str = Field(..., min_length=3, max_length=50, title=\"The name of the item\")\n    description: Optional[str] = Field(None, max_length=300)\n    price: float = Field(..., gt=0, description=\"The price must be greater than zero\")\n    tags: list[str] = []</code></pre>\n                    </div>\n\n                    <ul>\n                        <li><code>...</code> (Ellipsis): Means the field is REQUIRED.</li>\n                        <li><code>gt=0</code>: Greater than 0.</li>\n                        <li><code>min_length=3</code>: String must be at least 3 chars.</li>\n                    </ul>\n\n                    <div class=\"tip-box\">\n                        <div class=\"box-title\">Why Validation Matters</div>\n                        <p>This validation happens BEFORE your code runs. You don't need to write `if price < 0: return error`. FastAPI handles it automatically and returns a standardized error response.</p>\n                    </div>"
            },
            {
                "id": 8,
                "title": "Nested Models (Complex Data)",
                "module": "Module 2",
                "story": "<h2>\ud83d\udce6 Boxes inside Boxes</h2>\n                    <p>Real-world data is rarely flat. An 'Order' contains a 'User', which contains an 'Address', which contains a 'City'.</p>\n                    <p>Pydantic handles these Russian Nesting Dolls effortlessly. You can use models as types inside other models.</p>",
                "content": "<h2>Defining Nested Structures</h2>\n                    <p>Simply define a model and use it as a type hint for an attribute in another model.</p>\n\n                    <div class=\"code-block\">\n                        <div class=\"code-header\">main.py</div>\n                        <pre><code>class Image(BaseModel):\n    url: str\n    name: str\n\nclass Item(BaseModel):\n    name: str\n    description: Optional[str] = None\n    image: Optional[Image] = None  # Nested Model\n\n@app.put(\"/items/{item_id}\")\nasync def update_item(item_id: int, item: Item):\n    results = {\"item_id\": item_id, \"item\": item}\n    return results</code></pre>\n                    </div>\n\n                    <p>FastAPI expects a JSON body like:</p>\n                    <pre><code>{\n    \"name\": \"Foo\",\n    \"image\": {\n        \"url\": \"http://example.com/baz.jpg\",\n        \"name\": \"The Foo Image\"\n    }\n}</code></pre>\n\n                    <h3>Lists of Models</h3>\n                    <p>You can also define lists of sub-models:</p>\n                    <pre><code>images: list[Image] = []</code></pre>\n                    <p>This would expect an array of image objects.</p>"
            },
            {
                "id": 9,
                "title": "Response Models (The Presentation)",
                "module": "Module 2",
                "story": "<h2>\ud83c\udf7d\ufe0f Plating the Dish</h2>\n                    <p>Your kitchen might capture lots of data: internal IDs, hashed passwords, creation dates. But you shouldn't serve ALL of that to the customer!</p>\n                    <p>The <strong>Response Model</strong> is like the plating process. It filters the raw data from the pot and arranges only what the customer should see on the plate.</p>",
                "content": "<h2>Filtering Data with Response Models</h2>\n                    <p>You define the `response_model` parameter in the decorator. FastAPI will use this model to filter and convert the return data.</p>\n\n                    <div class=\"code-block\">\n                        <div class=\"code-header\">main.py</div>\n                        <pre><code>class UserIn(BaseModel):\n    username: str\n    password: str\n    email: str\n\nclass UserOut(BaseModel):\n    username: str\n    email: str\n    # Password is EXCLUDED\n\n@app.post(\"/user/\", response_model=UserOut)\nasync def create_user(user: UserIn):\n    # Imagine we save the user to DB here\n    return user</code></pre>\n                    </div>\n\n                    <p>Even though our function returns the `user` object (which contains the password), FastAPI sees the `response_model=UserOut` and automatically removes the password field before sending the JSON response.</p>\n\n                    <div class=\"warning-box\">\n                        <div class=\"box-title\">Security Critical!</div>\n                        <p>Always use Response Models to prevent accidental data leaks (like exposing passwords or internal private keys).</p>\n                    </div>"
            },
            {
                "id": 10,
                "title": "Handling Errors (The Apology)",
                "module": "Module 2",
                "story": "<h2>\ud83d\uded1 \"We're out of soup\"</h2>\n                    <p>Sometimes things go wrong. The item isn't found, the user isn't allowed, or the server detects an issue.</p>\n                    <p>In APIs, we communicate this with <strong>HTTP Status Codes</strong> and Error details. We don't just crash; we politely explain the problem.</p>",
                "content": "<h2>HTTPException</h2>\n                    <p>To return an error to the client, use `HTTPException`.</p>\n\n                    <div class=\"code-block\">\n                        <div class=\"code-header\">main.py</div>\n                        <pre><code>from fastapi import FastAPI, HTTPException\n\nitems = {\"foo\": \"The Foo Wrestlers\"}\n\n@app.get(\"/items/{item_id}\")\nasync def read_item(item_id: str):\n    if item_id not in items:\n        raise HTTPException(status_code=404, detail=\"Item not found\")\n    return {\"item\": items[item_id]}</code></pre>\n                    </div>\n\n                    <h3>Common Status Codes</h3>\n                    <ul>\n                        <li><strong>200 OK:</strong> Request succeeded.</li>\n                        <li><strong>201 Created:</strong> Resource created successfully (use for POST).</li>\n                        <li><strong>400 Bad Request:</strong> Client sent invalid data.</li>\n                        <li><strong>401 Unauthorized:</strong> User needs to log in.</li>\n                        <li><strong>403 Forbidden:</strong> User is logged in but doesn't have permission.</li>\n                        <li><strong>404 Not Found:</strong> Resource doens't exist.</li>\n                        <li><strong>500 Internal Server Error:</strong> Your code broke.</li>\n                    </ul>\n\n                    <p>You can also set the status code for success:</p>\n                    <pre><code>@app.post(\"/items/\", status_code=201)</code></pre>"
            }
        ]
    },
    {
        "id": 3,
        "title": "Module 3: The Pantry (Database)",
        "icon": "\ud83d\uddc4\ufe0f",
        "description": "Connect your API to a real database using SQLModel (SQLAlchemy + Pydantic) to store data permanently.",
        "lessons_data": [
            {
                "id": 11,
                "title": "The Infinite Pantry (SQLModel)",
                "module": "Module 3",
                "story": "<h2>\ud83e\udd61 The Problem with RAM</h2>\n                    <p>So far, we've stored data in Python lists `items = []`. But when the restaurant (server) closes for the night (restarts), all that food disappears. We need a Pantry that persists\u2014a Database.</p>\n                    <p>Enter <strong>SQLModel</strong>. It's a library by the creator of FastAPI that combines SQLAlchemy (the SQL power) with Pydantic (validation).</p>",
                "content": "<h2>Installation</h2>\n                    <div class=\"code-block\">\n                        <div class=\"code-header\">Terminal</div>\n                        <pre><code>pip install sqlmodel</code></pre>\n                    </div>\n\n                    <h3>Defining a Model (Table)</h3>\n                    <p>In SQLModel, a class defines BOTH the SQL Table and the Pydantic Model. It saves you writing code twice!</p>\n\n                    <div class=\"code-block\">\n                        <div class=\"code-header\">models.py</div>\n                        <pre><code>from typing import Optional\nfrom sqlmodel import Field, SQLModel\n\nclass Hero(SQLModel, table=True):\n    id: Optional[int] = Field(default=None, primary_key=True)\n    name: str\n    secret_name: str\n    age: Optional[int] = None</code></pre>\n                    </div>\n                    <ul>\n                        <li><code>table=True</code>: Tells SQLModel this is a database table.</li>\n                        <li><code>Field(primary_key=True)</code>: This is the unique ID for the row.</li>\n                    </ul>"
            },
            {
                "id": 12,
                "title": "Creating the Engine",
                "module": "Module 3",
                "story": "<h2>\ud83d\udd0c Connecting the Pipes</h2>\n                    <p>The <strong>Engine</strong> is the central connection to your database. It handles the actual communication (dialect, pooling connections).</p>\n                    <p>We'll use SQLite for now because it's like a portable pantry (a single file), but the code works for PostgreSQL (a giant warehouse) too.</p>",
                "content": "<h2>Setting up the Database Connection</h2>\n                    <p>Create a `database.py` file to manage the connection.</p>\n\n                    <div class=\"code-block\">\n                        <div class=\"code-header\">database.py</div>\n                        <pre><code>from sqlmodel import SQLModel, create_engine\n\nsqlite_file_name = \"database.db\"\nsqlite_url = f\"sqlite:///{sqlite_file_name}\"\n\n# check_same_thread=False is needed only for SQLite\nengine = create_engine(sqlite_url, connect_args={\"check_same_thread\": False})\n\ndef create_db_and_tables():\n    SQLModel.metadata.create_all(engine)</code></pre>\n                    </div>\n\n                    <p>Call `create_db_and_tables()` when your app starts (e.g., in a startup event) to ensure tables exist.</p>"
            },
            {
                "id": 13,
                "title": "The Session (Dependency Injection)",
                "module": "Module 3",
                "story": "<h2>\ud83e\udd1d The Helper</h2>\n                     <p>You don't want every chef to run to the warehouse personally. You want a Helper (Session) who grabs the ingredients for this specific order and then closes the door.</p>\n                     <p>In FastAPI, we use <strong>Dependency Injection</strong> to give every request its own fresh Database Session.</p>",
                "content": "<h2>Dependency Injection for DB Sessions</h2>\n                     <p>This is the \"Clean Architecture\" way to handle DB connections.</p>\n\n                     <div class=\"code-block\">\n                         <div class=\"code-header\">database.py</div>\n                         <pre><code>from sqlmodel import Session\n\ndef get_session():\n    with Session(engine) as session:\n        yield session</code></pre>\n                     </div>\n\n                     <h3>Using it in a Route</h3>\n                     <p>Now, any route can ask for a session:</p>\n                     <pre><code>from fastapi import Depends, FastAPI\nfrom sqlmodel import Session\nfrom .database import get_session\n\n@app.post(\"/heroes/\")\ndef create_hero(hero: Hero, session: Session = Depends(get_session)):\n    session.add(hero)\n    session.commit()\n    session.refresh(hero)\n    return hero</code></pre>\n                     \n                     <div class=\"tip-box\">\n                         <div class=\"box-title\">Why yield?</div>\n                         <p>The `yield` allows code to run <em>after</em> the route finishes (like closing the session). Dependency Injection handles setup and teardown automatically!</p>\n                     </div>"
            },
            {
                "id": 14,
                "title": "CRUD Operations",
                "module": "Module 3",
                "story": "<h2>\ud83d\udccb The Daily Routine</h2>\n                     <p>Every restaurant does 4 things: Accepts deliveries (Create), Checks inventory (Read), Updates the menu (Update), and throws out bad food (Delete). This is <strong>CRUD</strong>.</p>",
                "content": "<h2>Reading Data (Select)</h2>\n                     <p>To read data, we use `select` statements.</p>\n\n                     <div class=\"code-block\">\n                         <div class=\"code-header\">main.py</div>\n                         <pre><code>from sqlmodel import select\n\n@app.get(\"/heroes/\")\ndef read_heroes(session: Session = Depends(get_session)):\n    heroes = session.exec(select(Hero)).all()\n    return heroes</code></pre>\n                     </div>\n\n                     <h2>Updating Data</h2>\n                     <pre><code>@app.patch(\"/heroes/{hero_id}\")\ndef update_hero(hero_id: int, hero_data: HeroUpdate, session: Session = Depends(get_session)):\n    hero_db = session.get(Hero, hero_id)\n    if not hero_db:\n        raise HTTPException(status_code=404, detail=\"Hero not found\")\n    \n    hero_data_dict = hero_data.dict(exclude_unset=True)\n    for key, value in hero_data_dict.items():\n        setattr(hero_db, key, value)\n        \n    session.add(hero_db)\n    session.commit()\n    session.refresh(hero_db)\n    return hero_db</code></pre>"
            },
            {
                "id": 15,
                "title": "Async Databases (Advanced)",
                "module": "Module 3",
                "story": "<h2>\u26a1 The Hyper-Speed Helper</h2>\n                     <p>Standard SQLModel/SQLAlchemy is synchronous (blocking). If the DB is slow, the server waits. For maximum performance, we want an <strong>Async</strong> Engine.</p>\n                     <p>This allows the server to handle other requests while waiting for the database to reply.</p>",
                "content": "<h2>Async Engine Setup</h2>\n                     <p>You need to install an async driver like `aiosqlite` or `asyncpg`.</p>\n                     <pre><code>pip install aiosqlite</code></pre>\n                     \n                     <h3>Async Code</h3>\n                     <pre><code>from sqlalchemy.ext.asyncio import create_async_engine\nfrom sqlmodel.ext.asyncio.session import AsyncSession\n\nasync_engine = create_async_engine(\"sqlite+aiosqlite:///database.db\")\n\nasync def get_session() -> AsyncSession:\n    async with AsyncSession(async_engine) as session:\n        yield session</code></pre>\n\n                     <p>Now your detailed routes must use `await session.exec(...)`.</p>\n                     \n                     <div class=\"warning-box\">\n                         <div class=\"box-title\">Complexity Tradeoff</div>\n                         <p>Async SQL adds complexity. For many apps, standard synchronous SQL is plenty fast. Only optimize if you need to!</p>\n                     </div>"
            }
        ]
    },
    {
        "id": 4,
        "title": "Module 4: The VIP Area (Authentication)",
        "icon": "\ud83d\udd10",
        "description": "Secure your API with OAuth2 and JWT tokens. Learn how to hash passwords and protect routes.",
        "lessons_data": [
            {
                "id": 16,
                "title": "Security Concepts",
                "module": "Module 4",
                "story": "<h2>\ud83c\udf9f\ufe0f The Nightclub</h2>\n                     <p>You can't just let anyone into the VIP area. You need a system.</p>\n                     <ul>\n                        <li><strong>Identification:</strong> \"Who are you?\" (Username/Password).</li>\n                        <li><strong>Authentication:</strong> \"Prove it.\" (Checking password).</li>\n                        <li><strong>Authorization:</strong> \"Are you allowed in here?\" (Checking roles/scopes).</li>\n                     </ul>\n                     <p>FastAPI provides tools to build this securely using standard protocols like <strong>OAuth2</strong>.</p>",
                "content": "<h2>OAuth2 Password Flow</h2>\n                     <p>This is the standard flow for logging into a web app:</p>\n                     <ol>\n                        <li>User sends username/password to `/token`.</li>\n                        <li>Server verifies and returns a <strong>Token</strong> (access_token).</li>\n                        <li>User sends this Token in the Header of all future requests (`Authorization: Bearer <token>`).</li>\n                     </ol>\n\n                     <h3>Setting up OAuth2</h3>\n                     <pre><code>from fastapi.security import OAuth2PasswordBearer\n\n# This tells FastAPI that the URL to get the token is /token\noauth2_scheme = OAuth2PasswordBearer(tokenUrl=\"token\")\n\n@app.get(\"/users/me\")\nasync def read_users_me(token: str = Depends(oauth2_scheme)):\n    return {\"token\": token}</code></pre>\n                     <p>If you call `/users/me` without a token, FastAPI automatically returns a 401 Unauthorized error.</p>"
            },
            {
                "id": 17,
                "title": "Hashing Passwords",
                "module": "Module 4",
                "story": "<h2>\ud83e\udd2b The Secret Recipe</h2>\n                     <p>Never store passwords in plain text! If hackers steal your DB, they have everything.</p>\n                     <p>Instead, we store a <strong>Hash</strong>. It's like turning a potato into mashed potatoes. You can't turn mashed potatoes back into a raw potato, but if you have a potato, you can mash it and see if it looks the same.</p>",
                "content": "<h2>Using Passlib</h2>\n                     <p>We use `passlib` with `bcrypt` (a secure hashing algorithm).</p>\n                     <pre><code>pip install \"passlib[bcrypt]\"</code></pre>\n\n                     <h3>Hashing Logic</h3>\n                     <div class=\"code-block\">\n                        <div class=\"code-header\">security.py</div>\n                        <pre><code>from passlib.context import CryptContext\n\npwd_context = CryptContext(schemes=[\"bcrypt\"], deprecated=\"auto\")\n\ndef verify_password(plain_password, hashed_password):\n    return pwd_context.verify(plain_password, hashed_password)\n\ndef get_password_hash(password):\n    return pwd_context.hash(password)</code></pre>\n                     </div>"
            },
            {
                "id": 18,
                "title": "JWT Tokens (The Wristband)",
                "module": "Module 4",
                "story": "<h2>\ud83c\udfab The Wristband</h2>\n                     <p>Once you verify your ID at the door, the bouncer gives you a wristband. You don't show your ID at every single bar station; you just show the wristband.</p>\n                     <p>A <strong>JWT (JSON Web Token)</strong> is that wristband. It's a cryptographically signed string that proves who you are.</p>",
                "content": "<h2>Creating JWTs</h2>\n                     <p>You need the `python-jose` library.</p>\n                     <pre><code>pip install \"python-jose[cryptography]\"</code></pre>\n\n                     <h3>Token Structure</h3>\n                     <p>A JWT has 3 parts: Header, Payload (Data), and Signature.</p>\n                     <pre><code>from jose import jwt\nfrom datetime import datetime, timedelta\n\nSECRET_KEY = \"mysecretkey\"\nALGORITHM = \"HS256\"\n\ndef create_access_token(data: dict):\n    to_encode = data.copy()\n    expire = datetime.utcnow() + timedelta(minutes=30)\n    to_encode.update({\"exp\": expire})\n    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)\n    return encoded_jwt</code></pre>"
            },
            {
                "id": 19,
                "title": "The Login Endpoint",
                "module": "Module 4",
                "story": "<h2>\ud83d\udd11 The Front Door</h2>\n                     <p>This is where the user exchanges their credentials for the JWT.</p>",
                "content": "<h2>Implementing /token</h2>\n                     <p>FastAPI has a strict spec for this form data called `OAuth2PasswordRequestForm`.</p>\n\n                     <pre><code>from fastapi.security import OAuth2PasswordRequestForm\n\n@app.post(\"/token\")\nasync def login(form_data: OAuth2PasswordRequestForm = Depends()):\n    # 1. Verify user exists and password is correct\n    user = authenticate_user(fake_users_db, form_data.username, form_data.password)\n    if not user:\n        raise HTTPException(status_code=400, detail=\"Incorrect username or password\")\n    \n    # 2. Create JWT\n    access_token = create_access_token(data={\"sub\": user.username})\n    \n    # 3. Return it\n    return {\"access_token\": access_token, \"token_type\": \"bearer\"}</code></pre>"
            },
            {
                "id": 20,
                "title": "Protecting Routes (Get Current User)",
                "module": "Module 4",
                "story": "<h2>\ud83d\udd75\ufe0f\u200d\u2642\ufe0f The Identity Check</h2>\n                     <p>Now we want to know <em>who</em> is making the request in our protected routes.</p>\n                     <p>We create a dependency `get_current_user` that takes the token, decodes it, finds the user, and returns the User object.</p>",
                "content": "<h2>The Get Current User Dependency</h2>\n                     <pre><code>async def get_current_user(token: str = Depends(oauth2_scheme)):\n    try:\n        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])\n        username: str = payload.get(\"sub\")\n        if username is None:\n            raise credentials_exception\n    except JWTError:\n        raise credentials_exception\n        \n    user = get_user(fake_users_db, username=username)\n    return user</code></pre>\n\n                     <h3>Using it</h3>\n                     <pre><code>@app.get(\"/users/me\")\nasync def read_users_me(current_user: User = Depends(get_current_user)):\n    return current_user</code></pre>\n                     \n                     <p>Now, inside `read_users_me`, you have the full `current_user` object effectively \"injected\" into your function!</p>"
            }
        ]
    },
    {
        "id": 5,
        "title": "Module 5: Connecting the Dots (Relationships)",
        "icon": "\ud83d\udd17",
        "description": "Learn how to link data together: One-to-Many, Many-to-Many, and how to query related data efficiently.",
        "lessons_data": [
            {
                "id": 21,
                "title": "The Network (Foreign Keys)",
                "module": "Module 5",
                "story": "<h2>\ud83d\udd78\ufe0f The Web of Data</h2>\n                     <p>Data rarely lives alone. A User has many Tweets. A Tweet has many Likes. A Like belongs to one User.</p>\n                     <p>We connect tables using <strong>Foreign Keys</strong>. Think of it like a reference pointer: \"See attached file #123\".</p>",
                "content": "<h2>One-to-Many Relationship</h2>\n                     <p>Let's say one `Team` has many `Heroes`.</p>\n\n                     <div class=\"code-block\">\n                        <div class=\"code-header\">models.py</div>\n                        <pre><code>class Team(SQLModel, table=True):\n    id: Optional[int] = Field(default=None, primary_key=True)\n    name: str\n    headquarters: str\n\n    # Relationship back to heroes\n    heroes: list[\"Hero\"] = Relationship(back_populates=\"team\")\n\nclass Hero(SQLModel, table=True):\n    id: Optional[int] = Field(default=None, primary_key=True)\n    name: str\n    \n    # The Foreign Key\n    team_id: Optional[int] = Field(default=None, foreign_key=\"team.id\")\n    \n    # Relationship to the Team object\n    team: Optional[Team] = Relationship(back_populates=\"heroes\")</code></pre>\n                     </div>\n\n                     <ul>\n                        <li><code>foreign_key=\"team.id\"</code>: This column stores the ID (integer).</li>\n                        <li><code>Relationship(...)</code>: This is a magic attribute. When you access `hero.team`, SQLModel fetches the Team object automatically.</li>\n                     </ul>"
            },
            {
                "id": 22,
                "title": "Creating Related Data",
                "module": "Module 5",
                "story": "<h2>\ud83d\udce6 The Package Deal</h2>\n                     <p>When you create a Hero, you can assign them to a Team immediately.</p>",
                "content": "<h2>Assigning Relationships</h2>\n                     <pre><code>def create_hero(session: Session):\n    team_preventers = Team(name=\"Preventers\", headquarters=\"Sharp Tower\")\n    hero_deadpond = Hero(name=\"Deadpond\", team=team_preventers)\n    \n    session.add(hero_deadpond)\n    # Note: We didn't add team_preventers explicitly!\n    # SQLModel forces the creation of the team because it's linked.\n    \n    session.commit()</code></pre>\n\n                     <h3>Reading Related Data</h3>\n                     <p>FastAPI/SQLModel supports \"Lazy Loading\" by default, but for async, we often use \"Read with Links\".</p>\n                     <p>If you access `hero.team`, SQLModel performs a SELECT query behind the scenes to fetch the team.</p>"
            },
            {
                "id": 23,
                "title": "Querying with Joins",
                "module": "Module 5",
                "story": "<h2>\ud83d\udd0d The Detective</h2>\n                     <p>Sometimes you want to ask complex questions: \"Give me all Heroes who are in a Team based in New York\".</p>\n                     <p>To do this efficiently (in one query instead of 50), we use <strong>JOINs</strong>.</p>",
                "content": "<h2>Selecting with Joins</h2>\n                     <pre><code>statement = select(Hero, Team).where(Hero.team_id == Team.id)\nresults = session.exec(statement).all()\n\nfor hero, team in results:\n    print(f\"Hero: {hero.name}, Team: {team.name}\")</code></pre>\n                    \n                     <h3>Left Outer Joins</h3>\n                     <p>If you want ALL heroes, even those without a team:</p>\n                     <pre><code>statement = select(Hero, Team).join(Team, isouter=True)</code></pre>"
            },
            {
                "id": 24,
                "title": "Many-to-Many Relationships",
                "module": "Module 5",
                "story": "<h2>\ud83e\udd1d The Collaboration</h2>\n                     <p>Sometimes relationships are complex. A Hero can learn many Skills. A Skill can be learned by many Heroes.</p>\n                     <p>This is a <strong>Many-to-Many</strong> relationship. It requires a neutral third party: The <strong>Link Table</strong>.</p>",
                "content": "<h2>The Link Model</h2>\n                     <pre><code>class HeroSkillLink(SQLModel, table=True):\n    hero_id: Optional[int] = Field(default=None, foreign_key=\"hero.id\", primary_key=True)\n    skill_id: Optional[int] = Field(default=None, foreign_key=\"skill.id\", primary_key=True)</code></pre>\n\n                     <h3>Updating the Models</h3>\n                     <pre><code>class Hero(SQLModel, table=True):\n    ...\n    skills: list[\"Skill\"] = Relationship(back_populates=\"heroes\", link_model=HeroSkillLink)\n\nclass Skill(SQLModel, table=True):\n    ...\n    heroes: list[\"Hero\"] = Relationship(back_populates=\"skills\", link_model=HeroSkillLink)</code></pre>"
            },
            {
                "id": 25,
                "title": "Cascades & Orphan Data",
                "module": "Module 5",
                "story": "<h2>\ud83e\uddf9 The Cleanup Crew</h2>\n                     <p>Unless you specify otherwise, deleting a Team might leave Heroes pointing to a non-existent team ID (Database Error!).</p>\n                     <p>We configure <strong>Cascades</strong> to tell the database: \"If the Team is deleted, delete the Heroes too\" OR \"Set their team_id to NULL\".</p>",
                "content": "<h2>configuring Cascades</h2>\n                     <p>In SQLAlchemy (under the hood):</p>\n                     <pre><code>team: Optional[Team] = Relationship(\n    back_populates=\"heroes\", \n    sa_relationship_kwargs={\"cascade\": \"all, delete\"}\n)</code></pre>\n                     <p>Use with caution! `delete` means literal deletion of the child records.</p>"
            }
        ]
    },
    {
        "id": 6,
        "title": "Module 6: The Inspection (Testing)",
        "icon": "\ud83e\uddea",
        "description": "Write automated tests using Pytest and TestClient directly from FastAPI to ensure your kitchen produces perfect dishes every time.",
        "lessons_data": [
            {
                "id": 26,
                "title": "Intro to Testing",
                "module": "Module 6",
                "story": "<h2>\ud83e\udd16 The Robot Taster</h2>\n                     <p>Imagine having a robot that tastes every single dish on the menu in 1 second before you open the restaurant. That's <strong>Automated Testing</strong>.</p>\n                     <p>If you change the soup recipe, the robot instantly tells you: \"Too salty!\". This gives you confidence to refactor code.</p>",
                "content": "<h2>Setup Pytest</h2>\n                     <pre><code>pip install pytest httpx</code></pre>\n\n                     <h3>Writing a Test</h3>\n                     <p>Create `test_main.py`:</p>\n                     <pre><code>def test_math():\n    assert 1 + 1 == 2</code></pre>\n\n                     <p>Run it with just `pytest`.</p>"
            },
            {
                "id": 27,
                "title": "The TestClient",
                "module": "Module 6",
                "story": "<h2>\ud83d\udd75\ufe0f\u200d\u2642\ufe0f The Mystery Shopper</h2>\n                     <p>FastAPI provides a `TestClient`. It pretends to be a real web browser sending requests to your API. It doesn't even need to start the Uvicorn server!</p>",
                "content": "<h2>Using TestClient</h2>\n                     <pre><code>from fastapi.testclient import TestClient\nfrom main import app\n\nclient = TestClient(app)\n\ndef test_read_main():\n    response = client.get(\"/\")\n    assert response.status_code == 200\n    assert response.json() == {\"message\": \"Hello World\"}</code></pre>\n\n                     <p>This runs your actual API code instantly.</p>"
            },
            {
                "id": 28,
                "title": "Testing Databases (Fixtures)",
                "module": "Module 6",
                "story": "<h2>\ud83c\udfad The Stunt Double</h2>\n                     <p>You shouldn't run tests on your Production Database! You might delete real users!</p>\n                     <p>We use <strong>Fixtures</strong> to create a fresh, empty database for every test. Often we use SQLite in-memory mode for speed.</p>",
                "content": "<h2>Pytest Fixtures</h2>\n                     <pre><code>import pytest\nfrom sqlmodel import Session, SQLModel, create_engine\n\n# Use in-memory SQLite\nengine = create_engine(\"sqlite://\")\n\n@pytest.fixture(name=\"session\")\ndef session_fixture():\n    SQLModel.metadata.create_all(engine)\n    with Session(engine) as session:\n        yield session\n    SQLModel.metadata.drop_all(engine)</code></pre>\n\n                     <p>Now pass `session` to your test functions.</p>"
            },
            {
                "id": 29,
                "title": "Overriding Dependencies",
                "module": "Module 6",
                "story": "<h2>\ud83c\udfad The Mask</h2>\n                     <p>Your API uses `get_session` to connect to the real DB file. During testing, we want to force it to use our test DB fixture.</p>\n                     <p>FastAPI allows <strong>Dependency Overrides</strong>.</p>",
                "content": "<h2>app.dependency_overrides</h2>\n                     <pre><code>from main import app, get_session\n\ndef test_create_hero(session: Session):\n    def get_session_override():\n        return session\n\n    app.dependency_overrides[get_session] = get_session_override\n    \n    client = TestClient(app)\n    response = client.post(\"/heroes/\", json={\"name\": \"Test Hero\"})\n    \n    app.dependency_overrides.clear()\n    \n    assert response.status_code == 200</code></pre>"
            },
            {
                "id": 30,
                "title": "Test Coverage",
                "module": "Module 6",
                "story": "<h2>\ud83d\udcca The Report Card</h2>\n                     <p>How do you know if you tested everything? <strong>Coverage</strong> tools analyze which lines of code were executed during tests.</p>",
                "content": "<h2>Running Coverage</h2>\n                     <pre><code>pip install pytest-cov\npytest --cov=app</code></pre>\n\n                     <p>Aim for high coverage, but remember: 100% coverage doesn't mean 0 bugs. It just means your tests ran every line.</p>"
            }
        ]
    },
    {
        "id": 7,
        "title": "Module 7: The Grand Opening (Deployment)",
        "icon": "\ud83d\ude80",
        "description": "Prepare your kitchen for the world! Learn Docker, Gunicorn, and how to deploy your FastAPI app to the cloud.",
        "lessons_data": [
            {
                "id": 31,
                "title": "The Shipping Container (Docker)",
                "module": "Module 7",
                "story": "<h2>\ud83d\ude9a The Magic Box</h2>\n                     <p>Imagine if you could ship your entire kitchen (stoves, chefs, pantry) inside a magical shipping container. When it arrives at any location in the world, you just open it, and it works exactly the same.</p>\n                     <p>This is <strong>Docker</strong>. It packages your code and all its dependencies (OS, libraries) into a standard unit.</p>",
                "content": "<h2>Why Docker?</h2>\n                     <ul>\n                        <li><strong>Standardization:</strong> \"It works on my machine\" becomes \"It works everywhere\".</li>\n                        <li><strong>Isolation:</strong> Each app runs in its own container, not affecting the host OS.</li>\n                     </ul>\n\n                     <h3>Installing Docker</h3>\n                     <p>Download Docker Desktop for Mac/Windows from <a href=\"https://www.docker.com/\" target=\"_blank\">Docker.com</a>.</p>"
            },
            {
                "id": 32,
                "title": "The Recipe (Dockerfile)",
                "module": "Module 7",
                "story": "<h2>\ud83d\udcdc The Master Recipe</h2>\n                     <p>A Dockerfile is the exact set of instructions to build your container image. \"Start with Python 3.9. Add these requirements. Copy our code. Run this command.\"</p>",
                "content": "<h2>Writing a Dockerfile</h2>\n                     <p>Create a file named `Dockerfile` (no extension):</p>\n\n                     <pre><code>\n# 1. Base Image (The OS + Python)\nFROM python:3.9-slim\n\n# 2. Set Working Directory\nWORKDIR /app\n\n# 3. Copy Requirements first (for caching)\nCOPY requirements.txt .\n\n# 4. Install Dependencies\nRUN pip install --no-cache-dir -r requirements.txt\n\n# 5. Copy Application Code\nCOPY . .\n\n# 6. Command to Run\nCMD [\"uvicorn\", \"main:app\", \"--host\", \"0.0.0.0\", \"--port\", \"80\"]\n                     </code></pre>\n                     \n                     <h3>Building It</h3>\n                     <pre><code>docker build -t my-fastapi-app .</code></pre>\n                     \n                     <h3>Running It</h3>\n                     <pre><code>docker run -d -p 80:80 my-fastapi-app</code></pre>"
            },
            {
                "id": 33,
                "title": "Orchestration (Docker Compose)",
                "module": "Module 7",
                "story": "<h2>\ud83c\udfb6 The Conductor</h2>\n                     <p>Your app rarely runs alone. It needs a Database. Maybe a Cache (Redis). Managing multiple containers manually is hard.</p>\n                     <p><strong>Docker Compose</strong> lets us define multi-container applications in a simple YAML file.</p>",
                "content": "<h2>docker-compose.yml</h2>\n                     <pre><code>version: \"3.8\"\nservices:\n  web:\n    build: .\n    ports:\n      - \"8000:80\"\n    depends_on:\n      - db\n      \n  db:\n    image: postgres:13\n    environment:\n      POSTGRES_USER: user\n      POSTGRES_PASSWORD: password\n      POSTGRES_DB: db</code></pre>\n\n                     <h3>Run Everything</h3>\n                     <pre><code>docker-compose up -d</code></pre>"
            },
            {
                "id": 34,
                "title": "Production Server (Gunicorn)",
                "module": "Module 7",
                "story": "<h2>\ud83c\udfed The Factory Manager</h2>\n                     <p>Uvicorn is great, but it's a single worker. In production, we want a Manager who spawns multiple workers to handle heavy traffic.</p>\n                     <p>We use <strong>Gunicorn</strong> (the Manager) to manage Uvicorn (the Worker).</p>",
                "content": "<h2>Running with Gunicorn</h2>\n                     <p>Install it first:</p>\n                     <pre><code>pip install gunicorn</code></pre>\n\n                     <h3>The Command</h3>\n                     <pre><code>gunicorn -w 4 -k uvicorn.workers.UvicornWorker main:app</code></pre>\n                     <ul>\n                        <li><code>-w 4</code>: Use 4 worker processes.</li>\n                        <li><code>-k ...</code>: Use the Uvicorn worker class (async compatible).</li>\n                     </ul>\n                     <p>Update your Dockerfile CMD to use this!</p>"
            },
            {
                "id": 35,
                "title": "Cloud Deployment",
                "module": "Module 7",
                "story": "<h2>\u26c5 Into the Clouds</h2>\n                     <p>Now that your container is ready, you can deploy it anywhere that runs Docker.</p>",
                "content": "<h2>Free Tier Options</h2>\n                     <ul>\n                        <li><strong>Render.com:</strong> Easiest for Docker/Python. Just link your GitHub repo.</li>\n                        <li><strong>Railway.app:</strong> Great for full stack (Frontend + Backend + DB).</li>\n                        <li><strong>Fly.io:</strong> Optimizes for global distribution.</li>\n                     </ul>\n\n                     <h3>Steps (Render)</h3>\n                     <ol>\n                        <li>Push code to GitHub.</li>\n                        <li>Go to Dashboard > New Web Service.</li>\n                        <li>Select Repo.</li>\n                        <li>Choose Docker Environment.</li>\n                        <li>Deploy! \ud83d\ude80</li>\n                     </ol>"
            }
        ]
    }
];

// ============================================
// APPLICATION LOGIC
// ============================================

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

