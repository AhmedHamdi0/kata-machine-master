let arr = new ArrayBuffer(6);

const arr8 = new Uint8Array(arr);
arr8[0] = 0x45
arr8[1] = 0x47

console.log(arr);

const arr16 = new Uint16Array(arr);
arr16[2] = 0x1419

console.log(arr);
