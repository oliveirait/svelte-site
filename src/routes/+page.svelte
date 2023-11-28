<script lang="ts">
    let image = "https://play-lh.googleusercontent.com/f09eDctsng262frDLHgQb8WO0CE8W9bkYYAkN9rh9C4SIqeqniL783aWmzRxCCZZejaA=w3840-h2160-rw"

    let href = "https://play.google.com/store/apps/dev?id=7575363218543079895"

</script>



<section class="bg-white dark:bg-gray-900">
    <div class="items-center justify-center">

        <div class="flex flex-col justify-center w-full h-full px-6 py-10 items-center dark:bg-gray-900">
            <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                Oliveira <span class="text-blue-500">Code Lab</span> 
            </h1>

            <div class="mt-10 lg:mt-20 lg:flex lg:items-center bg-white dark:bg-gray-900">
                <img 
                    class="object-cover border-2 object-center w-full lg:w-[32rem] h-96 rounded-full" 
                    src={image} 
                    alt="Logo Projeto Github"
                >

                <div class="mt-8 lg:px-10 lg:mt-0 flex flex-col justify-between gap-4">
                    <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                        Never stop learning
                    </h1>

                    <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                        Bem vindo(a) a Oliveira Lab!
                        Nosso compromisso é criar soluções de aplicativos e softwares
                        inovadores. Nos mantemos atentos ao mercado, o qual está em constante evolução. 
                        Estamos focados em facilitar a vida das pessoas por meio de nossa 
                        paixão pelo desenvolvimento de software e busca por inovação.
                    </p>

                    <div class="w-24 h-10 mt-8 rounded-lg bg-blue-500 items-center justify-center text-white flex hover:scale-110 ease-in transition ">
                        <a {href} target="_blank">
                            Aplicativos
                        </a>
                    </div>
                    
                    
                </div>
            </div>

        </div>
    </div>
</section>





