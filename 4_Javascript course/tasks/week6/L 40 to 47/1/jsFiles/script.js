let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
console.log(myFriends.slice(myFriends.length-myFriends.length,num)); // ["Ahmed", "Elham", "Osama"];