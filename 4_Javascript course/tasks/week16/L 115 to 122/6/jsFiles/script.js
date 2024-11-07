let chosen = 3;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let [a,b,c] = myFriends;

if (chosen === 1) {
    console.log(a.title);
    console.log(a.age);
    console.log(a.available ? "Available" : "Not Available");
    console.log(a.skills[1]);
}
else if(chosen == 2){
    console.log(b.title);
    console.log(b.age);
    console.log(b.available ? "Available" : "Not Available");
    console.log(b.skills[1]);
}
else {
    console.log(c.title);
    console.log(c.age);
    console.log(c.available ? "Available" : "Not Available");
    console.log(c.skills[1]);
}

// without des

// let chosen = 3;

// let myFriends = [
//     { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//     { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//     { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];

// let friend = myFriends[chosen - 1];

// console.log(friend.title);
// console.log(friend.age);
// console.log(friend.available ? "Available" : "Not Available");
// console.log(friend.skills[1]);
