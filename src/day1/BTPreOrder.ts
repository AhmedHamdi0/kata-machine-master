function traverse(
    currentNode: BinaryNode<number> | null,
    path: number[],
): number[] {
    if (!currentNode) {
        return path;
    }

    path.push(currentNode.value);
    traverse(currentNode.left, path);
    traverse(currentNode.right, path);

    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return traverse(head, []);
}
