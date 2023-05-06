<script setup lang="ts">
// Types
import type { Character } from "~/services/api/characters/types";

interface CharactersProps {
  data: Character[];
  loading: boolean;
}
defineProps<CharactersProps>();
</script>

<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    v-if="!loading && data.length > 0"
  >
    <MoleculeCharacterCard
      v-for="(character, charIndex) in data"
      :key="charIndex.toString()"
      :character="character"
    />
  </div>
  <div v-else>
    <h2 class="text-2xl font-roboto">Loading...</h2>
  </div>
</template>
