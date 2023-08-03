<script lang="ts">
    let image = "https://play-lh.googleusercontent.com/RHFxPOhb3IqgaC1OFve1yMXfi2DoczwmXU4rPEMeWqK7FSiCJ8qNfLl5i7vROxhGG8s=w3840-h2160-rw"

    let href = "https://play.google.com/store/apps/dev?id=7575363218543079895"

</script>



<section class="bg-white dark:bg-gray-900">
    <div class="items-center justify-center">

        <div class="flex flex-col justify-center w-full px-6 py-10 items-center dark:bg-gray-900">
            <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                Oliveira <span class="text-blue-500">Code Lab</span> 
            </h1>

            <div class="mt-10 lg:mt-20 lg:flex lg:items-center bg-white dark:bg-gray-900">
                <img class="object-cover border-2 object-center w-full lg:w-[32rem] h-96 rounded-full" src={image} alt="">

                <div class="mt-8 lg:px-10 lg:mt-0  flex flex-col justify-between gap-4">
                    <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                        Never stop learning
                    </h1>

                    <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                        Sou Felipe, criador da Code Lab. Atraves dela, busco expressar uma das minhas atividades favoritas: 
                        Criar e pensar em solucoes que facilitem nossa vida.
                        Aqui na Oliveira Code Lab, somos apaixonados pelo que pelo que fazemos, comprometidos e sempre atentos ao mercado, estamos em constante evolução.
                    </p>

                    <div class="w-24 h-10 mt-8 rounded-lg bg-blue-500 items-center justify-center text-white flex hover:scale-110 ease-in transition">
                        <a {href} target="_blank">
                            Aplicativos
                        </a>
                    </div>
                    
                    
                </div>
            </div>

        </div>
    </div>
</section>





