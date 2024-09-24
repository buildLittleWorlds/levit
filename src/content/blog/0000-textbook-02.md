---
title: "World-Building with Design Systems, Chapter 2"
pubDate: 2024-09-24
description: "Setting up your lab for world-building with design systems"
tags: ["textbook"]
---

## Introduction to GitHub: Your World-Building Laboratory

Before we dive into the fascinating realm of world-building, let's set up our digital workshop. Don't worry—this isn't a computer science course, and you won't need any prior coding knowledge. Think of this section as setting up your artist's studio or writer's desk, but in the digital realm.

### What is GitHub?

GitHub is like a sophisticated, digital version of a writer's notebook or an artist's sketchbook. It's a place where you can store your work, track changes over time, and even collaborate with others if you choose to. But for our purposes, we'll be using it as a personal laboratory for world-building experiments.

### Why GitHub for World-Building?

You might wonder why we're using a tool often associated with software development for a creative writing course. The answer lies in one of the fundamental principles of world-building: creating complex structures from clearly defined small beginnings.

In world-building, we often start with a simple idea or rule and then build upon it, layer by layer, until we have a rich, complex universe. GitHub allows us to do exactly that, but in a digital, easily manageable way. Here's how:

1. **Version Control**: As you develop your world, you can save different versions, allowing you to see how your ideas evolve over time.

2. **Branching**: You can create different "branches" to explore alternative versions of your world without losing your original ideas.

3. **Documentation**: GitHub provides tools for documenting your world-building process, which will be crucial as we set up our learning blog.

4. **Web Hosting**: GitHub can host simple websites, which we'll use to display our Game of Life simulation and our world-building blog.

### Don't Worry About the Code

Throughout this course, you'll encounter some code. But remember, this isn't a coding course. Any code you need will be provided for you to copy and paste, with clear instructions on where it goes. You won't need to write or understand code to complete this course successfully.

If you're curious about how things work under the hood, we'll provide some optional, high-level explanations. But these are purely for interest and aren't required to complete the course or understand the world-building concepts we'll explore.

### Troubleshooting with AI Tools

If you encounter any issues, don't worry! We'll provide instructions on using AI tools to help troubleshoot. These tools can often provide simple, non-technical solutions to common problems.

### Your First Step into a Larger World

By setting up a GitHub account and repository, you're taking your first step into a larger world of systematic creativity. Just as a world-builder might start with a single rule or concept and expand it into an entire universe, you'll start with a simple digital space and gradually populate it with the building blocks of your imagined world.

In the next sections, we'll guide you through setting up your GitHub account, creating your first repository, and preparing the groundwork for our Game of Life simulation. Remember, the goal here isn't to become a coder, but to use these tools as a means to explore and document your world-building journey.

Are you ready to set up your digital world-building laboratory? Let's begin!

# Creating Your GitHub Repository: A Step-by-Step Guide

This guide will walk you through the process of setting up your GitHub account and creating your first repository. We'll be using only the GitHub website, so you won't need to download any additional software or use the command line.

## Step 1: Create a GitHub Account

1. Open your web browser and go to [https://github.com](https://github.com)
2. Click on the "Sign up" button in the upper right corner
3. Fill out the registration form with your username, email, and password
4. Complete any verification steps GitHub requires
5. Once your account is created, log in to GitHub

## Step 2: Create a New Repository

1. After logging in, click on the "+" icon in the upper right corner of the page
2. Select "New repository" from the dropdown menu
3. On the "Create a new repository" page:
   - Choose a name for your repository (e.g., "world-building-lab")
   - Add a brief description (optional)
   - Select "Public" (this allows GitHub Pages to work for free)
   - Check the box next to "Add a README file"
4. Click the "Create repository" button

Congratulations! You've just created your first GitHub repository.

## Step 3: Edit the README File

1. In your new repository, click on the "README.md" file
2. Click the pencil icon (Edit this file) on the right side of the file view
3. Add some text to introduce your world-building project. For example:
   ```
   # My World-Building Laboratory

   This repository is part of my journey in experimental world-building. 
   Here, I'll be exploring the intersection of Conway's Game of Life, 
   design systems, and creative writing to craft a unique fictional universe.
   ```
4. Scroll down and click "Commit changes"
5. In the pop-up, add a commit message (e.g., "Update README with project description") and click "Commit changes"

## Step 4: Create a New File for the Game of Life

1. On your repository's main page, click the "Add file" button, then select "Create new file"
2. Name your file `index.html` (this will be the main page for your Game of Life simulation)
3. In the file editor, paste the following basic HTML structure:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Conway's Game of Life</title>
   </head>
   <body>
       <h1>Conway's Game of Life</h1>
       <p>Our simulation will appear here soon!</p>
   </body>
   </html>
   ```
4. Scroll down and click "Commit new file"
5. Add a commit message (e.g., "Add initial HTML file for Game of Life") and click "Commit new file"

## Step 5: Enable GitHub Pages

1. In your repository, click on "Settings" (it's in the top menu of your repository)
2. In the left sidebar, click on "Pages"
3. Under "Source", select "main" from the branch dropdown
4. Click "Save"
5. GitHub will provide you with a URL where your page is published (it may take a few minutes to become active)

Congratulations! You've now set up your GitHub repository and created the foundation for your Game of Life simulation. In the next sections, we'll add more content to bring the simulation to life.

Remember, if you encounter any issues or have questions, don't hesitate to use the AI troubleshooting tools we'll provide. Happy world-building!

## Coding Follow-up: Start the Design Engine!
Here's the code for your `index.html` file. Remember, you don't need to understand every line - just copy and paste this into your file on GitHub:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conway's Game of Life: World-Building Laboratory</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #f0f0f0;
        }
        #grid {
            display: grid;
            grid-template-columns: repeat(10, 30px);
            gap: 1px;
            background-color: #ccc;
            border: 1px solid #999;
            margin: 20px 0;
        }
        .cell {
            width: 30px;
            height: 30px;
            background-color: white;
            transition: background-color 0.3s;
        }
        .cell:hover {
            background-color: #ddd;
        }
        .cell.alive {
            background-color: black;
        }
    </style>
</head>
<body>
    <h1>Conway's Game of Life: World-Building Laboratory</h1>
    <p>Click on cells to bring them to life or put them to rest. Observe how simple actions can create complex patterns!</p>
    <div id="grid"></div>
    <p>As you interact with this grid, think about how these simple cells could represent elements in your imaginary world. What secrets might they hide in our telepathic future?</p>

    <script>
        // Remember, in world-building, we start with simple elements and build complexity.
        // This grid is like the fundamental particles of your universe!
        const grid = document.getElementById('grid');
        for (let i = 0; i < 100; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.addEventListener('click', () => {
                // Every click is like a decision in your world, changing its state
                cell.classList.toggle('alive');
            });
            grid.appendChild(cell);
        }
    </script>
</body>
</html>
```

Now, let's break down what this code does in the context of our world-building exercise:

1. **HTML Structure**: This creates the basic structure of our page, including a title, some explanatory text, and a div that will contain our grid.

2. **CSS Styling**: The styles make our grid visually appealing. Each cell is a 30x30 pixel square, and the grid is 10x10 cells. The `.alive` class turns a cell black.

3. **JavaScript Interactivity**: This creates 100 cells and makes them clickable. Clicking a cell toggles its state between "alive" (black) and "dead" (white).

Remember, this isn't just a coding exercise - it's the beginning of your world-building journey! As you interact with this grid:

- Think of each cell as a fundamental particle in your universe. How might these simple elements combine to create complex structures?
- Consider how the ability to change a cell's state with a click could relate to the telepathic abilities in our sci-fi scenario. What if each cell represented a thought or a memory?
- Observe the patterns that emerge as you click. Could these patterns represent hidden structures in your telepathic society?

In the Game of Life, complex behaviors emerge from simple rules. Similarly, in world-building, rich, detailed universes can arise from basic principles. As you experiment with this grid, you're laying the groundwork for understanding how simple interactions can lead to intricate worlds.

In our next steps, we'll build upon this foundation, gradually increasing the complexity of our simulation - and of the world we're building alongside it. Keep exploring, and happy world-building!

