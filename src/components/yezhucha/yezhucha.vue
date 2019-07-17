<template>
  <div class="MoreSettings">
    <header class="header">
      <p></p>
      <div>
        <p @click="fanhui">
          <img class="fanhui" src="../../assets/img/left0.png" alt />
        </p>
        <p>{{ msg }}</p>
      </div>
    </header>
    <div class="senter">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
        @search="onSearch"
      >
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
      <div class="auto">
          <p v-for="(item,index) in list" :key="index" @click="yehzu(item)">
              {{ item.yezhu_name }}
          </p>
      </div>
    </div>
  </div>
</template>
<script>
import { Switch } from "vant";
export default {
  data() {
    return {
      msg: "业主查询",
      value: "",
      list:[]
    };
  },
  methods: {
    // 返回按钮
    fanhui() {
      this.$router.go(-1);
    },
    onSearch() {
        this.list = []
      this.http.get("/api/yezhu?keywords=" + this.value).then(res => {
        console.log(res);
        for(var i = 0 ; i < res.data.yezhu.length ; i++){
            console.log(i)
            this.list.push(res.data.yezhu[i])
        }
      }).catch(res =>{
          this.$toasted.error(res.message).goAway(1000)
      });
    },
    yehzu(item){
        this.$store.commit('yezhuid',item)
        this.$router.go(-1);
        console.log(this.$store.state.yezhuid)
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
.senter {
  margin-top: 0.2rem;
  height: 85%;
}
.senter > p {
  line-height: 1rem;
  border-bottom: 1px solid #dddddd;
  padding: 0 0.3rem;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.auto {
  height: 90%;
  width: 100%;
  overflow: auto
}
.auto > p {
    height: 0.8rem;
    padding: 0 0.5rem;
    line-height: 0.8rem;
    font-size: 0.3rem;
    border-bottom: 1px solid #ccc
}
</style>
