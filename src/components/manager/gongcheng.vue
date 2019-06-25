<template>
  <!-- 经理岗的工程岗日志 -->
  <div class="index">
    <!-- 每个页面一个头部 因为他的头部是被顶的 -->
    <header>
      <p></p>
      <div>
        <p @click="fanhui">
          <img src="../../assets/img/left0.png" alt>
        </p>
        {{msg}}
      </div>
    </header>
    <!-- 头部结束 因为页面东西不是太多 所以不用定位 防止最后出现问题 -->

    <!-- 中间的内容开始 -->
    <div class="center">
      <!-- 客服岗 -->
      <div class="weixiu" @click="xuirizhi">
          <p>
            <img src="../../assets/img/xiuday.png" alt>
          </p>
          <span>维修日志</span>
        </div>
      </div>
    </div>
</template>

<script>
import { Popup } from "mint-ui";

export default {
  data() {
    return {
      msg: "工程岗日志",
    };
  },
  mounted() {
  },
  methods: {
    // 返回事件
    fanhui(){
        this.$router.go(-1)
    },
    // 维修日志
    xuirizhi(){
        console.log("维修日志")
    }
    
  }
};
</script>

<style scoped>
.index {
  height: 100%;
  width: 100%;
  background: #ffffff;
}
.index >>> .mint-popup-left {
  height: 100%;
  width: 80%;
  background: #ffffff;
}
.index >>> .mint-popup-bottom {
  width: 100%;
  height: 3rem;
  background: #818181;
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
.center {
  width: 100%;
  height: 6rem;
  margin-top: 0.3rem
}
.center > p {
  height: 1rem;
  width: 100%;
  text-align: left;
  font-size: 0.34rem;
  font-weight: 500;
  line-height: 1rem;
  padding: 0 0.3rem;
}
.guanli {
  height: 2.6rem;
  width: 100%;
  border-bottom: 1px solid #eeeeee;
}
.guanli > div {
  height: 100%;
  width: 1.8rem;
  margin-left: 0.44rem;
  float: left;
}
.guanli > div > p {
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 50%;
  /* background: orange */
}
.guanli > div > p > img {
  height: 100%;
  width: 100%;
}
.guanli > div > span {
  display: inline-block;
  font-size: 0.26rem;
  margin-top: 0.2rem;
  font-size: 0.24rem;
}
.weixiu {
  width: 1.2rem;
  height: 2rem;
  margin-left: 7%;
  float: left;
}
.weixiu > p {
  height: 1.2rem;
  width: 1.2rem;
  border-radius: 0.3rem;
  background: orange;
}
.weixiu > p > img {
  height: 100%;
  width: 100%;
}
.weixiu > span {
  display: inline-block;
  margin-top: 0.2rem;
  font-size: 0.24rem;
}
.left > .top {
  height: 3.1rem;
  padding: 0 0.32rem;
  /* background: yellow; */
  line-height: 3.6rem;
  width: 90%;
  border-bottom: 1px solid #ccc;
  margin-left: 5%;
  overflow: hidden;
}
.left > .top > :first-child {
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  background: pink;
  margin-top: 1rem;
}
.left > .top > :last-child {
  margin-left: 0.3rem;
  font-size: 0.34rem;
  font-weight: 550;
}
.left > .top > p {
  float: left;
  padding-left: 0.3rem;
}
.section {
  padding: 0 0.3rem;
}
.section > p > img {
  height: 0.34rem;
  width: 0.34rem;
}
.section > p {
  margin-top: 0.56rem;
}
.section > p > span {
  display: inline-block;
  margin-left: 0.3rem;
  font-size: 0.3rem;
}
.tui {
  width: 100%;
  height: 3rem;
  position: relative;
}
.tui > p {
  background: #fff;
  height: 1rem;
  text-align: center;
  font-size: 0.3rem;
  line-height: 1rem;
}
.tui > :last-child {
  margin-top: 0.15rem;
}
</style>
