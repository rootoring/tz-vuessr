import { defineStore } from "pinia";
import type { Place } from "../types";
import apiModule from "../../api";
const api = apiModule();
interface State {
  places: [] | Place[];
}

export const useStore = defineStore({
  id: "Products",
  state: (): State => ({
    places: [],
  }),

  actions: {
    async fetchParams(q: string) {
      try {
        let data = await api.fetchQuery(q);
        if (data) this.places = await data.json();
      } catch (e) {
        console.error("Error parsing saved tasks:", e);
      }
    },
  },
});
