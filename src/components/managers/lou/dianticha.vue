<template>
  <div class="workorder">
    <!-- 经理岗的楼管岗的电梯巡查 -->
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
        <van-dropdown-item v-model="value1" @open="tongji" title-class="down" title="统计"/>
        <van-dropdown-item v-model="value2" @open="fatongji" :options="option2"/>
      </van-dropdown-menu>
    </div>
    <section>
      <div v-if="bool == 0" v-for="(index) in 3" :key="index">
        <p class="timer">
          <span>今天 13:45</span>
        </p>
        <!-- 审批的样式 -->
        <div class="sheng">
          <p>上报员工：丽丽</p>
          <div v-for="(index) in 1" :key="index">
            <p>是否故障：是</p>
            <p>备注：无</p>
            <p>
              <strong>图片：</strong>
              <span v-for="(index) in 3" :key="index"></span>
            </p>
          </div>
          <p @click="shenpi">已审批</p>
        </div>
        <p class="timer">
          <span>今天 13:45</span>
        </p>
        <!-- 审批的样式 -->
        <div class="sheng">
          <p>上报员工：丽丽</p>
          <div v-for="(index) in 1" :key="index">
            <p>是否故障：是</p>
            <p>备注：无</p>
            <p>
              <strong>图片：</strong>
              <span v-for="(index) in 3" :key="index"></span>
            </p>
          </div>
          <p style="color:#eab617" @click="shenpi">审批</p>
        </div>
      </div>
      <div v-if="bool == 1">
        <van-collapse v-model="activeNames" @change="change">
          <van-collapse-item :title="valuey" name="1">
            <p class="cnetes">
              <span>丽丽</span>
              <span>515151</span>
            </p>
          </van-collapse-item>
        </van-collapse>
      </div>
    </section>
    <!-- 时间的选择 -->
    <van-popup v-model="timer" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :formatter="formatter"
        :max-date="maxDate"
        @cancel="timerg"
        @confirm="timerok"
      />
    </van-popup>
  </div>
</template>
<script>
import { DropdownMenu, DropdownItem } from "vant";
import { Collapse, CollapseItem } from "vant";
import { DatetimePicker } from "vant";
// Vue.use(DropdownMenu).use(DropdownItem);
export default {
  data() {
    return {
      msg: "电梯巡查",
      value1: 0,
      show: false,
      value2: "a",
      option1: [{ text: "统计", value: 0 }],
      option2: [
        { text: "全部消息", value: "a" },
        { text: "未审批", value: "b" },
        { text: "已审批", value: "c" }
      ],
      bool: 0,
      activeNames: ["1"],
      valuey: "12121212",
      minDate: new Date(2000, 1, 1),
      maxDate: new Date(),
      timer: false,
      currentDate: ""
    };
  },
  methods: {
    fanhui() {
      this.$router.go(-1);
    },
    // 页面的统计
    tongji() {
      this.bool = 1;
      console.log("23434");
    },
    // 审批
    fatongji() {
      this.bool = 0;
    },
    // 消息的审批
    shenpi() {
      this.$router.push("/diantisheng");
    },
    // 时间的选择
    change() {
      this.timer = true;
    },
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      } else if (type === "day") {
        return `${value}日`;
      }
      return value;
    },
    // 时间的关闭
    timerg() {
      this.timer = false;
    },
    // 时间的开始
    timerok(value) {
      var date = new Date(value);
      var date_value =
        date.getFullYear() +
        "年" +
        (date.getMonth() + 1) +
        "月" +
        date.getDate() +
        "日";
      this.valuey = date_value;
      this.timer = false;
      this.activeNames = ["1"];
    }
  },
  watch: {
    value2(a, b) {
      console.log(a, b);
      if (a == "a") {
        this.bool = 0;
        console.log("全部消息");
      } else if (a == "b") {
        this.bool = 0;
        console.log("未审批");
      } else if (a == "c") {
        this.bool = 0;
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
.workorder >>> .van-picker__cancel {
  color: #eab617;
}
.workorder >>> .van-picker__confirm {
  color: #eab617;
}
.workorder >>> .down::after {
  display: none;
}
/* .workorder >>> .van-dropdown-menu {
  position: fixed;
  width: 100%;
  top: 1.3rem;
} */
.workorder >>> .van-dropdown-menu {
  /* position: fixed; */
  width: 100%;
  height:1rem;
  /* top: 1.3rem; */
  /* background: red; */
  /* display: block */
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
  /* padding-top: 1.3rem; */
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
  min-height: 2.3rem;
  width: 6.2rem;
  background: #ffffff;
  border-radius: 0.1rem;
  margin: 0 auto;
  border: 1px solid #dddddd;
  padding: 0.3rem 0.3rem 0 0.3rem;
}
.sheng > :last-child {
  height: 0.86rem;
  width: 100%;
  line-height: 0.86rem;
  text-align: center;
  margin-top: 0.3rem;
  border-top: 1px solid #dddddd;
}
.sheng > p {
  font-size: 0.34rem;
  font-weight: 500;
}
.sheng > div {
  margin-top: 0.26rem;
}
.sheng > div > p {
  margin-top: 0.04rem;
  font-size: 0.28rem;
}
.sheng > div > p > strong {
  float: left;
}
.sheng > div > p > span {
  display: inline-block;
  height: 0.6rem;
  width: 0.6rem;
  background: red;
  margin-right: 0.1rem;
}
section > :last-child {
  margin-bottom: 2.4rem;
}
section {
  height: 90%;
  overflow: auto;
}
/* 统计的样式开始 */
.workorder >>> .van-collapse-item__content {
  padding: 0;
}
.cnetes {
  height: 1.12rem;
  line-height: 1.12rem;
  padding: 0 0.3rem;
  display: flex;
  justify-content: space-between;
  color: #000;
  font-size: 0.3rem;
}
</style>


