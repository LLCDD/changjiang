<template>
  <!-- 客服岗的祝福提醒 -->
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
    <div class="phone">
      <span>业主电话：</span>
      <input @click="yehzu" v-model="phone" type="text" placeholder="请输入业主号码" />
    </div>
    <div class="nr">
      <span>内容：</span>
      <textarea placeholder="请输入给业主发送的信息内容" v-model="text" cols="30" rows="10"></textarea>
    </div>
    <button @click="fasong">发送</button>
  </div>
</template>
<script>
import { Switch } from "vant";
export default {
  data() {
    return {
      msg: "祝福提醒",
      checked: true,
      checked1: false,
      phone: this.$store.state.yezhuid.yuliu_tel1,
      text: ""
    };
  },
  methods: {
    yehzu() {
      this.$router.push("/yezhucha");
    },
    // 返回按钮
    fanhui() {
      this.$router.go(-1);
    },
    fasong() {
      this.http
        .post("/api/bless", { mobile: this.phone, remark: this.text })
        .then(res => {
          this.$toasted.success(res.message).goAway(1000);
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
.phone {
  height: 1rem;
  line-height: 1rem;
  background: #fff;
  padding: 0 0.3rem;
  margin-top: 0.2rem;
  font-size: 0.3rem;
}
.phone > input {
  height: 0.6rem;
}
button {
  height: 1rem;
  width: 100%;
  background: #eab617;
  font-size: 0.3rem;
  color: #fff;
  position: fixed;
  bottom: 0;
}
.nr {
  margin-top: 0.2rem;
  background: #fff;
  padding-top: 0.3rem;
  font-size: 0.3rem;
  padding-left: 0.3rem;
}
.nr > span {
  float: left;
}
.nr > textarea {
  height: 2rem;
}
</style>
