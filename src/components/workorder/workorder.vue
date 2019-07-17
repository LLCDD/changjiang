<template>
  <div class="workorder">
    <!-- 工程岗的工作通知 -->
    <header>
      <p></p>
      <div>
        <p @click="fanhui">
          <img src="../../assets/img/left0.png" alt />
        </p>
        {{msg}}
      </div>
    </header>
    <!-- 中间内容 -->
    <section>
      <div v-for="(item,index) in list" :key="index">
        <div v-if="item.type == 'fee'">
          <p class="timer">
            <span>{{ item.created_at }}</span>
          </p>
          <div class="sheng">
            <p>{{ item.type_format }}</p>
            <p>审批人 ：{{ Object(item.deteail.user).name }}</p>
            <p>审批类型 ： {{ item.type_format }}</p>
            <p>处理意见 ：{{ item.deteail.remark }}</p>
          </div>
        </div>
        <!-- 业主报修 -->
        <div v-if="item.type == 'maintenance'">
          <p class="timer">
            <span>{{ item.created_at }}</span>
          </p>
          <div class="sheng">
            <p>{{ item.type_format }}</p>
            <p>上报人员 ：{{ Object(item.deteail.user).name }}</p>
            <p>报修业主 ： {{ item.deteail.xiaoqu.xiaoqu_name }}</p>
            <p>业主电话 ：{{ item.deteail.yezhu_tel }}</p>
            <p>报修类型 ：{{ item.deteail.cate_name }}</p>
            <p>备注 ：{{ item.deteail.remark }}</p>
            <p style="margin-bottom:0.2rem">
              <span style="float:left">图片：</span>
              <img
                style="width:1rem;height:1rem;float:left"
                v-for="item in item.deteail.images_format"
                :src="item"
                alt
              />
            </p>
          </div>
        </div>
        <!-- "water" ： 供水巡查 -->
        <div v-if="item.type == 'water'">
          <p class="timer">
            <span>{{ item.created_at }}</span>
          </p>
          <div class="sheng1">
            <p>{{ item.type_format }}</p>
            <p>上报人员 ：{{ Object(item.deteail.user).name }}</p>
            <p>是否故障 ： {{ item.type_format }}</p>
            <p>备注 ：{{ item.deteail.remark }}</p>
            <p>
              <span style="float:left">图片：</span>
              <img
                style="width:1rem;height:1rem;float:left"
                v-for="item in item.deteail.images_format"
                :src="item"
                alt
              />
            </p>
          </div>
        </div>
        <!-- "cleaning" ：保洁考勤 -->
        <div v-if="item.type == 'cleaning'">
          <p class="timer">
            <span>{{ item.created_at }}</span>
          </p>
          <div class="sheng1">
            <p>{{ item.type_format }}</p>
            <p>上报人员 ：{{ Object(item.deteail.user).name }}</p>
            <p>是否故障 ： {{ item.type_format }}</p>
            <p>备注 ：{{ item.deteail.remark }}</p>
            <p>
              <span style="float:left">图片：</span>
              <img
                style="width:1rem;height:1rem;float:left"
                v-for="item in item.deteail.images_format"
                :src="item"
                alt
              />
            </p>
          </div>
        </div>

        <!-- "decorate" ： "装修违建巡查" -->
        <div v-if="item.type == 'decorate'">
          <p class="timer">
            <span>{{ item.created_at }}</span>
          </p>
          <div class="sheng1">
            <p>{{ item.type_format }}</p>
            <p>上报人员 ：{{ Object(item.deteail.user).name }}</p>
            <p>是否故障 ： {{ item.type_format }}</p>
            <p>备注 ：{{ item.deteail.remark }}</p>
            <p>
              <span style="float:left">图片：</span>
              <img
                style="width:1rem;height:1rem;float:left"
                v-for="item in item.deteail.images_format"
                :src="item"
                alt
              />
            </p>
          </div>
        </div>

        <!-- "lift" ： 电梯巡查 -->
        <div v-if="item.type == 'lift'">
          <p class="timer">
            <span>{{ item.created_at }}</span>
          </p>
          <div class="sheng1">
            <p>{{ item.type_format }}</p>
            <p>上报人员 ：{{ Object(item.deteail.user).name }}</p>
            <p>是否故障 ： {{ item.type_format }}</p>
            <p>备注 ：{{ item.deteail.remark }}</p>
            <p>
              <span style="float:left">图片：</span>
              <img
                style="width:1rem;height:1rem;float:left"
                v-for="item in item.deteail.images_format"
                :src="item"
                alt
              />
            </p>
          </div>
        </div>
        <!-- "fire" ：消防巡查 -->
        <div v-if="item.type == 'fire'">
          <p class="timer">
            <span>{{ item.created_at }}</span>
          </p>
          <div class="sheng1">
            <p>{{ item.type_format }}</p>
            <p>上报人员 ：{{ Object(item.deteail.user).name }}</p>
            <p>是否故障 ： {{ item.type_format }}</p>
            <p>备注 ：{{ item.deteail.remark }}</p>
            <p>
              <span style="float:left">图片：</span>
              <img
                style="width:1rem;height:1rem;float:left"
                v-for="item in item.deteail.images_format"
                :src="item"
                alt
              />
            </p>
          </div>
        </div>
        <!-- pipeline ： 官网巡查 -->
        <div v-if="item.type == 'pipeline'">
          <p class="timer">
            <span>{{ item.created_at }}</span>
          </p>
          <div class="sheng1">
            <p>{{ item.type_format }}</p>
            <p>上报人员 ：{{ Object(item.deteail.user).name }}</p>
            <p>是否故障 ： {{ item.type_format }}</p>
            <p>备注 ：{{ item.deteail.remark }}</p>
            <p>
              <span style="float:left">图片：</span>
              <img
                style="width:1rem;height:1rem;float:left"
                v-for="item in item.deteail.images_format"
                :src="item"
                alt
              />
            </p>
          </div>
        </div>
        <!-- other ：其他检查 -->
        <div v-if="item.type == 'other'">
          <p class="timer">
            <span>{{ item.created_at }}</span>
          </p>
          <div class="sheng1">
            <p>{{ item.type_format }}</p>
            <p>上报人员 ：{{ Object(item.deteail.user).name }}</p>
            <p>是否故障 ： {{ item.type_format }}</p>
            <p>备注 ：{{ item.deteail.remark }}</p>
            <p>
              <span style="float:left">图片：</span>
              <img
                style="width:1rem;height:1rem;float:left"
                v-for="item in item.deteail.images_format"
                :src="item"
                alt
              />
            </p>
          </div>
        </div>

        <!-- 卫生绿化巡查 -->
        <div v-if="item.type == 'green'">
          <p class="timer">
            <span>{{ item.created_at }}</span>
          </p>
          <div class="sheng1">
            <p>{{ item.type_format }}</p>
            <p>上报人员 ：{{ item.deteail.user.name }}</p>
            <p>是否故障 ： {{ item.type_format }}</p>
            <p>备注 ：{{ item.deteail.remark }}</p>
            <p>
              <span style="float:left">图片：</span>
              <img
                style="width:1rem;height:1rem;float:left"
                v-for="item in item.deteail.images_format"
                :src="item"
                alt
              />
            </p>
          </div>
        </div>
        <!-- 来访日志 -->
        <div v-if="item.type == 'visit'">
          <p class="timer">
            <span>{{ item.created_at }}</span>
          </p>
          <div class="sheng">
            <p>{{ item.type_format }}</p>
            <p>审批人 ：{{ Object(item.deteail.user).name }}</p>
            <p>审批类型 ： {{ item.type_format }}</p>
            <p>处理意见 ：{{ item.deteail.remark }}</p>
          </div>
        </div>
        <!-- ad 广告  -->
        <div v-if="item.type == 'ad'">
          <p class="timer">
            <span>{{ item.created_at }}</span>
          </p>
          <div class="sheng">
            <p>{{ item.type_format }}</p>
            <p>上报人员 ：{{ item.deteail.user.name }}</p>
            <p>商家名称：{{ item.deteail.shop_name }}</p>
            <p>商家电话 ：{{ item.deteail.shop_tel }}</p>
            <p>广告位置：{{ item.deteail.ad_position }}</p>
            <p>广告金额：{{ item.deteail.ad_money }}元</p>
            <p>开始时间：{{ item.deteail.start_at }}</p>
            <p>结束时间：{{ item.deteail.end_at }}</p>
            <p>支付方式：{{ item.deteail.pay }}</p>
          </div>
        </div>

        <!-- 客服报修 -->
        <div v-if="item.type == 'kefu_fix'">
          <!-- "kefu_fix" ： 客服报修 -->
          <p class="timer">
            <span>{{ item.created_at }}</span>
          </p>
          <!-- 客服报修 -->
          <div class="xiu">
            <p>{{ item.type_format }}</p>
            <p>上报人员:{{ Object(item.deteail.user).name }}</p>
            <p>报修类型：{{ item.deteail.remark }}</p>
            <p>备注：{{ item.deteail.detail }}</p>
            <p>
              <span>图片：</span>
              <img v-for="item in item.deteail.images_format" :src="item" alt />
            </p>
          </div>
        </div>
        <!-- 业主报修 -->
        <div v-if="item.type == 'yezhu_fix'">
          <!-- "kefu_fix" ： 客服报修 -->
          <p class="timer">
            <span>{{ item.created_at }}</span>
          </p>
          <!-- 客服报修 -->
          <div class="xiu">
            <p>{{ item.type_format }}</p>
            <p>上报人员:{{ Object(item.deteail.user).name }}</p>
            <p>报修类型：{{ item.deteail.remark }}</p>
            <p>备注：{{ item.deteail.detail }}</p>
            <p>
              <span>图片：</span>
              <img v-for="item in item.deteail.images_format" :src="item" alt />
            </p>
          </div>
        </div>
        <div v-if="item.type == 'park'">
          <!-- "park" ： 停车费 -->
          <p class="timer">
            <span>{{ item.created_at }}</span>
          </p>
          <!-- 停车费 -->
          <div class="xiu">
            <p>{{ item.type_format }}</p>
            <p>上报人员:{{ Object(item.deteail.user).name }}</p>
            <p>车牌号：{{ item.deteail.car_id }}</p>
            <p>停车时长：{{ item.deteail.park_time }}</p>
            <p>支付金额：{{ item.deteail.money }}元</p>
            <p>支付方式：{{ item.deteail.pay }}</p>
            <p>备注：{{ item.deteail.remark }}</p>
            <p>
              <span>图片：</span>
              <img v-for="item in item.deteail.images_format" :src="item" alt />
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "工作通知",
      list: []
    };
  },
  methods: {
    fanhui() {
      this.$router.go(-1);
    }
  },
  mounted() {
    this.http
      .get("/api/message")
      .then(res => {
        console.log(res);
        this.list = res.data.push;
      })
      .catch(res => {
        this.$toasted.error(res.message).goAway(1000);
      });
  }
};
</script>
<style scoped>
.workorder {
  height: 100%;
  width: 100%;
  background: red;
}
header {
  height: 1.3rem;
  background: #fff;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
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
section {
  min-height: 100%;
  width: 100%;
  background: #eeeeee;
  padding-top: 1.3rem;
  overflow: hidden;
}
.timer {
  width: 100%;
  text-align: center;
  padding: 0.3rem 0;
}
.timer > span {
  display: inline-block;
  height: 0.48rem;
  line-height: 0.48rem;
  color: #fff;
  padding: 0 0.2rem;
  background: #d2d2d2;
  border-radius: 0.1rem;
}
.sheng1 {
  min-height: 3.3rem;
  width: 6.2rem;
  background: #ffffff;
  border-radius: 0.1rem;
  margin: 0 auto;
  border: 1px solid #dddddd;
}
.sheng1 > p {
  font-size: 0.26rem;
  padding-left: 0.34rem;
  font-size: 0.28rem;
  font-weight: 500;
  margin-bottom: 0.16rem;
}
.sheng1 > :first-child {
  font-size: 0.32rem;
  font-weight: 550;
  color: #eab617;
  padding: 0.3rem 0.34rem;
  margin: 0;
}
.sheng {
  min-height: 4.3rem;
  width: 6.2rem;
  background: #ffffff;
  border-radius: 0.1rem;
  margin: 0 auto;
  border: 1px solid #dddddd;
}
.sheng > p {
  font-size: 0.26rem;
  padding-left: 0.34rem;
  font-size: 0.28rem;
  font-weight: 500;
  margin-bottom: 0.16rem;
}
.sheng > :first-child {
  font-size: 0.32rem;
  font-weight: 550;
  color: #eab617;
  padding: 0.3rem 0.34rem;
  margin: 0;
}
.xiu {
  width: 6.2rem;
  height: 4.26rem;
  background: #fff;
  border-radius: 0.1rem;
  margin: 0 auto;
  border: 1px solid #dddddd;
}
.xiu > p {
  padding-left: 0.3rem;
  margin-bottom: 0.1rem;
}
.xiu > :first-child {
  font-size: 0.32rem;
  font-weight: 550;
  color: #eab617;
  padding: 0.3rem 0.34rem;
  margin: 0;
}
.xiu > :last-child > span {
  float: left;
}
.xiu > :last-child > img {
  height: 1rem;
  width: 1rem;
  float: left;
  margin-right: 0.2rem;
}
.yezhu {
  min-height: 4rem;
  width: 6.2rem;
  background: #fff;
  border-radius: 0.1rem;
  border: 1px solid #dddddd;
  margin: 0 auto;
  overflow: hidden;
}
.yezhu > p {
  padding-left: 0.3rem;
  margin-bottom: 0.2rem;
}
.yezhu > :first-child {
  font-size: 0.32rem;
  font-weight: 550;
  color: #eab617;
  padding: 0.3rem 0.34rem;
  margin: 0;
}
.yezhu > :last-child > span {
  float: left;
}
.yezhu > :last-child > img {
  height: 1rem;
  width: 1rem;
  float: left;
  margin-bottom: 0.2rem;
}
.louguan {
  min-height: 3.9rem;
  width: 6.2rem;
  margin: 0 auto;
  background: #fff;
  border: 1px solid #dddddd;
  border-radius: 0.1rem;
  overflow: hidden;
}
.louguan > :first-child {
  font-size: 0.32rem;
  font-weight: 550;
  color: #eab617;
  padding: 0.3rem 0.34rem;
  margin: 0;
}
.louguan > p {
  padding-left: 0.3rem;
  margin-bottom: 0.1rem;
}
.louguan > :last-child > span {
  float: left;
}
.louguan > :last-child > img {
  float: left;
  height: 1rem;
  width: 1rem;
  margin-right: 0.2rem;
}
section > :last-child {
  margin-bottom: 0.4rem;
}
section {
  height: 90%;
  overflow: auto;
}
</style>


