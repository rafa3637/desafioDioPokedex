function showPokemonDetails(pokemonId) {
    const modal = document.getElementById('pokemonModal');
    const modalContent = document.querySelector('.pokemon-modal-details');

    // URL da API para obter os dados do Pokémon
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

    // Busca os dados do Pokémon
    fetch(url)
        .then(response => response.json())
        .then(pokemon => {
            // Popula o modal com os dados do Pokémon
            modalContent.innerHTML = `
                <h2>${pokemon.name}</h2>
                <img src="${pokemon.sprites.other['dream_world'].front_default}" alt="${pokemon.name}">
                <p><strong>Altura:</strong> ${pokemon.height}</p>
                <p><strong>Peso:</strong> ${pokemon.weight}</p>
                <p><strong>Experiência Base:</strong> ${pokemon.base_experience}</p>
            `;

            // Exibe o modal
            modal.style.display = 'block';
        })
        .catch(error => console.error('Erro ao buscar dados do Pokémon:', error));

    // Função para fechar o modal
    const closeModal = document.getElementsByClassName('close')[0];
    closeModal.onclick = function () {
        modal.style.display = 'none';
    }

    // Fecha o modal ao clicar fora dele
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

