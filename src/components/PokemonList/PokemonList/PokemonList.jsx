import './PokemonList.css'
import { Pokemon } from '../Pokemon/Pokemon'
import { SearchBar } from '../../SearchBar/SearchBar'

export function PokemonList({ pokemons }) {

    const elems = pokemons.map(pokemon => {
        return <div className="pokemonL">
            <p className='listId'>{pokemon.id}</p>
            <p>{pokemon.name}</p>
            <img className="pokeLogo" src={pokemon.image} />
        </div>
    })

    return <div className='pokeview'>
        <div className='liste'>
            {elems.map(elem => {
                return elem
            })}
        </div>
        <Pokemon className="pokemon" />
    </div>
}