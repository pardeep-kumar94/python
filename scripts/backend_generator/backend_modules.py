
modules = [
    {
        "id": 1,
        "title": "Module 1: The Modern Kitchen (Foundations)",
        "icon": "👨‍🍳",
        "description": "Start your journey by setting up your FastAPI kitchen and understanding why it's revolutionizing Python web development.",
        "lessons_data": [
            {
                "id": 1,
                "title": "The Story of API Evolution",
                "module": "Module 1",
                "story": """<h2>📖 The Tale of Three Restaurants</h2>
                    <p>Imagine the history of Python web frameworks as the evolution of restaurants in a busy city.</p>
                    
                    <div class="story-box">
                        <h3>1. The Flask Tavern (Synchronous)</h3>
                        <p>In the beginning, there was Flask. It was simple and loved. But it had one waiter (the thread). If a customer ordered a slow-cooked stew (a database query), the waiter would stand by the kitchen door, frozen, waiting for the stew. Meanwhile, new customers lined up outside, ignored.</p>
                        <p><strong>Problem:</strong> One slow task blocked everyone else.</p>
                    </div>

                    <div class="story-box">
                        <h3>2. The Node.js Bistro (Callbacks)</h3>
                        <p>Across the street, the Node.js Bistro opened. Their waiters were hyper-active. They took an order, ran to the kitchen, shouted it, and immediately ran back to take new orders. When the food was ready, a bell rang (callback). It was chaotic but fast.</p>
                        <p><strong>Problem:</strong> The "Callback Hell" kitchen was messy and hard to organize.</p>
                    </div>

                    <div class="story-box">
                        <h3>3. The FastAPI Kitchen (Modern Async)</h3>
                        <p>Then came FastAPI. It adopted the modern `async/await` system. Waiters are highly organized. They take an order, digitally log it (await), and instantly turn to the next customer. The system handles the waiting.</p>
                        <p>But FastAPI did something more: It hired a strict Health Inspector named <strong>Pydantic</strong>. Before any ingredient (data) enters the kitchen, it is rigorously checked. No rotten tomatoes (wrong data types) ever reach the pot.</p>
                    </div>""",
                "content": """<h2>What Makes FastAPI Special?</h2>
                    <p>FastAPI combines the best of all worlds: the speed of Node.js/Go and the simplicity of Python.</p>
                    
                    <h3>Key Superpowers</h3>
                    <ul>
                        <li><strong>🚀 Speed:</strong> High performance, on par with NodeJS and Go (thanks to Starlette and Pydantic).</li>
                        <li><strong>🛡️ Data Validation:</strong> Automatic validation using Python type hints.</li>
                        <li><strong>📚 Documentation:</strong> Automatic interactive API docs (Swagger UI) generated from your code.</li>
                        <li><strong>🔌 Standards-based:</strong> Based on (and fully compatible with) the open standards for APIs: OpenAPI and JSON Schema.</li>
                    </ul>

                    <div class="tip-box">
                        <div class="box-title">Why "Fast"?</div>
                        <p>It's fast to <em>run</em> (performance) but also fast to <em>code</em> (developer speed). It reduces bugs by approx 40%.</p>
                    </div>

                    <h3>The Components</h3>
                    <p>FastAPI stands on the shoulders of giants:</p>
                    <ul>
                        <li><strong>Starlette:</strong> For the web parts (routing, async).</li>
                        <li><strong>Pydantic:</strong> For the data parts (validation, serialization).</li>
                        <li><strong>Uvicorn:</strong> The lightning-fast ASGI server that runs your app.</li>
                    </ul>"""
            },
            {
                "id": 2,
                "title": "Setting Up Your Station",
                "module": "Module 1",
                "story": """<h2>🛠️ Preparing the Kitchen</h2>
                    <p>Before a chef can cook, they must sharpen their knives and organize their station (Mise en place). In Python, this means removing the clutter of global installations and creating a clean, dedicated workspace: the <strong>Virtual Environment</strong>.</p>
                    <p>Think of the Virtual Environment as a private kitchen where your ingredients (libraries) don't mix with the restaurant next door.</p>""",
                "content": """<h2>Installation Guide</h2>
                    <p>We need two main ingredients: <strong>FastAPI</strong> (the framework) and <strong>Uvicorn</strong> (the server).</p>

                    <h3>Step 1: Create a Virtual Environment</h3>
                    <div class="code-block">
                        <div class="code-header">Terminal</div>
                        <pre><code># Create the environment
python3 -m venv venv

# Activate it (Mac/Linux)
source venv/bin/activate

# Activate it (Windows)
venv\\Scripts\\activate</code></pre>
                    </div>

                    <h3>Step 2: Install the Tools</h3>
                    <div class="code-block">
                        <div class="code-header">Terminal</div>
                        <pre><code>pip install fastapi "uvicorn[standard]"</code></pre>
                    </div>
                    <p>Note: The <code>[standard]</code> part installs extra dependencies like `uvloop` (for speed) and `watchfiles` (for auto-reloading).</p>

                    <div class="warning-box">
                        <div class="box-title">Common Mistake</div>
                        <p>Don't call your file <code>fastapi.py</code>! This will confuse Python when it tries to import the library. Name it <code>main.py</code> or <code>app.py</code>.</p>
                    </div>"""
            },
            {
                "id": 3,
                "title": "The First Dish (Hello World)",
                "module": "Module 1",
                "story": """<h2>🥗 The Appetizer</h2>
                    <p>Every great meal starts with a simple appetizer. In programming, this is the "Hello World". It proves your kitchen is operational, the gas is on, and the chef is ready.</p>
                    <p>We are going to create an API endpoint. Think of an <strong>Endpoint</strong> as a menu item. When a customer points to "Item #1" on the menu (the URL), the kitchen prepares that specific dish.</p>""",
                "content": """<h2>Your First API</h2>
                    <p>Create a file named <code>main.py</code> and add this code:</p>

                    <div class="code-block">
                        <div class="code-header">main.py</div>
                        <pre><code>from fastapi import FastAPI

# 1. Initialize the App (The Kitchen)
app = FastAPI()

# 2. Define a Path Operation (The Menu Item)
@app.get("/")
async def root():
    # 3. Return the Content (The Dish)
    return {"message": "Hello World"}</code></pre>
                    </div>

                    <h3>Breaking it Down</h3>
                    <ul>
                        <li><code>@app.get("/")</code>: This decorator tells FastAPI that the function below handles <strong>GET</strong> requests to the path <code>/</code>.</li>
                        <li><code>async def</code>: Defines an asynchronous function.</li>
                        <li><code>return dict</code>: FastAPI automatically converts Python dictionaries to JSON.</li>
                    </ul>

                    <h3>Serving the Dish</h3>
                    <p>Unlike standard Python scripts, you don't run this with `python main.py`. You need a server (Uvicorn) to serve it.</p>
                    <div class="code-block">
                        <div class="code-header">Terminal</div>
                        <pre><code>uvicorn main:app --reload</code></pre>
                    </div>
                    <ul>
                        <li><code>main</code>: The file `main.py`.</li>
                        <li><code>app</code>: The object created inside of `main.py` with `app = FastAPI()`.</li>
                        <li><code>--reload</code>: Makes the server restart after code changes. Only use for development.</li>
                    </ul>

                    <div class="memory-box">
                        <div class="box-title">Check the Docs!</div>
                        <p>Go to <a href="http://127.0.0.1:8000/docs" target="_blank">http://127.0.0.1:8000/docs</a>. You will see the automatic interactive API documentation (Swagger UI). It's magic! ✨</p>
                    </div>"""
            },
            {
                "id": 4,
                "title": "Specific Orders (Path Parameters)",
                "module": "Module 1",
                "story": """<h2>🍔 "I'll have the #5"</h2>
                    <p>A menu isn't just one item. Customers want variety. They don't just say "Give me food", they say "Give me Burger #5".</p>
                    <p>In APIs, this is a <strong>Path Parameter</strong>. It's a variable part of the URL path that acts like a specific identifier for a resource.</p>""",
                "content": """<h2>Implementing Path Parameters</h2>
                    <p>You can declare path "parameters" or "variables" with the same syntax used by Python format strings.</p>

                    <div class="code-block">
                        <div class="code-header">main.py</div>
                        <pre><code>@app.get("/items/{item_id}")
async def read_item(item_id: int):
    return {"item_id": item_id}</code></pre>
                    </div>

                    <h3>Type Validation (Pydantic Magic)</h3>
                    <p>Notice <code>item_id: int</code>? This is a Python type hint. FastAPI uses it to validate data.</p>
                    <ul>
                        <li>If you go to <code>/items/5</code> -> You get <code>{"item_id": 5}</code> (as an integer).</li>
                        <li>If you go to <code>/items/foo</code> -> You get a nice error saying "value is not a valid integer".</li>
                    </ul>

                    <div class="tip-box">
                        <div class="box-title">Order Matters</div>
                        <p>If you have paths like <code>/users/me</code> and <code>/users/{user_id}</code>, you must define <code>/users/me</code> <strong>first</strong>. Otherwise, `{user_id}` will match "me" and try to convert it to an integer!</p>
                    </div>"""
            },
            {
                "id": 5,
                "title": "Special Requests (Query Parameters)",
                "module": "Module 1",
                "story": """<h2>🍟 "With extra salt"</h2>
                    <p>Sometimes customers want to modify their order. "I want the burger, but <em>extra crispy</em> and <em>hold the onions</em>."</p>
                    <p>These are optional modifications to the main request. In web APIs, we use <strong>Query Parameters</strong> for this. They appear at the end of the URL after `?`, like `?crispy=true&onion=false`.</p>""",
                "content": """<h2>Query Parameters</h2>
                    <p>When you declare other function parameters that are not part of the path parameters, they are automatically interpreted as "query" parameters.</p>

                    <div class="code-block">
                        <div class="code-header">main.py</div>
                        <pre><code>fake_items_db = [{"item_name": "Foo"}, {"item_name": "Bar"}, {"item_name": "Baz"}]

@app.get("/items/")
async def read_item(skip: int = 0, limit: int = 10):
    return fake_items_db[skip : skip + limit]</code></pre>
                    </div>

                    <p>Now you can call: <code>http://127.0.0.1:8000/items/?skip=0&limit=2</code></p>

                    <h3>Defaults and Optionals</h3>
                    <p>Because we provided default values (`= 0`, `= 10`), the parameters are optional. If the user visits just <code>/items/</code>, they get the defaults.</p>
                    
                    <p>You can also create optional parameters using standard Python typing:</p>
                    <pre><code>from typing import Optional

@app.get("/items/{item_id}")
async def read_item(item_id: str, q: Optional[str] = None):
    if q:
        return {"item_id": item_id, "q": q}
    return {"item_id": item_id}</code></pre>
                    
                    <div class="memory-box">
                        <div class="box-title">Rule of Thumb</div>
                        <p><strong>Path Parameters</strong>: Identifies a specific resource (Essential).<br>
                        <strong>Query Parameters</strong>: Sorts, filters, or paginates that resource (Optional).</p>
                    </div>"""
            }
        ]
    },
    {
        "id": 2,
        "title": "Module 2: The Inspection Station (Validation)",
        "icon": "🛡️",
        "description": "Learn how to receive data securely using Pydantic models to ensure your kitchen never cooks with bad ingredients.",
        "lessons_data": [
            {
                "id": 6,
                "title": "The Bouncer (Request Body)",
                "module": "Module 2",
                "story": """<h2>📦 The Delivery Truck</h2>
                    <p>GET requests are for asking for data. But to <em>send</em> data (like creating a new user or posting a tweet), we need to send a package. This package is the <strong>Request Body</strong>.</p>
                    <p>However, you can't just let any truck dump cargo in your kitchen. You need a Bouncer at the loading dock to inspect the manifest. This Bouncer is <strong>Pydantic</strong>.</p>""",
                "content": """<h2>Sending Data with Pydantic</h2>
                    <p>To expect a request body, you define a Pydantic Model. This model describes exactly what your data should look like.</p>

                    <div class="code-block">
                        <div class="code-header">main.py</div>
                        <pre><code>from typing import Optional
from fastapi import FastAPI
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None

app = FastAPI()

@app.post("/items/")
async def create_item(item: Item):
    return item</code></pre>
                    </div>

                    <h3>What just happened?</h3>
                    <ol>
                        <li>We created a class inheriting from `BaseModel`.</li>
                        <li>We defined typed fields. `name` is required (no default). `description` is optional.</li>
                        <li>We added it as a parameter to the path operation.</li>
                    </ol>

                    <p>FastAPI will now:</p>
                    <ul>
                        <li>Read the body as JSON.</li>
                        <li>Convert types (if you send "price": "5.5", it converts to float).</li>
                        <li>Validate data (if "name" is missing, it returns 422 Error).</li>
                        <li>Give you specific editor support (autocomplete) inside the function.</li>
                    </ul>"""
            },
           {
                "id": 7,
                "title": "Validation Rules (Field)",
                "module": "Module 2",
                "story": """<h2>📏 Strict Standards</h2>
                    <p>Just saying "name must be a string" isn't enough. What if someone sends a name that is 10,000 characters long? Or a price of -50 dollars?</p>
                    <p>We need strict quality control. Pydantic's <code>Field</code> allows us to enforce rules like min_length, max_length, and regex patterns.</p>""",
                "content": """<h2>Using Field for Validation</h2>
                    <p>You can customize validation by using `Field` directly in your Pydantic models.</p>

                    <div class="code-block">
                        <div class="code-header">main.py</div>
                        <pre><code>from pydantic import BaseModel, Field

class Item(BaseModel):
    name: str = Field(..., min_length=3, max_length=50, title="The name of the item")
    description: Optional[str] = Field(None, max_length=300)
    price: float = Field(..., gt=0, description="The price must be greater than zero")
    tags: list[str] = []</code></pre>
                    </div>

                    <ul>
                        <li><code>...</code> (Ellipsis): Means the field is REQUIRED.</li>
                        <li><code>gt=0</code>: Greater than 0.</li>
                        <li><code>min_length=3</code>: String must be at least 3 chars.</li>
                    </ul>

                    <div class="tip-box">
                        <div class="box-title">Why Validation Matters</div>
                        <p>This validation happens BEFORE your code runs. You don't need to write `if price < 0: return error`. FastAPI handles it automatically and returns a standardized error response.</p>
                    </div>"""
            },
            {
                "id": 8,
                "title": "Nested Models (Complex Data)",
                "module": "Module 2",
                "story": """<h2>📦 Boxes inside Boxes</h2>
                    <p>Real-world data is rarely flat. An 'Order' contains a 'User', which contains an 'Address', which contains a 'City'.</p>
                    <p>Pydantic handles these Russian Nesting Dolls effortlessly. You can use models as types inside other models.</p>""",
                "content": """<h2>Defining Nested Structures</h2>
                    <p>Simply define a model and use it as a type hint for an attribute in another model.</p>

                    <div class="code-block">
                        <div class="code-header">main.py</div>
                        <pre><code>class Image(BaseModel):
    url: str
    name: str

class Item(BaseModel):
    name: str
    description: Optional[str] = None
    image: Optional[Image] = None  # Nested Model

@app.put("/items/{item_id}")
async def update_item(item_id: int, item: Item):
    results = {"item_id": item_id, "item": item}
    return results</code></pre>
                    </div>

                    <p>FastAPI expects a JSON body like:</p>
                    <pre><code>{
    "name": "Foo",
    "image": {
        "url": "http://example.com/baz.jpg",
        "name": "The Foo Image"
    }
}</code></pre>

                    <h3>Lists of Models</h3>
                    <p>You can also define lists of sub-models:</p>
                    <pre><code>images: list[Image] = []</code></pre>
                    <p>This would expect an array of image objects.</p>"""
            },
            {
                "id": 9,
                "title": "Response Models (The Presentation)",
                "module": "Module 2",
                "story": """<h2>🍽️ Plating the Dish</h2>
                    <p>Your kitchen might capture lots of data: internal IDs, hashed passwords, creation dates. But you shouldn't serve ALL of that to the customer!</p>
                    <p>The <strong>Response Model</strong> is like the plating process. It filters the raw data from the pot and arranges only what the customer should see on the plate.</p>""",
                "content": """<h2>Filtering Data with Response Models</h2>
                    <p>You define the `response_model` parameter in the decorator. FastAPI will use this model to filter and convert the return data.</p>

                    <div class="code-block">
                        <div class="code-header">main.py</div>
                        <pre><code>class UserIn(BaseModel):
    username: str
    password: str
    email: str

class UserOut(BaseModel):
    username: str
    email: str
    # Password is EXCLUDED

@app.post("/user/", response_model=UserOut)
async def create_user(user: UserIn):
    # Imagine we save the user to DB here
    return user</code></pre>
                    </div>

                    <p>Even though our function returns the `user` object (which contains the password), FastAPI sees the `response_model=UserOut` and automatically removes the password field before sending the JSON response.</p>

                    <div class="warning-box">
                        <div class="box-title">Security Critical!</div>
                        <p>Always use Response Models to prevent accidental data leaks (like exposing passwords or internal private keys).</p>
                    </div>"""
            },
            {
                "id": 10,
                "title": "Handling Errors (The Apology)",
                "module": "Module 2",
                "story": """<h2>🛑 "We're out of soup"</h2>
                    <p>Sometimes things go wrong. The item isn't found, the user isn't allowed, or the server detects an issue.</p>
                    <p>In APIs, we communicate this with <strong>HTTP Status Codes</strong> and Error details. We don't just crash; we politely explain the problem.</p>""",
                "content": """<h2>HTTPException</h2>
                    <p>To return an error to the client, use `HTTPException`.</p>

                    <div class="code-block">
                        <div class="code-header">main.py</div>
                        <pre><code>from fastapi import FastAPI, HTTPException

items = {"foo": "The Foo Wrestlers"}

@app.get("/items/{item_id}")
async def read_item(item_id: str):
    if item_id not in items:
        raise HTTPException(status_code=404, detail="Item not found")
    return {"item": items[item_id]}</code></pre>
                    </div>

                    <h3>Common Status Codes</h3>
                    <ul>
                        <li><strong>200 OK:</strong> Request succeeded.</li>
                        <li><strong>201 Created:</strong> Resource created successfully (use for POST).</li>
                        <li><strong>400 Bad Request:</strong> Client sent invalid data.</li>
                        <li><strong>401 Unauthorized:</strong> User needs to log in.</li>
                        <li><strong>403 Forbidden:</strong> User is logged in but doesn't have permission.</li>
                        <li><strong>404 Not Found:</strong> Resource doens't exist.</li>
                        <li><strong>500 Internal Server Error:</strong> Your code broke.</li>
                    </ul>

                    <p>You can also set the status code for success:</p>
                    <pre><code>@app.post("/items/", status_code=201)</code></pre>"""
            }
        ]
    }
]
