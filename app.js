// ============================================
// CURRICULUM DATA - 40 Comprehensive Python Lessons
// ============================================

const CURRICULUM = [
    {
        id: 1,
        title: "Module 1: The Foundation",
        icon: "🎯",
        description: "Start your Python journey understanding variables, data types, and how Python thinks",
        lessons: 6,
        duration: "2 hours",
        lessons_data: [
            {
                id: 1,
                title: "Welcome to Python - Your First Program",
                module: "Module 1",
                story: `
                    <h2>📖 The Story of Hello, World!</h2>
                    <p>It's 1972. A programmer named Brian Kernighan is writing a tutorial for a new programming language. He needs a simple example to show beginners how to make the computer display text on screen. He types <code>printf("hello, world");</code> — and starts a tradition that has lasted over 50 years.</p>
                    <p>Every programmer on Earth — from Silicon Valley engineers at Google to students in rural India — begins their journey with "Hello, World!" Today, <strong>you</strong> join that tradition.</p>
                    <p>By the end of this lesson, you'll understand not just <em>what</em> the code does, but <em>exactly how</em> your computer processes it at every step. Let's begin. 🚀</p>
                `,
                content: `
                    <h2>What is Python?</h2>
                    <p>Before we write code, let's understand what Python actually is and why it's so special.</p>

                    <div class="story-box">
                        <div class="box-title">🐍 Why is it called Python?</div>
                        <p>Guido van Rossum created Python in 1989 while working at a research institute in the Netherlands. He was reading scripts from a British comedy show called <strong>"Monty Python's Flying Circus"</strong> to pass time during the Christmas holidays. He named his new language "Python" as a tribute to the show — not after the snake!</p>
                        <p>Python was officially released to the public in <strong>1991</strong>. Today, it's the <strong>#1 most popular programming language in the world</strong>, used by Google, Netflix, NASA, Instagram, Spotify, and millions of developers worldwide.</p>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 High-Level vs Low-Level Languages</div>
                        <p><strong>Low-level languages</strong> (like Assembly or C) speak the computer's native language — binary (0s and 1s). Writing "Hello" in Assembly takes 20+ lines of cryptic code that looks like: <code>MOV AH, 09h / MOV DX, OFFSET msg / INT 21h</code></p>
                        <p><strong>High-level languages</strong> (like Python) are designed for humans. Python reads almost like English. The same "Hello" takes just 1 line: <code>print("Hello")</code></p>
                        <p>Python translates your human-friendly code into machine code automatically — that's the job of the <strong>Python interpreter</strong>. You write for humans; Python handles the machine.</p>
                    </div>

                    <h2>Your First Python Program</h2>
                    <p>Here it is — the most famous program in the world:</p>

                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-language">Python</span>
                            <button class="copy-button" onclick="copyCode(this)">Copy</button>
                        </div>
                        <pre><code class="language-python">print("Hello, World!")</code></pre>
                    </div>

                    <p>Run this and you'll see:</p>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Output</span></div>
                        <pre><code>Hello, World!</code></pre>
                    </div>

                    <p>Simple? Yes. But there's a LOT happening under the hood. Let's dissect every single character.</p>

                    <h2>Anatomy of print("Hello, World!")</h2>

                    <div class="story-box">
                        <div class="box-title">🔬 Breaking It Down — Character by Character</div>
                        <table style="width:100%;border-collapse:collapse;margin-top:10px;">
                            <tr style="background:rgba(102,126,234,0.2);">
                                <th style="padding:10px;text-align:left;border:1px solid rgba(255,255,255,0.1);">Part</th>
                                <th style="padding:10px;text-align:left;border:1px solid rgba(255,255,255,0.1);">What it is</th>
                                <th style="padding:10px;text-align:left;border:1px solid rgba(255,255,255,0.1);">What it does</th>
                            </tr>
                            <tr>
                                <td style="padding:10px;border:1px solid rgba(255,255,255,0.1);"><code>print</code></td>
                                <td style="padding:10px;border:1px solid rgba(255,255,255,0.1);">Built-in function name</td>
                                <td style="padding:10px;border:1px solid rgba(255,255,255,0.1);">Tells Python "I want to display something on screen"</td>
                            </tr>
                            <tr style="background:rgba(255,255,255,0.03);">
                                <td style="padding:10px;border:1px solid rgba(255,255,255,0.1);"><code>(</code></td>
                                <td style="padding:10px;border:1px solid rgba(255,255,255,0.1);">Opening parenthesis</td>
                                <td style="padding:10px;border:1px solid rgba(255,255,255,0.1);">Starts the "argument list" — what you're giving to print</td>
                            </tr>
                            <tr>
                                <td style="padding:10px;border:1px solid rgba(255,255,255,0.1);"><code>"</code></td>
                                <td style="padding:10px;border:1px solid rgba(255,255,255,0.1);">Opening quote mark</td>
                                <td style="padding:10px;border:1px solid rgba(255,255,255,0.1);">Signals the start of a text string</td>
                            </tr>
                            <tr style="background:rgba(255,255,255,0.03);">
                                <td style="padding:10px;border:1px solid rgba(255,255,255,0.1);"><code>Hello, World!</code></td>
                                <td style="padding:10px;border:1px solid rgba(255,255,255,0.1);">String content</td>
                                <td style="padding:10px;border:1px solid rgba(255,255,255,0.1);">The actual text to display</td>
                            </tr>
                            <tr>
                                <td style="padding:10px;border:1px solid rgba(255,255,255,0.1);"><code>"</code></td>
                                <td style="padding:10px;border:1px solid rgba(255,255,255,0.1);">Closing quote mark</td>
                                <td style="padding:10px;border:1px solid rgba(255,255,255,0.1);">Signals the end of the text string</td>
                            </tr>
                            <tr style="background:rgba(255,255,255,0.03);">
                                <td style="padding:10px;border:1px solid rgba(255,255,255,0.1);"><code>)</code></td>
                                <td style="padding:10px;border:1px solid rgba(255,255,255,0.1);">Closing parenthesis</td>
                                <td style="padding:10px;border:1px solid rgba(255,255,255,0.1);">Ends the argument list, tells Python to execute now</td>
                            </tr>
                        </table>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 What Happens in Memory — The Full Picture</div>
                        <p>When Python runs <code>print("Hello, World!")</code>, here's the exact sequence of events:</p>
                        <ol>
                            <li><strong>Lexing (Tokenization):</strong> Python's lexer reads your code character by character and breaks it into "tokens": <code>[print] [(] ["Hello, World!"] [)]</code></li>
                            <li><strong>Parsing:</strong> Python's parser checks if those tokens follow valid Python grammar rules. It builds an Abstract Syntax Tree (AST) — a tree structure representing your code's meaning.</li>
                            <li><strong>Compilation:</strong> Python compiles the AST into bytecode — a lower-level set of instructions (stored in <code>.pyc</code> files in the <code>__pycache__</code> folder).</li>
                            <li><strong>Execution by the PVM:</strong> The Python Virtual Machine (PVM) executes the bytecode:
                                <ul style="margin-top:8px;">
                                    <li>It looks up <code>print</code> in the built-in namespace and finds the print function object</li>
                                    <li>It creates a string object <code>"Hello, World!"</code> in heap memory</li>
                                    <li>It calls the print function, passing the string as an argument</li>
                                    <li>print() writes the string to <code>sys.stdout</code> (standard output = your terminal)</li>
                                    <li>It automatically adds a newline character <code>\\n</code> at the end</li>
                                </ul>
                            </li>
                            <li><strong>Garbage Collection:</strong> Once print() is done, the string object's reference count drops to 0. Python's garbage collector automatically frees that memory — you never have to manage memory manually in Python!</li>
                        </ol>
                    </div>

                    <h2>The print() Function — Complete Mastery Guide</h2>
                    <p><code>print()</code> is one of Python's ~70 built-in functions. It's far more powerful than most beginners realize. Let's master every feature.</p>

                    <h3>1. Basic Printing — All Data Types</h3>
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-language">Python</span>
                            <button class="copy-button" onclick="copyCode(this)">Copy</button>
                        </div>
                        <pre><code class="language-python"># Print text (strings) — use single OR double quotes
print("Hello, World!")           # Output: Hello, World!
print('Single quotes work too')  # Output: Single quotes work too

# Print whole numbers (integers)
print(42)          # Output: 42
print(-100)        # Output: -100
print(1000000)     # Output: 1000000

# Print decimal numbers (floats)
print(3.14)        # Output: 3.14
print(-0.5)        # Output: -0.5

# Print True/False (booleans)
print(True)        # Output: True
print(False)       # Output: False

# Print nothing — creates a blank line
print()            # Output: (empty line)

# Print multiple items — separated by space by default
print("My name is", "Alex")       # Output: My name is Alex
print("I am", 25, "years old")    # Output: I am 25 years old
print(1, 2, 3, 4, 5)              # Output: 1 2 3 4 5
print("Score:", 100, "Points!")   # Output: Score: 100 Points!</code></pre>
                    </div>

                    <h3>2. print() with sep — Custom Separator</h3>
                    <p>By default, print() puts a <strong>space</strong> between multiple items. The <code>sep</code> parameter lets you change this to anything you want:</p>
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-language">Python</span>
                            <button class="copy-button" onclick="copyCode(this)">Copy</button>
                        </div>
                        <pre><code class="language-python"># Default separator is a space " "
print("apple", "banana", "cherry")
# Output: apple banana cherry

# Custom separator: comma + space
print("apple", "banana", "cherry", sep=", ")
# Output: apple, banana, cherry

# Custom separator: dash (great for dates!)
print(2024, 2, 17, sep="-")
# Output: 2024-2-17

# Custom separator: slash (file paths)
print("Users", "Alex", "Documents", sep="/")
# Output: Users/Alex/Documents

# No separator at all
print("a", "b", "c", sep="")
# Output: abc

# Separator as newline — each item on its own line
print("Monday", "Tuesday", "Wednesday", sep="\\n")
# Output:
# Monday
# Tuesday
# Wednesday

# Separator as arrow
print("Step 1", "Step 2", "Step 3", sep=" --> ")
# Output: Step 1 --> Step 2 --> Step 3</code></pre>
                    </div>

                    <h3>3. print() with end — Custom Line Ending</h3>
                    <p>By default, print() adds a <strong>newline</strong> <code>\\n</code> at the end, moving the cursor to the next line. The <code>end</code> parameter lets you change this:</p>
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-language">Python</span>
                            <button class="copy-button" onclick="copyCode(this)">Copy</button>
                        </div>
                        <pre><code class="language-python"># Default: ends with newline (cursor goes to next line)
print("Hello")
print("World")
# Output:
# Hello
# World

# end=" " — stay on same line with a space
print("Hello", end=" ")
print("World")
# Output: Hello World

# end="" — no space, no newline (glue together)
print("Hello", end="")
print("World")
# Output: HelloWorld

# end="! " — custom ending
print("Hello", end="! ")
print("World", end="!")
# Output: Hello! World!

# Practical use: print a loading bar
print("Loading", end="")
print(".", end="")
print(".", end="")
print(".", end="")
print(" Done!")
# Output: Loading... Done!</code></pre>
                    </div>

                    <h3>4. Combining sep and end</h3>
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-language">Python</span>
                            <button class="copy-button" onclick="copyCode(this)">Copy</button>
                        </div>
                        <pre><code class="language-python"># Use both sep and end together
print("A", "B", "C", sep="-", end="!\\n")
# Output: A-B-C!

# Print a formatted list on one line
print("Fruits:", "Apple", "Banana", "Cherry", sep=" | ", end="\\n---\\n")
# Output:
# Fruits: | Apple | Banana | Cherry
# ---</code></pre>
                    </div>

                    <h2>Comments — Talking to Yourself (and Others)</h2>
                    <p>Comments are lines in your code that Python <strong>completely ignores</strong>. They exist purely for humans to read and understand the code.</p>

                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-language">Python</span>
                            <button class="copy-button" onclick="copyCode(this)">Copy</button>
                        </div>
                        <pre><code class="language-python"># This is a single-line comment
# Python ignores everything after the # symbol on that line

print("Hello")  # This comment is at the end of a line — also ignored

# You can use comments to explain what your code does:
# Display a greeting message to the user
print("Welcome to Python!")

# Or to temporarily disable code without deleting it:
# print("This line won't run — it's commented out")
print("But this line WILL run")</code></pre>
                    </div>

                    <h3>Multi-line Comments (Docstrings)</h3>
                    <p>For longer explanations, use triple quotes <code>"""</code> or <code>'''</code>:</p>
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-language">Python</span>
                            <button class="copy-button" onclick="copyCode(this)">Copy</button>
                        </div>
                        <pre><code class="language-python">"""
This is a multi-line comment (technically called a "docstring").
You can write as many lines as you want between the triple quotes.
Python ignores all of this content.

Program: My First Python App
Author: Alex Johnson
Date: February 2024
Purpose: Learn Python basics from scratch
Version: 1.0
"""

print("The actual program starts here")</code></pre>
                    </div>

                    <div class="tip-box">
                        <div class="box-title">💡 The Golden Rule of Comments</div>
                        <p>Professional programmers spend more time <em>reading</em> code than writing it. Good comments make code maintainable. Bad comments are worse than no comments.</p>
                        <p><strong>Comment the WHY, not the WHAT.</strong> The code already shows what it does — explain why you made that choice.</p>
                        <div class="code-block" style="margin-top:10px;">
                            <div class="code-header"><span class="code-language">Python — Good vs Bad Comments</span></div>
                            <pre><code class="language-python"># ❌ BAD comment (states the obvious — the code already says this):
x = x + 1  # Add 1 to x

# ✅ GOOD comment (explains the reason — the code can't tell you this):
x = x + 1  # Increment retry counter (max 3 retries allowed)

# ❌ BAD comment (outdated — code changed but comment wasn't updated):
# Multiply by 2
result = value * 3  # Bug waiting to happen!

# ✅ GOOD comment (explains business logic):
result = value * 3  # Triple the base price for premium tier</code></pre>
                        </div>
                    </div>

                    <h2>Escape Characters — Special Characters in Strings</h2>
                    <p>Some characters can't be typed directly inside a string. We use <strong>escape sequences</strong> — a backslash <code>\\</code> followed by a special letter. Python replaces these with the actual character.</p>

                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-language">Python — All Common Escape Sequences</span>
                            <button class="copy-button" onclick="copyCode(this)">Copy</button>
                        </div>
                        <pre><code class="language-python"># \\n = newline (move to next line)
print("Line 1\\nLine 2\\nLine 3")
# Output:
# Line 1
# Line 2
# Line 3

# \\t = tab (horizontal indent — about 4-8 spaces)
print("Name:\\tAlex")
print("Age:\\t\\t25")
print("City:\\t\\tNew York")
# Output:
# Name:   Alex
# Age:    25
# City:   New York

# \\\\ = literal backslash character
print("File path: C:\\\\Users\\\\Alex\\\\Documents")
# Output: File path: C:\\Users\\Alex\\Documents

# \\" = double quote inside a double-quoted string
print("She said \\"Python is amazing!\\"")
# Output: She said "Python is amazing!"

# \\' = single quote inside a single-quoted string
print('It\\'s a beautiful day!')
# Output: It's a beautiful day!

# \\r = carriage return (moves cursor to start of line)
# Useful for progress bars in terminals

# \\0 = null character (rarely used)

# Practical example — formatted table:
print("=" * 35)
print("Name\\t\\tAge\\tCity")
print("=" * 35)
print("Alice\\t\\t28\\tLondon")
print("Bob\\t\\t32\\tNew York")
print("Charlie\\t\\t25\\tTokyo")
print("=" * 35)</code></pre>
                    </div>

                    <h2>Common Mistakes Every Beginner Makes</h2>
                    <p>Learning from mistakes is powerful. Here are the most common errors and exactly how to fix them:</p>

                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-language">Python — Common Errors & Fixes</span>
                            <button class="copy-button" onclick="copyCode(this)">Copy</button>
                        </div>
                        <pre><code class="language-python"># ❌ MISTAKE 1: Forgetting quotes around text
print(Hello)
# Error: NameError: name 'Hello' is not defined
# Python thinks 'Hello' is a variable name, not text!
# ✅ FIX: Always wrap text in quotes
print("Hello")

# ❌ MISTAKE 2: Mismatched quotes
print("Hello')
# Error: SyntaxError: EOL while scanning string literal
# ✅ FIX: Opening and closing quotes must match
print("Hello")   # Both double quotes
print('Hello')   # Both single quotes

# ❌ MISTAKE 3: Wrong capitalization (Python is CASE-SENSITIVE!)
Print("Hello")   # Error: NameError: name 'Print' is not defined
PRINT("Hello")   # Error: NameError: name 'PRINT' is not defined
pRiNt("Hello")   # Error: same issue
# ✅ FIX: Always use lowercase 'print'
print("Hello")

# ❌ MISTAKE 4: Missing parentheses (Python 2 style)
print "Hello"
# Error: SyntaxError: Missing parentheses in call to 'print'
# ✅ FIX: Python 3 REQUIRES parentheses
print("Hello")

# ❌ MISTAKE 5: Space inside the function name
prin t("Hello")
# Error: SyntaxError
# ✅ FIX: No spaces in function names
print("Hello")

# ❌ MISTAKE 6: Forgetting to close the parenthesis
print("Hello"
# Error: SyntaxError: unexpected EOF while parsing
# ✅ FIX: Always close what you open
print("Hello")

# ❌ MISTAKE 7: Using the wrong type of quotes (backticks)
print(\`Hello\`)
# Error: SyntaxError (backticks are NOT valid in Python!)
# ✅ FIX: Use single or double quotes only
print("Hello")</code></pre>
                    </div>

                    <h2>String Repetition — A Handy Trick</h2>
                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-language">Python</span>
                            <button class="copy-button" onclick="copyCode(this)">Copy</button>
                        </div>
                        <pre><code class="language-python"># Multiply a string by a number to repeat it!
print("=" * 40)    # 40 equal signs
print("-" * 20)    # 20 dashes
print("*" * 10)    # 10 asterisks
print("abc" * 3)   # Output: abcabcabc
print("Ha" * 5)    # Output: HaHaHaHaHa

# Very useful for creating visual separators:
print("=" * 40)
print("       WELCOME TO PYTHON!")
print("=" * 40)</code></pre>
                    </div>

                    <h2>Your First Real Program — A Personal Introduction</h2>
                    <p>Let's put everything together and write something meaningful:</p>

                    <div class="code-block">
                        <div class="code-header">
                            <span class="code-language">Python — Personal Introduction Card</span>
                            <button class="copy-button" onclick="copyCode(this)">Copy</button>
                        </div>
                        <pre><code class="language-python">"""
My First Python Program
Personal Introduction Card
"""

# ===== HEADER =====
print("=" * 45)
print("          MY INTRODUCTION CARD")
print("=" * 45)

# ===== PERSONAL DETAILS =====
print()  # Blank line for spacing
print("Name:\\t\\tAlex Johnson")
print("Age:\\t\\t16 years old")
print("City:\\t\\tNew York, USA")
print("School:\\t\\tLincoln High School")
print("Hobby:\\t\\tLearning Python!")
print()

# ===== MESSAGE =====
print("-" * 45)
print("I just wrote my first Python program!")
print("This is only the beginning...")
print("Watch out world — a programmer is born!")
print("-" * 45)

# ===== FOOTER =====
print()
print("Contact: alex@email.com")
print("GitHub:  github.com/alexjohnson")
print("=" * 45)</code></pre>
                    </div>

                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Output</span></div>
                        <pre><code>=============================================
          MY INTRODUCTION CARD
=============================================

Name:       Alex Johnson
Age:        16 years old
City:       New York, USA
School:     Lincoln High School
Hobby:      Learning Python!

---------------------------------------------
I just wrote my first Python program!
This is only the beginning...
Watch out world — a programmer is born!
---------------------------------------------

Contact: alex@email.com
GitHub:  github.com/alexjohnson
=============================================</code></pre>
                    </div>

                    <h2>🏋️ Practice Exercises</h2>

                    <div class="story-box">
                        <div class="box-title">Exercise 1 — Easy: Your Introduction</div>
                        <p>Write a program that prints your name, your favorite color, and your favorite food, each on a separate line with a label.</p>
                        <details style="margin-top:10px;">
                            <summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;">
                                <div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">print("Name:          Alex")
print("Favorite color: Blue")
print("Favorite food:  Pizza")</code></pre>
                            </div>
                        </details>
                    </div>

                    <div class="story-box">
                        <div class="box-title">Exercise 2 — Medium: Coffee Shop Receipt</div>
                        <p>Print a formatted receipt for a coffee shop. Include the shop name, 3 items with prices, a separator line, and a total. Use <code>\\t</code> for alignment.</p>
                        <details style="margin-top:10px;">
                            <summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;">
                                <div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">print("=" * 30)
print("      COFFEE CORNER")
print("=" * 30)
print("Espresso\\t\\t$2.50")
print("Croissant\\t\\t$3.00")
print("Orange Juice\\t\\t$4.00")
print("-" * 30)
print("TOTAL\\t\\t\\t$9.50")
print("=" * 30)
print("Thank you! Come again! ☕")</code></pre>
                            </div>
                        </details>
                    </div>

                    <div class="story-box">
                        <div class="box-title">Exercise 3 — Challenge: Star Pattern</div>
                        <p>Print this pattern using only print() statements and the <code>*</code> repetition trick:</p>
                        <pre><code>*
**
***
****
*****
****
***
**
*</code></pre>
                        <details style="margin-top:10px;">
                            <summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;">
                                <div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">print("*" * 1)
print("*" * 2)
print("*" * 3)
print("*" * 4)
print("*" * 5)
print("*" * 4)
print("*" * 3)
print("*" * 2)
print("*" * 1)</code></pre>
                            </div>
                        </details>
                    </div>

                    <div class="story-box">
                        <div class="box-title">Exercise 4 — Expert: Formatted Table</div>
                        <p>Print a formatted table of your 3 favorite movies with their year and rating, using <code>\\t</code> for alignment and <code>=</code> for borders.</p>
                        <details style="margin-top:10px;">
                            <summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;">
                                <div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">print("=" * 50)
print("Movie\\t\\t\\t\\tYear\\tRating")
print("=" * 50)
print("Inception\\t\\t\\t2010\\t9.3/10")
print("The Dark Knight\\t\\t\\t2008\\t9.0/10")
print("Interstellar\\t\\t\\t2014\\t8.6/10")
print("=" * 50)
print("Source: My personal rankings")</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways — What You Mastered</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 1 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ <strong>Python history:</strong> Created by Guido van Rossum in 1989, released 1991, named after Monty Python</li>
                            <li>✅ <strong>print() basics:</strong> Displays any data type to the screen</li>
                            <li>✅ <strong>print() with sep:</strong> Customize the separator between multiple items</li>
                            <li>✅ <strong>print() with end:</strong> Customize what comes after the output (default is newline)</li>
                            <li>✅ <strong>Comments:</strong> <code>#</code> for single-line, <code>"""</code> for multi-line — Python ignores them</li>
                            <li>✅ <strong>Escape sequences:</strong> <code>\\n</code> (newline), <code>\\t</code> (tab), <code>\\\\</code> (backslash), <code>\\"</code> (quote)</li>
                            <li>✅ <strong>String repetition:</strong> <code>"=" * 40</code> repeats a string 40 times</li>
                            <li>✅ <strong>Case sensitivity:</strong> <code>print</code> ≠ <code>Print</code> ≠ <code>PRINT</code></li>
                            <li>✅ <strong>How Python works:</strong> Lexing → Parsing → Compilation → PVM Execution → Garbage Collection</li>
                        </ul>
                    </div>
                `
            }, {
                id: 2,
                title: "Variables - Giving Memory a Name",
                module: "Module 1",
                story: `
                    <h2>📖 The Story of the Sticky Notes</h2>
                    <p>Imagine you're a librarian in a massive library with millions of books. Each book is stored on a shelf at a specific location. To find a book, you'd need to memorize that exact location — impossible!</p>
                    <p>So instead, you put a sticky note on each book with a name: "Python Textbook", "Recipe Book". Now you just say the name and you find it instantly.</p>
                    <p>That's exactly what variables are — <strong>sticky notes on memory locations</strong>. Instead of remembering that your age is stored at memory address <code>0x7fff5fbff790</code>, you just call it <code>age</code>.</p>
                `,
                content: `
                    <h2>What is a Variable?</h2>
                    <p>A variable is a <strong>named reference to a location in memory</strong> where a value is stored. When you create a variable, you're telling Python: "Remember this value and let me access it by this name."</p>

                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># Creating variables
name = "Emma"        # Store text "Emma", call it 'name'
age = 16             # Store number 16, call it 'age'
height = 5.7         # Store decimal 5.7, call it 'height'
is_student = True    # Store True, call it 'is_student'
nothing = None       # Store nothing (None)

# Using variables — just write the name
print(name)          # Output: Emma
print(age)           # Output: 16
print(height)        # Output: 5.7
print(is_student)    # Output: True
print(nothing)       # Output: None</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 What Really Happens in Memory</div>
                        <p>When Python executes <code>age = 16</code>, here's the exact sequence:</p>
                        <ol>
                            <li><strong>Python evaluates the right side first:</strong> It processes <code>16</code> and creates an integer object in heap memory</li>
                            <li><strong>Memory is allocated:</strong> Python finds free space in RAM (e.g. address <code>0x10a3b2c40</code>) and stores the object there</li>
                            <li><strong>A name binding is created:</strong> Python adds an entry to its namespace: <code>{"age": 0x10a3b2c40}</code></li>
                            <li><strong>When you use <code>age</code>:</strong> Python looks up "age" in the namespace, finds the address, and retrieves the value 16</li>
                        </ol>
                        <div class="code-block">
                            <div class="code-header"><span class="code-language">Python — id() shows memory address</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                            <pre><code class="language-python">age = 16
print(id(age))    # e.g. 140234567890 — the actual memory address!

# Two variables pointing to the SAME object (Python optimization):
x = 5
y = 5
print(id(x) == id(y))  # True! Python caches small integers (-5 to 256)</code></pre>
                        </div>
                    </div>

                    <h2>The Assignment Operator =</h2>
                    <p>The <code>=</code> sign in Python does NOT mean "equals" like in math. It means <strong>"assign"</strong> — store the value on the right into the variable on the left.</p>

                    <div class="story-box">
                        <div class="box-title">🎭 Assignment vs Equality</div>
                        <table style="width:100%;border-collapse:collapse;margin-top:10px;">
                            <tr style="background:rgba(102,126,234,0.2);">
                                <th style="padding:10px;text-align:left;border:1px solid rgba(255,255,255,0.1);">Symbol</th>
                                <th style="padding:10px;text-align:left;border:1px solid rgba(255,255,255,0.1);">Meaning</th>
                                <th style="padding:10px;text-align:left;border:1px solid rgba(255,255,255,0.1);">Example</th>
                            </tr>
                            <tr>
                                <td style="padding:10px;border:1px solid rgba(255,255,255,0.1);"><code>=</code></td>
                                <td style="padding:10px;border:1px solid rgba(255,255,255,0.1);">Assignment (store a value)</td>
                                <td style="padding:10px;border:1px solid rgba(255,255,255,0.1);"><code>x = 5</code> → put 5 into x</td>
                            </tr>
                            <tr style="background:rgba(255,255,255,0.03);">
                                <td style="padding:10px;border:1px solid rgba(255,255,255,0.1);"><code>==</code></td>
                                <td style="padding:10px;border:1px solid rgba(255,255,255,0.1);">Equality check (compare)</td>
                                <td style="padding:10px;border:1px solid rgba(255,255,255,0.1);"><code>x == 5</code> → is x equal to 5?</td>
                            </tr>
                        </table>
                    </div>

                    <h2>Augmented Assignment Operators</h2>
                    <p>Shorthand operators that combine math with assignment — used constantly in real code:</p>

                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">score = 100

score += 10       # score = score + 10  → 110
score -= 5        # score = score - 5   → 105
score *= 2        # score = score * 2   → 210
score /= 2        # score = score / 2   → 105.0
score //= 10      # score = score // 10 → 10.0
score **= 2       # score = score ** 2  → 100.0
score %= 7        # score = score % 7   → 2.0

# Works with strings too!
greeting = "Hello"
greeting += " World"   # "Hello World"
greeting *= 2          # "Hello WorldHello World"</code></pre>
                    </div>

                    <h2>Multiple Assignment</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># Assign multiple variables at once
x, y, z = 1, 2, 3
print(x, y, z)    # Output: 1 2 3

# Same value to multiple variables
a = b = c = 0
print(a, b, c)    # Output: 0 0 0

# Swap two variables — no temp variable needed!
first = "Alice"
second = "Bob"
first, second = second, first
print(first, second)   # Output: Bob Alice

# Unpack a list
coords = [10, 20, 30]
x, y, z = coords
print(x, y, z)    # Output: 10 20 30</code></pre>
                    </div>

                    <h2>Checking Variable Type</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">name = "Alex"
age = 25
height = 5.9
is_active = True

print(type(name))      # <class 'str'>
print(type(age))       # <class 'int'>
print(type(height))    # <class 'float'>
print(type(is_active)) # <class 'bool'>

# isinstance() — check if a variable is a specific type
print(isinstance(age, int))    # True
print(isinstance(name, str))   # True
print(isinstance(age, float))  # False</code></pre>
                    </div>

                    <h2>Variable Naming Rules</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># ✅ VALID variable names
name = "Alex"
_private = "hidden"      # underscore prefix = private convention
my_var = "snake_case"    # ✅ Preferred Python style (PEP 8)
var123 = "numbers ok"    # Numbers OK if not at start
CONSTANT = 3.14159       # ALL_CAPS = constants convention

# ❌ INVALID — these cause SyntaxError:
# 123var = "starts with number"
# my-var = "has hyphen"
# my var = "has space"
# class = "reserved keyword"
# for = "reserved keyword"</code></pre>
                    </div>

                    <div class="tip-box">
                        <div class="box-title">💡 Python Naming Conventions (PEP 8)</div>
                        <table style="width:100%;border-collapse:collapse;margin-top:10px;">
                            <tr style="background:rgba(102,126,234,0.2);">
                                <th style="padding:8px;text-align:left;border:1px solid rgba(255,255,255,0.1);">Type</th>
                                <th style="padding:8px;text-align:left;border:1px solid rgba(255,255,255,0.1);">Convention</th>
                                <th style="padding:8px;text-align:left;border:1px solid rgba(255,255,255,0.1);">Example</th>
                            </tr>
                            <tr><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Regular variable</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">snake_case</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>user_name</code></td></tr>
                            <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Constant</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">ALL_CAPS</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>MAX_SPEED = 300</code></td></tr>
                            <tr><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Class name</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">PascalCase</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>UserProfile</code></td></tr>
                        </table>
                    </div>

                    <h2>Common Mistakes</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Errors & Fixes</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># ❌ Using variable before creating it
print(score)   # NameError: name 'score' is not defined
# ✅ FIX: Create first
score = 0
print(score)

# ❌ Typo in variable name
user_name = "Alex"
print(username)  # NameError: 'username' not defined
# ✅ FIX: Exact spelling
print(user_name)

# ❌ Confusing = with ==
if x = 5:   # SyntaxError!
# ✅ FIX: Use == for comparison
if x == 5:
    pass

# ❌ Case sensitivity confusion
Age = 25
print(age)   # NameError! Age ≠ age
# ✅ FIX: Consistent lowercase
age = 25</code></pre>
                    </div>

                    <h2>🏋️ Practice Exercises</h2>
                    <div class="story-box">
                        <div class="box-title">Exercise 1 — Easy: Student Profile</div>
                        <p>Create variables for a student: name, age, grade (A/B/C), GPA, is_honor_student. Print all with labels.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">student_name = "Emma Johnson"
student_age = 16
student_grade = "A"
student_gpa = 3.9
is_honor_student = True

print("Name:", student_name)
print("Age:", student_age)
print("Grade:", student_grade)
print("GPA:", student_gpa)
print("Honor Student:", is_honor_student)</code></pre>
                            </div>
                        </details>
                    </div>

                    <div class="story-box">
                        <div class="box-title">Exercise 2 — Medium: Score Tracker</div>
                        <p>Start score at 0. Use augmented assignment to: add 50, multiply by 2, subtract 30. Print after each step.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">score = 0
print("Start:", score)      # 0
score += 50
print("After +50:", score)  # 50
score *= 2
print("After x2:", score)   # 100
score -= 30
print("After -30:", score)  # 70</code></pre>
                            </div>
                        </details>
                    </div>

                    <div class="story-box">
                        <div class="box-title">Exercise 3 — Challenge: Variable Swap</div>
                        <p>Create <code>a = "Hello"</code> and <code>b = "World"</code>. Swap their values WITHOUT a third variable.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">a = "Hello"
b = "World"
print("Before:", a, b)   # Hello World
a, b = b, a              # Python tuple swap!
print("After:", a, b)    # World Hello</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 2 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ Variables are named references to memory locations</li>
                            <li>✅ <code>=</code> is assignment (store), <code>==</code> is comparison</li>
                            <li>✅ Augmented operators: +=, -=, *=, /=, //=, **=, %=</li>
                            <li>✅ Multiple assignment: <code>x, y = 1, 2</code> and <code>a = b = c = 0</code></li>
                            <li>✅ Variable swap: <code>a, b = b, a</code> — no temp variable needed</li>
                            <li>✅ <code>type()</code> checks type, <code>id()</code> shows memory address</li>
                            <li>✅ Naming: snake_case for variables, ALL_CAPS for constants</li>
                        </ul>
                    </div>
                `
            }, {
                id: 3,
                title: "Data Types - Different Kinds of Information",
                module: "Module 1",
                story: `
                    <h2>📖 The Story of the Post Office</h2>
                    <p>Imagine working at a post office. Letters, packages, fragile items, and frozen food all need different handling. You wouldn't ship ice cream in a regular envelope, right?</p>
                    <p>Python works the same way. It has different <strong>data types</strong> for different kinds of information. Each type has its own rules, capabilities, and memory requirements. Understanding types is fundamental to writing correct Python code.</p>
                `,
                content: `
                    <h2>Python's Core Data Types</h2>
                    <p>Python has 5 fundamental built-in data types you'll use constantly:</p>

                    <div class="story-box">
                        <div class="box-title">📊 The 5 Core Types at a Glance</div>
                        <table style="width:100%;border-collapse:collapse;margin-top:10px;">
                            <tr style="background:rgba(102,126,234,0.2);">
                                <th style="padding:10px;text-align:left;border:1px solid rgba(255,255,255,0.1);">Type</th>
                                <th style="padding:10px;text-align:left;border:1px solid rgba(255,255,255,0.1);">Keyword</th>
                                <th style="padding:10px;text-align:left;border:1px solid rgba(255,255,255,0.1);">Example</th>
                                <th style="padding:10px;text-align:left;border:1px solid rgba(255,255,255,0.1);">Use for</th>
                            </tr>
                            <tr><td style="padding:10px;border:1px solid rgba(255,255,255,0.1);">Integer</td><td style="padding:10px;border:1px solid rgba(255,255,255,0.1);"><code>int</code></td><td style="padding:10px;border:1px solid rgba(255,255,255,0.1);"><code>42</code></td><td style="padding:10px;border:1px solid rgba(255,255,255,0.1);">Whole numbers</td></tr>
                            <tr style="background:rgba(255,255,255,0.03);"><td style="padding:10px;border:1px solid rgba(255,255,255,0.1);">Float</td><td style="padding:10px;border:1px solid rgba(255,255,255,0.1);"><code>float</code></td><td style="padding:10px;border:1px solid rgba(255,255,255,0.1);"><code>3.14</code></td><td style="padding:10px;border:1px solid rgba(255,255,255,0.1);">Decimal numbers</td></tr>
                            <tr><td style="padding:10px;border:1px solid rgba(255,255,255,0.1);">String</td><td style="padding:10px;border:1px solid rgba(255,255,255,0.1);"><code>str</code></td><td style="padding:10px;border:1px solid rgba(255,255,255,0.1);"><code>"Hello"</code></td><td style="padding:10px;border:1px solid rgba(255,255,255,0.1);">Text</td></tr>
                            <tr style="background:rgba(255,255,255,0.03);"><td style="padding:10px;border:1px solid rgba(255,255,255,0.1);">Boolean</td><td style="padding:10px;border:1px solid rgba(255,255,255,0.1);"><code>bool</code></td><td style="padding:10px;border:1px solid rgba(255,255,255,0.1);"><code>True</code></td><td style="padding:10px;border:1px solid rgba(255,255,255,0.1);">Yes/No decisions</td></tr>
                            <tr><td style="padding:10px;border:1px solid rgba(255,255,255,0.1);">None</td><td style="padding:10px;border:1px solid rgba(255,255,255,0.1);"><code>NoneType</code></td><td style="padding:10px;border:1px solid rgba(255,255,255,0.1);"><code>None</code></td><td style="padding:10px;border:1px solid rgba(255,255,255,0.1);">Absence of value</td></tr>
                        </table>
                    </div>

                    <h2>1. Integers (int) — Whole Numbers</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">age = 25
score = -100
population = 8_000_000_000   # Underscores for readability!
year = 2024

print(type(age))         # <class 'int'>
print(type(population))  # <class 'int'>

# Python integers have UNLIMITED size (unlike most languages!)
huge = 10 ** 100   # 10 to the power of 100 — no overflow!
print(huge)        # 100 zeros!

# Integer bases
binary = 0b1010    # Binary (base 2)  → 10
octal  = 0o17      # Octal (base 8)   → 15
hex_n  = 0xFF      # Hex (base 16)    → 255
print(binary, octal, hex_n)   # Output: 10 15 255</code></pre>
                    </div>

                    <h2>2. Floats (float) — Decimal Numbers</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">price = 19.99
pi = 3.14159265358979
tiny = 0.0001
negative = -273.15   # Absolute zero in Celsius

print(type(price))   # <class 'float'>

# Scientific notation
speed = 3e8          # 3 × 10^8 = 300,000,000 (speed of light)
tiny2 = 1.5e-10      # 1.5 × 10^-10

# ⚠️ Floating point precision issue (famous gotcha!)
print(0.1 + 0.2)     # Output: 0.30000000000000004 (not 0.3!)
# This is because floats use binary representation (IEEE 754)
# Fix: use round() or the decimal module
print(round(0.1 + 0.2, 2))   # Output: 0.3</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 Why 0.1 + 0.2 ≠ 0.3</div>
                        <p>Floats are stored using <strong>IEEE 754 binary format</strong>. Just like 1/3 = 0.333... can't be written exactly in decimal, 0.1 can't be written exactly in binary. It becomes 0.1000000000000000055511151231257827021181583404541015625...</p>
                        <p>This is a fundamental limitation of floating-point arithmetic in ALL programming languages, not just Python. Always use <code>round()</code> when displaying floats to users.</p>
                    </div>

                    <h2>3. Strings (str) — Text</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># Three ways to create strings
single = 'Hello'
double = "World"
triple = """This is a
multi-line string
that spans multiple lines"""

print(type(single))   # <class 'str'>

# Strings are sequences of characters
name = "Python"
print(len(name))      # Output: 6 (number of characters)
print(name[0])        # Output: P (first character)
print(name[-1])       # Output: n (last character)

# String concatenation
first = "Hello"
second = "World"
combined = first + " " + second
print(combined)       # Output: Hello World

# String repetition
print("Ha" * 3)       # Output: HaHaHa</code></pre>
                    </div>

                    <h2>4. Booleans (bool) — True or False</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">is_sunny = True
is_raining = False
game_over = True

print(type(is_sunny))   # <class 'bool'>

# Booleans are actually integers! True=1, False=0
print(True + True)    # Output: 2
print(True * 5)       # Output: 5
print(False + 10)     # Output: 10

# Comparison operations return booleans
print(5 > 3)          # True
print(10 == 10)       # True
print("a" == "b")     # False</code></pre>
                    </div>

                    <h2>5. None — The Absence of Value</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">result = None        # No value yet
user_input = None    # Will be filled later

print(result)        # Output: None
print(type(result))  # <class 'NoneType'>

# Check for None using 'is' (not ==)
if result is None:
    print("No result yet")

# None is falsy
print(bool(None))    # Output: False</code></pre>
                    </div>

                    <h2>Type Conversion — Changing Between Types</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Explicit Conversion</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># str → int
age_text = "25"
age_num = int(age_text)
print(age_num + 5)     # Output: 30

# int → str
score = 100
score_text = str(score)
print("Score: " + score_text)   # Output: Score: 100

# int → float
whole = 7
decimal = float(whole)
print(decimal)          # Output: 7.0

# float → int (truncates decimal part!)
pi = 3.99
pi_int = int(pi)
print(pi_int)           # Output: 3 (NOT rounded, just truncated!)

# str → float
price_text = "19.99"
price = float(price_text)
print(price * 2)        # Output: 39.98

# Anything → bool (truthy/falsy)
print(bool(0))          # False
print(bool(1))          # True
print(bool(-5))         # True (any non-zero number)
print(bool(""))         # False (empty string)
print(bool("Hello"))    # True (non-empty string)
print(bool(None))       # False</code></pre>
                    </div>

                    <div class="tip-box">
                        <div class="box-title">💡 Truthy and Falsy Values</div>
                        <p>In Python, every value is either "truthy" (acts like True) or "falsy" (acts like False) in a boolean context:</p>
                        <p><strong>Falsy values:</strong> <code>0</code>, <code>0.0</code>, <code>""</code>, <code>[]</code>, <code>{}</code>, <code>()</code>, <code>None</code>, <code>False</code></p>
                        <p><strong>Everything else is truthy</strong> — non-zero numbers, non-empty strings, non-empty collections, <code>True</code></p>
                    </div>

                    <h2>Common Type Errors</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Errors & Fixes</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># ❌ Can't add string and number directly
age = 25
print("I am " + age + " years old")
# TypeError: can only concatenate str (not "int") to str
# ✅ FIX: Convert to string first
print("I am " + str(age) + " years old")
# OR use f-string (best way):
print(f"I am {age} years old")

# ❌ Can't convert non-numeric string to int
int("Hello")   # ValueError: invalid literal for int()
# ✅ FIX: Only convert numeric strings
int("42")      # Works!

# ❌ int() truncates, doesn't round
int(3.99)      # Returns 3, not 4!
# ✅ FIX: Use round() first if you want rounding
round(3.99)    # Returns 4</code></pre>
                    </div>

                    <h2>🏋️ Practice Exercises</h2>
                    <div class="story-box">
                        <div class="box-title">Exercise 1 — Easy: Type Detective</div>
                        <p>Create one variable of each type (int, float, str, bool, None) and print both the value and its type using <code>type()</code>.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">my_int = 42
my_float = 3.14
my_str = "Python"
my_bool = True
my_none = None

print(my_int, type(my_int))
print(my_float, type(my_float))
print(my_str, type(my_str))
print(my_bool, type(my_bool))
print(my_none, type(my_none))</code></pre>
                            </div>
                        </details>
                    </div>

                    <div class="story-box">
                        <div class="box-title">Exercise 2 — Medium: Type Conversion Chain</div>
                        <p>Start with the string <code>"42"</code>. Convert it to int, then to float, then multiply by 2.5, then convert back to int, then to string. Print each step.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">start = "42"
print("String:", start, type(start))

as_int = int(start)
print("Int:", as_int, type(as_int))

as_float = float(as_int)
print("Float:", as_float, type(as_float))

multiplied = as_float * 2.5
print("Multiplied:", multiplied, type(multiplied))

as_int2 = int(multiplied)
print("Back to int:", as_int2, type(as_int2))

as_str = str(as_int2)
print("Back to str:", as_str, type(as_str))</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 3 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ <strong>int</strong>: whole numbers, unlimited size, supports binary/octal/hex</li>
                            <li>✅ <strong>float</strong>: decimals, IEEE 754 format, 0.1+0.2 ≠ 0.3 (use round())</li>
                            <li>✅ <strong>str</strong>: text in quotes, sequences of characters</li>
                            <li>✅ <strong>bool</strong>: True/False, actually integers (True=1, False=0)</li>
                            <li>✅ <strong>None</strong>: absence of value, check with <code>is None</code></li>
                            <li>✅ Type conversion: int(), float(), str(), bool()</li>
                            <li>✅ Truthy/Falsy: 0, "", [], {}, None, False are falsy; everything else is truthy</li>
                        </ul>
                    </div>
                `
            },
            {
                id: 4,
                title: "Math Operations - Python as a Calculator",
                module: "Module 1",
                story: `
                    <h2>📖 The Story of the Swiss Army Knife</h2>
                    <p>A Swiss Army knife has many tools in one: a blade, scissors, screwdriver, can opener. You pick the right tool for the job.</p>
                    <p>Python's math operators are your Swiss Army knife for numbers. Addition, subtraction, multiplication — but also powerful tools like floor division, modulo, and exponentiation that most calculators don't even have.</p>
                `,
                content: `
                    <h2>The 7 Arithmetic Operators</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — All Arithmetic Operators</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">a = 17
b = 5

print(a + b)    # Addition       → 22
print(a - b)    # Subtraction    → 12
print(a * b)    # Multiplication → 85
print(a / b)    # Division       → 3.4  (always returns float!)
print(a // b)   # Floor Division → 3    (rounds DOWN to nearest int)
print(a % b)    # Modulo         → 2    (remainder after division)
print(a ** b)   # Exponentiation → 1419857</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 Floor Division vs Regular Division</div>
                        <p><code>17 / 5 = 3.4</code> — regular division, always returns a float</p>
                        <p><code>17 // 5 = 3</code> — floor division, returns the integer part</p>
                        <p>Think of floor division as: "How many complete times does 5 fit into 17?" Answer: 3 times (with 2 left over)</p>
                        <div class="code-block">
                            <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                            <pre><code class="language-python">print(7 // 2)     # 3 (not 3.5)
print(-7 // 2)    # -4 (floors toward negative infinity)
print(7.5 // 2)   # 3.0 (works with floats, returns float)</code></pre>
                        </div>
                    </div>

                    <h2>The Modulo Operator % — The Remainder</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Modulo Use Cases</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">print(10 % 3)    # 1  (10 = 3×3 + 1)
print(15 % 5)    # 0  (perfectly divisible)
print(7 % 2)     # 1  (7 is odd)
print(8 % 2)     # 0  (8 is even)

# Check if number is even or odd
number = 42
if number % 2 == 0:
    print(f"{number} is even")
else:
    print(f"{number} is odd")

# Wrap around (like a clock)
hour = 25
clock_hour = hour % 12   # 1 (25 o'clock = 1 o'clock)
print(f"Hour {hour} on 12-hour clock: {clock_hour}")</code></pre>
                    </div>

                    <h2>Operator Precedence — PEMDAS</h2>
                    <div class="story-box">
                        <div class="box-title">📐 Order of Operations</div>
                        <table style="width:100%;border-collapse:collapse;margin-top:10px;">
                            <tr style="background:rgba(102,126,234,0.2);">
                                <th style="padding:8px;text-align:left;border:1px solid rgba(255,255,255,0.1);">Priority</th>
                                <th style="padding:8px;text-align:left;border:1px solid rgba(255,255,255,0.1);">Operator</th>
                                <th style="padding:8px;text-align:left;border:1px solid rgba(255,255,255,0.1);">Name</th>
                            </tr>
                            <tr><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">1 (highest)</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>()</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Parentheses</td></tr>
                            <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">2</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>**</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Exponentiation</td></tr>
                            <tr><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">3</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>* / // %</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Multiply/Divide</td></tr>
                            <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">4 (lowest)</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>+ -</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Add/Subtract</td></tr>
                        </table>
                        <div class="code-block" style="margin-top:12px;">
                            <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                            <pre><code class="language-python">print(2 + 3 * 4)      # 14, not 20! (* before +)
print((2 + 3) * 4)    # 20  (parentheses first)
print(2 ** 3 ** 2)    # 512 (right-associative: 2**(3**2))
print(10 - 3 + 2)     # 9   (left to right)</code></pre>
                        </div>
                    </div>

                    <h2>The math Module</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — math module</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">import math

print(math.pi)           # 3.141592653589793
print(math.e)            # 2.718281828459045
print(math.floor(3.7))   # 3 (round DOWN)
print(math.ceil(3.2))    # 4 (round UP)
print(round(3.14159, 2)) # 3.14
print(math.sqrt(16))     # 4.0
print(abs(-42))          # 42
print(math.log(100, 10)) # 2.0 (log base 10)
print(math.sin(math.pi / 2))   # 1.0</code></pre>
                    </div>

                    <h2>Practical Math Examples</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Real-World Math</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">import math

# Circle area
radius = 5
area = math.pi * radius ** 2
print(f"Circle area: {area:.2f}")   # 78.54

# Compound interest
principal = 1000
rate = 0.05
years = 10
amount = principal * (1 + rate) ** years
print(f"After {years} years: \${amount:.2f}")   # $1628.89

# Celsius to Fahrenheit
celsius = 100
fahrenheit = (celsius * 9/5) + 32
print(f"{celsius}°C = {fahrenheit}°F")   # 212.0°F

# Pythagorean theorem
a, b = 3, 4
hypotenuse = math.sqrt(a**2 + b**2)
print(f"Hypotenuse: {hypotenuse}")   # 5.0</code></pre>
                    </div>

                    <h2>Common Mistakes</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Errors & Fixes</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># ❌ Division always returns float
result = 10 / 2
print(type(result))  # float — it's 5.0, not 5!
# ✅ Use // for integer
result = 10 // 2     # 5 (int)

# ❌ ZeroDivisionError
print(10 / 0)   # ZeroDivisionError!
# ✅ Check before dividing
divisor = 0
if divisor != 0:
    print(10 / divisor)

# ❌ Forgetting precedence
average = 10 + 20 / 2   # 20.0, not 15!
# ✅ Use parentheses
average = (10 + 20) / 2  # 15.0</code></pre>
                    </div>

                    <h2>🏋️ Practice Exercises</h2>
                    <div class="story-box">
                        <div class="box-title">Exercise 1 — Easy: All Operators</div>
                        <p>Create <code>x = 15</code> and <code>y = 4</code>. Print the result of all 7 arithmetic operations with labels.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">x, y = 15, 4
print(f"Addition:       {x} + {y} = {x + y}")
print(f"Subtraction:    {x} - {y} = {x - y}")
print(f"Multiplication: {x} * {y} = {x * y}")
print(f"Division:       {x} / {y} = {x / y}")
print(f"Floor Division: {x} // {y} = {x // y}")
print(f"Modulo:         {x} % {y} = {x % y}")
print(f"Exponentiation: {x} ** {y} = {x ** y}")</code></pre>
                            </div>
                        </details>
                    </div>

                    <div class="story-box">
                        <div class="box-title">Exercise 2 — Medium: Time Converter</div>
                        <p>Given <code>total_seconds = 3661</code>, convert to hours, minutes, and seconds using // and %.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">total_seconds = 3661
hours = total_seconds // 3600
remaining = total_seconds % 3600
minutes = remaining // 60
seconds = remaining % 60
print(f"{hours} hour(s), {minutes} minute(s), {seconds} second(s)")</code></pre>
                            </div>
                        </details>
                    </div>

                    <div class="story-box">
                        <div class="box-title">Exercise 3 — Challenge: Geometry Calculator</div>
                        <p>Using math module: area of circle (r=7), volume of sphere (r=5), hypotenuse of right triangle (a=8, b=15).</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">import math
print(f"Circle area (r=7): {math.pi * 7**2:.2f}")
print(f"Sphere volume (r=5): {(4/3) * math.pi * 5**3:.2f}")
print(f"Hypotenuse (8,15): {math.sqrt(8**2 + 15**2):.2f}")</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 4 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ 7 operators: +, -, *, /, //, %, **</li>
                            <li>✅ <code>/</code> always returns float; <code>//</code> floors toward negative infinity</li>
                            <li>✅ <code>%</code> gives remainder — great for even/odd checks and wrapping</li>
                            <li>✅ Precedence: () → ** → * / // % → + -</li>
                            <li>✅ math module: sqrt, ceil, floor, pi, e, log, sin, cos</li>
                        </ul>
                    </div>
                `
            },
            {
                id: 5,
                title: "String Magic - Working with Text",
                module: "Module 1",
                story: `
                    <h2>📖 The Story of the Magic Necklace</h2>
                    <p>Imagine a necklace made of letter beads. Each bead is a character. You can count the beads, pick specific beads by position, cut the necklace into pieces, or join two necklaces together.</p>
                    <p>Python strings work exactly like this. A string is a <strong>sequence of characters</strong>, and Python gives you an incredible toolkit to manipulate them. Strings are one of the most-used data types in all of programming.</p>
                `,
                content: `
                    <h2>Creating Strings</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">single = 'Hello'
double = "World"
multi = """This is a
multi-line string"""

# Use double quotes when string contains apostrophe
message = "It's a beautiful day"

empty = ""
print(len(empty))   # 0</code></pre>
                    </div>

                    <h2>String Indexing — Accessing Characters</h2>
                    <p>Every character has a position (index). Python uses <strong>zero-based indexing</strong>:</p>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">name = "Python"
#        P  y  t  h  o  n
# Index: 0  1  2  3  4  5
# Neg:  -6 -5 -4 -3 -2 -1

print(name[0])    # P  (first character)
print(name[-1])   # n  (last character)
print(name[-2])   # o  (second to last)
print(len(name))  # 6</code></pre>
                    </div>

                    <h2>String Slicing</h2>
                    <p>Extract a portion using <code>[start:stop:step]</code>:</p>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">text = "Hello, World!"

print(text[0:5])    # "Hello"   (stop is exclusive)
print(text[7:12])   # "World"
print(text[:5])     # "Hello"   (from start)
print(text[7:])     # "World!"  (to end)
print(text[-6:])    # "World!" (last 6 chars)
print(text[::2])    # "Hlo ol!" (every 2nd char)
print(text[::-1])   # "!dlroW ,olleH" (REVERSED!)</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 Strings are Immutable</div>
                        <p>You CANNOT change individual characters — strings are <strong>immutable</strong>:</p>
                        <div class="code-block">
                            <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                            <pre><code class="language-python">name = "Python"
# name[0] = "J"   # ❌ TypeError!

# ✅ Create a new string instead:
name = "J" + name[1:]   # "Jython"

# Why immutable? Safety and performance:
# Python can cache and reuse string objects (string interning)</code></pre>
                        </div>
                    </div>

                    <h2>Essential String Methods</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Case Methods</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">text = "Hello, World!"
print(text.upper())        # "HELLO, WORLD!"
print(text.lower())        # "hello, world!"
print(text.title())        # "Hello, World!"
print(text.capitalize())   # "Hello, world!"
print(text.swapcase())     # "hELLO, wORLD!"</code></pre>
                    </div>

                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Search Methods</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">text = "Hello, World! Hello!"
print(text.find("Hello"))     # 0  (first occurrence index)
print(text.find("Python"))    # -1 (not found)
print(text.count("Hello"))    # 2
print(text.startswith("He"))  # True
print(text.endswith("!"))     # True
print("Hello" in text)        # True</code></pre>
                    </div>

                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Modify Methods</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">text = "  Hello, World!  "
print(text.strip())     # "Hello, World!"
print(text.lstrip())    # "Hello, World!  "
print(text.rstrip())    # "  Hello, World!"

msg = "I love cats. Cats are great!"
print(msg.replace("cats", "dogs"))    # "I love dogs. Cats are great!"

sentence = "Python is awesome"
words = sentence.split()         # ["Python", "is", "awesome"]
joined = " ".join(words)         # "Python is awesome"

csv = "apple,banana,cherry"
fruits = csv.split(",")          # ["apple", "banana", "cherry"]
print(",".join(fruits))          # "apple,banana,cherry"</code></pre>
                    </div>

                    <h2>F-Strings — The Modern Way to Format</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — F-Strings</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">name = "Alice"
age = 25
gpa = 3.876543

print(f"My name is {name} and I am {age} years old.")
print(f"Next year I'll be {age + 1}")
print(f"GPA: {gpa:.2f}")          # 3.88 (2 decimal places)
print(f"Age: {age:05d}")          # 00025 (zero-padded)
print(f"Name: {name:>10}")        # right-aligned in 10 chars
print(f"Name: {name:^10}")        # centered in 10 chars

population = 8000000000
print(f"Population: {population:,}")   # 8,000,000,000

score = 0.875
print(f"Score: {score:.1%}")           # 87.5%</code></pre>
                    </div>

                    <h2>String Checking Methods</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">print("123".isdigit())       # True
print("abc".isalpha())       # True
print("abc123".isalnum())    # True
print("  ".isspace())        # True
print("HELLO".isupper())     # True
print("hello".islower())     # True
print("Hello World".istitle()) # True</code></pre>
                    </div>

                    <h2>Common Mistakes</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Errors & Fixes</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># ❌ IndexError
name = "Hi"
# print(name[5])   # IndexError!
# ✅ Check length first
if len(name) > 5:
    print(name[5])

# ❌ Concatenating string with non-string
age = 25
# print("Age: " + age)   # TypeError!
# ✅ Use f-string
print(f"Age: {age}")

# ❌ Case-sensitive comparison
user_input = "YES"
if user_input.lower() == "yes":   # ✅ Normalize first
    print("User said yes")</code></pre>
                    </div>

                    <h2>🏋️ Practice Exercises</h2>
                    <div class="story-box">
                        <div class="box-title">Exercise 1 — Easy: String Inspector</div>
                        <p>Given <code>text = "Python Programming"</code>, print: length, first char, last char, uppercase, and whether it starts with "Python".</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">text = "Python Programming"
print("Length:", len(text))
print("First:", text[0])
print("Last:", text[-1])
print("Upper:", text.upper())
print("Starts with Python:", text.startswith("Python"))</code></pre>
                            </div>
                        </details>
                    </div>

                    <div class="story-box">
                        <div class="box-title">Exercise 2 — Medium: Name Formatter</div>
                        <p>Given <code>full_name = "  john doe  "</code>, strip whitespace, title-case it, split into first/last name, and print a formatted greeting.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">full_name = "  john doe  "
clean = full_name.strip().title()
first, last = clean.split()
print(f"Hello, {first} {last}! Welcome to Python.")
print(f"Initials: {first[0]}.{last[0]}.")</code></pre>
                            </div>
                        </details>
                    </div>

                    <div class="story-box">
                        <div class="box-title">Exercise 3 — Challenge: Palindrome Checker</div>
                        <p>Check if words are palindromes (reads same forwards and backwards). Test: "racecar", "hello", "level".</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">words = ["racecar", "hello", "level", "python", "madam"]
for word in words:
    is_pal = word == word[::-1]
    print(f"{word}: {'✅ palindrome' if is_pal else '❌ not palindrome'}")</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 5 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ Strings are immutable sequences of characters</li>
                            <li>✅ Indexing: <code>s[0]</code> first, <code>s[-1]</code> last</li>
                            <li>✅ Slicing: <code>s[start:stop:step]</code>, <code>s[::-1]</code> reverses</li>
                            <li>✅ Case: upper(), lower(), title(), capitalize()</li>
                            <li>✅ Search: find(), count(), startswith(), endswith(), in</li>
                            <li>✅ Modify: strip(), replace(), split(), join()</li>
                            <li>✅ F-strings: <code>f"Hello {name}"</code> with format specifiers like <code>:.2f</code></li>
                        </ul>
                    </div>
                `

            },
            {
                id: 6,
                title: "User Input - Making Programs Interactive",
                module: "Module 1",
                story: `
                    <h2>📖 The Story of the Conversation</h2>
                    <p>So far, your programs have been monologues — they speak but never listen. Real programs are conversations. They ask questions, wait for answers, and respond intelligently.</p>
                    <p>The <code>input()</code> function is how Python listens. It pauses your program, shows a prompt, waits for the user to type something and press Enter, then gives you what they typed as a string.</p>
                `,
                content: `
                    <h2>The input() Function</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># input() always returns a STRING
name = input("What is your name? ")
print(f"Hello, {name}!")

city = input("Which city do you live in? ")
print(f"Ah, {city}! Great place.")</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 Critical: input() ALWAYS Returns a String</div>
                        <p>This is the #1 mistake beginners make. No matter what the user types — "42", "3.14", "True" — <code>input()</code> always gives you a <strong>string</strong>.</p>
                        <div class="code-block">
                            <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                            <pre><code class="language-python">age = input("Enter your age: ")   # User types: 25
print(type(age))                  # str — it's "25", not 25!
# print(age + 1)                  # TypeError!

# ✅ ALWAYS convert input to the right type:
age = int(input("Enter your age: "))
print(type(age))     # int
print(age + 1)       # Works! 26</code></pre>
                        </div>
                    </div>

                    <h2>Converting Input to Different Types</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># Get an integer
age = int(input("Enter your age: "))
print(f"In 10 years you'll be {age + 10}")

# Get a float
price = float(input("Enter price: $"))
tax = price * 0.08
print(f"With tax: \${price + tax:.2f}")

# Get a boolean (manual conversion)
answer = input("Are you a student? (yes/no): ")
is_student = answer.lower() == "yes"
print(f"Student: {is_student}")

# Get multiple values on one line
coords = input("Enter x and y (space-separated): ")
x, y = coords.split()
x, y = int(x), int(y)
print(f"x={x}, y={y}")</code></pre>
                    </div>

                    <h2>Input Validation — Handling Bad Input</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Safe Input with try/except</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">while True:
    try:
        age = int(input("Enter your age: "))
        if age < 0 or age > 150:
            print("Please enter a realistic age (0-150)")
            continue
        break   # Valid input, exit loop
    except ValueError:
        print("That's not a valid number! Please try again.")

print(f"Your age is: {age}")</code></pre>
                    </div>

                    <h2>Building Interactive Programs</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Interactive Calculator</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">print("=" * 40)
print("    SIMPLE CALCULATOR")
print("=" * 40)

num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

print(f"\\n{num1} + {num2} = {num1 + num2}")
print(f"{num1} - {num2} = {num1 - num2}")
print(f"{num1} * {num2} = {num1 * num2}")

if num2 != 0:
    print(f"{num1} / {num2} = {num1 / num2:.4f}")
else:
    print("Division by zero is not allowed!")

print("=" * 40)</code></pre>
                    </div>

                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Personal Profile Builder</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">print("Welcome to Profile Builder!")
print("-" * 30)

name = input("Full name: ").strip().title()
age = int(input("Age: "))
city = input("City: ").strip()
hobby = input("Favorite hobby: ").strip()

print("\\n" + "=" * 30)
print("YOUR PROFILE")
print("=" * 30)
print(f"Name:  {name}")
print(f"Age:   {age} years old")
print(f"City:  {city}")
print(f"Hobby: {hobby}")
print(f"\\nHi {name.split()[0]}! Nice to meet you!")</code></pre>
                    </div>

                    <h2>Common Mistakes</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Errors & Fixes</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># ❌ Forgetting to convert input
score = input("Enter score: ")
# total = score + 10   # TypeError!
# ✅ Convert immediately
score = int(input("Enter score: "))
total = score + 10   # Works!

# ❌ Not handling invalid input
# age = int(input("Age: "))  # Crashes if user types "abc"
# ✅ Use try/except
try:
    age = int(input("Age: "))
except ValueError:
    print("Please enter a valid number")

# ❌ Forgetting to strip whitespace
name = input("Name: ").strip()   # ✅ Always strip!</code></pre>
                    </div>

                    <h2>🏋️ Practice Exercises</h2>
                    <div class="story-box">
                        <div class="box-title">Exercise 1 — Easy: Greeting Generator</div>
                        <p>Ask for name and age. Print a personalized greeting telling them how old they'll be in 5 years.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">name = input("What is your name? ").strip()
age = int(input("How old are you? "))
print(f"Hello, {name}!")
print(f"In 5 years, you will be {age + 5} years old.")</code></pre>
                            </div>
                        </details>
                    </div>

                    <div class="story-box">
                        <div class="box-title">Exercise 2 — Medium: BMI Calculator</div>
                        <p>Ask for weight (kg) and height (m). Calculate and display BMI with a category.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">weight = float(input("Enter weight (kg): "))
height = float(input("Enter height (m): "))
bmi = weight / height ** 2
print(f"\\nBMI: {bmi:.1f}")
if bmi < 18.5:
    category = "Underweight"
elif bmi < 25:
    category = "Normal weight"
elif bmi < 30:
    category = "Overweight"
else:
    category = "Obese"
print(f"Category: {category}")</code></pre>
                            </div>
                        </details>
                    </div>

                    <div class="story-box">
                        <div class="box-title">Exercise 3 — Challenge: Safe Number Input</div>
                        <p>Keep asking for a number between 1 and 100 until the user provides valid input. Use try/except and range checking.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">while True:
    try:
        num = int(input("Enter a number between 1 and 100: "))
        if 1 <= num <= 100:
            print(f"Great! You entered {num}.")
            break
        else:
            print("Out of range! Must be between 1 and 100.")
    except ValueError:
        print("Invalid input! Please enter a whole number.")</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 6 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ <code>input(prompt)</code> pauses program and returns user input as a <strong>string</strong></li>
                            <li>✅ Always convert: <code>int(input(...))</code>, <code>float(input(...))</code></li>
                            <li>✅ Use <code>.strip()</code> to remove accidental whitespace</li>
                            <li>✅ Validate input with try/except to handle bad input gracefully</li>
                            <li>✅ Use while loops to keep asking until valid input is received</li>
                            <li>✅ You can now build fully interactive programs!</li>
                        </ul>
                    </div>
                `

            }
        ]
    },
    {
        id: 2,
        title: "Module 2: Making Decisions",
        icon: "🤔",
        description: "Learn how programs make choices using if-else statements and logical thinking",
        lessons: 6,
        duration: "2.5 hours",
        lessons_data: [
            {
                id: 7,
                title: "If Statements - Making Choices",
                module: "Module 2",
                story: `
                    <h2>📖 The Story of the Traffic Light</h2>
                    <p>Every day you make thousands of decisions: if it's raining, take an umbrella. If the light is red, stop. If you're hungry, eat. These are all conditional decisions — you check a condition and act accordingly.</p>
                    <p>The <code>if</code> statement is Python's way of making decisions. It's the most fundamental control structure in programming — without it, programs could only run in a straight line, doing the same thing every time.</p>
                `,
                content: `
                    <h2>The if Statement</h2>
                    <p>An <code>if</code> statement checks a condition. If the condition is <strong>True</strong>, the indented code block runs. If <strong>False</strong>, it's skipped.</p>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Basic if</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">age = 18

if age >= 18:
    print("You are an adult")
    print("You can vote!")

# If condition is False, block is skipped entirely
temperature = 15
if temperature > 30:
    print("It's hot!")   # This won't print</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 Indentation is NOT Optional in Python</div>
                        <p>Python uses <strong>indentation</strong> (spaces/tabs) to define code blocks. This is unique to Python — most languages use curly braces {}.</p>
                        <div class="code-block">
                            <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                            <pre><code class="language-python">if True:
    print("This is inside the if block")   # 4 spaces indent
    print("So is this")                    # Same level = same block
print("This is OUTSIDE the if block")      # No indent = not in block

# ❌ IndentationError:
if True:
print("Missing indent!")   # IndentationError!</code></pre>
                        </div>
                    </div>

                    <h2>if-else — Two Paths</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">score = 75

if score >= 60:
    print("You passed! ✅")
    grade = "Pass"
else:
    print("You failed. ❌")
    grade = "Fail"

print(f"Result: {grade}")

# Real-world example: login check
username = "admin"
password = "secret123"

if username == "admin" and password == "secret123":
    print("Login successful! Welcome back.")
else:
    print("Invalid credentials. Access denied.")</code></pre>
                    </div>

                    <h2>Comparison Operators</h2>
                    <div class="story-box">
                        <div class="box-title">📊 All Comparison Operators</div>
                        <table style="width:100%;border-collapse:collapse;margin-top:10px;">
                            <tr style="background:rgba(102,126,234,0.2);">
                                <th style="padding:8px;text-align:left;border:1px solid rgba(255,255,255,0.1);">Operator</th>
                                <th style="padding:8px;text-align:left;border:1px solid rgba(255,255,255,0.1);">Meaning</th>
                                <th style="padding:8px;text-align:left;border:1px solid rgba(255,255,255,0.1);">Example</th>
                                <th style="padding:8px;text-align:left;border:1px solid rgba(255,255,255,0.1);">Result</th>
                            </tr>
                            <tr><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>==</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Equal to</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>5 == 5</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">True</td></tr>
                            <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>!=</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Not equal to</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>5 != 3</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">True</td></tr>
                            <tr><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>&gt;</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Greater than</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>10 &gt; 5</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">True</td></tr>
                            <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>&lt;</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Less than</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>3 &lt; 7</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">True</td></tr>
                            <tr><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>&gt;=</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Greater or equal</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>5 &gt;= 5</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">True</td></tr>
                            <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>&lt;=</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Less or equal</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>4 &lt;= 4</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">True</td></tr>
                        </table>
                    </div>

                    <h2>Truthy and Falsy in Conditions</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># Any value can be used as a condition!
# Falsy: 0, 0.0, "", [], {}, (), None, False
# Truthy: everything else

name = ""
if name:
    print(f"Hello, {name}!")
else:
    print("No name provided")   # This runs (empty string is falsy)

score = 0
if score:
    print("You have a score")
else:
    print("Score is zero")   # This runs (0 is falsy)

items = [1, 2, 3]
if items:
    print(f"You have {len(items)} items")   # This runs (non-empty list is truthy)</code></pre>
                    </div>

                    <h2>Chained Comparisons</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">age = 25

# Python allows chained comparisons (unique feature!)
if 18 <= age <= 65:
    print("Working age")

# Equivalent to: if age >= 18 and age <= 65

# Range check for grade
score = 85
if 90 <= score <= 100:
    grade = "A"
elif 80 <= score < 90:
    grade = "B"
elif 70 <= score < 80:
    grade = "C"
else:
    grade = "F"
print(f"Grade: {grade}")   # B</code></pre>
                    </div>

                    <h2>Common Mistakes</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Errors & Fixes</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># ❌ Using = instead of == in condition
x = 5
if x = 5:   # SyntaxError!
# ✅ Use ==
if x == 5:
    print("x is 5")

# ❌ Missing colon
if x == 5   # SyntaxError: expected ':'
# ✅ Always end condition with :
if x == 5:

# ❌ Wrong indentation
if x == 5:
print("hello")   # IndentationError!
# ✅ Indent with 4 spaces
if x == 5:
    print("hello")</code></pre>
                    </div>

                    <h2>🏋️ Practice Exercises</h2>
                    <div class="story-box">
                        <div class="box-title">Exercise 1 — Easy: Age Checker</div>
                        <p>Ask for the user's age. Print "Child" (under 13), "Teenager" (13-17), or "Adult" (18+).</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">age = int(input("Enter your age: "))
if age < 13:
    print("Child")
elif age < 18:
    print("Teenager")
else:
    print("Adult")</code></pre>
                            </div>
                        </details>
                    </div>

                    <div class="story-box">
                        <div class="box-title">Exercise 2 — Medium: Grade Calculator</div>
                        <p>Ask for a score (0-100). Print the letter grade: A (90-100), B (80-89), C (70-79), D (60-69), F (below 60).</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">score = int(input("Enter score (0-100): "))
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"
print(f"Score: {score} → Grade: {grade}")</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 7 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ <code>if condition:</code> runs block only when condition is True</li>
                            <li>✅ <code>else:</code> runs when condition is False</li>
                            <li>✅ Indentation defines code blocks — 4 spaces is standard</li>
                            <li>✅ Comparison operators: ==, !=, &gt;, &lt;, &gt;=, &lt;=</li>
                            <li>✅ Truthy/Falsy: 0, "", [], None are falsy; everything else is truthy</li>
                            <li>✅ Chained comparisons: <code>18 &lt;= age &lt;= 65</code></li>
                        </ul>
                    </div>
                `

            },
            {
                id: 8,
                title: "elif - Multiple Choices",
                module: "Module 2",
                story: `
                    <h2>📖 The Story of the Menu</h2>
                    <p>Imagine a restaurant menu with many options. You don't just choose "yes" or "no" — you pick from pizza, pasta, salad, or soup. Each choice leads to a different outcome.</p>
                    <p><code>elif</code> (short for "else if") lets you chain multiple conditions together, creating a decision tree with many branches. Python checks each condition in order and runs the first one that's True.</p>
                `,
                content: `
                    <h2>The elif Chain</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">score = 85

if score >= 90:
    grade = "A"
    message = "Excellent!"
elif score >= 80:
    grade = "B"
    message = "Good job!"
elif score >= 70:
    grade = "C"
    message = "Decent work"
elif score >= 60:
    grade = "D"
    message = "Needs improvement"
else:
    grade = "F"
    message = "Please study more"

print(f"Score: {score} → Grade: {grade} — {message}")</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 How elif Works — Short-Circuit Evaluation</div>
                        <p>Python checks conditions <strong>top to bottom</strong> and stops at the FIRST True condition. Once a match is found, all remaining elif/else blocks are skipped.</p>
                        <div class="code-block">
                            <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                            <pre><code class="language-python">x = 15

if x > 10:
    print("Greater than 10")   # ✅ This runs
elif x > 5:
    print("Greater than 5")    # ❌ Skipped! (first condition was True)
elif x > 0:
    print("Positive")          # ❌ Skipped!
else:
    print("Zero or negative")  # ❌ Skipped!</code></pre>
                        </div>
                    </div>

                    <h2>Real-World elif Examples</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Season Detector</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">month = 7

if month in [12, 1, 2]:
    season = "Winter ❄️"
elif month in [3, 4, 5]:
    season = "Spring 🌸"
elif month in [6, 7, 8]:
    season = "Summer ☀️"
else:
    season = "Autumn 🍂"

print(f"Month {month} is {season}")</code></pre>
                    </div>

                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — BMI Calculator with Categories</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">bmi = 22.5

if bmi < 18.5:
    category = "Underweight"
    advice = "Consider eating more nutritious foods"
elif bmi < 25:
    category = "Normal weight"
    advice = "Great! Keep up the healthy lifestyle"
elif bmi < 30:
    category = "Overweight"
    advice = "Consider more exercise and balanced diet"
else:
    category = "Obese"
    advice = "Please consult a healthcare professional"

print(f"BMI: {bmi}")
print(f"Category: {category}")
print(f"Advice: {advice}")</code></pre>
                    </div>

                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Simple Menu System</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">print("=== CALCULATOR ===")
print("1. Add")
print("2. Subtract")
print("3. Multiply")
print("4. Divide")

choice = input("Choose operation (1-4): ")
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

if choice == "1":
    result = num1 + num2
    op = "+"
elif choice == "2":
    result = num1 - num2
    op = "-"
elif choice == "3":
    result = num1 * num2
    op = "*"
elif choice == "4":
    if num2 != 0:
        result = num1 / num2
        op = "/"
    else:
        print("Error: Cannot divide by zero!")
        result = None
        op = "/"
else:
    print("Invalid choice!")
    result = None
    op = "?"

if result is not None:
    print(f"{num1} {op} {num2} = {result}")</code></pre>
                    </div>

                    <h2>Common Mistakes</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Errors & Fixes</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># ❌ Using else if instead of elif
if x > 10:
    print("big")
else if x > 5:   # SyntaxError!
    print("medium")
# ✅ Use elif
elif x > 5:
    print("medium")

# ❌ Unreachable elif (wrong order)
score = 95
if score >= 60:
    grade = "Pass"   # This always runs first!
elif score >= 90:
    grade = "A"      # Never reached!
# ✅ Put more specific conditions first
if score >= 90:
    grade = "A"
elif score >= 60:
    grade = "Pass"</code></pre>
                    </div>

                    <h2>🏋️ Practice Exercises</h2>
                    <div class="story-box">
                        <div class="box-title">Exercise 1 — Easy: Day Type</div>
                        <p>Ask for a day number (1-7). Print "Weekday" for Mon-Fri (1-5) and "Weekend" for Sat-Sun (6-7).</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">day = int(input("Enter day number (1=Mon, 7=Sun): "))
days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
if 1 <= day <= 5:
    print(f"{days[day-1]} is a Weekday")
elif day in [6, 7]:
    print(f"{days[day-1]} is a Weekend")
else:
    print("Invalid day number")</code></pre>
                            </div>
                        </details>
                    </div>

                    <div class="story-box">
                        <div class="box-title">Exercise 2 — Challenge: Traffic Light System</div>
                        <p>Ask for a traffic light color (red/yellow/green). Print what a driver should do. Handle invalid input.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">color = input("Traffic light color: ").lower().strip()
if color == "red":
    print("STOP! 🔴")
elif color == "yellow":
    print("SLOW DOWN! 🟡")
elif color == "green":
    print("GO! 🟢")
else:
    print(f"Unknown color: {color}")</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 8 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ <code>elif</code> adds more branches to if-else chains</li>
                            <li>✅ Python checks conditions top-to-bottom, stops at first True</li>
                            <li>✅ Put more specific conditions BEFORE general ones</li>
                            <li>✅ <code>in</code> operator checks membership: <code>x in [1, 2, 3]</code></li>
                            <li>✅ Always have an <code>else</code> to handle unexpected inputs</li>
                        </ul>
                    </div>
                `

            },
            {
                id: 9,
                title: "Logical Operators - and, or, not",
                module: "Module 2",
                story: `
                    <h2>📖 The Story of the Security Guard</h2>
                    <p>A security guard at a club checks multiple conditions: "You must be 18+ AND have a valid ID." Both must be true. Or maybe: "You can enter if you're a member OR have a guest pass." Either one works.</p>
                    <p>Logical operators let you combine multiple conditions into one. They're the glue that connects simple conditions into complex decision logic.</p>
                `,
                content: `
                    <h2>The Three Logical Operators</h2>
                    <div class="story-box">
                        <div class="box-title">📊 Logical Operators Truth Tables</div>
                        <table style="width:100%;border-collapse:collapse;margin-top:10px;">
                            <tr style="background:rgba(102,126,234,0.2);">
                                <th style="padding:8px;border:1px solid rgba(255,255,255,0.1);">A</th>
                                <th style="padding:8px;border:1px solid rgba(255,255,255,0.1);">B</th>
                                <th style="padding:8px;border:1px solid rgba(255,255,255,0.1);">A and B</th>
                                <th style="padding:8px;border:1px solid rgba(255,255,255,0.1);">A or B</th>
                                <th style="padding:8px;border:1px solid rgba(255,255,255,0.1);">not A</th>
                            </tr>
                            <tr><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">True</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">True</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">True</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">True</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">False</td></tr>
                            <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">True</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">False</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">False</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">True</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">False</td></tr>
                            <tr><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">False</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">True</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">False</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">True</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">True</td></tr>
                            <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">False</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">False</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">False</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">False</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">True</td></tr>
                        </table>
                    </div>

                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — and, or, not</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">age = 20
has_id = True
is_member = False

# AND — both must be True
if age >= 18 and has_id:
    print("Welcome to the club!")

# OR — at least one must be True
if is_member or age >= 21:
    print("VIP access granted")

# NOT — flips True to False
if not is_member:
    print("You are not a member")

# Combining all three
if (age >= 18 and has_id) or is_member:
    print("Access granted")</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 Short-Circuit Evaluation</div>
                        <p>Python is smart — it stops evaluating as soon as the result is determined:</p>
                        <div class="code-block">
                            <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                            <pre><code class="language-python"># AND: if first is False, second is never checked
x = 0
if x != 0 and 10 / x > 2:   # Safe! Division never happens
    print("big")

# OR: if first is True, second is never checked
name = "Alice"
if name or input("Enter name: "):   # input() never called!
    print(f"Hello, {name}")</code></pre>
                        </div>
                    </div>

                    <h2>Real-World Examples</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Login System</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">username = input("Username: ")
password = input("Password: ")

valid_user = username == "admin"
valid_pass = password == "secret123"
is_active = True

if valid_user and valid_pass and is_active:
    print("✅ Login successful!")
elif valid_user and not valid_pass:
    print("❌ Wrong password")
elif not valid_user:
    print("❌ User not found")
else:
    print("❌ Account is inactive")</code></pre>
                    </div>

                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Leap Year Checker</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">year = int(input("Enter a year: "))

# A year is a leap year if:
# divisible by 4 AND (not divisible by 100 OR divisible by 400)
is_leap = (year % 4 == 0) and (year % 100 != 0 or year % 400 == 0)

if is_leap:
    print(f"{year} is a leap year! 🗓️")
else:
    print(f"{year} is not a leap year")</code></pre>
                    </div>

                    <h2>Common Mistakes</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Errors & Fixes</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># ❌ Using && and || (from other languages)
if x > 0 && y > 0:   # SyntaxError!
if x > 0 || y > 0:   # SyntaxError!
# ✅ Python uses: and, or, not
if x > 0 and y > 0:
if x > 0 or y > 0:

# ❌ Comparing to True/False explicitly
if is_valid == True:   # Redundant!
# ✅ Just use the boolean directly
if is_valid:

# ❌ Forgetting parentheses in complex conditions
if a or b and c:   # Ambiguous! (and has higher precedence than or)
# ✅ Use parentheses to be explicit
if (a or b) and c:</code></pre>
                    </div>

                    <h2>🏋️ Practice Exercises</h2>
                    <div class="story-box">
                        <div class="box-title">Exercise 1 — Easy: Voting Eligibility</div>
                        <p>Ask for age and citizenship status. Print whether the person can vote (must be 18+ AND a citizen).</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">age = int(input("Age: "))
citizen = input("Are you a citizen? (yes/no): ").lower() == "yes"
if age >= 18 and citizen:
    print("✅ You can vote!")
elif age < 18:
    print("❌ Too young to vote")
else:
    print("❌ Must be a citizen to vote")</code></pre>
                            </div>
                        </details>
                    </div>

                    <div class="story-box">
                        <div class="box-title">Exercise 2 — Challenge: Leap Year</div>
                        <p>Write a leap year checker. A year is a leap year if divisible by 4, except century years (divisible by 100), unless also divisible by 400.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">year = int(input("Enter year: "))
is_leap = (year % 4 == 0) and (year % 100 != 0 or year % 400 == 0)
print(f"{year} is {'a leap year' if is_leap else 'not a leap year'}")</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 9 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ <code>and</code> — both conditions must be True</li>
                            <li>✅ <code>or</code> — at least one condition must be True</li>
                            <li>✅ <code>not</code> — flips True to False and vice versa</li>
                            <li>✅ Short-circuit: <code>and</code> stops at first False, <code>or</code> stops at first True</li>
                            <li>✅ Use parentheses to make complex conditions clear</li>
                            <li>✅ Operator precedence: not &gt; and &gt; or</li>
                        </ul>
                    </div>
                `

            },
            {
                id: 10,
                title: "Nested If - Decisions Within Decisions",
                module: "Module 2",
                story: `
                    <h2>📖 The Story of the Treasure Hunt</h2>
                    <p>You find a locked door. First check: do you have a key? If yes, open the door. Inside, another check: is the treasure chest locked? If yes, do you have the combination? Each decision leads to another decision.</p>
                    <p>Nested if statements work the same way — conditions inside conditions, creating a tree of decisions. They're powerful but must be used carefully to avoid creating code that's hard to read.</p>
                `,
                content: `
                    <h2>Nested if Statements</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">age = 20
has_ticket = True
is_vip = False

if age >= 18:
    print("Age check passed ✅")
    if has_ticket:
        print("Ticket check passed ✅")
        if is_vip:
            print("Welcome to the VIP section! 🌟")
        else:
            print("Welcome to the general area!")
    else:
        print("Sorry, you need a ticket")
else:
    print("Sorry, must be 18+ to enter")</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 Nesting Depth — Keep it Shallow</div>
                        <p>Deeply nested code is hard to read and maintain. As a rule of thumb, try to keep nesting to 3 levels maximum. Often, you can refactor using <code>and</code>/<code>or</code> or early returns.</p>
                        <div class="code-block">
                            <div class="code-header"><span class="code-language">Python — Refactoring Nested Code</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                            <pre><code class="language-python"># ❌ Deeply nested (hard to read)
if age >= 18:
    if has_ticket:
        if not is_banned:
            print("Enter!")

# ✅ Flat with and (easier to read)
if age >= 18 and has_ticket and not is_banned:
    print("Enter!")</code></pre>
                        </div>
                    </div>

                    <h2>Real-World Nested Examples</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — ATM Machine</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">balance = 1000
pin_correct = True
card_valid = True

if card_valid:
    if pin_correct:
        print("PIN accepted ✅")
        amount = float(input("Enter withdrawal amount: $"))
        if amount <= 0:
            print("Invalid amount")
        elif amount > balance:
            print(f"Insufficient funds. Balance: \${balance}")
        elif amount > 500:
            print("Daily limit is $500")
        else:
            balance -= amount
            print(f"Dispensing \${amount:.2f}")
            print(f"Remaining balance: \${balance:.2f}")
    else:
        print("Wrong PIN ❌")
else:
    print("Card not valid ❌")</code></pre>
                    </div>

                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Shipping Cost Calculator</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">weight = float(input("Package weight (kg): "))
is_express = input("Express shipping? (yes/no): ").lower() == "yes"
is_international = input("International? (yes/no): ").lower() == "yes"

if is_international:
    if weight <= 1:
        base_cost = 25
    elif weight <= 5:
        base_cost = 45
    else:
        base_cost = 80
    if is_express:
        base_cost *= 2
else:
    if weight <= 1:
        base_cost = 5
    elif weight <= 5:
        base_cost = 10
    else:
        base_cost = 20
    if is_express:
        base_cost += 15

print(f"Shipping cost: \${base_cost}")</code></pre>
                    </div>

                    <h2>Common Mistakes</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Errors & Fixes</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># ❌ Wrong indentation level
if x > 0:
    if y > 0:
    print("Both positive")   # IndentationError! Should be indented further
# ✅ Correct indentation
if x > 0:
    if y > 0:
        print("Both positive")

# ❌ else matching wrong if
if x > 0:
    if y > 0:
        print("x and y positive")
else:
    print("x not positive")   # This else matches the OUTER if
# ✅ Be explicit with indentation to match intended if</code></pre>
                    </div>

                    <h2>🏋️ Practice Exercises</h2>
                    <div class="story-box">
                        <div class="box-title">Exercise 1 — Medium: Loan Eligibility</div>
                        <p>Check loan eligibility: must be 21+, have income > 30000, and credit score > 650. Show which conditions failed.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">age = int(input("Age: "))
income = float(input("Annual income: $"))
credit = int(input("Credit score: "))

if age >= 21:
    if income > 30000:
        if credit > 650:
            print("✅ Loan approved!")
        else:
            print("❌ Credit score too low (need > 650)")
    else:
        print("❌ Income too low (need > $30,000)")
else:
    print("❌ Must be 21 or older")</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 10 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ Nested if statements check conditions inside conditions</li>
                            <li>✅ Each nesting level adds 4 spaces of indentation</li>
                            <li>✅ Keep nesting shallow (max 3 levels) for readability</li>
                            <li>✅ Often, nested ifs can be simplified with <code>and</code></li>
                            <li>✅ The <code>else</code> matches the closest unmatched <code>if</code></li>
                        </ul>
                    </div>
                `

            },
            {
                id: 11,
                title: "Ternary Operator - One-Line Decisions",
                module: "Module 2",
                story: `
                    <h2>📖 The Story of the Quick Answer</h2>
                    <p>Sometimes you need a quick yes-or-no answer without writing a full if-else block. Like a coin flip — heads or tails, pass or fail, yes or no.</p>
                    <p>Python's ternary operator (also called conditional expression) lets you write a simple if-else in a single line. It's elegant, concise, and very Pythonic.</p>
                `,
                content: `
                    <h2>The Ternary Operator Syntax</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># Syntax: value_if_true if condition else value_if_false

age = 20
status = "adult" if age >= 18 else "minor"
print(status)   # adult

# Equivalent to:
if age >= 18:
    status = "adult"
else:
    status = "minor"</code></pre>
                    </div>

                    <h2>Practical Examples</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Ternary in Action</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">score = 75

# Grade pass/fail
result = "Pass ✅" if score >= 60 else "Fail ❌"
print(result)

# Absolute value (without abs())
x = -5
absolute = x if x >= 0 else -x
print(absolute)   # 5

# Maximum of two numbers
a, b = 10, 20
maximum = a if a > b else b
print(f"Max: {maximum}")   # 20

# In print statements
temperature = 35
print(f"It's {'hot' if temperature > 30 else 'cool'} today!")

# In f-strings
items = []
print(f"Cart: {'empty' if not items else f'{len(items)} items'}")</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 When to Use Ternary vs if-else</div>
                        <p><strong>Use ternary when:</strong> Simple value assignment based on one condition</p>
                        <p><strong>Use if-else when:</strong> Multiple statements, complex logic, or readability matters more</p>
                        <div class="code-block">
                            <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                            <pre><code class="language-python"># ✅ Good use of ternary — simple, readable
label = "even" if n % 2 == 0 else "odd"

# ❌ Bad use of ternary — too complex, hard to read
result = (do_this() if a > b else do_that()) if x else (do_other() if y else do_last())
# ✅ Use regular if-else for complex logic</code></pre>
                        </div>
                    </div>

                    <h2>Nested Ternary (Use Sparingly!)</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">score = 85

# Nested ternary — works but can be hard to read
grade = "A" if score >= 90 else "B" if score >= 80 else "C" if score >= 70 else "F"
print(grade)   # B

# Usually better to use if-elif-else for multiple conditions</code></pre>
                    </div>

                    <h2>🏋️ Practice Exercises</h2>
                    <div class="story-box">
                        <div class="box-title">Exercise 1 — Easy: Even or Odd</div>
                        <p>Ask for a number. Use a ternary operator to print "even" or "odd".</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">n = int(input("Enter a number: "))
print(f"{n} is {'even' if n % 2 == 0 else 'odd'}")</code></pre>
                            </div>
                        </details>
                    </div>

                    <div class="story-box">
                        <div class="box-title">Exercise 2 — Medium: Discount Calculator</div>
                        <p>If purchase > $100, apply 10% discount; otherwise no discount. Use ternary to calculate final price.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">purchase = float(input("Purchase amount: $"))
discount = 0.10 if purchase > 100 else 0
final = purchase * (1 - discount)
print(f"Discount: {discount:.0%}")
print(f"Final price: \${final:.2f}")</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 11 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ Ternary syntax: <code>value_if_true if condition else value_if_false</code></li>
                            <li>✅ Great for simple one-line value assignments</li>
                            <li>✅ Can be used inside f-strings and print statements</li>
                            <li>✅ Avoid nesting ternaries — use if-elif-else for complex logic</li>
                            <li>✅ Readability matters — don't sacrifice clarity for brevity</li>
                        </ul>
                    </div>
                `

            },
            {
                id: 12,
                title: "Project - Smart Calculator",
                module: "Module 2",
                story: `
                    <h2>📖 The Story of the Engineer's Tool</h2>
                    <p>Every engineer has a trusty calculator. But a smart calculator doesn't just compute — it validates input, handles errors gracefully, and provides helpful feedback.</p>
                    <p>In this project, you'll combine everything from Module 2: if/elif/else, logical operators, nested conditions, and ternary operators to build a fully functional smart calculator.</p>
                `,
                content: `
                    <h2>Project: Smart Calculator</h2>
                    <p>Let's build a calculator that handles all basic operations, validates input, and provides clear error messages.</p>

                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Complete Smart Calculator</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">def get_number(prompt):
    """Get a valid number from user."""
    while True:
        try:
            return float(input(prompt))
        except ValueError:
            print("❌ Invalid number. Please try again.")

def calculate(num1, operator, num2):
    """Perform calculation and return result."""
    if operator == "+":
        return num1 + num2
    elif operator == "-":
        return num1 - num2
    elif operator == "*":
        return num1 * num2
    elif operator == "/":
        if num2 == 0:
            return None, "Cannot divide by zero!"
        return num1 / num2, None
    elif operator == "**":
        return num1 ** num2, None
    elif operator == "%":
        if num2 == 0:
            return None, "Cannot modulo by zero!"
        return num1 % num2, None
    else:
        return None, f"Unknown operator: {operator}"

print("=" * 50)
print("       🧮 SMART CALCULATOR")
print("=" * 50)
print("Operators: + - * / ** %")
print("Type 'quit' to exit")
print("=" * 50)

while True:
    print()
    user_input = input("Enter expression (e.g., 10 + 5): ").strip()
    
    if user_input.lower() == "quit":
        print("Goodbye! 👋")
        break
    
    parts = user_input.split()
    
    if len(parts) != 3:
        print("❌ Format: number operator number (e.g., 10 + 5)")
        continue
    
    num1_str, operator, num2_str = parts
    
    try:
        num1 = float(num1_str)
        num2 = float(num2_str)
    except ValueError:
        print("❌ Invalid numbers provided")
        continue
    
    result, error = calculate(num1, operator, num2)
    
    if error:
        print(f"❌ Error: {error}")
    else:
        # Format result nicely
        formatted = int(result) if result == int(result) else round(result, 6)
        print(f"✅ {num1} {operator} {num2} = {formatted}")</code></pre>
                    </div>

                    <h2>Enhanced Version with History</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Calculator with History</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">history = []

print("=== CALCULATOR WITH HISTORY ===")

while True:
    choice = input("\\n[C]alculate, [H]istory, [Q]uit: ").upper()
    
    if choice == "Q":
        print("Goodbye!")
        break
    elif choice == "H":
        if not history:
            print("No calculations yet")
        else:
            print("\\n--- Calculation History ---")
            for i, entry in enumerate(history, 1):
                print(f"{i}. {entry}")
    elif choice == "C":
        try:
            num1 = float(input("First number: "))
            op = input("Operator (+, -, *, /): ")
            num2 = float(input("Second number: "))
            
            if op == "+" : result = num1 + num2
            elif op == "-": result = num1 - num2
            elif op == "*": result = num1 * num2
            elif op == "/":
                result = num1 / num2 if num2 != 0 else None
            else:
                print("Invalid operator")
                continue
            
            if result is None:
                print("Cannot divide by zero!")
            else:
                entry = f"{num1} {op} {num2} = {result}"
                history.append(entry)
                print(f"Result: {result}")
        except ValueError:
            print("Invalid input!")
    else:
        print("Invalid choice")</code></pre>
                    </div>

                    <h2>🏋️ Project Extensions</h2>
                    <div class="story-box">
                        <div class="box-title">Challenge 1 — Add More Operations</div>
                        <p>Add square root (√), percentage (%), and power (^) operations to the calculator.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Hint</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">import math
# For square root (single operand):
if op == "sqrt":
    result = math.sqrt(num1)
# For percentage:
elif op == "%":
    result = (num1 / 100) * num2</code></pre>
                            </div>
                        </details>
                    </div>

                    <div class="story-box">
                        <div class="box-title">Challenge 2 — Unit Converter</div>
                        <p>Build a unit converter that converts between km/miles, kg/pounds, and Celsius/Fahrenheit.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">print("Unit Converter")
print("1. km to miles")
print("2. kg to pounds")
print("3. Celsius to Fahrenheit")
choice = input("Choose (1-3): ")
value = float(input("Enter value: "))

if choice == "1":
    result = value * 0.621371
    print(f"{value} km = {result:.2f} miles")
elif choice == "2":
    result = value * 2.20462
    print(f"{value} kg = {result:.2f} pounds")
elif choice == "3":
    result = (value * 9/5) + 32
    print(f"{value}°C = {result:.1f}°F")
else:
    print("Invalid choice")</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Module 2 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ if/elif/else for multi-branch decision making</li>
                            <li>✅ Logical operators: and, or, not</li>
                            <li>✅ Nested conditions for complex decision trees</li>
                            <li>✅ Ternary operator for concise one-line decisions</li>
                            <li>✅ Input validation with try/except and while loops</li>
                            <li>✅ Building real interactive programs that handle errors gracefully</li>
                        </ul>
                    </div>
                `

            }
        ]
    },
    {
        id: 3,
        title: "Module 3: Loops & Repetition",
        icon: "🔁",
        description: "Master the art of repetition with while and for loops",
        lessons: 6,
        duration: "3 hours",
        lessons_data: [
            {
                id: 13,
                title: "For Loops - Repeating Actions",
                module: "Module 3",
                story: `
                    <h2>📖 The Story of the Assembly Line</h2>
                    <p>Imagine a factory assembly line. The same action is performed on each item: inspect it, stamp it, box it. The worker doesn't think about it — they just repeat the same steps for every item that comes along.</p>
                    <p>The <code>for</code> loop is Python's assembly line. It repeats a block of code for each item in a sequence — a list, a string, a range of numbers, or any other iterable.</p>
                `,
                content: `
                    <h2>The for Loop</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Basic for Loop</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># Loop over a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I like {fruit}")

# Loop over a string (character by character)
for char in "Python":
    print(char)

# Loop over a range of numbers
for i in range(5):
    print(i)   # 0, 1, 2, 3, 4</code></pre>
                    </div>

                    <h2>The range() Function</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — range() Variations</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">range(stop)           # 0 to stop-1
range(start, stop)    # start to stop-1
range(start, stop, step)  # start to stop-1, stepping by step

for i in range(5):
    print(i)   # 0 1 2 3 4

for i in range(1, 6):
    print(i)   # 1 2 3 4 5

for i in range(0, 10, 2):
    print(i)   # 0 2 4 6 8

for i in range(10, 0, -1):
    print(i)   # 10 9 8 7 6 5 4 3 2 1 (countdown!)</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 How for Loops Work Internally</div>
                        <p>Python's <code>for</code> loop works with any <strong>iterable</strong> — an object that can return its elements one at a time. Under the hood, Python calls <code>iter()</code> to get an iterator, then repeatedly calls <code>next()</code> until <code>StopIteration</code> is raised.</p>
                        <div class="code-block">
                            <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                            <pre><code class="language-python"># This for loop:
for x in [1, 2, 3]:
    print(x)

# Is equivalent to:
iterator = iter([1, 2, 3])
while True:
    try:
        x = next(iterator)
        print(x)
    except StopIteration:
        break</code></pre>
                        </div>
                    </div>

                    <h2>Useful Loop Patterns</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — enumerate() and zip()</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># enumerate() — get index AND value
fruits = ["apple", "banana", "cherry"]
for i, fruit in enumerate(fruits):
    print(f"{i+1}. {fruit}")
# 1. apple
# 2. banana
# 3. cherry

# zip() — loop over two lists simultaneously
names = ["Alice", "Bob", "Charlie"]
scores = [95, 87, 92]
for name, score in zip(names, scores):
    print(f"{name}: {score}")

# Accumulating values in a loop
total = 0
numbers = [10, 20, 30, 40, 50]
for num in numbers:
    total += num
print(f"Sum: {total}")   # 150
print(f"Average: {total / len(numbers)}")   # 30.0</code></pre>
                    </div>

                    <h2>Nested for Loops</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Multiplication Table</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">print("Multiplication Table (1-5):")
for i in range(1, 6):
    for j in range(1, 6):
        print(f"{i*j:4}", end="")
    print()   # New line after each row

# Pattern printing
for i in range(1, 6):
    print("*" * i)
# *
# **
# ***
# ****
# *****</code></pre>
                    </div>

                    <h2>Common Mistakes</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Errors & Fixes</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># ❌ Modifying list while iterating
numbers = [1, 2, 3, 4, 5]
for n in numbers:
    if n % 2 == 0:
        numbers.remove(n)   # Dangerous! Skips elements
# ✅ Iterate over a copy
for n in numbers[:]:
    if n % 2 == 0:
        numbers.remove(n)

# ❌ Off-by-one with range
for i in range(1, 10):
    print(i)   # Prints 1-9, NOT 10!
# ✅ Use range(1, 11) to include 10

# ❌ Using wrong variable name
for item in fruits:
    print(fruit)   # NameError! Should be 'item'</code></pre>
                    </div>

                    <h2>🏋️ Practice Exercises</h2>
                    <div class="story-box">
                        <div class="box-title">Exercise 1 — Easy: Sum of Numbers</div>
                        <p>Use a for loop to calculate the sum of numbers from 1 to 100.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">total = 0
for i in range(1, 101):
    total += i
print(f"Sum 1-100: {total}")   # 5050
# Bonus: verify with Gauss formula
print(f"Gauss formula: {100 * 101 // 2}")   # 5050</code></pre>
                            </div>
                        </details>
                    </div>

                    <div class="story-box">
                        <div class="box-title">Exercise 2 — Medium: FizzBuzz</div>
                        <p>Print numbers 1-30. For multiples of 3 print "Fizz", for multiples of 5 print "Buzz", for multiples of both print "FizzBuzz".</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">for i in range(1, 31):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 13 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ <code>for item in iterable:</code> loops over any sequence</li>
                            <li>✅ <code>range(stop)</code>, <code>range(start, stop)</code>, <code>range(start, stop, step)</code></li>
                            <li>✅ <code>enumerate()</code> gives index + value</li>
                            <li>✅ <code>zip()</code> loops over multiple lists simultaneously</li>
                            <li>✅ Nested loops for 2D patterns and tables</li>
                            <li>✅ Don't modify a list while iterating over it</li>
                        </ul>
                    </div>
                `

            },
            {
                id: 14,
                title: "While Loops - Repeat Until Done",
                module: "Module 3",
                story: `
                    <h2>📖 The Story of the Vending Machine</h2>
                    <p>A vending machine keeps asking "Insert coin or press button" until you make a valid selection and pay. It doesn't know in advance how many times it'll ask — it just keeps going until the condition is met.</p>
                    <p>The <code>while</code> loop is perfect for this: repeat as long as a condition is True. Unlike <code>for</code> loops (which iterate over a known sequence), <code>while</code> loops run until something changes.</p>
                `,
                content: `
                    <h2>The while Loop</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Basic while</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1   # CRITICAL: must change the condition!
print("Done!")

# Countdown
n = 10
while n > 0:
    print(n)
    n -= 1
print("Blast off! 🚀")</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 Infinite Loops — The #1 Danger</div>
                        <p>If the condition never becomes False, the loop runs forever. Always make sure something inside the loop changes the condition!</p>
                        <div class="code-block">
                            <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                            <pre><code class="language-python"># ❌ INFINITE LOOP — never changes count!
count = 0
while count < 5:
    print(count)   # Runs forever! Press Ctrl+C to stop

# ✅ Always update the condition variable
count = 0
while count < 5:
    print(count)
    count += 1   # This makes the loop eventually stop</code></pre>
                        </div>
                    </div>

                    <h2>while True with break</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Game Loop Pattern</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># Classic game loop pattern
while True:
    user_input = input("Enter command (quit to exit): ").lower()
    
    if user_input == "quit":
        print("Goodbye!")
        break   # Exit the loop
    elif user_input == "help":
        print("Available commands: help, quit")
    else:
        print(f"You entered: {user_input}")</code></pre>
                    </div>

                    <h2>break and continue</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — break and continue</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># break — exit the loop immediately
for i in range(10):
    if i == 5:
        break   # Stop at 5
    print(i)   # 0 1 2 3 4

# continue — skip current iteration, continue loop
for i in range(10):
    if i % 2 == 0:
        continue   # Skip even numbers
    print(i)   # 1 3 5 7 9

# Real-world: find first prime number > 10
n = 11
while True:
    is_prime = True
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            is_prime = False
            break
    if is_prime:
        print(f"First prime > 10: {n}")
        break
    n += 1</code></pre>
                    </div>

                    <h2>Input Validation Pattern</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Robust Input</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">def get_valid_age():
    while True:
        try:
            age = int(input("Enter age (1-120): "))
            if 1 <= age <= 120:
                return age
            print("Age must be between 1 and 120")
        except ValueError:
            print("Please enter a whole number")

age = get_valid_age()
print(f"Valid age: {age}")</code></pre>
                    </div>

                    <h2>for vs while — When to Use Which</h2>
                    <div class="story-box">
                        <div class="box-title">📊 for vs while Comparison</div>
                        <table style="width:100%;border-collapse:collapse;margin-top:10px;">
                            <tr style="background:rgba(102,126,234,0.2);">
                                <th style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Use for when...</th>
                                <th style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Use while when...</th>
                            </tr>
                            <tr><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">You know how many iterations</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">You don't know how many iterations</td></tr>
                            <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Iterating over a collection</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Waiting for a condition to change</td></tr>
                            <tr><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Using range()</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Game loops, user input validation</td></tr>
                        </table>
                    </div>

                    <h2>🏋️ Practice Exercises</h2>
                    <div class="story-box">
                        <div class="box-title">Exercise 1 — Easy: Countdown Timer</div>
                        <p>Use a while loop to count down from 10 to 1, then print "Blast off! 🚀"</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">n = 10
while n > 0:
    print(n)
    n -= 1
print("Blast off! 🚀")</code></pre>
                            </div>
                        </details>
                    </div>

                    <div class="story-box">
                        <div class="box-title">Exercise 2 — Medium: Number Guessing Game</div>
                        <p>Generate a random number 1-100. Let the user guess. Give "higher" or "lower" hints. Count attempts.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">import random
secret = random.randint(1, 100)
attempts = 0
print("Guess the number (1-100)!")
while True:
    try:
        guess = int(input("Your guess: "))
        attempts += 1
        if guess < secret:
            print("Too low! 📉")
        elif guess > secret:
            print("Too high! 📈")
        else:
            print(f"Correct! 🎉 Got it in {attempts} attempts!")
            break
    except ValueError:
        print("Please enter a number")</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 14 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ <code>while condition:</code> repeats as long as condition is True</li>
                            <li>✅ Always update the condition variable to avoid infinite loops</li>
                            <li>✅ <code>while True: ... break</code> for game loops and menus</li>
                            <li>✅ <code>break</code> exits the loop immediately</li>
                            <li>✅ <code>continue</code> skips to the next iteration</li>
                            <li>✅ Use while for input validation and unknown iteration counts</li>
                        </ul>
                    </div>
                `

            },
            {
                id: 15,
                title: "Loop Control - break, continue, pass",
                module: "Module 3",
                story: `
                    <h2>📖 The Story of the Quality Inspector</h2>
                    <p>A quality inspector on an assembly line has three options: let the item pass (continue to next), reject the whole batch (break), or mark an item for later review (pass). These three actions give fine-grained control over the flow.</p>
                    <p>Python's loop control statements — <code>break</code>, <code>continue</code>, and <code>pass</code> — give you the same fine-grained control over your loops.</p>
                `,
                content: `
                    <h2>break — Exit the Loop</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># break exits the ENTIRE loop immediately
for i in range(10):
    if i == 5:
        print("Found 5! Stopping.")
        break
    print(i)
# Output: 0 1 2 3 4 Found 5! Stopping.

# Real-world: search for an item
inventory = ["apple", "banana", "cherry", "date"]
search = "cherry"
for item in inventory:
    if item == search:
        print(f"Found {search}! ✅")
        break
else:
    # This else runs if loop completed WITHOUT break
    print(f"{search} not found ❌")</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 The for-else and while-else Pattern</div>
                        <p>Python has a unique <code>else</code> clause for loops. It runs when the loop completes normally (without <code>break</code>). This is very useful for search patterns.</p>
                        <div class="code-block">
                            <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                            <pre><code class="language-python">numbers = [2, 4, 6, 8, 10]
for n in numbers:
    if n % 2 != 0:
        print("Found odd number!")
        break
else:
    print("All numbers are even!")   # This runs (no break occurred)</code></pre>
                        </div>
                    </div>

                    <h2>continue — Skip to Next Iteration</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># continue skips the rest of the current iteration
for i in range(10):
    if i % 2 == 0:
        continue   # Skip even numbers
    print(i)   # 1 3 5 7 9

# Real-world: process only valid data
data = [10, -5, 20, -3, 15, 0, 8]
valid_sum = 0
for value in data:
    if value <= 0:
        continue   # Skip non-positive values
    valid_sum += value
print(f"Sum of positive values: {valid_sum}")   # 53</code></pre>
                    </div>

                    <h2>pass — Do Nothing (Placeholder)</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># pass is a no-op — does nothing
# Useful as a placeholder when code is required syntactically

for i in range(5):
    pass   # TODO: implement later

# In if statements
if some_condition:
    pass   # Handle later
else:
    print("Condition is False")

# In class/function definitions
def future_function():
    pass   # Will implement later

class EmptyClass:
    pass   # Will add methods later</code></pre>
                    </div>

                    <h2>Practical Examples</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Prime Number Finder</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False   # Found a factor, not prime
    return True

# Find all primes up to 50
primes = []
for n in range(2, 51):
    if is_prime(n):
        primes.append(n)
print(f"Primes up to 50: {primes}")</code></pre>
                    </div>

                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Data Filtering</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">students = [
    {"name": "Alice", "score": 92, "active": True},
    {"name": "Bob", "score": 45, "active": False},
    {"name": "Charlie", "score": 78, "active": True},
    {"name": "Diana", "score": 88, "active": True},
]

print("Active students who passed:")
for student in students:
    if not student["active"]:
        continue   # Skip inactive students
    if student["score"] < 60:
        continue   # Skip failing students
    print(f"  {student['name']}: {student['score']}")</code></pre>
                    </div>

                    <h2>🏋️ Practice Exercises</h2>
                    <div class="story-box">
                        <div class="box-title">Exercise 1 — Easy: Skip Negatives</div>
                        <p>Loop through <code>[-3, 5, -1, 8, -2, 4, 7]</code>. Use continue to skip negatives and print only positives.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">numbers = [-3, 5, -1, 8, -2, 4, 7]
for n in numbers:
    if n < 0:
        continue
    print(n)</code></pre>
                            </div>
                        </details>
                    </div>

                    <div class="story-box">
                        <div class="box-title">Exercise 2 — Medium: First Duplicate Finder</div>
                        <p>Find the first duplicate in <code>[1, 3, 5, 2, 4, 3, 7]</code> using break.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">numbers = [1, 3, 5, 2, 4, 3, 7]
seen = []
for n in numbers:
    if n in seen:
        print(f"First duplicate: {n}")
        break
    seen.append(n)
else:
    print("No duplicates found")</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 15 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ <code>break</code> — exits the entire loop immediately</li>
                            <li>✅ <code>continue</code> — skips current iteration, continues loop</li>
                            <li>✅ <code>pass</code> — does nothing, used as placeholder</li>
                            <li>✅ <code>for/while...else</code> — else runs only if no break occurred</li>
                            <li>✅ Use break for search patterns, continue for filtering</li>
                        </ul>
                    </div>
                `

            },
            {
                id: 16,
                title: "List Comprehensions - Pythonic Loops",
                module: "Module 3",
                story: `
                    <h2>📖 The Story of the Magic Filter</h2>
                    <p>Imagine you have a basket of mixed fruit and you want only the red ones in a new basket. You could pick each fruit, check its color, and add it — that's a for loop. Or you could use a magic filter that does it all in one sweep — that's a list comprehension.</p>
                    <p>List comprehensions are one of Python's most beloved features. They let you create new lists from existing ones in a single, readable line. They're faster than for loops and considered very "Pythonic".</p>
                `,
                content: `
                    <h2>Basic List Comprehension</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># Syntax: [expression for item in iterable]

# Traditional for loop
squares = []
for x in range(1, 6):
    squares.append(x ** 2)
print(squares)   # [1, 4, 9, 16, 25]

# List comprehension — same result, one line!
squares = [x ** 2 for x in range(1, 6)]
print(squares)   # [1, 4, 9, 16, 25]

# More examples
numbers = [1, 2, 3, 4, 5]
doubled = [n * 2 for n in numbers]
print(doubled)   # [2, 4, 6, 8, 10]

words = ["hello", "world", "python"]
upper = [w.upper() for w in words]
print(upper)   # ['HELLO', 'WORLD', 'PYTHON']</code></pre>
                    </div>

                    <h2>Filtering with if</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Comprehension with Filter</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># Syntax: [expression for item in iterable if condition]

numbers = range(1, 21)

# Even numbers only
evens = [n for n in numbers if n % 2 == 0]
print(evens)   # [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

# Squares of odd numbers
odd_squares = [n**2 for n in numbers if n % 2 != 0]
print(odd_squares)   # [1, 9, 25, 49, 81, 121, 169, 225, 289, 361]

# Filter strings
words = ["apple", "banana", "cherry", "date", "elderberry"]
long_words = [w for w in words if len(w) > 5]
print(long_words)   # ['banana', 'cherry', 'elderberry']</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 Performance: List Comprehensions vs for Loops</div>
                        <p>List comprehensions are typically <strong>30-50% faster</strong> than equivalent for loops because they're optimized at the C level in CPython. They also create the list in one operation rather than repeatedly calling <code>append()</code>.</p>
                        <div class="code-block">
                            <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                            <pre><code class="language-python">import time

# For loop
start = time.time()
result = []
for i in range(1000000):
    result.append(i ** 2)
print(f"For loop: {time.time() - start:.3f}s")

# List comprehension
start = time.time()
result = [i ** 2 for i in range(1000000)]
print(f"Comprehension: {time.time() - start:.3f}s")
# Comprehension is typically faster!</code></pre>
                        </div>
                    </div>

                    <h2>Nested Comprehensions</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># Flatten a 2D list
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat = [num for row in matrix for num in row]
print(flat)   # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Create a multiplication table as list of lists
table = [[i * j for j in range(1, 6)] for i in range(1, 6)]
for row in table:
    print(row)</code></pre>
                    </div>

                    <h2>Dictionary and Set Comprehensions</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># Dictionary comprehension
words = ["apple", "banana", "cherry"]
word_lengths = {word: len(word) for word in words}
print(word_lengths)   # {'apple': 5, 'banana': 6, 'cherry': 6}

# Set comprehension (removes duplicates)
numbers = [1, 2, 2, 3, 3, 3, 4]
unique_squares = {n**2 for n in numbers}
print(unique_squares)   # {1, 4, 9, 16}</code></pre>
                    </div>

                    <h2>🏋️ Practice Exercises</h2>
                    <div class="story-box">
                        <div class="box-title">Exercise 1 — Easy: Temperature Converter</div>
                        <p>Convert <code>[0, 20, 37, 100]</code> Celsius to Fahrenheit using a list comprehension.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">celsius = [0, 20, 37, 100]
fahrenheit = [(c * 9/5) + 32 for c in celsius]
print(fahrenheit)   # [32.0, 68.0, 98.6, 212.0]</code></pre>
                            </div>
                        </details>
                    </div>

                    <div class="story-box">
                        <div class="box-title">Exercise 2 — Medium: Word Filter</div>
                        <p>From a sentence, extract all words longer than 4 characters, converted to uppercase.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">sentence = "Python is an amazing programming language for beginners"
long_words = [w.upper() for w in sentence.split() if len(w) > 4]
print(long_words)</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 16 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ <code>[expr for item in iterable]</code> — basic comprehension</li>
                            <li>✅ <code>[expr for item in iterable if condition]</code> — with filter</li>
                            <li>✅ Comprehensions are faster and more Pythonic than for loops</li>
                            <li>✅ Dict comprehensions: <code>{k: v for k, v in items}</code></li>
                            <li>✅ Set comprehensions: <code>{expr for item in iterable}</code></li>
                            <li>✅ Don't over-nest — if it's hard to read, use a for loop</li>
                        </ul>
                    </div>
                `

            },
            {
                id: 17,
                title: "Functions - Reusable Code Blocks",
                module: "Module 3",
                story: `
                    <h2>📖 The Story of the Recipe Card</h2>
                    <p>A recipe card is a set of instructions you can follow over and over. You write it once, then use it whenever you need to bake that cake. You can even share it with others!</p>
                    <p>Functions are Python's recipe cards. You define a function once, then call it as many times as you need. Functions are the foundation of organized, reusable code — they're how you avoid repeating yourself.</p>
                `,
                content: `
                    <h2>Defining and Calling Functions</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># Define a function with def
def greet():
    print("Hello, World!")
    print("Welcome to Python!")

# Call the function
greet()   # Executes the function body
greet()   # Can call multiple times!

# Function with parameters
def greet_person(name):
    print(f"Hello, {name}!")

greet_person("Alice")   # Hello, Alice!
greet_person("Bob")     # Hello, Bob!</code></pre>
                    </div>

                    <h2>Parameters and Return Values</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># Function with return value
def add(a, b):
    return a + b

result = add(3, 5)
print(result)   # 8

# Multiple return values
def min_max(numbers):
    return min(numbers), max(numbers)

low, high = min_max([3, 1, 4, 1, 5, 9, 2, 6])
print(f"Min: {low}, Max: {high}")   # Min: 1, Max: 9

# Default parameters
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Alice"))           # Hello, Alice!
print(greet("Bob", "Hi"))       # Hi, Bob!
print(greet("Charlie", "Hey"))  # Hey, Charlie!</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 Scope — Local vs Global Variables</div>
                        <p>Variables created inside a function are <strong>local</strong> — they only exist within that function. Variables outside are <strong>global</strong>.</p>
                        <div class="code-block">
                            <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                            <pre><code class="language-python">x = 10   # Global variable

def my_function():
    y = 20   # Local variable
    print(x)   # Can read global: 10
    print(y)   # Local: 20

my_function()
print(x)   # 10
# print(y)   # NameError! y doesn't exist outside function

# To modify a global variable inside a function:
counter = 0
def increment():
    global counter
    counter += 1

increment()
print(counter)   # 1</code></pre>
                        </div>
                    </div>

                    <h2>*args and **kwargs</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># *args — variable number of positional arguments
def sum_all(*args):
    return sum(args)

print(sum_all(1, 2, 3))        # 6
print(sum_all(1, 2, 3, 4, 5))  # 15

# **kwargs — variable number of keyword arguments
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=25, city="NYC")

# Combining all types
def full_function(required, *args, **kwargs):
    print(f"Required: {required}")
    print(f"Extra args: {args}")
    print(f"Keyword args: {kwargs}")</code></pre>
                    </div>

                    <h2>Practical Function Examples</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Useful Functions</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">def is_palindrome(text):
    """Check if a string is a palindrome."""
    clean = text.lower().replace(" ", "")
    return clean == clean[::-1]

print(is_palindrome("racecar"))      # True
print(is_palindrome("A man a plan a canal Panama"))  # True
print(is_palindrome("hello"))        # False

def celsius_to_fahrenheit(celsius):
    """Convert Celsius to Fahrenheit."""
    return (celsius * 9/5) + 32

def calculate_grade(score):
    """Return letter grade for a score."""
    if score >= 90: return "A"
    elif score >= 80: return "B"
    elif score >= 70: return "C"
    elif score >= 60: return "D"
    else: return "F"

for score in [95, 82, 71, 55]:
    print(f"{score}: {calculate_grade(score)}")</code></pre>
                    </div>

                    <h2>🏋️ Practice Exercises</h2>
                    <div class="story-box">
                        <div class="box-title">Exercise 1 — Easy: Temperature Converter Function</div>
                        <p>Write functions <code>c_to_f(celsius)</code> and <code>f_to_c(fahrenheit)</code>. Test with 0°C, 100°C, 32°F, 212°F.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">def c_to_f(c):
    return (c * 9/5) + 32

def f_to_c(f):
    return (f - 32) * 5/9

print(f"0°C = {c_to_f(0)}°F")
print(f"100°C = {c_to_f(100)}°F")
print(f"32°F = {f_to_c(32):.1f}°C")
print(f"212°F = {f_to_c(212):.1f}°C")</code></pre>
                            </div>
                        </details>
                    </div>

                    <div class="story-box">
                        <div class="box-title">Exercise 2 — Challenge: Statistics Calculator</div>
                        <p>Write a function that takes a list of numbers and returns a dict with: mean, median, mode, min, max, and range.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">def statistics(numbers):
    n = len(numbers)
    sorted_nums = sorted(numbers)
    mean = sum(numbers) / n
    mid = n // 2
    median = sorted_nums[mid] if n % 2 else (sorted_nums[mid-1] + sorted_nums[mid]) / 2
    mode = max(set(numbers), key=numbers.count)
    return {
        "mean": mean, "median": median, "mode": mode,
        "min": min(numbers), "max": max(numbers),
        "range": max(numbers) - min(numbers)
    }

data = [4, 7, 2, 9, 4, 1, 7, 4, 8, 3]
stats = statistics(data)
for k, v in stats.items():
    print(f"{k}: {v}")</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 17 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ <code>def name(params):</code> defines a function</li>
                            <li>✅ <code>return</code> sends a value back to the caller</li>
                            <li>✅ Default parameters: <code>def f(x, y=10):</code></li>
                            <li>✅ <code>*args</code> for variable positional args</li>
                            <li>✅ <code>**kwargs</code> for variable keyword args</li>
                            <li>✅ Local scope: variables inside functions are private</li>
                            <li>✅ Use <code>global</code> keyword to modify global variables</li>
                        </ul>
                    </div>
                `

            },
            {
                id: 18,
                title: "Project - Number Games",
                module: "Module 3",
                story: `
                    <h2>📖 The Story of the Game Arcade</h2>
                    <p>Every game in an arcade uses loops — the game loop keeps running until you lose or quit. Games use conditions to check wins and losses, and functions to organize the code.</p>
                    <p>In this project, you'll build a collection of number games that combine everything from Module 3: for loops, while loops, break/continue, list comprehensions, and functions.</p>
                `,
                content: `
                    <h2>Project: Number Games Collection</h2>

                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Game 1: Number Guessing</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">import random

def play_guessing_game():
    """Number guessing game with difficulty levels."""
    print("\\n=== NUMBER GUESSING GAME ===")
    print("1. Easy (1-10)")
    print("2. Medium (1-100)")
    print("3. Hard (1-1000)")
    
    difficulty = input("Choose difficulty (1-3): ")
    
    if difficulty == "1":
        max_num, max_tries = 10, 4
    elif difficulty == "2":
        max_num, max_tries = 100, 7
    else:
        max_num, max_tries = 1000, 10
    
    secret = random.randint(1, max_num)
    attempts = 0
    
    print(f"\\nGuess the number between 1 and {max_num}!")
    print(f"You have {max_tries} attempts.")
    
    while attempts < max_tries:
        try:
            guess = int(input(f"Attempt {attempts+1}/{max_tries}: "))
            attempts += 1
            
            if guess == secret:
                print(f"🎉 Correct! You got it in {attempts} attempts!")
                return True
            elif guess < secret:
                remaining = max_tries - attempts
                print(f"Too low! ⬆️  ({remaining} attempts left)")
            else:
                remaining = max_tries - attempts
                print(f"Too high! ⬇️  ({remaining} attempts left)")
        except ValueError:
            print("Please enter a valid number")
    
    print(f"Game over! The number was {secret}")
    return False

play_guessing_game()</code></pre>
                    </div>

                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Game 2: Math Quiz</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">import random
import time

def generate_question(difficulty):
    """Generate a math question based on difficulty."""
    a = random.randint(1, difficulty * 10)
    b = random.randint(1, difficulty * 10)
    op = random.choice(["+", "-", "*"])
    
    if op == "+": answer = a + b
    elif op == "-": answer = a - b
    else: answer = a * b
    
    return f"{a} {op} {b}", answer

def play_math_quiz(num_questions=10, difficulty=1):
    """Math quiz game."""
    print(f"\\n=== MATH QUIZ (Difficulty: {difficulty}) ===")
    print(f"Answer {num_questions} questions as fast as possible!")
    
    score = 0
    start_time = time.time()
    
    for i in range(1, num_questions + 1):
        question, answer = generate_question(difficulty)
        print(f"\\nQ{i}: {question} = ?")
        
        try:
            user_answer = int(input("Your answer: "))
            if user_answer == answer:
                print("✅ Correct!")
                score += 1
            else:
                print(f"❌ Wrong! Answer was {answer}")
        except ValueError:
            print(f"❌ Invalid! Answer was {answer}")
    
    elapsed = time.time() - start_time
    print(f"\\n=== RESULTS ===")
    print(f"Score: {score}/{num_questions}")
    print(f"Time: {elapsed:.1f} seconds")
    print(f"Accuracy: {score/num_questions:.0%}")

play_math_quiz(5, 1)</code></pre>
                    </div>

                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Game 3: FizzBuzz Challenge</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">def fizzbuzz_game():
    """Interactive FizzBuzz game."""
    print("\\n=== FIZZBUZZ CHALLENGE ===")
    print("Rules: Say 'Fizz' for multiples of 3,")
    print("       'Buzz' for multiples of 5,")
    print("       'FizzBuzz' for multiples of both!")
    
    score = 0
    errors = 0
    
    for n in range(1, 21):
        if n % 15 == 0:
            correct = "FizzBuzz"
        elif n % 3 == 0:
            correct = "Fizz"
        elif n % 5 == 0:
            correct = "Buzz"
        else:
            correct = str(n)
        
        answer = input(f"Number {n}: ").strip()
        
        if answer.lower() == correct.lower():
            print("✅ Correct!")
            score += 1
        else:
            print(f"❌ Wrong! Should be: {correct}")
            errors += 1
    
    print(f"\\nFinal Score: {score}/20")
    if score == 20:
        print("Perfect score! 🏆")
    elif score >= 15:
        print("Great job! 🌟")
    else:
        print("Keep practicing! 💪")

fizzbuzz_game()</code></pre>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Module 3 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ for loops for iterating over sequences</li>
                            <li>✅ while loops for condition-based repetition</li>
                            <li>✅ break, continue, pass for loop control</li>
                            <li>✅ List comprehensions for concise, fast list creation</li>
                            <li>✅ Functions for organizing and reusing code</li>
                            <li>✅ Building complete interactive programs with all these tools</li>
                        </ul>
                    </div>
                `

            }
        ]
    },
    {
        id: 4,
        title: "Module 4: Collections",
        icon: "📦",
        description: "Work with lists, dictionaries, tuples, and sets",
        lessons: 7,
        duration: "3.5 hours",
        lessons_data: [
            {
                id: 19,
                title: "Lists - Ordered Collections",
                module: "Module 4",
                story: `
                    <h2>📖 The Story of the Shopping Cart</h2>
                    <p>A shopping cart holds multiple items in order. You can add items, remove them, check what's in it, and rearrange things. The order matters — item 1 is different from item 2.</p>
                    <p>Python lists are like shopping carts: ordered, changeable collections that can hold any mix of data types. They're the most versatile and commonly used data structure in Python.</p>
                `,
                content: `
                    <h2>Creating and Accessing Lists</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># Creating lists
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [42, "hello", 3.14, True, None]
empty = []

# Accessing by index (0-based)
print(fruits[0])    # apple
print(fruits[1])    # banana
print(fruits[-1])   # cherry (last item)
print(fruits[-2])   # banana (second to last)

# Slicing
print(fruits[0:2])  # ['apple', 'banana']
print(fruits[1:])   # ['banana', 'cherry']
print(fruits[:2])   # ['apple', 'banana']
print(fruits[::-1]) # ['cherry', 'banana', 'apple'] (reversed)</code></pre>
                    </div>

                    <h2>Modifying Lists</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — List Methods</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">fruits = ["apple", "banana"]

# Adding items
fruits.append("cherry")          # Add to end: ['apple', 'banana', 'cherry']
fruits.insert(1, "blueberry")    # Insert at index: ['apple', 'blueberry', 'banana', 'cherry']
fruits.extend(["date", "elderberry"])  # Add multiple items

# Removing items
fruits.remove("banana")          # Remove by value
popped = fruits.pop()            # Remove and return last item
popped2 = fruits.pop(0)          # Remove and return item at index 0
del fruits[0]                    # Delete by index

# Sorting
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
numbers.sort()                   # Sort in place: [1, 1, 2, 3, 4, 5, 6, 9]
numbers.sort(reverse=True)       # Sort descending
sorted_copy = sorted(numbers)    # Returns new sorted list (original unchanged)

# Other useful methods
fruits.reverse()                 # Reverse in place
count = fruits.count("apple")    # Count occurrences
index = fruits.index("banana")   # Find index of value
fruits.clear()                   # Remove all items</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 Lists in Memory — How Python Stores Them</div>
                        <p>A Python list is actually an array of <strong>pointers</strong> (memory addresses). Each element in the list is a reference to an object stored elsewhere in memory. This is why lists can hold different types — they just store pointers to objects of any type.</p>
                        <div class="code-block">
                            <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                            <pre><code class="language-python"># Lists are mutable — you can change them in place
a = [1, 2, 3]
b = a           # b points to the SAME list!
b.append(4)
print(a)        # [1, 2, 3, 4] — a changed too!

# To make a copy:
c = a.copy()    # or a[:]  or list(a)
c.append(5)
print(a)        # [1, 2, 3, 4] — a unchanged</code></pre>
                        </div>
                    </div>

                    <h2>List Operations</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">a = [1, 2, 3]
b = [4, 5, 6]

# Concatenation
c = a + b           # [1, 2, 3, 4, 5, 6]

# Repetition
d = a * 3           # [1, 2, 3, 1, 2, 3, 1, 2, 3]

# Membership
print(2 in a)       # True
print(7 in a)       # False

# Length, min, max, sum
print(len(a))       # 3
print(min(a))       # 1
print(max(a))       # 3
print(sum(a))       # 6

# Useful functions
print(list(range(5)))    # [0, 1, 2, 3, 4]
print(list("hello"))     # ['h', 'e', 'l', 'l', 'o']</code></pre>
                    </div>

                    <h2>🏋️ Practice Exercises</h2>
                    <div class="story-box">
                        <div class="box-title">Exercise 1 — Easy: Student Roster</div>
                        <p>Create a list of 5 student names. Add 2 more, remove one, sort alphabetically, and print with numbers.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">students = ["Alice", "Bob", "Charlie", "Diana", "Eve"]
students.extend(["Frank", "Grace"])
students.remove("Bob")
students.sort()
for i, name in enumerate(students, 1):
    print(f"{i}. {name}")</code></pre>
                            </div>
                        </details>
                    </div>

                    <div class="story-box">
                        <div class="box-title">Exercise 2 — Medium: Grade Statistics</div>
                        <p>Given grades <code>[85, 92, 78, 95, 88, 72, 96, 83]</code>, find: average, highest, lowest, passing (>=70) count.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">grades = [85, 92, 78, 95, 88, 72, 96, 83]
print(f"Average: {sum(grades)/len(grades):.1f}")
print(f"Highest: {max(grades)}")
print(f"Lowest: {min(grades)}")
passing = [g for g in grades if g >= 70]
print(f"Passing: {len(passing)}/{len(grades)}")</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 19 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ Lists are ordered, mutable, allow duplicates</li>
                            <li>✅ Index access: <code>list[0]</code>, negative: <code>list[-1]</code></li>
                            <li>✅ Slicing: <code>list[start:stop:step]</code></li>
                            <li>✅ append, insert, extend, remove, pop, sort, reverse</li>
                            <li>✅ Lists store references — use <code>.copy()</code> to avoid aliasing</li>
                            <li>✅ in, len, min, max, sum work on lists</li>
                        </ul>
                    </div>
                `

            },
            {
                id: 20,
                title: "Tuples - Immutable Sequences",
                module: "Module 4",
                story: `
                    <h2>📖 The Story of the Sealed Package</h2>
                    <p>A sealed package contains items that cannot be changed — once sealed, the contents are fixed. You can look inside, but you can't add or remove anything.</p>
                    <p>Tuples are Python's sealed packages: ordered, immutable sequences. Once created, they cannot be modified. This makes them perfect for data that should never change — coordinates, RGB colors, database records.</p>
                `,
                content: `
                    <h2>Creating and Using Tuples</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># Creating tuples
point = (3, 4)
rgb = (255, 128, 0)
person = ("Alice", 25, "NYC")
single = (42,)    # Single-element tuple needs trailing comma!
empty = ()

# Accessing (same as lists)
print(point[0])   # 3
print(point[-1])  # 4

# Unpacking
x, y = point
print(f"x={x}, y={y}")

name, age, city = person
print(f"{name} is {age} from {city}")

# Swap variables using tuple unpacking!
a, b = 10, 20
a, b = b, a
print(f"a={a}, b={b}")   # a=20, b=10</code></pre>
                    </div>

                    <h2>Tuples are Immutable</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">point = (3, 4)

# ❌ Cannot modify a tuple
point[0] = 5   # TypeError: 'tuple' object does not support item assignment
point.append(5)  # AttributeError: 'tuple' has no attribute 'append'

# ✅ But you can create a new tuple
new_point = point + (5,)
print(new_point)   # (3, 4, 5)

# Tuples can contain mutable objects!
data = ([1, 2, 3], "hello")
data[0].append(4)   # This works! The list inside can change
print(data)   # ([1, 2, 3, 4], 'hello')</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 Why Use Tuples Instead of Lists?</div>
                        <ul>
                            <li><strong>Speed:</strong> Tuples are faster than lists (less overhead)</li>
                            <li><strong>Safety:</strong> Immutability prevents accidental modification</li>
                            <li><strong>Hashable:</strong> Tuples can be used as dictionary keys; lists cannot</li>
                            <li><strong>Semantics:</strong> Signals "this data should not change"</li>
                        </ul>
                        <div class="code-block">
                            <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                            <pre><code class="language-python"># Tuples as dictionary keys
locations = {
    (40.7128, -74.0060): "New York",
    (51.5074, -0.1278): "London",
    (35.6762, 139.6503): "Tokyo"
}
print(locations[(40.7128, -74.0060)])   # New York

# Lists CANNOT be dict keys (unhashable)
# {[1, 2]: "value"}   # TypeError!</code></pre>
                        </div>
                    </div>

                    <h2>Named Tuples</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Named Tuples</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">from collections import namedtuple

# Create a named tuple type
Point = namedtuple("Point", ["x", "y"])
Person = namedtuple("Person", ["name", "age", "city"])

# Create instances
p = Point(3, 4)
alice = Person("Alice", 25, "NYC")

# Access by name (much clearer than index!)
print(p.x, p.y)           # 3 4
print(alice.name)          # Alice
print(alice.age)           # 25

# Still immutable, still a tuple
print(isinstance(p, tuple))  # True</code></pre>
                    </div>

                    <h2>🏋️ Practice Exercises</h2>
                    <div class="story-box">
                        <div class="box-title">Exercise 1 — Easy: Coordinate Distance</div>
                        <p>Given two points as tuples <code>(x1, y1)</code> and <code>(x2, y2)</code>, calculate the distance between them.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">import math
p1 = (0, 0)
p2 = (3, 4)
x1, y1 = p1
x2, y2 = p2
distance = math.sqrt((x2-x1)**2 + (y2-y1)**2)
print(f"Distance: {distance}")   # 5.0</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 20 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ Tuples are ordered, immutable sequences</li>
                            <li>✅ Created with <code>()</code> or just commas: <code>a, b = 1, 2</code></li>
                            <li>✅ Single-element tuple needs trailing comma: <code>(42,)</code></li>
                            <li>✅ Tuple unpacking: <code>x, y = point</code></li>
                            <li>✅ Tuples are hashable — can be dict keys</li>
                            <li>✅ Use namedtuple for readable, self-documenting data</li>
                        </ul>
                    </div>
                `

            },
            {
                id: 21,
                title: "Dictionaries - Key-Value Storage",
                module: "Module 4",
                story: `
                    <h2>📖 The Story of the Phone Book</h2>
                    <p>A phone book maps names to phone numbers. You look up "Alice" and instantly get her number — you don't scan every entry from the beginning. This is the power of key-value storage.</p>
                    <p>Python dictionaries are the most powerful built-in data structure. They map unique keys to values, providing lightning-fast lookups. They're used everywhere — from storing user data to counting words to caching results.</p>
                `,
                content: `
                    <h2>Creating and Accessing Dictionaries</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># Creating dictionaries
person = {"name": "Alice", "age": 25, "city": "NYC"}
empty = {}
from_keys = dict(name="Bob", age=30)

# Accessing values
print(person["name"])           # Alice
print(person.get("age"))        # 25
print(person.get("email", "N/A"))  # N/A (default if key missing)

# ❌ KeyError if key doesn't exist
# print(person["email"])   # KeyError!
# ✅ Use .get() for safe access
email = person.get("email")   # Returns None if not found</code></pre>
                    </div>

                    <h2>Modifying Dictionaries</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">person = {"name": "Alice", "age": 25}

# Adding/updating
person["email"] = "alice@example.com"   # Add new key
person["age"] = 26                       # Update existing key
person.update({"city": "LA", "age": 27}) # Update multiple

# Removing
del person["email"]                      # Delete key
age = person.pop("age")                  # Remove and return value
last = person.popitem()                  # Remove and return last item

# Checking existence
print("name" in person)    # True
print("email" in person)   # False</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 How Dictionaries Work — Hash Tables</div>
                        <p>Python dicts use a <strong>hash table</strong> internally. When you do <code>d["key"]</code>, Python computes a hash of "key" and uses it to directly locate the value in memory — O(1) lookup time regardless of dict size!</p>
                        <div class="code-block">
                            <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                            <pre><code class="language-python"># Hash function demo
print(hash("hello"))    # Some integer (hash of "hello")
print(hash(42))         # 42 (integers hash to themselves)
print(hash((1, 2)))     # Tuples are hashable
# print(hash([1, 2]))   # TypeError! Lists are not hashable</code></pre>
                        </div>
                    </div>

                    <h2>Iterating Over Dictionaries</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">scores = {"Alice": 95, "Bob": 87, "Charlie": 92}

# Iterate over keys (default)
for name in scores:
    print(name)

# Iterate over values
for score in scores.values():
    print(score)

# Iterate over key-value pairs
for name, score in scores.items():
    print(f"{name}: {score}")

# Get all keys, values, items
print(list(scores.keys()))    # ['Alice', 'Bob', 'Charlie']
print(list(scores.values()))  # [95, 87, 92]
print(list(scores.items()))   # [('Alice', 95), ('Bob', 87), ('Charlie', 92)]</code></pre>
                    </div>

                    <h2>Practical Dictionary Patterns</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Word Counter</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">text = "the quick brown fox jumps over the lazy dog the fox"
words = text.split()

# Count word frequencies
word_count = {}
for word in words:
    word_count[word] = word_count.get(word, 0) + 1

# Sort by frequency
sorted_words = sorted(word_count.items(), key=lambda x: x[1], reverse=True)
for word, count in sorted_words[:5]:
    print(f"{word}: {count}")

# Using defaultdict (cleaner)
from collections import defaultdict, Counter
word_count2 = Counter(words)
print(word_count2.most_common(3))</code></pre>
                    </div>

                    <h2>🏋️ Practice Exercises</h2>
                    <div class="story-box">
                        <div class="box-title">Exercise 1 — Easy: Phone Book</div>
                        <p>Create a phone book dict. Add 3 contacts, look one up, update a number, delete one, print all.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">phonebook = {"Alice": "555-1234", "Bob": "555-5678", "Charlie": "555-9012"}
print(phonebook.get("Alice", "Not found"))
phonebook["Bob"] = "555-0000"
del phonebook["Charlie"]
for name, number in phonebook.items():
    print(f"{name}: {number}")</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 21 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ Dicts store key-value pairs with O(1) lookup</li>
                            <li>✅ <code>d[key]</code> raises KeyError; <code>d.get(key)</code> returns None</li>
                            <li>✅ .keys(), .values(), .items() for iteration</li>
                            <li>✅ .update(), .pop(), .popitem() for modification</li>
                            <li>✅ Keys must be hashable (strings, numbers, tuples)</li>
                            <li>✅ Use Counter for frequency counting</li>
                        </ul>
                    </div>
                `

            },
            {
                id: 22,
                title: "Sets - Unique Collections",
                module: "Module 4",
                story: `
                    <h2>📖 The Story of the Guest List</h2>
                    <p>A guest list for a party has no duplicates — each person is either invited or not. You can check if someone is on the list instantly, combine two lists (union), find who's on both lists (intersection), or find who's only on one list (difference).</p>
                    <p>Python sets are exactly this: unordered collections of unique elements. They're blazing fast for membership testing and support mathematical set operations.</p>
                `,
                content: `
                    <h2>Creating and Using Sets</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># Creating sets
fruits = {"apple", "banana", "cherry"}
numbers = {1, 2, 3, 4, 5}
from_list = set([1, 2, 2, 3, 3, 3])   # Removes duplicates!
print(from_list)   # {1, 2, 3}

empty_set = set()   # NOT {} — that creates an empty dict!

# Sets have no duplicates
colors = {"red", "blue", "red", "green", "blue"}
print(colors)   # {'red', 'blue', 'green'} — duplicates removed

# Membership testing (very fast!)
print("apple" in fruits)    # True
print("grape" in fruits)    # False</code></pre>
                    </div>

                    <h2>Set Operations</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Mathematical Set Operations</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">a = {1, 2, 3, 4, 5}
b = {4, 5, 6, 7, 8}

# Union — all elements from both sets
print(a | b)          # {1, 2, 3, 4, 5, 6, 7, 8}
print(a.union(b))     # Same

# Intersection — elements in BOTH sets
print(a & b)          # {4, 5}
print(a.intersection(b))

# Difference — elements in a but NOT in b
print(a - b)          # {1, 2, 3}
print(a.difference(b))

# Symmetric difference — elements in either but NOT both
print(a ^ b)          # {1, 2, 3, 6, 7, 8}
print(a.symmetric_difference(b))</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 Sets vs Lists — Performance</div>
                        <p>Membership testing in a set is O(1) — constant time regardless of size. In a list, it's O(n) — it must check every element. For large collections, this difference is massive!</p>
                        <div class="code-block">
                            <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                            <pre><code class="language-python">import time

big_list = list(range(1000000))
big_set = set(range(1000000))

# List search — O(n)
start = time.time()
999999 in big_list
print(f"List: {time.time()-start:.4f}s")   # ~0.01s

# Set search — O(1)
start = time.time()
999999 in big_set
print(f"Set: {time.time()-start:.6f}s")    # ~0.0001s (100x faster!)</code></pre>
                        </div>
                    </div>

                    <h2>Modifying Sets</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">fruits = {"apple", "banana"}

fruits.add("cherry")           # Add one element
fruits.update(["date", "elderberry"])  # Add multiple
fruits.remove("banana")        # Remove (raises KeyError if missing)
fruits.discard("grape")        # Remove (no error if missing)
popped = fruits.pop()          # Remove and return arbitrary element
fruits.clear()                 # Remove all elements

# Subset/superset checks
a = {1, 2, 3}
b = {1, 2, 3, 4, 5}
print(a.issubset(b))    # True (a ⊆ b)
print(b.issuperset(a))  # True (b ⊇ a)
print(a.isdisjoint({6, 7}))  # True (no common elements)</code></pre>
                    </div>

                    <h2>Practical Uses</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Remove Duplicates</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># Remove duplicates from a list (preserving order in Python 3.7+)
data = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
unique = list(dict.fromkeys(data))   # Preserves order
print(unique)   # [3, 1, 4, 5, 9, 2, 6]

# Or just use set (order not preserved)
unique_set = list(set(data))

# Find common elements between two lists
list1 = ["Alice", "Bob", "Charlie", "Diana"]
list2 = ["Bob", "Diana", "Eve", "Frank"]
common = set(list1) & set(list2)
print(f"Common: {common}")   # {'Bob', 'Diana'}</code></pre>
                    </div>

                    <h2>🏋️ Practice Exercises</h2>
                    <div class="story-box">
                        <div class="box-title">Exercise 1 — Easy: Unique Words</div>
                        <p>Count unique words in: "to be or not to be that is the question to be"</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">text = "to be or not to be that is the question to be"
words = text.split()
unique = set(words)
print(f"Total words: {len(words)}")
print(f"Unique words: {len(unique)}")
print(f"Words: {unique}")</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 22 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ Sets are unordered collections of unique elements</li>
                            <li>✅ O(1) membership testing — much faster than lists</li>
                            <li>✅ Set operations: | (union), &amp; (intersection), - (difference), ^ (symmetric diff)</li>
                            <li>✅ add, update, remove, discard, pop, clear</li>
                            <li>✅ issubset, issuperset, isdisjoint</li>
                            <li>✅ Use sets to remove duplicates and find common elements</li>
                        </ul>
                    </div>
                `

            },
            {
                id: 23,
                title: "String Methods - Text Processing",
                module: "Module 4",
                story: `
                    <h2>📖 The Story of the Text Editor</h2>
                    <p>Every text editor has tools: find and replace, convert to uppercase, trim whitespace, split into words. These are all string operations that Python has built right in.</p>
                    <p>Python strings come with over 40 built-in methods. Mastering them means you can process, transform, and analyze text with just a few lines of code.</p>
                `,
                content: `
                    <h2>Essential String Methods</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Case Methods</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">text = "Hello, World!"

print(text.upper())       # HELLO, WORLD!
print(text.lower())       # hello, world!
print(text.title())       # Hello, World!
print(text.capitalize())  # Hello, world!
print(text.swapcase())    # hELLO, wORLD!</code></pre>
                    </div>

                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Search Methods</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">text = "Python is awesome and Python is fun"

print(text.find("Python"))        # 0 (first occurrence)
print(text.rfind("Python"))       # 22 (last occurrence)
print(text.find("Java"))          # -1 (not found)
print(text.index("Python"))       # 0 (like find but raises ValueError if not found)
print(text.count("Python"))       # 2
print(text.startswith("Python"))  # True
print(text.endswith("fun"))       # True
print("awesome" in text)          # True</code></pre>
                    </div>

                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Modify Methods</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">text = "  Hello, World!  "

print(text.strip())         # "Hello, World!" (remove both ends)
print(text.lstrip())        # "Hello, World!  " (remove left)
print(text.rstrip())        # "  Hello, World!" (remove right)
print(text.strip().replace("World", "Python"))  # "Hello, Python!"

# Replace
sentence = "I like cats. Cats are great."
print(sentence.replace("cats", "dogs"))   # Case-sensitive!
print(sentence.replace("Cats", "Dogs"))

# Split and join
csv_line = "Alice,25,NYC,Engineer"
parts = csv_line.split(",")
print(parts)   # ['Alice', '25', 'NYC', 'Engineer']

words = ["Python", "is", "great"]
print(" ".join(words))    # "Python is great"
print("-".join(words))    # "Python-is-great"</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 Strings are Immutable</div>
                        <p>Every string method returns a <strong>new string</strong> — the original is never modified. This is because strings are immutable in Python.</p>
                        <div class="code-block">
                            <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                            <pre><code class="language-python">text = "hello"
text.upper()   # Creates new string, but doesn't change text!
print(text)    # Still "hello"

# ✅ Assign the result
text = text.upper()
print(text)    # "HELLO"</code></pre>
                        </div>
                    </div>

                    <h2>String Formatting</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — All Formatting Methods</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">name = "Alice"
score = 95.678

# f-strings (recommended, Python 3.6+)
print(f"Name: {name}, Score: {score:.2f}")

# .format() method
print("Name: {}, Score: {:.2f}".format(name, score))

# % formatting (old style)
print("Name: %s, Score: %.2f" % (name, score))

# Padding and alignment
print(f"{'Left':<10}|")    # Left-align in 10 chars
print(f"{'Right':>10}|")   # Right-align in 10 chars
print(f"{'Center':^10}|")  # Center in 10 chars
print(f"{42:05d}")          # Zero-pad: 00042
print(f"{3.14159:.3f}")     # 3 decimal places: 3.142</code></pre>
                    </div>

                    <h2>🏋️ Practice Exercises</h2>
                    <div class="story-box">
                        <div class="box-title">Exercise 1 — Easy: Name Formatter</div>
                        <p>Ask for first and last name. Print: "Last, First" in title case, email as "first.last@example.com" in lowercase.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">first = input("First name: ").strip()
last = input("Last name: ").strip()
print(f"Formatted: {last.title()}, {first.title()}")
email = f"{first.lower()}.{last.lower()}@example.com"
print(f"Email: {email}")</code></pre>
                            </div>
                        </details>
                    </div>

                    <div class="story-box">
                        <div class="box-title">Exercise 2 — Medium: CSV Parser</div>
                        <p>Parse "Alice,25,NYC,Engineer" into a formatted profile card.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">data = "Alice,25,NYC,Engineer"
name, age, city, job = data.split(",")
print("=" * 25)
print(f"{'PROFILE':^25}")
print("=" * 25)
print(f"{'Name:':<10} {name}")
print(f"{'Age:':<10} {age}")
print(f"{'City:':<10} {city}")
print(f"{'Job:':<10} {job}")</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 23 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ Case: upper, lower, title, capitalize, swapcase</li>
                            <li>✅ Search: find, rfind, index, count, startswith, endswith</li>
                            <li>✅ Modify: strip, replace, split, join</li>
                            <li>✅ Strings are immutable — methods return new strings</li>
                            <li>✅ f-strings with format specs: <code>:.2f</code>, <code>:&lt;10</code>, <code>:05d</code></li>
                        </ul>
                    </div>
                `

            },
            {
                id: 24,
                title: "File Handling - Reading and Writing Files",
                module: "Module 4",
                story: `
                    <h2>📖 The Story of the Librarian</h2>
                    <p>A librarian opens a book, reads its contents, writes notes, and closes it when done. They always close the book — leaving it open wastes resources and can cause problems.</p>
                    <p>File handling in Python follows the same pattern: open, read/write, close. Python's <code>with</code> statement makes this automatic — the file is always closed, even if an error occurs.</p>
                `,
                content: `
                    <h2>Reading Files</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Reading Files</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># Using 'with' statement (recommended — auto-closes file)
with open("data.txt", "r") as file:
    content = file.read()        # Read entire file as string
    print(content)

# Read line by line
with open("data.txt", "r") as file:
    for line in file:
        print(line.strip())      # strip() removes newline

# Read all lines into a list
with open("data.txt", "r") as file:
    lines = file.readlines()     # ['line1\n', 'line2\n', ...]

# Read one line at a time
with open("data.txt", "r") as file:
    first_line = file.readline()
    second_line = file.readline()</code></pre>
                    </div>

                    <h2>Writing Files</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Writing Files</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># Write mode 'w' — creates or overwrites
with open("output.txt", "w") as file:
    file.write("Hello, World!\n")
    file.write("Second line\n")

# Append mode 'a' — adds to existing file
with open("output.txt", "a") as file:
    file.write("Third line\n")

# Write multiple lines at once
lines = ["Line 1\n", "Line 2\n", "Line 3\n"]
with open("output.txt", "w") as file:
    file.writelines(lines)

# Using print() to write to file
with open("output.txt", "w") as file:
    print("Hello!", file=file)
    print("World!", file=file)</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 File Modes</div>
                        <table style="width:100%;border-collapse:collapse;margin-top:10px;">
                            <tr style="background:rgba(102,126,234,0.2);">
                                <th style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Mode</th>
                                <th style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Description</th>
                            </tr>
                            <tr><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>"r"</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Read (default). Error if file doesn't exist.</td></tr>
                            <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>"w"</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Write. Creates file or overwrites existing.</td></tr>
                            <tr><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>"a"</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Append. Creates file or adds to existing.</td></tr>
                            <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>"r+"</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Read and write. File must exist.</td></tr>
                            <tr><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>"x"</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Exclusive creation. Error if file exists.</td></tr>
                        </table>
                    </div>

                    <h2>Working with CSV and JSON</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — CSV Files</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">import csv

# Write CSV
students = [
    ["Name", "Age", "Grade"],
    ["Alice", 20, "A"],
    ["Bob", 22, "B"],
]
with open("students.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerows(students)

# Read CSV
with open("students.csv", "r") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(f"{row['Name']}: {row['Grade']}")</code></pre>
                    </div>

                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — JSON Files</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">import json

# Write JSON
data = {"name": "Alice", "age": 25, "scores": [95, 87, 92]}
with open("data.json", "w") as f:
    json.dump(data, f, indent=2)

# Read JSON
with open("data.json", "r") as f:
    loaded = json.load(f)
print(loaded["name"])   # Alice</code></pre>
                    </div>

                    <h2>🏋️ Practice Exercises</h2>
                    <div class="story-box">
                        <div class="box-title">Exercise 1 — Easy: Note Saver</div>
                        <p>Write a program that lets users type notes and saves them to "notes.txt". Each note on a new line with timestamp.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">from datetime import datetime
while True:
    note = input("Enter note (or 'quit'): ")
    if note.lower() == "quit":
        break
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M")
    with open("notes.txt", "a") as f:
        f.write(f"[{timestamp}] {note}\n")
    print("Note saved!")</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 24 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ Always use <code>with open()</code> — auto-closes the file</li>
                            <li>✅ Modes: "r" (read), "w" (write/overwrite), "a" (append)</li>
                            <li>✅ read(), readline(), readlines() for reading</li>
                            <li>✅ write(), writelines() for writing</li>
                            <li>✅ csv module for CSV files, json module for JSON</li>
                        </ul>
                    </div>
                `

            },
            {
                id: 25,
                title: "Project - Data Manager",
                module: "Module 4",
                story: `
                    <h2>📖 The Story of the Digital Organizer</h2>
                    <p>A digital organizer stores contacts, keeps them sorted, lets you search, and saves everything to disk so nothing is lost when you close the app. It's a complete data management system.</p>
                    <p>In this project, you'll build a Contact Manager that uses lists, dictionaries, sets, string methods, and file handling — everything from Module 4 combined into one useful application.</p>
                `,
                content: `
                    <h2>Project: Contact Manager</h2>

                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Complete Contact Manager</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">import json
import os

FILENAME = "contacts.json"

def load_contacts():
    """Load contacts from file."""
    if os.path.exists(FILENAME):
        with open(FILENAME, "r") as f:
            return json.load(f)
    return {}

def save_contacts(contacts):
    """Save contacts to file."""
    with open(FILENAME, "w") as f:
        json.dump(contacts, f, indent=2)
    print("✅ Contacts saved!")

def add_contact(contacts):
    """Add a new contact."""
    name = input("Name: ").strip().title()
    if not name:
        print("Name cannot be empty!")
        return
    if name in contacts:
        print(f"Contact '{name}' already exists!")
        return
    phone = input("Phone: ").strip()
    email = input("Email: ").strip().lower()
    contacts[name] = {"phone": phone, "email": email}
    print(f"✅ Added {name}")

def search_contact(contacts):
    """Search for a contact."""
    query = input("Search name: ").strip().lower()
    results = {k: v for k, v in contacts.items() if query in k.lower()}
    if results:
        for name, info in results.items():
            print(f"\\n👤 {name}")
            print(f"   📞 {info['phone']}")
            print(f"   📧 {info['email']}")
    else:
        print(f"No contacts found for '{query}'")

def list_contacts(contacts):
    """List all contacts."""
    if not contacts:
        print("No contacts yet!")
        return
    print(f"\\n{'='*40}")
    print(f"{'CONTACTS':^40}")
    print(f"{'='*40}")
    for i, (name, info) in enumerate(sorted(contacts.items()), 1):
        print(f"{i:2}. {name:<20} {info['phone']}")
    print(f"{'='*40}")
    print(f"Total: {len(contacts)} contacts")

def delete_contact(contacts):
    """Delete a contact."""
    name = input("Name to delete: ").strip().title()
    if name in contacts:
        confirm = input(f"Delete {name}? (yes/no): ").lower()
        if confirm == "yes":
            del contacts[name]
            print(f"✅ Deleted {name}")
    else:
        print(f"Contact '{name}' not found")

# Main program
contacts = load_contacts()
print("=== CONTACT MANAGER ===")

while True:
    print("\\n1. Add contact")
    print("2. Search contact")
    print("3. List all contacts")
    print("4. Delete contact")
    print("5. Save and quit")
    
    choice = input("\\nChoice (1-5): ").strip()
    
    if choice == "1":
        add_contact(contacts)
    elif choice == "2":
        search_contact(contacts)
    elif choice == "3":
        list_contacts(contacts)
    elif choice == "4":
        delete_contact(contacts)
    elif choice == "5":
        save_contacts(contacts)
        print("Goodbye! 👋")
        break
    else:
        print("Invalid choice")</code></pre>
                    </div>

                    <h2>🏋️ Project Extensions</h2>
                    <div class="story-box">
                        <div class="box-title">Challenge 1 — Add Groups/Tags</div>
                        <p>Add a "groups" field to contacts (e.g., "family", "work", "friends"). Allow filtering by group.</p>
                    </div>

                    <div class="story-box">
                        <div class="box-title">Challenge 2 — Export to CSV</div>
                        <p>Add an option to export all contacts to a CSV file that can be opened in Excel.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Hint</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">import csv
def export_to_csv(contacts):
    with open("contacts.csv", "w", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(["Name", "Phone", "Email"])
        for name, info in sorted(contacts.items()):
            writer.writerow([name, info["phone"], info["email"]])
    print("Exported to contacts.csv")</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Module 4 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ Lists — ordered, mutable, indexed collections</li>
                            <li>✅ Tuples — ordered, immutable, hashable sequences</li>
                            <li>✅ Dictionaries — key-value pairs with O(1) lookup</li>
                            <li>✅ Sets — unique elements with fast membership testing</li>
                            <li>✅ String methods — 40+ built-in text processing tools</li>
                            <li>✅ File handling — reading, writing, CSV, JSON</li>
                        </ul>
                    </div>
                `

            }
        ]
    },
    {
        id: 5,
        title: "Module 5: Functions",
        icon: "⚡",
        description: "Create reusable code blocks and understand scope",
        lessons: 6,
        duration: "3 hours",
        lessons_data: [
            {
                id: 26,
                title: "Lambda Functions - Anonymous Functions",
                module: "Module 5",
                story: `
                    <h2>📖 The Story of the Quick Note</h2>
                    <p>Sometimes you need a function for just one quick task — like a sticky note rather than a full document. You write it, use it, and move on. Lambda functions are Python's sticky notes: small, anonymous, single-use functions.</p>
                `,
                content: `
                    <h2>Lambda Syntax</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># Syntax: lambda parameters: expression

# Regular function
def square(x):
    return x ** 2

# Equivalent lambda
square = lambda x: x ** 2
print(square(5))   # 25

# Multiple parameters
add = lambda a, b: a + b
print(add(3, 4))   # 7

# With default parameter
greet = lambda name, greeting="Hello": f"{greeting}, {name}!"
print(greet("Alice"))        # Hello, Alice!
print(greet("Bob", "Hi"))    # Hi, Bob!</code></pre>
                    </div>

                    <h2>Lambdas with sorted(), map(), filter()</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">students = [
    {"name": "Alice", "grade": 92},
    {"name": "Bob", "grade": 85},
    {"name": "Charlie", "grade": 97},
]

# Sort by grade (lambda as key)
sorted_students = sorted(students, key=lambda s: s["grade"], reverse=True)
for s in sorted_students:
    print(f"{s['name']}: {s['grade']}")

# map() — apply function to each element
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
print(squared)   # [1, 4, 9, 16, 25]

# filter() — keep elements where function returns True
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)   # [2, 4]

# Combining map and filter
result = list(map(lambda x: x**2, filter(lambda x: x % 2 == 0, range(1, 11))))
print(result)   # [4, 16, 36, 64, 100]</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 Lambda vs Regular Function</div>
                        <p><strong>Use lambda when:</strong> Simple one-expression functions, especially as arguments to sorted/map/filter</p>
                        <p><strong>Use def when:</strong> Multiple statements, complex logic, docstrings needed, reusable function</p>
                        <div class="code-block">
                            <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                            <pre><code class="language-python"># ✅ Good lambda use
names = ["Alice", "Bob", "Charlie"]
names.sort(key=lambda x: len(x))   # Sort by length

# ❌ Bad lambda use (too complex)
process = lambda x: x**2 if x > 0 else -x if x < 0 else 0
# ✅ Use def for complex logic
def process(x):
    if x > 0: return x**2
    elif x < 0: return -x
    else: return 0</code></pre>
                        </div>
                    </div>

                    <h2>🏋️ Practice Exercises</h2>
                    <div class="story-box">
                        <div class="box-title">Exercise 1 — Easy: Sort by Last Name</div>
                        <p>Sort <code>["Alice Smith", "Bob Jones", "Charlie Brown"]</code> by last name using a lambda.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">names = ["Alice Smith", "Bob Jones", "Charlie Brown"]
sorted_names = sorted(names, key=lambda n: n.split()[-1])
print(sorted_names)   # ['Charlie Brown', 'Bob Jones', 'Alice Smith']</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 26 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ <code>lambda params: expression</code> — anonymous function</li>
                            <li>✅ Perfect as arguments to sorted(), map(), filter()</li>
                            <li>✅ map() applies a function to every element</li>
                            <li>✅ filter() keeps elements where function returns True</li>
                            <li>✅ Use def for complex logic, lambda for simple one-liners</li>
                        </ul>
                    </div>
                `

            },
            {
                id: 27,
                title: "Error Handling - try, except, finally",
                module: "Module 5",
                story: `
                    <h2>📖 The Story of the Safety Net</h2>
                    <p>A trapeze artist performs daring stunts high above the ground. But there's always a safety net below — if something goes wrong, they fall safely. Without the net, one mistake is catastrophic.</p>
                    <p>Error handling is Python's safety net. Instead of crashing when something goes wrong, your program catches the error, handles it gracefully, and continues running.</p>
                `,
                content: `
                    <h2>try-except Basics</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># Without error handling — program crashes
# result = 10 / 0   # ZeroDivisionError: division by zero

# With error handling — program continues
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
    result = 0

print(f"Result: {result}")   # Result: 0</code></pre>
                    </div>

                    <h2>Catching Multiple Exceptions</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">def safe_divide(a, b):
    try:
        result = a / b
        return result
    except ZeroDivisionError:
        print("Error: Cannot divide by zero")
        return None
    except TypeError:
        print("Error: Both arguments must be numbers")
        return None

# Catching multiple in one except
try:
    value = int(input("Enter a number: "))
    result = 100 / value
except (ValueError, ZeroDivisionError) as e:
    print(f"Error: {e}")

# Catching all exceptions (use sparingly!)
try:
    risky_operation()
except Exception as e:
    print(f"Something went wrong: {type(e).__name__}: {e}")</code></pre>
                    </div>

                    <h2>else and finally</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">try:
    num = int(input("Enter a number: "))
    result = 100 / num
except ValueError:
    print("Not a valid number!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
else:
    # Runs ONLY if no exception occurred
    print(f"Result: {result}")
finally:
    # ALWAYS runs, exception or not
    print("Calculation attempt complete")

# Real-world: file handling
try:
    with open("data.txt", "r") as f:
        data = f.read()
except FileNotFoundError:
    print("File not found!")
    data = ""
except PermissionError:
    print("No permission to read file!")
    data = ""
else:
    print(f"Read {len(data)} characters")
finally:
    print("File operation complete")</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 Common Built-in Exceptions</div>
                        <table style="width:100%;border-collapse:collapse;margin-top:10px;">
                            <tr style="background:rgba(102,126,234,0.2);">
                                <th style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Exception</th>
                                <th style="padding:8px;border:1px solid rgba(255,255,255,0.1);">When it occurs</th>
                            </tr>
                            <tr><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>ValueError</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">int("abc"), wrong value type</td></tr>
                            <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>TypeError</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Wrong type for operation</td></tr>
                            <tr><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>IndexError</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">list[100] when list has 5 items</td></tr>
                            <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>KeyError</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">dict["missing_key"]</td></tr>
                            <tr><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>FileNotFoundError</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">open("nonexistent.txt")</td></tr>
                            <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>ZeroDivisionError</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">10 / 0</td></tr>
                        </table>
                    </div>

                    <h2>Raising Custom Exceptions</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">class AgeError(Exception):
    """Custom exception for invalid age."""
    pass

def set_age(age):
    if not isinstance(age, int):
        raise TypeError("Age must be an integer")
    if age < 0 or age > 150:
        raise AgeError(f"Age {age} is not realistic (0-150)")
    return age

try:
    age = set_age(200)
except AgeError as e:
    print(f"Invalid age: {e}")
except TypeError as e:
    print(f"Type error: {e}")</code></pre>
                    </div>

                    <h2>🏋️ Practice Exercises</h2>
                    <div class="story-box">
                        <div class="box-title">Exercise 1 — Easy: Safe Input</div>
                        <p>Write a function <code>get_int(prompt)</code> that keeps asking until the user enters a valid integer.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">def get_int(prompt):
    while True:
        try:
            return int(input(prompt))
        except ValueError:
            print("Please enter a valid integer!")

age = get_int("Enter your age: ")
print(f"Age: {age}")</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 27 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ try/except catches and handles exceptions gracefully</li>
                            <li>✅ Catch specific exceptions (ValueError, TypeError, etc.)</li>
                            <li>✅ else: runs only if no exception occurred</li>
                            <li>✅ finally: always runs (cleanup code)</li>
                            <li>✅ raise to throw exceptions intentionally</li>
                            <li>✅ Create custom exceptions by subclassing Exception</li>
                        </ul>
                    </div>
                `

            },
            {
                id: 28,
                title: "Decorators - Wrapping Functions",
                module: "Module 5",
                story: `
                    <h2>📖 The Story of the Gift Wrapper</h2>
                    <p>You have a gift (a function). A decorator is like a gift wrapper — it adds extra packaging (functionality) around the gift without changing what's inside. The recipient still gets the gift, but now it comes with a bow, a card, and fancy paper.</p>
                    <p>Decorators are one of Python's most elegant features. They let you add functionality to existing functions without modifying them — perfect for logging, timing, authentication, and caching.</p>
                `,
                content: `
                    <h2>Understanding Decorators</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Building a Decorator</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># Step 1: Functions are objects — they can be passed around
def greet():
    print("Hello!")

say_hello = greet   # Assign function to variable
say_hello()         # Hello!

# Step 2: Functions can return functions
def make_greeting(name):
    def greeting():
        print(f"Hello, {name}!")
    return greeting   # Return the inner function

hello_alice = make_greeting("Alice")
hello_alice()   # Hello, Alice!

# Step 3: A decorator wraps a function
def my_decorator(func):
    def wrapper():
        print("Before the function")
        func()   # Call the original function
        print("After the function")
    return wrapper

@my_decorator
def say_hi():
    print("Hi!")

say_hi()
# Before the function
# Hi!
# After the function</code></pre>
                    </div>

                    <h2>Practical Decorators</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Timer Decorator</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">import time
import functools

def timer(func):
    """Measure how long a function takes."""
    @functools.wraps(func)   # Preserves function metadata
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end-start:.4f}s")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(1)
    return "Done!"

result = slow_function()   # slow_function took 1.0012s</code></pre>
                    </div>

                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Logger Decorator</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">import functools

def log_calls(func):
    """Log function calls and results."""
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        args_str = ", ".join(str(a) for a in args)
        print(f"Calling {func.__name__}({args_str})")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned: {result}")
        return result
    return wrapper

@log_calls
def add(a, b):
    return a + b

add(3, 5)
# Calling add(3, 5)
# add returned: 8</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 Built-in Python Decorators</div>
                        <div class="code-block">
                            <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                            <pre><code class="language-python">class Circle:
    def __init__(self, radius):
        self._radius = radius
    
    @property
    def area(self):
        """Computed property — accessed like an attribute."""
        return 3.14159 * self._radius ** 2
    
    @staticmethod
    def is_valid_radius(r):
        """Static method — no self needed."""
        return r > 0
    
    @classmethod
    def unit_circle(cls):
        """Class method — creates instance."""
        return cls(1)

c = Circle(5)
print(c.area)   # 78.54 (no parentheses needed!)
print(Circle.is_valid_radius(5))   # True</code></pre>
                        </div>
                    </div>

                    <h2>🏋️ Practice Exercises</h2>
                    <div class="story-box">
                        <div class="box-title">Exercise 1 — Medium: Retry Decorator</div>
                        <p>Write a decorator that retries a function up to 3 times if it raises an exception.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">import functools
def retry(max_attempts=3):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(1, max_attempts + 1):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    print(f"Attempt {attempt} failed: {e}")
                    if attempt == max_attempts:
                        raise
        return wrapper
    return decorator

@retry(max_attempts=3)
def unreliable():
    import random
    if random.random() < 0.7:
        raise ValueError("Random failure!")
    return "Success!"</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 28 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ Decorators wrap functions to add functionality</li>
                            <li>✅ <code>@decorator</code> syntax is sugar for <code>func = decorator(func)</code></li>
                            <li>✅ Use <code>@functools.wraps</code> to preserve function metadata</li>
                            <li>✅ <code>*args, **kwargs</code> makes decorators work with any function</li>
                            <li>✅ Built-in: @property, @staticmethod, @classmethod</li>
                        </ul>
                    </div>
                `

            },
            {
                id: 29,
                title: "Generators - Lazy Evaluation",
                module: "Module 5",
                story: `
                    <h2>📖 The Story of the Vending Machine vs the Buffet</h2>
                    <p>A buffet puts all the food out at once — great if you're hungry, but wasteful if you only want one item. A vending machine gives you one item at a time, only when you ask for it.</p>
                    <p>Generators are Python's vending machines. Instead of computing all values at once (like a list), they compute values one at a time, only when needed. This saves enormous amounts of memory for large datasets.</p>
                `,
                content: `
                    <h2>Generator Functions</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># Regular function — returns all values at once
def get_squares_list(n):
    return [x**2 for x in range(n)]

# Generator function — yields one value at a time
def get_squares_gen(n):
    for x in range(n):
        yield x**2   # 'yield' pauses and returns a value

# Using the generator
gen = get_squares_gen(5)
print(next(gen))   # 0
print(next(gen))   # 1
print(next(gen))   # 4

# Or iterate with for loop
for square in get_squares_gen(5):
    print(square)   # 0 1 4 9 16</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 Memory Comparison: List vs Generator</div>
                        <div class="code-block">
                            <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                            <pre><code class="language-python">import sys

# List — stores ALL values in memory
big_list = [x**2 for x in range(1000000)]
print(f"List size: {sys.getsizeof(big_list):,} bytes")   # ~8,000,000 bytes!

# Generator — stores only the current state
big_gen = (x**2 for x in range(1000000))
print(f"Generator size: {sys.getsizeof(big_gen)} bytes")  # ~104 bytes!
# 77,000x more memory efficient!</code></pre>
                        </div>
                    </div>

                    <h2>Generator Expressions</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># List comprehension (eager — creates all at once)
squares_list = [x**2 for x in range(10)]

# Generator expression (lazy — creates one at a time)
squares_gen = (x**2 for x in range(10))

# Sum a billion numbers without storing them all!
total = sum(x**2 for x in range(1000000))   # Memory efficient!

# Find first even square > 100
result = next(x**2 for x in range(100) if x**2 > 100 and x % 2 == 0)
print(result)   # 144</code></pre>
                    </div>

                    <h2>Practical Generator Examples</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Infinite Sequence</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">def fibonacci():
    """Infinite Fibonacci sequence generator."""
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

# Get first 10 Fibonacci numbers
fib = fibonacci()
first_10 = [next(fib) for _ in range(10)]
print(first_10)   # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

def read_large_file(filename):
    """Read a large file line by line without loading all into memory."""
    with open(filename, "r") as f:
        for line in f:
            yield line.strip()</code></pre>
                    </div>

                    <h2>🏋️ Practice Exercises</h2>
                    <div class="story-box">
                        <div class="box-title">Exercise 1 — Easy: Even Numbers Generator</div>
                        <p>Write a generator that yields even numbers from 0 to n.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">def evens(n):
    for i in range(0, n+1, 2):
        yield i

for num in evens(20):
    print(num, end=" ")   # 0 2 4 6 8 10 12 14 16 18 20</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 29 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ <code>yield</code> makes a function a generator</li>
                            <li>✅ Generators compute values lazily — one at a time</li>
                            <li>✅ Massive memory savings for large datasets</li>
                            <li>✅ Generator expressions: <code>(expr for x in iterable)</code></li>
                            <li>✅ <code>next(gen)</code> gets the next value</li>
                            <li>✅ Generators can be infinite (like Fibonacci)</li>
                        </ul>
                    </div>
                `

            },
            {
                id: 30,
                title: "Modules and Packages",
                module: "Module 5",
                story: `
                    <h2>📖 The Story of the Toolbox</h2>
                    <p>A carpenter doesn't carry every tool in their hands — they organize tools in a toolbox. Need a hammer? Open the toolbox and grab it. Python's module system is the same: organized collections of tools you import when needed.</p>
                `,
                content: `
                    <h2>Importing Modules</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">import math
import random
import datetime
import os
import sys

# Using module functions
print(math.pi)           # 3.141592653589793
print(math.sqrt(16))     # 4.0
print(math.ceil(4.2))    # 5
print(math.floor(4.8))   # 4

# Random module
print(random.randint(1, 10))     # Random int 1-10
print(random.choice(["a","b","c"]))  # Random choice
print(random.random())           # Float 0.0 to 1.0

# Import specific items
from math import pi, sqrt, factorial
print(pi)           # 3.14159...
print(sqrt(25))     # 5.0
print(factorial(5)) # 120

# Import with alias
import numpy as np   # Common convention
import pandas as pd</code></pre>
                    </div>

                    <h2>Creating Your Own Modules</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — mymath.py</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># File: mymath.py
PI = 3.14159265

def circle_area(radius):
    """Calculate area of a circle."""
    return PI * radius ** 2

def circle_perimeter(radius):
    """Calculate perimeter of a circle."""
    return 2 * PI * radius

def is_prime(n):
    """Check if n is prime."""
    if n < 2: return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0: return False
    return True

# This runs only when the file is executed directly, not when imported
if __name__ == "__main__":
    print(f"Area of circle with r=5: {circle_area(5):.2f}")</code></pre>
                    </div>

                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Using Your Module</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># File: main.py
import mymath

print(mymath.circle_area(5))   # 78.54
print(mymath.is_prime(17))     # True

from mymath import circle_area, is_prime
print(circle_area(3))   # 28.27</code></pre>
                    </div>

                    <h2>Essential Standard Library Modules</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Useful Modules</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">import os
import sys
import datetime
import json
import re

# os — operating system interface
print(os.getcwd())           # Current directory
print(os.listdir("."))       # List files
os.makedirs("new_dir", exist_ok=True)

# datetime — dates and times
now = datetime.datetime.now()
print(now.strftime("%Y-%m-%d %H:%M:%S"))
birthday = datetime.date(2000, 6, 15)
age = (datetime.date.today() - birthday).days // 365

# re — regular expressions
import re
email_pattern = r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
emails = re.findall(email_pattern, "Contact alice@example.com or bob@test.org")
print(emails)   # ['alice@example.com', 'bob@test.org']</code></pre>
                    </div>

                    <h2>🏋️ Practice Exercises</h2>
                    <div class="story-box">
                        <div class="box-title">Exercise 1 — Easy: Date Calculator</div>
                        <p>Using the datetime module, calculate how many days until New Year's Day.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">from datetime import date
today = date.today()
new_year = date(today.year + 1, 1, 1)
days_left = (new_year - today).days
print(f"Days until New Year: {days_left}")</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 30 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ <code>import module</code> and <code>from module import name</code></li>
                            <li>✅ <code>import module as alias</code> for shorter names</li>
                            <li>✅ Create modules by saving Python code in .py files</li>
                            <li>✅ <code>if __name__ == "__main__":</code> for module-safe code</li>
                            <li>✅ Key stdlib modules: math, random, os, datetime, json, re</li>
                        </ul>
                    </div>
                `

            },
            {
                id: 31,
                title: "Project - Advanced Calculator",
                module: "Module 5",
                story: `
                    <h2>📖 The Story of the Swiss Army Knife</h2>
                    <p>A Swiss Army knife has many tools in one compact package. Our advanced calculator will be the same: scientific functions, history, error handling, decorators for timing — all in one elegant program.</p>
                `,
                content: `
                    <h2>Project: Advanced Scientific Calculator</h2>

                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Complete Scientific Calculator</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">import math
import time
import functools

# Decorator for timing and logging
def log_operation(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        try:
            result = func(*args, **kwargs)
            elapsed = time.time() - start
            print(f"  ⏱ Computed in {elapsed*1000:.2f}ms")
            return result
        except Exception as e:
            print(f"  ❌ Error: {e}")
            return None
    return wrapper

class ScientificCalculator:
    def __init__(self):
        self.history = []
        self.memory = 0
    
    def _record(self, expression, result):
        self.history.append(f"{expression} = {result}")
    
    @log_operation
    def evaluate(self, expression):
        """Safely evaluate a math expression."""
        allowed = set("0123456789+-*/().** ")
        if not all(c in allowed for c in expression):
            raise ValueError("Invalid characters in expression")
        result = eval(expression)
        self._record(expression, result)
        return result
    
    def sqrt(self, n):
        if n < 0:
            raise ValueError("Cannot take sqrt of negative number")
        result = math.sqrt(n)
        self._record(f"sqrt({n})", result)
        return result
    
    def factorial(self, n):
        if not isinstance(n, int) or n < 0:
            raise ValueError("Factorial requires non-negative integer")
        result = math.factorial(n)
        self._record(f"{n}!", result)
        return result
    
    def power(self, base, exp):
        result = base ** exp
        self._record(f"{base}^{exp}", result)
        return result
    
    def show_history(self):
        if not self.history:
            print("No history yet")
            return
        print("\\n=== Calculation History ===")
        for i, entry in enumerate(self.history[-10:], 1):
            print(f"  {i}. {entry}")
    
    def store_memory(self, value):
        self.memory = value
        print(f"Stored {value} in memory")
    
    def recall_memory(self):
        print(f"Memory: {self.memory}")
        return self.memory

# Main program
calc = ScientificCalculator()
print("=== SCIENTIFIC CALCULATOR ===")
print("Commands: eval, sqrt, fact, pow, history, mem, quit")

while True:
    cmd = input("\\n> ").strip().lower()
    
    if cmd == "quit":
        print("Goodbye!")
        break
    elif cmd == "eval":
        expr = input("Expression: ")
        result = calc.evaluate(expr)
        if result is not None:
            print(f"= {result}")
    elif cmd == "sqrt":
        n = float(input("Number: "))
        print(f"= {calc.sqrt(n):.6f}")
    elif cmd == "fact":
        n = int(input("Number: "))
        print(f"= {calc.factorial(n)}")
    elif cmd == "pow":
        b = float(input("Base: "))
        e = float(input("Exponent: "))
        print(f"= {calc.power(b, e)}")
    elif cmd == "history":
        calc.show_history()
    elif cmd == "mem":
        sub = input("store/recall: ")
        if sub == "store":
            calc.store_memory(float(input("Value: ")))
        else:
            calc.recall_memory()
    else:
        print("Unknown command")</code></pre>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Module 5 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ Lambda functions for concise anonymous functions</li>
                            <li>✅ Error handling with try/except/else/finally</li>
                            <li>✅ Decorators for adding functionality to functions</li>
                            <li>✅ Generators for memory-efficient lazy evaluation</li>
                            <li>✅ Modules for organizing and reusing code</li>
                            <li>✅ Building production-quality programs with all these tools</li>
                        </ul>
                    </div>
                `

            }
        ]
    },
    {
        id: 6,
        title: "Module 6: Object-Oriented Programming",
        icon: "🏗️",
        description: "Build classes and objects like a professional",
        lessons: 6,
        duration: "4 hours",
        lessons_data: [
            {
                id: 32,
                title: "Classes and Objects - OOP Basics",
                module: "Module 6",
                story: `
                    <h2>📖 The Story of the Blueprint</h2>
                    <p>An architect creates a blueprint for a house. The blueprint defines what every house will have: rooms, doors, windows. But the blueprint itself isn't a house — it's a template. When you build a house from the blueprint, you create an actual house (an object).</p>
                    <p>In Python, a <strong>class</strong> is the blueprint and an <strong>object</strong> (instance) is the actual house. OOP lets you model real-world concepts as code.</p>
                `,
                content: `
                    <h2>Defining Classes</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">class Dog:
    """A class representing a dog."""
    
    # Class variable (shared by all instances)
    species = "Canis lupus familiaris"
    
    def __init__(self, name, breed, age):
        """Constructor — called when creating a new Dog."""
        self.name = name    # Instance variable
        self.breed = breed
        self.age = age
    
    def bark(self):
        """Instance method."""
        return f"{self.name} says: Woof!"
    
    def info(self):
        return f"{self.name} ({self.breed}), {self.age} years old"
    
    def __str__(self):
        """String representation — used by print()."""
        return f"Dog: {self.name}"
    
    def __repr__(self):
        """Official representation — used in debugging."""
        return f"Dog(name='{self.name}', breed='{self.breed}', age={self.age})"

# Creating objects (instances)
rex = Dog("Rex", "German Shepherd", 3)
buddy = Dog("Buddy", "Golden Retriever", 5)

print(rex.bark())    # Rex says: Woof!
print(buddy.info())  # Buddy (Golden Retriever), 5 years old
print(rex)           # Dog: Rex
print(repr(rex))     # Dog(name='Rex', breed='German Shepherd', age=3)
print(Dog.species)   # Canis lupus familiaris</code></pre>
                    </div>

                    <h2>Instance vs Class Variables</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">class Counter:
    count = 0   # Class variable — shared by ALL instances
    
    def __init__(self, name):
        Counter.count += 1
        self.name = name
        self.id = Counter.count   # Instance variable — unique per instance
    
    @classmethod
    def get_count(cls):
        return cls.count
    
    @staticmethod
    def reset():
        Counter.count = 0

c1 = Counter("First")
c2 = Counter("Second")
c3 = Counter("Third")
print(Counter.get_count())   # 3
print(c1.id, c2.id, c3.id)  # 1 2 3</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 The Four Pillars of OOP</div>
                        <ul>
                            <li><strong>Encapsulation:</strong> Bundle data and methods together, hide internal details</li>
                            <li><strong>Inheritance:</strong> Create new classes based on existing ones</li>
                            <li><strong>Polymorphism:</strong> Same interface, different implementations</li>
                            <li><strong>Abstraction:</strong> Hide complexity, expose only what's needed</li>
                        </ul>
                    </div>

                    <h2>🏋️ Practice Exercises</h2>
                    <div class="story-box">
                        <div class="box-title">Exercise 1 — Easy: Bank Account</div>
                        <p>Create a BankAccount class with: balance, deposit(), withdraw() (with overdraft check), and __str__.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    
    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            print(f"Deposited \${amount}. Balance: \${self.balance}")
    
    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient funds!")
        else:
            self.balance -= amount
            print(f"Withdrew \${amount}. Balance: \${self.balance}")
    
    def __str__(self):
        return f"{self.owner}'s account: \${self.balance}"

acc = BankAccount("Alice", 1000)
acc.deposit(500)
acc.withdraw(200)
print(acc)</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 32 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ <code>class</code> defines a blueprint; instances are objects</li>
                            <li>✅ <code>__init__</code> is the constructor</li>
                            <li>✅ <code>self</code> refers to the current instance</li>
                            <li>✅ Instance variables are unique per object; class variables are shared</li>
                            <li>✅ <code>__str__</code> and <code>__repr__</code> for string representations</li>
                            <li>✅ @classmethod and @staticmethod for class-level methods</li>
                        </ul>
                    </div>
                `

            },
            {
                id: 33,
                title: "Inheritance - Extending Classes",
                module: "Module 6",
                story: `
                    <h2>📖 The Story of the Family Tree</h2>
                    <p>Children inherit traits from their parents — eye color, height, personality. But they also develop their own unique traits. In OOP, inheritance works the same way: child classes inherit from parent classes and can add or override behavior.</p>
                `,
                content: `
                    <h2>Basic Inheritance</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">class Animal:
    """Base class (parent)."""
    def __init__(self, name, sound):
        self.name = name
        self.sound = sound
    
    def speak(self):
        return f"{self.name} says {self.sound}!"
    
    def __str__(self):
        return f"Animal: {self.name}"

class Dog(Animal):   # Dog inherits from Animal
    """Child class."""
    def __init__(self, name, breed):
        super().__init__(name, "Woof")   # Call parent's __init__
        self.breed = breed
    
    def fetch(self):   # New method unique to Dog
        return f"{self.name} fetches the ball!"
    
    def speak(self):   # Override parent method
        return f"{self.name} barks: WOOF WOOF!"

class Cat(Animal):
    def __init__(self, name, indoor=True):
        super().__init__(name, "Meow")
        self.indoor = indoor
    
    def purr(self):
        return f"{self.name} purrs..."

# Using the classes
dog = Dog("Rex", "Labrador")
cat = Cat("Whiskers")

print(dog.speak())   # Rex barks: WOOF WOOF! (overridden)
print(cat.speak())   # Whiskers says Meow! (inherited)
print(dog.fetch())   # Rex fetches the ball!
print(cat.purr())    # Whiskers purrs...

# isinstance checks
print(isinstance(dog, Dog))     # True
print(isinstance(dog, Animal))  # True (Dog IS-A Animal)
print(isinstance(cat, Dog))     # False</code></pre>
                    </div>

                    <h2>Multiple Inheritance and MRO</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">class Flyable:
    def fly(self):
        return f"{self.name} is flying!"

class Swimmable:
    def swim(self):
        return f"{self.name} is swimming!"

class Duck(Animal, Flyable, Swimmable):
    def __init__(self, name):
        super().__init__(name, "Quack")

donald = Duck("Donald")
print(donald.speak())  # Donald says Quack!
print(donald.fly())    # Donald is flying!
print(donald.swim())   # Donald is swimming!

# Method Resolution Order (MRO)
print(Duck.__mro__)   # Shows inheritance chain</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 super() — Calling Parent Methods</div>
                        <div class="code-block">
                            <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                            <pre><code class="language-python">class Vehicle:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
    
    def info(self):
        return f"{self.year} {self.make} {self.model}"

class ElectricCar(Vehicle):
    def __init__(self, make, model, year, battery_kwh):
        super().__init__(make, model, year)   # Parent init
        self.battery_kwh = battery_kwh
    
    def info(self):
        base = super().info()   # Call parent method
        return f"{base} (Electric, {self.battery_kwh}kWh)"

tesla = ElectricCar("Tesla", "Model 3", 2024, 75)
print(tesla.info())   # 2024 Tesla Model 3 (Electric, 75kWh)</code></pre>
                        </div>
                    </div>

                    <h2>🏋️ Practice Exercises</h2>
                    <div class="story-box">
                        <div class="box-title">Exercise 1 — Medium: Shape Hierarchy</div>
                        <p>Create a Shape base class with area() and perimeter(). Create Circle and Rectangle subclasses.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">import math
class Shape:
    def area(self): raise NotImplementedError
    def perimeter(self): raise NotImplementedError
    def describe(self):
        return f"{type(self).__name__}: area={self.area():.2f}, perimeter={self.perimeter():.2f}"

class Circle(Shape):
    def __init__(self, radius): self.radius = radius
    def area(self): return math.pi * self.radius**2
    def perimeter(self): return 2 * math.pi * self.radius

class Rectangle(Shape):
    def __init__(self, w, h): self.w, self.h = w, h
    def area(self): return self.w * self.h
    def perimeter(self): return 2 * (self.w + self.h)

shapes = [Circle(5), Rectangle(4, 6)]
for s in shapes:
    print(s.describe())</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 33 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ <code>class Child(Parent):</code> — inherit from parent</li>
                            <li>✅ <code>super().__init__()</code> — call parent constructor</li>
                            <li>✅ Override methods by redefining them in child class</li>
                            <li>✅ <code>isinstance(obj, Class)</code> — check type</li>
                            <li>✅ Multiple inheritance: <code>class C(A, B):</code></li>
                            <li>✅ MRO determines method lookup order</li>
                        </ul>
                    </div>
                `

            },
            {
                id: 34,
                title: "Encapsulation and Properties",
                module: "Module 6",
                story: `
                    <h2>📖 The Story of the ATM</h2>
                    <p>An ATM lets you deposit and withdraw money, but you can't directly access the bank's internal systems. The ATM is an interface that controls access to your account. This is encapsulation — hiding internal data and providing controlled access through methods.</p>
                `,
                content: `
                    <h2>Private and Protected Attributes</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner           # Public
        self._account_id = "ACC001"  # Protected (convention: don't access directly)
        self.__balance = balance     # Private (name-mangled)
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
    
    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            return amount
        raise ValueError("Invalid withdrawal amount")
    
    def get_balance(self):
        return self.__balance

acc = BankAccount("Alice", 1000)
print(acc.owner)           # Alice (public — OK)
print(acc._account_id)     # ACC001 (works but shouldn't)
# print(acc.__balance)     # AttributeError! (private)
print(acc.get_balance())   # 1000 (controlled access)</code></pre>
                    </div>

                    <h2>Properties — Pythonic Getters/Setters</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — @property</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">class Temperature:
    def __init__(self, celsius=0):
        self._celsius = celsius
    
    @property
    def celsius(self):
        """Getter — accessed like an attribute."""
        return self._celsius
    
    @celsius.setter
    def celsius(self, value):
        """Setter — validates before setting."""
        if value < -273.15:
            raise ValueError("Temperature below absolute zero!")
        self._celsius = value
    
    @celsius.deleter
    def celsius(self):
        del self._celsius
    
    @property
    def fahrenheit(self):
        """Computed property — no setter needed."""
        return self._celsius * 9/5 + 32
    
    @property
    def kelvin(self):
        return self._celsius + 273.15

temp = Temperature(25)
print(temp.celsius)     # 25 (getter)
print(temp.fahrenheit)  # 77.0 (computed)
print(temp.kelvin)      # 298.15 (computed)

temp.celsius = 100      # Setter with validation
print(temp.fahrenheit)  # 212.0

# temp.celsius = -300   # ValueError: Temperature below absolute zero!</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 Why Use Properties?</div>
                        <ul>
                            <li><strong>Validation:</strong> Check values before setting them</li>
                            <li><strong>Computed values:</strong> Calculate on-the-fly (like fahrenheit from celsius)</li>
                            <li><strong>Backward compatibility:</strong> Add validation to existing code without changing the interface</li>
                            <li><strong>Clean API:</strong> <code>obj.celsius = 100</code> looks cleaner than <code>obj.set_celsius(100)</code></li>
                        </ul>
                    </div>

                    <h2>🏋️ Practice Exercises</h2>
                    <div class="story-box">
                        <div class="box-title">Exercise 1 — Medium: Student with Grade Property</div>
                        <p>Create a Student class with a grade property that validates (0-100) and computes letter grade.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade  # Uses setter
    
    @property
    def grade(self):
        return self._grade
    
    @grade.setter
    def grade(self, value):
        if not 0 <= value <= 100:
            raise ValueError("Grade must be 0-100")
        self._grade = value
    
    @property
    def letter_grade(self):
        if self._grade >= 90: return "A"
        elif self._grade >= 80: return "B"
        elif self._grade >= 70: return "C"
        elif self._grade >= 60: return "D"
        else: return "F"

s = Student("Alice", 92)
print(f"{s.name}: {s.grade} ({s.letter_grade})")</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 34 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ Public: <code>name</code>, Protected: <code>_name</code>, Private: <code>__name</code></li>
                            <li>✅ @property creates getter — access like attribute</li>
                            <li>✅ @name.setter adds validation when setting</li>
                            <li>✅ Computed properties calculate values on-the-fly</li>
                            <li>✅ Properties provide clean, Pythonic encapsulation</li>
                        </ul>
                    </div>
                `

            },
            {
                id: 35,
                title: "Polymorphism and Magic Methods",
                module: "Module 6",
                story: `
                    <h2>📖 The Story of the Universal Remote</h2>
                    <p>A universal remote has one "volume up" button that works on any TV, regardless of brand. The button does the same thing (increase volume), but each TV implements it differently internally. This is polymorphism — same interface, different implementations.</p>
                `,
                content: `
                    <h2>Polymorphism</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">class Shape:
    def area(self):
        raise NotImplementedError("Subclasses must implement area()")
    
    def describe(self):
        return f"I am a {type(self).__name__} with area {self.area():.2f}"

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    def area(self):
        return 3.14159 * self.radius ** 2

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width, self.height = width, height
    def area(self):
        return self.width * self.height

class Triangle(Shape):
    def __init__(self, base, height):
        self.base, self.height = base, height
    def area(self):
        return 0.5 * self.base * self.height

# Polymorphism — same interface, different behavior
shapes = [Circle(5), Rectangle(4, 6), Triangle(3, 8)]
for shape in shapes:
    print(shape.describe())   # Each calls its own area()</code></pre>
                    </div>

                    <h2>Magic Methods (Dunder Methods)</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Custom Vector Class</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">class Vector:
    def __init__(self, x, y):
        self.x, self.y = x, y
    
    def __str__(self):
        return f"Vector({self.x}, {self.y})"
    
    def __repr__(self):
        return f"Vector(x={self.x}, y={self.y})"
    
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    def __sub__(self, other):
        return Vector(self.x - other.x, self.y - other.y)
    
    def __mul__(self, scalar):
        return Vector(self.x * scalar, self.y * scalar)
    
    def __len__(self):
        return 2   # 2D vector has 2 components
    
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y
    
    def __abs__(self):
        return (self.x**2 + self.y**2) ** 0.5
    
    def __bool__(self):
        return self.x != 0 or self.y != 0

v1 = Vector(1, 2)
v2 = Vector(3, 4)
print(v1 + v2)    # Vector(4, 6)
print(v2 - v1)    # Vector(2, 2)
print(v1 * 3)     # Vector(3, 6)
print(abs(v2))    # 5.0
print(v1 == v2)   # False</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 Essential Magic Methods</div>
                        <table style="width:100%;border-collapse:collapse;margin-top:10px;">
                            <tr style="background:rgba(102,126,234,0.2);">
                                <th style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Method</th>
                                <th style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Triggered by</th>
                            </tr>
                            <tr><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>__str__</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">str(obj), print(obj)</td></tr>
                            <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>__len__</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">len(obj)</td></tr>
                            <tr><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>__add__</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">obj + other</td></tr>
                            <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>__eq__</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">obj == other</td></tr>
                            <tr><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>__lt__</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">obj &lt; other</td></tr>
                            <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>__getitem__</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">obj[key]</td></tr>
                            <tr><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>__iter__</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">for x in obj</td></tr>
                            <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>__enter__/__exit__</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">with obj as x:</td></tr>
                        </table>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 35 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ Polymorphism: same interface, different implementations</li>
                            <li>✅ Magic methods customize how objects behave with operators</li>
                            <li>✅ <code>__add__</code> enables <code>+</code>, <code>__eq__</code> enables <code>==</code></li>
                            <li>✅ <code>__iter__</code> and <code>__next__</code> make objects iterable</li>
                            <li>✅ <code>__enter__/__exit__</code> enable context managers (with statement)</li>
                        </ul>
                    </div>
                `

            },
            {
                id: 36,
                title: "Abstract Classes and Interfaces",
                module: "Module 6",
                story: `
                    <h2>📖 The Story of the Job Contract</h2>
                    <p>A job contract says "you MUST do these things: show up, complete tasks, follow policies." It doesn't say HOW — that's up to the employee. Abstract classes are contracts for code: they define what methods a class MUST have, without specifying the implementation.</p>
                `,
                content: `
                    <h2>Abstract Base Classes</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">from abc import ABC, abstractmethod

class PaymentProcessor(ABC):
    """Abstract base class — cannot be instantiated directly."""
    
    @abstractmethod
    def process_payment(self, amount):
        """Must be implemented by subclasses."""
        pass
    
    @abstractmethod
    def refund(self, transaction_id):
        pass
    
    def validate_amount(self, amount):
        """Concrete method — shared by all subclasses."""
        if amount <= 0:
            raise ValueError("Amount must be positive")
        return True

class CreditCardProcessor(PaymentProcessor):
    def process_payment(self, amount):
        self.validate_amount(amount)
        print(f"Processing \${amount} via credit card...")
        return {"status": "success", "method": "credit_card"}
    
    def refund(self, transaction_id):
        print(f"Refunding transaction {transaction_id}")

class PayPalProcessor(PaymentProcessor):
    def process_payment(self, amount):
        self.validate_amount(amount)
        print(f"Processing \${amount} via PayPal...")
        return {"status": "success", "method": "paypal"}
    
    def refund(self, transaction_id):
        print(f"PayPal refund for {transaction_id}")

# Cannot instantiate abstract class
# p = PaymentProcessor()   # TypeError!

# Can instantiate concrete subclasses
cc = CreditCardProcessor()
pp = PayPalProcessor()
cc.process_payment(99.99)
pp.process_payment(49.99)</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 Abstract Classes vs Regular Classes</div>
                        <table style="width:100%;border-collapse:collapse;margin-top:10px;">
                            <tr style="background:rgba(102,126,234,0.2);">
                                <th style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Feature</th>
                                <th style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Abstract Class</th>
                                <th style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Regular Class</th>
                            </tr>
                            <tr><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Instantiate directly</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">❌ No</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">✅ Yes</td></tr>
                            <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Abstract methods</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">✅ Yes</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">❌ No</td></tr>
                            <tr><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Concrete methods</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">✅ Yes</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">✅ Yes</td></tr>
                            <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Purpose</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Define interface/contract</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Create objects</td></tr>
                        </table>
                    </div>

                    <h2>🏋️ Practice Exercises</h2>
                    <div class="story-box">
                        <div class="box-title">Exercise 1 — Medium: Animal Sound System</div>
                        <p>Create an abstract Animal class with abstract speak() and move() methods. Implement Dog, Bird, Fish.</p>
                        <details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">👁 Show Solution</summary>
                            <div class="code-block" style="margin-top:10px;"><div class="code-header"><span class="code-language">Python</span></div>
                                <pre><code class="language-python">from abc import ABC, abstractmethod
class Animal(ABC):
    def __init__(self, name): self.name = name
    @abstractmethod
    def speak(self): pass
    @abstractmethod
    def move(self): pass
    def describe(self):
        return f"{self.name}: {self.speak()} | {self.move()}"

class Dog(Animal):
    def speak(self): return "Woof!"
    def move(self): return "runs"

class Bird(Animal):
    def speak(self): return "Tweet!"
    def move(self): return "flies"

class Fish(Animal):
    def speak(self): return "..."
    def move(self): return "swims"

for a in [Dog("Rex"), Bird("Tweety"), Fish("Nemo")]:
    print(a.describe())</code></pre>
                            </div>
                        </details>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 36 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ Abstract classes define contracts for subclasses</li>
                            <li>✅ <code>from abc import ABC, abstractmethod</code></li>
                            <li>✅ <code>@abstractmethod</code> forces subclasses to implement</li>
                            <li>✅ Cannot instantiate abstract classes directly</li>
                            <li>✅ Abstract classes can have concrete (non-abstract) methods too</li>
                        </ul>
                    </div>
                `

            },
            {
                id: 37,
                title: "Project - OOP Library System",
                module: "Module 6",
                story: `
                    <h2>📖 The Story of the Library</h2>
                    <p>A library has books, members, and librarians. Books can be borrowed and returned. Members have borrowing limits. This is a perfect real-world system to model with OOP — multiple classes with relationships, inheritance, and encapsulation.</p>
                `,
                content: `
                    <h2>Project: Library Management System</h2>

                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Complete Library System</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">from datetime import date, timedelta
from abc import ABC, abstractmethod

class LibraryItem(ABC):
    """Abstract base for all library items."""
    def __init__(self, title, item_id):
        self.title = title
        self.item_id = item_id
        self._is_available = True
    
    @property
    def is_available(self):
        return self._is_available
    
    @abstractmethod
    def get_info(self):
        pass
    
    def checkout(self):
        if not self._is_available:
            raise ValueError(f"'{self.title}' is not available")
        self._is_available = False
    
    def return_item(self):
        self._is_available = True

class Book(LibraryItem):
    def __init__(self, title, author, isbn):
        super().__init__(title, isbn)
        self.author = author
        self.isbn = isbn
    
    def get_info(self):
        status = "Available" if self.is_available else "Checked Out"
        return f"📚 '{self.title}' by {self.author} [{status}]"

class DVD(LibraryItem):
    def __init__(self, title, director, duration_min):
        super().__init__(title, f"DVD-{title[:3].upper()}")
        self.director = director
        self.duration = duration_min
    
    def get_info(self):
        status = "Available" if self.is_available else "Checked Out"
        return f"🎬 '{self.title}' dir. {self.director} ({self.duration}min) [{status}]"

class Member:
    MAX_ITEMS = 3
    LOAN_DAYS = 14
    
    def __init__(self, name, member_id):
        self.name = name
        self.member_id = member_id
        self._borrowed = {}   # {item: due_date}
    
    def borrow(self, item):
        if len(self._borrowed) >= self.MAX_ITEMS:
            raise ValueError(f"Cannot borrow more than {self.MAX_ITEMS} items")
        item.checkout()
        due = date.today() + timedelta(days=self.LOAN_DAYS)
        self._borrowed[item] = due
        print(f"✅ {self.name} borrowed '{item.title}' (due: {due})")
    
    def return_item(self, item):
        if item not in self._borrowed:
            raise ValueError("You didn't borrow this item")
        due = self._borrowed.pop(item)
        item.return_item()
        overdue = (date.today() - due).days
        if overdue > 0:
            fine = overdue * 0.50
            print(f"⚠️ Returned '{item.title}' — {overdue} days overdue. Fine: \${fine:.2f}")
        else:
            print(f"✅ Returned '{item.title}' on time")
    
    def show_borrowed(self):
        if not self._borrowed:
            print(f"{self.name} has no borrowed items")
            return
        print(f"\\n{self.name}'s borrowed items:")
        for item, due in self._borrowed.items():
            print(f"  - {item.title} (due: {due})")

class Library:
    def __init__(self, name):
        self.name = name
        self._items = {}
        self._members = {}
    
    def add_item(self, item):
        self._items[item.item_id] = item
        print(f"Added: {item.get_info()}")
    
    def register_member(self, member):
        self._members[member.member_id] = member
        print(f"Registered member: {member.name}")
    
    def search(self, query):
        results = [item for item in self._items.values()
                   if query.lower() in item.title.lower()]
        if results:
            for item in results:
                print(item.get_info())
        else:
            print(f"No results for '{query}'")
    
    def show_available(self):
        available = [i for i in self._items.values() if i.is_available]
        print(f"\\n=== Available Items ({len(available)}) ===")
        for item in available:
            print(f"  {item.get_info()}")

# Demo
lib = Library("City Library")
b1 = Book("Python Crash Course", "Eric Matthes", "978-1593279288")
b2 = Book("Clean Code", "Robert Martin", "978-0132350884")
d1 = DVD("The Matrix", "Wachowski", 136)

lib.add_item(b1)
lib.add_item(b2)
lib.add_item(d1)

alice = Member("Alice", "M001")
lib.register_member(alice)

alice.borrow(b1)
alice.borrow(d1)
alice.show_borrowed()
lib.show_available()
alice.return_item(b1)</code></pre>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Module 6 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ Classes and objects — blueprints and instances</li>
                            <li>✅ Inheritance — extending existing classes</li>
                            <li>✅ Encapsulation — hiding data with properties</li>
                            <li>✅ Polymorphism — same interface, different behavior</li>
                            <li>✅ Abstract classes — defining contracts</li>
                            <li>✅ Building real-world systems with OOP</li>
                        </ul>
                    </div>
                `

            }
        ]
    },
    {
        id: 7,
        title: "Module 7: Professional Python",
        icon: "🚀",
        description: "File handling, error handling, modules, and real projects",
        lessons: 5,
        duration: "4 hours",
        lessons_data: [
            {
                id: 38,
                title: "Regular Expressions",
                module: "Module 7",
                story: `
                    <h2>📖 The Story of the Pattern Detective</h2>
                    <p>A detective doesn't search for one specific clue — they look for patterns: "any 10-digit number that starts with 555" or "any word ending in -tion." Regular expressions are Python's pattern detective, letting you search, match, and transform text with incredible precision.</p>
                `,
                content: `
                    <h2>Regex Basics</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">import re

text = "My phone is 555-1234 and email is alice@example.com"

# re.search() — find first match anywhere in string
match = re.search(r"\d{3}-\d{4}", text)
if match:
    print(f"Found: {match.group()}")   # 555-1234

# re.findall() — find ALL matches
phones = re.findall(r"\d{3}-\d{4}", "Call 555-1234 or 555-5678")
print(phones)   # ['555-1234', '555-5678']

# re.match() — match at START of string only
result = re.match(r"My", text)
print(result.group() if result else "No match")   # My

# re.fullmatch() — entire string must match
valid = re.fullmatch(r"\d{5}", "12345")
print(valid is not None)   # True</code></pre>
                    </div>

                    <h2>Regex Patterns</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Pattern Reference</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">import re

# Character classes
re.findall(r"\d", "abc123")     # Digits: ['1', '2', '3']
re.findall(r"\w", "hi! 42")    # Word chars: ['h', 'i', '4', '2']
re.findall(r"\s", "a b\tc")    # Whitespace: [' ', '\t']
re.findall(r"[aeiou]", "hello") # Custom class: ['e', 'o']
re.findall(r"[^aeiou]", "hello") # Negated: ['h', 'l', 'l']

# Quantifiers
re.findall(r"\d+", "123 45 6")   # One or more: ['123', '45', '6']
re.findall(r"\d*", "a1b")        # Zero or more
re.findall(r"\d?", "a1b")        # Zero or one
re.findall(r"\d{3}", "12345")    # Exactly 3: ['123']
re.findall(r"\d{2,4}", "12345")  # 2 to 4: ['1234']

# Anchors
re.findall(r"^\w+", "hello world")  # Start: ['hello']
re.findall(r"\w+$", "hello world")  # End: ['world']</code></pre>
                    </div>

                    <h2>Practical Regex Examples</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Validation</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">import re

def validate_email(email):
    pattern = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
    return bool(re.fullmatch(pattern, email))

def validate_phone(phone):
    pattern = r"^\+?1?\s?(\d{3}[\s.-]?\d{3}[\s.-]?\d{4})$"
    return bool(re.fullmatch(pattern, phone))

def extract_urls(text):
    pattern = r"https?://[^\s]+"
    return re.findall(pattern, text)

# Test
print(validate_email("alice@example.com"))   # True
print(validate_email("not-an-email"))         # False
print(validate_phone("555-123-4567"))         # True

# Substitution
text = "Call 555-1234 or 555-5678 for info"
masked = re.sub(r"\d{3}-\d{4}", "XXX-XXXX", text)
print(masked)   # Call XXX-XXXX or XXX-XXXX for info</code></pre>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 38 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ re.search(), re.findall(), re.match(), re.fullmatch()</li>
                            <li>✅ Character classes: \d (digit), \w (word), \s (space)</li>
                            <li>✅ Quantifiers: + (1+), * (0+), ? (0-1), {n} (exactly n)</li>
                            <li>✅ Anchors: ^ (start), $ (end)</li>
                            <li>✅ re.sub() for find-and-replace</li>
                            <li>✅ Groups with () for capturing parts of patterns</li>
                        </ul>
                    </div>
                `

            },
            {
                id: 39,
                title: "Concurrency - Threading and Asyncio",
                module: "Module 7",
                story: `
                    <h2>📖 The Story of the Restaurant Kitchen</h2>
                    <p>A chef doesn't wait for the pasta to boil before starting the sauce. They do multiple things at once: pasta boiling, sauce simmering, bread baking. This is concurrency — doing multiple tasks in overlapping time periods.</p>
                    <p>Python has two main concurrency models: threading (multiple threads sharing memory) and asyncio (cooperative multitasking with async/await).</p>
                `,
                content: `
                    <h2>Threading</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Threading</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">import threading
import time

def download_file(filename, duration):
    """Simulate downloading a file."""
    print(f"Starting download: {filename}")
    time.sleep(duration)   # Simulate network delay
    print(f"Finished: {filename}")

# Sequential (slow)
start = time.time()
download_file("file1.pdf", 2)
download_file("file2.pdf", 3)
print(f"Sequential: {time.time()-start:.1f}s")   # 5.0s

# Threaded (fast)
start = time.time()
t1 = threading.Thread(target=download_file, args=("file1.pdf", 2))
t2 = threading.Thread(target=download_file, args=("file2.pdf", 3))
t1.start()
t2.start()
t1.join()   # Wait for t1 to finish
t2.join()   # Wait for t2 to finish
print(f"Threaded: {time.time()-start:.1f}s")   # 3.0s (faster!)</code></pre>
                    </div>

                    <h2>Asyncio — Modern Python Concurrency</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — Async/Await</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">import asyncio
import time

async def fetch_data(url, delay):
    """Simulate async HTTP request."""
    print(f"Fetching {url}...")
    await asyncio.sleep(delay)   # Non-blocking wait
    return f"Data from {url}"

async def main():
    start = time.time()
    
    # Run concurrently with gather
    results = await asyncio.gather(
        fetch_data("api/users", 1),
        fetch_data("api/posts", 2),
        fetch_data("api/comments", 1.5),
    )
    
    for result in results:
        print(result)
    
    print(f"Total time: {time.time()-start:.1f}s")   # ~2.0s not 4.5s!

asyncio.run(main())</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 Threading vs Asyncio vs Multiprocessing</div>
                        <table style="width:100%;border-collapse:collapse;margin-top:10px;">
                            <tr style="background:rgba(102,126,234,0.2);">
                                <th style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Approach</th>
                                <th style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Best For</th>
                            </tr>
                            <tr><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Threading</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">I/O-bound tasks (files, network)</td></tr>
                            <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Asyncio</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Many concurrent I/O tasks (web servers)</td></tr>
                            <tr><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Multiprocessing</td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">CPU-bound tasks (calculations)</td></tr>
                        </table>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 39 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ Threading: multiple threads for I/O-bound tasks</li>
                            <li>✅ <code>Thread(target=func, args=())</code>, .start(), .join()</li>
                            <li>✅ async/await for cooperative concurrency</li>
                            <li>✅ <code>asyncio.gather()</code> runs coroutines concurrently</li>
                            <li>✅ asyncio is preferred for modern Python web/network code</li>
                        </ul>
                    </div>
                `

            },
            {
                id: 40,
                title: "Testing - unittest and pytest",
                module: "Module 7",
                story: `
                    <h2>📖 The Story of the Quality Inspector</h2>
                    <p>A car factory has quality inspectors who test every car before it leaves: do the brakes work? Does the engine start? Are the lights functional? Without testing, defective cars reach customers. Software testing is the same — automated tests catch bugs before they reach users.</p>
                `,
                content: `
                    <h2>unittest — Built-in Testing Framework</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — unittest</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">import unittest

# The code we want to test
def add(a, b): return a + b
def divide(a, b):
    if b == 0: raise ZeroDivisionError("Cannot divide by zero")
    return a / b

class TestMathFunctions(unittest.TestCase):
    
    def test_add_positive(self):
        self.assertEqual(add(2, 3), 5)
    
    def test_add_negative(self):
        self.assertEqual(add(-1, -1), -2)
    
    def test_add_zero(self):
        self.assertEqual(add(0, 5), 5)
    
    def test_divide_normal(self):
        self.assertAlmostEqual(divide(10, 3), 3.333, places=3)
    
    def test_divide_by_zero(self):
        with self.assertRaises(ZeroDivisionError):
            divide(10, 0)
    
    def test_divide_result_type(self):
        self.assertIsInstance(divide(10, 2), float)

if __name__ == "__main__":
    unittest.main()</code></pre>
                    </div>

                    <h2>pytest — Modern Testing</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — pytest style</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python"># test_math.py — pytest discovers files starting with test_
import pytest

def add(a, b): return a + b
def divide(a, b):
    if b == 0: raise ZeroDivisionError
    return a / b

# Simple test functions (no class needed)
def test_add():
    assert add(2, 3) == 5
    assert add(-1, 1) == 0

def test_divide():
    assert divide(10, 2) == 5.0

def test_divide_by_zero():
    with pytest.raises(ZeroDivisionError):
        divide(10, 0)

# Parametrize — run same test with multiple inputs
@pytest.mark.parametrize("a, b, expected", [
    (1, 2, 3),
    (0, 0, 0),
    (-1, 1, 0),
    (100, -50, 50),
])
def test_add_parametrized(a, b, expected):
    assert add(a, b) == expected

# Fixtures — reusable test setup
@pytest.fixture
def sample_list():
    return [1, 2, 3, 4, 5]

def test_sum(sample_list):
    assert sum(sample_list) == 15

# Run with: pytest test_math.py -v</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 Testing Best Practices</div>
                        <ul>
                            <li><strong>AAA Pattern:</strong> Arrange (setup), Act (call), Assert (verify)</li>
                            <li><strong>One assertion per test:</strong> Tests should test one thing</li>
                            <li><strong>Test edge cases:</strong> Empty inputs, None, negatives, very large values</li>
                            <li><strong>Test-Driven Development (TDD):</strong> Write tests BEFORE code</li>
                            <li><strong>Coverage:</strong> Aim for 80%+ code coverage</li>
                        </ul>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 40 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ unittest: class-based testing, assertEqual, assertRaises</li>
                            <li>✅ pytest: simpler syntax, just use assert</li>
                            <li>✅ @pytest.mark.parametrize for data-driven tests</li>
                            <li>✅ Fixtures for reusable test setup</li>
                            <li>✅ Run tests: <code>python -m pytest -v</code></li>
                        </ul>
                    </div>
                `

            },
            {
                id: 41,
                title: "Virtual Environments and pip",
                module: "Module 7",
                story: `
                    <h2>📖 The Story of the Isolated Lab</h2>
                    <p>A chemistry lab keeps experiments isolated — chemicals from one experiment don't contaminate another. Virtual environments do the same for Python projects: each project gets its own isolated set of packages, preventing conflicts between projects.</p>
                `,
                content: `
                    <h2>Why Virtual Environments?</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Terminal — The Problem</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-bash"># Without virtual environments:
# Project A needs Django 3.2
# Project B needs Django 4.2
# You can only have ONE version globally — conflict!

# With virtual environments:
# Project A has its own Python + Django 3.2
# Project B has its own Python + Django 4.2
# No conflicts!</code></pre>
                    </div>

                    <h2>Creating and Using Virtual Environments</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Terminal — venv</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-bash"># Create a virtual environment
python3 -m venv myenv

# Activate it
# Mac/Linux:
source myenv/bin/activate

# Windows:
myenv\Scripts\activate

# Your prompt changes to show (myenv)
# (myenv) $ 

# Install packages (only in this environment)
pip install requests
pip install flask==2.3.0
pip install pandas numpy matplotlib

# See installed packages
pip list
pip freeze   # With exact versions

# Save dependencies to file
pip freeze > requirements.txt

# Install from requirements file (on another machine)
pip install -r requirements.txt

# Deactivate
deactivate</code></pre>
                    </div>

                    <h2>requirements.txt</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">requirements.txt</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-text">flask==2.3.0
requests>=2.28.0
pandas~=2.0.0
numpy>=1.24.0,<2.0.0
python-dotenv==1.0.0</code></pre>
                    </div>

                    <h2>Project Structure Best Practices</h2>
                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Project Structure</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-text">my_project/
├── .gitignore          # Exclude venv, __pycache__, .env
├── README.md           # Project description
├── requirements.txt    # Dependencies
├── .env               # Environment variables (secrets)
├── venv/              # Virtual environment (NOT in git)
├── src/               # Source code
│   ├── __init__.py
│   ├── main.py
│   └── utils.py
└── tests/             # Test files
    ├── __init__.py
    └── test_main.py</code></pre>
                    </div>

                    <div class="memory-box">
                        <div class="box-title">🧠 Essential pip Commands</div>
                        <table style="width:100%;border-collapse:collapse;margin-top:10px;">
                            <tr style="background:rgba(102,126,234,0.2);">
                                <th style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Command</th>
                                <th style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Description</th>
                            </tr>
                            <tr><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>pip install package</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Install latest version</td></tr>
                            <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>pip install package==1.2.3</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Install specific version</td></tr>
                            <tr><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>pip uninstall package</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Remove package</td></tr>
                            <tr style="background:rgba(255,255,255,0.03);"><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>pip show package</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Show package info</td></tr>
                            <tr><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);"><code>pip upgrade package</code></td><td style="padding:8px;border:1px solid rgba(255,255,255,0.1);">Upgrade to latest</td></tr>
                        </table>
                    </div>

                    <h2>Key Takeaways</h2>
                    <div class="memory-box">
                        <div class="box-title">🧠 Lesson 41 Complete — You Now Know:</div>
                        <ul>
                            <li>✅ Virtual environments isolate project dependencies</li>
                            <li>✅ <code>python3 -m venv myenv</code> creates a virtual environment</li>
                            <li>✅ <code>source myenv/bin/activate</code> activates it</li>
                            <li>✅ pip install, freeze, and requirements.txt</li>
                            <li>✅ Always add venv/ to .gitignore</li>
                            <li>✅ Professional project structure with src/ and tests/</li>
                        </ul>
                    </div>
                `

            },
            {
                id: 42,
                title: "Project - Full Python Application",
                module: "Module 7",
                story: `
                    <h2>📖 The Story of the Graduation Project</h2>
                    <p>After years of study, a student's final project demonstrates everything they've learned. This is your graduation project — a complete, production-quality Python application that uses every concept from this masterclass.</p>
                    <p>We'll build a Task Manager CLI application with OOP, file persistence, error handling, decorators, and testing.</p>
                `,
                content: `
                    <h2>Project: Professional Task Manager</h2>

                    <div class="code-block">
                        <div class="code-header"><span class="code-language">Python — task_manager.py</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                        <pre><code class="language-python">"""
Professional Task Manager
Demonstrates: OOP, decorators, error handling, file I/O, generators
"""
import json
import os
import functools
from datetime import datetime, date
from enum import Enum

class Priority(Enum):
    LOW = 1
    MEDIUM = 2
    HIGH = 3
    CRITICAL = 4

class Status(Enum):
    TODO = "todo"
    IN_PROGRESS = "in_progress"
    DONE = "done"

def log_action(func):
    """Decorator to log all task operations."""
    @functools.wraps(func)
    def wrapper(self, *args, **kwargs):
        result = func(self, *args, **kwargs)
        timestamp = datetime.now().strftime("%H:%M:%S")
        print(f"[{timestamp}] {func.__name__} executed")
        return result
    return wrapper

class Task:
    _id_counter = 0
    
    def __init__(self, title, description="", priority=Priority.MEDIUM):
        Task._id_counter += 1
        self.id = Task._id_counter
        self.title = title
        self.description = description
        self.priority = priority
        self.status = Status.TODO
        self.created_at = date.today().isoformat()
        self.tags = set()
    
    def add_tag(self, tag):
        self.tags.add(tag.lower())
    
    def complete(self):
        self.status = Status.DONE
    
    def start(self):
        self.status = Status.IN_PROGRESS
    
    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "priority": self.priority.name,
            "status": self.status.value,
            "created_at": self.created_at,
            "tags": list(self.tags)
        }
    
    @classmethod
    def from_dict(cls, data):
        task = cls(data["title"], data["description"],
                   Priority[data["priority"]])
        task.id = data["id"]
        task.status = Status(data["status"])
        task.created_at = data["created_at"]
        task.tags = set(data["tags"])
        return task
    
    def __str__(self):
        icons = {Status.TODO: "⬜", Status.IN_PROGRESS: "🔄", Status.DONE: "✅"}
        priority_icons = {Priority.LOW: "🟢", Priority.MEDIUM: "🟡",
                         Priority.HIGH: "🟠", Priority.CRITICAL: "🔴"}
        tags_str = f" [{', '.join(self.tags)}]" if self.tags else ""
        return (f"{icons[self.status]} [{self.id:03d}] {priority_icons[self.priority]} "
                f"{self.title}{tags_str}")

class TaskManager:
    def __init__(self, filename="tasks.json"):
        self.filename = filename
        self.tasks = {}
        self._load()
    
    def _load(self):
        if os.path.exists(self.filename):
            try:
                with open(self.filename, "r") as f:
                    data = json.load(f)
                    self.tasks = {d["id"]: Task.from_dict(d) for d in data}
                    if self.tasks:
                        Task._id_counter = max(self.tasks.keys())
            except (json.JSONDecodeError, KeyError) as e:
                print(f"Warning: Could not load tasks: {e}")
    
    def _save(self):
        with open(self.filename, "w") as f:
            json.dump([t.to_dict() for t in self.tasks.values()], f, indent=2)
    
    @log_action
    def add_task(self, title, description="", priority=Priority.MEDIUM):
        task = Task(title, description, priority)
        self.tasks[task.id] = task
        self._save()
        return task
    
    @log_action
    def complete_task(self, task_id):
        task = self._get_task(task_id)
        task.complete()
        self._save()
    
    def _get_task(self, task_id):
        if task_id not in self.tasks:
            raise ValueError(f"Task {task_id} not found")
        return self.tasks[task_id]
    
    def filter_by_priority(self, priority):
        """Generator — yields tasks with given priority."""
        return (t for t in self.tasks.values() if t.priority == priority)
    
    def filter_by_status(self, status):
        return (t for t in self.tasks.values() if t.status == status)
    
    def search(self, query):
        q = query.lower()
        return (t for t in self.tasks.values()
                if q in t.title.lower() or q in t.description.lower()
                or q in t.tags)
    
    def show_all(self, tasks=None):
        items = list(tasks or self.tasks.values())
        if not items:
            print("No tasks found")
            return
        # Sort by priority (highest first), then by id
        items.sort(key=lambda t: (-t.priority.value, t.id))
        for task in items:
            print(f"  {task}")
        print(f"\\nTotal: {len(items)} tasks")
    
    def stats(self):
        total = len(self.tasks)
        done = sum(1 for t in self.tasks.values() if t.status == Status.DONE)
        in_progress = sum(1 for t in self.tasks.values() if t.status == Status.IN_PROGRESS)
        print(f"\\n📊 Statistics:")
        print(f"  Total: {total} | Done: {done} | In Progress: {in_progress} | Todo: {total-done-in_progress}")
        if total > 0:
            print(f"  Completion: {done/total*100:.1f}%")

# Main CLI
def main():
    manager = TaskManager()
    print("=== PROFESSIONAL TASK MANAGER ===")
    
    while True:
        print("\\n1.Add  2.Complete  3.List  4.Search  5.Stats  6.Quit")
        choice = input("> ").strip()
        
        if choice == "1":
            title = input("Title: ").strip()
            desc = input("Description: ").strip()
            print("Priority: 1=Low 2=Medium 3=High 4=Critical")
            p = int(input("Priority [2]: ") or "2")
            priority = list(Priority)[p-1]
            task = manager.add_task(title, desc, priority)
            print(f"Added: {task}")
        
        elif choice == "2":
            manager.show_all()
            task_id = int(input("Task ID to complete: "))
            manager.complete_task(task_id)
            print("✅ Task completed!")
        
        elif choice == "3":
            manager.show_all()
        
        elif choice == "4":
            query = input("Search: ")
            results = manager.search(query)
            manager.show_all(results)
        
        elif choice == "5":
            manager.stats()
        
        elif choice == "6":
            print("Goodbye! 👋")
            break

if __name__ == "__main__":
    main()</code></pre>
                    </div>

                    <h2>🎓 Congratulations — You've Completed the Course!</h2>
                    <div class="memory-box">
                        <div class="box-title">🏆 Python Basics Masterclass — Complete!</div>
                        <p>You've mastered all 7 modules and 42 lessons:</p>
                        <ul>
                            <li>✅ <strong>Module 1:</strong> Python foundations — variables, types, operators, I/O</li>
                            <li>✅ <strong>Module 2:</strong> Decision making — if/elif/else, logical operators</li>
                            <li>✅ <strong>Module 3:</strong> Loops — for, while, break, continue, comprehensions</li>
                            <li>✅ <strong>Module 4:</strong> Collections — lists, tuples, dicts, sets, files</li>
                            <li>✅ <strong>Module 5:</strong> Functions advanced — lambdas, decorators, generators, modules</li>
                            <li>✅ <strong>Module 6:</strong> OOP — classes, inheritance, encapsulation, polymorphism</li>
                            <li>✅ <strong>Module 7:</strong> Professional Python — regex, concurrency, testing, packaging</li>
                        </ul>
                        <p style="margin-top:15px;font-size:1.1em;">🚀 <strong>What's next?</strong> Build projects, contribute to open source, explore Django/FastAPI for web, NumPy/Pandas for data science, or PyTorch for AI/ML!</p>
                    </div>
                `

            }
        ]
    }
];

// ============================================
// APPLICATION STATE
// ============================================

const completedLessons = new Set(
    JSON.parse(localStorage.getItem('completedLessons') || '[]')
);
let currentLessonId = null;
let currentTheme = localStorage.getItem('theme') || 'dark';

// ============================================
// INIT
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    applyTheme(currentTheme);
    buildSidebar();
    updateProgress();
    updateTotalCount();

    document.getElementById('search-input').addEventListener('input', handleSearch);
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('sidebar-toggle').addEventListener('click', toggleSidebar);
});

// ============================================
// THEME
// ============================================

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    currentTheme = theme;
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('collapsed');
    document.getElementById('main-content').classList.toggle('sidebar-collapsed');
}

// ============================================
// SIDEBAR BUILDER
// ============================================

function buildSidebar() {
    const nav = document.getElementById('sidebar-nav');
    nav.innerHTML = '';

    CURRICULUM.forEach(module => {
        const moduleEl = document.createElement('div');
        moduleEl.className = 'module-group';
        moduleEl.dataset.moduleId = module.id;

        const completedInModule = module.lessons_data.filter(l => completedLessons.has(l.id)).length;
        const totalInModule = module.lessons_data.length;
        const shortTitle = module.title.replace(/^Module \d+:\s*/, '');

        // Module header
        const header = document.createElement('div');
        header.className = 'module-header';
        header.onclick = () => toggleModule(module.id);
        header.innerHTML =
            '<div class="module-info">' +
            '<span class="module-icon">' + (module.icon || '📘') + '</span>' +
            '<span class="module-label">M' + module.id + '</span>' +
            '<span class="module-title">' + shortTitle + '</span>' +
            '</div>' +
            '<div class="module-meta">' +
            '<span class="module-progress-badge">' + completedInModule + '/' + totalInModule + '</span>' +
            '<svg class="chevron" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>' +
            '</div>';
        moduleEl.appendChild(header);

        // Lessons container
        const lessonsDiv = document.createElement('div');
        lessonsDiv.className = 'module-lessons';
        lessonsDiv.id = 'module-lessons-' + module.id;
        lessonsDiv.style.display = 'none';

        module.lessons_data.forEach(lesson => {
            const lessonEl = document.createElement('div');
            const isCompleted = completedLessons.has(lesson.id);
            const isActive = currentLessonId === lesson.id;
            lessonEl.className = 'lesson-item' + (isCompleted ? ' completed' : '') + (isActive ? ' active' : '');
            lessonEl.id = 'lesson-nav-' + lesson.id;
            lessonEl.onclick = () => loadLesson(lesson.id);
            const shortLessonTitle = lesson.title.replace(/ - .+$/, '').replace(/ – .+$/, '');
            const checkIcon = isCompleted
                ? '<svg class="check-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>'
                : '';
            lessonEl.innerHTML =
                '<span class="lesson-dot"></span>' +
                '<span class="lesson-nav-title">' + shortLessonTitle + '</span>' +
                checkIcon;
            lessonsDiv.appendChild(lessonEl);
        });

        moduleEl.appendChild(lessonsDiv);
        nav.appendChild(moduleEl);
    });
}

function toggleModule(moduleId) {
    const lessonsEl = document.getElementById('module-lessons-' + moduleId);
    const moduleEl = document.querySelector('[data-module-id="' + moduleId + '"] .module-header');
    const isOpen = lessonsEl.style.display !== 'none';
    lessonsEl.style.display = isOpen ? 'none' : 'block';
    moduleEl.classList.toggle('open', !isOpen);
}

// ============================================
// LESSON LOADER
// ============================================

function loadLesson(lessonId) {
    let lesson = null;
    let moduleData = null;
    for (const mod of CURRICULUM) {
        const found = mod.lessons_data.find(l => l.id === lessonId);
        if (found) { lesson = found; moduleData = mod; break; }
    }
    if (!lesson) return;

    currentLessonId = lessonId;

    document.getElementById('welcome-screen').style.display = 'none';
    const contentEl = document.getElementById('lesson-content');
    contentEl.style.display = 'block';

    const allLessons = CURRICULUM.flatMap(m => m.lessons_data);
    const idx = allLessons.findIndex(l => l.id === lessonId);
    const prevLesson = idx > 0 ? allLessons[idx - 1] : null;
    const nextLesson = idx < allLessons.length - 1 ? allLessons[idx + 1] : null;

    const isCompleted = completedLessons.has(lessonId);
    const prevBtn = prevLesson
        ? '<button class="nav-btn prev-btn" onclick="loadLesson(' + prevLesson.id + ')">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>' +
        'Previous</button>'
        : '<div></div>';
    const nextBtn = nextLesson
        ? '<button class="nav-btn next-btn" onclick="loadLesson(' + nextLesson.id + ')">' +
        'Next<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>' +
        '</button>'
        : '<div></div>';
    const completeBtn = '<button class="complete-btn ' + (isCompleted ? 'completed' : '') + '" onclick="toggleComplete(' + lessonId + ')">' +
        (isCompleted ? '✅ Completed' : '✓ Mark Complete') + '</button>';

    const storySection = lesson.story
        ? '<div class="story-section">' + lesson.story + '</div>'
        : '';

    contentEl.innerHTML =
        '<div class="lesson-header">' +
        '<div class="lesson-module-badge">MODULE ' + moduleData.id + '</div>' +
        '<h1 class="lesson-title">' + lesson.title + '</h1>' +
        '</div>' +
        storySection +
        '<div class="lesson-body">' + (lesson.content || '') + '</div>' +
        '<div class="lesson-footer">' +
        '<div class="lesson-nav-buttons">' +
        prevBtn + completeBtn + nextBtn +
        '</div>' +
        '</div>';

    if (window.hljs) {
        contentEl.querySelectorAll('pre code').forEach(block => hljs.highlightElement(block));
    }

    document.querySelectorAll('.lesson-item').forEach(el => el.classList.remove('active'));
    const activeEl = document.getElementById('lesson-nav-' + lessonId);
    if (activeEl) {
        activeEl.classList.add('active');
        const moduleGroup = activeEl.closest('.module-group');
        if (moduleGroup) {
            const modId = moduleGroup.dataset.moduleId;
            const lessonsEl = document.getElementById('module-lessons-' + modId);
            if (lessonsEl) lessonsEl.style.display = 'block';
            const hdr = moduleGroup.querySelector('.module-header');
            if (hdr) hdr.classList.add('open');
        }
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    contentEl.scrollTo(0, 0);
    window.scrollTo(0, 0);
}

// ============================================
// PROGRESS
// ============================================

function toggleComplete(lessonId) {
    if (completedLessons.has(lessonId)) {
        completedLessons.delete(lessonId);
    } else {
        completedLessons.add(lessonId);
    }
    localStorage.setItem('completedLessons', JSON.stringify([...completedLessons]));
    updateProgress();
    buildSidebar();
    loadLesson(lessonId);
}

function updateProgress() {
    const total = CURRICULUM.reduce((sum, m) => sum + m.lessons_data.length, 0);
    const completed = completedLessons.size;
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

    const countEl = document.getElementById('completed-count');
    const fillEl = document.getElementById('progress-fill');
    const textEl = document.getElementById('progress-text');

    if (countEl) countEl.textContent = completed;
    if (fillEl) fillEl.style.width = pct + '%';
    if (textEl) textEl.textContent = pct + '% Complete';
}

function updateTotalCount() {
    const total = CURRICULUM.reduce((sum, m) => sum + m.lessons_data.length, 0);
    const el = document.getElementById('total-count');
    if (el) el.textContent = total;
}

// ============================================
// SEARCH
// ============================================

function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
        buildSidebar();
        return;
    }

    const nav = document.getElementById('sidebar-nav');
    nav.innerHTML = '';

    CURRICULUM.forEach(module => {
        const matchingLessons = module.lessons_data.filter(l =>
            l.title.toLowerCase().includes(query) ||
            (l.content && l.content.toLowerCase().includes(query))
        );
        if (matchingLessons.length === 0) return;

        const moduleEl = document.createElement('div');
        moduleEl.className = 'module-group';
        const shortTitle = module.title.replace(/^Module \d+:\s*/, '');
        const header = document.createElement('div');
        header.className = 'module-header open';
        header.innerHTML =
            '<div class="module-info">' +
            '<span class="module-icon">' + (module.icon || '📘') + '</span>' +
            '<span class="module-title">' + shortTitle + '</span>' +
            '</div>';
        moduleEl.appendChild(header);

        const lessonsDiv = document.createElement('div');
        lessonsDiv.className = 'module-lessons';
        lessonsDiv.style.display = 'block';

        matchingLessons.forEach(lesson => {
            const lessonEl = document.createElement('div');
            const isCompleted = completedLessons.has(lesson.id);
            lessonEl.className = 'lesson-item' + (isCompleted ? ' completed' : '');
            lessonEl.onclick = () => loadLesson(lesson.id);
            const shortTitle2 = lesson.title.replace(/ - .+$/, '');
            lessonEl.innerHTML =
                '<span class="lesson-dot"></span>' +
                '<span class="lesson-nav-title">' + shortTitle2 + '</span>';
            lessonsDiv.appendChild(lessonEl);
        });

        moduleEl.appendChild(lessonsDiv);
        nav.appendChild(moduleEl);
    });
}

// ============================================
// COPY CODE
// ============================================

function copyCode(btn) {
    const pre = btn.closest('.code-block').querySelector('pre code');
    if (!pre) return;
    navigator.clipboard.writeText(pre.innerText).then(() => {
        const orig = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.color = '#4ade80';
        setTimeout(() => { btn.textContent = orig; btn.style.color = ''; }, 2000);
    });
}

// ============================================
// START LEARNING
// ============================================

function startLearning() {
    if (CURRICULUM.length > 0 && CURRICULUM[0].lessons_data.length > 0) {
        loadLesson(CURRICULUM[0].lessons_data[0].id);
    }
}

// ============================================
// MODULES OVERVIEW (Welcome Screen)
// ============================================

function buildModulesGrid() {
    const grid = document.getElementById('modules-grid');
    if (!grid) return;
    grid.innerHTML = '';
    CURRICULUM.forEach(module => {
        const completed = module.lessons_data.filter(l => completedLessons.has(l.id)).length;
        const total = module.lessons_data.length;
        const pct = Math.round((completed / total) * 100);
        const card = document.createElement('div');
        card.className = 'module-card';
        card.onclick = () => loadLesson(module.lessons_data[0].id);
        card.innerHTML =
            '<div class="module-card-icon">' + (module.icon || '📘') + '</div>' +
            '<h3>' + module.title + '</h3>' +
            '<p>' + (module.description || '') + '</p>' +
            '<div class="module-card-meta">' +
            '<span>' + total + ' lessons</span>' +
            '<span>' + (module.duration || '') + '</span>' +
            '</div>' +
            '<div class="module-card-progress">' +
            '<div class="module-card-bar" style="width:' + pct + '%"></div>' +
            '</div>' +
            '<span class="module-card-pct">' + pct + '% complete</span>';
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', buildModulesGrid);
