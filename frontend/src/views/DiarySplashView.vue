<template>
  <div class="container d-flex align-items-center justify-content-center">
    <h1 class="mt-5">로그인 후 이용가능</h1>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  components: {},
  data() {
    return {
      sampleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {
    if (this.user.email != undefined) {
      this.$router.push({ path: "/list" });
    }
  },
  unmounted() {},
  methods: {},
};
</script>
