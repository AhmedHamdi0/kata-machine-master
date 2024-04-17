export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const queue: (BinaryNode<number> | null)[] = [head];

    while (queue.length) {
        const currentNode = queue.shift() as
            | BinaryNode<number>
            | null
            | undefined;

        if (!currentNode) {
            continue;
        }

        if (currentNode.value === needle) {
            return true;
        }

        queue.push(currentNode.left);
        queue.push(currentNode.right);
    }

    return false;
}
