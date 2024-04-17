# Kata-Machine-Master

![ThePrimeagen](thePrimeagen.jpg)
### ThePrimeagen's Data Structures and Algorithms Implementations repository! This repository contains a comprehensive collection of data structures and algorithms implemented in TypeScript, based on ThePrimeagen's super fun course.
[The Last Algorithms Course You'll Need (Part 1)](https://frontendmasters.com/courses/algorithms/)

[The Last Algorithms Course You'll Want (Part 2)](https://frontendmasters.com/courses/advanced-algorithms/)

## Supported Algorithm
* Linear Search
* Binary Search
* Bubble Sort
* Insertion Sort
* Merge Sort
* Quick Sort
* Prim's MST (Adjacency List)
* Dijkstra's Shortest Path (Adjacency List)
* Least Recently Used (LRU)

## Supported Data Structures
* ArrayList
* Singly linked list
* Doubly linked list
* Queue
* Stack
* Binary Trees [DFS, BFS]
* Heap
* Graph with Adjacency List
* Graph with Adjacency Matrix (untested)

## Problem Solving
* Two Crystall Balls
* Maze Solver
* Compre Binary Trees
  
### How It Works

Make sure you have [Node.js](https://nodejs.org/en/) and yarn installed: `npm install --global yarn`

clone the repo and install the dependencies

```bash
yarn install
```
`day1` directory has the implemented `DSA`, create a `new day` of `katas` using:

```bash
yarn generate
```

this will progressively create folders named

```
src/day1
src/day2
...
```

`yarn generate` will also update the `tsconfig.json` and `jest.config` to point
the latest `day` folder via tspaths.  This allows us to avoid updating anything
for testing each day.

#### Testing
```
npx jest <name of the file to be tested>
```
The test cases are already implemented in `src/__tests__`
