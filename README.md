# Typescript Complete Developers Guide 


Contents: 
- Typescript Overview
- What is a type system?
- Type annotations in action
- Annotations with Functions and Objects
- Mastering Typed Arrays 
- Tuples in Typescript 
- The All-important Interface
- Building Functionality with Classes 
- Design Patterns with Typescript 
- More on Design Patterns 
- Reusable Code 
- Advanced Generics 
- Let's build a Web Framework 
- Express + Typescript Integration
- Decorators 
- Advanced Express and TS Integration 
- React and Redux with Typescript 
- Extras 


## Typescript Overview

Typescript = Javascript + A type system 

The TS type system:
- Helps us catch errors during developent
- Uses 'type annotations' to analyze our code 
- Only active during development
- Doesn't provide any performance optimization 

Browser executes plain javascript, has no idea we wrote typescript

Run `npm install --save-dev typescript ts-node` to add typescript to your app 


#### Executing typescript 

We cannot run typescript code directly or in the browser, we have to first compile the code into Javascript. 
Can use a typescript compiler to compile it: `tsc index.ts` (where index.ts is the name of the file)
=> this creates 'index.js'. We can then run `node index.js` to execute the code.

Having to run both these commands gets old, so we installed `ts-node` earlier, which combines these two commands into one. To run this, you either have to install ts-node globally or use the command `npx ts-node index.ts` (preferred not to use global npm installs!)

#### Catching Errors with Typescript 

If you have an API call and its response.data includes an id, title and completed status, you may make a typo or spell something incorrectly. To catch the error before its compiled, we use an Interface:

````ts
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data as Todo;

  const { id, title, completed } = todo; 

  console.log(`
    The todo with ${id}.
    Has a title of ${title}. 
    Is it finished? ${completed}
  `)
})
````

## What is a type system?

- A type is an easy way to refer to the different properties and functions that a value has (i.e. the interface)

## Type Annotations in Action 

- refer to features/annotations/variables.ts 


- Type annotations: Code we add to tell typescript what type of value a variable will refer to (we tell typescript the type)
  - i.e. ``let apples: number = 5``


- Type inference: typescript tries to figure out what type of value a variable refers to (typescript guesses the type)
  - i.e. ``let apples = 5`` => TS can infer what this type is
  - if we do the declaration of the variable (const color) and the variable initialisation ( = red) on the same line, Typescript will figure out the type of 'color' for us 


#### Variables: 
- When to use annotations?
  - When we declare a variable on one line then initialize it later
  - When we want a variable to have a type that can't be inferred 
  - When a function returns the 'any' type and we need to clarify the value
    - any is a type, just like string and boolean
    - ts has no idea what it is - so it loses its usefulness 
    - avoid any at all cost 
- When to use inference?
  - Whenever we can, i.e. not one of the above 3 scenarios



#### Functions: 
- Type annotations for functions: Code we add to telp TS what type of arguments a function will receive and what type of values it will return
````ts
// this is annotation for a function (note how its all after variable has been assigned):
const add = (a: number, b: number): number => {
  return a + b;
}

// this is variable annotation: 
const logNumber: (i: number) => void = (i) => {
  console.log(i);
}
````
- Any time we write a function, we will annotate it 
  - we do not get any type inference for arguments 
  - we do get type inference for the return of ra function, but we're not going to use it. We always will add annotations for the return (it makes our code safer)
- Special note on destructuring syntax: 
````ts
// before:
const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

//after:
const logWeather2 = ({ date, weather }: {date: Date, weather: string}): void => {
  console.log(date);
  console.log(weather);
}; 
````

#### Objects: 

- pretty much the same as functions. 


===


## Mastering Typed Arrays 

- typed Arrays => where each element is some consistent type of value (i.e. an array of strings only)
  - we can use different types, but we need to be very explicit 
- check out arrays.ts for more info


===

## Tuples in Typescript 

- tuple => array-like structure where each element represents some property of a record 
  - we have a fixed order/structure 
- examples:
````ts
// inferred type below is string|bool|number[] => we can swap the order of these, but we dont want to
// because it breaks data structure, no enforcement of order
const pepsi = ['brown', true, 40] 

// using a tuple:
const pepsi2: [string, boolean, number] = ['brown', true, 40];
// a better way (type alias):
type Drink = [string, boolean, number]; // creates a new type that we can use wheenver we would need a type.
// i.e.: 
const pepsi3: Drink = ['brown', true, 40];
````
- when would we use a tuple? 
  - not that often. 

===


## The All-Important Interface 

- interfaces + classes = how we get really strong code reuse in TS 
- interfaces => creates a new type, describing the property names and value types of an object
````ts
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

// you must provide a Vehicle, which meets the specifications of the vehicle interface
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`
  Name: ${vehicle.name}, 
  Year: ${vehicle.year}, 
  Broken? ${vehicle.broken}
  `);
};
````
- Great to reuse interfaces if possible, and make them generic
- general plan with interfaces:
  - create functions that accept arguments that are typed with interfaces
  - objects/classes can decide to 'implement' a given interface to work with a function


  ===


  ## Building Functionality with Classes