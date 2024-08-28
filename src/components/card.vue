<template>
  <div class="place-card">
    <h2>{{ place.name }}</h2>
    <p>{{ place.display_name }}</p>
    <p><strong>Type:</strong> {{ place.type }}</p>
    <p><strong>Latitude:</strong> {{ place.lat }}</p>
    <p><strong>Longitude:</strong> {{ place.lon }}</p>
    <p><strong>Importance:</strong> {{ place.importance.toFixed(2) }}</p>
    <p><strong>OSM ID:</strong> {{ place.osm_id }}</p>
    <p>
      <strong>Licence:</strong>
      {{ place.licence }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import type { Place } from "../types";

const props = defineProps<{ place: Place }>();
</script>

<style scoped>
.place-card {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  max-width: 400px;
  background-color: #eceaea;
}
h2 {
  font-size: 19px;
  margin-bottom: 10px;
}
</style>
