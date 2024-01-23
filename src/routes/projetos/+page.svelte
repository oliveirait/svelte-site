
<script lang="ts">
    import { globalLang, globalDataLangPt, globalDataLangEn } from "../../context/store";
    import { onMount } from "svelte";
    import { items } from "../../config/assets_path";

    //const title = 'Projetos'
    //const template = "https://files.tecnoblog.net/wp-content/uploads/2022/06/capa-github-700x394.jpg"
    //const endpoint2 = "https://api.github.com/users/oliveirait/repos"

    //async function getData () {
        /*setTimeout(() => {
            fetch(endpoint2).then((data) => data.json()).then(data => {
            items = data
        })
        }: "", 500)*/
    //}
    //onMount(getData)
</script>


<section class="bg-gray-800 mt-28 text-white md:mt-[-28px]">
    <div class="flex flex-col px-6 py-10 mx-auto items-center justify-center">
        <h1 class="text-2xl font-semibold text-center capitalize md:text-3xl">{$globalLang.lang === 'pt' ? $globalDataLangPt.projects.title : $globalDataLangEn.projects.title}</h1>
        <h1 class="text-sm  mt-2 text-center ">
            {$globalLang.lang === 'pt' ? $globalDataLangPt.projects.description : $globalDataLangEn.projects.description}
        </h1>
    </div>
    <div class="flex flex-col lg:grid lg:grid-cols-2 lg:p-6 lg:gap-4 items-center justify-start mx-8 md:m-0 ">
        {#if items.length > 0}
        {#each items as {name, description, language, html_url, background_path}}
        <div class="mb-8
            bg-cover bg-no-repeat flex flex-col gap-8 mt-8 bg-center w-full 
            rounded-2xl shadow-md shadow-white hover:scale-[1.005]
            transition ease-in duration-100 " style="background-image: url({background_path} "
        >
            <a href={html_url} target="_blank">
                <div class="flex items-end overflow-hidden h-96 rounded-2xl w-full" >
                    <div class="text-white w-full px-4 py-4 overflow-hidden backdrop-blur-sm  bg-gray-900/60 rounded-t-xl">
                        <h2 class="mt-4 text-2xl font-bold underline capitalize  ">{name}</h2>
                        <p class="mt-2 text-sm font-semibold ">{!description ? 'Sem descricao' : description}</p>
                        <p class="mt-2 text-sm -tracking-wide font-bold uppercase text-blue-200 drop-shadow-xl">{language}</p>
                    </div>
                </div>
            </a>
        </div>
        {/each}
    
        {:else}
        <div class="flex flex-col gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2 bg-center mx-20 w-8/12 rounded-2xl shadow-md shadow-white animate-pulse">
            <div class="flex items-end overflow-hidden bg-cover h-96 rounded-2xl" >
                <div class="w-full h-28 px-8 py-4 overflow-hidden backdrop-blur-sm bg-white/60 bg-gray-700 rounded-t-xl">
                    <p class="mt-4 text-xl font-semibold text-black capitalize  "></p>
                    <p class="mt-2 text-sm font-semibold text-gray-800 capitalize "></p>
                    <p class="mt-2 text-sm -tracking-wide text-blue-700 font-bold uppercase "></p>
                </div>
            </div>
        </div>
    
        {/if}
    </div>
</section>








