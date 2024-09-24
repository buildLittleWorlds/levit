---
title: "16 Patterns - Pattern 8"
pubDate: 2024-09-24
description: "The Beacon - The Dance of Opposites"
tags: ["16-patterns"]
---

## Pattern 8: The Beacon - The Dance of Opposites

From the continuous production of the Gosper Glider Gun, we now turn to a simpler yet intriguing oscillator: the Beacon.

```
Generation 1:   Generation 2:
##..            ##..
##..            #...
..##            ..#.
..##            ..##
```

The Beacon is a period-2 oscillator, meaning it alternates between two states. What makes it unique is how it achieves this oscillation.

Let's examine its behavior:

1. The Beacon consists of two diagonally adjacent 2x2 blocks.
2. In one phase, all cells are alive.
3. In the next phase, the two corner cells where the blocks meet die.
4. This process then reverses, returning to the original state.

The Beacon introduces several interesting concepts:

1. **Oscillation through Destruction and Creation**: Unlike the Blinker, which oscillates through a kind of rotation, the Beacon's oscillation involves cells actually dying and coming back to life.

2. **Stable Subcomponents**: The Beacon can be seen as two Block still lifes that interact to create oscillation. This shows how stable patterns can combine to create dynamic behavior.

3. **Edge Interactions**: The oscillation occurs at the meeting point of the two blocks, demonstrating again the importance of edge interactions in the Game of Life.

4. **Symmetry in Oscillation**: The Beacon maintains symmetry in both of its phases, showing how symmetry can persist through pattern evolution.

The Beacon's behavior can be fully explained by our rules:

- The corner cells die because they have only one neighbor.
- They come back to life because, when dead, they have three neighbors.
- The rest of the cells in the 2x2 blocks remain stable throughout.

This pattern shows us that oscillation in the Game of Life can occur not just through the movement of live cells, but through a balanced process of destruction and creation. It's a dance of opposites, where life and death alternate in perfect rhythm.

In more complex Game of Life constructions, Beacons can be used as timing mechanisms or as components in larger oscillators. Their predictable, two-phase oscillation makes them useful building blocks for more intricate periodic patterns.

The Beacon, with its simple yet captivating behavior, reminds us of the diverse ways that dynamism can emerge in the Game of Life. From the frenetic evolution of the R-pentomino to the steady pulsation of the Beacon, our grid universe continues to surprise us with its rich variety of behaviors.