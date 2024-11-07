let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero

let ans = mix.map(function (ele) {
    return isNaN(ele) ? ele : "";
}).reduce(function (ele,curr) {
    return ele+curr;
})

console.log(ans);