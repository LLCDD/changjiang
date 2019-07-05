<template>
  <!-- 便利岗的商品管理 的订单添加 -->
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
      <div>
        <p>商品名称：<input v-model="goods_name" placeholder="请输入名称" type="text"></p>
        <p>商品数量：<input v-model="goods_number" placeholder="请输入数量" type="text"></p>
        <p>商品售价：<input v-model="shop_price" type="text" placeholder="请输入售价"></p>
        <p>赠送积分：<input v-model="give_integral" type="text" placeholder="根据价格自动填入"></p>
        <p class="pyy"><span>是否加入精品</span> <span>请选择 <img src="../../../assets/img/rightf.png" alt="" srcset=""> </span>  </p>
      </div>
      <div class="div">
        <p style="font-size:0.34rem;height:0.9rem;line-height:0.9rem;">
          <span>图片</span>
          <span></span>
        </p>
        <p class="imga" v-for="(item,index) in image" :key="index">
          <img :src="item" alt="">
        </p>
        <van-uploader :after-read="afterRead" />
      </div>
      <div class="div">
        <p style="float:left;font-size:0.34rem;height:0.9rem;line-height:0.9rem;">
          <span>详情描述：</span>
        </p>
        <textarea v-model="goods_desc" placeholder="请输入商品详情描述" name="" id="" cols="30" rows="10"></textarea>
      </div>
    </div>
    <p class="fahuo" v-if="status == 2" @click="tianjia">添加</p>
    <!-- <p class="tuikuanok" v-if="status == 2">已发货</p>
    <p class="tuikuanok" v-if="status == 3">同意退款</p>
    <p class="fahuo" v-if="status == 4">已退款</p> -->
  </div>
</template>
<script>
// import { SwipeCell } from "vant";
import { Uploader } from 'vant';
export default {
  data() {
    return {
      msg: "商品添加",
      active: 0,
      status: 2,
      // 商品名称
      goods_name:"",
      // 商品数量
      goods_number:"",
      // 商品价格
      shop_price:"",
      // 赠送积分
      give_integral:"",
      // 图片
      image:[],
      // 商品描述
      goods_desc:''
    };
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
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      var arr = this.image
      arr.push(file.content)
      this.image = arr
      console.log(file);
    },
    // 最后的添加
    tianjia(){
      this.http.post('/api/goods',{
        goods_name:this.goods_name,
        goods_number:this.goods_number,
        shop_price:this.shop_price,
        is_best:this.is_best,
        image:this.image,
        give_integral:this.give_integral,
        goods_desc:this.goods_desc
      }).then(res =>{
        console.log(res)
       this.$router.go(-1);
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
.MoreSettings >>> .van-uploader__upload {
    height: 1rem;
    width: 1rem
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
.senter > div > p > input {
    height: 0.6rem
}
.imga {
  height: 1rem !important;
  width: 1rem !important;
  float: left;
  margin-right: 0.1rem
}
.imga > img {
  height: 100%;
  width: 100%
}
/* .senter > .div {
  height: 3rem; 
  overflow: auto;
   margin-bottom: 1rem;
} */
.senter > .div > p {
  display: flex;
  justify-content: space-between;
  border: 0;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.28rem;
  color: #666666;
}
.senter > .div > textarea {
    float: left;
    height: 1.4rem;
    font-size: 0.34rem;
    margin-top: 0.3rem;
    width: 4rem;
    /* background: red */
}
.div {
  height: 2rem;
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
.pyy {
    display: flex;
    justify-content: space-between
}
.pyy > span > img {
    height: 0.8rem;
    width: 0.6rem
}
</style>
