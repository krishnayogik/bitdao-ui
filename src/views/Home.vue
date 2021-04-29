<template>
  <div class="bitDao-home">
    <nav class="bitDao-navbar">
      <div class="bitDao-nav-content">
        <div class="bitDao-logo">
          <img src="@/assets/bitdao_logo.png" />
        </div>
        <ul class="bitDao-menu-list">
          <div class="icon cancel-btn" @click="handleCancelButtonClick">
            <i class="fa fa-times"></i>
          </div>
          <li>
            <a href="#home" @click="handleCancelButtonClick">Home</a>
          </li>
          <li>
            <a href="#roadMap" @click="handleCancelButtonClick">RoadMap</a>
          </li>
          <li>
            <a href="#team" @click="handleCancelButtonClick">Our Team</a>
          </li>
        </ul>
        <div class="icon menu-btn" @click="handleMenuButtonClick">
          <i class="fa fa-bars"></i>
        </div>
      </div>
    </nav>
    <div class="bitDao-content">
      <BitDaoLandingSectionParticles></BitDaoLandingSectionParticles>
      <BitDaoInfo></BitDaoInfo>
      <BitDaoFeatures></BitDaoFeatures>
      <BitDaoSolutions></BitDaoSolutions>
      <BitDaoRoadMap></BitDaoRoadMap>
      <BitDaoTeam></BitDaoTeam>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import BitDaoLandingSectionParticles from "@/components/BitDaoLandingSectionParticles/BitDaoLandingSectionParticles.vue";
import BitDaoInfo from "@/components/BitDaoInfo/BitDaoInfo.vue";
import BitDaoTeam from "@/components/BitDaoTeam/BitDaoTeam.vue";
import BitDaoSolutions from "@/components/BitDaoSolutions/BitDaoSolutions.vue";
import BitDaoRoadMap from "@/components/BitDaoRoadMap/BitDaoRoadMap.vue";
import BitDaoFeatures from "@/components/BitDaoFeatures/BitDaoFeatures.vue";

@Component({
  components: {
    BitDaoLandingSectionParticles,
    BitDaoInfo,
    BitDaoTeam,
    BitDaoSolutions,
    BitDaoFeatures,
    BitDaoRoadMap,
  },
})
export default class Home extends Vue {
  public async mounted(): Promise<void> {
    window.onscroll = () => {
      const navbar = document.querySelector(".bitDao-navbar") as HTMLElement;
      window.scrollY > 20
        ? navbar.classList.add("sticky")
        : navbar.classList.remove("sticky");
    };
  }
  protected handleMenuButtonClick(): void {
    const body = document.querySelector("body") as HTMLElement;
    const navbar = document.querySelector(".bitDao-navbar") as HTMLElement;
    const menuBtn = document.querySelector(".menu-btn") as HTMLElement;
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");
  }
  protected handleCancelButtonClick(): void {
    const body = document.querySelector("body") as HTMLElement;
    const navbar = document.querySelector(".bitDao-navbar") as HTMLElement;
    const menuBtn = document.querySelector(".menu-btn") as HTMLElement;
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
  }
}
</script>

<style scoped lang="less" src="./Home.less"></style>
<style lang="less" src="./animate.less"></style>
