<template>
  <!-- 客服岗的广告费 -->
  <div class="MoreSettings">
    <header class="header">
      <p></p>
      <div>
        <p @click="fanhui">
          <img class="fanhui" src="../../assets/img/left0.png" alt>
        </p>
        <p>{{ msg }}</p>
      </div>
    </header>
    <div class="senter">
      <p>
        <span>商家名称：</span>
        <input v-model="shangname" type="text" placeholder="请输入商家信息">
      </p>
      <p>
        <span>商家电话：</span>
        <input v-model="shangphone" type="text" placeholder="请输入商家电话">
      </p>
      <p>
        <span>广告位置：</span>
        <input v-model="weizhi" type="text" placeholder="请输入广告位置">
      </p>
      <p>
        <span>广告金额：</span>
        <input v-model="money" type="text" placeholder="请输入广告金额">
      </p>
      <div @click="start">
        <p>开始时间</p>
        <p>
          <span>{{ msg3 }}</span>
          <img src="../../assets/img/rightf.png" alt>
        </p>
      </div>
      <div @click="jiehsu">
        <p>结束时间</p>
        <p>
          <span>{{ msg2 }}</span>
          <img src="../../assets/img/rightf.png" alt>
        </p>
      </div>
      <div @click="py">
        <p>支付方式</p>
        <p>
          <span>{{ msg1 }}</span>
          <img src="../../assets/img/rightf.png" alt>
        </p>
      </div>
    </div>
    <!-- 支付 -->
    <van-popup v-model="show" position="bottom">
      <van-picker show-toolbar :columns="columns" @cancel="onCancel" @confirm="onConfirm"/>
    </van-popup>
    <!-- 开始时间 -->
    <van-popup v-model="show1" position="bottom">
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
    <!-- 结束时间 -->
    <van-popup v-model="show2" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :formatter="formatter"
        :max-date="maxDate"
        @cancel="timerg1"
        @confirm="timerover"
      />
    </van-popup>
    <button @click="tijiao">提交</button>
  </div>
</template>
<script>
import { Picker } from "vant";
import { Popup } from "vant";
import { DatetimePicker } from "vant";
export default {
  data() {
    return {
      msg: "广告费",
      columns: ["支付宝", "微信","现金"],
      show: false,
      // 支付方式
      msg1: "请选择",
      // 结束时间
      msg2: "请选择",
      // 开始时间
      msg3: "请选择",
      currentDate: "",
      minDate: new Date(2000, 1, 1),
      maxDate: new Date(),
      //   开始时间
      show1: false,
      //   结束时间
      show2: false,
      // 商家名称
      shangname:"",
      // 商家电话
      shangphone:"",
      // 广告位置
      weizhi:"",
      // 广告金额
      money:''
    };
  },
  methods: {
    // 返回按钮
    fanhui() {
      this.$router.go(-1);
    },
    // 支付方式的选择
    py() {
      this.show = true;
    },
    onCancel() {
      // 选择认为类型的取消事件
      this.show = false;
    },
    onConfirm(e) {
      // 选择认为类型的确认事件
      console.log(e);
      this.msg1 = e;
      this.show = false;
    },
    // 时间格式的转换
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
    // 开始时间选择的确认
    timerok(value) {
      var date = new Date(value);
      var date_value =
        date.getFullYear() +
        "年" +
        (date.getMonth() + 1) +
        "月" +
        date.getDate() +
        "日";
      this.msg3 = date_value;
      this.show1 = false;
    },
    // 结束时间的选着确认
    timerover(value) {
      var date = new Date(value);
      var date_value =
        date.getFullYear() +
        "年" +
        (date.getMonth() + 1) +
        "月" +
        date.getDate() +
        "日";
      this.msg2 = date_value;
      this.show2 = false;
    },
    // 开始时间的关闭
    timerg() {
      this.show1 = false;
    },
    // 开始时间的开启
    start() {
      this.show1 = true;
    },
    // 结束时间的关闭
    timerg1() {
      this.show2 = false;
    },
    // 结束时间的开启
    jiehsu() {
      this.show2 = true;
    },
    // 最后的提交
    tijiao(){
      this.http
        .post("/api/ad", {
          shop_name: this.shangname,
          shop_tel: this.shangphone,
          pay: this.msg1,
          start_at:this.msg3,
          end_at:this.msg2,
          ad_money:this.money,
          ad_position:this.weizhi
        })
        .then(res => {
          this.$toasted.error(res.message).goAway(1000);
          this.$router.go(-1);
        })
        .catch(res => {
          this.$toasted.error(res.message).goAway(1000);
        });
    }
  }
};
</script>
<style scoped>
.MoreSettings {
  height: 100%;
  width: 100%;
  background: #eeeeee;
}
.MoreSettings >>> .van-picker__cancel {
  color: #eab617;
}
.MoreSettings >>> .van-picker__confirm {
  color: #eab617;
}
.MoreSettings >>> .van-switch {
  position: absolute;
  right: 0.3rem;
  top: 0.3rem;
}
.header {
  height: 1.3rem;
  width: 100%;
  background: #ffffff;
}
.header > p {
  height: 0.42rem;
  width: 100%;
  background: #ffff;
}
.header > div {
  height: 0.88rem;
  width: 100%;
  line-height: 0.88rem;
  text-align: center;
  font-size: 0.3rem;
  font-weight: 500;
  position: relative;
}
.header > div > :first-child {
  float: left;
  position: absolute;
}
.fanhui {
  float: left;
  height: 0.8rem;
  width: 0.65rem;
  position: absolute;
  left: 0;
  top: 0.04rem;
}
.senter {
  background: #fff;
  padding: 0 0.3rem;
  margin-top: 0.2rem;
}
.senter > p {
  height: 0.98rem;
  background: #fff;
  line-height: 0.98rem;
  font-size: 0.32rem;
  border-bottom: 1px solid #ddd;
}
.senter > p > input {
  height: 0.6rem;
}
.senter > div {
  height: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  line-height: 1rem;
  font-size: 0.3rem;
  border-bottom: 1px solid #dddddd;
}
.senter > div > :first-child {
  color: #000;
}
.senter > div > :last-child {
  color: #999;
}
.senter > div > p > img {
  height: 0.8rem;
  width: 0.6rem;
}

button {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1rem;
  font-size: 0.3rem;
  color: #fff;
  background: #eab617;
}
</style>
