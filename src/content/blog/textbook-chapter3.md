---
title: "World-Building with Design Systems, Chapter 3"
pubDate: 2024-09-24
description: "Implementing Conway's Game of Life"
tags: ["textbook"]
---

## Understanding the Rules of the Game of Life: A World from Simple Beginnings

Welcome to Conway's Game of Life, a fascinating world that emerges from just a handful of simple rules. As we explore this system, remember that we're not just learning about a mathematical curiosity—we're delving into a powerful metaphor for the world-building process itself.

### The World as a Grid

Imagine a vast, two-dimensional world divided into a grid of square cells. Each cell in this world can be in one of two states: alive or dead. This might remind you of the simple grid we created in our HTML file. In terms of world-building, you can think of these cells as the fundamental particles or basic elements of your universe.

### The Rules of Life

What makes the Game of Life truly fascinating are its rules. These rules determine how the world evolves from one generation to the next. Just as the laws of physics govern our universe, these rules shape the fate of every cell in our grid-world:

1. Any live cell with fewer than two live neighbors dies, as if by underpopulation.
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

These four simple rules are all it takes to create a complex, ever-changing world. As you read them, consider how they might parallel laws or principles in the fictional worlds you want to create. How might simple rules in your world lead to complex societies or phenomena?

### Emergence: When Simplicity Breeds Complexity

The true magic of the Game of Life lies in what happens when you set these rules in motion. From simple beginnings—a random assortment of live and dead cells—complex patterns emerge. Some of these patterns are static, some oscillate in place, and others glide across the grid, interacting with other patterns in unpredictable ways.

This concept of emergence—complex behaviors arising from simple rules—is at the heart of many world-building endeavors. Think about how the basic "rules" or premises of your fictional world might lead to unexpected complexities in its societies, ecosystems, or technologies.

### A Laboratory for World-Building

As we implement the Game of Life in our digital workshop, think of it as a laboratory for world-building ideas:

- How might the patterns that emerge represent structures in your fictional world? Could gliders be nomadic tribes? Could stable structures represent cities or strongholds?
- In our telepathic future scenario, could the states of cells represent thoughts or memories? How might the rules of the Game of Life parallel the way ideas spread or evolve in a telepathic society?
- What if you could modify the rules? How would changing the conditions for life and death alter the patterns that emerge? This is akin to asking "what if" questions in your world-building process.

### From Code to Cosmos

In the next steps, we'll translate these rules into code, bringing our cellular world to life in the browser. As we do so, remember that we're not just programming—we're creating a universe. Every line of code is like a law of nature, shaping the reality of our grid-world.

By understanding how complex behaviors can emerge from simple rules in the Game of Life, you'll gain insights into how to craft rich, detailed, and internally consistent fictional worlds from basic premises and principles.

Are you ready to breathe life into your digital universe? Let's begin by implementing the rules of our world!

# Implementing the Game of Life: Your World Comes Alive

## Before We Begin

Remember, you don't need to understand every line of code we're about to add. The beauty of this process is that you can bring a complex world to life with just a few simple steps. All you need to do is copy the provided code and paste it in the right place. It's like planting a seed that will grow into an entire universe!

## Where to Put the Code

We'll be modifying the `index.html` file we created earlier. Here's how to do it:

1. Go to your GitHub repository
2. Click on the `index.html` file
3. Click the pencil icon to edit the file
4. Find the `<script>` tag near the bottom of the file
5. Delete everything between `<script>` and `</script>`
6. Paste the new code (provided below) between these tags
7. Scroll down and click "Commit changes"
8. Add a commit message (e.g., "Implement Game of Life rules") and click "Commit changes"

## The Code

Here's the code to copy and paste:

```javascript
const gridSize = 50;
const grid = document.getElementById('grid');
grid.style.gridTemplateColumns = `repeat(${gridSize}, 10px)`;

let cells = [];

function createGrid() {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.addEventListener('click', () => toggleCell(i));
        grid.appendChild(cell);
        cells.push(false);
    }
}

function toggleCell(index) {
    cells[index] = !cells[index];
    updateGrid();
}

function updateGrid() {
    const cellElements = grid.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cellElements[i].classList.toggle('alive', cells[i]);
    }
}

function getNeighbors(index) {
    const row = Math.floor(index / gridSize);
    const col = index % gridSize;
    let count = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue;
            const newRow = row + i;
            const newCol = col + j;
            if (newRow >= 0 && newRow < gridSize && newCol >= 0 && newCol < gridSize) {
                count += cells[newRow * gridSize + newCol] ? 1 : 0;
            }
        }
    }
    return count;
}

function nextGeneration() {
    const newCells = [...cells];
    for (let i = 0; i < cells.length; i++) {
        const neighbors = getNeighbors(i);
        if (cells[i]) {
            newCells[i] = neighbors === 2 || neighbors === 3;
        } else {
            newCells[i] = neighbors === 3;
        }
    }
    cells = newCells;
    updateGrid();
}

createGrid();

let isRunning = false;
let intervalId = null;

function toggleSimulation() {
    isRunning = !isRunning;
    if (isRunning) {
        intervalId = setInterval(nextGeneration, 100);
        document.getElementById('toggleButton').textContent = 'Stop';
    } else {
        clearInterval(intervalId);
        document.getElementById('toggleButton').textContent = 'Start';
    }
}

document.getElementById('toggleButton').addEventListener('click', toggleSimulation);
```

After pasting this code, make sure to add a button to your HTML. Add the following line just before the `<script>` tag:

```html
<button id="toggleButton">Start</button>
```

## The Amazing Result

Once you've made these changes and they're deployed to GitHub Pages (which may take a few minutes), you'll have a fully functional Game of Life simulation running in your web browser, directly from your GitHub repository!

This is more than just a cool animation – it's a window into a miniature world that you can observe, experiment with, and draw inspiration from. Here's why this is so exciting for your world-building journey:

1. **Real Experiments**: You can now set up different initial patterns and watch how they evolve. Each experiment is like testing a "what if" scenario in your fictional world.

2. **Observable Patterns**: As you run the simulation, you'll start to notice recurring patterns and behaviors. These can be the building blocks for elements in your sci-fi telepathy scenario.

3. **Emergent Complexity**: Watch how complex structures emerge from simple rules and initial conditions. This mirrors how complex societies, ecosystems, or phenomena might arise in your fictional world from basic principles.

4. **Inspiration for World-Building**: The patterns you observe could represent anything in your telepathic world – from the spread of thoughts in a collective consciousness to the formation of secret enclaves resistant to mind-reading.

5. **A Living Notebook**: Your GitHub repository is now both a simulation and a notebook. You can make changes, commit them with notes, and track the evolution of your ideas alongside the evolution of your digital world.

As you play with this simulation, start taking notes on the patterns you observe. What do they remind you of? How might they translate into elements of your telepathic society? Your observations here will form the foundation of the unique world you're building.

Remember, just as this complex world emerged from a few simple rules, your rich, detailed fictional universe will grow from the seeds of ideas you plant now. Happy experimenting, and may your world-building adventure flourish!


# Bringing Your World to Life: Deployment

## From Imagination to Reality

In the realm of world-building, ideas often begin as hazy, imaginative daydreams. They're like whispers in your mind, full of potential but not yet fully formed. When you start writing these ideas down, you're performing a kind of magic - you're bringing these whispers into existence, allowing them to interact with each other on the page. As you write, you begin to see what your world might become, how its various elements influence each other, and how it grows beyond your initial concept.

This process of writing is akin to what we call "deployment" in the digital world. Deployment is like giving a spark of life to the code we've written. It's the moment when our digital creation steps out of the realm of potential and into the realm of the actual - a world that can be run, interacted with, and observed.

## GitHub Pages: Your World's First Breath

GitHub Pages is a tool that allows us to perform this act of deployment easily. It's like a stage where your digital world can take its first breath and come alive for others to see and interact with.

Here's how to use GitHub Pages to deploy your Game of Life:

1. Go to your GitHub repository
2. Click on "Settings" at the top of the repository page
3. In the left sidebar, click on "Pages"
4. Under "Source", you should see a dropdown menu. Select "main" as the branch
5. The page will refresh. Once it does, you should see a message saying "Your site is published at https://yourusername.github.io/your-repo-name/"

That's it! You've just deployed your world. The Game of Life you've created is now live and accessible on the internet.

## Try It Out!

Now, visit the URL provided by GitHub Pages. You should see your Game of Life simulation running in all its glory. Click on cells to bring them to life, hit the "Start" button, and watch as patterns emerge and evolve before your eyes.

## A World Alive

Take a moment to appreciate what you've accomplished. You've not only imagined a world and written down its rules - you've brought it to life in a way that allows for real-time interaction and observation. This functioning Game of Life is more than just a cool animation; it's a miniature universe running according to the rules you've implemented.

Just as a writer might be amazed to see their characters take on a life of their own in a story, you can now watch as complex patterns emerge from the simple rules you've set in motion. This living, breathing digital world is a testament to the power of turning ideas into reality.

As you play with your creation, remember that this is just the beginning. The patterns you observe here, the behaviors that emerge, can all serve as inspiration for the larger world you're building. Your telepathic society, with all its complexities and secrets, can draw rich metaphors from the dancing pixels on your screen.

Congratulations, world-builder. Your digital universe is now alive and awaiting your experiments!