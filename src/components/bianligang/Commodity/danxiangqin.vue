<template>
  <!-- 便利岗的订单通知 的订单详情 -->
  <div class="MoreSettings">
    <header class="header">
      <p></p>
      <div>
        <p @click="fanhui">
          <img class="fanhui" src="../../../assets/img/left0.png" alt />
        </p>
        <p>{{ msg }}</p>
      </div>
    </header>

    <div class="senter">
      <!-- <van-swipe-cell :right-width="60" :left-width="60">
        <van-button square slot="left" type="danger" text="选择"/>
        <van-cell :border="false" title="单元格" value="内容"/>
        <van-button @click="aa" square slot="right" type="danger" text="删除"/>
      </van-swipe-cell>-->
      <!-- 退款的展示  state == 2   -->
      <div v-if="state == 2">
        <p>收货人：{{ user.back.consignee }}</p>
        <p>联系方式：{{ user.back.mobile }}</p>
        <p>收货地址：{{ user.back.address }}</p>
        <p>订单号：{{ user.back.order_sn }}</p>
        <p>订单状态：{{ user.order.order_status_format }}</p>
        <p>支付方式：{{ user.order.pay_name }}</p>
        <p>下单时间：{{user.order.add_time_format}}</p>
      </div>
      <div class="div" v-if="state == 2">
        <p style="font-size:0.34rem;height:0.9rem;line-height:0.9rem;">
          <span>商品信息</span>
          <span>价格</span>
        </p>
        <p v-for="(item,index) in user.goods" :key="index">
          <span>{{ item.goods_name }}*{{ item.goods_number }}</span>
          <span> {{ item.goods_price }} 元</span>
        </p>
      </div>

        <!-- state == 1  已发货的展示 -->
      <div v-if="state == 1">
        <p>收货人：刘贵</p>
        <p>联系方式：16666666666</p>
        <p>收货地址：和谐小区二单元308号</p>
        <p>订单号：323234754346876546787</p>
        <p>订单状态：已付款</p>
        <p>支付方式：支付宝</p>
        <p>下单时间：2019-4-18 09:17</p>
      </div>
      <div class="div" v-if="state == 1">
        <p style="font-size:0.34rem;height:0.9rem;line-height:0.9rem;">
          <span>商品信息</span>
          <span>价格</span>
        </p>
        <p>
          <span>奥利奥饼干*2</span>
          <span>20元</span>
        </p>
        <p>
          <span>奥利奥饼干*2</span>
          <span>20元</span>
        </p>
        <p>
          <span>奥利奥饼干*2</span>
          <span>20元</span>
        </p>
        <p>
          <span>奥利奥饼干*2</span>
          <span>20元</span>
        </p>
        <p>
          <span>奥利奥饼干*2</span>
          <span>20元</span>
        </p>
        <p>
          <span>奥利奥饼干*2</span>
          <span>20元</span>
        </p>
        <p>
          <span>奥利奥饼干*2</span>
          <span>20元</span>
        </p>
        <p>
          <span>商品信息</span>
          <span>价格</span>
        </p>
        <p>
          <span>奥利奥饼干*2</span>
          <span>20元</span>
        </p>
      </div>


              <!-- state == 0  已发货的展示 -->
      <div v-if="state == 0">
        <p>收货人：刘贵</p>
        <p>联系方式：16666666666</p>
        <p>收货地址：和谐小区二单元308号</p>
        <p>订单号：323234754346876546787</p>
        <p>订单状态：已付款</p>
        <p>支付方式：支付宝</p>
        <p>下单时间：2019-4-18 09:17</p>
      </div>
      <div class="div" v-if="state == 0">
        <p style="font-size:0.34rem;height:0.9rem;line-height:0.9rem;">
          <span>商品信息</span>
          <span>价格</span>
        </p>
        <p>
          <span>奥利奥饼干*2</span>
          <span>20元</span>
        </p>
        <p>
          <span>奥利奥饼干*2</span>
          <span>20元</span>
        </p>
        <p>
          <span>奥利奥饼干*2</span>
          <span>20元</span>
        </p>
        <p>
          <span>奥利奥饼干*2</span>
          <span>20元</span>
        </p>
        <p>
          <span>奥利奥饼干*2</span>
          <span>20元</span>
        </p>
        <p>
          <span>奥利奥饼干*2</span>
          <span>20元</span>
        </p>
        <p>
          <span>奥利奥饼干*2</span>
          <span>20元</span>
        </p>
        <p>
          <span>商品信息</span>
          <span>价格</span>
        </p>
        <p>
          <span>奥利奥饼干*2</span>
          <span>20元</span>
        </p>
      </div>
    </div>

    



    <p class="fahuo" v-if="status == 1">发货</p>
    <p class="tuikuanok" v-if="status == 2">已发货</p>
    <p class="tuikuanok" v-if="status == 3" @click="tui">同意退款</p>
    <p class="fahuo" v-if="status == 4">已退款</p>
  </div>
</template>
<script>
import { constants } from "crypto";
// import { SwipeCell } from "vant";

export default {
  data() {
    return {
      msg: "订单详情",
      active: 0,
      status: 2,
      user: {},
      // 判断显示的状态
      state: 0
    };
  },
  mounted() {
    this.state = this.$route.query.state;
    // 通过状态判断是 退款的详情 还是 待发货 还是 已发货
    // 0 是代发货 1  是已发货  2 是退款
    console.log(this.$route.query.id);
    if (this.$route.query.state == 2) {
      this.http.get("/api/back/" + this.$route.query.id + "/edit").then(res => {
        console.log(res);
        this.user = res.data;
        if(res.data.order.order_status == 1){
          this.status = 4
        }else {
          this.status = 3
        }
      });
    }
  },
  methods: {
    // 返回按钮
    fanhui() {
      this.$router.go(-1);
    },
    // 待发货
    aa() {
      console.log("44115");
    },
    // 订单详情
    daxq() {
      console.log(1);
    },
    daifa() {},
    // 退款
    tui(){
      this.http.put('/api/back/'+this.user.back.order_id).then(res =>{
        console.log(res)
      }).catch(res =>{
        this.$toasted.error(res.message).goAway(1000)
      })
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
  height: 82%;
  overflow-y: auto;
}
.senter > div {
  margin-top: 0.2rem;
  background: #fff;
  padding: 0 0.3rem;
}
.senter > div > p {
  height: 0.9rem;
  line-height: 0.9rem;
  border-bottom: 1px solid #eeeeee;
}
.senter > .div {
  /* height: 3rem; */
  /* overflow: auto; */
  margin-bottom: 1rem;
}
.senter > .div > p {
  display: flex;
  justify-content: space-between;
  border: 0;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.28rem;
  color: #666666;
}
.fahuo {
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  background: #eab617;
  color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  margin-top: 1rem;
}
.tuikuanok {
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  background: #eccc6d;
  color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  margin-top: 1rem;
}
</style>
