//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an
// if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//Code Solution
let alienColour = "green";
if (alienColour === "green") {
    console.log("Player Just earned 5 points");
}
alienColour = 'yellow';
if (alienColour === "green") {
    console.log("Player Just earned 5 points");
}
else
    (console.log("Player Just earned 10 points"));
alienColour = 'red';
if (alienColour === "green") {
    console.log("Player Just earned 5 points");
}
else
    (console.log("Player Just earned 15 points"));
export {};
