async function populate() {
    const requestURL =
      "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const superHeroes = await response.json();
  
    populateHeader(superHeroes);
    populateHeroes(superHeroes);
};

function populateHeader(object) {
    const header = document.querySelector("header");
    const h1 = document.createElement("h1");
    h1.textContent = object.squadName;
    header.appendChild(h1);

    const p = document.createElement("p");
    p.textContent = 'Hometown: ${object.homeTown} // Formed: ${object.formed}';
    header.appendChild(p);
};

function populateHeroes(object) {
    const section = document.querySelector("section");
    const memeber = object.members;

    for(const cc of memeber) {
        const article = document.createElement("article");
        const h2 = document.createElement("h2");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        const ul = document.createElement("ul");

        h2.textContent = cc.name;
        p1.textContent = `Secret Identity: ${cc.secretIdentity}`;
        p2.textContent = `Age: ${cc.age}`;
        p3.textContent = `Powers:`;

        const powers = cc.powers;
        for(const power of powers){
            const li = document.createElement("li");
            li.textContent = power;
            ul.appendChild(li);
        };

        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        article.appendChild(ul);
        
        section.appendChild(article);
    };

};

populate();