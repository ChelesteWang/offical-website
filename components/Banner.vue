<template>
  <div>
    <div class="w-full">
      <div
        class="flex items-center justify-center h-full w-full"
        style="
          background: url('https://i.loli.net/2020/12/29/3otLVcJzhxw2Ej6.png');
        "
      >
        <div class="flex w-full">
          <iframe
            width="100%"
            height="600px"
            src="https://sketchfab.com/models/d6521362b37b48e3a82bce4911409303/embed?autospin=0.2&amp;autostart=1&amp;preload=1&amp;ui_controls=0&amp;ui_infos=0&amp;ui_inspector=0&amp;ui_stop=0&amp;ui_theme=dark&amp;ui_watermark=0&amp;ui_watermark_link=0"
            frameborder="0"
            allow="autoplay; fullscreen; vr"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          />
        </div>

        <div class="text-center absolute">
          <h1
            class="text-white text-2xl font-semibold uppercase shadow-1xl md:text-3xl"
          >
            {{$t("banner.title")}}
          </h1>
          <!-- <a href="#s1">
            <button
              class="mt-8 px-5 py-3 bg-blue-600 text-white text-sm uppercase font-medium rounded-xl hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
              style="padding: 10px 15px margin-top:20px"
            >
              Begin to know
            </button></a
          > -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>
