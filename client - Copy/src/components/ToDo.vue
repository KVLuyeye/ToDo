<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  msg: String,
});

let todos = ref([]);

async function getTodos() {
  const response = await fetch("http://localhost:3000/todos/all");
  let data = await response.json();
  todos.value = data;
}

getTodos();
</script>

<template>
  <section>
    <h1 class="mb-4 pl-5 pt-4 text-2xl">{{ msg }}</h1>

    <div class="justify-items-ends flex justify-center">
      <input
        type="text"
        name=""
        id=""
        class="h-8 rounded border border-solid border-black"
      />

      <button class="ml-10 rounded border border-solid border-black p-2">
        create
      </button>
    </div>

    <!--
      <div class="mt-12 mb-12">
    <ul>
      <li v-for="todo in todos" :key="id" :value="task">
        {{ todo.id + ". " + todo.task }}
      </li>
    </ul>
  </div>
  --></section>
</template>
