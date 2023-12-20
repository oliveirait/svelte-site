<script>
  import Logo from "$lib/logo/Logo.svelte";

    const icon = "profile_small.jpg"
    const items = [
        {href: '/', label: 'Inicio'},
        {href: '/projetos', label: 'projetos'},
        {href: '/contato', label: 'contato'},
    ]

</script>

<nav class=" flex items-center justify-center shadow-lg shadow-gray-600 bg-gray-800 font-medium text-white z-10 fixed top-0 w-full">
    
    <div class=" w-[1000px] flex flex-row justify-center items-center md:justify-between px-8">
        <div class="hidden md:flex flex-row gap-4 items-center justify-center">
            <img src={icon} alt="Logo" class="h-10 w-10 border-2 border-white rounded-full " />
            <p>Felipe's portfolio</p>
        </div>
        
        <div class="flex items-center justify-center p-4 capitalize text-gray-600 space-x-2 ">
            {#each items as {href, label}}
                <a {href} class="w-24 border-b-2 text-gray-100 border-transparent hover:scale-105 hover:transition ease-in transition-colors duration-300 hover:border-blue-400 p-2 items-center justify-center flex">{label}</a>
            {/each}
       </div>
    </div>

</nav>
