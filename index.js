const personOne = {
  name: {
    first: 'Timmy',
     last: 'Timtim'
  },
  age: 30,
  location: {
    city: 'New York',
    state: 'New York',
    zip: 10001
  }
}

const personTwo = {
  name: {
    first: 'Julie',
    last: 'July'
  },
  age: 28,
  location: {
    city: 'Albany',
    state: 'New York',
    zip: 12201
  }
}

// Task

//1. People move location frequently. Create a new funcion `moveLocation()` 
//      * `moveLocation()` should take one of our person objects as its first parameter adn a location object as    //the second parameter 
// The `location` object will have the properties  `city` `state` and `zip`

/*
const moveLocation = (person, location) => {
  person.location.city = location.city
  person.location.state = location.state
  person.location.zip = location.zip

}

const nLoc = {
  city: 'Rochester',
  state: 'New York',
  zip: 14604
}
moveLocation(personOne, nLoc)

nLoc.city = 'Buffalo';
nLoc.zip = 14201;

console.log(personOne.location.city)

*/
//-------------------------------------------**------------------------------------------------------------
//2. Julie and Timmy have gotten married! Since they'll be living together, we should give them the same `location`. However, since they'll be living together forever, let's save ourselves the hassle of updating both of their locations every time they move.


const moveLocation = (person, location) => {
  person.location.city = location.city
  person.location.state = location.state
  person.location.zip = location.zip

}

personTwo.location = personOne.location;

const nLoc = {
  city: 'Mountain View',
  state: 'California',
  zip: 94035
}
moveLocation(personOne, nLoc)

nLoc.city = 'Buffalo';
nLoc.zip = 14201;

console.log('Timmy - ', personOne.location.city, 'Julie - ', personTwo.location.city)

//-------------------------------------------**------------------------------------------------------------

// 3. The happy couple are having a baby! Create a new object personThree.

const personThree = {
name:{
  first: 'Jack',
  last: `${personOne.name.last} - ${personTwo.name.last}`,
},
age: 0,
location : {
  city: personOne.location.city,
  state: personOne.location.state,
  zip:personOne.location.zip
}

}