"use strict";
// //Exercise 1:
// //For each of these values, what type will the TypeScript compiler infer? 
// let a = 100;          //number
// let b = 'Coffee';     //string
// let c = [true, false, false];    //boolean array
// let d = {age:20};     //object
// let e = [3];          //number array
// let f;                 //any
// let g = [];           //any array
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
}
let store1 = new Store();
store1.add({ name: 'something', price: 1 });
class CompressibleStore extends Store {
    compress() { }
}
// let store = new CompressibleStore<Product>();
// store.compress()
//restrict the generic type parameter
class SearchableStore extends Store {
    find(name) {
        return this._objects.find(obj => obj.name === name);
    }
}
let sstore = new SearchableStore();
sstore.find('something');
//# sourceMappingURL=index.js.map