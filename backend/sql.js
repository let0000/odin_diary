module.exports = {
  userList: {
    query: "select * from `odin-user`",
  },
  diaryList: {
    query:
      "select email , date, account, sum(weapon) as totalweapon, sum(weapon_a) as totalweapon_a, sum(armor) as totalarmor, sum(armor_a) as totalarmor_a, sum(accessory) as totalaccessory, sum(accessory_a) as totalaccessory_a, sum(relic) as totalrelic, sum(relic_a) as totalrelic_a, sum(workmanship) as totalworkmanship, group_concat(etc) as totaletc, dia from `odin-data` where email = ? group by date DESC, account; ",
  },
  diaryDetail: {
    query: "select * from `odin-data` where date = ? and email = ?;",
  },
  totalDiaryDetail: {
    query:
      "select email , date, account, sum(weapon) as totalweapon, sum(weapon_a) as totalweapon_a, sum(armor) as totalarmor, sum(armor_a) as totalarmor_a, sum(accessory) as totalaccessory, sum(accessory_a) as totalaccessory_a, sum(relic) as totalrelic, sum(relic_a) as totalrelic_a, sum(workmanship) as totalworkmanship, group_concat(etc) as totaletc, dia from `odin-data` where date = ? and email = ? group by date DESC, account; ",
  },
  DataInsert: {
    query:
      "insert into `odin-data` (email, account, account_list, weapon, weapon_a, armor, armor_a, accessory, accessory_a, relic, relic_a , workmanship, etc, dia) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);",
  },
};
