let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
let ans = [...new Set(myFriends)].sort();

console.log(ans);

// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']