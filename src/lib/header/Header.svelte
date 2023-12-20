<script>
  import Logo from "$lib/logo/Logo.svelte";

    const icon = "profile_small.jpg"
    const items = [
        {href: '/', label: 'Inicio'},
        {href: '/projetos', label: 'projetos'},
        {href: '/contato', label: 'contato'},

    ]

</script>

<nav class="bg-white shadow dark:bg-gray-800 font-medium fixed top-0 w-full z-10">
    <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <img 
            src={icon}
            alt="Logo" 
            class="h-8 w-8 mr-12 border-2 border-zinc-500 rounded-full" 
        />
        {#each items as {href, label}}
            <a {href} class="border-b-2 border-transparent hover:text-gray-800 hover:scale-110 hover:transition ease-in transition-colors duration-300 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">{label}</a>
        {/each}
   </div>
</nav>
