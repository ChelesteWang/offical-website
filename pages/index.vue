<template>
  <div>
    <Header></Header>
    <Banner></Banner>
    <div style="height:1000px"></div>
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import Banner from "../components/Banner"
export default {
  name: "Index",
  components: {
    Header,
    Banner
  },
};
</script>


