<script setup>
import { ref } from "vue";

let price = ref({});

async function getPrice() {
  const res = await fetch("https://api.coincap.io/v2/assets");
  let data = await res.json();
  price.value = data;
}

getPrice();
</script>

<template>
  <h4>Bitcoin:</h4>

  <div v-if="!price">loading...</div>
  <pre v-else :key="id">
  {{
      "currency: " +
      price.data[0].id +
      "," +
      " price: " +
      price.data[0].priceUsd +
      "," +
      " symbol: " +
      price.data[0].symbol
    }} </pre
  >
</template>
