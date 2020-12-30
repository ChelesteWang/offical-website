<template>
  <div>
    <Header></Header>
    <Banner></Banner>
    <div class="w-full" style="height: 80px"></div>
    <div id="s1">
      <Info></Info>
      <div class="w-full" style="height: 80px"></div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import Banner from "../components/Banner";
import Info from "../components/Info";
import Footer from "../components/Footer";
export default {
  name: "Index",
  components: {
    Header,
    Banner,
    Info,
  },
};
</script>


