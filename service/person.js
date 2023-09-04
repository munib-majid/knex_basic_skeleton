const personDao = require("../dao/person");
class PersonService {
  createPerson(personDto) {
    const { first_name, last_name, email } = personDto;
    return personDao.createPerson(first_name, last_name, email);
  }
}
module.exports = new PersonService();
