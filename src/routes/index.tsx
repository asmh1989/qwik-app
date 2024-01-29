import { component$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { invoke } from '@tauri-apps/api/tauri'

export default component$(() => {
  const greetMsg = useSignal('')

  const greet = $(async (name: string) => {
    greetMsg.value = await invoke('greet', { name })
  })
  return (
    <>
      <h1>Hi 👋</h1>
      <p>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding ....
      </p>
      <button onClick$={() => greet(new Date().toTimeString())}>{greetMsg.value}</button>

    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
