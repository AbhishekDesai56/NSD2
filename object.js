let user = {
    name: "John",
    age: 30
}

alert(user.name);
alert(user.age);

user.isAdmin = true;

//Delete Property
delete user.age; 

let user = {
    name: "John",
    age: 30,
    "likes birds": true  // multiword property name must be quoted
  };

  let user = {
    name: "John",
    age: 30,
  }
  //That is called a “trailing” or “hanging” comma. Makes it easier to add/remove/move around properties, because all lines become alike.

  //alternative “square bracket notation”
  let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];


let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;


let user = {
    name: "John",
    age: 30
  };

  let key = prompt("What do you want to know about the user?", "name");

  // access by variable
  alert( user[key] );

  let user = {
    name: "John",
    age: 30
  };
  
  let key = "name";
  alert( user.key )  //Cannot be used like this


  //Computed properties
  //// We can use square brackets in an object literal, when creating an object. That’s called computed properties.

