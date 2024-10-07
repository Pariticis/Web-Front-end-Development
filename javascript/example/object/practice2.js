let bandInfo;

// Add your code here

const band = {
  name: "wanmeidaoli",
  age: 27,
  genre: "electric",
  nationality: "China",
  members: 4,
  formed: 2020,
  split: "false",
  albums: {
    name: ["name1", "name2", "name3"],
    year: [2019, 2020, 2021],
    genre: ["pop", "rock", "metal"],
  },
};

bandInfo = `The name of the band is ${band.name}. 
  The age of the band is ${band.age}. 
  The genre of the band is ${band.genre}. 
  The nationality of the band is ${band.nationality}. 
  The number of members in the band is ${band.members}. 
  The band was formed in ${band.formed}. 
  The band has ${band.albums.name.length} albums. 
  The first album was ${band.albums.name[0]} 
  and it was released in ${band.albums.year[0]}. 
  The genre of the first album is ${band.albums.genre[0]}.`;

// Don't edit the code below here!

const section = document.querySelector("section");
let para1 = document.createElement("p");
para1.textContent = bandInfo;
section.appendChild(para1);
