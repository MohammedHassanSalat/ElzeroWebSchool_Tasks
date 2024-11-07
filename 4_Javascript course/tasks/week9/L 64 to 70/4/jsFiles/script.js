function specialMix(...data) {
    // Your Code Here
    let res = 0;
    for(let i = 0; i < data.length; i++){
        if(isNaN(parseInt(data[i])) === false){
            res += parseInt(data[i]);
        }
    }
    if(res === 0){
        return "All Is Strings"
    }
    return res;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
