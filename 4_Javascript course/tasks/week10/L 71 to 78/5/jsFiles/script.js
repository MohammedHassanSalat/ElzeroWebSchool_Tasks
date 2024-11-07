let nums = [2, 12, 11, 5, 10, 1, 99];

// 500

let ans = nums.reduce(function (acc,current) {
    return current % 2 == 0 ? acc *= current : acc += current ;
},1)

console.log(ans);