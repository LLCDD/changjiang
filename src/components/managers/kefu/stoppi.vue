<template>
  <div class="workorder">
    <!-- 经理岗的里的客服岗的停车日志的审批 -->
    <header>
      <p></p>
      <div>
        <p @click="fanhui">
          <img src="../../../assets/img/left0.png" alt>
        </p>
        {{msg}}
      </div>
    </header>
    <!-- 中间内容
    <div style=" padding-top: 1.3rem;">
      <van-dropdown-menu active-color="#eab617" :overlay="show">
        <van-dropdown-item v-model="value1" @open="tongji" title-class="down" title="统计"/>
        <van-dropdown-item v-model="value2" :options="option2"/>
      </van-dropdown-menu>
    </div>-->
    <section class="section">
      <div>
        <p>登记员工：{{ item.deteail.user.name }}</p>
        <div v-for="(index) in 1" :key="index">
          <p>车牌号：豫S73058</p>
          <p>停车时长：3小时</p>
          <p>支付金额：15元</p>
          <p>支付方式：支付宝</p>
          <p>备注：停车</p>
        </div>
      </div>
      <div class="tet">
        <p>处理意见：</p>
        <textarea :v-model="value" cols="30" rows="10" placeholder="请输入您的处理意见"></textarea>
      </div>
    </section>
    <div class="fa" v-if="value =='' ">发送</div>
  </div>
</template>
<script>
import { DropdownMenu, DropdownItem } from "vant";
// Vue.use(DropdownMenu).use(DropdownItem);
export default {
  data() {
    return {
      msg: "审批",
      value: "世界i年底发的"
    };
  },
  mounted(){
    this.http.get('/api/notices/'+this.$route.params.id).then(res =>{
      console.log(res)
    })
  },
  methods: {
    fanhui() {
      this.$router.go(-1);
    },
    // 页面的统计
    tongji() {
      console.log("23434");
    },
    // 消息的审批
    shenpi() {
      console.log("34");
    }
  },
  watch: {
    value2(a, b) {
      console.log(a, b);
      if (a == "a") {
        console.log("全部消息");
      } else if (a == "b") {
        console.log("未审批");
      } else if (a == "c") {
        console.log("已审批");
      }
    }
  }
};
</script>
<style scoped>
.workorder {
  height: 100%;
  width: 100%;
  /* background: red; */
  overflow: hidden;
}
.workorder >>> .down::after {
  display: none;
}
.workorder >>> .van-dropdown-menu {
  position: fixed;
  width: 100%;
  top: 1.3rem;
}
.workorder >>> .van-icon-success {
  color: #eab617 !important;
}
header {
  height: 1.3rem;
  background: #fff;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
}
header > p {
  height: 0.4rem;
  width: 100%;
}
header > div {
  height: 0.88rem;
  width: 100%;
  line-height: 0.88rem;
  text-align: center;
  position: relative;
  font-size: 0.3rem;
}
header > div > p > img {
  height: 0.8rem;
  width: 0.65rem;
  position: absolute;
  left: 0;
}
.section {
  min-height: 100%;
  width: 100%;
  background: #eeeeee;
  padding-top: 1.3rem;
  overflow: hidden;
}
.section > div {
  background: #fff;
  margin-top: 0.1rem;
  width: 100%;
}
.section > div > div {
  padding: 0 0.3rem;
  padding-bottom: 0.2rem;
}
.section > div > div > p {
  margin-bottom: 0.04rem;
}
.section > div > :first-child {
  font-size: 0.34rem;
  font-weight: 500;
  padding: 0.3rem;
}
.section > div > p {
  padding: 0 0.3rem;
}
.section {
  height: 90%;
  overflow: auto;
}
.section > .tet {
  margin-top: 0.2rem;
  height: 2rem;
}
.section > .tet > textarea {
  height: 1rem;
  margin-left: 0.3rem;
  width: 80%;
}
.fa {
  height: 1rem;
  width: 100%;
  background: #eab617;
  position: fixed;
  bottom: 0;
  text-align: center;
  line-height: 1rem;
  font-size: 0.34rem;
  color: #fff;
}
</style>


