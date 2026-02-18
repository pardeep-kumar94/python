// This file contains the complete Python curriculum with all 40 lessons
// Due to size, this is split from the main app.js

const COMPLETE_CURRICULUM = [
    {
        id: 1,
        title: "Module 1: The Foundation",
        icon: "🎯",
        description: "Start your Python journey understanding variables, data types, and how Python thinks",
        lessons: 6,
        duration: "2 hours"
    },
    {
        id: 2,
        title: "Module 2: Making Decisions",
        icon: "🤔",
        description: "Learn how programs make choices using if-else statements and logical thinking",
        lessons: 6,
        duration: "2.5 hours"
    },
    {
        id: 3,
        title: "Module 3: Loops & Repetition",
        icon: "🔁",
        description: "Master the art of repetition with while and for loops",
        lessons: 6,
        duration: "3 hours"
    },
    {
        id: 4,
        title: "Module 4: Collections",
        icon: "📦",
        description: "Work with lists, dictionaries, tuples, and sets to organize data",
        lessons: 7,
        duration: "3.5 hours"
    },
    {
        id: 5,
        title: "Module 5: Functions",
        icon: "⚡",
        description: "Create reusable code blocks and understand scope",
        lessons: 6,
        duration: "3 hours"
    },
    {
        id: 6,
        title: "Module 6: Object-Oriented Programming",
        icon: "🏗️",
        description: "Build classes and objects like a professional developer",
        lessons: 6,
        duration: "4 hours"
    },
    {
        id: 7,
        title: "Module 7: Professional Python",
        icon: "🚀",
        description: "File handling, error handling, modules, and real-world projects",
        lessons: 5,
        duration: "4 hours"
    }
];

// Quiz data for each module
const QUIZZES = {
    1: {
        title: "Module 1 Quiz: Foundation Concepts",
        questions: [
            {
                question: "What does the print() function do?",
                options: [
                    "Stores data in memory",
                    "Displays output to the screen",
                    "Creates a variable",
                    "Deletes data"
                ],
                correct: 1,
                explanation: "print() is used to display output to the console/screen."
            },
            {
                question: "Which is a valid variable name?",
                options: [
                    "1st_place",
                    "user-name",
                    "user_name",
                    "my name"
                ],
                correct: 2,
                explanation: "Variable names can't start with numbers, contain hyphens, or have spaces. user_name follows Python naming conventions."
            },
            {
                question: "What data type is the value True?",
                options: [
                    "String",
                    "Integer",
                    "Float",
                    "Boolean"
                ],
                correct: 3,
                explanation: "True and False are boolean values in Python."
            }
        ]
    },
    2: {
        title: "Module 2 Quiz: Conditional Logic",
        questions: [
            {
                question: "What operator checks if two values are equal?",
                options: [
                    "=",
                    "==",
                    "!=",
                    "==="
                ],
                correct: 1,
                explanation: "== checks equality, while = is for assignment."
            }
        ]
    }
};

// Practice projects for each module  
const PROJECTS = {
    1: {
        title: "Personal Profile Generator",
        difficulty: "Beginner",
        description: "Create a program that collects user information and displays a formatted profile",
        requirements: [
            "Ask for name, age, city, and favorite hobby",
            "Calculate age in 10 years",
            "Display everything in a nice format",
            "Use f-strings for formatting"
        ],
        starterCode: `# Personal Profile Generator
# Your code here

name = input("Enter your name: ")
# Add more inputs and logic`
    },
    2: {
        title: "Number Guessing Game",
        difficulty: "Beginner",
        description: "Build a game where the computer picks a number and the user guesses",
        requirements: [
            "Generate a random number between 1-100",
            "Give hints (too high/too low)",
            "Count number of guesses",
            "Celebrate when user wins"
        ],
        starterCode: `import random

secret = random.randint(1, 100)
guesses = 0

# Your code here`
    },
    3: {
        title: "Multiplication Table Generator",
        difficulty: "Beginner",
        description: "Generate multiplication tables using loops",
        requirements: [
            "Ask user which table they want",
            "Print table from 1 to 10",
            "Format output nicely",
            "Optionally create tables for multiple numbers"
        ],
        starterCode: `# Multiplication Table Generator

number = int(input("Which table? "))

# Use a loop to generate the table`
    },
    4: {
        title: "Contact Book",
        difficulty: "Intermediate",
        description: "Create a simple contact management system",
        requirements: [
            "Store contacts in a dictionary",
            "Add new contacts",
            "Search for contacts",
            "Display all contacts"
        ],
        starterCode: `contacts = {}

# Your contact book code here`
    },
    5: {
        title: "Grade Calculator",
        difficulty: "Intermediate",
        description: "Calculate grades with functions",
        requirements: [
            "Function to calculate average",
            "Function to determine letter grade",
            "Handle multiple students",
            "Display statistics"
        ],
        starterCode: `def calculate_average(scores):
    # Your code
    pass

def get_letter_grade(average):
    # Your code
    pass`
    },
    6: {
        title: "Bank Account System",
        difficulty: "Intermediate",
        description: "Create a BankAccount class with deposit, withdrawal, and balance",
        requirements: [
            "Create BankAccount class",
            "Implement deposit and withdraw methods",
            "Track transaction history",
            "Prevent negative balance"
        ],
        starterCode: `class BankAccount:
    def __init__(self, owner, balance=0):
        # Your code
        pass
    
    def deposit(self, amount):
        # Your code
        pass`
    },
    7: {
        title: "Todo List Application",
        difficulty: "Advanced",
        description: "Complete todo app with file persistence",
        requirements: [
            "Add, remove, complete tasks",
            "Save to file",
            "Load from file",
            "Mark tasks as done"
        ],
        starterCode: `import json

class TodoList:
    def __init__(self):
        self.tasks = []
    
    # Implement methods here`
    }
};
