const db = require("../db/db");

class PersonDao {
  async createPerson(first_name, last_name, email) {
    const [id] = await db("person")
      .insert({
        email,
        first_name,
        last_name,
      })
      .returning("id"); // returns pk for the person
    return id;
  }
}

module.exports = new PersonDao();
