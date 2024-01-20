<script>
  import { globalLang } from "../../context/store"

  const year = new Date().getFullYear()

  const copyEn = `© Copyright ${year}. All rights reserved.`
  const copyPt = `© Copyright ${year}. Todos os direitos reservados.`

  
</script>


<footer class="flex items-center shadow-lg bg-gray-800 font-medium text-white  w-full h-16">
    <div class="container flex items-center justify-center p-6 mx-auto space-y-4  w-full">
        <p class="text-sm text-gray-300">{$globalLang.lang === 'pt' ? copyPt : copyEn}</p>
    </div>
</footer>