<template>
  <div style="" class="md:-mt-64">
    <h1 class="title">{{ $t("logos.title") }}</h1>
    <div class="flex justify-center">
      <div class="containner">
        <div v-for="item in list" :key="item.id">
          <img :src="item.url" alt="" class="logo" />
          <p style="text-align: center; color: #718096; font-size: 14px">
            {{ item.title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Logos",
  data() {
    return {
      list: this.$t("logos.list"),
    };
  },
};
</script>

<style>
.title {
  font-size: 32px;
  text-align: center;
  /* letter-spacing: 0.75rem; */
  font-weight: 400;
  color: #718096;
}
.containner {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;
  width: 50%;
}
.logo {
  flex: auto;
  width: 100px;
  height: 100px;
  margin: 20px 20px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  flex-grow: 0;
  flex-shrink: 0;
}

@media (max-width: 600px) {
  .logo {
    margin: 10px 10px;
  }
  .containner {
    width: 75%;
  }
  .title {
    font-size: 20px;
  }
}
</style>

