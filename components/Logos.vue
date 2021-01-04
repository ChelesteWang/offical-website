<template>
  <div class="">
    <div>
      <h1 style="font-size: 32px; text-align: center">合作公司</h1>
      <div class="flex justify-center">
        <div class="containner">
          <img
            v-for="item in list"
            :key="item.id"
            :src="item.url"
            alt=""
            class="logo"
          />
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
      list: [
        { id: 1, url: "https://i.loli.net/2021/01/04/MUR9pgcFq4GQeT5.png" },
        { id: 2, url: "https://i.loli.net/2021/01/04/9FpSfAHmehkC3GB.png" },
        { id: 3, url: "https://i.loli.net/2021/01/04/vXmP7fTxqCtHw9i.png" },
        { id: 4, url: "https://i.loli.net/2021/01/04/VlHFSbC8Dc9tOIU.png" },
        { id: 5, url: "https://i.loli.net/2021/01/04/WYsjql1u85yB6zd.png" },
        { id: 6, url: "https://i.loli.net/2021/01/04/UxqzDTa7uw39RQG.png" },
        { id: 7, url: "https://i.loli.net/2021/01/04/azYZVRSDpOoErCl.png" },
        { id: 8, url: "https://i.loli.net/2021/01/04/IF2gGDKTeOpq6m8.png" },
        { id: 9, url: "https://i.loli.net/2021/01/04/oLUp3Sd7WcmATOF.png" },
        { id: 10, url: "https://i.loli.net/2021/01/04/39GMrwlp1NesJEy.png" },
      ],
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
}
.logo {
  /* flex: 20%; */
  width: 150px;
  height: 150px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  flex-grow: 0;
  flex-shrink: 0;
  margin: 20px 20px;
}
</style>

