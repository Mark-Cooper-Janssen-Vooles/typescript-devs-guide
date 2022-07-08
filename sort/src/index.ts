import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// const numbrsCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numbrsCollection);
// sorter.sort();
// console.log(numbrsCollection.data);


// const charactersCollection = new CharactersCollection("byaaX");
// const sorter2 = new Sorter(charactersCollection);

// sorter.sort();
// console.log(charactersCollection.data);

// const linkedList = new LinkedList();
// linkedList.add(500);
// linkedList.add(-10);
// linkedList.add(-3);

// const sorter = new Sorter(linkedList);
// sorter.sort();
// linkedList.print();

const numbersCollection = new NumbersCollection([1, 4, 2, 3])
numbersCollection.sort();

console.log(numbersCollection.data)