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
                @click="timelineClick"
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
                @click="cardClick"
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
            <input
              type="date"
              @input="changeDay($event)"
              class="form-control border-primary me-2"
            />
          </div>
        </div>
        <hr />
        <div>
          <div class="my-3 container" v-if="timeline">
            <!-- TimeLine item 1-->
            <div
              class="row text-start"
              :key="i"
              v-for="(groupBy, i) in groupByData"
            >
              <div class="col-auto text-center flex-column d-none d-sm-flex">
                <div class="row h-50">
                  <div
                    class="col"
                    :class="
                      getDateFormat(groupBy[0].date) !=
                      getDateFormat(new Date())
                        ? 'border-end'
                        : ''
                    "
                  >
                    &nbsp;
                  </div>
                  <div class="col">&nbsp;</div>
                </div>
                <h5 class="m-2">
                  <span
                    class="badge rounded-circle border"
                    :class="
                      getDateFormat(groupBy[0].date) == getDateFormat(focusday)
                        ? 'bg-primary border-primary'
                        : ''
                    "
                    >&nbsp;</span
                  >
                  <!-- <span class="badge rounded-circle bg-primary border-primary"
                    >&nbsp;</span
                  > -->
                </h5>
                <div class="row h-50">
                  <div class="col border-end">&nbsp;</div>
                  <div class="col">&nbsp;</div>
                </div>
              </div>
              <div class="col-10 mx-auto py-2 mb-3">
                <div
                  :id="getDateFormat(groupBy[0].date)"
                  class="card border shadow"
                  :class="
                    getDateFormat(groupBy[0].date) == getDateFormat(focusday)
                      ? 'border-primary'
                      : ''
                  "
                >
                  <div
                    class="card-header"
                    :class="
                      getDateFormat(groupBy[0].date) == getDateFormat(focusday)
                        ? 'text-primary'
                        : ''
                    "
                  >
                    {{ getDateFormat(groupBy[0].date) }}
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
          </div>
          <div class="my-3 container" v-if="card">
            <div class="row text-start">
              <div
                class="col-6 col-lg-4"
                :key="i"
                v-for="(groupBy, i) in groupByData"
              >
                <div
                  :id="getDateFormat(groupBy[0].date)"
                  class="card mb-3"
                  :class="
                    getDateFormat(groupBy[0].date) == getDateFormat(focusday)
                      ? 'border-primary'
                      : ''
                  "
                >
                  <div class="card-body">
                    <h4
                      class="card-title ms-1 mb-2"
                      :class="
                        getDateFormat(groupBy[0].date) ==
                        getDateFormat(focusday)
                          ? 'text-primary'
                          : ''
                      "
                    >
                      {{ getDateFormat(groupBy[0].date) }}
                    </h4>
                    <p
                      class="card-text m-2 fs-4"
                      :key="i"
                      v-for="(dateList, i) in groupBy"
                    >
                      {{ dateList.account }} : {{ dateList.dia }}
                      <span class="text-success">(+ 130)</span>
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
import moment from "moment/moment";

export default {
  components: {},
  data() {
    return {
      diaryList: [],
      groupByData: [],
      timeline: true,
      card: false,
      focusday: new Date(),
    };
  },
  setup() {},
  created() {
    this.getDiaryList();
  },
  mounted() {},
  unmounted() {},
  methods: {
    changeDay(event) {
      this.focusday = event.target.value;
      console.log(this.focusday);
      document.getElementById(this.focusday).scrollIntoView(true);
    },
    getDateFormat(date, format = "YYYY-MM-DD") {
      return moment(date).format(format);
    },
    timelineClick() {
      this.timeline = true;
      if (this.timeline) {
        this.card = false;
      }
    },
    cardClick() {
      this.card = true;
      if (this.card) {
        this.timeline = false;
      }
    },
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
