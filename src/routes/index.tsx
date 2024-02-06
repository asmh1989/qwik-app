import { component$, useSignal, $ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { invoke } from '@tauri-apps/api/tauri'

import { LoginPage } from "~/integrations/react/login";

export default component$(() => {
  const greetMsg = useSignal('')

  const greet = $(async (name: string) => {
    greetMsg.value = await invoke('greet', { name })
  })
  return (
    <>
      <LoginPage />
    </>
  );
});

