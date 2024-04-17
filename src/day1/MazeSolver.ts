const direction = [
    // [y, x]
    [-1, 0], // Left
    [1, 0], // Right
    [0, -1], // Up
    [0, 1], // Down
];

function walk(
    maze: string[],
    wall: string,
    current: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
) {
    // Base Cases
    // 1. Off the maze map
    if (
        current.x < 0 ||
        current.x > maze[0].length ||
        current.y < 0 ||
        current.y > maze.length
    ) {
        return false;
    }

    // 2. On a wall
    if (maze[current.y][current.x] === wall) {
        return false;
    }

    if (seen[current.y][current.x]) {
        return false;
    }
    // 3. If we have pass through here before

    // 4. It is the end
    if (current.x === end.x && current.y === end.y) {
        path.push(end);
        return true;
    }

    // 3 Steps of Recusrion
    // 1. Pre
    seen[current.y][current.x] = true;
    path.push(current);

    // 2. Recurse
    for (let i = 0; i < direction.length; i++) {
        const [x, y] = direction[i];
        const new_current = {
            x: current.x + x,
            y: current.y + y,
        };

        const end_found: boolean | undefined = walk(
            maze,
            wall,
            new_current,
            end,
            seen,
            path,
        );
        if (end_found) return true;
    }

    // 3. Post
    path.pop();
    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const path: Point[] = [];
    const seen: boolean[][] = [];

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);
    return path;
}
