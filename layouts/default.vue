<script setup lang="ts">
import { useSessionStore } from "~/stores/useSessionStore";

const sessionStore = useSessionStore();
const { session } = storeToRefs(sessionStore);

const onLogout = () => {
  sessionStore.clearSession();
};

const navigateToLogin = async () => {
  await navigateTo("/auth/sign-in");
};
</script>

<template>
  <div
    class="w-screen relative overflow-x-hidden min-h-screen bg-gray-100 scrollbar-hide file-manage-dashboard-page dark:bg-[#000]"
  >
    <header
      class="bg-neutral-bg p-5 md:py-6 md:pl-[25px] md:pr-[38px] dark:bg-dark-neutral-bg"
    >
      <div
        class="lg:w-10/12 lg:mx-auto flex flex-col md:flex-row items-center justify-between flex-wrap gap-5 lg:flex-nowrap lg:gap-0"
      >
        <a class="hidden logo" href="index.html"
          ><img
            class="md:mr-[100px] lg:mr-[133px]"
            src="assets/images/icons/icon-logo.svg"
            alt="Frox logo"
        /></a>
        <div class="flex order-first">
          <h1 class="text-2xl font-bold dark:text-white">BagiFiles</h1>
        </div>
        <div class="flex flex-none items-center justify-center" v-if="!session">
          <AtomButton @click="navigateToLogin"> Masuk / Daftar </AtomButton>
        </div>
        <div class="dropdown dropdown-end" v-else>
          <label class="cursor-pointer dropdown-label" tabindex="0"
            ><img
              src="https://api.dicebear.com/6.x/pixel-art-neutral/svg?seed=rully@bagifiles.com&backgroundColor=7364db"
              alt="user avatar"
              :width="48"
              :height="48"
              class="rounded-full"
            />
          </label>
          <ul class="dropdown-content" tabindex="0">
            <div
              class="relative menu rounded-box dropdown-shadow p-[25px] pb-[10px] bg-neutral-bg mt-[25px] md:mt-[40px] min-w-[237px] dark:text-gray-dark-500 dark:border-dark-neutral-border dark:bg-dark-neutral-bg"
            >
              <div
                class="border-solid border-b-8 border-x-transparent border-x-8 border-t-0 absolute w-[14px] top-[-7px] border-b-neutral-bg dark:border-b-dark-neutral-bg right-[18px]"
              ></div>
              <li
                class="text-gray-500 hover:text-gray-1100 hover:bg-gray-100 dark:text-gray-dark-500 dark:hover:text-gray-dark-1100 dark:hover:bg-gray-dark-100 rounded-lg group p-[15px] pl-[21px]"
              >
                <a
                  class="flex items-center bg-transparent p-0 gap-[7px]"
                  href="sign-in.html"
                >
                  <i class="w-4 h-4 grid place-items-center"
                    ><img
                      class="group-hover:filter-black dark:group-hover:filter-white"
                      src="/assets/images/icons/icon-user.svg"
                      alt="icon" /></i
                  ><span>Profil</span></a
                >
              </li>
              <li
                class="text-gray-500 hover:text-gray-1100 hover:bg-gray-100 dark:text-gray-dark-500 dark:hover:text-gray-dark-1100 dark:hover:bg-gray-dark-100 rounded-lg group p-[15px] pl-[21px]"
              >
                <a
                  class="flex items-center bg-transparent p-0 gap-[7px]"
                  href="#"
                >
                  <i class="w-4 h-4 grid place-items-center"
                    ><img
                      class="group-hover:filter-black dark:group-hover:filter-white"
                      src="/assets/images/icons/icon-favorite-chart.svg"
                      alt="icon" /></i
                  ><span>Dasbor</span></a
                >
              </li>
              <li
                class="text-gray-500 hover:text-gray-1100 hover:bg-gray-100 dark:text-gray-dark-500 dark:hover:text-gray-dark-1100 dark:hover:bg-gray-dark-100 rounded-lg group p-[15px] pl-[21px]"
              >
                <a
                  class="flex items-center bg-transparent p-0 gap-[7px]"
                  href="#"
                >
                  <i class="w-4 h-4 grid place-items-center"
                    ><img
                      class="group-hover:filter-black dark:group-hover:filter-white"
                      src="/assets/images/icons/icon-sun.svg"
                      alt="icon" /></i
                  ><span>Pengaturan</span></a
                >
              </li>
              <div
                class="w-full bg-neutral h-[1px] my-[7px] dark:bg-dark-neutral-border"
              ></div>
              <li
                class="text-gray-500 hover:text-gray-1100 hover:bg-gray-100 dark:text-gray-dark-500 dark:hover:text-gray-dark-1100 dark:hover:bg-gray-dark-100 rounded-lg group p-[15px] pl-[21px]"
              >
                <button
                  class="flex items-center bg-transparent p-0 gap-[7px]"
                  @click="onLogout"
                >
                  <i class="w-4 h-4 grid place-items-center"
                    ><img
                      class="group-hover:filter-black dark:group-hover:filter-white"
                      src="/assets/images/icons/icon-logout.svg"
                      alt="icon" /></i
                  ><span>Keluar</span>
                </button>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </header>
    <main
      class="overflow-x-scroll scrollbar-hide flex flex-col justify-between pt-[42px] px-[23px] pb-[28px] lg:w-10/12 lg:mx-auto"
    >
      <slot />
    </main>
    <footer class="mt-[37px] pb-10 px-5">
      <div
        class="w-full bg-neutral h-[1px] dark:bg-dark-neutral-border mb-[25px]"
      ></div>
      <div
        class="lg:w-10/12 lg:mx-auto flex flex-col md:flex-row items-center justify-between text-desc text-gray-400 flex-wrap gap-5 dark:text-gray-dark-400"
      >
        <div class="flex items-center gap-2 flex-wrap">
          <p>
            <span>&copy; 2023 -</span
            ><span class="text-color-brands">&nbsp;BagiFiles</span>
          </p>
          <div
            class="bg-color-brands rounded-full hidden w-[2px] h-[2px] md:block"
          ></div>
          <p>All rights reserved.</p>
        </div>
        <div class="flex items-center gap-[15px]">
          <a
            class="transition-colors duration-300 hover:text-color-brands"
            href="#"
            >About</a
          ><a
            class="transition-colors duration-300 hover:text-color-brands"
            href="#"
            >Careers</a
          ><a
            class="transition-colors duration-300 hover:text-color-brands"
            href="#"
            >Policy</a
          ><a
            class="transition-colors duration-300 hover:text-color-brands"
            href="#"
            >Contact</a
          >
        </div>
      </div>
    </footer>
  </div>
</template>
