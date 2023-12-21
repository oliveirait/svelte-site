<script lang="ts">
   import { globalLang, globalDataLangPt, globalDataLangEn } from "../context/store";
   
    //let image = "https://play-lh.googleusercontent.com/f09eDctsng262frDLHgQb8WO0CE8W9bkYYAkN9rh9C4SIqeqniL783aWmzRxCCZZejaA=w3840-h2160-rw"
    const image = "profile.jpg"

    const linkButtons = [
        {title: "Play Store", src: "playstore_ico.jpg", url: "https://play.google.com/store/apps/dev?id=7575363218543079895"},
        {title: "GitHub", src: "github_ico.jpg", url: "https://github.com/oliveirait"},
        {title: "Linkedin", src: "linkedin_ico.jpg", url: "https://www.linkedin.com/in/oliveirait"}
    ]

</script>


<section class="bg-gray-800 text-white">

        <div class="flex flex-col justify-center w-full px-6 py-10 items-center">
            <div class="flex flex-col items-center justify-center mt-24 md:mt-0 md:flex-row lg:items-center md:space-x-10 h-auto space-y-6">
                <img 
                    class="border-2 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full shadow-2xl shadow-yellow-500" 
                    src={image} 
                    alt="Logo Projeto Github"
                >

                <div class="flex flex-col items-center justify-center gap-4 text-center md:text-start ">
                    <h1 class="text-2xl font-semibold text-gray-100 md:self-start">
                        <p>{$globalLang.lang === 'pt' ? $globalDataLangPt.home.title : $globalDataLangEn.home.title}</p>
                    </h1>

                    <p class="max-w-sm mt-6 p-2 md:p-0 text-gray-100 text-justify md:self-start">
                        {$globalLang.lang === 'pt' ? $globalDataLangPt.home.description : $globalDataLangEn.home.description}
                    </p>

                    <div class="flex flex-row gap-2 items-center justify-center md:justify-start self-center md:self-start"> 
                        {#each linkButtons as {title, src, url} }
                            <a href={url} target="_blank" class="w-28 min-w-24 md:max-w-32 md:min-w-24 h-10 mt-8 gap-2 rounded-lg bg-gray-300 border border-black items-center justify-center text-gray-800 flex hover:scale-110 ease-in transition ">
                                <img 
                                    class="object-cover border object-center w-[20px] h-[20px] md:w-[25px] md:h-[25px] rounded-full" 
                                    src={src}
                                    alt="Image_icon"
                                />
                                <p class="text-sm md:text-md "> {title} </p>
                            </a>
                        {/each}
                    </div>
                    
                </div>
            </div>

        </div>
    
</section>





