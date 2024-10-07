const  person = {
    name: {
        one: "name1",
        two: "name2"},
    age: 30,
    bio: () => {
        console.log(`My name is ${this.name[0]} and I am ${this.age} years old.`);
    },
    introduce: () => {
        console.log('My name is ${this.name[1]}')
    },
};