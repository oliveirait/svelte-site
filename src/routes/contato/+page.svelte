<script lang="ts">
    import { globalLang, globalDataLangPt, globalDataLangEn } from "../../context/store";
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

            alert('Mensagem enviada com sucesso!')
            

        } catch {
            alert('Erro ao enviar email')
        
        } finally {
            loading = 'false'
        }
    }


</script>

<section class="bg-gray-800 mt-28 text-white  md:mt-[-28px]">
    <div class="flex flex-col md:px-6 py-10 mx-auto items-center justify-start">
        <h1 class="text-2xl font-semibold text-center capitalize md:text-3xl">{$globalLang.lang === 'pt' ? $globalDataLangPt.contact.title : $globalDataLangEn.contact.title}</h1>
        <h1 class="text-sm  mt-2 text-center ">
            {$globalLang.lang === 'pt' ? $globalDataLangPt.contact.description : $globalDataLangEn.contact.description}
        </h1>
    </div>
    <div class="flex flex-col items-center justify-start mx-8 md:m-0  ">
        <form class="p-8 border-2 rounded-xl text-gray-100 w-[320px] md:w-full md:mx-20 ">
            <div class="">
                <div class="flex-1 mt-2 ">
                    <main class=" mb-2 text-sm">{$globalLang.lang === 'pt' ? $globalDataLangPt.contact.form.name : $globalDataLangEn.contact.form.name}</main>
                    <input type="text" bind:value={formValues.nome} placeholder="Seu nome" class=" w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900  dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div> 

                <div class="flex-1 mt-2">
                    <main class=" mb-2 text-sm  ">{$globalLang.lang === 'pt' ? $globalDataLangPt.contact.form.email : $globalDataLangEn.contact.form.email}</main>
                    <input type="email" bind:value={formValues.email} placeholder="email@exemplo.com" class=" w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900  dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>
            </div>

            <div class="w-full mt-4">
                <main class=" mb-2 text-sm  ">{$globalLang.lang === 'pt' ? $globalDataLangPt.contact.form.message : $globalDataLangEn.contact.form.message}</main>
                <textarea bind:value={formValues.mensagem} class=" w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900  dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Mensagem" /> 
            </div>

            <button on:click={sendEmail} class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                {#if loading === 'true'} 
                    {$globalLang.lang === 'pt' ? $globalDataLangPt.contact.form.sending : $globalDataLangEn.contact.form.sending}
                {:else}
                    {$globalLang.lang === 'pt' ? $globalDataLangPt.contact.form.sendButton : $globalDataLangEn.contact.form.sendButton}
                {/if}
            </button>
        </form>
    </div>
</section>