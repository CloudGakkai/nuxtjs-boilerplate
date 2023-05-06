<script setup lang="ts">
import { getRandomItemFromArray } from "~/helper/string-helper";

// Types
import type { Character } from "~/services/api/characters/types";

interface CharacterCardProps {
  character: Character;
}

defineProps<CharacterCardProps>();

const cardBgList = [
  "bg-cyan-100",
  "bg-yellow-100",
  "bg-purple-100",
  "bg-orange-100",
  "bg-lime-100",
  "bg-emerald-100",
  "bg-teal-100",
  "bg-sky-100",
  "bg-blue-100",
  "bg-indigo-100",
  "bg-violet-100",
  "bg-fuchsia-100",
  "bg-rose-100",
];

const background = computed(() => getRandomItemFromArray(cardBgList));
</script>

<template>
  <AtomCard class="flex flex-row" :class="background">
    <div class="flex-1">
      <NuxtImg
        :src="character.image"
        :width="230"
        :height="220"
        class="w-full h-full rounded-l-lg"
      />
    </div>
    <div class="flex-2 p-5">
      <h2 class="text-2xl font-roboto font-bold text-gray-900">
        {{ character.name }}
      </h2>
      <div class="flex flex-row items-center gap-2 mb-5">
        <AtomIndicator :status="character.status" />
        <span class="text-base font-roboto font-medium text-gray-900"
          >{{ character.status }} - {{ character.species }}</span
        >
      </div>
      <div class="flex flex-col">
        <span class="text-sm font-roboto text-gray-500"
          >Last known location:</span
        >
        <span class="text-sm font-roboto text-gray-900">{{
          character.location.name
        }}</span>
      </div>
    </div>
  </AtomCard>
</template>
