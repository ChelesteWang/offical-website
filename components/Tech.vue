<template>
  <div class="md:-mt-64 tech-container">
      <h1 style="font-size: 32px; text-align: center; font-weight: 400; color: white; margin-top: 1rem;">{{$t("tech.title")}}</h1>
      <br/>
      <div class="flex justify-center">
        <div class="containner">
          <div class="cell-container" v-for="item in list" :key="item.id">
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
      list: [
      {
        "id": 1,
        "title": "5G+工业Ai图像检测",
        "content": "基于1600万像素的工业级摄像头对生产线缺陷无料进行检测，分析与工艺品评估。架构层采用5G+边缘计算结合的方式进行投产。Ai层面使用新的卷积来应对缺陷的不规则的情况比如可变形卷积，采用FPN提升小目标的检测能力，并引入Transform增强检测能力。",
        "url": require(`../assets/images/product/ai1.jpeg`)
      },
      {
        "id": 2,
        "title": "室内移动风险模型",
        "content": "用计算建模和算法手段帮助城市室内进行设计规划，是设计行业中新的发展方向与需求。为了帮助将不直观不可视的算法变得直观与可理解，我们开发了室内人群与室内地图的可视化工具。我们以广州机场作为基底，将基于粒子群与神经网络的模型模拟应用与其上，预测了各个地点的人流量，并将休息、安检、登机等方式考虑其中；并以此评估了人群踩踏风险和疫情感染的风险与损失。\n",
        "url": require(`../assets/images/product/risk-airport-project.gif`)
      },
      {
        "id": 3,
        "title": "智慧交通大数据模型",
        "content": "为了帮助城市交通规划的科学发展，我们特别为市政部门定制了城市模拟器。在模拟器中包含全球的地图数据，以及北京范围内的车辆数据模拟情况。我们使用分片读取/加载和远程过程调用加载的手段，解决了大数据情景下的数据加载与传输问题，并在处理大量数据的同时，控制好了每个小点的详情信息，把独立的鲜活个体，汇成了一片有意义的数据海洋。\n",
        "url": require(`../assets/images/product/city-project.gif`)
      },
      {
        "id": 4,
        "title": "行业订单OCR识别与业务分析",
        "content": "传统行业采购供应链环节中存在大量的非标准规格的订单数据，通过角度校对，OCR定位与置信度算法，自动组表，字段匹配，数据清洗等流程，让业务层能获得鲜度极高的标准化数据结构，并根据行业配置规则（比高温贴膜，电泳等工艺）进行数据层面的业务适配。",
        "url": require(`../assets/images/product/ocr.png`)
      }
    ]
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
