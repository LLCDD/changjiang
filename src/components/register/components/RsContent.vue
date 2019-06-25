<template>
  <!-- <div class="entry">
           <input type="text" placeholder="请输入手机号" v-model="phone">
           <input type="text" placeholder="请输入昵称" v-model="username">
           <p>
             <input type="text" placeholder="输入手机验证码" v-model="phone_code">
             <span v-show="inentify" @click="send">发送验证码</span>
             <span v-show="timer">{{count}}s</span>
           </p>
           <input type="password" placeholder="请输入密码" v-model="password">
           <input type="password" placeholder="请再次输入密码" v-model="password_confirmation">
           <input type="password" placeholder="输入支付密码" v-model="security">
           <input type="password" placeholder="请再次输入支付密码" v-model="security_confirmation">
           <input type="text" placeholder="邀请码:888888" v-model="recommend">
        </div>
        <div class="foot" @click="register">
             立即注册
  </div>-->
  <div class="regiset">
    <div class="put" style="  margin-top: 0.32rem;">
      <img class="img" src="../../../assets/img/coupons-h.png" alt>
      <input type="text" placeholder="请输入昵称" v-model="username">
    </div>
    <div class="put">
      <img class="img" src="../../../assets/img/coupons-h.png" alt>
      <input type="text" placeholder="请输入手机号" v-model="phone">
    </div>
    <div class="put">
      <img class="img" src="../../../assets/img/coupons-h.png" alt>
      <input class="code" type="text" placeholder="输入手机验证码" v-model="phone_code">
      <p class="p">
        <span v-if="inentify" @click="send" style="color:#e60013">发送验证码</span>
        <span v-if="timer">{{count}}s</span>
      </p>
    </div>
    <div class="put">
      <img class="img" src="../../../assets/img/coupons-h.png" alt>
      <input type="password" placeholder="请输入登陆密码" v-model="password">
    </div>
    <div class="put">
      <img class="img" src="../../../assets/img/coupons-h.png" alt>
      <input type="password" placeholder="请再次输入登陆密码" v-model="password_confirmation">
    </div>
    <!-- <div class="put">
      <img class="img" src="../../../assets/img/addpeople.png" alt>
      <input type="text" placeholder="请输入邀请码" v-model="recommend">
    </div>-->
    <button @click="register">立即注册</button>
  </div>
</template>

<script>
export default {
  name: "marketfoot",
  data() {
    return {
      username: "",
      phone: "",
      password: "",
      password_confirmation: "",
      security: "",
      security_confirmation: "",
      phone_code: "",
      inentify: true,
      timer: false,
      count: 60,
      time: ""
    };
  },
  methods: {
    // 一个简单的定时器 点击的时候 计入倒计时 如果倒计时等于1的时候显示点击按钮清除定时器
    async send() {
      if (!this.phone) {
        this.$toasted.error("请输入手机号", { icon: "error" }).goAway(2000);
        return;
      }
      try {
        // await等待一个异步返回的结果 如果没有await 会报user is undefined 获取不到
        let res = await this.http.post("/api/send_code", {
          phone: this.phone
        });
        console.log(res);
        this.$toasted.success("发送成功").goAway(1500);
      } catch (error) {
        this.$toasted.error(error.message, { icon: "error" }).goAway(2000);
      }
      (this.inentify = !this.inentify),
        (this.timer = true),
        (this.time = setInterval(() => {
          this.count -= 1;
          if (this.count == 0) {
            clearInterval(this.time);
            this.inentify = !this.inentify;
            this.timer = false;
            this.count = 60;
          }
        }, 1000));
    },
    async register() {
      if (
        !this.phone ||
        !this.username ||
        !this.password ||
        !this.password_confirmation ||
        !this.phone_code
      ) {
        this.$toasted.error("请输入完善信息", { icon: "error" }).goAway(2000);
        return;
      }

      try {
        // await等待一个异步返回的结果 如果没有await 会报user is undefined 获取不到
        let res = await this.http.post("/api/register", {
          nickname: this.username,
          phone: this.phone,
          password: this.password,
          password_confirmation: this.password_confirmation,
          sms_code: this.phone_code
        });
        console.log(res);
        if (res.code == 200) {
          this.$toasted.success("注册成功").goAway(1500);
          this.$router.replace({ name: "login" });
        } else {
          this.$toasted.error(res.message, { icon: "error" }).goAway(1000);
        }
      } catch (error) {
        this.$toasted.error(error.message, { icon: "error" }).goAway(1000);
      }
    }
  }
};
</script>

<style scoped>
.regiset {
  min-height: 100%;
}
.put {
  width: 92%;
  height: 0.8rem;
  margin-left: 4%;
  background: #fff;
  /* padding: 0.28rem; */
  line-height: 0.8rem;
  padding: 0 0.28rem;
  /* background: red; */
  border-bottom: 1px solid #e60013;
  padding-left: 1rem;
  position: relative;
}
.put > input {
  border: 0;
  background: none;
  height: 0.9rem;
  padding: 0.3rem 0;
}
.put > span {
  display: inline-block;
  width: 1.8rem;
  color: #1e853c;
}
.code {
  width: 36%;
}
.p {
  float: right;
  background: #fff;
  width: 34%;
  text-align: center;
  height: 0.6rem;
  line-height: 0.6rem;
  margin-top: 0.12rem;
  border-radius: 4px;
}
.img {
  height: 0.34rem;
  width: 0.34rem;
  position: absolute;
  left: 0.2rem;
  bottom: 0.19rem;
}
button {
  width: 84.5%;
  margin: 0 auto;
  margin-left: 7.75%;
  height: 0.8rem;
  margin-top: 1.4rem;
  background: #e60013;
  color: #fff;
  font-size: 0.28rem;
  border-radius: 0.4rem;
  margin-bottom: 1rem;
}
</style>


