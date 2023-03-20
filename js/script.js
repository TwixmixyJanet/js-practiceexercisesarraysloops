var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books"
];

stuff.forEach(function (item, index) {
  if (index % 2 === 0) {
    console.log(`${index + 1}: ${item}`);
  }
  // my first attempt at writing the code:
  //console.log(`${item} - ${index % 2 === 0}`);
  //this gave true/false statements
});

var removeItem = function (array, item) {
  //this was my first attempt to code it, obviously I'm way off.
  // stuff.splice(7, 1);
  // console.log(stuff);
  var index = array.indexOf(item);
  if (index === -1) {
    console.log(`Sorry, that item does not exist inthis array.`);
  } else {
    array.splice(index, 1);
    console.log(`Removing ${item}`);
  }
};

removeItem(stuff, "perfume");
console.log(stuff);
removeItem(stuff, "tea");
console.log(stuff);

//this was my first attempt at filtering out.
//I didn't see the part about making it a for...of loop.
//So this is obviously wrong.
//It did not work either.
// var sFilter = stuff.filter(function (item) {
//   return item.includes("s");
// });
// console.log(stuff);

//first approach - of...loop
var onlyS = [];

for (let item of stuff) {
  if (item.includes("s")) {
    onlyS.push(item);
  }
}
console.log(onlyS);
//this method obviously worked.

//filter method - so my first attempt wasn't far off!
var filteredOnlyS = stuff.filter(function (item) {
  return item.includes("s");
});

console.log(filteredOnlyS);
//you'll need to comment out certain parts of the above to get this code to work.