let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
    console.log("Found");
}

if (haystack[0] == needle || haystack[1] == needle || haystack[2] == needle) {
    console.log("Found");
}

if (haystack.indexOf(needle)){
    console.log("Found");
}