/*
  You may use the following animals array to test your functions inside of this file. This is the same array of animals that is used in the tests.
  
  To run this file, remember that you can run `node index.js` from the command line. You will need to be in the directory where the `index.js` file is kept for the above command to work.

  Finally, remember that in order for you to see output on the command line, you must log something out.
*/
const animals = [
  { kind: "Pig", count: 5 },
  { kind: "Cow", count: 7 },
  { kind: "Chicken", count: 11 },
  { kind: "Horse", count: 1 },
  { kind: "Dog", count: 2 },
  { kind: "Cat", count: 2 },
];

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Adds up the `count` key of each animal in the array and returns a total.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {number} The total of all animal counts.
 *
 * EXAMPLE
 * ------------------
 * getTotalCount(animals); //> 28
 * getTotalCount([]); //> 0 // returns 0 if the input array is empty
 */
  //Function adds up all of the numbers of the `count` the `animals` array and returns a cumulative total.
function getTotalCount(animals) {
  // 1. Determine our initial vaule. (And, recommended: write the return immediately.)
  let result = 0;
  // 2. Define your loop.
  for(let i = 0; i < animals.length; i++) {
    // 3. Accumulate!
    const animal = animals[i];
    result = result + animal.count;
  }
  console.log(result);
  return result
}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the `kind` for each object from the inputted array.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {string[]} An array of strings, where each string is a kind of animal.
 *
 * EXAMPLE
 * ------------------
 * getAllKinds(animals); //> ["Pig", "Cow", "Chicken", "Horse", "Dog", "Cat"]
 * getAllKinds([]); //> [] // returns empty array if input array is empty
 */
  // Function returns an array with the kind of animal from each object from inside the `animals` array
function getAllKinds(animals) {
  // 1. Determine our initial vaule. (And, recommended: write the return immediately.)
  let result = [];
  // 2. Define your loop.
  for(let i = 0; i < animals.length; i++) {
    // 3. Accumulate!
    const animal = animals[i];
    result = result + animal.kind + ', ';
    
   
  }

  console.log(animals);
  result = result.slice(0, result.length-2)
  return result;
}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns all objects inside the given array where the `count` of an animal is equal to or greater than the `minimum` amount.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @param {number} minimum - The lowest count of animals to include.
 * @returns {Object[]} An array of objects, which represents all animals that have a count equal to or greater than the minimum.
 *
 * EXAMPLE
 * ------------------
 * filterByCountMinimum(animals, 5); //> [
    { kind: "Pig", count: 5 },
    { kind: "Cow", count: 7 },
    { kind: "Chicken", count: 11 },
  ];
 * filterByCountMinimum([], 3); //> [] // returns empty array if input array is empty
 */
  // Function gives us a return that has all objects inside the given array
  // Array should have `count` where it is >= the minimum amount of that count
function filterByCountMinimum(animals, minimum) {
  // 1. Determine our initial vaule. (And, recommended: write the return immediately.)
  let result = [];
  // 2. Define your loop.
  for(let i = 0; i < animals.length; i++) {
    // 3. Accumulate!
    const animal = animals[i];
    if(animal.count >= minimum) {
      result.push(animal.count);
    }
  }
  console.log(result);
  return result;
}

/**
 * FUNCTION DESCRIPTION
 * ------------------
 * Returns the object with the highest `count`. If more than one object shares the same highest `count`, return the first one.
 * @param {Object[]} animals - An array of animal objects. See above for the shape of the object.
 * @returns {Object} The object which represents the animal with the highest count.
 *
 * EXAMPLE
 * ------------------
 * getMostCommonAnimal(animals); //> { kind: "Chicken", count: 11 }
 * getMostCommonAnimal([]); //> null // returns null if the input is empty
 */
function getMostCommonAnimal(animals) {
  // 1. Determine our initial vaule. (And, recommended: write the return immediately.)
  let result = {};
  // 2. Define your loop.
  for(let i = 0; i < animals.length; i++) {
  // 3. Accumulate!
  const animal = animals[i];
   if (animals.count < getMostCommonAnimal.count);
  }

  console.log(animals)
  return result;
}

// Do not change anything below this line.
module.exports = {
  getTotalCount,
  getAllKinds,
  filterByCountMinimum,
  getMostCommonAnimal,
};
