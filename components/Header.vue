<template>
  <nav class="bg-white shadow">
    <div class="container mx-auto px-6 py-3">
      <div class="md:flex md:items-center md:justify-between">
        <div class="flex justify-between items-center">
          <div class="text-xl font-semibold text-gray-700">
            <!-- logo -->
            <img src="../assets/images/logo.png" alt="" style="width: 200px" />
          </div>

          <!-- Mobile menu button -->
          <div class="flex md:hidden">
            <button
              type="button"
              class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div class="hidden -mx-4 md:flex md:items-center">
          <a
            v-for="item in list"
            :key="item"
            href="#"
            class="block mx-4 mt-2 md:mt-0 text-sm text-gray-600 capitalize hover:text-blue-800 font-semibold"
            >{{ item }}</a
          >
          <!-- <a
            href="#"
            class="block mx-4 mt-2 md:mt-0 text-sm text-gray-600 capitalize hover:text-blue-800 font-semibold"
            >portfolio</a
          >
          <a
            href="#"
            class="block mx-4 mt-2 md:mt-0 text-sm text-gray-600 capitalize hover:text-blue-800 font-semibold"
            >Contact us</a
          > -->
        </div>
        <!-- <a
            href="#"
            class="block mx-4 mt-2 md:mt-0 text-sm text-gray-600 capitalize hover:text-blue-800 font-semibold"
            >English</a
          > -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      list: ["about us", "portfolio", "Contact us"],
    };
  },
  method() {
    // handleClick: () => {
    //   this.props.class =
    // };
  },
};
</script>
