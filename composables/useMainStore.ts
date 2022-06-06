import { defineStore } from "pinia";

export default defineStore("main", {
  state: () => ({
    teams: [],
    leagues: [],
    sports: [],
    countries: [],
  }),

  getters: {},
  actions: {
    async getItemsSelect() {
      this.teams = await $fetch("/api/search/teams").then((r) => {
        return r.result;
      });
      this.leagues = await $fetch("/api/search/leagues").then((r) => {
        return r.result;
      });
      this.sports = await $fetch("/api/search/sports").then((r) => {
        return r.result;
      });
      this.countries = await $fetch("/api/search/countries").then((r) => {
        return r.result;
      });
    },
  },
});
