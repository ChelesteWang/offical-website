<template>
  <div class="flex justify-center">
    <div class="pc-only hidden md:block" style="max-width: 768px">
      <h1 style="font-size: 48px">{{ $t("about.title") }}</h1>
      <br />
      <h2 style="font-size: 24px">
        <p>{{ $t("about.content") }}</p>
        <p>{{ $t("about.service") }}</p>
        <p>{{ $t("about.detail") }}</p>
      </h2>
      <br />
      <no-ssr placeholder="Loading...">
        <carousel-3d
          :controls-visible="true"
          :clickable="false"
          :autoplay="true"
        >
          <slide :index="0" class="empty">
            <img src="../assets/images/product/au.jpeg" />
            <figcaption>
              {{ $t("about.products.au") }}
            </figcaption>
          </slide>
          <slide :index="1" class="empty">
            <a href="https://www.ptepot.com" target="_blank">
              <img src="../assets/images/product/ptepot.png" />
            </a>
            <figcaption>
              {{ $t("about.products.pte") }}
            </figcaption>
          </slide>
          <slide :index="2" class="empty">
            <img src="../assets/images/product/Safee.png" />
            <figcaption>
              {{ $t("about.products.safee") }}
            </figcaption>
          </slide>
          <slide :index="3" class="empty">
            <a href="https://www.ebatte.com" target="_blank">
              <img src="../assets/images/product/ebatte.png" />
            </a>
            <figcaption>
              {{ $t("about.products.ebatte") }}
            </figcaption>
          </slide>
          <slide :index="4" class="empty">
            <img src="../assets/images/product/coding.jpeg" />
            <figcaption>
              {{ $t("about.products.coding") }}
            </figcaption>
          </slide>
          <slide :index="5" class="empty">
            <a
              href="https://mp.weixin.qq.com/s/6YkoPMqIaS206Ze0tuWIkQ"
              target="_blank"
            >
              <img src="../assets/images/product/human.png" />
            </a>
            <figcaption>
              {{ $t("about.products.human") }}
            </figcaption>
          </slide>
        </carousel-3d>
      </no-ssr>
      <br />
      <h2 style="font-size: 24px">
        <p>{{ $t("about.mvp") }}</p>
      </h2>
    </div>
    <div class="mobile-only md:hidden" style="color: #718096; width: 80%">
      <h1 style="text-align: center; font-weight: 400; font-size: 20px">
        {{ $t("about.title") }}
      </h1>
      <h2 style="text-align: center; margin-top: 20px">
        {{ $t("about.content") }}
      </h2>
      <p style="text-align: center; margin-top: 20px">
        {{ $t("about.service") }}
      </p>
      <p style="text-align: center; margin-top: 20px">
        {{ $t("about.detail") }}
      </p>
      <no-ssr placeholder="Loading...">
        <carousel-3d
          :controls-visible="true"
          :clickable="false"
          :autoplay="true"
        >
          <slide :index="0" class="empty">
            <img src="../assets/images/product/au.jpeg" />
            <figcaption>
              {{ $t("about.products.au") }}
            </figcaption>
          </slide>
          <slide :index="1" class="empty">
            <a href="https://www.ptepot.com" target="_blank">
              <img src="../assets/images/product/ptepot.png" />
            </a>
            <figcaption>
              {{ $t("about.products.pte") }}
            </figcaption>
          </slide>
          <slide :index="2" class="empty">
            <img src="../assets/images/product/Safee.png" />
            <figcaption>
              {{ $t("about.products.safee") }}
            </figcaption>
          </slide>
          <slide :index="3" class="empty">
            <a href="https://www.ebatte.com" target="_blank">
              <img src="../assets/images/product/ebatte.png" />
            </a>
            <figcaption>
              {{ $t("about.products.ebatte") }}
            </figcaption>
          </slide>
          <slide :index="4" class="empty">
            <img src="../assets/images/product/coding.jpeg" />
            <figcaption>
              {{ $t("about.products.coding") }}
            </figcaption>
          </slide>
          <slide :index="5" class="empty">
            <a
              href="https://mp.weixin.qq.com/s/6YkoPMqIaS206Ze0tuWIkQ"
              target="_blank"
            >
              <img src="../assets/images/product/human.png" />
            </a>
            <figcaption>
              {{ $t("about.products.human") }}
            </figcaption>
          </slide>
        </carousel-3d>
      </no-ssr>
    </div>
    <div
      style="width:540px;position:relative;left:100px;"
      class="hidden -mx-2 md:flex"
    >
      <iframe
        src="https://modao.cc/app/0d959208210c78c5545d0e41daaf4114be6a8542/embed"
        width="515"
        height="900"
        allowTransparency="true"
        frameborder="0"
        style="transform: translateY(-150px) scale(0.6)"
      ></iframe>
      <h1 class="info">
        <div>
          <svg
            t="1610283163118"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1098"
            width="50"
            height="50"
            style="position: relative; left: 30px"
          >
            <path
              d="M510.06 112h-0.578a37.81 37.81 0 0 0-21.442 7.042l-0.364 0.263 0.105-0.067a45.582 45.582 0 0 0-6.93 5.486l-0.598 0.587-270.946 270.62c-17.743 17.721-17.743 46.456 0 64.178l0.536 0.526c17.78 17.19 46.142 17.015 63.705-0.526l198.597-198.36v612.384c0 20.914 16.974 37.867 37.908 37.867h5.309c20.645-0.34 37.28-17.162 37.28-37.867V261.748l198.598 198.36c17.74 17.72 46.5 17.72 64.241 0 17.743-17.72 17.744-46.455 0.002-64.177L544.515 125.289l-0.575-0.564a45.577 45.577 0 0 0-6.257-5.045l-0.569-0.375 0.104 0.076A37.78 37.78 0 0 0 514.731 112h-4.671z"
              p-id="1099"
              fill="#2c2c2c"
            ></path>
          </svg>
        </div>
        <p style="text-align: center; width:100px">{{ $t("about.click") }}</p>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
};
</script>

<style>
.info {
  position: relative;
  left: -278px;
  top: 550px;
  font-size: 24px;
  font-weight: bold;
}

.empty {
  border: none;
  background: none;
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 15px;
  min-width: 100%;
  box-sizing: border-box;
}
</style>
