const batches = (recipe, available) => {
  let minBatch = [];

  for (let ingredient in recipe) {
    if (available[ingredient] === undefined) {
      console.log(`No ${ingredient} available`);
      return 0;
    }

    if (recipe[ingredient] > available[ingredient]) {
      console.log(`Not enough ${ingredient}`);
      return 0;
    }

    // console.log(recipe[ingredient], available[ingredient]);
    minBatch.push(Math.floor(available[ingredient] / recipe[ingredient]) || 0);
  }
  return Math.min(...minBatch);
};

// Tests
// 0 batches can be made
console.log(
  batches(
    { milk: 100, butter: 50, flour: 5 },
    { milk: 132, butter: 48, flour: 51 }
  ),
  0
);

console.log(
  batches(
    { milk: 100, flour: 4, sugar: 10, butter: 5 },
    { milk: 1288, flour: 9, sugar: 95 }
  ),
  0
);

// 1 batch can be made
console.log(
  batches(
    { milk: 100, butter: 50, cheese: 10 },
    { milk: 198, butter: 52, cheese: 10 }
  ),
  1
);

// 2 batches can be made
console.log(
  batches(
    { milk: 2, sugar: 40, butter: 20 },
    { milk: 5, sugar: 120, butter: 500 }
  ),
  2
);
