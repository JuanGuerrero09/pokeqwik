import { component$, useSignal, useTask$ } from "@builder.io/qwik";

interface Props {
  id: number | string;
  size: number;
  isBackImage?: boolean;
  isVisible?: boolean
}

export const PokemonImage = component$(
  ({ id, size = 200, isBackImage = false, isVisible = false }: Props) => {
    const imageLoaded = useSignal(false);

    useTask$(({ track }) => {
        track(() => id)
        imageLoaded.value = false
    })

    return (
      <div
        class="flex items-center justify-center"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
         
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon${
              isBackImage ? "/back/" : "/"
            }${id}.png`}
            alt="pokemon sprint"
            width={size}
            height={size}
            onLoad$={() => (imageLoaded.value = true)}
            class={[{'brightness-0': isVisible, 'hidden':!imageLoaded.value }, 'transition-all']}
          />
          
          {!imageLoaded.value && <span>Cargando...</span>}
        
      </div>
    );
  }
);
