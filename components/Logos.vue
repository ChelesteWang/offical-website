<template>
  <div>
    <h1 class="title">Partner Company</h1>
    <div class="flex justify-center">
      <div class="containner">
        <div v-for="item in list" :key="item.id">
          <img :src="item.url" alt="" class="logo" />
          <p style="text-align:center;color: #718096;font-size:14px">{{ item.title }}</p>
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
        {
          id: 1,
          title: "Top",
          url: "https://i.loli.net/2021/01/04/MUR9pgcFq4GQeT5.png",
        },
        {
          id: 2,
          title: "ebatte",
          url: "https://i.loli.net/2021/01/04/9FpSfAHmehkC3GB.png",
        },
        {
          id: 3,
          title: "Alibaba",
          url: "https://i.loli.net/2021/01/04/vXmP7fTxqCtHw9i.png",
        },
        {
          id: 4,
          title: "qingfan",
          url: "https://i.loli.net/2021/01/04/VlHFSbC8Dc9tOIU.png",
        },
        {
          id: 5,
          title: "aws",
          url: "https://i.loli.net/2021/01/04/WYsjql1u85yB6zd.png",
        },
        {
          id: 6,
          title: "Tencent",
          url: "https://i.loli.net/2021/01/04/UxqzDTa7uw39RQG.png",
        },
        {
          id: 7,
          title: "Future Bridge",
          url: "https://i.loli.net/2021/01/04/azYZVRSDpOoErCl.png",
        },
        {
          id: 8,
          title: "Stripe",
          url: "https://i.loli.net/2021/01/04/IF2gGDKTeOpq6m8.png",
        },
        {
          id: 9,
          title: "Tsinghua",
          url: "https://i.loli.net/2021/01/04/oLUp3Sd7WcmATOF.png",
        },
        {
          id: 10,
          title: "PayPal",
          url: "https://i.loli.net/2021/01/04/39GMrwlp1NesJEy.png",
        },
      ],
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
}
</style>

