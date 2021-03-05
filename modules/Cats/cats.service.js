const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const cats = new Queue();

store.cats.forEach((cat) => cats.enqueue(cat));

// --------------------

const catsService = {
  getAllCats() {
    // Return all cats
    return cats.all();
  },

  getCat() {
    // Return the pets next in line to be adopted.
    return cats.show();
  },

  dequeueCat() {
    // Remove a pet from the queue.
    const adoptedCat = cats.dequeue();
    return cats.all(); // return list of cats
  },
};

module.exports = catsService;
