<template>
  <section class="h-full w-1/2 mx-auto">
    <div class="h-full flex flex-col items-center justify-center space-y-10">
      <div class="text-center space-y-2 cursor-default group">
        <h1 class="text-5xl text-gray-600 font-bold group-hover:text-indigo transition-colors duration-300">eQuota</h1>
        <h3 class="text-lg text-gray-600">
          Jira Clone Task by
          <a
            href="https://www.linkedin.com/in/ertuğrul-e-7732b3222/"
            target="_blank"
            class="text-indigo hover:text-indigo-700 transition-all duration-300"
            >Ertuğrul Elibol</a
          >
        </h3>
      </div>
      <div class="rounded-md overflow-hidden">
        <img
          class="w-full h-auto object-cover shadow-md rounded-md hover:scale-110 transition-all duration-300"
          src="https://i.imgur.com/oHudhbS.png"
          alt=""
          loading="lazy"
        />
      </div>
      <div
        class="text-justify text-gray-600 space-y-5 cursor-default transition-colors duration-300"
      >
        <p class="hover:text-gray-800">
          Günlerce süren emek, göz ve baş ağrısı, gerginlik ardından, verilen
          görevi nihayete erdirebildiğimi bildirmekten gurur duyuyorum. Görece
          zorlayıcı bir süreçti zira Vue 2 sürümü ve bazı paketler ve/veya
          teknolojilerle olan yetersiz kaynak ve uyum sorunlarından doğan birçok
          hatayla uğraştım. Bundan mütevellit, 10.06.2023 için planladığım proje
          bitiş süremi aştığımı üzülerek belirtmekteyim.
        </p>
        <p class="hover:text-gray-800">
          Proje kapsamında yaşanan birtakım hususlardan ötürü; proje
          açıklamasına, bir "notlar" bölümü eklemeyi uygun gördüm.
        </p>
        <p class="hover:text-gray-800">
          İkinci aşamayı geçebilmek için yaptığım bu proje; başarısız dahi olsa,
          sonuna kadar arkasındayım. Süreç içerisinde hem keyif aldım hem de
          hayli sinirlendim. Sizlerin huzunda; elimden geleni yaptığımı
          belirterek; değerlendirme için, projeyi sizlere sunuyorum.
        </p>
        <p>
          Saygılarımla, <br />
          <b>Ertuğrul Elibol.</b>
        </p>
      </div>
      <!--
        TODO: Button'u component'e çevir??
      -->
      <a href="https://github.com/aiWxby/equota-jira-clone" target="_blank">
        <button
          class="px-5 py-1.5 text-white rounded-md bg-gray-600 hover:bg-indigo border border-gray-700 hover:border-indigo-600 focus:ring focus:ring-offset-indigo-400 transition-colors duration-300"
        >
          Projeye Git
        </button>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
a {
  text-decoration: #475467 wavy underline;
}
</style>
