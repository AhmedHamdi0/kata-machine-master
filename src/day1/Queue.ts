type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    private head?: Node<T>;
    private tail?: Node<T>;
    public length: number;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const newNode = { value: item } as Node<T>;
        this.length++;

        if (!this.tail) {
            this.head = this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        this.tail = newNode;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        this.length--;

        if (this.length === 0) this.tail = undefined;

        const head = this.head;
        this.head = this.head.next;

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
