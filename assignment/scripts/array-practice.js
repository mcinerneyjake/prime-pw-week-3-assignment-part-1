console.log("****** Array Practice *******");

// 1. Creating arrays
console.log("--- 1. Practice creating arrays ---");

// Example: Array of animals
let animalArray = ["fish", "cat", "bird", "dog"];
console.log("Animals are: ", animalArray);

// 1.a. TODO: Make an array with some favorite foods
let favoriteFoodsArray = ["pizza", "tacos", "spaghetti"]; // DONE

// 1.b. TODO: Log your array of foods to the console with a message, similar
//      to the example above
console.log("Favorite foods are: ", favoriteFoodsArray); // DONE

// 2. Array.length - tells you how many items are in the array
console.log("--- 2. Length of an array ---");

// Example: How many animals are in the array?
console.log("Number of animals:", animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array
console.log("Number of favorite foods:", favoriteFoodsArray.length); // DONE
// 3. Accessing array items
console.log("--- 3. Accessing items in an array ---");

// Example: Log the first animal from the array using it's array index
console.log("First animal is", animalArray[0]);

// 3.a. TODO: Log the second animal in the array
console.log("Second animal is", animalArray[1]); // DONE
// 3.b. TODO: Log the last animal in the array using it's array index
console.log("Last animal is", animalArray[3]); // DONE
// 3.c. (STRETCH) TODO: Log the last animal by using the array length,
//      instead of the exact index number of the last item
console.log("Last animal is", animalArray[animalArray.length - 1]); // DONE
// 4. Adding & Removing Array Items
console.log("--- 4. Adding and removing array items ---");

// Example: Add an animal to the end using Array.push
animalArray.push("penguin");
console.log("Added an animal to end,", animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array
favoriteFoodsArray.push("sparkling water");
console.log("Added a food to end,", favoriteFoodsArray); // DONE
// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log("Removed the last animal", removedAnimal);
console.log("The animals are now", animalArray);

// 4.b. TODO: Remove the food at the end of your array &
//      log both the food removed and the updated array
let removedFood = favoriteFoodsArray.pop();
console.log("Removed the last food", removedFood);
console.log("The favorite foods are now", favoriteFoodsArray); // DONE
// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift("walrus");
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array
favoriteFoodsArray.unshift("apples");
console.log(`Added a food to beginning: ${favoriteFoodsArray}`); // DONE
// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log("Removed the first animal", removedAnimal);
console.log("The animals are now", animalArray);

// 4.d TODO: Remove the food at the beginning of your array &
//     log both the food removed and the updated array
removedFood = favoriteFoodsArray.shift();
console.log("Removed the first favorite food", removedFood);
console.log("The favorite foods are now", favoriteFoodsArray); // DONE
// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.
let indexSelector = favoriteFoodsArray.indexOf("tacos");

if (~indexSelector) {
  favoriteFoodsArray[indexSelector] = "oranges";
}
console.log(favoriteFoodsArray); // DONE
// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.
favoriteFoodsArray.sort();

favoriteFoodsArray.reverse();

console.log(favoriteFoodsArray); // DONE
// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.
let favoriteFoodsString = favoriteFoodsArray.join(" and ");

console.log(favoriteFoodsString); // DONE
// 4.h (STRETCH) TODO: Make a new array that combines
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']
concatenatedArray = favoriteFoodsArray.concat(animalArray);

console.log(concatenatedArray); // DONE
