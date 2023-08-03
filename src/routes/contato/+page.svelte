<script lang="ts">
    import { send } from "@emailjs/browser";
    import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAIL_PUBLIC_KEY } from "./page";
    
    let loading = 'false'

    const formValues = {
        nome: '',
        email: '',
        mensagem: ''
    }

    function sendEmail (e: any) {
        e.preventDefault()
        
        if (formValues.nome === ''  || formValues.email === '' || formValues.mensagem === '') {
            alert('Por favor, preencha todos os campos')
            return
        }

        const objectEmail = {
            from_name: formValues.nome,
            message: formValues.mensagem,
            email: formValues.email
        }

        try {
            loading = 'true'
            send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, objectEmail, EMAIL_PUBLIC_KEY)

            formValues.nome = ''
            formValues.email = ''
            formValues.mensagem = ''

            setTimeout(() => {
                alert('Mensagem enviada com sucesso!')
            }, 1000)

        } catch {
            alert('Erro ao enviar email')
        
        } finally {
            setTimeout(() => {
                loading = 'false'
            }, 1500)
        }
        
    }



</script>


<section class="min-h-screen bg-white dark:bg-gray-900 lg:flex flex-col flex items-center py-6">
    <div class="flex flex-col justify-center w-full p-8 pt-0 lg:w-1/2 lg:px-12 xl:px-24 items-center mt-4">

        <h1 class="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">Entre em contato.</h1>
        <p class="my-4 text-gray-500 dark:text-gray-400">
            Envie sua dúvida que lhe responderemos
            o mais breve possível.
        </p>
    
        <form class="mt-4 p-8 border-2 rounded-xl">
            <div class="-mx-2 md:items-center md:flex">
                <div class="flex-1 px-2">
                    <main class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Nome completo</main>
                    <input type="text" bind:value={formValues.nome} placeholder="Seu nome" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div class="flex-1 px-2 mt-4 md:mt-0">
                    <main class="block mb-2 text-sm text-gray-600 dark:text-gray-200">E-mail</main>
                    <input type="email" bind:value={formValues.email} placeholder="email@exemplo.com" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>
            </div>

            <div class="w-full mt-4">
                <main class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Mensagem</main>
                <textarea bind:value={formValues.mensagem} class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Mensagem" /> 
            </div>

            <button on:click={sendEmail} class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                {#if loading === 'true'} 
                    Enviando mensagem...
                {:else}
                    Enviar
                {/if}
            </button>
        </form>
    </div>
</section>