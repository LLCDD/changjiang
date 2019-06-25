<template>
  <div>
    <div>
      <input type="text" v-model="phone" placeholder="phone">
    </div>
    <div>
      <input type="password" v-model="password">
    </div>
    <button @click="login">login</button>
  </div>
</template>

<script>
import http from "@/http";
import router from "@/router";
export default {
  name: "login",
  data() {
    return {
      phone: "15639279238",
      password: "111111"
    };
  },
  created() {
    // db.dropAllDB()
  },
  methods: {
    async login() {
      try {
        let res = await http.post("/api/login", {
          username: this.phone,
          password: this.password
        });
        this.$store.dispatch("login", res.data);
        this.$toasted.success("登录成功").goAway(1500);
        this.$router.replace({ name: "home" });
      } catch (error) {
        this.$toasted.error(error.message, { icon: "error" }).goAway(2000);
      }
    }
  }
};
</script>

