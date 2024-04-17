function traverse(
    currentNode: BinaryNode<number> | null,
    path: number[],
): number[] {
    if (!currentNode) {
        return path;
    }

    traverse(currentNode.left, path);
    path.push(currentNode.value);
    traverse(currentNode.right, path);

    return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return traverse(head, []);
}
