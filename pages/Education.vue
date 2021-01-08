<template>
  <div id="app">
    <!--<el-carousel height="150px">
      <el-carousel-item v-for="item in banners" :key="item.id">
        <el-button class="banner_btn" @click="nav" :data-url="item.art_url">点击查看</el-button>
        <img class="banner_img" :src="item.img" />
      </el-carousel-item>
    </el-carousel>-->
    <div class="module_block" style="padding: 20px 0px">
      <div v-if="ques_num == 0">
        <strong>前端能力速测</strong>
        <el-button @click="next_ques" type="primary">开始测试</el-button>
      </div>
      <div v-if="ques_num == q.id" :key="q.id" v-for="q in questions">
        <span>{{ q.ques }}</span>
        <el-radio-group @change="selected_ques" v-model="current_val">
          <el-radio :key="op.value" v-for="op in q.options" :label="op.value">{{
            op.name
          }}</el-radio
          ><br />
        </el-radio-group>
        <el-button @click="prev_ques">上一题</el-button>
      </div>
      <div v-if="ques_num == questions.length + 1">完成答题</div>
    </div>
    <!-- single choice questions -->
    <!--<iframe src="https://org.modao.cc/app/347b56677628ca7e86477339dcb3f4161fc61759/embed/v2" allowTransparency="true" frameborder="0"></iframe>-->
    <div class="module_block">
      <el-row :key="course" v-for="course in courses">
        <a href="#contact_form">
          <el-col :span="10">
            <el-card shadow="always">
              <span>{{ course[0].name }}</span
              ><br /><span style="color: red">{{ course[0].price }}</span>
            </el-card>
          </el-col>
        </a>
        <a href="#contact_form">
          <el-col :span="10" :offset="4">
            <el-card shadow="always">
              <span>{{ course[1].name }}</span
              ><br /><span style="color: red">{{ course[1].price }}</span>
            </el-card>
          </el-col>
        </a>
      </el-row>
    </div>
    <!-- course list -->
    <el-row class="course_struct module_block">
      <el-tabs type="card">
        <el-tab-pane label="前端实战训练">
          <img
            src="../static/course_struct.png"
            style="width: 100%; height: 100%"
          />
        </el-tab-pane>
        <el-tab-pane label="前端进阶速成">
          <img
            src="../static/course_struct2.jpg"
            style="width: 100%; height: 100%"
          />
        </el-tab-pane>
      </el-tabs>
    </el-row>
    <!-- course content -->
    <el-row class="module_block">
      <el-form id="contact_form" ref="form" :model="form" label-width="100px">
        <el-form-item label="姓名">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="微信号">
          <el-input v-model="form.weixin" />
        </el-form-item>
        <el-form-item label="意向课程">
          <el-select v-model="form.course" placeholder="请选择你希望上的课程">
            <el-option label="课程一" value="course_01"></el-option>
            <el-option label="课程二" value="course_02"></el-option>
          </el-select>
        </el-form-item>
        <el-button @click="submit_form" type="primary">立刻报名</el-button>
      </el-form>
    </el-row>
    <!-- signup form -->
  </div>
</template>

<script>
export default {
  name: "Education",
  data() {
    return {
      banners: [
        {
          id: 0,
          img: "../static/banner01.jpeg",
          art_url: "https://web.shanbay.com/codetime/home/intro",
        },
        {
          id: 1,
          img: "../static/banner02.jpeg",
          art_url: "https://web.shanbay.com/codetime/home/intro",
        },
      ],
      form: {
        name: "",
        weixin: "",
        course: "",
      },
      courses: [
        [
          { name: "前端实战培训", price: "$3999" },
          { name: "模拟面试", price: "$199" },
        ],
        [
          { name: "前端快速进阶", price: "$1999" },
          { name: "简历更改", price: "$99" },
        ],
      ],
      questions: [
        {
          id: 1,
          ques: "first question",
          options: [
            { name: "option1", value: 1 },
            { name: "option2", value: 0 },
            { name: "option3", value: 1 },
          ],
        },
        {
          id: 2,
          ques: "second question",
          options: [
            { name: "option1", value: 1 },
            { name: "option2", value: 2 },
          ],
        },
      ],
      ques_num: 0,
      final_score: 0,
      current_val: 0,
    };
  },
  methods: {
    nav: function (e) {
      console.log(e);
    },
    submit_form: function () {
      console.log(this.form);
    },
    next_ques: function () {
      this.ques_num += 1;
    },
    prev_ques: function () {
      this.ques_num = Math.max(this.ques_num - 1, 0);
    },
    selected_ques: function () {
      this.ques_num += 1;
      if (this.current_val === 1) this.final_score += 1;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.banner_img {
  width: 100%;
  height: 100%;
}
.banner_btn {
  bottom: 20px;
  right: 20px;
  position: absolute;
}
.course_struct {
  width: 100%;
}
.module_block {
  margin: 10px;
}
</style>
