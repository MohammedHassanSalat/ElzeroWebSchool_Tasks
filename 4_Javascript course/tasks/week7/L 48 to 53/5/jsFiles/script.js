let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for(let i = friends.length - friends.length , j = friends.length - friends.length ; i < friends.length ; i++){
    if (friends[i].startsWith(letter.toUpperCase()) == friends.length/friends.length) {
        continue
        j--
    }
    j++
    console.log(`${j} => ${friends[i]}`);
}


// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"