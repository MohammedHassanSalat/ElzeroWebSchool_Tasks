// Create Enums + Function Here
function insane(num: number): number {
    return Game.Hard - num;
}

enum Game {
    Easy = 100,
    Medium = Easy - 20,
    Hard = Medium - (Easy / 2),
    Insane = insane(20),
    // you cant name both Insane
}

// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20