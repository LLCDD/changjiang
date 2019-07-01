<template>
  <!-- 便利岗的订单通知 的商品管理 -->
  <div class="MoreSettings">
    <header class="header">
      <p></p>
      <div>
        <p @click="fanhui">
          <img class="fanhui" src="../../../assets/img/left0.png" alt>
        </p>
        <p>{{ msg }}</p>
      </div>
    </header>
    <div class="senter">
      <van-swipe-cell :right-width="60" :left-width="60">
        <van-button square slot="left" type="danger" text="选择"/>
        <van-cell :border="false" title="单元格" value="内容"/>
        <van-button @click="aa" square slot="right" type="danger" text="删除"/>
      </van-swipe-cell>
    </div>
  </div>
</template>
<script>
import { SwipeCell } from "vant";

export default {
  data() {
    return {
      msg: "订单详情",
      active: 0,
      status: 0
    };
  },
  methods: {
    // 返回按钮
    fanhui() {
      this.$router.go(-1);
    },
    // 待发货
    aa(){
        console.log("44115")
    },
    // 订单详情
    daxq() {
      console.log(1);
    }
  }
};
</script>
<style scoped>
.MoreSettings {
  height: 100%;
  width: 100%;
  background: #ddd;
}

.header {
  height: 1.3rem;
  width: 100%;
  background: #fff;
}
.header > p {
  height: 0.42rem;
  width: 100%;
  background: #fff;
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
  background: #eeeeee;
  /* padding: 0 0.3rem; */
  /* height: 78%; */
  overflow-y: auto;
}
</style>
