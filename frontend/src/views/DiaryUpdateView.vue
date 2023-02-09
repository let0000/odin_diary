<template>
  <main>
    <div class="container my-3">
      <div class="detail_header">
        <div class="header_top d-flex justify-content-between mb-3">
          <div class="d-flex align-items-center">
            <button
              type="button"
              class="btn rounded-circle me-3"
              @click="goToList"
            >
              <i class="bi bi-arrow-left"></i>
            </button>
            <h3 class="mt-2">{{ diaryData.date }}</h3>
          </div>
        </div>
        <div class="header_content text-start">
          <div :key="i" v-for="(dateDetail, i) in groupByData">
            <h5 class="card-text mb-3">
              {{ dateDetail[0].account }}번 계정 다이아 :
              {{ dateDetail[0].dia }}
            </h5>
          </div>
        </div>
      </div>
      <hr class="my-4" />
      <div class="detail_body">
        <div class="body_item table-responsive my-3">
          <table class="table text-center" style="white-space: nowrap">
            <thead class="table-secondary">
              <tr>
                <th scope="col"></th>
                <th scope="col">무기</th>
                <th scope="col">방어구</th>
                <th scope="col">장신구</th>
                <th scope="col">유물</th>
                <th scope="col">세공석</th>
                <th scope="col">기타</th>
                <th scope="col">다이아</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <input type="text" class="w-25" v-model="diaryData.account" />
                  -
                  <input
                    type="text"
                    class="w-25"
                    v-model="diaryData.account_list"
                  />
                </th>
                <td>
                  <input
                    type="text"
                    class="w-25"
                    v-model="diaryData.weapon"
                  /><input
                    type="text"
                    class="w-25"
                    v-model="diaryData.weapon_a"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="w-25"
                    v-model="diaryData.armor"
                  /><input
                    type="text"
                    class="w-25"
                    v-model="diaryData.armor_a"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="w-25"
                    v-model="diaryData.accessory"
                  /><input
                    type="text"
                    class="w-25"
                    v-model="diaryData.accessory_a"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="w-25"
                    v-model="diaryData.relic"
                  /><input
                    type="text"
                    class="w-25"
                    v-model="diaryData.relic_a"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    class="w-50"
                    v-model="diaryData.workmanship"
                  />
                </td>
                <td>
                  <input type="text" class="w-75" v-model="diaryData.etc" />
                </td>
                <td>
                  <input type="text" class="w-75" v-model="diaryData.dia" />
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-primary rounded-circle me-1"
                    @click="diaryInsert"
                  >
                    <i class="bi bi-check"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            class="table text-center"
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
                <th scope="col"></th>
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
                <td>
                  <button
                    @click="deleteDiary(detail.id)"
                    type="button"
                    class="btn btn-outline-danger rounded-circle"
                  >
                    <i class="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="detail_footer text-center">
        <button
          type="button"
          class="btn btn-outline-primary me-2"
          @click="goToList"
        >
          완료
        </button>
      </div>
    </div>
  </main>
</template>
<script>
import moment from "moment/moment";

export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  components: {},
  data() {
    return {
      diaryData: {
        email: this.$route.query.email,
        date: this.$route.query.date,
        account: 1,
        account_list: 1,
        weapon: 0,
        weapon_a: 0,
        armor: 0,
        armor_a: 0,
        accessory: 0,
        accessory_a: 0,
        relic: 0,
        relic_a: 0,
        workmanship: 0,
        etc: "",
        dia: 0,
      },
      today: new Date(),
      diaryDetail: [],
      groupByData: [],
    };
  },
  setup() {},
  created() {
    this.getDiaryDetail();
  },
  mounted() {
    if (this.user.email == undefined) {
      alert("로그인을 해야 이용할 수 있습니다.");
      this.$router.push({ path: "/" });
    }
  },
  unmounted() {},
  methods: {
    async getDiaryDetail() {
      this.diaryDetail = await this.$api("/api/diaryDetail", {
        param: [this.diaryData.date, this.diaryData.email],
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
    getDateFormat(date, format = "YYYY-MM-DD") {
      return moment(date).format(format);
    },
    async diaryInsert() {
      await this.$api("/api/diaryInsert", {
        param: [this.diaryData],
      });
      this.getDiaryDetail();
      this.diaryData.account = 0;
      this.diaryData.account_list = 0;
      this.diaryData.weapon = 0;
      this.diaryData.weapon_a = 0;
      this.diaryData.armor = 0;
      this.diaryData.armor_a = 0;
      this.diaryData.accessory = 0;
      this.diaryData.accessory_a = 0;
      this.diaryData.relic = 0;
      this.diaryData.relic_a = 0;
      this.diaryData.workmanship = 0;
      this.diaryData.etc = "";
      this.diaryData.dia = 0;
    },
    goToList() {
      this.$router.push({ path: "/list" });
    },
    deleteDiary(diary_id) {
      this.$swal
        .fire({
          title: "정말 삭제하시겠습니까?",
          showCancelButton: true,
          confirmButtonText: "삭제",
          cancelButtonText: "취소",
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            await this.$api("/api/diaryDelete", { param: [diary_id] });
            this.getDiaryDetail();
            this.$swal.fire("삭제완료!", "", "success");
          }
        });
    },
  },
};
</script>
