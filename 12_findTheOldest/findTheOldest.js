// const findTheOldest = function(people) {
//     let currentYear = (new Date()).getFullYear();
//     people.map(e => {
//       if (e.yearOfDeath === undefined) {
//         e.years = currentYear - e.yearOfBirth;
//       } else {
//         e.years = e.yearOfDeath - e.yearOfBirth;
//       }
//     })
//     people.sort((a, b) => a.years < b.years ? 1 : -1); 
//     return people[0];
//   };
const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
      const oldestP = age(oldest.yearOfBirth, oldest.yearOfDeath)
      const currentP = age(current.yearOfBirth, current.yearOfDeath)
      return oldestP > currentP ? oldest : current;
    })
};
  
function age(birth, death) {
    if(!death) { 
        death = new Date().getFullYear();
    }
        return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
