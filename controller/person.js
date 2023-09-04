const personService = require("../service/person");
class PersonController {
  async createPerson(req, res) {
    try {
      const id = await personService.createPerson(req.body);
      res.status(201).json({
        message: "person created successfully",
        id,
      });
    } catch (error) {
      console.log(err);
    }
  }
}
module.exports = new PersonController();
