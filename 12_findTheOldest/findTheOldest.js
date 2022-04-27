const findTheOldest = function(people) {
    return people
                .map(
                    person => {
                        let currentYear;
                        if (!person.hasOwnProperty('yearOfDeath')){
                            currentYear = new Date().getFullYear();
                            person.age = currentYear - person.yearOfBirth;
                        }
                        else{
                            person.age = person.yearOfDeath - person.yearOfBirth;
                        }
                        return person;
                    }
                )
                .sort((a,b) => a.age > b.age ? -1 : 1)[0];
};

/*
const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
      return oldestAge < currentAge ? currentPerson : oldest;
    })
  };
  
  const getAge = function(birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };
*/

// Do not edit below this line
module.exports = findTheOldest;