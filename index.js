console.log("Working");

//what is an object?
//objects consists of properties and methods these properties of anytime but the 
//compiler  converts them into string type only. values can be of any type.
//Methods are actions/behaviour performed or function definations.

//creating an pbject.
//properties order are not preserved
const mobile = {
    brand : "MI",
    weight : 200,
    isworking : true,
    12 : "Android version",
    displayInfo : function(){
        console.log(`The brand is ${mobile.brand} and the weight is ${mobile.weight} and the isworking is ${mobile.isworking}
        and the android version is ${mobile["12"]}`);
    }
}
//mobile.cammera = "32px";//method to add a property
mobile["cammra"] = "108px";//second method to add property
console.log(mobile);
mobile.displayInfo();

// methods of creating an object
const mobile1 = {};
mobile1.brand = "vivo",
mobile1.weight = 150;
console.log(mobile1);

//this is a keyword not a variable
//this pointing to something depends on the invocation / calling of this keyword
//function constructor 
function Mobile(brand,weight,camera){
    this.brand = brand;
    this.weight = weight;
    this.camera = camera;
}
const apple = new Mobile("Apple",100,"40px");
const onePlus = new Mobile("Oneplus",150,"40px");
console.log(apple);
console.log(onePlus);

//this keyword

//In an Object this refers to the Object
//When we use this keyword alone,then it points to global Object
//In a function this refers to parent Object

value = 23;//always give a keyword like let,const,var
console.log(value);
console.log(this);

//spread opearators

let arr1 = [1,2,3,4,5];
let arr2 = [7,8,9,10,11];

console.log(arr1.concat(arr2));
let arr3 = [...arr1,...arr2];
console.log(arr3);