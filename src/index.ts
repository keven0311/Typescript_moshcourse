// // //Exercise 1:
// // //For each of these values, what type will the TypeScript compiler infer? 
// // let a = 100;          //number
// // let b = 'Coffee';     //string
// // let c = [true, false, false];    //boolean array
// // let d = {age:20};     //object
// // let e = [3];          //number array
// // let f;                 //any
// // let g = [];           //any array

// // //What are the compilation errors in each of the following code snippets?
// // // let song:{
// // //     title:string,
// // //     releaseYear: number
// // // } = { title: 'My song' }  //, releaseYear:2023
// // //missing "releaseYear" value
// // //property releaseYear is not givien when initializing the object

// // // let prices = [100,200,300]
// // // prices[0] = '$100'
// // // for number array, it can only be numbers
// // //we`ve declared a number[] but we are trying to store a string in this array.

// // // function myFunc(a:number, b:number):number{
    
// // // }
// // //this function set to return a number, but it is not returning anything.
// // //myFunc is expected to return a number but nothing is returned.

// // // function render(document:unknown){
// // //     //narrowing
// // //     if(typeof document instanceof WordDocument){        //"WordDocument"  is a customized type.
// // //         document.toUpperCase()
// // //     }
// // //     document.move()
// // //     document.fly()
// // // }

// // //never type:

// // // function reject(message:string):never{
// // //     throw new Error(message)
// // // }

// // // function processEvents() : never {        // this never tells TS this function never return 
// // //     while(true){

// // //     }
// // // }

// // // processEvents()
// // // console.log('Hello World')      //since the "processEvents" function never return, so this line of code will not run forever

// // //Exercises 2:

// // //Given the data below, define a type alias for representing users.

// // let users = [
// //     {
// //         name:'John Smith',
// //         age:30,
// //         occupation:'Software engineer'
// //     },
// //     {
// //         name: 'Kate Muller',
// //         age:28
// //     }
// // ]

// // type Users = {
// //     name:string,
// //     age: number,
// //     occupation?: string
// // }

// // //Birds fly. Fish swim. A Pet can be a Bird or Fish. Use type aliases to represent these

// // type Bird = {
// //     fly: () => void
// // }

// // type Fish = {
// //     swim: () => void
// // }

// // type Pet = Bird | Fish

// // //Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.

// // type Weekdays = {
// //     Monday: 'Monday',
// //     Tuesday: "Tuesday",
// //     Wednesday:"Wednesday",
// //     Thursday: "Thursday",
// //     Friday: "Friday",
// // }
// // //solution:
// // type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'


// // //Simplify the following code snippets:
// // // let user = getUser()
// // // console.log(user && user.address ? user.address.street : undefined)

// // // console.log(user?.address?.street)


// // // let x = foo !== null && foo !== undefined ? foo : bar();
// // // let x = foo ?? bar()


// // //What is the problem in this piece of code?

// // // let value: unknow = 'a'
// // // console.log(value.toUpperCase())

// // //the value type is unknow, should set it to string:
// // // let value: string = 'a'
// // // console.log(value.toUpperCase())

// // //or

// // //let value:unknow = 'a'
// // //if (typeof value === 'string')
// //     //console.log(value.toUpperCase())

// // //-----------------------------------------------------------------

// // //classes, interfaces and object-oriented programming

// // // class Account {
// // //     // readonly id:number;
// // //     // owner:string;
// // //     // private balance:number;     // private this property will make only accessable within the class, means outside of this class, you will not able to change it
// // //     nickname?:string;           //optional property go with a "?"

// // //     // constructor(id:number, owner:string , balance:number){
// // //     //     this.id = id
// // //     //     this.owner = owner;
// // //     //     this.balance = balance
// // //     // }

// // //     //constructor also can write in this way:
// // //     constructor(
// // //         public readonly id: number,
// // //         public owner:string,
// // //         private _balance: number,
// // //     ){}



// // //     // class method
// // //     deposit(amount:number): void {
// // //         if(amount <= 0 )
// // //             throw new Error('Invalid amount')
// // //         //record a transaction
// // //         this._balance += amount
// // //     }

// // //     private calculateTax():number{             //with 'private' method here, this method now only can be use with in this class
// // //         return this._balance * 0.4              //such as call this method in other class method.
// // //     }


// // //     getBalance():number{
// // //         return this._balance
// // //     }
// // //     //getter:
// // //     get balance():number {
// // //         return this._balance
// // //     }

// // //     //setter
// // //     set balance(value:number) {
// // //         if(value < 0 )
// // //             throw new Error('Invalid value')
// // //         this._balance = value
// // //     }
// // // }

// // // let account = new Account(1, 'Kev', 0)
// // // account.deposit(100)
// // // // console.log(account.balance)  // this will show account`s balance in console which will be 100.  
// // // // account.balance = -1 //now this is not accessable outside of class, because "balance" property is private now.



// // //index signatures:
// //         //to add property dynamiclly
// // // let obj = {}
// // // obj.name = 'a'
// //     //this way to add property in TS is not allowed, thats why we need index signatures.
// // //create property dynamiclly:
// // // class SeatAssignment {
// // //     //Index signature property:
// // //     [seatNumber:string] : string
// // // }

// // // let seats = new SeatAssignment()
// // // seats.A1 = 'Kev';
// // // seats["A1"] = 'Kev';   //this way also works
// // // seats.A2 = 'Mosh';



// // //static members:
// // // class Ride {
// // //     //passenger
// // //     //pickupLocation
// // //     //dropoffLocation
// // //    private static _activeRides:number = 0    //if you add this property to static, now all instance will change this property everytime they called class method to change this property
// // //     start(){
// // //         // this.activeRides++
// // //         Ride._activeRides++
// // //     }
// // //     stop(){
// // //         // this.activeRides--
// // //         Ride._activeRides--
// // //     }

// // //     static get activeRides(){               
// // //         return Ride._activeRides
// // //     }
// // // }

// // // let ride1 = new Ride()
// // // ride1.start()

// // // let ride2 = new Ride()
// // // ride2.start()

// // // console.log(ride1._activeRides)
// // // console.log(ride2._activeRides)
// // //before add 'static' to 'activeRides' property, both console.log will show "1", becuase they are two seperated instance of class Ride.

// // // console.log(Ride._activeRides)
// // //after add 'static', this will show '2'.


// // // //inheritance:
// // // class Person {
// // //     constructor(public firstname:string, public lasname:string) {
        
// // //     }

// // //     get fullname() {
// // //         return this.firstname + " " + this.lasname
// // //     }

// // //     walk(){
// // //         console.log("walking")
// // //     }
// // // }

// // // class Student extends Person {
// // //     constructor(public studentId:number, firstname:string, lastname:string) {
// // //         super(firstname,lastname)
// // //     }

// // //     takeTest() {
// // //         console.log("taking a test")
// // //     }
// // // }

// // // let student = new Student(1, 'John', 'john@gmail.com')

// // // //method overriding:
// // // class Teacher extends Person {
// // //     override get fullname() {
// // //         return 'Professor' + super.fullname
// // //     }
// // // } 

// // // class Principal extends Person {
// // //     override get fullname(){
// // //         return 'Principal' + super.fullname
// // //     }
// // // }

// // // let teacher = new Teacher('John','Smith')
// // // console.log(teacher)  //this will show "Professor John Smith" in console.


// // // //polymorphism:
// // // printNames([
// // //     new Student(1, 'John', 'Smith'),
// // //     new Teacher('Mosh', 'Hamedani'),
// // //     new Principal('Mary', 'Smith')
// // // ])

// // // function printNames(people:Person[]) {
// // //     for(let person of people) 
// // //         console.log(person.fullname)
// // // }
// // //     //in this way, each 'person' will call different 'fullname' method from their each own class. very powerful!



// // //abstract classes and methods:

// // // abstract class Shape {                                  //abstract make the class not ready to use, it has to be extend before use.
// // //     constructor(public color:string){

// // //     }

// // //    abstract render():void 
// // // }

// // // class Circle extends Shape {
// // //     constructor(public radius:number, color:string){
// // //         super(color)
// // //     }

// // //     override render(): void {
// // //         console.log('rendering a circle')
// // //     }
// // // }

// // // let shape = new Circle(50,'red')       // cant go with new Shape, because shape is a abstract class which means it is not ready to use, you have to use extended class such as Circle class.
// // // shape.render()

// // // interface:
// // // abstract class Calendar {
// // //     constructor(public name: string ){

// // //     }
// // //     abstract addEvent():void
// // //     abstract removeEvent():void
// // // }

// // // interface Calendar {
// // //     name:string;
// // //     addEvent():void            //when use interface, you can declear your method, it only delare signatures.
// // //     removeEvent():void    
// // // }

// // // interface CouldCalendar extends Calendar {
// // //     sync():void
// // // }

// // // class GoogleCalendara implements Calendar {
// // //     constructor(public name: string){}

// // //     addEvent(): void {
// // //         throw new Error("Method not implemented.");
// // //     }
// // //     removeEvent(): void {
// // //         throw new Error("Method not implemented.");
// // //     }

// // // }


// // //Exercises 3:
// // //Define a class called Logger that takes the name of
// // // a file in its constructor and provides a method for 
// // //writing messages to that file. Don’t worry about the 
// // //actual file I/O operations. Just define the class with the right members.

// // class Logger {
// //     constructor(public name:string ){}

// //     message(){
// //         console.log(`Hello ${this.name}!`)
// //     }
// // }

// // //Given the Person class below, create a getter for getting
// // // the full name of a person.

// // class Person {
// //     constructor( public firstName:string, public lastName:string){}

// //     get fullName():string{
// //         return this.firstName + " " + this.lastName
// //     }
// // }

// // //Create a new class called Employee that extends Person 
// // //and adds a new property called salary.

// // class Employee extends Person {
// //     constructor(public salary:number, firstName:string, lastName:string){
// //         super(firstName,lastName)
// //     }
// // }

// // //What is the difference between private and protected members?
// //     //private member only accessale within the class, and protected member are accessabel to its child classes.
// //         //solution answer: Privatemembers are not inherited by child classes. 


// // //Given the data below, define an interface for representing employees: 
// // let employee = {
// //     name: 'John Smith',
// //     salary: 50_000,
// //     address:{
// //         street: 'Flinders st',
// //         city: 'Melbourne',
// //         zipcode:'3144'
// //     }
// // }

// // interface Address {
// //     street:string,
// //     city:string,
// //     zipcode:number
// // }

// // interface Employee {
// //     name:string,
// //     salary:number,
// //     address:Address
// // }


// // //generics classes:

// // class KeyValuePair<K,V> {
// //     constructor(public key:K, public value:V){}
// // }

// // let pair = new KeyValuePair<string, string>('1', 'apple')

// // //generic Functions:
// // class ArrayUtils {

// //     static wrapInArray<T>(value:T){
// //        return [value]
// //    }
// // }
// // let numbers = ArrayUtils.wrapInArray(1)

// // //generic interfaces:

// // interface Result<T>{
// //     data: T | null
// //     error: string | null
// // }

// // function fetch<T>(url:string ):Result<T>{
// //     return {data:null, error:null}
// // }

// // interface User {
// //     username:string
// // }

// // interface Product {
// //     title: string
// // }

// // let result = fetch<User>('url')
// // result.data?.username

// // let result2 = fetch<Product>('url')
// // result2.data?.title

// //generic constraints
// // class Person {
// //     constructor(public name: string){}
// // }

// // class Customer extends Person {

// // }

// // function echo<T extends Person>(value:T):T {
// //     return value
// // } 

// // echo( new Customer('a'))

// //extending generic classes:

// // interface Product {
// //     name: string
// //     price: number
// // }

// // class Store<T> {
// //     protected _objects: T[] = [];

// //     add(obj: T):void {
// //         this._objects.push(obj)
// //     }
// // }

// // let store1 = new Store<Product>()
// // store1.add({name:'something', price:1})

// // class CompressibleStore<T> extends Store<T> {
// //     compress(){}
// // }

// // // let store = new CompressibleStore<Product>();
// // // store.compress()

// // //restrict the generic type parameter
// // class SearchableStore<T extends {name:string}> extends Store<T> {
// //     find(name:string): T | undefined {
// //         return this._objects.find(obj => obj.name === name)
// //     }
// // }


// // class ProductStore extends Store<Product> {
// //     filterByCategory(category:string):Product[]{
// //         return []
// //     }
// // }



// //the keyof operator:

// // interface Product {
// //     name: string
// //     price: number
// // }

// // class Store<T> {
// //     protected _objects: T[] = [];

// //     add(obj: T):void {
// //         this._objects.push(obj)
// //     }

// //     //T is Product
// //     //keyof T => 'name' | 'price'
// //     find(property:keyof T, value:unknown): T | undefined {
// //         return this._objects.find(obj => obj[property] === value)
// //     }
// // }

// // let store = new Store<Product>()
// // store.add({name:'a', price:1})
// // store.find('name' ,'a')
// // store.find('price', '1')
// // store.find('nonExistingProperty' ,1)



// //type mapping:

// // interface Product {
// //     name:string,
// //     price: number
// // }

// // type Optional<T> = {
// //     [K in keyof T]?: T[K]
// // }

// // type Nullable<T> = {
// //     [K in keyof T]: T[K] | null
// // }

// // type ReadOnly<T> = {
// //    readonly [K in keyof T] : T[K]
// // }

// // let product : ReadOnly<Product> = {
// //     name: 'a',
// //     price: 1
// // }


// //Exercise 4:

// //Convert the function below to a generic function:
// // function echo(arg) {
// //  return arg
// // }

// // function echo<T>(arg:T):T{
// //     return arg
// // }


// // //When compiling the following piece of code,
// // // we get an error saying ‘Property name does not exist on type T’. 
// // //How can we solve this problem?

// // // function printName<T>(obj:T) {
// // //     console.log(obj.name)
// // // }

// // function printName<T extends {name:string} >(obj:T){
// //     console.log(obj.name)
// // }

// // //An Entity should have a unique identifier. 
// // //The type of identifier, however, is dependent on the use case.
// // // In some cases, the ID might be a number, in other cases, 
// // //it might be a string, GUID, etc. Represent the entity using a generic class.

// // class TheClass<T> {
// //     constructor(public id:T){}
// // }


// // //Given the following interface, what does keyof User return?
// // interface User {
// //     userId:number;
// //     username: string
// // }
// //keyof User return "userId" and "username"
// //solution answer: It returns a union of the properties of User: 'userId' | 'username'




// // decorators:
// // function Component(constructor:Function) {
// //     console.log('Component decorator called')
// //     constructor.prototype.uniqueIdd = Date.now()
// //     constructor.prototype.insertInDOM = () => {
// //         console.log('inserting the component in the DOM')
// //     }
// // }

// // @Component
// // class ProfileComponent {

// // }


// //parameterized decorators:
//     //Decorator factory

// // type ComponentOptions = {
// //     selector: string
// // }
// // function Component(option: ComponentOptions){
// //     return (constructor:Function) => {
// //             console.log('Component decorator called')
// //             constructor.prototype.options = option
// //             constructor.prototype.uniqueIdd = Date.now()
// //             constructor.prototype.insertInDOM = () => {
// //                 console.log('inserting the component in the DOM')
// //             }
// //         }
// // }

// // function Pipe(constructor:Function) {
// //     console.log('Pipe decorator called')
// //     constructor.prototype.pipe = true
// // }

// // @Component({selector:'#my-profile'})
// // @Pipe
// // class ProfileComponent {

// // }


// // //Method Decorators:
// // function Log(target:any, methodName:string, descriptor: PropertyDescriptor){
// //     const original = descriptor.value as Function
// //     descriptor.value = function(message:string){
// //         console.log('before')
// //         original.call(this, message)
// //         console.log('after')
// //     }
// // }

// //  class Person {
// //     @Log
// //     say(message:string){
// //         console.log('person says' + message)
// //     }
// //  }

// //  let person = new Person()
// //  console.log(person.say('nmb'))


// //accessir deciratirs:

// // function Capitalize(target:any, methodName:string, descriptor: PropertyDecorator){
// //     const original = descriptor.get
// //     descriptor.get = function() {
// //         const result = original?.call(this)
// //         return (typeof result === 'string') ? result.toUpperCase() : result
// //     }
// // }

// // class Person {
// //     constructor(public fristNmae:string , public lastName:string ){

// //     }

// //     @Capitalize
// //     get fullName() {
// //         return `${this.fristNmae} ${this.lastName}`
// //     }
// // }

// // let person = new Person('mosh' , 'hamedani')
// // console.log(person.fullName)



// //property decorators:
// // function MinLength(length:number) {
// //     return (target:any, propertyName:string) => {
// //         let value:string
// //         const descriptor: PropertyDescriptor = {
// //             get(){return value},
// //             set(newValue:string){
// //                 if(newValue.length <length)
// //                     throw new Error(`${propertyName} should be at least ${length} characters long`)
// //                 value= newValue
// //             }
// //         }
// //         Object.defineProperty(target, propertyName, descriptor)
// //     }
// // }

// // class User {
// //     @MinLength(4)
// //     password:string

// //     constructor( password:string){
// //         this.password = password
// //     }
// // }

// // let user = new User('1234')
// // console.log(user.password)


// //parameter decorators:
// // type WatchedParameter = {
// //     methodName:string,
// //     parameterIndex:number
// // }

// // const watchedParameter: WatchedParameter[] = []

// // function Watch(target:any, methodName:string, parameterIndex:number){
// //     watchedParameter.push({
// //         methodName,
// //         parameterIndex
// //     })
// // }

// // class Vehicle {
// //     move(@Watch speed:number) {}
// // }



// // //Exercises 5:
// //     //Create a decorator for adding a sauce to Pizza instances:

// // function Sauce(sauce:string) {
// //     return (constructor: Function ) => {
// //         constructor.prototype.sauce = sauce
// //     }
// // }

// // @Sauce('pesto')
// // class Pizza {}






// //modules:

// // import { Square } from "./shapes/Square";
// // import { Circle as MyCircle } from "./shapes/Circle";

// // let circle = new MyCircle(1)
// // console.log(circle.radius)

// // let square = new Square(1)
// // console.log(square.width)

//     //wildcard import

// // // import * as Circle from "./shapes/Circle";

// // let newCircle = new Circle.Circle(1)
// // console.log(newCircle.radius)

//     //re-exporting:
//     // import { Circle, Square } from "./shapes";



// //integration with JS:

// import { calculateTax } from './tax'

// let tax = calculateTax(10_000)
// console.log(tax)


//describ types using JSDoc:
    //in tax.js


//creating declaration files:
    //in tax.d.ts file


//using definitely typed declaration files:
    //npm i loadash
    //npm i -D @types/lodash
    //npm i chalk

import * as _ from 'lodash'

_.clone([1,2,3])

