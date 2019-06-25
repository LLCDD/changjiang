<template>
  <!-- 工程岗的维修日志 -->
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
    <!-- 中间的内容 -->
    <div class="nr">
      <section class="sectiony">
        <div @click="renwu">
          <p>任务类型</p>
          <p>
            <span> {{ msg1 }} </span>
            <img src="../../assets/img/rightf.png" alt>
          </p>
        </div>
        <div @click="xiu">
          <p>报修类型</p>
          <p>
            <span>{{ msg2 }}</span>
            <img src="../../assets/img/rightf.png" alt>
          </p>
        </div>
        <div @click="jiejeu">
          <p>是否解决</p>
          <p>
            <span>{{ msg3 }}</span>
            <img src="../../assets/img/rightf.png" alt>
          </p>
        </div>
      </section>
      <div class="maring">
        <p>花费明细：</p>
        <textarea name placeholder="请说明费用情况" id cols="30" rows="10"></textarea>
      </div>
      <div class="maring">
        <p>备注 ：</p>
        <textarea name placeholder="请输入相关的备注" id cols="30" rows="10"></textarea>
      </div>
      <div class="maring">
        <p>图片 ：</p>
        <br>
        <div>
          <p></p>
          <p>
            <van-uploader style="height:1rem;width:1rem;background" :after-read="afterRead"/>
          </p>
        </div>
      </div>
    </div>
    <!-- 任务的选择 -->
    <van-popup v-model="show" position="bottom">
      <van-picker show-toolbar :columns="columns" @cancel="onCancel" @confirm="onConfirm" />
    </van-popup>
    <!-- 报修类型 -->
    <van-popup v-model="show1" position="bottom">
      <van-picker show-toolbar :columns="columns1" @cancel="onCancel1" @confirm="onConfirm1" />
    </van-popup>
    <!-- 是否解决 -->
    <van-popup v-model="show2" position="bottom">
      <van-picker show-toolbar :columns="columns2" @cancel="onCancel2" @confirm="onConfirm2" />
    </van-popup>
    <button>提交</button>
  </div>
</template>
<script>
import { Uploader } from "vant";
import { Picker } from 'vant';
import { Popup } from "vant";
export default {
  data() {
    return {
      msg: "维修日志",
      checked: true,
      checked1: false,
      // 任务类型的选择
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      show:false,
      msg1:"请选择",
      // 报修类型
      columns1: ['杭州1', '宁波1', '温州1', '嘉兴1', '湖州1'],
      show1:false,
       msg2:"请选择",
      // 是否解决
      columns2: ['是','否'],
      show2:false,
      msg3:"请选择",
    };
  },
  methods: {
    // 返回按钮
    fanhui() {
      this.$router.go(-1);
    },
    // 图片上传
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    // 1.选择认为类型
    // 选择任务开始
    renwu(){
      this.show = true
    },
    onCancel(){
      // 选择认为类型的取消事件
      this.show = false
    },
    onConfirm(e){
      // 选择认为类型的确认事件
      console.log(e)
      this.msg1 = e
      this.show = false
    },
    // 2. 选择报修类型
    xiu(){
      this.show1 = true
    },
    onCancel1(){
      // 关闭报修类型
      this.show1 = false
    },
    onConfirm1(e){
      // 报修类型的确认
      console.log(e)
      this.msg2 = e;
      this.show1 = false
    },
    // 3.是否解决的事件
    jiejeu(){
      this.show2 = true
    },
    onCancel2(){
      // 关闭是否确认
      this.show2 = false
    },
    onConfirm2(e){
      // 报修类型的确认
      console.log(e)
      this.msg3 = e
      this.show2 = false
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
.MoreSettings >>> .van-picker__cancel {
  color: #eab617;
}
.MoreSettings >>> .van-picker__confirm {
  color: #eab617;
}
.MoreSettings >>> .van-switch {
  position: absolute;
  right: 0.3rem;
  top: 0.3rem;
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
.sectiony {
  width: 100%;
  padding: 0 0.3rem;
  margin-top: 0.2rem;
  background: #fff;
}
.sectiony > div {
  height: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  line-height: 1rem;
  font-size: 0.3rem;
  border-bottom: 1px solid #dddddd;
}
.sectiony > div > :first-child {
  color: #000;
}
.sectiony > div > :last-child {
  color: #999;
}
.sectiony > div > p > img {
  height: 0.8rem;
  width: 0.6rem;
}
.maring {
  height: 2rem;
  width: 100%;
  border: 0;
  margin-bottom: 0.2rem;
  padding: 0 0.3rem;
  display: flex;
  /* justify-content: space-between;*/
  background: #fff;
  padding-top: 0.4rem;
}
.maring > p {
  font-size: 0.3rem;
}
.maring > textarea {
  float: left;
}
.maring > div > p {
  height: 1rem;
  width: 1rem;
  background: red;
  float: left;
  margin-right: 0.1rem;
}
.maring > div > :last-child {
  background: url("../../assets/img/updata.png") no-repeat;
  background-size: 100% 100%;
}
.nr {
  height: 80%;
  overflow: hidden;
  overflow-y: auto
}
button {
  height: 1rem;
  width: 100%;
  background: #eab617;
  color: #fff;
  position: fixed;
  bottom: 0;
}
</style>
