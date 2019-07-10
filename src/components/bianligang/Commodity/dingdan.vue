<template>
  <!-- 便利岗的订单通知 -->
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
    <p class="text">
      <input type="text" placeholder="请输入商品信息" />
    </p>
    <van-tabs v-model="active" sticky @click="daifa">
      <van-tab title="待发货"></van-tab>
      <van-tab title="已发货"></van-tab>
      <van-tab title="退款申请"></van-tab>
    </van-tabs>
    <div class="senter">
      <div
        v-if="state == '代发货'"
        v-for="(item,index) in list.data"
        :key="index"
        @click="daxq(item.goods_id,0)"
      >
        <div>
          <p>{{ item.goods_name }}</p>
          <p>阿道夫看到了付款的看法得分</p>
        </div>
        <p v-if="status == 0" style="font-size:0.2rem;color:#a3a5a8">4月24日</p>
        <p v-else style="font-size:0.2rem;color:#eab617">4月24日</p>
      </div>
      <div
        v-if="state == '已发货'"
        v-for="(item,index) in list.data"
        :key="index"
        @click="daxq(item.goods_id,1)"
      >
        <div>
          <p>{{ item.goods_name }}</p>
          <p>阿道夫看到了付款的看法得分</p>
        </div>
        <p v-if="status == 0" style="font-size:0.2rem;color:#a3a5a8">4月24日</p>
        <p v-else style="font-size:0.2rem;color:#eab617">4月24日</p>
      </div>
      <div
        v-if="state == '退款申请'"
        v-for="(item,index) in list.data"
        :key="index"
        @click="daxq(item.back_id,2)"
      >
        <div>
          <p>{{ item.consignee }}</p>
          <p>{{ item.address }}</p>
        </div>
        <p v-if="status == 0" style="font-size:0.2rem;color:#a3a5a8">{{ item.add_time_format }}</p>
        <p v-else style="font-size:0.2rem;color:#eab617">{{ item.add_time_format }}</p>
      </div>
      <van-pagination @change="change" v-model="currentPage" :page-count="count" mode="simple" />
    </div>
  </div>
</template>
<script>
import { Tab, Tabs } from "vant";
import { Pagination } from "vant";
export default {
  data() {
    return {
      msg: "订单通知",
      active: 0,
      status: 0,
      list: [],
      // 判断显示的内容
      state: "代发货",
      currentPage: 1,
      count: 1
    };
  },
  mounted() {
    this.http.get("/api/goods", { shipping_status: 0 }).then(res => {
      console.log(res);
      this.list = res.data.goods;
      this.count = res.data.goods.last_page;
    });
  },
  methods: {
    // 返回按钮
    fanhui() {
      this.$router.go(-1);
    },
    // 待发货
    daifa(e) {
      console.log(this.active);
      // 代发货
      if (this.active == 0) {
        this.currentPage = 1;
        console.log("代发货");
        this.state = "代发货";
        this.http
          .get("/api/goods", { shipping_status: 0})
          .then(res => {
            console.log(res);
            this.list = res.data.goods;
            this.count = res.data.goods.last_page;
          });
      } else if (this.active == 1) {
        this.currentPage = 1;
        this.state = "已发货";
        console.log("已发货");
        this.http
          .get("/api/goods", { shipping_status: 2 })
          .then(res => {
            console.log(res);
            this.list = res.data.goods;
            this.count = res.data.goods.last_page;
          });
      } else {
        this.currentPage = 1;
        console.log("退款申请");
        this.state = "退款申请";
        this.http.get("/api/back").then(res => {
          console.log(res);
          this.list = res.data.order;
          this.count = res.data.order.last_page;
        });
      }
    },
    change(e) {
      console.log(e);
      if (this.active == 0) {
        console.log("代发货");
        this.state = "代发货";
        this.http
          .get("/api/goods", { shipping_status: 0, page:e })
          .then(res => {
            console.log(res);
            this.list = res.data.goods;
            this.count = res.data.goods.last_page;
          });
      } else if (this.active == 1) {
        this.state = "已发货";
        console.log("已发货");
        this.http
          .get("/api/goods", { shipping_status: 2, page:e })
          .then(res => {
            console.log(res);
            this.list = res.data.goods;
            this.count = res.data.goods.last_page;
          });
      } else {
        console.log("退款申请");
        this.state = "退款申请";
        this.http.get("/api/back", { page:e  }).then(res => {
          console.log(res);
          this.list = res.data.order;
          this.count = res.data.order.last_page;
        });
      }
    },
    // 订单详情
    daxq(id, state) {
      console.log(id);
      this.$router.push("/dingdanxq/?id=" + id + "&state=" + state);
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
  background: #eee;
}
.MoreSettings >>> .van-tab {
  background: #eee;
}
.MoreSettings >>> .van-tab--active {
  color: #eab617;
}
.MoreSettings >>> .van-tabs__line {
  background: #eab617;
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
  border-bottom: 1px solid #dddddd;
}
.senter > div > div {
  line-height: 0.4rem;
}
.senter > div > div > :first-child {
  font-size: 0.3rem;
}
.senter > div > div > :last-child {
  font-size: 0.24rem;
  color: #a3a5a8;
}
.text {
  background: #eeeeee;
}
.text > input {
  width: 94%;
  margin-left: 3%;
  height: 0.7rem;
  padding-left: 0.2rem;
  border-radius: 0.1rem;
}
</style>
