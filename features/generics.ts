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

new ArrayOfAnything<string>(['a', 'b', 'c']);


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
printAnything([1, 2]) // here it infers its a number



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