const main = document.getElementById("main");
// const div = document.createElement('div');
// div.style.height = "150px"
// div.style.width = "150px"
// div.style.backgroundColor = "red";
// main.appendChild(div);
// Fetch
// const pokemon = fetch('https://pokeapi.co/api/v2/pokemon')
//     .then((response) => response.json())
//     .then(data => console.log(data));

// Async/Await
async function getAllPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    const data = await response.json()
    // console.log(data.results);
    for (let p of data.results) {
        getPokemon(p.name);
    }

}

async function getPokemon(poke) {
    let url = "https://pokeapi.co/api/v2/pokemon/" + poke
    // console.log(url);
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/' + poke)
    let pokemon = await response.json();
    // console.log(pokemon);
    setPokemon(pokemon);
}

function setPokemon(pokemon) {
    let newDiv = document.createElement('div');
    newDiv.className = "pokemon-container"

    let img = document.createElement('img')
    img.src = pokemon['sprites']['other']['official-artwork']['front_default'] || pokemon['sprites']['front_default']
    let button = document.createElement('button')
    let span = document.createElement('span')
    span.append(" 0");
    button.append(`Like ${pokemon.name}`)

    button.appendChild(span);
    newDiv.appendChild(img);
    newDiv.appendChild(button);
    main.appendChild(newDiv);
}

function like() {
    const buttons = document.querySelectorAll('button');
    console.log(buttons);
    for (let btn of buttons) {
        btn.addEventListener('click', (e) => {
            console.log(e);
            e.target.lastElementChild.innerText++;
        })
    }
}

getAllPokemon();

// JSON conversion with response.json()
// "{'key': 'value'}"
// {
//     key: value
// }