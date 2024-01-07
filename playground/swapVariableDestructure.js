const edibles = ["food", "fruits"];

//let [positionOne, positionTwo] = edibles;
let positionOne = "food";
let positionTwo = "fruits";

[positionOne, positionTwo] = [positionTwo, positionOne];
console.log(positionOne, positionTwo);
