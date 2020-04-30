const { v4: uuidv4 } = require('uuid');

// A service that performs create/read/update/delete functions on data.
module.exports = class DataService {
  // Data that is being saved inside the instance of this class.
  // TODO: Instead of saving this data in JavaScript, we should instead move it to Mongo.
  data = {
    [uuidv4()]: {
      title: "Sample title",
      body: "This is the body of the current snippet of code."
    }
  };

  // Gets a list of all the objects
  all() {
    return Promise.resolve(Object.values(this.data));
  }

  // Creates an object, then returns the newly created object.
  create({ title, description }) {
    const id = uuidv4();

    const object = {
      id,
      title,
      description
    };
    
    this.data[id] = (object);
    return Promise.resolve(object);
  }

  // // TODO: Uncomment the below as you start using them.

  // // Finds an object by ID.
  // read(id) {
  //   return Promise.resolve(this.data[id] || null);
  // }

  // // Updates an object by ID
  // update(id, data) {
  //   this.data[id] = { id, ...data };

  //   return Promise.resolve(data[id]);
  // }

  // // Deletes an object by ID.
  // delete(id) {
  //   delete this.data[id];

  //   return Promise.resolve(null);
  // }
}
