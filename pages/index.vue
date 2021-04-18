<template>
  <div>
    <Header @update="changeLanguage" @load="loadLanguage"></Header>
    <Banner></Banner>
    <div class="w-full" style="height: 50px"></div>
    <Info id="about-us" />
    <div class="w-full" style="height: 80px"></div>
    <Tech id="portfolio" :key="time" />
    <Logos />
    <div class="w-full" style="height: 80px"></div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Header from "../components/Header";
import Banner from "../components/Banner";
import Info from "../components/Info";
import Tech from "../components/Tech";
import Footer from "../components/Footer";
import Logos from "../components/Logos";
export default {
  name: "Index",
  components: {
    Header,
    Banner,
    Info,
    Logos,
    Tech
  },
  data () {
    return {
      time: ''
    }
  },
  methods: {
    changeLanguage() {
      let locale = this.$i18n.locale;
      locale === "zh" ? (this.$i18n.locale = "en") : (this.$i18n.locale = "zh");
      locale === "zh" ? (localStorage.setItem("language", "en")) : (localStorage.setItem("language", "zh"));
      this.time = new Date().getTime()
    },
    loadLanguage: function () {
      let language = localStorage.getItem("language");
      if(language == null)
      {
        localStorage.setItem("language", "zh");
        language = "zh";
      }
      this.$i18n.locale = language;
      this.time = new Date().getTime()
    }
  }
};
</script>


