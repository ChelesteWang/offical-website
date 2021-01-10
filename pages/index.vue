<template>
  <div>
    <Header></Header>
    <Banner></Banner>
    <div class="w-full" style="height: 50px"></div>
    <Info id="about-us" />
    <div class="w-full" style="height: 80px"></div>
    <Logos />
    <div class="w-full" style="height: 80px"></div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Header from "../components/Header";
import Banner from "../components/Banner";
import Info from "../components/Info";
import Footer from "../components/Footer";
import Logos from "../components/Logos";
export default {
  name: "Index",
  components: {
    Header,
    Banner,
    Info,
    Logos,
  },
};
</script>


