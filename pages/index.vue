<template>
  <div>
    <Header></Header>
    <Banner></Banner>
    <div class="w-full" style="height: 50px"></div>
    <Info id="about-us" />
    <div class="w-full" style="height: 80px"></div>
    <Tech id="portfolio" />
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
};
</script>


