type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        const newNode = { value: item } as Node<T>;

        this.length++;
        if (!this.head) {
            this.head = this.tail = newNode;
            return;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    insertAt(item: T, idx: number): void {
        this.length++;
        if (idx > this.length) {
            throw new Error("oh no");
        } else if (idx === this.length) {
            this.append(item);
            return;
        } else if (idx === 0) {
            this.prepend(item);
            return;
        }

        this.length++;
        const currentNode = this.getAt(idx) as Node<T>;
        const newNode = { value: item } as Node<T>;

        newNode.next = currentNode;
        newNode.prev = currentNode.prev;
        currentNode.prev = newNode;

        if (newNode.prev) {
            newNode.prev.next = newNode;
        }
    }

    append(item: T): void {
        this.length++;
        const newNode = { value: item } as Node<T>;

        if (!this.tail) {
            this.head = this.tail = newNode;
            return;
        }

        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    }

    remove(item: T): T | undefined {
        let currentNode = this.head;
        for (let i = 0; currentNode && i < this.length; i++) {
            if (currentNode.value === item) {
                break;
            }
            currentNode = currentNode.next;
        }

        if (!currentNode) {
            return undefined;
        }

        return this.removeNode(currentNode);
    }

    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
    }

    removeAt(idx: number): T | undefined {
        const node = this.getAt(idx);

        if (!node) {
            return undefined;
        }

        return this.removeNode(node);
    }

    private getAt(idx: number): Node<T> | undefined {
        let currentNode = this.head;
        for (let i = 0; currentNode && i < idx; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    private removeNode(node: Node<T>): T | undefined {
        this.length--;

        if (this.length === 0) {
            const val = this.head?.value;
            this.head = this.tail = undefined;
            return val;
        }

        if (node.prev) {
            node.prev.next = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }

        if (node === this.head) {
            this.head = node.next;
        }

        if (node === this.tail) {
            this.tail = node.prev;
        }

        node.next = node.prev = undefined;
        return node.value;
    }
}
