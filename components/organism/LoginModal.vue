<script setup lang="ts">
import * as yup from "yup";
import { useForm } from "vee-validate";
import { useAuthStore } from "~/stores/useAuthStore";

const schema = yup.object({
  email: yup
    .string()
    .required("Email tidak boleh kosong.")
    .email("Email tidak sah."),
  password: yup.string().required("Password tidak boleh kosong."),
});

const { useFieldModel, handleSubmit, errors } = useForm({
  validationSchema: schema,
  validateOnMount: false,
});

const [email, password] = useFieldModel(["email", "password"]);

const authStore = useAuthStore();
const { authState } = storeToRefs(authStore);

const onSubmit = handleSubmit.withControlled((values) => {
  authStore.doLogin(
    {
      identity: values.email,
      password: values.password,
    },
    () => {
      (document.querySelector("#project-modal") as HTMLInputElement).checked =
        false;
    }
  );
});
</script>

<template>
  <div class="modal">
    <div
      class="modal-box relative bg-neutral-bg scrollbar-hide dark:bg-dark-neutral-bg pt-[53px]"
    >
      <label class="absolute right-2 top-2 cursor-pointer" for="project-modal"
        ><img
          src="/assets/images/icons/icon-close-modal.svg"
          alt="close modal button"
      /></label>
      <div class="flex items-center justify-center flex-col mb-[30px]">
        <img
          class="inline-block"
          src="/assets/images/icons/icon-landing-success-1.svg"
          alt="landing success"
        />
        <h6
          class="text-header-6 font-semibold text-gray-500 text-center dark:text-gray-dark-500 mt-5"
        >
          Selamat Datang Kembali!
        </h6>
        <p class="text-sm text-gray-500 dark:text-gray-dark-500">
          Masuk untuk mulai mengunduh berkas ini
        </p>
      </div>

      <div>
        <label for="email">
          <p
            class="text-left text-sm mb-2 text-gray-1100 dark:text-gray-dark-1100"
          >
            E-mail
          </p>
        </label>
        <div class="form-control mb-[20px]">
          <div
            class="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442]"
          >
            <input
              class="input flex-1 bg-transparent focus:outline-none dark:text-gray-dark-300"
              type="text"
              placeholder="Email"
              name="email"
              v-model="email"
            />
          </div>
          <span v-if="errors.email" class="text-xs text-red">{{
            errors.email
          }}</span>
        </div>
        <label for="password">
          <p
            class="text-left text-sm mb-2 text-gray-1100 dark:text-gray-dark-1100"
          >
            Kata Sandi
          </p>
        </label>
        <div class="form-control mb-[20px]">
          <div
            class="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442]"
          >
            <input
              class="input flex-1 bg-transparent focus:outline-none dark:text-gray-dark-300"
              type="password"
              placeholder="Password"
              name="password"
              autocomplete="on"
              v-model="password"
            />
          </div>
          <span v-if="errors.password" class="text-xs text-red">{{
            errors.password
          }}</span>
        </div>
      </div>
      <button
        class="btn normal-case h-fit min-h-fit transition-all duration-300 border-4 w-full border-neutral-bg mb-[20px] py-[14px] dark:border-dark-neutral-bg"
        @click="onSubmit"
        :disabled="authState.fetching"
      >
        Masuk</button
      ><a class="text-right text-xs block text-[#8083A3] mb-[20px]" href="#"
        >Lupa kata sandi?</a
      >
      <p class="text-sm text-gray-1100 dark:text-gray-dark-1100 text-center">
        Belum punya akun?<a class="text-color-brands" href="sign-up.html"
          >&nbsp;Buat Sekarang</a
        >
      </p>
    </div>
  </div>
</template>
