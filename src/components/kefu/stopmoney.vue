<template>
  <!-- 客服岗的停车费 -->
  <div class="MoreSettings">
    <header class="header">
      <p></p>
      <div>
        <p @click="fanhui">
          <img class="fanhui" src="../../assets/img/left0.png" alt />
        </p>
        <p>{{ msg }}</p>
      </div>
    </header>
    <div class="senter">
      <p>
        <span>车牌号：</span>
        <input v-model="chepai" type="text" placeholder="请输入车牌号" />
      </p>
      <p>
        <span>停车时长：</span>
        <input v-model="timer" type="text" placeholder="请输入停车时长" />
      </p>
      <p>
        <span>支付金额：</span>
        <input v-model="money" type="text" placeholder="请输入支付金额" />
      </p>
      <div @click="py">
        <p>支付方式</p>
        <p>
          <span>{{ msg1 }}</span>
          <img src="../../assets/img/rightf.png" alt />
        </p>
      </div>
      <p class="last">
        <span>备注：</span>
        <textarea v-model="text" name placeholder="请输入相关备注" id cols="30" rows="10"></textarea>
      </p>
    </div>
    <van-popup v-model="show" position="bottom">
      <van-picker show-toolbar :columns="columns" @cancel="onCancel" @confirm="onConfirm" />
    </van-popup>
    <button @click="tijiao">提交</button>
  </div>
</template>
<script>
import { Picker } from "vant";
import { Popup } from "vant";
export default {
  data() {
    return {
      msg: "停车费",
      columns: ["支付宝", "微信"],
      show: false,
      msg1: "请选择",
      // 车牌号
      chepai: "",
      // 备注
      text: "",
      // 停车时长
      timer: "",
      // 停车飞金额
      money: ""
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
    // 最后的提交事件
    tijiao() {
      this.http
        .post("/api/park", {
          car_id: this.chepai,
          remark: this.text,
          pay: this.msg1,
          park_time: this.timer
        })
        .then(res => {
          this.$toasted.success(res.message).goAway(1000)
           this.$router.go(-1);
        }).catch(res =>{
        this.$toasted.error(res.message).goAway(1000)

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
.MoreSettings >>> .van-uploader__upload {
  height: 1rem;
  width: 1rem;
  overflow: hidden;
  margin: 0
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
.senter > .last {
  height: 2rem;
  line-height: 1;
  border: 0;
}
.senter > .last > textarea {
  height: 1rem;
  line-height: 1;
  margin-top: 0.6rem;
  width: 4rem;
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
