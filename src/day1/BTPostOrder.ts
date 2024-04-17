function traverse(
    currentNode: BinaryNode<number> | null,
    path: number[],
): number[] {
    if (!currentNode) {
        return path;
    }

    traverse(currentNode.left, path);
    traverse(currentNode.right, path);
    path.push(currentNode.value);

    return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return traverse(head, []);
}
