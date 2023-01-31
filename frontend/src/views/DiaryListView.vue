<template>
  <div>
    <main>
      <div class="container my-3">
        <div class="tab_header d-flex justify-content-between">
          <div class="ms-3">
            <div
              class="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="list"
                autocomplete="off"
                checked
              />
              <label class="btn btn-outline-primary" for="list">
                <i class="bi bi-list-ul"></i>
              </label>

              <input
                type="radio"
                class="btn-check"
                name="btnradio"
                id="calender"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary" for="calender">
                <i class="bi bi-grid-fill"></i>
              </label>
            </div>
            <button
              type="button"
              class="btn btn-outline-primary rounded-circle ms-3"
            >
              <i class="bi bi-pencil-square"></i>
            </button>
          </div>
          <div class="me-3">
            <input type="date" class="form-control border-primary me-2" />
          </div>
        </div>
        <hr />
        <div>
          <div class="tab_content my-3 container">
            <!-- TimeLine item 1-->
            <div
              class="row text-start"
              :key="i"
              v-for="(groupBy, i) in groupByData"
            >
              <div class="col-auto text-center flex-column d-none d-sm-flex">
                <div class="row h-50">
                  <div class="col">&nbsp;</div>
                  <div class="col">&nbsp;</div>
                </div>
                <h5 class="m-2">
                  <span class="badge rounded-circle bg-primary border-primary"
                    >&nbsp;</span
                  >
                </h5>
                <div class="row h-50">
                  <div class="col border-end">&nbsp;</div>
                  <div class="col">&nbsp;</div>
                </div>
              </div>
              <div class="col-10 mx-auto py-2 mb-3">
                <div class="card border-primary shadow">
                  <div class="card-header text-primary">
                    {{ groupBy[0].date }}
                  </div>
                  <div class="card-body ms-2">
                    <h4
                      class="card-text mb-3"
                      :key="i"
                      v-for="(dateList, i) in groupBy"
                    >
                      {{ dateList.account }} : {{ dateList.dia }}
                      <span class="text-success">( + 130 )</span>
                    </h4>
                    <hr />
                    <p
                      class="card-text text-muted"
                      :key="i"
                      v-for="(dateList, i) in groupBy"
                    >
                      {{ dateList.account }} : 무기
                      {{ dateList.totalweapon }} ({{ dateList.totalweapon_a }})
                      , 방어구 {{ dateList.totalarmor }} ({{
                        dateList.totalarmor_a
                      }}) , 장신구 {{ dateList.totalaccessory }} ({{
                        dateList.totalaccessory_a
                      }}) , 유물 {{ dateList.totalrelic }} ({{
                        dateList.totalrelic_a
                      }}) , 세공석 {{ dateList.totalworkmanship }} , 기타 :
                      {{ dateList.totaletc == null ? "X" : "O" }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- end TimeLine Item 1-->
            <!-- TimeLine item 2-->
            <div class="row text-start">
              <div class="col-auto text-center flex-column d-none d-sm-flex">
                <div class="row h-50">
                  <div class="col border-end">&nbsp;</div>
                  <div class="col">&nbsp;</div>
                </div>
                <h5 class="m-2">
                  <span class="badge rounded-circle bg-light border"
                    >&nbsp;</span
                  >
                </h5>
                <div class="row h-50">
                  <div class="col border-end">&nbsp;</div>
                  <div class="col">&nbsp;</div>
                </div>
              </div>
              <div class="col-10 mx-auto py-2 mb-3">
                <div class="card shadow">
                  <div class="card-header">2023-01-16</div>
                  <div class="card-body ms-2">
                    <h4 class="card-text mb-3">1 : 2,930 ( + 130 )</h4>
                    <h4 class="card-text">2 : 4,600 ( + 300 )</h4>
                    <hr />
                    <p class="card-text text-muted">
                      1 : 무기 5 (0) , 방어구 15 (1) , 장신구 2 (0) , 유물 3 (1)
                      , 세공석 7 , 기타 : O
                    </p>
                    <p class="card-text text-muted">
                      2 : 무기 4 (1) , 방어구 13 (0) , 장신구 1 (0) , 유물 4 (0)
                      , 세공석 9 , 기타 : x
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- end TimeLine Item 2-->
          </div>
          <div class="tab-content my-3 container">
            <div class="row text-start">
              <div class="col-6 col-lg-4">
                <div class="card mb-3 border-primary">
                  <div class="card-body">
                    <h4 class="card-title ms-1 mb-2 text-primary">
                      2023-01-16
                    </h4>
                    <p class="card-text m-2 fs-4">
                      1 : 2,130 <span class="text-success">(+ 130)</span>
                    </p>
                    <p class="card-text m-2 fs-4">
                      2 : 4,600 <span class="text-success">(+ 300)</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-6 col-lg-4">
                <div class="card mb-3">
                  <div class="card-body">
                    <h4 class="card-title ms-1 mb-2">2023-01-16</h4>
                    <p class="card-text m-2 fs-4">
                      1 : 2,130 <span class="text-success">(+ 130)</span>
                    </p>
                    <p class="card-text m-2 fs-4">
                      2 : 4,600 <span class="text-success">(+ 300)</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-6 col-lg-4">
                <div class="card mb-3">
                  <div class="card-body">
                    <h4 class="card-title ms-2 mb-2">2023-01-16</h4>
                    <p class="card-text m-2 fs-4">
                      1 : 2,130 <span class="text-success">(+ 130)</span>
                    </p>
                    <p class="card-text m-2 fs-4">
                      2 : 4,600 <span class="text-success">(+ 300)</span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-6 col-lg-4">
                <div class="card mb-3">
                  <div class="card-body">
                    <h4 class="card-title ms-2 mb-2">2023-01-16</h4>
                    <p class="card-text m-2 fs-4">
                      1 : 2,130 <span class="text-success">(+ 130)</span>
                    </p>
                    <p class="card-text m-2 fs-4">
                      2 : 4,600 <span class="text-success">(+ 300)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      diaryList: [],
      groupByData: [],
      today: new Date(),
    };
  },
  setup() {},
  created() {
    this.getDiaryList();
  },
  mounted() {},
  unmounted() {},
  methods: {
    async getDiaryList() {
      this.diaryList = await this.$api("/api/diaryList", {
        param: ["wlsgh8309@naver.com"],
      });
      console.log(this.diaryList);

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

      this.groupByData = groupBy(this.diaryList, "date");
      console.log(this.groupByData);
      console.log(this.today);
    },
  },
};
</script>
