# game-of-life-p5js
## Conways game of life in p5js 
## arrays of cell objects made from a cell class
## keep track of their history so you can pause and step back or forward
[See the site!](https://greggelong.github.io/game-of-life-p5js/)


It uses a cell object that

keeps track of their history. That means you can rewind according to the

cells history.

If you were just using the algorithm you can not rewind in the game of life

In The Recursive Universe (1985), Chapter 2, in the section Naturalists and Engineers, William Poundstone writes:

    Conway's life is forward-deterministic. A given pattern leads to one and only one, sequel pattern. Life is not backward-deterministic. a pattern usually has many patterns that may have preceded it. In short a configuration has only one future but (usually) many possible pasts.

He goes on to say

    This fact is responsible for one of the occasional frustrations of playing Life. Sometimes you will see something interesting happen, stop the program and be unable to backtrack and repeat it. There is no simple way you can program a computer to go backward from a Life State-- there are too many possibilities.

Of course there is a very easy way, now, using cells as objects and

having an array to keep track of their histories at a given time step.

Then you are rewinding by looking up a recorded past state. You are not computing a prior state using the algorithm.
