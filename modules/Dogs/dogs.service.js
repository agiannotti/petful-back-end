const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const dogs = new Queue();

store.dogs.forEach((dog) => dogs.enqueue(dog));

// --------------------

const dogsService = {
  getAllDogs() {
    // Return all dogs
    return dogs.all();
  },

  getDog() {
    // Return the pets next in line to be adopted.
    return dogs.show();
  },

  dequeueDog() {
    // Remove a pet from the queue.
    const adoptedDog = dogs.dequeue();
    return dogs.all(); // return list of dogs
  },
};

module.exports = dogsService;
