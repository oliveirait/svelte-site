<script lang="ts">
    //let image = "https://play-lh.googleusercontent.com/f09eDctsng262frDLHgQb8WO0CE8W9bkYYAkN9rh9C4SIqeqniL783aWmzRxCCZZejaA=w3840-h2160-rw"

    let href = "https://play.google.com/store/apps/dev?id=7575363218543079895"

    const image = "profile.png"

</script>



<section class="bg-white dark:bg-gray-900 ">
    <div class="items-center justify-center">

        <div class="flex flex-col justify-center w-full h-full px-6 py-10 items-center dark:bg-gray-900">

            <div class="mt-20 lg:flex lg:items-center bg-white dark:bg-gray-900">
                <img 
                    class="object-cover border-2 object-center w-[400px] h-[400px] rounded-full" 
                    src={image} 
                    alt="Logo Projeto Github"
                >

                <div class="mt-8 lg:px-10 lg:mt-0 flex flex-col justify-between gap-4">
                    <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                        Welcome to <p class="">Felipe's portfolio</p>
                    </h1>

                    <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                        Sou um profissional de Ti apaixonado por tecnologia. 
                        Atualmente trabalho como desenvolvedor de software. 
                        Estou trabalhando para me tornar um profissional melhor,
                        capaz de gerir grandes projetos, por isso, me dedico e estudo todos os dias 
                        incansavelmente para isso. Conheça-me melhor!
                    </p>

                    <div class="flex flex-row gap-2">
                        <div class="w-24 h-10 mt-8 rounded-lg bg-blue-700 items-center justify-center text-white flex hover:scale-110 ease-in transition ">
                            <a {href} target="_blank">
                                Play Store
                            </a>
                        </div>

                        <div class="w-24 h-10 mt-8 rounded-lg bg-blue-700 items-center justify-center text-white flex hover:scale-110 ease-in transition ">
                            <a href="https://github.com/oliveirait" target="_blank">
                                GitHub
                            </a>
                        </div>

                       <div class="w-24 h-10 mt-8 rounded-lg bg-blue-700 items-center justify-center text-white flex hover:scale-110 ease-in transition ">
                            <a href="https://www.linkedin.com/in/oliveirait/" target="_blank">
                                Linkedin
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    </div>
</section>





