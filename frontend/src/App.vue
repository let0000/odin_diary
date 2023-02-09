<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">오딘일기</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-if="user.email != undefined">
            <router-link class="nav-link active" to="/list"
              >일기목록</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item me-3" v-if="user.email != undefined">
            <a class="nav-link active">{{ user.profile.nickname }}</a>
          </li>
          <li class="nav-item" v-if="user.email == undefined">
            <button class="btn btn-primary" type="button" @click="kakaoLogin">
              로그인
            </button>
          </li>
          <li class="nav-item" v-else>
            <button class="btn btn-primary" type="button" @click="kakaoLogout">
              로그아웃
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: "profile_nickname, account_email, gender",
        success: this.getProfile,
      });
    },
    getProfile(authObj) {
      console.log(authObj);
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: (res) => {
          const kakao_account = res.kakao_account;
          console.log(kakao_account);
          this.login(kakao_account);
          alert("로그인 성공!");
          this.$router.push({ path: "/" });
        },
      });
    },
    async login(kakao_account) {
      await this.$api("/api/login", {
        param: [
          {
            email: kakao_account.email,
            nickname: kakao_account.profile.nickname,
          },
          { nickname: kakao_account.profile.nickname },
        ],
      });

      this.$store.commit("user", kakao_account);
    },
    kakaoLogout() {
      window.Kakao.Auth.logout((response) => {
        console.log(response);
        this.$store.commit("user", {});
        alert("로그아웃");
        this.$router.push({ path: "/" });
      });
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
