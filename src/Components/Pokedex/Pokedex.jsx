import Card from "../Card/Card";

const Pokedex = ({ pokemons = [], onAddToParty = () => { } }) => {
    return (
        <div className=" w-full flex justify-center items-center gap-4 flex-wrap">
            {pokemons.map((pokemon) => {
                return <Card key={pokemon.id} pokemon={pokemon} onAdd={() => {
                    onAddToParty(pokemon.id);
                  }}/>;
            })}
        </div>
    );
};

export default Pokedex;