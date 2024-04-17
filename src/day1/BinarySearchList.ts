export default function binary_search(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        const mid_index = Math.floor(low + (high - low) / 2);
        const mid_value = haystack[mid_index];

        if (mid_value === needle) {
            return true;
        } else if (mid_value > needle) {
            high = mid_index
        } else {
            low = mid_index + 1
        }

    } while(low < high);

    return false;
}
