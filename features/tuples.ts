const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

const pepsi = ['brown', true, 40] 
// string|bool|number[] => we can swap the order of these, but we dont want to 
pepsi[0] = 40;
pepsi[2] = 'brown'; // data model breaks down when swapped. 

// tuple annotation which preseves order:
const pepsi2: [string, boolean, number] = ['brown', true, 40];

// a better way (type Alias)
type Drink = [string, boolean, number]; // creates a new type that we can use wheenver we would need a type.
// i.e.: 
const pepsi3: Drink = ['brown', true, 40];
const tea: Drink = ['brown', false, 0];
const fanta: Drink = ['orange', true, 35];


const carSpecs: [number, number] = [400, 3354]; // we dont know the purpose of these numbers. 
const carStats = {
  horsepower: 400,
  weight: 3354
}; // better to represent it as an object! 

