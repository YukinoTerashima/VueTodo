import axios from "axios";

/* eslint-disable no-console */

export default {
  async browseTaskList({ commit }) {
    try {
      const url = "/v1/tasks";
      const res = await axios.get(url);
      console.log(res.data.tasks);
      commit("browseTaskList", res.data.tasks);
    } catch (error) {
      const { status, statusText } = error.response;
      console.log(`Error! HTTP Status:${status} ${statusText}`);
    }
  }
};
