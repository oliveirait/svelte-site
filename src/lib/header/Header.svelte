<script lang="ts">
    import { globalLang, globalDataLangPt, globalDataLangEn } from "../../context/store";

    let icon = "profile_small.jpg"

    
    let menuPt = [
        {href: '/', label: $globalDataLangPt.header.menu.home },
        {href: '/projetos', label: $globalDataLangPt.header.menu.projects},
        {href: '/contato', label: $globalDataLangPt.header.menu.contact},
        {href: '/blog', label: 'Blog'}
    ]

    let menuEn = [
        {href: '/', label: $globalDataLangEn.header.menu.home },
        {href: '/projetos', label: $globalDataLangEn.header.menu.projects},
        {href: '/contato', label: $globalDataLangEn.header.menu.contact}
    ]

    
    const togglePt = () => {
        $globalLang.lang = 'pt'
    }

    const toggleEn = () => {
        $globalLang.lang = 'en'
    }

</script>

<nav class="flex items-center justify-center shadow-lg shadow-gray-600 bg-gray-800 font-medium text-white z-10 fixed top-0 w-full">
    <div class="w-[1000px] flex flex-row justify-center items-center md:justify-between h-24 md:h-16 ">

        <a href="/">
            <div class="hidden md:flex flex-row gap-4 items-center justify-center">
                <img src={icon} alt="Logo" class="h-10 w-10 border-2 border-white rounded-full " />
                <p>{$globalDataLangEn.header.name}</p>
            </div>
        </a>
        
        <div class="flex items-center justify-center capitalize text-gray-500 space-x-2">
            {#each ($globalLang.lang === 'pt' ? menuPt : menuEn) as {href, label}}
                <a {href} class="w-24 border-b-2 text-gray-100 border-transparent hover:scale-105 hover:transition ease-in transition-colors duration-300 hover:border-blue-400 p-2 items-center justify-center flex">{label}</a>
            {/each}
        </div>

        <div class="flex-col w-auto md:w-40 md:p-2 flex md:flex-row items-center justify-center gap-2 md:space-x-2 rounded-md  p-2">
            <button 
                on:click={togglePt}
                class={` 
                border-yellow-500 
                
                ${$globalLang.lang === 'pt' ? 'border shadow-sm shadow-white bg-gradient-to-l from-yellow-500 to-green-500' : 'bg-zinc-700'}
                w-16 
                rounded-sm`}
            > pt
            </button>
            <button 
                on:click={toggleEn}
                class={`
                border-yellow-500 
                
                ${$globalLang.lang === 'en' ? 'border shadow-sm shadow-white bg-gradient-to-l from-red-500 to-blue-500 ' : 'bg-zinc-700'}
                w-16 rounded-sm`}
            > en
            </button>
        </div>
    </div>
</nav>
