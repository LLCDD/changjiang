<template>
  <div class="workorder">
    <!-- 经理岗的里的客服岗的回访日志 -->
    <header>
      <p></p>
      <div>
        <p @click="fanhui">
          <img src="../../../assets/img/left0.png" alt>
        </p>
        {{msg}}
      </div>
    </header>
    <!-- 中间内容 -->
    <div style=" padding-top: 1.3rem;">
      <van-dropdown-menu active-color="#eab617" :overlay="show">
        <van-dropdown-item title-class="down" title="统计" />
        <van-dropdown-item v-model="value2" :options="option2"/>
      </van-dropdown-menu>
    </div>
    <section>
      <p class="timer">
        <span>今天 13:45</span>
      </p>
      <!-- 审批的样式 -->
      <div class="sheng">
        <p>审批</p>
        <p>审批人 ：张杰</p>
        <p>审批类型 ：回访日志</p>
        <p>处理意见 ：请及时处理好</p>
      </div>
      <p class="timer">
        <span>今天 13:45</span>
      </p>
      <!-- 客服报修 -->
      <div class="xiu">
        <p>客服保修</p>
        <p>上报人员: 丽丽</p>
        <p>业主：和谐小区五单元308室</p>
        <p>手机号：15644566788</p>
        <p>报修类型：水电</p>
        <p>备注：水管漏水</p>
        <p>
          <span>图片：</span>
          <img src="../../../assets/img/baojie.png" alt>
          <img src="../../../assets/img/baojie.png" alt>
          <img src="../../../assets/img/baojie.png" alt>
        </p>
      </div>
      <p class="timer">
        <span>今天 13:45</span>
      </p>
      <div class="yezhu">
        <p>业主投诉</p>
        <p>业主：和谐小区</p>
        <p>手机号：18888888888</p>
        <p>投诉会员ID：3456</p>
        <p>投诉类型：水电</p>
        <p>投诉内容：水管漏水</p>
        <p>投诉时间：2019/2/19 10：56</p>
        <p>
          <span>图片：</span>
          <img src="../../../assets/img/baojie.png" alt>
        </p>
      </div>
      <p class="timer">
        <span>今天 13:45</span>
      </p>
      <div class="louguan">
        <p>楼管报修</p>
        <p>上报员工：安安</p>
        <p>报修小区：和谐小区四单元306室</p>
        <p>报修类型：消防</p>
        <p>备注：设备不合适</p>
        <p>
          <span>图片：</span>
          <img src="../../../assets/img/baojie.png" alt>
        </p>
      </div>
    </section>
  </div>
</template>
<script>
import { DropdownMenu, DropdownItem } from "vant";
// Vue.use(DropdownMenu).use(DropdownItem);
export default {
  data() {
    return {
      msg: "回访日志",
      value1: 0,
      show:false,
      value2: "a",
      option1: [{ text: "统计", value: 0 }],
      option2: [
        { text: "全部消息", value: "a" },
        { text: "未审批", value: "b" },
        { text: "已审批", value: "c" }
      ]
    };
  },
  methods: {
    fanhui() {
      this.$router.go(-1);
    }
  },
  watch:{
    value2(a,b){
      console.log(a,b)
      if(a == "a"){
        console.log("全部消息")
      }else if(a == "b"){
        console.log("未审批")
      }else if(a == "c"){
        console.log("已审批")
      }
    }
  }
};
</script>
<style scoped>
.workorder {
  height: 100%;
  width: 100%;
  background: red;
  overflow: hidden;
}
.workorder >>> .down::after {
  display: none
}
.workorder >>> .van-dropdown-menu {
  position: fixed;
  width: 100%;
  top: 1.3rem
}
.workorder >>> .van-icon-success {
  color: #eab617 !important
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
}
header > div > p > img {
  height: 0.8rem;
  width: 0.65rem;
  position: absolute;
  left: 0;
}
section {
  min-height: 100%;
  width: 100%;
  background: #eeeeee;
  padding-top: 1.3rem;
  overflow: hidden;
}
.timer {
  width: 100%;
  text-align: center;
  padding: 0.3rem 0;
}
.timer > span {
  display: inline-block;
  height: 0.48rem;
  line-height: 0.48rem;
  color: #fff;
  padding: 0 0.2rem;
  background: #d2d2d2;
  border-radius: 0.1rem;
}
.sheng {
  height: 2.3rem;
  width: 6.2rem;
  background: #ffffff;
  border-radius: 0.1rem;
  margin: 0 auto;
  border: 1px solid #dddddd;
}
.sheng > p {
  font-size: 0.26rem;
  padding-left: 0.34rem;
  font-size: 0.28rem;
  font-weight: 500;
  margin-bottom: 0.16rem;
}
.sheng > :first-child {
  font-size: 0.32rem;
  font-weight: 550;
  color: #eab617;
  padding: 0.3rem 0.34rem;
  margin: 0;
}
.xiu {
  width: 6.2rem;
  height: 4.26rem;
  background: #fff;
  border-radius: 0.1rem;
  margin: 0 auto;
  border: 1px solid #dddddd;
}
.xiu > p {
  padding-left: 0.3rem;
  margin-bottom: 0.1rem;
}
.xiu > :first-child {
  font-size: 0.32rem;
  font-weight: 550;
  color: #eab617;
  padding: 0.3rem 0.34rem;
  margin: 0;
}
.xiu > :last-child > span {
  float: left;
}
.xiu > :last-child > img {
  height: 1rem;
  width: 1rem;
  float: left;
  margin-right: 0.2rem;
}
.yezhu {
  min-height: 4rem;
  width: 6.2rem;
  background: #fff;
  border-radius: 0.1rem;
  border: 1px solid #dddddd;
  margin: 0 auto;
  overflow: hidden;
}
.yezhu > p {
  padding-left: 0.3rem;
  margin-bottom: 0.2rem;
}
.yezhu > :first-child {
  font-size: 0.32rem;
  font-weight: 550;
  color: #eab617;
  padding: 0.3rem 0.34rem;
  margin: 0;
}
.yezhu > :last-child > span {
  float: left;
}
.yezhu > :last-child > img {
  height: 1rem;
  width: 1rem;
  float: left;
  margin-bottom: 0.2rem;
}
.louguan {
  min-height: 3.9rem;
  width: 6.2rem;
  margin: 0 auto;
  background: #fff;
  border: 1px solid #dddddd;
  border-radius: 0.1rem;
  overflow: hidden;
}
.louguan > :first-child {
  font-size: 0.32rem;
  font-weight: 550;
  color: #eab617;
  padding: 0.3rem 0.34rem;
  margin: 0;
}
.louguan > p {
  padding-left: 0.3rem;
  margin-bottom: 0.1rem;
}
.louguan > :last-child > span {
  float: left;
}
.louguan > :last-child > img {
  float: left;
  height: 1rem;
  width: 1rem;
  margin-right: 0.2rem;
}
section > :last-child {
  margin-bottom: 1.4rem;
}
section {
  height: 90%;
  overflow: auto;
}

</style>


