<script>
  import Logo from "$lib/logo/Logo.svelte";

  let data = new Date().getFullYear()

</script>


<footer class="bg-white dark:bg-gray-900">
    <div class="container flex items-center justify-center p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">

        <p class="text-sm text-gray-600 dark:text-gray-300">© Copyright {data}. Todos os direitos reservados.</p>
        
    </div>
</footer>