<script>
  import "../app.postcss";
  import Header from "$lib/header/Header.svelte";
  import Footer from "$lib/footer/Footer.svelte";
</script>


<Header />
<div class=" items-center justify-center flex w-full bg-gray-800 h-full">
  <slot />
</div>
<Footer />

