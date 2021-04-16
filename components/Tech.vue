<template>
  <div class="md:-mt-64 tech-container">
      <h1 style="font-size: 32px; text-align: center; font-weight: 400; color: white; margin-top: 1rem;">{{$t("tech.title")}}</h1>
      <br/>
      <div class="flex justify-center">
        <div class="containner">
          <div class="cell-container" v-for="item in list" :key="item.lebel">
            <h2 class="cell-title">{{item.title}}</h2>
            <img :src="item.url" class="tech-image"/>
            <div class="cell-content">
              {{item.content}}
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Tech",
  data() {
    return {
      list: this.$t("tech.list")
    };
  },
};
</script>

<style>
.containner {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;
  width: 50%;
}

.tech-image {
  flex: auto;
  width: 300px;
  height: 200px;
  flex-grow: 0;
  flex-shrink: 0;
  margin-top: 10px;
}

.tech-container {
  background-color: #29292E;
  min-height: 500px;
  padding: 20px;
}
.cell-container {
  border-radius: 15px;
  background-color: #3B3B3B;
  padding: 30px;
  margin: 15px;
  align-items: center;
  min-width: 300px;
}
.cell-title {
  font-size: 24px; font-weight: 400; color: white;
}
.cell-content {
  max-width: 310px;
  margin-top: 10px;
  color: white;
  font: 18px "Poppins", "Nunito Sans", "Montserrat", sans-serif;
}
</style>
