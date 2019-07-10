<template>
  <!-- 便利岗的订单通知 -->
  <div class="MoreSettings">
    <header class="header">
      <p></p>
      <div>
        <p @click="fanhui">
          <img class="fanhui" src="../../../assets/img/left0.png" alt />
        </p>
        <p @click="tianjia">
          <img class="rihgt" src="../../../assets/img/tian.png" alt />
        </p>
        <p>{{ msg }}</p>
      </div>
    </header>
    <p class="text">
      <input type="text" placeholder="请输入商品信息" />
    </p>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <div class="senter">
      <!-- @click="daxq" -->
      <div v-for="(item,index) in list" :key="index" @click="xq(item.goods_id)">
        <van-swipe-cell :right-width="60" :left-width="60">
          <van-button square slot="left" type="danger" text="选择" />
          <van-cell :border="false" :title="item.goods_name" :value="item.shop_price" />
          <img class="img" src="../../../assets/img/rightf.png" alt />
          <van-button @click="aa(item.goods_id)" square slot="right" type="danger" text="删除" />
        </van-swipe-cell>
        <!-- <div>
              <p>往来于</p>
              <p>阿道夫看到了付款的看法得分</p>
          </div>
          <p v-if="status == 0" style="font-size:0.2rem;color:#a3a5a8">4月24日</p>
        <p v-else style="font-size:0.2rem;color:#eab617">4月24日</p>-->
      </div>
       <van-pagination @change="change" v-model="currentPage" :page-count="count" mode="simple" />
    </div>
  </div>
</template>
<script>
import { Tab, Tabs } from "vant";
import { SwipeCell } from "vant";
import { DropdownMenu, DropdownItem } from "vant";
import { constants } from 'crypto';
import { Pagination } from "vant";
export default {
  data() {
    return {
      msg: "商品管理",
      active: 0,
      status: 0,
      value1: 0,
      value2: "a",
      list: [],
      option1: [
        { text: "全部", value: 0 },
        { text: "精品", value: 1 },
        { text: "新品", value: 2 },
        { text: "热销", value: 3 },
        { text: "特价", value: 4 },
        { text: "全部推荐", value: 5 }
      ],
      option2: [
        { text: "下架", value: "a" },
        { text: "上架", value: "b" },
        { text: "全部", value: "c" }
      ],
      currentPage:1,
      count:1
    };
  },
  mounted() {
    this.one()
  },
  methods: {
    one() {
      this.http
        .get("/api/cates")
        .then(res => {
          // console.log()
          var arr = [];
          for (var i = 0; i < res.data.cate.length; i++) {
            if (i == 1) {
              this.value1 = res.data.cate[0].cat_id;
            }
            arr.push({
              text: res.data.cate[i].cat_name,
              value: res.data.cate[i].cat_id,
              subCate: res.data.cate[i].subCate
            });
          }
          console.log(arr);
          this.option1 = arr;
        })
        .catch(res => {
          this.$toasted.error(res.message).goAway(1000);
        });
      this.http.get("/api/goods").then(res => {
        console.log(res);
        this.list = res.data.goods.data;
        this.count = res.data.goods.last_page
      });
    },
    // 返回按钮
    fanhui() {
      this.$router.go(-1);
    },
    // // 订单详情
    // daxq() {
    //   this.$router.push("/dingdanxq");
    // },
    // 删除
    aa(id) {
      console.log(id);
      this.http.delete('/api/goods/'+id,).then(res =>{
        this.$toasted.success(res.message).goAway(1000)
        this.one()
      }).catch(res =>{
        this.$toasted.error(res.message).goAway(1000)
      })
    },
    // 去添加商品的页面
    tianjia() {
      this.$router.push("/shanpingjia");
    },
    xq(goods_id) {
      console.log(goods_id)
      this.$router.push("/shangpxq/"+goods_id);
    },
    change(e){
      console.log(e)
       this.http.get("/api/goods",{page:e}).then(res => {
        console.log(res);
        this.list = res.data.goods.data;
        this.count = res.data.goods.last_page
      });
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
.MoreSettings >>> .van-dropdown-menu {
  background: #eee;
  height: 0.9rem;
  font-size: 0.26rem;
}
.MoreSettings >>> .van-cell {
  border-bottom: 1px solid #ccc;
}
.MoreSettings >>> .van-tabs__wrap {
  height: 0.9rem;
  background: #eee;
}
.MoreSettings >>> .van-dropdown-menu__title {
  color: #eab617;
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
.MoreSettings >>> .van-cell__value {
  padding-right: 0.3rem;
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
.rihgt {
  position: absolute;
  right: 0rem;
  height: 0.8rem;
  width: 0.8rem;
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
  position: relative;
}
.img {
  position: absolute;
  right: 0rem;
  height: 0.7rem;
  width: 0.5rem;
  top: 0.1rem;
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
