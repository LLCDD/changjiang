<template>
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
        <span>新消息通知</span>
        <span>
          <van-switch active-color="#eab617" v-model="checked" size="20px"/>
        </span>
      </p>
      <p>
        <span>声音</span>
        <span>
          <van-switch active-color="#eab617" v-model="checked1" size="20px"/>
        </span>
      </p>
    </div>
  </div>
</template>
<script>
import { Switch } from 'vant';
export default {
  data() {
    return {
      msg: "更多设置",
      checked:true,
      checked1:false
    };
  },
  methods: {
    // 返回按钮
    fanhui() {
      this.$router.go(-1);
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
    top: 0.3rem
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
  margin-top: 0.2rem;
  height: 2rem;
  background: #fff;
}
.senter > p {
  line-height: 1rem;
  border-bottom: 1px solid #dddddd;
  padding: 0 0.3rem;
  display: flex;
  justify-content: space-between;
  position: relative;
}

</style>
