<script>
  import "../app.postcss";
  import Header from "$lib/header/Header.svelte";
  import Footer from "$lib/footer/Footer.svelte";
  import { writable } from "svelte/store";
  import { language } from "../config/svelte";


  const chose_lang = writable('pt')

  const lang = $chose_lang === 'pt' 
    ? language.pt 
    : language.en


</script>


<Header {chose_lang} {lang}/>
<div class=" items-center justify-center flex w-full bg-gray-800 h-full">
  <slot {chose_lang} {lang}/>
</div>
<Footer />


