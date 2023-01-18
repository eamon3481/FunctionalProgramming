const getAnimalEmoji = animal => {
  if (animal === 'dog') {
    return '🐶';
  }
  if (animal === 'cat') {
    return '🐱';
  }
  if (animal === 'frog') {
    return '🐸';
  }
  if (animal === 'panda') {
    return '🐼';
  }
  if (animal === 'giraffe') {
    return '🦒';
  }
  if (animal === 'monkey') {
    return '🐵';
  }
  if (animal === 'unicorn') {
    return '🦄';
  }
  if (animal === 'dragon') {
    return '🐲';
  }

  return 'unknown';
};
console.log(getAnimalEmoji('dragon'));

const printMyAnimal = animal => {
  if (animal !== 'dog' || animal !== 'cat') {
    return;
  }
  console.log(`I have a ${animal}`);
};
console.log(printMyAnimal('dog'));

const getAnimalDetails = animal => {
  let result;

  if (animal) {
    if (animal.type) {
      if (animal.name) {
        if (animal.gender) {
          result = `${animal.name} is a ${animal.gender} ${animal.type}`;
        } else {
          result = 'No animal gender';
        }
      } else {
        result = 'No animal name';
      }
    } else {
      result = 'No animal type';
    }
  } else {
    result = 'No animal';
  }

  return result;
};
console.log(getAnimalDetails());
console.log(getAnimalDetails({ type: 'dog', gender: 'female' }));
console.log(getAnimalDetails({ type: 'dog', name: 'Lucy' }));
console.log(getAnimalDetails({ type: 'dog', name: 'Lucy', gender: 'female' }));

const printFruits = color => {
  switch (color) {
    case 'red':
      return ['apple', 'strawberry'];
    case 'yellow':
      return ['banana', 'pineapple'];
    case 'purple':
      return ['grape', 'plum'];
    default:
      return [];
  }
};
console.log(printFruits(null));
console.log(printFruits('yellow'));

const printVegetableName = vegetable => {
  if (vegetable && vegetable.name) {
    console.log(vegetable.name);
  } else {
    console.log('unknown');
  }
};
printVegetableName(undefined);
printVegetableName({});
printVegetableName({ name: 'cabbage', quantity: 2 });

const car = {
  model: 'Fiesta',
  manufacturer: {
    name: 'Ford',
    address: {
      street: 'Some Street Name',
      number: '5555',
      state: 'USA',
    },
  },
};

const model = (car && car.model) || 'default model';

const street =
  (car && car.manufacturer && car.manufacturer.address && car.manufacturer.address.street) || 'default street';

const phoneNumber = car && car.manufacturer && car.manufacturer.address && car.manufacturer.phoneNumber;
console.log(model);
console.log(street);
console.log(phoneNumber);

const isManufacturerFromUSA = () => {
  if (car && car.manufacturer && car.manufacturer.address && car.manufacturer.address.state === 'USA') {
    console.log('true');
  }
};
console.log(isManufacturerFromUSA());
