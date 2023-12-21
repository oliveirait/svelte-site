<script>
    export let chose_lang;
    export let lang;

    const icon = "profile_small.jpg"
    const header_title = "Felipe's Portfolio"
    const language = lang

    const items = [
        {href: '/', label: language.header.menu.home },
        {href: '/projetos', label: language.header.menu.projects},
        {href: '/contato', label: language.header.menu.contact}
    ]
    
    const togglePt = () => {
        $chose_lang = 'pt'

    }

    const toggleEn = () => {
        $chose_lang = 'en'

    }
</script>

<nav class="flex items-center justify-center shadow-lg shadow-gray-600 bg-gray-800 font-medium text-white z-10 fixed top-0 w-full">
    <div class=" w-[1000px] flex flex-row justify-center items-center md:justify-between px-8">
        <div class="hidden md:flex flex-row gap-4 items-center justify-center">
            <img src={icon} alt="Logo" class="h-10 w-10 border-2 border-white rounded-full " />
            <p>{header_title}</p>
        </div>
        
        <div class="flex items-center justify-center p-4 capitalize text-gray-600 space-x-2 ">
            {#each items as {href, label}}
                <a {href} class="w-24 border-b-2 text-gray-100 border-transparent hover:scale-105 hover:transition ease-in transition-colors duration-300 hover:border-blue-400 p-2 items-center justify-center flex">{label}</a>
            {/each}
       </div>

       <div class="w-40 p-2 flex flex-row items-center justify-center space-x-2 rounded-md">
        <button 
            on:click={togglePt}
            class={` 
            border-yellow-500 
            
            ${$chose_lang === 'pt' ? 'border shadow-sm shadow-white bg-gradient-to-l from-yellow-500 to-green-500' : 'bg-zinc-700'}
            w-16 
            rounded-sm`}>pt</button>
        <button 
            on:click={toggleEn}
            class={`
            border-yellow-500 
            
            ${$chose_lang === 'en' ? 'border shadow-sm shadow-white bg-gradient-to-l from-red-500 to-blue-500 ' : 'bg-zinc-700'}
            w-16 rounded-sm`}>en</button>
       </div>
    </div>
</nav>
