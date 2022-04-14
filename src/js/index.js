/*
	Quando clicar no Pokémon da listagem, temos que esconder o cartão do Pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem.

	Para isso, vamos precisar trabalhar com dois elementos:
	1 - Listagem
	2 - Cartão do Pokémon.

	Precisamos criar duas variáveis no JS para trabalhar com os elementos da tela.

	Vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de Pokémons.

	- Remover a classe aberto do cartão que está aberto;
	- Ao clicar em um Pokémon da listagem, pegamos o id desse para saber qual cartão mostrar;
	- Remover a classe ativo que marca o Pokémon selecionado;
	- Adicionar a classe ativo no item da lista selecionado.
*/

// Precisamos criar duas variáveis no JS para trabalhar com os elementos da tela.
const listaSelecaoPokemons = document.querySelectorAll(".pokemon")
const pokemonsCard = document.querySelectorAll(".cartao-pokemon")

listaSelecaoPokemons.forEach(pokemon => {
	//Vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de Pokémons.
	pokemon.addEventListener("click", () => {

		//Remover a classe aberto do cartão que está aberto
		const cartaoPokemonAberto = document.querySelector(".aberto")
		cartaoPokemonAberto.classList.remove("aberto")


		//Ao clicar em um Pokémon da listagem, pegamos o id desse para saber qual cartão mostrar
		const idPokemonSelecionado = pokemon.attributes.id.value
		const idCartaoPokemonParaAbrir = "cartao-" + idPokemonSelecionado
		const cartaoPokemonParaAbrir = document.getElementById(idCartaoPokemonParaAbrir)
		cartaoPokemonParaAbrir.classList.add("aberto")


		//Remover a classe ativo que marca o Pokémon selecionado
		const pokemonAtivoNaListagem = document.querySelector(".ativo")
		pokemonAtivoNaListagem.classList.remove("ativo")


		// Adicionar a classe ativo no item da lista selecionado
		const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
		pokemonSelecionadoNaListagem.classList.add("ativo")
	})
})