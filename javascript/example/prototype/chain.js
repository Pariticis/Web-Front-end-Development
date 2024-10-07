const divclass = document.querySelector(".divclass");
const p = document.createElement("p");

p.textContent = "This is a new paragraph";
divclass.appendChild(p);

const object = {
    name: "name111",
    age: 22,
    greet: function() {
        console.log("Hello, " + this.name);
    },
};

const prototype = Object.create(object);
prototype.greet();



const personPrototype = {
    greet: function() {
        console.log(this.name);
    },
};

function person(name)  {
    this.name = name;
};

Object.assign(person.prototype, personPrototype);

const example = new person("AAA");
example.greet();