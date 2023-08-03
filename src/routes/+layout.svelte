<script>
  import "../app.postcss";
  import Header from "$lib/header/Header.svelte";
  import Footer from "$lib/footer/Footer.svelte";
</script>


  <Header />

  <div class="w-screen h-screen flex flex-col dark:bg-gray-900">
    <slot />
  </div>

  <Footer />





