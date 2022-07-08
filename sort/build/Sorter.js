"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export class Sorter {
//   collection: Sortable; // collection needs a length, a way to compare, a way to swap. you just need these 3 thngs 
//   constructor(collection: Sortable) {
//     this.collection = collection;
//   }
//   sort(): void {
//     for (let i = 0; i < this.collection.length; i++) {
//       for (let j = 0; j < this.collection.length -i - 1; j++) {
//         if (this.collection.compare(j, j+1)) {
//           this.collection.swap(j, j+1)
//         }
//       }
//     }
//   }
// }
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        for (var i = 0; i < this.length; i++) {
            for (var j = 0; j < this.length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
