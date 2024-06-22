//Album: Write a function called make_album() that builds a Object describing a music album. 
//The function should take in an artist name and an album title, and it should return a Object containing
// these two pieces of information. Use the function to make three dictionaries representing different albums. 
//Print each return value to show that Objects are storing the album information correctly. 
//Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
//If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
//Make at least one new function call that includes the number of tracks on an album.
//Code Solution
let makeAlbum = (artistName, albumTitle) => {
    return { artistName, albumTitle };
};
let firstalbum = makeAlbum("Haider", "Jhoom");
let secondAlbum = makeAlbum("Ali", "Dosti");
let thirdAlbum = makeAlbum("Junaid", "Roshni");
console.log(firstalbum);
console.log(secondAlbum);
console.log(thirdAlbum);
let makeAlbum1 = (artistName, albumTitle, numberofTracks) => {
    return { artistName, albumTitle, numberofTracks };
};
let firstalbum1 = makeAlbum1("Haider", "Jhoom", 1);
let secondAlbum1 = makeAlbum1("Ali", "Dosti");
let thirdAlbum1 = makeAlbum1("Junaid", "Roshni", 2);
console.log(firstalbum1);
console.log(secondAlbum1);
console.log(thirdAlbum1);
export {};
