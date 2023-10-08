import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemons/pokemon-images';

export const usePokemonId = routeLoader$<number>(({params, redirect}) => {
  console.log('im in')
  const id = Number(params.id)
  // if ( isNaN(id)){
  //   console.log('NO HAY NUMERO')
  //   redirect(301, '/')
  // }
  if (id <= 0 || id > 1000){
    redirect(301, '/')
  }
  // console.log(params)
  return id
})

export default component$(() => {

  // const location = useLocation()
  // console.log(location.params)

  const pokemonId = usePokemonId()

  return (
  <>
  <span class='text-xl'>
    Pokemon #{pokemonId}
  </span>

  <PokemonImage 
  id={ pokemonId.value }
  size={200} />
  </>
  )
});