import { component$ } from '@builder.io/qwik';
import { type DocumentHead, Link, routeLoader$ } from '@builder.io/qwik-city';

export const usePokemonList = routeLoader$(async() => {
  
})

export default component$(() => {
  return(
    <>
    <div class='flex flex-col '>
      <span class='my-5 text-5xl'> Status </span>
      <span> Current offset </span>
      <span> Está cargando la página </span>
    </div>
    <div class='mt-10'>
      <Link class='btn btn-primary mr-2'>
        Anteriores
      </Link>
      <Link class='btn btn-primary mr-2'>
        Siguientes
      </Link>
    </div>
    <div class='grid grid-cols-5 mt-5'>
      <div class='m-5 flex flex-col justify-center items-center'>Pokemon</div>
      <div class='m-5 flex flex-col justify-center items-center'>Pokemon</div>
      <div class='m-5 flex flex-col justify-center items-center'>Pokemon</div>
      <div class='m-5 flex flex-col justify-center items-center'>Pokemon</div>
      <div class='m-5 flex flex-col justify-center items-center'>Pokemon</div>
      <div class='m-5 flex flex-col justify-center items-center'>Pokemon</div>
    </div>
    </>
  )
});

export const head: DocumentHead = {
  title: "List SSR",
};