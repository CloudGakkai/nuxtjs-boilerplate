<script setup lang="ts">
import datefn from "dayjs";
import { useFileStore } from "~/stores/useFileStores";
import { useSessionStore } from "~/stores/useSessionStore";
import { formatSizeUnits } from "~/helper/string-helper";

const route = useRoute();
const store = useFileStore();
const sessionStore = useSessionStore();
const { getFileDetail, downloadFile } = store;

const { detail } = storeToRefs(store);
const { session } = storeToRefs(sessionStore);

onBeforeMount(async () => {
  await getFileDetail(route.params.uuid as string);
});

const fileName = computed(() => detail.value.data?.file_name ?? "");
const fileSize = computed(() =>
  formatSizeUnits(detail.value.data?.file_size ?? 0)
);
const fileContent = computed(() => detail.value.data?.content_type ?? "");
const uploadedDate = computed(() =>
  datefn(detail.value.data?.created_at ?? "").format("YYYY-MM-DD")
);

const onDownload = () => {
  if (!session.value) {
    (document.querySelector("#project-modal") as HTMLInputElement).checked =
      true;
  } else {
    downloadFile();
  }
};
</script>

<template>
  <div>
    <Head>
      <Title>{{ fileName }}</Title>
    </Head>
    <div
      class="grid grid-cols-1 gap-3"
      v-if="!detail.fetching && !!detail.data"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <AtomCard class="flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <NuxtImg
              src="/assets/images/icons/icon-avi.svg"
              :width="43"
              :height="49"
            />
            <div class="flex flex-col">
              <h2 class="font-bold text-lg">{{ fileName }}</h2>
            </div>
          </div>
          <AtomButton class="w-full" @click="onDownload">Unduh</AtomButton>
        </AtomCard>
        <AtomCard>
          <h3 class="text-base font-bold">Informasi Berkas</h3>
          <p class="text-sm">
            <span class="font-bold">Ukuran:</span> {{ fileSize }}
          </p>
          <p class="text-sm">
            <span class="font-bold">Diunggah:</span> {{ uploadedDate }}
          </p>
          <p class="text-sm">
            <span class="font-bold">Jenis:</span> {{ fileContent }}
          </p>
        </AtomCard>
      </div>
      <AtomCard>
        <h3 class="text-base font-bold">Tentang Format (.mp4)</h3>
        <p class="text-sm text-gray-500">
          File .mp4 (MPEG-4 Part 14) adalah salah satu format kontainer
          multimedia yang paling umum digunakan untuk menyimpan video dan audio
          digital, serta data lain seperti teks dan gambar. Format ini
          didasarkan pada teknologi kompresi MPEG-4 yang dikembangkan oleh
          Moving Picture Experts Group (MPEG). File .mp4 memungkinkan streaming
          dan pengiriman video/audio yang efisien melalui internet, serta
          kompatibilitas yang luas dengan berbagai perangkat dan aplikasi
          pemutar media. File MP4 sangat populer karena ukurannya yang relatif
          kecil dan kualitas yang baik.
        </p>
      </AtomCard>
    </div>
    <div v-else>
      <h2 class="italic text-lg text-gray-900">Getting file ready...</h2>
    </div>
    <input class="modal-toggle" type="checkbox" id="project-modal" hidden />
    <OrganismLoginModal />
  </div>
</template>
