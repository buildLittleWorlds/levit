---
title: "16 Patterns - Pattern 2"
pubDate: 2024-09-24
description: "The Blinker - The Pulse of Change"
tags: ["16-patterns"]
---

## Pattern 2: The Blinker - The Pulse of Change

From the serene stability of the Block, we now turn to our first dynamic pattern: the Blinker.

```
Generation 1:   Generation 2:
     #               ###
     #
     #
```

The Blinker is the simplest example of an "oscillator" in the Game of Life. It alternates between two states: a vertical line of three live cells, and a horizontal line of three live cells. This back-and-forth motion continues indefinitely, a perpetual pulse in our grid universe.

Let's walk through the Blinker's lifecycle:

1. Starting with a vertical line of three cells, the top and bottom cells die in the next generation (each has only one live neighbor), while the dead cells to the left and right of the middle cell spring to life (each has exactly three live neighbors).
2. This creates a horizontal line of three cells.
3. The process then reverses, returning to the vertical configuration.

The Blinker completes its cycle every two generations, giving it what we call a "period" of 2.

The existence of oscillators like the Blinker introduces us to a crucial concept in the Game of Life: periodicity. While the rules of our universe are deterministic (the same input always produces the same output), they can give rise to patterns that cycle through a series of states before returning to their initial configuration.

This periodic behavior is a step up in complexity from the static Block. It shows us that the Game of Life can produce patterns that change over time, yet maintain a form of stability through repetition. The Blinker is constantly changing, yet also constantly returning to where it began.

Oscillators play a vital role in more complex Game of Life constructions. They can act as clocks, timing mechanisms, or signal generators. In some cases, they can even be used to control or modify other patterns.

The Blinker also introduces us to the concept of a pattern's "footprint." While the live cells in the Blinker only ever occupy three squares at a time, the pattern as a whole affects a 3x3 area of the grid. This footprint becomes an important consideration when working with multiple patterns in close proximity.

As simple as it may seem, the Blinker represents a fundamental type of behavior in the Game of Life. It shows us that our grid universe is not limited to static configurations, but can support ongoing, cyclic processes—a first hint at the dynamic complexity that emerges from the Game's simple rules.

In our next chapters, we'll explore patterns that take this dynamism even further, introducing movement across the grid and even more complex forms of oscillation. But the humble Blinker will remain a touchstone, a basic unit of change in the pulsing heart of the Game of Life.