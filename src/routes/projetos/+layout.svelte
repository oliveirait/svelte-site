<script>
    let title = 'Projetos'
    
</script>


<section class="bg-white dark:bg-gray-900 h-full mt-24">
    <div class="flex flex-col px-6 py-10 mx-auto bg-white items-center justify-center dark:bg-gray-900">
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">{title}</h1>
        <h1 class="text-sm text-slate-700 mt-2 text-center dark:text-zinc-300">
            Para mais informacoes sobre projetos privados, <br>
            favor, entrar em contato
        </h1>
        <slot /> 
    </div>
</section>


