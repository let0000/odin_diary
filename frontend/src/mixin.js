import axios from "axios";

export default {
  methods: {
    async $api(url, data) {
      return (
        await axios({
          method: "post",
          url,
          data,
        }).catch((e) => {
          console.log(e);
        })
      ).data;
    },
  },
  $formatDate(dateString) {
    const date = new Date(dateString);
    // Then specify how you want your dates to be formatted
    return new Intl.DateTimeFormat("default", { dateStyle: "long" }).format(
      date
    );
  },
};
