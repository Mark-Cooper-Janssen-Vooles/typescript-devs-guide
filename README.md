# Typescript Complete Developers Guide 


Contents: 
- [Typescript Overview](#typescript-overview)
- [What is a type system?](#what-is-a-type-system)
- [Type annotations in action](#type-annotations-in-action)
- [Mastering Typed Arrays](#mastering-typed-arrays)
- [Tuples in Typescript](#tuples-in-typescript)
- [The All-important Interface](#the-all-important-interface)
- [Building Functionality with Classes](#building-functionality-with-classes)
- [Design Patterns with Typescript](#design-patterns-with-typescript)
- [More on Design Patterns](#more-on-design-patterns) 
- [Reusable Code](#reusable-code)
  - enums
- [Advanced Generics](#advanced-generics)
- ~~Let's build a Web Framework~~ 
- ~~Express + Typescript Integration~~
- ~~Decorators~~ 
- ~~Advanced Express and TS Integration~~ 
- [React and Redux with Typescript](#reactredux--typescript)


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

- classes => blueprint to create an object with some fields (values) and methods (functions) to represent a 'thing'
- we have access to inherit from classes and override the parents functions 
- we have access to public / private / protected modifiers 
  - public => this method can be called anywhere, anytime (by default they are public)
  - private => this method can only be called by other methods in this class
  - protected => this method can be called by other methods in this class, or by other methods in child classes


Interfaces + Classes = How we get really strong code reuse in TS 


===


## Design Patterns with Typescript 


Building an App with typescript design patterns 
`npm install -g parcel-bundler` => used to help run typescript in the browser 
we'll have an index.html file, with a script of 'index.ts' => we can't have .ts files run in the browser, so parcel bundler sees this and compiles it to JS and replaces the tag.

`npm install faker@5.5.3 @types/faker@5.5.9`
The @types/faker is a 'type definition file' - a kind of adapater between the JS library and our use of typescript. 
Sometimes they are installed automatically when you install a JS library - but faker does not. 
Type definition files are publicly available - something like @types/{library name}

We'll create a 'CustomMap' class to limit our interactions with google map, so it can't be broken elsewhere in the application.
In index.ts file, we only want to be able to:
- Create a company, referance name / slogan / lat / lng
- Create a user, reference name / age / lat / lng
- Create a map, addMarker

The outcome of the "design pattern" in this project was to use an interface, ``mappable`` which was shared by multiple classes. Also adding ``class User implements Mappable`` to the classes adds value to typescript of where the error originates, however it is not essential. 

===

### More on design patterns 


#### Concurrent compliation and Execution 

- if we run `tsc index.ts` in the terminal, typescript compiles our index.ts file into an index.js file 
- if we run `tsc --init` typescript generates a tsconfig.json file, and we can change the outDir and rootDir to whatever we want, lets say ./build and ./src 
- we can then run `tsc -w` from the root, and it auto-compiles
- we can then run, in a new terminal, `node ./build/index.js` and it runs the js file
- we can automate this with some libraries, `npm install nodemon concurrently` (nodemon executes our code once it has been compiled), concurrently lets us run multiple scripts at the same time (the compiler tsc -w and nodemon itself)
- we can write our scripts like so:
````ts
  "scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  },
````


#### Type Guards

A check on the type - it clarifies the type of value we are working with. 
``if (this.collection instanceof Array) {`` if we wrap our code in this, typescript knows that we'll have an array inside this if - and it will give us access to all the array methods.

````ts
if (typeof this.collection === 'string') {
  this.collection. //you now get properties assoiated with a string
}
````

two typeguards
- typeof => narrow type of a value for a primitive value: number | string | boolean | symbol
- instanceof => narrow down every other type of value: object | array | anything else


#### Design Patterns #2

If you can abstract an interface which two classes can implement, you should. This is better than using typeguards

````ts

// BAD Way:
export class Sorter {
  collection: string | []; // or something else, could be endless

  constructor(collection: string | []) {
    this.collection = collection;
  }

  sort(): void {
    for (let i = 0; i < this.collection.length; i++) {
      for (let j = 0; j < this.collection.length -i - 1; j++) {

        // if number array
        if (this.collection instanceof Array) {
          if (/* if number on right greater than left array logic*/) {
            // logic for swapping numbers 
          }
        }

        // if string
        if (typeof this.collection === 'string') {
          // string swapping logic
        }
      }
    }
  }
}

// GOOD way: make another class called "NumbersCollection" or "CharactersCollection" or whatever, which satisfies having a length, compare and swap methods.
export interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  collection: Sortable; // collection needs a length, a way to compare, a way to swap. you just need these 3 thngs. 

  constructor(collection: Sortable) {
    this.collection = collection;
  }

  sort(): void {
    for (let i = 0; i < this.collection.length; i++) {
      for (let j = 0; j < this.collection.length -i - 1; j++) {
        if (this.collection.compare(j, j+1)) {
          this.collection.swap(j, j+1)
        }

      }
    }
  }
}

// NumbersCollection.ts could have something like: 
import { Sortable } from "./Sorter";

export class NumbersCollection implements Sortable { // forces it to have length, compare, swap, and complain locally if it doesn't.
}
````

Interfaces are useful because we can set up a contract between one class and another class.


#### Abstract Classes 

- Can't be used to create an object directly
- Only used as a parent class
- Can contain real implementation for some methods
- The implemented methods can refer to other methods that don't actually exist yet 
- Can make child classes promise to implement some other method 

````ts
export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    for (let i = 0; i < this.collection.length; i++) {
      for (let j = 0; j < this.collection.length -i - 1; j++) {
        if (this.collection.compare(j, j+1)) {
          this.collection.swap(j, j+1)
        }
      }
    }
  }
}
````

#### Design Patterns #3

Interfaces:
- sets up a contract between different classes 
- Use when we have very different objects that we want to work together
- Promotes loose coupling

Inheritance / Abstract classes:
- Sets up a contract between different classes
- Use when we are trying to build up a definition of an object
- Strongly couples classes together 


===

## Reusable Code

#### Enums 

- follow near-identical syntax rules as normal objects
- creates an object with the same keys and values when converted from TS to JS
- primary goal is to signal to other engineers that these are all closely related values
- use whenever we have a small fixed set of values that are all closely related and known at compile time

````ts
// object way
const MatchResult = {
  HomeWin: 'H',
  AwayWin: 'A',
  Draw: 'D'
};
// enum way, does the same thing but its better communicates what it is:
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
};
````


when an enum goes into the compiler and goes from ts to js, it actually becomes an object. 


===


## Advanced Generics 

(in features / generics.ts)


````ts
class ArrayOfNumbers {
    constructor(public collection: number[]) {}

    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {}

    get(index: number): string {
        return this.collection[index];
    }
}

// think of T as "just like an argument"
class ArrayOfAnything<T> {
    constructor(public collection: T[]) {}

    get(index: number): T {
        return this.collection[index];
    }
}

// see the usage here, works the same as 'ArrayOfStrings': 
new ArrayOfAnything<string>(['a', 'b', 'c']);
````


if you delete the generic `<string>` in the above, it works out fine - TS infers the value 

you can use generics with functions too. 

````ts
// example of generics with functions 

function printStrings(arr: string[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printNumbers(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// 100% code duplication between the above two functions, so can use a generic 
function printAnything<T>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printAnything<string>(['a', 'b']) // we can put it in 
printAnything([1, 2]) // here it infers its a number. he recommends we add the type in though, it will help catch errors.
````

Generic Constraints: 

````ts

// generic constraints 

class Car {
    print() {
        console.log('i am a car')
    }
}

class House {
    print() {
        console.log('i am a house')
    }
}

// function printHousesOrCars<T>(arr: T[]): void {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i].print(); // this errors because not everything thats an array has a .print method 
//     }
// }

interface Printable {
    print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print(); 
    }
}

// printHousesOrCars([1,2,3]); // now this errors, ts tells us it doesn't satisfy extending printable. 

printHousesOrCars<House>([new House(), new House()]);
````

===

## React/Redux + Typescript

Pros:
- Far, far easier to avoid extremely common typos, like incorrect action types 
- Gives dev's a far better understanding of the type of data flowing around 
- Much easier to refactor just about anything 

Cons:
- Not the best type definition files (especially around redux)
- Tons of generics flying around (more in redux than react)
- Tons of imports, as just about everything (action creator, action, reducer, store, component) need to be aware of different types 
- Redux inherently functional in nature, tough integration with TS classes

redux.js.org/recipes/usage-with-typescript 
=> he doesn't love some recommendations 

#### Generating the App

=> `npx create-react-app rrts --template typescript`

#### Simple components 

a .tsx file is a typescript file that also contains a react element (normally jsx). 

#### Interfaces With Props 

You'll need to define the component, an interface right above it, and pass the props down to the component. 

````tsx
interface AppProps {
    color: string;
}

class App extends React.Component<AppProps> {
    render() {
        return <div>{this.props.color}</div>
    }
}

ReactDOM.render(<App color="red" />, document.querySelector('#root'));
````

#### Component State in a class Component 

````tsx
interface AppProps {
    color?: string;
}

interface AppState {
  counter: number;
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = { counter: 0 }
    }

    state = { counter: 0 }

    onIncrement = (): void => {
        this.setState({ counter: this.state.counter + 1 })
    }

    onDecrement = (): void => {
        this.setState({ counter: this.state.counter - 1 })
    }


    render() {
        return (
            <div>
                <button onClick={this.onIncrement}>Increment</button>
                <button onClick={this.onDecrement}>Decremenet</button>
                {this.state.counter}
            </div>
        )
    }
}
````

#### Functional Components

basic example:
````tsx
interface AppProps {
    color?: string;
}

const App = (props: AppProps): JSX.Element => {
  return <div>{props.color}</div>
}
````


#### Redux Setup

need redux, react-redux, axios
`npm install redux react-redux axios redux-thunk`

One of the hardest things about getting react, redux and typescript to play nicely together is imports of types. 

````ts
import { Dispatch } from 'redux'; // this is the type for dispatch

export const fetchTodos = () => {
    return (dispatch: Dispatch) => {

    }
}
````

#### Action Creators with Typescript 

The below is a perfectly fine ts file, but we don't have much type safety. there are lots of "any" (i.e. the response type)
````ts
import axios from 'axios';
import { Dispatch } from 'redux';

const url = 'https://jsonplaceholder.typicode.com/todos'

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get(url);

        dispatch({
            type: 'FETCH_TODOS',
            payload: response.data
        })
    }
}
````

#### Response Type and Action Types Enum

````ts
import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types'

// we have the response type here
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos'

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Todo[]>(url); // we pass that into the generic here

        dispatch({
            type: ActionTypes.fetchTodos, // this comes from types below
            payload: response.data
        })
    }
}

// types file looks like this:
export enum ActionTypes {
    fetchTodos = 'FETCH_TODOS'
}
````

``

#### The Generic Dispatch Function 

The below code passes in the non-generic type expected to be receieved by dispatch.

Why? sometimes when we work on an action creator, we can have lots of code. It can be confusing to know what we're doing. 

This generic type makes sure we're always passing in the object with the correct types and properties. 

````ts
interface FetchTodosAction {
    type: ActionTypes.fetchTodos;
    payload: Todo[];
}

const url = 'https://jsonplaceholder.typicode.com/todos'

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Todo[]>(url);

        dispatch<FetchTodosAction>({
            type: ActionTypes.fetchTodos,
            payload: response.data
        })
    }
}
````

#### A reducer with Enums 

````ts
import { FetchTodosAction, Todo } from '../actions/actions';
import { ActionTypes } from '../actions/types';

export const todosReducer = (
	state: Todo[] = [],  // default state is an empty array
	action: FetchTodosAction
) => {
	switch (action.type) {
		case ActionTypes.fetchTodos:
			return action.payload;
		default:
			return state;
	}
}
````


===


#### Validating store structure 

In the below example, typescript is making sure the combineReducers function is returning something with the same structure as StoreState. We need to add this manually to be able to catch this error! 

````ts
export interface StoreState {
    todos: Todo[]
}

export const reducers = combineReducers<StoreState>({
    todos: todosReducer
})
````

StoreState now becomes a living document - we can see this interface and immediately understand all the data that exists in our redux store. 


===


### Connecting a Component to Redux

````tsx
interface AppProps {
    todos: Todo[];
    fetchTodos(): any;
}

// called this _App so connected component below didnt need to be default 
// said "we dont use default exports in typescript" hmm
class _App extends React.Component<AppProps> {
    render() {
        return <div>hi there!</div>
    }
}

const mapStateToProps = (state: StoreState): { todos: Todo[]} => {
    return { todos: state.todos };
}

export const App = connect(
    mapStateToProps,
    { fetchTodos }
)(_App);
````

===


#### Imports

He uses an index.ts file in the "actions" folder, and ``export * from './x';`` so that other files just have one source of import, which tidys things up. 





===

upto 273 (do all of this section)