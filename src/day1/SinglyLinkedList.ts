type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class SinglyLinkedList<T> {
    private head?: Node<T>;
    private tail?: Node<T>;
    public length: number;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        const newNode = { value: item } as Node<T>;
        this.length++;

        if (!this.head) {
            this.head = this.tail = newNode;
            return;
        }

        newNode.next = this.head;
        this.head = newNode;
    }

    append(item: T): void {
        const newNode = { value: item } as Node<T>;
        this.length++;

        if (!this.tail) {
            this.head = this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        this.tail = newNode;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            throw new Error("Index out of bounds");
        }

        this.length++;

        if (idx === 0) {
            this.prepend(item);
            return;
        }

        if (idx === this.length) {
            this.append(item);
            return;
        }

        const newNode = { value: item } as Node<T>;
        let currentNode = this.head;
        let prevNode: Node<T> | undefined;
        let i = 0;
        while (currentNode && i < idx) {
            prevNode = currentNode;
            currentNode = currentNode.next;
            i++;
        }

        if (prevNode) {
            prevNode.next = newNode;
        }

        if (currentNode) {
            newNode.next = currentNode;
        }
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }

        let currentNode = this.head;
        let prevNode: Node<T> | undefined;
        let i = 0;

        while (currentNode && i < idx) {
            prevNode = currentNode;
            currentNode = currentNode.next;
            i++;
        }

        if (prevNode) {
            prevNode.next = currentNode ? currentNode.next : undefined;
        } else {
            this.head = currentNode ? currentNode.next : undefined;
        }

        if (idx === this.length - 1) {
            this.tail = prevNode;
        }

        this.length--;
        return currentNode ? currentNode.value : undefined;
    }

    remove(item: T): T | undefined {
        let currentNode = this.head;
        let prevNode: Node<T> | undefined;

        while (currentNode) {
            if (currentNode.value === item) {
                if (prevNode) {
                    prevNode.next = currentNode.next;
                } else {
                    this.head = currentNode.next;
                }

                if (!currentNode.next) {
                    this.tail = prevNode;
                }

                this.length--;
                return currentNode.value;
            }

            prevNode = currentNode;
            currentNode = currentNode.next;
        }

        return undefined;
    }

    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }

        let currentNode = this.head;
        let i = 0;

        while (currentNode && i < idx) {
            currentNode = currentNode.next;
            i++;
        }

        return currentNode ? currentNode.value : undefined;
    }
}
