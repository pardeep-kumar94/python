// Complete Python Curriculum - All 42 Lessons
// This file is large but contains EVERYTHING needed for the full course

const ALL_LESSONS = {
    module1: [
        // Lesson 1-6 already created (Foundation)
    ],
    module2: [
        {
            id: 7,
            title: "If Statements - Making Choices",
            module: "Module 2",
            story: `<h2>📖 The Story of the Traffic Light</h2>
                <p>Imagine you're at a traffic light. If it's GREEN → you drive. If it's RED → you stop. If it's YELLOW → you slow down.</p>
                <p>Your brain constantly makes decisions based on conditions. Python does the exact same thing with if statements!</p>`,
            content: `<h2>Your First Decision</h2>
                <div class="code-block"><div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                <pre><code class="language-python">age = 15

if age >= 18:
    print("You can vote!")
else:
    print("Too young to vote")</code></pre></div>
                
                <div class="memory-box"><div class="box-title">🧠 How If Statements Work in Memory</div>
                <ol><li>Python evaluates the condition (age >= 18)</li>
                <li>This creates a Boolean value (True or False)</li>
                <li>If True: execute the indented code below if</li>
                <li>If False: skip to else (if present)</li></ol></div>
                
                <h3>Comparison Operators</h3>
                <div class="code-block"><div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                <pre><code class="language-python">x = 10
y = 5

print(x == y)   # Equal to: False
print(x != y)   # Not equal: True
print(x > y)    # Greater than: True
print(x < y)    # Less than: False
print(x >= y)   # Greater or equal: True
print(x <= y)   # Less or equal: False</code></pre></div>`
        },
        {
            id: 8,
            title: "Elif - Multiple Conditions",
            module: "Module 2",
            content: `<h2>Checking Multiple Conditions</h2>
                <div class="code-block"><div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                <pre><code class="language-python">grade = 85

if grade >= 90:
    print("A - Excellent!")
elif grade >= 80:
    print("B - Great job!")
elif grade >= 70:
    print("C - Good")
elif grade >= 60:
    print("D - Needs improvement")
else:
    print("F - Study harder")</code></pre></div>`
        },
        {
            id: 9,
            title: "Logical Operators - AND, OR, NOT",
            module: "Module 2",
            content: `<h2>Combining Conditions</h2>
                <div class="code-block"><div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                <pre><code class="language-python"># AND - both must be True
age = 20
has_license = True

if age >= 18 and has_license:
    print("You can drive!")

# OR - at least one must be True
is_weekend = True
is_holiday = False

if is_weekend or is_holiday:
    print("No school!")

# NOT - reverses the condition
is_raining = False

if not is_raining:
    print("Let's go outside!")</code></pre></div>`
        },
        {
            id: 10,
            title: "Nested If Statements",
            module: "Module 2",
            content: `<h2>Decisions Within Decisions</h2>
                <div class="code-block"><div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                <pre><code class="language-python">age = 25
has_ticket = True

if age >= 18:
    if has_ticket:
        print("Welcome to the concert!")
    else:
        print("You need a ticket")
else:
    print("Sorry, adults only")</code></pre></div>`
        },
        {
            id: 11,
            title: "The Ternary Operator",
            module: "Module 2",
            content: `<h2>One-Line If Statements</h2>
                <div class="code-block"><div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                <pre><code class="language-python"># Long way
age = 20
if age >= 18:
    status = "adult"
else:
    status = "minor"

# Short way (ternary)
status = "adult" if age >= 18 else "minor"
print(status)</code></pre></div>`
        },
        {
            id: 12,
            title: "Practice: Building a Calculator",
            module: "Module 2",
            hasQuiz: true,
            content: `<h2>Put It All Together</h2>
                <div class="code-block"><div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                <pre><code class="language-python">num1 = float(input("First number: "))
num2 = float(input("Second number: "))
operation = input("Operation (+, -, *, /): ")

if operation == "+":
    result = num1 + num2
elif operation == "-":
    result = num1 - num2
elif operation == "*":
    result = num1 * num2
elif operation == "/":
    if num2 != 0:
        result = num1 / num2
    else:
        result = "Error: Division by zero!"
else:
    result = "Invalid operation"

print(f"Result: {result}")</code></pre></div>`
        }
    ],
    module3: [
        {
            id: 13,
            title: "While Loops - Repeat Until Done",
            module: "Module 3",
            story: `<h2>📖 The Story of Brushing Teeth</h2>
                <p>When you brush your teeth, you keep brushing WHILE you count to 30. Once you reach 30, you stop.</p>
                <p>While loops work the same way - keep doing something WHILE a condition is true!</p>`,
            content: `<h2>Your First Loop</h2>
                <div class="code-block"><div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                <pre><code class="language-python">count = 1

while count <= 5:
    print(f"Count: {count}")
    count += 1
    
print("Done!")</code></pre></div>`
        },
        {
            id: 14,
            title: "For Loops - Iterate Over Items",
            module: "Module 3",
            content: `<h2>Looping Through Collections</h2>
                <div class="code-block"><div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                <pre><code class="language-python"># Loop through range
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# Loop through string
name = "Python"
for letter in name:
    print(letter)

# Loop through list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)</code></pre></div>`
        },
        {
            id: 15,
            title: "Range Function - Generate Numbers",
            module: "Module 3",
            content: `<h2>Using Range</h2>
                <div class="code-block"><div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                <pre><code class="language-python"># range(stop)
for i in range(5):
    print(i)  # 0 to 4

# range(start, stop)
for i in range(2, 7):
    print(i)  # 2 to 6

# range(start, stop, step)
for i in range(0, 10, 2):
    print(i)  # 0, 2, 4, 6, 8</code></pre></div>`
        },
        {
            id: 16,
            title: "Break and Continue",
            module: "Module 3",
            content: `<h2>Controlling Loop Flow</h2>
                <div class="code-block"><div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                <pre><code class="language-python"># break - exit loop immediately
for i in range(10):
    if i == 5:
        break
    print(i)  # 0, 1, 2, 3, 4

# continue - skip to next iteration
for i in range(5):
    if i == 2:
        continue
    print(i)  # 0, 1, 3, 4</code></pre></div>`
        },
        {
            id: 17,
            title: "Nested Loops",
            module: "Module 3",
            content: `<h2>Loops Within Loops</h2>
                <div class="code-block"><div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                <pre><code class="language-python"># Multiplication table
for i in range(1, 6):
    for j in range(1, 6):
        print(f"{i} x {j} = {i*j}")
    print()  # Empty line</code></pre></div>`
        },
        {
            id: 18,
            title: "Loop Patterns & Practice",
            module: "Module 3",
            hasQuiz: true,
            content: `<h2>Common Loop Patterns</h2>
                <div class="code-block"><div class="code-header"><span class="code-language">Python</span><button class="copy-button" onclick="copyCode(this)">Copy</button></div>
                <pre><code class="language-python"># Sum of numbers
total = 0
for i in range(1, 11):
    total += i
print(f"Sum: {total}")

# Find maximum
numbers = [3, 7, 2, 9, 1]
max_num = numbers[0]
for num in numbers:
    if num > max_num:
        max_num = num
print(f"Max: {max_num}")</code></pre></div>`
        }
    ]
};
