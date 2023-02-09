<template>
  <main>
    <div class="container my-3">
      <div class="detail_header">
        <div class="header_top d-flex justify-content-between mb-3">
          <h3>{{ this.date }}</h3>
          <div>
            <button
              @click="goToList()"
              type="button"
              class="btn btn-outline-dark rounded-circle me-1"
            >
              <i class="bi bi-arrow-left"></i>
            </button>
            <button
              @click="goToUpdate(this.user.email, this.date)"
              type="button"
              class="btn btn-outline-primary rounded-circle me-1"
            >
              <i class="bi bi-pencil-square"></i>
            </button>
          </div>
        </div>
        <div class="header_content text-start">
          <div :key="i" v-for="(dateDetail, i) in groupByData">
            <h4 class="card-text mb-3">
              {{ dateDetail[0].account }}번 계정 다이아 :
              {{ dateDetail[0].dia }}
            </h4>
          </div>
          <div class="mb-4"></div>
          <div :key="i" v-for="(totaldateDetail, i) in totaldiaryDetail">
            <p class="card-text text-muted mb-2 fs-5">
              {{ totaldateDetail.account }} : 무기
              {{ totaldateDetail.totalweapon }} ({{
                totaldateDetail.totalweapon_a
              }}) , 방어구 {{ totaldateDetail.totalarmor }} ({{
                totaldateDetail.totalarmor_a
              }}) , 장신구 {{ totaldateDetail.totalaccessory }} ({{
                totaldateDetail.totalaccessory_a
              }}) , 유물 {{ totaldateDetail.totalrelic }} ({{
                totaldateDetail.totalrelic_a
              }}) , 세공석 {{ totaldateDetail.totalworkmanship }} , 기타 :
              {{ totaldateDetail.totaletc == null ? "X" : "O" }}
            </p>
          </div>
        </div>
      </div>
      <hr class="my-4" />
      <div class="detail_body">
        <div class="body_item table-responsive my-3">
          <table
            class="table text-center mb-3"
            style="white-space: nowrap"
            :key="i"
            v-for="(dateDetail, i) in groupByData"
          >
            <thead class="table-secondary">
              <tr>
                <th scope="col"></th>
                <th scope="col">무기(아발디)</th>
                <th scope="col">방어구(아발디)</th>
                <th scope="col">장신구(아발디)</th>
                <th scope="col">유물(아발디)</th>
                <th scope="col">세공석</th>
                <th scope="col">기타</th>
              </tr>
            </thead>
            <tbody>
              <tr :key="i" v-for="(detail, i) in dateDetail">
                <th scope="row">
                  {{ detail.account }}-{{ detail.account_list }}
                </th>
                <td>{{ detail.weapon }} ({{ detail.weapon_a }})</td>
                <td>{{ detail.armor }} ({{ detail.armor_a }})</td>
                <td>{{ detail.accessory }} ({{ detail.accessory_a }})</td>
                <td>{{ detail.relic }} ({{ detail.relic_a }})</td>
                <td>{{ detail.workmanship }}</td>
                <td>{{ detail.etc }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
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
      diaryDetail: [],
      totaldiaryDetail: [],
      groupByData: [],
    };
  },
  setup() {},
  created() {
    this.date = this.$route.query.date;
    this.getDiaryDetail();
    this.getTotalDiaryDetail();
  },
  mounted() {},
  unmounted() {},
  methods: {
    async getDiaryDetail() {
      this.diaryDetail = await this.$api("/api/diaryDetail", {
        param: [this.date, this.user.email],
      });
      console.log(this.diaryDetail);
      const groupBy = function (data, key) {
        return data.reduce(function (carry, el) {
          var group = el[key];
          if (carry[group] === undefined) {
            carry[group] = [];
          }
          carry[group].push(el);
          return carry;
        }, {});
      };
      this.groupByData = groupBy(this.diaryDetail, "account");
      console.log(this.groupByData);
    },
    async getTotalDiaryDetail() {
      this.totaldiaryDetail = await this.$api("/api/totalDiaryDetail", {
        param: [this.date, this.user.email],
      });
      console.log(this.totaldiaryDetail);
    },
    goToList() {
      this.$router.push({ path: "/list" });
    },
    goToUpdate(email, date) {
      this.$router.push({
        path: "/update",
        query: { email: email, date: date },
      });
    },
  },
};
</script>
