<template>
  <!-- 钉钉 考勤打卡统计 -->
  <!-- DropdownMenu   多选的下拉事件 -->
  <div class="dingding">
    <header>
      <p></p>
      <div>
        <p @click="fanhui">
          <img src="../../assets/img/left0.png" alt>
        </p>
        {{msg}}
      </div>
    </header>
    <!-- 打卡的个人信息简单信息 -->
    <div class="toux">
      <!-- 显示头像 -->
      <p>
        <img src="../../assets/img/xiuday.png" alt>
      </p>
      <!-- 显示姓名和考勤日期 -->
      <div>
        <p>
          <span>{{ name }}</span>
          <span @click="confirmy">{{ time }} ⬇</span>
        </p>
        <p>
          <span @click="kaoqin" v-if="gui">考勤组：考勤 (查看规则)</span>
          <span v-else>考勤组：考勤 </span>
        </p>
      </div>
    </div>
    <!-- 中间内容 -->
    <section class="section">
      <van-collapse v-model="activeNames">
        <van-collapse-item title="出勤天数" name="1" :value="counts.count.days+ '次'">
          <p v-for="(item,index) in counts.days" :key="index">
            {{ item }}
          </p>
        </van-collapse-item>
        <van-collapse-item title="休息天数" name="2" :value="counts.count.rest+ '次'">
          <p v-for="(item,index) in counts.rest" :key="index">
            {{ item }}
          </p>
        </van-collapse-item>
        <van-collapse-item title="早退" name="3" :value="counts.count.early+ '次'">
          <p v-for="(item,index) in counts.early" :key="index">       
            <span>{{ item[0] }}</span>
            <span>{{ item[1] }}</span>
          </p>
        </van-collapse-item>
        <van-collapse-item title="迟到" name="4" :value="counts.count.late+ '次'">
          <p v-for="(item,index) in counts.late" :key="index">
            <span>{{ item[0] }}</span>
            <span>{{ item[1] }}</span>
          </p>
        </van-collapse-item>
        <van-collapse-item title="矿工" :value-class="{ color1 : counts.count.absence > 1 }" name="5" :value="counts.count.absence+ '次'">
          <p v-for="(item,index) in counts.absence" :key="index">
            {{ item }}
          </p>
        </van-collapse-item>
      </van-collapse>
    </section>
    <!-- 时间的选择 -->
    <van-popup v-model="xiaoqus" position="bottom">
      <van-picker show-toolbar :columns="xiaoqu" @cancel="onCancel1" @confirm="onConfirm1"/>
    </van-popup>
    <!-- 底部 -->
    <footer>
      <p>
        <img @click="daka" src="../../assets/img/nonn.png" alt>
        <span>打卡</span>
      </p>
      <p>
        <img src="../../assets/img/yell.png" alt>
        <span>统计</span>
      </p>
    </footer>
  </div>
</template>

<script>
import { Collapse, CollapseItem } from "vant";
import { Picker } from "vant";
import { Popup } from "vant";
export default {
  data() {
    return {
      msg: "考勤打卡",
      name: localStorage.getItem('username'),
      time: "2019.04.20",
      shang: "8:30",
      xia: "17:30",
      //   打卡状态的判断
      show: 1,
      //   判断是上班还是下班
      shangban: 0,
      showf: false,
      showf1: false,
      // 下班异常的样式 是否出现
      showy: false,
      activeNames: [],
      list: ["1", "2"],
      xiaoqu: ["2019年1月", "2019年1月", "2019年1月", "2019年1月", "2019年1月"],
      //   选择的显示和隐藏
      xiaoqus: false,
      // 考勤规则
      gui:false,
      // 存打卡的次数
      counts:{}
    };
  },
  mounted() {
    this.http.get('/api/sign/count').then(res =>{
      console.log(res)
      this.counts = res.data
      this.time = res.data.count.date
    })
  },
  methods: {
    //   返回的事件
    fanhui() {
      this.$router.go(-1);
    },
    // 去打卡的页面
    daka() {
      this.$router.replace({ name: "dingding" });
    },
    // 时间选择的值
    onChange(picker, value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    // 时间选择的取消事件
    onCancel1() {
      this.xiaoqus = false;
    },
    // 开启时间选择
    confirmy() {
      this.xiaoqus = true;
    },
    // 确定事件
    onConfirm1(e) {
      console.log(e);
      this.xiaoqus = false;
    }
  }
};
</script>

<style scoped>
.dingding {
  height: 100%;
  width: 100%;
  background: #fff;
}
header {
  height: 1.3rem;
  background: #fff;
  width: 100%;
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
.toux {
  height: 1rem;
  width: 100%;
  padding: 0 0.3rem;
  background: #fff;
  padding-top: 0.14rem;
  border-bottom: 1px solid #dddddd;
}
.toux > p {
  height: 0.7rem;
  width: 0.7rem;
  border-radius: 50%;
  background: #dddddd;
  float: left;
}
.toux > p > img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.toux > div {
  float: left;
  margin-left: 0.4rem;
  height: 100%;
  width: 80%;
}
.toux > div > :last-child {
  font-size: 0.24rem;
  color: #f2c133;
}
.toux > div > :first-child {
  margin-top: 0.1rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.34rem;
  font-weight: 500;
}
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1rem;
  background: #ffffff;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-around;
}
footer > p {
  text-align: center;
}
footer > p > img {
  height: 0.5rem;
  margin-top: 0.1rem
}
footer > p > span {
  display: block;
  font-size: 0.22rem;
}
.section {
  height: 75%;
  /* background: red; */
  overflow-x: hidden;
  overflow-y: auto
}
.dingding >>> .color1 {
  color: red;
}
.dingding >>> .van-picker__cancel {
  color: #eab617;
}
.dingding >>> .van-picker__confirm {
  color: #eab617;
}
.dingding >>> .van-collapse-item__content {
  padding: 0;
}
.dingding >>> .van-collapse-item__content > p {
  height: 0.9rem;
  border-bottom: 1px solid #dddddd;
  width: 100%;
  background: #eeeeee;
  line-height: 0.9rem;
  font-size: 0.24rem;
  padding: 0 0.3rem;
  color: #000;
}
.dingding >>> .van-collapse-item__content > p > span {
  display: block;
  line-height: 1;
  padding-top: 0.1rem
}
</style>
