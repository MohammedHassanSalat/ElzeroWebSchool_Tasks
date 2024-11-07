let start = performance.now();

// Operation
for (let i = 0; i < 100; i++) {
    console.log(i);
}

// Time End
let end = performance.now();

// Operation Duration
let duration = end - start;

console.log(`Loop Took ${(duration).toFixed()} Milliseconds.`);


// Needed Output
// "Loop Took 1921 Milliseconds."