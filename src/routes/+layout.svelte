<script>
  import "../app.postcss";
  import Header from "$lib/header/Header.svelte";
  import Footer from "$lib/footer/Footer.svelte";
</script>


  <Header />

  <div class="w-full h-full flex flex-col dark:bg-gray-900 min-h-screen">
    <slot />
  </div>

  <Footer />





