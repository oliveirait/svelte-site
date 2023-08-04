
<script lang="ts">
    import { onMount } from "svelte";
    const template = "https://files.tecnoblog.net/wp-content/uploads/2022/06/capa-github-700x394.jpg"
    const endpoint2 = "https://api.github.com/users/oliveirait/repos"
    let items: any = []
    

    async function getData () {
        setTimeout(() => {
            fetch(endpoint2).then((data) => data.json()).then(data => {
            items = data
        })
        }, 3000)

    }


  // onMount(getData)
    

</script>


{#if items.length > 0}

{#each items as {name, description, language, html_url}}

    <div class=" flex flex-col gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2 bg-center mx-20 w-8/12 rounded-2xl shadow-md shadow-white dark:shadow-white dark:shadow-sm hover:scale-105 transition ease-in " style="background-image: url({template});">
        <a href={html_url} target="_blank">
        <div class="flex items-end overflow-hidden bg-cover h-96 rounded-2xl" >
            <div class="w-full px-8 py-4 overflow-hidden backdrop-blur-sm bg-white/60 dark:bg-gray-700 rounded-t-xl">
                <h2 class="mt-4 text-xl font-semibold text-black capitalize dark:text-white ">{name}</h2>
                <p class="mt-2 text-sm font-semibold text-gray-800 capitalize dark:text-white">{!description ? 'Sem descricao' : description}</p>
                <p class="mt-2 text-sm -tracking-wide text-blue-700 font-bold uppercase dark:text-blue-400 ">{language}</p>
            </div>
        </div>
        </a>
    </div>

{/each}

{:else}

<div class="flex flex-col gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2 bg-center mx-20 w-8/12 rounded-2xl shadow-md shadow-white dark:shadow-white dark:shadow-sm animate-pulse">

    <div class="flex items-end overflow-hidden bg-cover h-96 rounded-2xl" >
        <div class="w-full h-28 px-8 py-4 overflow-hidden backdrop-blur-sm bg-white/60 dark:bg-gray-700 rounded-t-xl">
            <p class="mt-4 text-xl font-semibold text-black capitalize dark:text-white "></p>
            <p class="mt-2 text-sm font-semibold text-gray-800 capitalize dark:text-white"></p>
            <p class="mt-2 text-sm -tracking-wide text-blue-700 font-bold uppercase dark:text-blue-400 "></p>
        </div>
    </div>
</div>

{/if}









