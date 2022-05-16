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

- Type annotations: Code we add to tell typescript what type of value a variable will refer to (we tell typescript the type)
- Type inference: typescript tries to figure out what type of value a variable refers to (typescript guesses the type)