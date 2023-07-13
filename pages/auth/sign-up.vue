<script setup lang="ts">
import * as yup from "yup";
import { useForm } from "vee-validate";
import { useAuthStore } from "~/stores/useAuthStore";

const schema = yup.object({
  name: yup.string().required("Nama tidak boleh kosong."),
  username: yup.string().required("Nama pengguna tidak boleh kosong."),
  email: yup
    .string()
    .required("Email tidak boleh kosong.")
    .email("Email tidak sah."),
  password: yup
    .string()
    .required("Kata sandi tidak boleh kosong.")
    .min(8, "Kata sandi minimal 8 karakter."),
  password_confirmation: yup
    .string()
    .required("Konfirmasi kata sandi tidak boleh kosong.")
    .oneOf([yup.ref("password")], "Konfirmasi kata sandi tidak cocok."),
  phone_number: yup.string().required("Nomor telepon tidak boleh kosong."),
  date_of_birth: yup.string().required("Tanggal lahir tidak boleh kosong."),
  gender: yup
    .string()
    .required("Jenis kelamin tidak boleh kosong.")
    .oneOf(["male", "female"]),
  country: yup.string().required("Negara tidak boleh kosong."),
});

const { useFieldModel, handleSubmit, errors } = useForm({
  validationSchema: schema,
  validateOnMount: false,
});

const [
  name,
  username,
  email,
  password,
  password_confirmation,
  phone_number,
  date_of_birth,
  gender,
  country,
] = useFieldModel([
  "name",
  "username",
  "email",
  "password",
  "password_confirmation",
  "phone_number",
  "date_of_birth",
  "gender",
  "country",
]);

const onSubmit = handleSubmit.withControlled((values) => {});
</script>

<template>
  <div>
    <Head>
      <Title>Buat Akun - BagiFiles</Title>
    </Head>
    <div>
      <form
        class="rounded-2xl bg-white mx-auto p-10 text-center max-w-[440px] my-[84px] dark:bg-[#1F2128]"
        @prevent.default="onSubmit"
      >
        <div class="mb-4 text-center mx-auto">
          <img
            class="inline-block"
            src="/assets/images/icons/icon-landing-success-1.svg"
            alt="landing success"
          />
        </div>
        <h3
          class="font-bold text-2xl text-gray-1100 capitalize mb-[5px] dark:text-gray-dark-1100"
        >
          Buat Akun Baru
        </h3>
        <p class="text-sm text-gray-500 mb-[30px] dark:text-gray-dark-500">
          Dengan membuat akun baru kamu bisa mengunggah dan berbagi berkas
        </p>
        <div>
          <label for="username">
            <p
              class="text-left text-sm mb-2 text-gray-1100 dark:text-gray-dark-1100"
            >
              Nama Pengguna
            </p>
          </label>
          <div class="form-control mb-[20px]">
            <div
              class="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442]"
            >
              <input
                class="input flex-1 bg-transparent focus:outline-none dark:text-gray-dark-300"
                type="text"
                placeholder="Nama Pengguna"
                name="username"
              />
            </div>
          </div>
          <label for="fullname">
            <p
              class="text-left text-sm mb-2 text-gray-1100 dark:text-gray-dark-1100"
            >
              Nama Lengkap
            </p>
          </label>
          <div class="form-control mb-[20px]">
            <div
              class="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442]"
            >
              <input
                class="input flex-1 bg-transparent focus:outline-none dark:text-gray-dark-300"
                type="text"
                placeholder="Nama Lengkap"
                name="fullname"
              />
            </div>
          </div>
          <label for="phone">
            <p
              class="text-left text-sm mb-2 text-gray-1100 dark:text-gray-dark-1100"
            >
              Nomor Telepon
            </p>
          </label>
          <div class="form-control mb-[20px]">
            <div
              class="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442]"
            >
              <input
                class="input flex-1 bg-transparent focus:outline-none dark:text-gray-dark-300"
                type="phone"
                placeholder="+628123456789"
                name="phone"
              />
            </div>
          </div>
          <label for="gender">
            <p
              class="text-left text-sm mb-2 text-gray-1100 dark:text-gray-dark-1100"
            >
              Jenis Kelamin
            </p>
          </label>
          <div class="form-control mb-[20px]">
            <select
              class="select w-full border rounded-lg font-normal py-2.5 h-fit min-h-fit border-[#E8EDF2] dark:border-[#313442] focus:outline-none pl-[13px] min-w-[252px] dark:text-gray-dark-400"
            >
              <option :disabled="true" :selected="true">Jenis Kelamin</option>
              <option>Laki-laki</option>
              <option>Perempuan</option>
            </select>
          </div>
          <label for="date_of_birth">
            <p
              class="text-left text-sm mb-2 text-gray-1100 dark:text-gray-dark-1100"
            >
              Tanggal Lahir
            </p>
          </label>
          <div class="form-control mb-[20px]">
            <div
              class="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442]"
            >
              <input
                class="input flex-1 bg-transparent focus:outline-none dark:text-gray-dark-300"
                type="date"
                name="date_of_birth"
              />
            </div>
          </div>
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
                type="email"
                placeholder="Email"
                name="email"
              />
            </div>
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
                placeholder="Kata Sandi"
                name="password"
                autocomplete="on"
              />
            </div>
          </div>
          <label for="password_confirmation">
            <p
              class="text-left text-sm mb-2 text-gray-1100 dark:text-gray-dark-1100"
            >
              Konfirmasi Kata Sandi
            </p>
          </label>
          <div class="form-control mb-[20px]">
            <div
              class="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442]"
            >
              <input
                class="input flex-1 bg-transparent focus:outline-none dark:text-gray-dark-300"
                type="password"
                placeholder="Konfirmasi Kata Sandi"
                name="password_confirmation"
                autocomplete="on"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          class="btn normal-case h-fit min-h-fit transition-all duration-300 border-4 w-full border-neutral-bg mb-[20px] py-[14px] dark:border-dark-neutral-bg"
        >
          Daftar
        </button>
        <p class="text-sm text-gray-1100 dark:text-gray-dark-1100">
          Sudah punya akun?<a class="text-color-brands" href="/auth/sign-in"
            >&nbsp;Masuk</a
          >
        </p>
      </form>
      <label
        class="btn modal-button absolute left-[-1000px]"
        for="details-modal"
        >details</label
      >
      <input class="modal-toggle" type="checkbox" id="details-modal" />
      <div class="modal">
        <div
          class="modal-box relative bg-neutral-bg scrollbar-hide dark:bg-dark-neutral-bg"
        >
          <label
            class="absolute right-2 top-2 cursor-pointer"
            for="details-modal"
            ><img
              src="assets/images/icons/icon-close-modal.svg"
              alt="close modal button"
          /></label>
          <h6
            class="text-header-6 font-semibold text-gray-500 dark:text-gray-dark-500 mb-[49px]"
          >
            Transaction Details
          </h6>
          <div class="flex items-center gap-6 mb-10">
            <div><img src="assets/images/nasa.png" alt="Nasa logo" /></div>
            <div>
              <p
                class="text-header-7 font-bold text-gray-1100 mb-2 dark:text-gray-dark-1100"
              >
                Transfer $68.25 to Nasa.,JSC
              </p>
              <p
                class="text-sm leading-4 text-gray-500 dark:text-gray-dark-500 mb-[21px]"
              >
                On 22 January 2022 At 15:39 GMT
              </p>
              <div
                class="border border-neutral bg-transparent flex items-center gap-3 px-5 w-fit rounded-[72px] py-[12px]"
              >
                <div class="rounded-full w-[10px] h-[10px] bg-green"></div>
                <p class="font-medium text-xs text-green">Active</p>
              </div>
            </div>
          </div>
          <div class="flex items-end justify-between mb-[76px]">
            <div class="flex items-start gap-x-[10px]">
              <div
                class="w-12 h-12 flex items-center justify-center rounded-full bg-[#E8EDF2] dark:bg-[#313442]"
              >
                <img
                  class="dark:invert"
                  src="assets/images/icons/icon-user.svg"
                  alt="user icon"
                />
              </div>
              <div class="flex flex-col gap-y-2">
                <p
                  class="text-sm leading-4 text-gray-1100 font-semibold dark:text-gray-dark-1100"
                >
                  Send to
                </p>
                <p
                  class="text-sm leading-4 text-gray-500 dark:text-gray-dark-500"
                >
                  Jane Cooper
                </p>
                <p
                  class="text-sm leading-4 text-gray-500 dark:text-gray-dark-500"
                >
                  E-mail: tim.jennings@example.com
                </p>
                <p
                  class="text-sm leading-4 text-gray-500 dark:text-gray-dark-500"
                >
                  Phone: +099 856 245
                </p>
              </div>
            </div>
            <div
              class="capitalize text-xs text-color-brands py-2 rounded-lg px-[13.5px] bg-[#E8EDF2] dark:bg-[#313442] max-w-[114px]"
            >
              $ 68,125.25
            </div>
          </div>
          <div class="flex items-end justify-between mb-2">
            <div class="flex items-start gap-x-[10px]">
              <div
                class="w-12 h-12 flex items-center justify-center rounded-full bg-[#E8EDF2] dark:bg-[#313442]"
              >
                <img
                  class="dark:invert"
                  src="assets/images/icons/icon-home-hashtag.svg"
                  alt="home icon"
                />
              </div>
              <div class="flex flex-col gap-y-2">
                <p
                  class="text-sm leading-4 text-gray-1100 font-semibold dark:text-gray-dark-1100"
                >
                  Bank Details
                </p>
                <p
                  class="text-sm leading-4 text-gray-500 dark:text-gray-dark-500"
                >
                  967-400 026789758
                </p>
                <p
                  class="text-sm leading-4 text-gray-500 dark:text-gray-dark-500"
                >
                  Sparkasse credit
                </p>
                <p
                  class="text-sm leading-4 text-gray-500 dark:text-gray-dark-500"
                >
                  Invoice ID: #12546872
                </p>
              </div>
            </div>
            <div
              class="capitalize text-xs text-color-brands py-2 rounded-lg px-[13.5px] bg-[#E8EDF2] dark:bg-[#313442] max-w-[114px]"
            >
              $250
            </div>
          </div>
          <div
            class="w-full bg-neutral h-[1px] dark:bg-dark-neutral-border mb-[67px]"
          ></div>
          <div class="flex items-center justify-between flex-wrap gap-3">
            <div class="flex items-center gap-[15px]">
              <button
                class="border-0 capitalize font-semibold py-4 px-8 text-gray-500 bg-neutral flex items-center gap-2 text-[12px] leading-[21px] dark:text-gray-dark-500 dark:bg-dark-neutral-border hover:opacity-80 rounded-[10px]"
              >
                <p>Print</p>
                <i>
                  <img
                    src="assets/images/icons/icon-printer.svg"
                    alt="print icon"
                /></i>
              </button>
              <button
                class="bg-transparent font-semibold flex items-center text-[12px] leading-[21px] dark:text-gray-dark-500 hover:opacity-80 rounded-[10px] gap-[10px]"
              >
                <p>Download Pdf</p>
                <i>
                  <img src="assets/images/icons/icon-down.svg" alt="down icon"
                /></i>
              </button>
            </div>
            <button
              class="border-0 capitalize font-semibold py-4 px-8 text-gray-500 bg-neutral flex items-center gap-2 text-[12px] leading-[21px] dark:text-gray-dark-500 dark:bg-dark-neutral-border hover:opacity-80 rounded-[10px]"
            >
              <p>Issue Refund</p>
              <i>
                <img
                  src="assets/images/icons/icon-refunds.svg"
                  alt="print icon"
              /></i>
            </button>
          </div>
        </div>
      </div>
      <label
        class="btn modal-button absolute left-[-1000px]"
        for="project-modal"
        >project</label
      >
      <input class="modal-toggle" type="checkbox" id="project-modal" />
      <div class="modal">
        <div
          class="modal-box relative bg-neutral-bg scrollbar-hide dark:bg-dark-neutral-bg pt-[53px]"
        >
          <label
            class="absolute right-2 top-2 cursor-pointer"
            for="project-modal"
            ><img
              src="assets/images/icons/icon-close-modal.svg"
              alt="close modal button"
          /></label>
          <div class="flex items-center justify-center flex-col">
            <h6
              class="text-header-6 font-semibold text-gray-500 text-center dark:text-gray-dark-500 mb-[38px]"
            >
              Create a New Project
            </h6>
            <div class="cursor-pointer show-add-project-2">
              <img
                class="hover:opacity-80 mb-[29px] dark:hidden"
                src="assets/images/icons/add-project.svg"
                width="92"
                height="92"
                alt="add project icon"
              /><img
                class="hidden hover:opacity-80 mb-[29px] dark:block"
                src="assets/images/icons/add-project-dark.svg"
                width="92"
                height="92"
                alt="add project icon"
              />
            </div>
            <p
              class="text-sm leading-4 text-gray-1100 dark:text-gray-dark-1100 mb-[6px]"
            >
              Blank project
            </p>
            <p
              class="text-desc text-gray-400 dark:text-gray-dark-400 mb-[61px]"
            >
              Start from scratch
            </p>
            <div class="flex items-center gap-[6px]">
              <button
                class="btn normal-case h-fit min-h-fit transition-all duration-300 border-4 bg-color-brands hover:bg-color-brands hover:border-[#B2A7FF] dark:hover:border-[#B2A7FF] border-neutral-bg w-fit dark:border-dark-neutral-bg py-[7px] px-[16.5px]"
              >
                Templates
              </button>
              <button
                class="btn normal-case h-fit min-h-fit transition-all duration-300 border-4 bg-gray-500 hover:bg-white hover:text-black hover:border-gray-300 dark:hover:border-gray-dark-300 border-neutral-bg w-fit dark:border-dark-neutral-bg py-[7px] px-[19px]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <label class="btn modal-button absolute left-[-1000px]" for="add-modal"
        >add</label
      >
      <input class="modal-toggle" type="checkbox" id="add-modal" />
      <div class="modal">
        <div
          class="modal-box relative bg-neutral-bg scrollbar-hide w-full dark:bg-dark-neutral-bg pt-[53px] max-w-[794px]"
        >
          <label class="absolute right-2 top-2 cursor-pointer" for="add-modal"
            ><img
              src="assets/images/icons/icon-close-modal.svg"
              alt="close modal button"
          /></label>
          <div class="flex items-center justify-center flex-col">
            <h6
              class="text-header-6 font-semibold text-gray-500 text-center dark:text-gray-dark-500 mb-[50px]"
            >
              Create a New Project
            </h6>
            <div
              class="w-full flex flex-col max-w-[531px] gap-[30px] mb-[60px] lg:mb-[166px]"
            >
              <div
                class="border-dashed border-2 text-center border-neutral mx-auto cursor-pointer py-[26px] dark:border-dark-neutral-border w-full max-w-[724px]"
              >
                <img
                  class="mx-auto inline-block mb-[15px]"
                  src="assets/images/icons/icon-image.svg"
                  alt="image icon"
                />
                <p class="text-sm leading-6 text-gray-500 font-normal mb-[5px]">
                  Drop your image here, or browse
                </p>
                <p class="leading-6 text-gray-400 text-[13px]">
                  JPG,PNG and GIF files are allowed
                </p>
              </div>
              <div class="w-full">
                <p
                  class="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100"
                >
                  Project Name
                </p>
                <div
                  class="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442] sm:min-w-[252px]"
                >
                  <input
                    class="input bg-transparent text-sm leading-4 text-gray-400 h-fit min-h-fit py-4 focus:outline-none pl-[13px] dark:text-gray-dark-400 placeholder:text-inherit"
                    type="text"
                    placeholder="Type name here"
                  />
                </div>
              </div>
              <div class="w-full">
                <p
                  class="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100"
                >
                  Description
                </p>
                <div
                  class="rounded-lg border border-neutral flex flex-col dark:border-dark-neutral-border p-[13px] h-[218px]"
                >
                  <div
                    class="flex items-center gap-y-4 flex-col gap-x-[22px] mb-[31px] xl:flex-row xl:gap-y-0"
                  >
                    <div class="flex items-center gap-x-[14px]">
                      <img
                        class="cursor-pointer"
                        src="assets/images/icons/icon-bold.svg"
                        alt="bold icon"
                      /><img
                        class="cursor-pointer"
                        src="assets/images/icons/icon-italicized.svg"
                        alt="italicized icon"
                      /><img
                        class="cursor-pointer"
                        src="assets/images/icons/icon-underlined.svg"
                        alt="underlined icon"
                      /><img
                        class="cursor-pointer"
                        src="assets/images/icons/icon-strikethrough.svg"
                        alt="strikethrough icon"
                      /><img
                        class="cursor-pointer"
                        src="assets/images/icons/icon-textcolor.svg"
                        alt="textcolor icon"
                      /><img
                        class="cursor-pointer"
                        src="assets/images/icons/icon-backgroundcolor.svg"
                        alt="backgroundcolor icon"
                      /><img
                        class="cursor-pointer"
                        src="assets/images/icons/icon-smile.svg"
                        alt="smile icon"
                      />
                    </div>
                    <div class="flex items-center gap-x-[14px]">
                      <div
                        class="flex items-center cursor-pointer gap-x-[1.5px]"
                      >
                        <img
                          src="assets/images/icons/icon-paragraphformat.svg"
                          alt="paragraphformat icon"
                        /><img
                          src="assets/images/icons/icon-arrow-down-triangle.svg"
                          alt="arrow down triangle icon"
                        />
                      </div>
                      <div
                        class="flex items-center cursor-pointer gap-x-[1.5px]"
                      >
                        <img
                          src="assets/images/icons/icon-align-left.svg"
                          alt="align left icon"
                        /><img
                          src="assets/images/icons/icon-arrow-down-triangle.svg"
                          alt="arrow down triangle icon"
                        />
                      </div>
                      <div
                        class="flex items-center cursor-pointer gap-x-[1.5px]"
                      >
                        <img
                          src="assets/images/icons/icon-ordered-list.svg"
                          alt="ordered list icon"
                        /><img
                          src="assets/images/icons/icon-arrow-down-triangle.svg"
                          alt="arrow down triangle icon"
                        />
                      </div>
                      <div
                        class="flex items-center cursor-pointer gap-x-[1.5px]"
                      >
                        <img
                          src="assets/images/icons/icon-unordered-list.svg"
                          alt="unordered list icon"
                        /><img
                          src="assets/images/icons/icon-arrow-down-triangle.svg"
                          alt="arrow down triangle icon"
                        />
                      </div>
                      <img
                        class="cursor-pointer"
                        src="assets/images/icons/icon-indent.svg"
                        alt="indent icon"
                      /><img
                        class="cursor-pointer opacity-40"
                        src="assets/images/icons/icon-indent.svg"
                        alt="outdent icon"
                      />
                    </div>
                    <div class="flex items-center gap-x-[14px]">
                      <img
                        class="cursor-pointer"
                        src="assets/images/icons/icon-insert-image.svg"
                        alt="insert image icon"
                      /><img
                        class="cursor-pointer"
                        src="assets/images/icons/icon-insert-link.svg"
                        alt="insert link icon"
                      /><img
                        class="cursor-pointer"
                        src="assets/images/icons/icon-insert-file.svg"
                        alt="insert-file icon"
                      /><img
                        class="cursor-pointer"
                        src="assets/images/icons/icon-insert-video.svg"
                        alt="insert video icon"
                      /><img
                        class="cursor-pointer opacity-40"
                        src="assets/images/icons/icon-undo.svg"
                        alt="undo icon"
                      /><img
                        class="cursor-pointer opacity-40"
                        src="assets/images/icons/icon-redo.svg"
                        alt="redo icon"
                      />
                    </div>
                  </div>
                  <textarea
                    class="textarea w-full p-0 text-gray-400 resize-none rounded-none bg-transparent flex-1 focus:outline-none dark:text-gray-dark-400 placeholder:text-inherit"
                    placeholder="Type description here"
                  ></textarea>
                </div>
              </div>
              <div class="w-full">
                <p
                  class="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100"
                >
                  Category
                </p>
                <div
                  class="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442] sm:min-w-[252px]"
                >
                  <input
                    class="input bg-transparent text-sm leading-4 text-gray-400 h-fit min-h-fit py-4 focus:outline-none pl-[13px] dark:text-gray-dark-400 placeholder:text-inherit"
                    type="text"
                    placeholder="Design system"
                  />
                </div>
              </div>
              <div class="w-full">
                <p
                  class="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100"
                >
                  Priority
                </p>
                <div
                  class="input-group border rounded-lg border-[#E8EDF2] dark:border-[#313442] sm:min-w-[252px]"
                >
                  <input
                    class="input bg-transparent text-sm leading-4 text-gray-400 h-fit min-h-fit py-4 focus:outline-none pl-[13px] dark:text-gray-dark-400 placeholder:text-inherit"
                    type="text"
                    placeholder="Urgent"
                  />
                </div>
              </div>
              <div class="w-full">
                <p
                  class="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100"
                >
                  Tag
                </p>
                <div
                  class="border bg-neutral-bg border-neutral dark:bg-dark-neutral-bg dark:border-dark-neutral-border rounded-lg p-[15px] mt-[10px] min-h-[107px]"
                >
                  <div class="flex flex-wrap gap-[10px]">
                    <div
                      class="flex items-center py-1 px-2 gap-x-[5px] mb-[10px] bg-[#E8EDF2] dark:bg-[#313442] rounded-[5px]"
                    >
                      <span class="text-xs text-gray-400">smartwatch</span
                      ><img
                        class="cursor-pointer"
                        src="assets/images/icons/icon-close.svg"
                        alt="close icon"
                      />
                    </div>
                    <div
                      class="flex items-center py-1 px-2 gap-x-[5px] mb-[10px] bg-[#E8EDF2] dark:bg-[#313442] rounded-[5px]"
                    >
                      <span class="text-xs text-gray-400">Apple</span
                      ><img
                        class="cursor-pointer"
                        src="assets/images/icons/icon-close.svg"
                        alt="close icon"
                      />
                    </div>
                    <div
                      class="flex items-center py-1 px-2 gap-x-[5px] mb-[10px] bg-[#E8EDF2] dark:bg-[#313442] rounded-[5px]"
                    >
                      <span class="text-xs text-gray-400">Watch</span
                      ><img
                        class="cursor-pointer"
                        src="assets/images/icons/icon-close.svg"
                        alt="close icon"
                      />
                    </div>
                    <div
                      class="flex items-center py-1 px-2 gap-x-[5px] mb-[10px] bg-[#E8EDF2] dark:bg-[#313442] rounded-[5px]"
                    >
                      <span class="text-xs text-gray-400">smartphone</span
                      ><img
                        class="cursor-pointer"
                        src="assets/images/icons/icon-close.svg"
                        alt="close icon"
                      />
                    </div>
                    <div
                      class="flex items-center py-1 px-2 gap-x-[5px] mb-[10px] bg-[#E8EDF2] dark:bg-[#313442] rounded-[5px]"
                    >
                      <span class="text-xs text-gray-400">iPhone14 max</span
                      ><img
                        class="cursor-pointer"
                        src="assets/images/icons/icon-close.svg"
                        alt="close icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <label class="btn modal-button absolute left-[-1000px]" for="share-modal"
        >share</label
      >
      <input class="modal-toggle" type="checkbox" id="share-modal" />
      <div class="modal">
        <div
          class="modal-box relative bg-neutral-bg scrollbar-hide w-full dark:bg-dark-neutral-bg pt-[53px] max-w-[738px] pr-[31px]"
        >
          <label class="absolute right-2 top-2 cursor-pointer" for="share-modal"
            ><img
              src="assets/images/icons/icon-close-modal.svg"
              alt="close modal button"
          /></label>
          <div class="flex items-center justify-center flex-col">
            <h6
              class="text-header-6 font-semibold text-gray-500 text-center dark:text-gray-dark-500 mb-[53px]"
            >
              Share Duplicate of Creative requests
            </h6>
            <div
              class="w-full bg-neutral h-[1px] dark:bg-dark-neutral-border mb-10"
            ></div>
            <div class="w-full mb-[65px]">
              <p
                class="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100"
              >
                Invite link
              </p>
              <div
                class="flex items-center justify-between rounded-md bg-neutral py-[11px] px-[10px] dark:bg-dark-neutral-border"
              >
                <p
                  class="text-sm leading-4 text-gray-400 dark:text-gray-dark-400"
                >
                  foxy.com/ZmRzYSBmZHMgc2RmIHNkYWZzZ
                </p>
                <div class="flex items-center text-blue gap-[6px]">
                  <img
                    src="assets/images/icons/Icon-link.svg"
                    alt="link icon"
                  />
                  <p class="text-desc">Copy link</p>
                </div>
              </div>
            </div>
            <div class="w-full mb-[24px]">
              <p
                class="text-gray-1100 text-base leading-4 font-medium capitalize mb-[10px] dark:text-gray-dark-1100"
              >
                Invite with email
              </p>
              <div class="flex items-center gap-5">
                <input
                  class="bg-transparent text-sm leading-4 text-gray-400 border border-neutral flex-1 rounded-md focus:outline-none p-[10px] dark:text-gray-dark-400 placeholder:text-inherit dark:border-dark-neutral-border"
                  type="text"
                  placeholder="Add project members by name or email"
                />
                <button
                  class="btn normal-case h-fit min-h-fit transition-all duration-300 border-4 bg-color-brands hover:bg-color-brands hover:border-[#B2A7FF] dark:hover:border-[#B2A7FF] border-neutral-bg dark:border-dark-neutral-bg py-[11px] px-[23px]"
                >
                  Invite
                </button>
              </div>
            </div>
            <div class="w-full flex items-center justify-between mb-[30px]">
              <div class="flex items-center gap-3">
                <a
                  class="block rounded-full border-neutral overflow-hidden border-[1.4px] dark:border-gray-dark-100 w-9 h-9 border-none"
                  href="seller-details.html"
                  ><img
                    class="w-full h-full object-cover"
                    src="assets/images/avatar-layouts-1.png"
                    alt="user avatar"
                /></a>
                <p
                  class="text-sm leading-4 text-gray-400 dark:text-gray-dark-400"
                >
                  Theresa Webb
                </p>
              </div>
              <p
                class="text-sm leading-4 text-gray-400 dark:text-gray-dark-400"
              >
                Owner
              </p>
            </div>
            <div
              class="w-full bg-neutral h-[1px] dark:bg-dark-neutral-border mb-[35px]"
            ></div>
            <div class="w-full mb-[42px]">
              <p
                class="text-subtitle font-medium text-gray-1100 mb-8 dark:text-gray-dark-1100"
              >
                Members
              </p>
              <div class="flex flex-col items-center gap-6 w-full">
                <div class="flex items-center justify-between w-full">
                  <div class="flex items-center gap-3">
                    <a
                      class="block rounded-full border-neutral overflow-hidden border-[1.4px] dark:border-gray-dark-100 w-9 h-9 border-none"
                      href="seller-details.html"
                      ><img
                        class="w-full h-full object-cover"
                        src="assets/images/avatar-layouts-2.png"
                        alt="user avatar"
                    /></a>
                    <div>
                      <p
                        class="text-normal text-gray-1100 mb-[2px] dark:text-gray-dark-1100"
                      >
                        Bessie Cooper
                      </p>
                      <p
                        class="text-desc text-gray-400 dark:text-gray-dark-400"
                      >
                        binhan628@gmail.com
                      </p>
                    </div>
                  </div>
                  <select
                    class="select text-gray-500 pl-1 font-normal h-fit min-h-fit dark:text-gray-dark-500 focus:outline-0 select-caret"
                  >
                    <option>Can Edit</option>
                    <option>Can View</option>
                  </select>
                </div>
                <div class="flex items-center justify-between w-full">
                  <div class="flex items-center gap-3">
                    <a
                      class="block rounded-full border-neutral overflow-hidden border-[1.4px] dark:border-gray-dark-100 w-9 h-9 border-none"
                      href="seller-details.html"
                      ><img
                        class="w-full h-full object-cover"
                        src="assets/images/avatar-layouts-3.png"
                        alt="user avatar"
                    /></a>
                    <div>
                      <p
                        class="text-normal text-gray-1100 mb-[2px] dark:text-gray-dark-1100"
                      >
                        Cameron Williamson
                      </p>
                      <p
                        class="text-desc text-gray-400 dark:text-gray-dark-400"
                      >
                        trungkienspktnd@gamail.com
                      </p>
                    </div>
                  </div>
                  <select
                    class="select text-gray-500 pl-1 font-normal h-fit min-h-fit dark:text-gray-dark-500 focus:outline-0 select-caret"
                  >
                    <option>Can Edit</option>
                    <option>Can View</option>
                  </select>
                </div>
                <div class="flex items-center justify-between w-full">
                  <div class="flex items-center gap-3">
                    <a
                      class="block rounded-full border-neutral overflow-hidden border-[1.4px] dark:border-gray-dark-100 w-9 h-9 border-none"
                      href="seller-details.html"
                      ><img
                        class="w-full h-full object-cover"
                        src="assets/images/avatar-layouts-4.png"
                        alt="user avatar"
                    /></a>
                    <div>
                      <p
                        class="text-normal text-gray-1100 mb-[2px] dark:text-gray-dark-1100"
                      >
                        Jacob Jones
                      </p>
                      <p
                        class="text-desc text-gray-400 dark:text-gray-dark-400"
                      >
                        manhhachkt08@gmail.com
                      </p>
                    </div>
                  </div>
                  <select
                    class="select text-gray-500 pl-1 font-normal h-fit min-h-fit dark:text-gray-dark-500 focus:outline-0 select-caret"
                  >
                    <option>Can Edit</option>
                    <option>Can View</option>
                  </select>
                </div>
                <div class="flex items-center justify-between w-full">
                  <div class="flex items-center gap-3">
                    <a
                      class="block rounded-full border-neutral overflow-hidden border-[1.4px] dark:border-gray-dark-100 w-9 h-9 border-none"
                      href="seller-details.html"
                      ><img
                        class="w-full h-full object-cover"
                        src="assets/images/avatar-layouts-5.png"
                        alt="user avatar"
                    /></a>
                    <div>
                      <p
                        class="text-normal text-gray-1100 mb-[2px] dark:text-gray-dark-1100"
                      >
                        Arlene McCoy
                      </p>
                      <p
                        class="text-desc text-gray-400 dark:text-gray-dark-400"
                      >
                        tienlapspktnd@gmail.com
                      </p>
                    </div>
                  </div>
                  <select
                    class="select text-gray-500 pl-1 font-normal h-fit min-h-fit dark:text-gray-dark-500 focus:outline-0 select-caret"
                  >
                    <option>Can Edit</option>
                    <option>Can View</option>
                  </select>
                </div>
                <div class="flex items-center justify-between w-full">
                  <div class="flex items-center gap-3">
                    <a
                      class="block rounded-full border-neutral overflow-hidden border-[1.4px] dark:border-gray-dark-100 w-9 h-9 border-none"
                      href="seller-details.html"
                      ><img
                        class="w-full h-full object-cover"
                        src="assets/images/avatar-layouts-1.png"
                        alt="user avatar"
                    /></a>
                    <div>
                      <p
                        class="text-normal text-gray-1100 mb-[2px] dark:text-gray-dark-1100"
                      >
                        Brooklyn Simmons
                      </p>
                      <p
                        class="text-desc text-gray-400 dark:text-gray-dark-400"
                      >
                        tranthuy.nute@gmail.com
                      </p>
                    </div>
                  </div>
                  <select
                    class="select text-gray-500 pl-1 font-normal h-fit min-h-fit dark:text-gray-dark-500 focus:outline-0 select-caret"
                  >
                    <option>Can Edit</option>
                    <option>Can View</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <label class="btn modal-button absolute left-[-1000px]" for="mail-modal"
        >mail</label
      >
      <input class="modal-toggle" type="checkbox" id="mail-modal" />
      <div class="modal">
        <div
          class="modal-box relative bg-neutral-bg scrollbar-hide w-full dark:bg-dark-neutral-bg pt-[38px] max-w-[650px] pl-[45px]"
        >
          <label class="absolute right-2 top-2 cursor-pointer" for="mail-modal"
            ><img
              src="assets/images/icons/icon-close-modal.svg"
              alt="close modal button"
          /></label>
          <div class="flex items-center justify-center flex-col">
            <h6
              class="w-full text-header-6 font-semibold text-gray-500 dark:text-gray-dark-500 mb-[39px]"
            >
              New Mesage
            </h6>
            <div class="flex items-center gap-4 flex-col w-full">
              <div
                class="flex items-center rounded-lg border border-neutral justify-between w-full flex-wrap gap-3 py-[13px] px-[10px] dark:border-dark-neutral-border"
              >
                <div class="flex items-center">
                  <p
                    class="text-sm leading-4 text-gray-400 dark:text-gray-dark-400 pr-5"
                  >
                    To:
                  </p>
                  <div class="flex items-center flex-wrap gap-[5px]">
                    <div
                      class="flex items-center rounded gap-[5px] py-[6px] pl-[10px] pr-[5px] bg-neutral dark:bg-dark-neutral-border"
                    >
                      <img
                        class="rounded-full w-4 h-4"
                        src="assets/images/seller-avatar-2.png"
                        alt="user avatar"
                      />
                      <p
                        class="font-medium text-gray-400 text-[10px] leading-[15px] dark:text-gray-dark-400"
                      >
                        Steven Job
                      </p>
                      <svg
                        class="fill-gray-400 cursor-pointer dark:fill-gray-dark-400"
                        width="16"
                        height="16"
                        viewbox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.20003 8.00001L4.80003 10.4L5.60003 11.2L8.00002 8.80001L10.4 11.2L11.2 10.4L8.80002 8.00001L11.2 5.60001L10.4 4.80001L8.00002 7.20001L5.6 4.79999L4.8 5.59999L7.20003 8.00001Z"
                        ></path>
                      </svg>
                    </div>
                    <div
                      class="flex items-center rounded gap-[5px] py-[6px] pl-[10px] pr-[5px] bg-neutral dark:bg-dark-neutral-border"
                    >
                      <img
                        class="rounded-full w-4 h-4"
                        src="assets/images/seller-avatar-3.png"
                        alt="user avatar"
                      />
                      <p
                        class="font-medium text-gray-400 text-[10px] leading-[15px] dark:text-gray-dark-400"
                      >
                        Hailen
                      </p>
                      <svg
                        class="fill-gray-400 cursor-pointer dark:fill-gray-dark-400"
                        width="16"
                        height="16"
                        viewbox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.20003 8.00001L4.80003 10.4L5.60003 11.2L8.00002 8.80001L10.4 11.2L11.2 10.4L8.80002 8.00001L11.2 5.60001L10.4 4.80001L8.00002 7.20001L5.6 4.79999L4.8 5.59999L7.20003 8.00001Z"
                        ></path>
                      </svg>
                    </div>
                    <div
                      class="flex items-center rounded gap-[5px] py-[6px] pl-[10px] pr-[5px] bg-neutral dark:bg-dark-neutral-border"
                    >
                      <img
                        class="rounded-full w-4 h-4"
                        src="assets/images/seller-avatar-4.png"
                        alt="user avatar"
                      />
                      <p
                        class="font-medium text-gray-400 text-[10px] leading-[15px] dark:text-gray-dark-400"
                      >
                        Azumi Rose
                      </p>
                      <svg
                        class="fill-gray-400 cursor-pointer dark:fill-gray-dark-400"
                        width="16"
                        height="16"
                        viewbox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.20003 8.00001L4.80003 10.4L5.60003 11.2L8.00002 8.80001L10.4 11.2L11.2 10.4L8.80002 8.00001L11.2 5.60001L10.4 4.80001L8.00002 7.20001L5.6 4.79999L4.8 5.59999L7.20003 8.00001Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="flex items-center gap-[6px]">
                  <p
                    class="font-medium text-gray-400 cursor-pointer text-[10px] leading-[15px] dark:text-gray-dark-400 hover:text-color-brands dark:hover:text-color-brands"
                  >
                    Cc
                  </p>
                  <p
                    class="font-medium text-gray-400 cursor-pointer text-[10px] leading-[15px] dark:text-gray-dark-400 hover:text-color-brands dark:hover:text-color-brands"
                  >
                    Bcc
                  </p>
                </div>
              </div>
              <div
                class="rounded-lg border border-neutral justify-between w-full py-[16px] px-[13px] dark:border-dark-neutral-border"
              >
                <input
                  class="input bg-transparent text-sm leading-4 text-gray-400 p-0 w-full h-4 rounded-none focus:outline-none dark:text-gray-dark-400 placeholder:text-inherit"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div
                class="rounded-lg border border-neutral flex flex-col dark:border-dark-neutral-border p-[13px] h-[262px] w-full"
              >
                <div
                  class="flex items-center gap-y-4 flex-col gap-x-[22px] mb-[31px] xl:flex-row xl:gap-y-0"
                >
                  <div class="flex items-center gap-x-[14px]">
                    <img
                      class="cursor-pointer"
                      src="assets/images/icons/icon-bold.svg"
                      alt="bold icon"
                    /><img
                      class="cursor-pointer"
                      src="assets/images/icons/icon-italicized.svg"
                      alt="italicized icon"
                    /><img
                      class="cursor-pointer"
                      src="assets/images/icons/icon-underlined.svg"
                      alt="underlined icon"
                    /><img
                      class="cursor-pointer"
                      src="assets/images/icons/icon-strikethrough.svg"
                      alt="strikethrough icon"
                    /><img
                      class="cursor-pointer"
                      src="assets/images/icons/icon-textcolor.svg"
                      alt="textcolor icon"
                    /><img
                      class="cursor-pointer"
                      src="assets/images/icons/icon-backgroundcolor.svg"
                      alt="backgroundcolor icon"
                    /><img
                      class="cursor-pointer"
                      src="assets/images/icons/icon-smile.svg"
                      alt="smile icon"
                    />
                  </div>
                  <div class="flex items-center gap-x-[14px]">
                    <div class="flex items-center cursor-pointer gap-x-[1.5px]">
                      <img
                        src="assets/images/icons/icon-paragraphformat.svg"
                        alt="paragraphformat icon"
                      /><img
                        src="assets/images/icons/icon-arrow-down-triangle.svg"
                        alt="arrow down triangle icon"
                      />
                    </div>
                    <div class="flex items-center cursor-pointer gap-x-[1.5px]">
                      <img
                        src="assets/images/icons/icon-align-left.svg"
                        alt="align left icon"
                      /><img
                        src="assets/images/icons/icon-arrow-down-triangle.svg"
                        alt="arrow down triangle icon"
                      />
                    </div>
                    <div class="flex items-center cursor-pointer gap-x-[1.5px]">
                      <img
                        src="assets/images/icons/icon-ordered-list.svg"
                        alt="ordered list icon"
                      /><img
                        src="assets/images/icons/icon-arrow-down-triangle.svg"
                        alt="arrow down triangle icon"
                      />
                    </div>
                    <div class="flex items-center cursor-pointer gap-x-[1.5px]">
                      <img
                        src="assets/images/icons/icon-unordered-list.svg"
                        alt="unordered list icon"
                      /><img
                        src="assets/images/icons/icon-arrow-down-triangle.svg"
                        alt="arrow down triangle icon"
                      />
                    </div>
                    <img
                      class="cursor-pointer"
                      src="assets/images/icons/icon-indent.svg"
                      alt="indent icon"
                    /><img
                      class="cursor-pointer opacity-40"
                      src="assets/images/icons/icon-indent.svg"
                      alt="outdent icon"
                    />
                  </div>
                  <div class="flex items-center gap-x-[14px]">
                    <img
                      class="cursor-pointer"
                      src="assets/images/icons/icon-insert-image.svg"
                      alt="insert image icon"
                    /><img
                      class="cursor-pointer"
                      src="assets/images/icons/icon-insert-link.svg"
                      alt="insert link icon"
                    /><img
                      class="cursor-pointer"
                      src="assets/images/icons/icon-insert-file.svg"
                      alt="insert-file icon"
                    /><img
                      class="cursor-pointer"
                      src="assets/images/icons/icon-insert-video.svg"
                      alt="insert video icon"
                    /><img
                      class="cursor-pointer opacity-40"
                      src="assets/images/icons/icon-undo.svg"
                      alt="undo icon"
                    /><img
                      class="cursor-pointer opacity-40"
                      src="assets/images/icons/icon-redo.svg"
                      alt="redo icon"
                    />
                  </div>
                </div>
                <textarea
                  class="textarea w-full p-0 text-gray-400 resize-none rounded-none bg-transparent flex-1 focus:outline-none dark:text-gray-dark-400 placeholder:text-inherit"
                  placeholder="Content here"
                ></textarea>
              </div>
              <div class="flex items-center w-full gap-[15px]">
                <button
                  class="btn normal-case h-fit min-h-fit transition-all duration-300 border-4 bg-color-brands hover:bg-color-brands hover:border-[#B2A7FF] dark:hover:border-[#B2A7FF] border-neutral-bg font-medium dark:border-dark-neutral-bg py-[7px] px-[24px] text-[12px] leading-[18px]"
                >
                  Send
                </button>
                <button
                  class="btn normal-case h-fit min-h-fit transition-all duration-300 border-4 border-neutral-bg bg-gray-200 font-medium text-gray-500 dark:border-dark-neutral-bg py-[7px] px-[17px] dark:bg-gray-dark-200 text-[12px] leading-[18px] dark:text-gray-dark-500 hover:bg-gray-200 dark:hover:bg-gray-dark-200 hover:border-gray-300 dark:hover:border-gray-dark-300"
                >
                  Save Darft
                </button>
                <p class="text-desc text-gray-400 dark:text-gray-dark-400">
                  Schedule
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
