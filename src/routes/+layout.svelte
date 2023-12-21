<script lang="ts">
  import "../app.postcss";
  import Header from "$lib/header/Header.svelte";
  import Footer from "$lib/footer/Footer.svelte";
</script>


<Header />

<div class=" items-center justify-center flex flex-col w-auto bg-gray-800 h-auto sm:mt-20 md:m-t-0">
  <slot />
</div>
