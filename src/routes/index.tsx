import { component$, useSignal, $ } from "@builder.io/qwik";
import { type DocumentHead, useNavigate } from "@builder.io/qwik-city";
import { PokemonImage } from "~/components/pokemons/pokemon-images";

export default component$(() => {
  const nav = useNavigate()
  const pokemonId = useSignal(1);
  const pokemonIsBack = useSignal(false);
  const pokemonIsVisible = useSignal(false);

  const changePokemonId = $((value: number) => {
    if (pokemonId.value + value <= 0) return;
    pokemonId.value += value;
  });

  const goToPokemon = $(() => {
    nav(`/poke/${ pokemonId.value }`)
  })

  return (
    <>
      <span class="text-2xl">Buscador simple</span>
      <span class="text-9xl">{pokemonId}</span>

      {/* <Link href={`/poke/${pokemonId.value}/`}>
      
      <PokemonImage
        id={pokemonId.value}
        size={300}
        isBackImage={pokemonIsBack.value}
        isVisible={pokemonIsVisible.value}
      />
      </Link> */}
      <div onClick$={() => goToPokemon()}>
        
      <PokemonImage
        id={pokemonId.value}
        size={300}
        isBackImage={pokemonIsBack.value}
        isVisible={pokemonIsVisible.value}
        />

      </div>

      <div>
        <button onClick$={() => changePokemonId(-1)} class="btn btn-primary">
          Anterior
        </button>
        <button onClick$={() => changePokemonId(1)} class="btn btn-primary">
          Siguiente
        </button>
      </div>
      <div>
        <button
          onClick$={() => (pokemonIsBack.value = !pokemonIsBack.value)}
          class="btn btn-primary"
        >
          Voltear
        </button>
        <button
          onClick$={() => (pokemonIsVisible.value = !pokemonIsVisible.value)}
          class="btn btn-primary"
        >
          Mostrar
        </button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Pokeqwik",
  meta: [
    {
      name: "description",
      content: "My first Qwik app",
    },
  ],
};
