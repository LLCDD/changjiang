<template>
  <!-- 便利岗的订单通知 -->
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
    <p class="text">
        <input type="text" placeholder="请输入商品信息">
    </p>
    <van-tabs v-model="active" sticky @click="daifa">
        <van-tab title="待发货" ></van-tab>
        <van-tab title="已发货"></van-tab>
        <van-tab title="退款申请"></van-tab>
      </van-tabs>
    <div class="senter">
      <div v-for="(index) in 10" :key="index" @click="daxq">
          <div>
              <p>往来于</p>
              <p>阿道夫看到了付款的看法得分</p>
          </div>
          <p v-if="status == 0" style="font-size:0.2rem;color:#a3a5a8">4月24日</p>
          <p v-else style="font-size:0.2rem;color:#eab617">4月24日</p>
      </div>
    </div>
  </div>
</template>
<script>
import { Tab, Tabs } from 'vant';
export default {
  data() {
    return {
      msg: "订单通知",
      active:0,
      status:0
    };
  },
  methods: {
    // 返回按钮
    fanhui() {
      this.$router.go(-1);
    },
    // 待发货
    daifa(e){
        console.log(e)
        // 代发货
        if(e == 0){
            console.log("代发货")
        }else if(e == 1){
            console.log("已发货")
        }else {
            console.log("退款申请")
        }
    },
    // 订单详情
    daxq(){
        this.$router.push('/dingdanxq')
    }
  }
};
</script>
<style scoped>
.MoreSettings {
  height: 100%;
  width: 100%;
  background: #fff;
}
.MoreSettings >>> .van-tabs__wrap {
    height: 0.9rem;
    background: #eee
}
.MoreSettings >>> .van-tab  {
    background: #eee
}
.MoreSettings >>> .van-tab--active {
    color: #eab617
}
.MoreSettings >>> .van-tabs__line {
    background: #eab617
}
.header {
  height: 1.3rem;
  width: 100%;
  background: #eeeeee;
}
.header > p {
  height: 0.42rem;
  width: 100%;
  background: #eeeeee;
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
  /* padding: 0 0.3rem; */
  height: 78%;
  overflow-y: auto;

}
.senter > div {
    height: 1.3rem;
    width: 100%;
    padding: 0.3rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #dddddd
}
.senter > div > div  {
    line-height: 0.4rem;
}
.senter > div > div > :first-child {
    font-size: 0.3rem;
}
.senter > div > div > :last-child {
    font-size: 0.24rem;
    color: #a3a5a8
} 
.text {
    background: #eeeeee
}
.text > input {
    width: 94%;
    margin-left: 3%;
    height: 0.7rem;
    padding-left:0.2rem; 
    border-radius: 0.1rem;
}
</style>
