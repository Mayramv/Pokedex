const pokemonImg = document.querySelector(".pokemon_img");
const pokemonNumber = document.querySelector(".pokemon_number");
const pokemonName = document.querySelector(".pokemon_name");

const form = document.querySelector(".form");
const input = document.querySelector(".input_search");

const fetchPokemin = async (pokemon) => {
  const APIResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  const data = await APIResponse.json();

  return data;
};

const renderPokemon = async (pokemon) => {
  const data = await fetchPokemin(pokemon.toLowerCase());

  pokemonName.innerHTML = data.name;
  pokemonNumber.innerHTML = data.id;
  pokemonImg.src =
    data["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
      "front_default"
    ];

  input.value = "";
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  renderPokemon(input.value);
});
