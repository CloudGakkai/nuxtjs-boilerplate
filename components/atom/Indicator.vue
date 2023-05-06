<script setup lang="ts">
import { CharacterStatus } from "~/services/api/characters/types";

interface IndicatorProps {
  status: CharacterStatus;
}

const { status } = defineProps<IndicatorProps>();

const statusStyles = computed(() => ({
  "bg-green-500": status === CharacterStatus.alive,
  "bg-red-500": status === CharacterStatus.dead,
  "bg-gray-500": status === CharacterStatus.unknown,
}));
</script>

<template>
  <div class="w-[0.5rem] h-[0.5rem] rounded-full" :class="statusStyles"></div>
</template>
