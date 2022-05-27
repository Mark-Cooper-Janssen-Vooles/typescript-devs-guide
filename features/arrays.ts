const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camaro']
]

// help with inference when extracting values 
const brand = carMakers[1]; // ts knows this is a string

// prevent incompatible values
carMakers.push(100);

//we can get help with 'map', 'reduce', 'foreach' etc 
carMakers.map((car: string): string => {
  return car.toUpperCase(); // we can access all string methods auto-complete, because TS has inferred the type of car as string
});

// flexible types 
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-11')
importantDates.push(100);