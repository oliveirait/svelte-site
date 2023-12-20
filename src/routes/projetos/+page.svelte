
<script lang="ts">
    import { onMount } from "svelte";

    interface ProjectProps {
        name: string
        description: string
        language: string
        html_url: string
    }

    const template = "https://files.tecnoblog.net/wp-content/uploads/2022/06/capa-github-700x394.jpg"
    const endpoint2 = "https://api.github.com/users/oliveirait/repos"
    const items: any = [
        {
            name: "Rapid Form", 
            description: "Sítio Web de uma empresa que presta serviços de de preenchimento de formulários de cooperativas médicas", 
            language: "Javascript/ReactJs", 
            html_url: "https://rapidform.online",
            background_path: "rapidform.PNG"
        },

        {
            name: "Oliveira Lab", 
            description: "Meu site de portifólio", 
            language: "Typescript/Svelte", 
            html_url: "https://oliveiracode.online",
            background_path: "oliveiracode.PNG"
        },

        {
            name: "Meu BRT", 
            description: "Aplicativo de informações sobre mobilidade urbana", 
            language: "Typescript/React Native", 
            html_url: "https://play.google.com/store/apps/details?id=com.oliveirafocs.localizarbrt",
            background_path: "meubrt.PNG"
        },

        {
            name: "Praias Limpas", 
            description: "Aplicativo que exibe informações sobre balneabilidade das praias no Brasil", 
            language: "Typescript/React Native", 
            html_url: "https://play.google.com/store/apps/details?id=com.oliveirafocs.beachesinbrasil",
            background_path: "praiaslimpas.PNG"
        },

        {
            name: "CNPJ Rápido", 
            description: "Aplicativo de consulta de CNPJ", 
            language: "Typescript/React Native", 
            html_url: "https://play.google.com/store/apps/details?id=com.oliveirafocs.cnpjrapido",
            background_path: "cnpjrapido.PNG"
        },

                {
            name: "IMC Calculadora", 
            description: "Aplicativo de cálculo de IMC (Índice de massa corporal)", 
            language: "Typescript/React Native", 
            html_url: "https://play.google.com/store/apps/details?id=com.oliveirafocs.imccalculadora",
            background_path: "imccalculadora.PNG"
        }
    ]
    

    async function getData () {
        /*setTimeout(() => {
            fetch(endpoint2).then((data) => data.json()).then(data => {
            items = data
        })
        }: "", 500)*/
    }

    onMount(getData)
</script>


{#if items.length > 0}
    {#each items as {name, description, language, html_url, background_path}}
        <div class="
            mb-8 p-4 md:p-8
            bg-cover flex flex-col gap-8 mt-8 xl:mt-12 lg:grid-cols-2 bg-center mx-20 w-8/12 
            rounded-2xl shadow-md shadow-white dark:shadow-white dark:shadow-sm hover:scale-105 
            transition ease-in duration-300" style="background-image: url({background_path})"
        >
            <a href={html_url} target="_blank">
                <div class="flex items-end overflow-hidden bg-cover h-96 rounded-2xl" >
                    <div class="w-full px-8 py-4 overflow-hidden backdrop-blur-md bg-white/30 dark:bg-gray-700/20 rounded-t-xl">
                        <h2 class="mt-4 text-xl font-semibold text-black capitalize  ">{name}</h2>
                        <p class="mt-2 text-sm font-semibold text-gray-800 capitalize ">{!description ? 'Sem descricao' : description}</p>
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
                <p class="mt-4 text-xl font-semibold text-black capitalize  "></p>
                <p class="mt-2 text-sm font-semibold text-gray-800 capitalize "></p>
                <p class="mt-2 text-sm -tracking-wide text-blue-700 font-bold uppercase dark:text-blue-400 "></p>
            </div>
        </div>
    </div>

{/if}









