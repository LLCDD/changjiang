<template>
  <div class="content">
    <div class="landing">
      <img class="img" src="../../../assets/images/mytext.png" alt>
      <input type="text" placeholder="请输入账号" v-model="phone">
    </div>
    <div class="landing">
      <img class="img" src="../../../assets/images/pass.png" alt>
      <input type="text" placeholder="请输入验证码" v-model="password">
      <button :class="{ 'a' : a == 1}" class="code" @click="countdown">{{ code }}</button>
    </div>
    <div class="login" @click="login">登录</div>
    <p class="tishi">温馨提示：只有在后台创建账号后才可登录管家端</p>
  </div>
</template>

<script>
import router from "@/router";
export default {
  data() {
    return {
      phone: "",
      password: "",
      code: "获取验证码",
      a: 0
    };
  },
  mounted() {
    console.log(plus.device.uuid);
  },
  methods: {
    // 获取验证码的倒计时
    async countdown() {
      // if (this.phone != "") {
      //   this.$toasted.error("请输入手机号").goAway(1000);
      //   return;
      // }
      if (this.code == "获取验证码") {
        try {
          // await等待一个异步返回的结果 如果没有await 会报user is undefined 获取不到
          let res = await this.http.post("/api/sendsms", {
            mobile: this.phone
          });
          if (res.code == 200) {
            if (this.a == 0) {
              this.a = 1;
              var count = 60;
              var timer = null;
              clearInterval(timer);
              timer = setInterval(() => {
                if (count > 0) {
                  // console.log(count);
                  this.code = count-- + "s";
                } else {
                  clearInterval(timer);
                  this.code = "获取验证码";
                  this.a = 0;
                  count = 60;
                }
              }, 1000);
            } else {
              this.$toasted
                .error("已经发送验证码", { icon: "error" })
                .goAway(1000);
            }
          } else {
            this.$toasted.error(res.message, { icon: "error" }).goAway(2000);
          }
        } catch (error) {
          this.$toasted.error(error.message, { icon: "error" }).goAway(2000);
        }
      }else {
        this.$toasted.error("验证码已经发送").goAway(1000);
      }
    },
    async login() {
      // this.$router.replace({ name: "index" });

      if (!this.phone || !this.password) {
        this.$toasted.error("请输入完善信息", { icon: "error" }).goAway(2000);
        return;
      }
      try {
        // await等待一个异步返回的结果 如果没有await 会报user is undefined 获取不到
        let res = await this.http.post("/api/login", {
          mobile: this.phone,
          password:this.password,
          did:"151515"
          // smscode: this.password
        });
        if (res.code == 200) {
          console.log(res);
          localStorage.setItem("token", res.data.Authorization);
          this.$toasted.success("登录成功").goAway(1500);
          this.$router.replace({ name: "index" });
          // 通过后台给的数值来判断要显示的工作岗位
        } else {
          this.$toasted.error(res.message, { icon: "error" }).goAway(2000);
        }
      } catch (error) {
        this.$toasted.error(error.message, { icon: "error" }).goAway(2000);
      }
    }
  }
};
</script>

<style scoped>
.content {
  width: 100%;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
}
.landing {
  width: 100%;
  height: 0.9rem;
  border-bottom: 1px solid #b9b9b9;
  padding: 0 0.8rem;
  position: relative;
  margin-bottom: 0.46rem;
}
.landing > input {
  height: 0.9rem;
  padding: 0.3rem 0;
  background: none;
  color: #fff;
}
.landing > span {
  line-height: 0.9rem;
  color: #1e853c;
  font-weight: 500;
  display: inline-block;
  width: 1.36rem;
  font-size: 0.28rem;
}
.login {
  width: 100%;
  height: 0.8rem;
  border-radius: 0.4rem;
  background: #eab617;
  margin-top: 2.3rem;
  text-align: center;
  line-height: 0.8rem;
  font-size: 0.3rem;
  color: #ffffff;
  margin-bottom: 0.2rem;
}
.img {
  position: absolute;
  height: 0.5rem;
  width: 0.44rem;
  left: 0.2rem;
  bottom: 0.25rem;
}
.code {
  width: 1.6rem;
  height: 0.6rem;
  background: #eab617;
  color: #fff;
  font-size: 0.24rem;
  border-radius: 0.1rem;
  position: absolute;
  right: 0%;
  bottom: 0.1rem;
}
.tishi {
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 0.2rem;
}
.a {
  width: 1.6rem;
  height: 0.6rem;
  background: #836414;
  color: #f2f0ec;
  font-size: 0.24rem;
  border-radius: 0.1rem;
  position: absolute;
  right: 0%;
  bottom: 0.1rem;
}
</style>