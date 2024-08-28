<template>
  <section class="table-section">
    <div class="container">
      <input
        type="text"
        v-model.trim="placeName"
        placeholder="Введите название города"
      />
      <TransitionGroup name="list" tag="div" class="cards">
        <card
          v-for="place of store?.places"
          :place="place"
          :key="place.osm_id"
        />
      </TransitionGroup>
      <p v-if="placeName === ''" :key="3223232">
        Скорее вводи название города ))
      </p>
    </div>
  </section>
</template>
<script setup lang="ts">
import { useStore } from "./store";
import { ref, watch, onMounted } from "vue";
import card from "./components/card.vue";
const store = useStore();

let placeName = ref<string>("Калининград");
let debounceTimeout: null | number = null;
watch(placeName, async (newVal) => {
  if (newVal !== "") {
    if (debounceTimeout !== null) {
      clearTimeout(debounceTimeout);
    }
    debounceTimeout = window.setTimeout(async () => {
      await store.fetchParams(newVal);
      if (placeName.value == "") store.places = [];
    }, 800);
  }
});
onMounted(async () => {
  await store.fetchParams(placeName.value);
});
</script>
<style>
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 auto;
  width: auto;
  margin-top: 20px;
}
input[type="text"] {
  border: 1px solid #cccccc;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -khtml-border-radius: 3px;
  background: #ffffff !important;
  outline: none;
  height: 34px;
  min-width: 90%;
  font-size: 15px;
  color: #cccccc;
}
input[type="text"]:focus {
  color: #000000;
  border: 1px solid #000000;
}
</style>
