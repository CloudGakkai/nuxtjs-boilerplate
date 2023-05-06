<script setup lang="ts">
import { useCharacterStore } from "~/stores/useCharacterStores";

useHead({
  title: "Rick & Morty Characters",
});

const store = useCharacterStore();
const { getCharacters } = store;
const { data, fetching } = storeToRefs(store);

onBeforeMount(async () => {
  await getCharacters();
});
</script>

<template>
  <div class="bg-slate-100 p-16">
    <OrganismCharacters :data="data" :loading="fetching" />
  </div>
</template>
