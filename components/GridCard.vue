<template>
  <div class="py-12 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2
          class="text-base text-indigo-600 font-semibold tracking-wide uppercase"
        >
          Our Services
        </h2>
      </div>

      <div class="mt-12">
        <dl
          class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
        >
          <div class="flex" v-for="item in list" :key="item.title">
            <div class="ml-8">
              <dt class="text-xl font-medium text-gray-900">
                {{ item.title }}
              </dt>
              <dd class="mt-4 leading-8 text-base text-gray-600">
                {{ item.content }}
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridCard",
  data() {
    return {
      list: [
        {
          title: "Custom Softwar",
          content:
            "Meet the different software needs of major companies throug professional software customization processes",
        },
        {
          title: "APP development",
          content:
            "Mobile office OA, social communication, children's education, business platform, information management and other mobile applications",
        },
        {
          title: "Outsourcing",
          content:
            "App development, smart hardware development, 020 platform development, e-commerce platform development, big data system development, etc.",
        },
        {
          title: "O2O platform development",
          content:
            "Taxi software. Major O2O platforms such as external takeaway, hydropower and e-commerce platforms, and on-site service platforms",
        },
        {
          title: "Website system development",
          content:
            "With rich experience in website system development and innovative level of creativity, customer-centric development concept",
        },
        {
          title: "Intelligent hardware development",
          content:
            "Smart water cup, smart bracelet, smart daily necessities, smart home, smart community, etc.",
        },
      ],
    };
  },
};
</script>

<style>
</style>