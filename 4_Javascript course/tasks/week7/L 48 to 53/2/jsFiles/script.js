let start = 10;
let end = 0;
let stop = 3;

for(let i = start; i >= end; i--){
    i < 10 ? console.log(`0${i}`): console.log(`${i}`);
    if (i==stop) {
        break
    }
}


// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03