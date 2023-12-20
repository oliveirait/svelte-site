<script lang="ts">
    //let image = "https://play-lh.googleusercontent.com/f09eDctsng262frDLHgQb8WO0CE8W9bkYYAkN9rh9C4SIqeqniL783aWmzRxCCZZejaA=w3840-h2160-rw"
    let href = "https://play.google.com/store/apps/dev?id=7575363218543079895"
    const image = "profile.png"
</script>


<section class="bg-gray-800 text-white">
    <div class=" flex items-center justify-center">

        <div class="flex flex-col justify-center w-full px-6 py-10 items-center h-screen">
            <div class="flex flex-col items-center justify-center mt-16 md:mt-0 md:flex-row lg:items-center md:space-x-10 h-auto">
                <img 
                    class="object-cover border-2 object-center w-[400px] h-[400px] rounded-full" 
                    src={image} 
                    alt="Logo Projeto Github"
                >

                <div class="mt-8 md:mt-0 flex flex-col justify-between gap-4 text-center md:text-start">
                    <h1 class="text-2xl font-semibold  text-gray-100">
                        Welcome to <p class="">Felipe's portfolio</p>
                    </h1>

                    <p class="max-w-lg mt-6 text-gray-100 text-justify">
                        Sou um profissional de Ti apaixonado por tecnologia. 
                        Atualmente trabalho como desenvolvedor de software. 
                        Estou trabalhando para me tornar um profissional melhor,
                        capaz de gerir grandes projetos, por isso, me dedico e estudo todos os dias 
                        incansavelmente para isso. Conheça-me melhor!
                    </p>

                    <div class="flex flex-row gap-2 items-center justify-center md:justify-start">
                        <div class="w-24 h-10 mt-8 rounded-lg bg-gray-300 border border-black items-center justify-center text-gray-800 flex hover:scale-110 ease-in transition ">
                            <a {href} target="_blank">
                                Play Store
                            </a>
                        </div>

                        <div class="w-24 h-10 mt-8 rounded-lg bg-black border-gray-600 border items-center justify-center text-white flex hover:scale-110 ease-in transition ">
                            <a href="https://github.com/oliveirait" target="_blank">
                                GitHub
                            </a>
                        </div>

                       <div class="w-24 h-10 mt-8 rounded-lg bg-blue-800 border-gray-600 border items-center justify-center text-white flex hover:scale-110 ease-in transition ">
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





